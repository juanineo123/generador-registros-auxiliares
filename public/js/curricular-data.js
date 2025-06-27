/* =================================================================
 * MÓDULO DE DATOS CURRICULARES (curricular-data.js)
 * Creado por: Juan Manuel Caicedo Oliva & Gemini de Google
 * Versión: 1.0
 * -----------------------------------------------------------------
 * Descripción:
 * Este archivo centraliza toda la información de competencias y
 * capacidades del CNEB de Perú. Reemplaza la necesidad de
 * consultar a una API externa o a la IA, garantizando
 * velocidad, consistencia y funcionamiento offline.
 * La estructura es: Nivel > Grado > Área > Competencias > Capacidades
 * ================================================================= */

const CNEB_DATA = {
    "Inicial": {
        "3 años": {
            "Personal Social": {
                "competencies": [
                    { "name": "Construye su identidad", "capacities": ["Se valora a sí mismo.", "Autorregula sus emociones."] },
                    { "name": "Convive y participa democráticamente en la búsqueda del bien común", "capacities": ["Interactúa con todas las personas.", "Construye normas y asume acuerdos y leyes.", "Participa en acciones que promueven el bienestar común."] }
                ]
            },
            "Psicomotriz": {
                "competencies": [
                    { "name": "Se desenvuelve de manera autónoma a través de su motricidad", "capacities": ["Comprende su cuerpo.", "Se expresa corporalmente."] }
                ]
            },
            "Comunicación": {
                "competencies": [
                    { "name": "Se comunica oralmente en su lengua materna", "capacities": ["Obtiene información del texto oral.", "Infiere e interpreta información del texto oral.", "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en su lengua materna", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto escrito.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito."] },
                    { "name": "Crea proyectos desde los lenguajes artísticos", "capacities": ["Explora y experimenta los lenguajes del arte.", "Aplica procesos creativos.", "Evalúa y socializa sus procesos y proyectos."] }
                ]
            },
            "Descubrimiento del Mundo": {
                "competencies": [
                    { "name": "Indaga mediante métodos científicos para construir sus conocimientos", "capacities": ["Problematiza situaciones para hacer indagación.", "Diseña estrategias para hacer indagación.", "Genera y registra datos o información.", "Analiza datos e información.", "Evalúa y comunica el proceso y resultado de su indagación."] }
                ]
            },
            "Matemática": {
                "competencies": [
                    { "name": "Resuelve problemas de cantidad", "capacities": ["Traduce cantidades a expresiones numéricas.", "Comunica su comprensión sobre los números y las operaciones.", "Usa estrategias y procedimientos de estimación y cálculo."] },
                    { "name": "Resuelve problemas de forma, movimiento y localización", "capacities": ["Modela objetos con formas geométricas y sus transformaciones.", "Comunica su comprensión sobre las formas y relaciones geométricas.", "Usa estrategias y procedimientos para orientarse en el espacio."] }
                ]
            }
        },
        // Los datos de 4 y 5 años son similares a 3 años, se pueden expandir si es necesario.
        "4 años": {
            // Replicar y ajustar datos de 3 años
            "Personal Social": {
                "competencies": [
                    { "name": "Construye su identidad", "capacities": ["Se valora a sí mismo.", "Autorregula sus emociones."] },
                    { "name": "Convive y participa democráticamente en la búsqueda del bien común", "capacities": ["Interactúa con todas las personas.", "Construye normas y asume acuerdos y leyes.", "Participa en acciones que promueven el bienestar común."] }
                ]
            },
            "Psicomotriz": {
                "competencies": [
                    { "name": "Se desenvuelve de manera autónoma a través de su motricidad", "capacities": ["Comprende su cuerpo.", "Se expresa corporalmente."] }
                ]
            },
            "Comunicación": {
                "competencies": [
                    { "name": "Se comunica oralmente en su lengua materna", "capacities": ["Obtiene información del texto oral.", "Infiere e interpreta información del texto oral.", "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en su lengua materna", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto escrito.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito."] },
                    { "name": "Crea proyectos desde los lenguajes artísticos", "capacities": ["Explora y experimenta los lenguajes del arte.", "Aplica procesos creativos.", "Evalúa y socializa sus procesos y proyectos."] }
                ]
            },
             "Descubrimiento del Mundo": {
                "competencies": [
                    { "name": "Indaga mediante métodos científicos para construir sus conocimientos", "capacities": ["Problematiza situaciones para hacer indagación.", "Diseña estrategias para hacer indagación.", "Genera y registra datos o información.", "Analiza datos e información.", "Evalúa y comunica el proceso y resultado de su indagación."] }
                ]
            },
            "Matemática": {
                "competencies": [
                    { "name": "Resuelve problemas de cantidad", "capacities": ["Traduce cantidades a expresiones numéricas.", "Comunica su comprensión sobre los números y las operaciones.", "Usa estrategias y procedimientos de estimación y cálculo."] },
                    { "name": "Resuelve problemas de forma, movimiento y localización", "capacities": ["Modela objetos con formas geométricas y sus transformaciones.", "Comunica su comprensión sobre las formas y relaciones geométricas.", "Usa estrategias y procedimientos para orientarse en el espacio."] }
                ]
            }
        },
        "5 años": {
             // Replicar y ajustar datos de 3 años
            "Personal Social": {
                "competencies": [
                    { "name": "Construye su identidad", "capacities": ["Se valora a sí mismo.", "Autorregula sus emociones."] },
                    { "name": "Convive y participa democráticamente en la búsqueda del bien común", "capacities": ["Interactúa con todas las personas.", "Construye normas y asume acuerdos y leyes.", "Participa en acciones que promueven el bienestar común."] }
                ]
            },
            "Psicomotriz": {
                "competencies": [
                    { "name": "Se desenvuelve de manera autónoma a través de su motricidad", "capacities": ["Comprende su cuerpo.", "Se expresa corporalmente."] }
                ]
            },
            "Comunicación": {
                "competencies": [
                    { "name": "Se comunica oralmente en su lengua materna", "capacities": ["Obtiene información del texto oral.", "Infiere e interpreta información del texto oral.", "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en su lengua materna", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto escrito.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito."] },
                    { "name": "Crea proyectos desde los lenguajes artísticos", "capacities": ["Explora y experimenta los lenguajes del arte.", "Aplica procesos creativos.", "Evalúa y socializa sus procesos y proyectos."] }
                ]
            },
             "Descubrimiento del Mundo": {
                "competencies": [
                    { "name": "Indaga mediante métodos científicos para construir sus conocimientos", "capacities": ["Problematiza situaciones para hacer indagación.", "Diseña estrategias para hacer indagación.", "Genera y registra datos o información.", "Analiza datos e información.", "Evalúa y comunica el proceso y resultado de su indagación."] }
                ]
            },
            "Matemática": {
                "competencies": [
                    { "name": "Resuelve problemas de cantidad", "capacities": ["Traduce cantidades a expresiones numéricas.", "Comunica su comprensión sobre los números y las operaciones.", "Usa estrategias y procedimientos de estimación y cálculo."] },
                    { "name": "Resuelve problemas de forma, movimiento y localización", "capacities": ["Modela objetos con formas geométricas y sus transformaciones.", "Comunica su comprensión sobre las formas y relaciones geométricas.", "Usa estrategias y procedimientos para orientarse en el espacio."] }
                ]
            }
        }
    },
    "Primaria": {
        "1ro": {
            "Arte y Cultura": {
                "competencies": [
                    { "name": "Aprecia de manera crítica manifestaciones artístico-culturales", "capacities": ["Percibe manifestaciones artístico-culturales.", "Contextualiza manifestaciones artístico-culturales.", "Reflexiona creativa y críticamente sobre manifestaciones artístico-culturales."] },
                    { "name": "Crea proyectos desde los lenguajes artísticos", "capacities": ["Explora y experimenta los lenguajes de las artes.", "Aplica procesos creativos.", "Evalúa y comunica sus procesos y proyectos."] }
                ]
            },
            "Ciencia y Tecnología": {
                "competencies": [
                    { "name": "Indaga mediante métodos científicos para construir conocimientos", "capacities": ["Problematiza situaciones.", "Diseña estrategias para hacer indagación.", "Genera y registra datos e información.", "Analiza datos e información.", "Evalúa y comunica el proceso y resultados de su indagación."] },
                    { "name": "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo", "capacities": ["Comprende y usa conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo.", "Evalúa las implicancias del saber y del quehacer científico y tecnológico."] }
                ]
            },
            "Comunicación": {
                "competencies": [
                    { "name": "Se comunica oralmente en su lengua materna", "capacities": ["Obtiene información del texto oral.", "Infiere e interpreta información del texto oral.", "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en su lengua materna", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto.", "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."] },
                    { "name": "Escribe diversos tipos de textos en su lengua materna", "capacities": ["Adecúa el texto a la situación comunicativa.", "Organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza convenciones del lenguaje escrito de forma pertinente.", "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."] }
                ]
            },
            "Educación Física": {
                "competencies": [
                    { "name": "Se desenvuelve de manera autónoma a través de su motricidad", "capacities": ["Comprende su cuerpo.", "Se expresa corporalmente."] },
                    { "name": "Asume una vida saludable", "capacities": ["Comprende las relaciones entre la actividad física, alimentación, postura e higiene personal y del ambiente, y la salud.", "Incorpora prácticas que mejoran su calidad de vida."] },
                    { "name": "Interactúa a través de sus habilidades sociomotrices", "capacities": ["Se relaciona utilizando sus habilidades sociomotrices.", "Crea y aplica estrategias y tácticas de juego."] }
                ]
            },
            "Matemática": {
                "competencies": [
                    { "name": "Resuelve problemas de cantidad", "capacities": ["Traduce cantidades a expresiones numéricas.", "Comunica su comprensión sobre los números y las operaciones.", "Usa estrategias y procedimientos de estimación y cálculo.", "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones."] },
                    { "name": "Resuelve problemas de regularidad, equivalencia y cambio", "capacities": ["Traduce datos y condiciones a expresiones algebraicas y gráficas.", "Comunica su comprensión sobre las relaciones algebraicas.", "Usa estrategias y procedimientos para encontrar equivalencias y reglas generales.", "Argumenta afirmaciones sobre relaciones de cambio y equivalencia."] },
                    { "name": "Resuelve problemas de forma, movimiento y localización", "capacities": ["Modela objetos con formas geométricas y sus transformaciones.", "Comunica su comprensión sobre las formas y relaciones geométricas.", "Usa estrategias y procedimientos para medir y orientarse en el espacio.", "Argumenta afirmaciones sobre relaciones geométricas."] },
                    { "name": "Resuelve problemas de gestión de datos e incertidumbre", "capacities": ["Representa datos con gráficos y medidas estadísticas o probabilísticas.", "Comunica su comprensión de los conceptos estadísticos y probabilísticos.", "Usa estrategias y procedimientos para recopilar y procesar datos.", "Sustenta conclusiones o decisiones con base en la información obtenida."] }
                ]
            },
            "Personal Social": {
                 "competencies": [
                    { "name": "Construye su identidad", "capacities": ["Se valora a sí mismo.", "Autorregula sus emociones.", "Reflexiona y argumenta éticamente.", "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez."] },
                    { "name": "Convive y participa democráticamente en la búsqueda del bien común", "capacities": ["Interactúa con todas las personas.", "Construye normas y asume acuerdos y leyes.", "Maneja conflictos de manera constructiva.", "Delibera sobre asuntos públicos.", "Participa en acciones que promueven el bienestar común."] }
                ]
            },
            "Educación Religiosa": {
                 "competencies": [
                    { "name": "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas", "capacities": ["Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente.", "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa."] },
                    { "name": "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa", "capacities": ["Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa.", "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."] }
                ]
            }
            // Se puede agregar Inglés si corresponde
        },
        // Los datos de 2do a 6to son similares, se pueden expandir y ajustar.
        "2do": {}, "3ro": {}, "4to": {}, "5to": {}, "6to": {}
    },
    "Secundaria": {
        "1ro": {
            "Arte y Cultura": {
                "competencies": [
                    { "name": "Aprecia de manera crítica manifestaciones artístico-culturales", "capacities": ["Percibe manifestaciones artístico-culturales.", "Contextualiza las manifestaciones artístico-culturales.", "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales."] },
                    { "name": "Crea proyectos desde los lenguajes artísticos", "capacities": ["Explora y experimenta los lenguajes de las artes.", "Aplica procesos creativos.", "Evalúa y socializa sus procesos y proyectos."] }
                ]
            },
            "Ciencia y Tecnología": {
                "competencies": [
                    { "name": "Indaga mediante métodos científicos para construir sus conocimientos", "capacities": ["Problematiza situaciones para hacer indagación.", "Diseña estrategias para hacer indagación.", "Genera y registra datos o información.", "Analiza datos e información.", "Evalúa y comunica el proceso y resultados de su indagación."] },
                    { "name": "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo", "capacities": ["Comprende y usa conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo.", "Evalúa las implicancias del saber y del quehacer científico y tecnológico."] },
                    { "name": "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno", "capacities": ["Determina una alternativa de solución tecnológica.", "Diseña la alternativa de solución tecnológica.", "Implementa y valida la alternativa de solución tecnológica.", "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica."] }
                ]
            },
            "Ciencias Sociales": {
                "competencies": [
                    { "name": "Construye interpretaciones históricas", "capacities": ["Interpreta críticamente fuentes diversas.", "Comprende el tiempo histórico.", "Elabora explicaciones sobre procesos históricos."] },
                    { "name": "Gestiona responsablemente el espacio y el ambiente", "capacities": ["Comprende las relaciones entre los elementos naturales y sociales.", "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.", "Genera acciones para conservar el ambiente local y global."] },
                    { "name": "Gestiona responsablemente los recursos económicos", "capacities": ["Comprende las relaciones entre los elementos del sistema económico y financiero.", "Toma decisiones económicas y financieras."] }
                ]
            },
            "Desarrollo Personal, Ciudadanía y Cívica": {
                "competencies": [
                    { "name": "Construye su identidad", "capacities": ["Se valora a sí mismo.", "Autorregula sus emociones.", "Reflexiona y argumenta éticamente.", "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez."] },
                    { "name": "Convive y participa democráticamente en la búsqueda del bien común", "capacities": ["Interactúa con todas las personas.", "Construye normas y asume acuerdos y leyes.", "Maneja conflictos de manera constructiva.", "Delibera sobre asuntos públicos.", "Participa en acciones que promueven el bienestar común."] }
                ]
            },
            "Educación Física": {
                 "competencies": [
                    { "name": "Se desenvuelve de manera autónoma a través de su motricidad", "capacities": ["Comprende su cuerpo.", "Se expresa corporalmente."] },
                    { "name": "Asume una vida saludable", "capacities": ["Comprende las relaciones entre la actividad física, alimentación, postura e higiene personal y del ambiente, y la salud.", "Incorpora prácticas que mejoran su calidad de vida."] },
                    { "name": "Interactúa a través de sus habilidades sociomotrices", "capacities": ["Se relaciona utilizando sus habilidades sociomotrices.", "Crea y aplica estrategias y tácticas de juego."] }
                ]
            },
            "Educación para el Trabajo": {
                "competencies": [
                    { "name": "Gestiona proyectos de emprendimiento económico o social", "capacities": ["Crea propuestas de valor.", "Aplica habilidades técnicas.", "Trabaja cooperativamente para lograr objetivos y metas.", "Evalúa los resultados del proyecto de emprendimiento."] }
                ]
            },
            "Comunicación": {
                "competencies": [
                    { "name": "Se comunica oralmente en su lengua materna", "capacities": ["Obtiene información del texto oral.", "Infiere e interpreta información del texto oral.", "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en su lengua materna", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto.", "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."] },
                    { "name": "Escribe diversos tipos de textos en su lengua materna", "capacities": ["Adecúa el texto a la situación comunicativa.", "Organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza convenciones del lenguaje escrito de forma pertinente.", "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."] }
                ]
            },
            "Matemática": {
                "competencies": [
                    { "name": "Resuelve problemas de cantidad", "capacities": ["Traduce cantidades a expresiones numéricas.", "Comunica su comprensión sobre los números y las operaciones.", "Usa estrategias y procedimientos de estimación y cálculo.", "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones."] },
                    { "name": "Resuelve problemas de regularidad, equivalencia y cambio", "capacities": ["Traduce datos y condiciones a expresiones algebraicas y gráficas.", "Comunica su comprensión sobre las relaciones algebraicas.", "Usa estrategias y procedimientos para encontrar equivalencias y reglas generales.", "Argumenta afirmaciones sobre relaciones de cambio y equivalencia."] },
                    { "name": "Resuelve problemas de forma, movimiento y localización", "capacities": ["Modela objetos con formas geométricas y sus transformaciones.", "Comunica su comprensión sobre las formas y relaciones geométricas.", "Usa estrategias y procedimientos para medir y orientarse en el espacio.", "Argumenta afirmaciones sobre relaciones geométricas."] },
                    { "name": "Resuelve problemas de gestión de datos e incertidumbre", "capacities": ["Representa datos con gráficos y medidas estadísticas o probabilísticas.", "Comunica su comprensión de los conceptos estadísticos y probabilísticos.", "Usa estrategias y procedimientos para recopilar y procesar datos.", "Sustenta conclusiones o decisiones con base en la información obtenida."] }
                ]
            },
            "Inglés": {
                "competencies": [
                    { "name": "Se comunica oralmente en inglés como lengua extranjera", "capacities": ["Obtiene información de textos orales.", "Infiere e interpreta información de textos orales.", "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza recursos no verbales y paraverbales de forma estratégica.", "Interactúa estratégicamente con distintos interlocutores.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral."] },
                    { "name": "Lee diversos tipos de textos escritos en inglés como lengua extranjera", "capacities": ["Obtiene información del texto escrito.", "Infiere e interpreta información del texto escrito.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito."] },
                    { "name": "Escribe diversos tipos de textos en inglés como lengua extranjera", "capacities": ["Adecúa el texto a la situación comunicativa.", "Organiza y desarrolla las ideas de forma coherente y cohesionada.", "Utiliza convenciones del lenguaje escrito de forma pertinente.", "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito."] }
                ]
            },
            "Educación Religiosa": {
                 "competencies": [
                    { "name": "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas", "capacities": ["Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente.", "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa."] },
                    { "name": "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa", "capacities": ["Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa.", "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."] }
                ]
            }
        },
        // Los datos de 2do a 5to son similares, se pueden expandir y ajustar.
        "2do": {}, "3ro": {}, "4to": {}, "5to": {}
    }
};

// Se llenan los grados vacíos de primaria y secundaria replicando los del primer grado de su nivel.
// Esto es una simplificación. En una implementación real, cada grado tendría sus matices.
['Primaria', 'Secundaria'].forEach(level => {
    const grades = Object.keys(CNEB_DATA[level]);
    const sourceGradeData = CNEB_DATA[level][grades[0]];
    for (let i = 1; i < grades.length; i++) {
        CNEB_DATA[level][grades[i]] = sourceGradeData;
    }
});
