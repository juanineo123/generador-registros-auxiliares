/* =================================================================
 * SCRIPT PRINCIPAL DE LA APLICACIÓN (app.js) - VERSIÓN 2.0
 * Creado por: Juan Manuel Caicedo Oliva
 * Reestructurado y Potenciado por: Gemini de Google
 * -----------------------------------------------------------------
 * CAMBIOS CLAVE:
 * - Eliminada la llamada a la IA (get-competencies).
 * - Las competencias se obtienen instantáneamente del archivo local
 * 'curricular-data.js' (variable CNEB_DATA).
 * - Lógica de menús desplegables mejorada y dependiente.
 * - Añadida la funcionalidad para el botón "Generar Otro Registro".
 * ================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELECCIÓN DE ELEMENTOS DEL DOM ---
    const form = document.getElementById('main-form');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const progressSteps = document.querySelectorAll('.progress-bar .step');
    const formSteps = document.querySelectorAll('.form-step');
    const generateBtn = document.getElementById('generate-btn');
    const downloadLink = document.getElementById('download-link');
    const resetBtn = document.getElementById('reset-btn'); // Nuevo botón
    const statusMessagesContainer = document.getElementById('status-messages');

    // Campos del formulario
    const nivelSelect = document.getElementById('nivel');
    const gradoSelect = document.getElementById('grado');
    const areaSelect = document.getElementById('area');

    let currentStep = 1;

    // --- 2. FUNCIONES DEL ASISTENTE (WIZARD) ---

    const updateFormSteps = () => {
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === currentStep);
        });
        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 <= currentStep);
        });
    };

    const validateStep = (step) => {
        const inputs = [...formSteps[step - 1].querySelectorAll('input[required], select[required], textarea[required]')];
        for (const input of inputs) {
            if (!input.value || input.value.trim() === "") {
                input.classList.add('input-error');
                // Buscamos el mensaje de error existente o lo creamos
                let errorMsg = input.parentNode.querySelector('.error-message');
                if (!errorMsg) {
                    errorMsg = document.createElement('p');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'Este campo es obligatorio.';
                    input.parentNode.appendChild(errorMsg);
                }
                return false;
            } else {
                input.classList.remove('input-error');
                let errorMsg = input.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        }
        return true;
    };

    // --- 3. FUNCIONES DE LÓGICA CURRICULAR (MENÚS DINÁMICOS) ---

    const populateGrados = () => {
        const nivel = nivelSelect.value;
        gradoSelect.innerHTML = '<option value="" disabled selected>Seleccione un grado</option>';
        areaSelect.innerHTML = '<option value="" disabled selected>Primero elija un grado</option>';
        gradoSelect.disabled = true;
        areaSelect.disabled = true;

        if (nivel && CNEB_DATA[nivel]) {
            const grados = Object.keys(CNEB_DATA[nivel]);
            grados.forEach(grado => {
                const option = document.createElement('option');
                option.value = grado;
                option.textContent = grado.charAt(0).toUpperCase() + grado.slice(1);
                gradoSelect.appendChild(option);
            });
            gradoSelect.disabled = false;
        }
    };

    const populateAreas = () => {
        const nivel = nivelSelect.value;
        const grado = gradoSelect.value;
        areaSelect.innerHTML = '<option value="" disabled selected>Seleccione un área</option>';
        areaSelect.disabled = true;

        if (nivel && grado && CNEB_DATA[nivel]?.[grado]) {
            const areas = Object.keys(CNEB_DATA[nivel][grado]);
            areas.forEach(area => {
                const option = document.createElement('option');
                option.value = area;
                option.textContent = area;
                areaSelect.appendChild(option);
            });
            areaSelect.disabled = false;
        }
    };

    const showStatusMessage = (message, type = 'loading') => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `status-message ${type}`;
        let iconClass = 'fas fa-spinner fa-spin';
        if (type === 'success') iconClass = 'fas fa-check-circle';
        if (type === 'error') iconClass = 'fas fa-times-circle';
        messageDiv.innerHTML = `<i class="${iconClass}"></i> <p>${message}</p>`;
        statusMessagesContainer.appendChild(messageDiv);
    };

    const resetForm = () => {
        location.reload();
    };
    // --- 3.5 LÓGICA DE REINTENTOS PARA LA API ---
    const MAXIMOS_INTENTOS = 3;
    const ESPERA_ENTRE_INTENTOS_MS = 3000; // Un poco más de espera para la generación de archivos

    async function callApiWithRetries(url, payload, initialMessage) {
        let ultimoError = null;

        for (let intento = 1; intento <= MAXIMOS_INTENTOS; intento++) {
            try {
                // Mostramos el mensaje de estado adecuado para cada intento
                if (intento > 1) {
                    showStatusMessage(`La conexión es lenta. Reintentando... (${intento}/${MAXIMOS_INTENTOS})`, 'loading');
                } else {
                    showStatusMessage(initialMessage, 'loading');
                }

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    return response; // Éxito, devolvemos la respuesta completa
                }

                // Si hay un error de servidor temporal, lo capturamos para reintentar
                if (response.status >= 500) {
                    throw new Error(`Error de servidor temporal: ${response.status}`);
                }

                // Si es otro tipo de error (ej: 4xx), no reintentamos
                const errorData = await response.json();
                throw new Error(errorData.error || `Error de API no recuperable: ${response.status}`);

            } catch (error) {
                ultimoError = error;
                console.error(`Falló el intento #${intento}:`, error.message);
                if (intento < MAXIMOS_INTENTOS) {
                    await new Promise(resolve => setTimeout(resolve, ESPERA_ENTRE_INTENTOS_MS));
                }
            }
        }
        // Si todos los intentos fallan, lanzamos el último error
        throw ultimoError;
    }

    // --- 4. MANEJO DE EVENTOS ---

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                updateFormSteps();
            } else {
                // El mensaje de error visual ya se muestra en validateStep
                console.warn('Validación fallida en el paso:', currentStep);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
        });
    });

    nivelSelect.addEventListener('change', populateGrados);
    gradoSelect.addEventListener('change', populateAreas);
    resetBtn.addEventListener('click', resetForm); // Evento para el nuevo botón

    generateBtn.addEventListener('click', async () => {
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';
        statusMessagesContainer.innerHTML = '';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.alumnos = data.alumnos.split('\n').filter(line => line.trim() !== '');

        try {
            // --- PASO 1: Obtener Competencias (localmente) ---
            showStatusMessage('Obteniendo currículo desde la base de datos local...', 'loading');
            const { nivel, grado, area } = data;
            const curricularInfo = CNEB_DATA?.[nivel]?.[grado]?.[area];

            if (!curricularInfo || !curricularInfo.competencies) {
                throw new Error(`No se encontró data curricular para ${area} en ${grado}. Verifique 'curricular-data.js'.`);
            }

            showStatusMessage('Currículo local cargado con éxito.', 'success');

            const finalPayload = {
                ...data,
                competencies: curricularInfo.competencies
            };

            // --- PASO 2: Generar Excel usando la función con reintentos ---
            const excelResponse = await callApiWithRetries(
                '/.netlify/functions/generate-excel',
                finalPayload,
                'Construyendo el archivo de Excel...' // Mensaje inicial
            );

            // El resto de la lógica no cambia
            const blob = await excelResponse.blob();
            const url = window.URL.createObjectURL(blob);
            downloadLink.href = url;
            const fileName = `Registro_Auxiliar_${data.area.replace(/\s/g, '_')}_${data.grado}.xlsx`;
            downloadLink.setAttribute('download', fileName);

            showStatusMessage('¡Archivo Excel listo para descargar!', 'success');
            generateBtn.style.display = 'none';
            downloadLink.style.display = 'inline-flex';
            resetBtn.style.display = 'inline-flex';

        } catch (error) {
            console.error('Ha ocurrido un error en la generación tras varios intentos:', error);
            showStatusMessage(`Error: ${error.message}`, 'error');
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-cogs"></i> Reintentar Generación';
        }
    });

    // --- 5. INICIALIZACIÓN ---
    updateFormSteps();
});
