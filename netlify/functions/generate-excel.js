/* =================================================================
 * FUNCIÓN SERVERLESS: generate-excel.js (VERSIÓN FINAL DEFINITIVA)
 * Creado por: Juan Manuel Caicedo Oliva
 * Perfeccionado por: Gemini de Google
 * -----------------------------------------------------------------
 * Tarea:
 * 1. Reestructura completamente la creación de cabeceras.
 * 2. Implementa fórmulas de promedio robustas y precisas.
 * 3. Aplica validación de datos estricta.
 * 4. Ancho de columnas optimizado para máxima legibilidad.
 * 5. AJUSTE FINALÍSIMO: Fusión de celdas en la cabecera de datos.
 * ================================================================= */

const ExcelJS = require('exceljs');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: "Método no permitido. Solo se aceptan solicitudes POST." }) };
    }

    try {
        const data = JSON.parse(event.body);
        const {
            docente, colegio, anio, grado, seccion, area,
            periodo, calificacion, alumnos, competencies
        } = data;

        if (!alumnos || !Array.isArray(alumnos) || !competencies || !Array.isArray(competencies) || !calificacion) {
            return { statusCode: 400, body: JSON.stringify({ error: "Faltan datos críticos: lista de alumnos, competencias o tipo de calificación." }) };
        }

        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Juan Manuel Caicedo & Gemini';
        workbook.created = new Date();
        
        const colors = {
            primary: 'FF0D47A1',
            header: 'FF1E88E5',
            lightFill: 'FFE3F2FD'
        };

        const numPeriodos = periodo === 'Bimestre' ? 4 : 3;
        const nombrePeriodo = periodo === 'Bimestre' ? 'BIMESTRE' : 'TRIMESTRE';

        for (let i = 1; i <= numPeriodos; i++) {
            const sheet = workbook.addWorksheet(`${nombrePeriodo} ${i}`, {
                views: [{ state: 'frozen', xSplit: 2, ySplit: 5 }]
            });

            // --- Título Principal ---
            sheet.mergeCells('A1:Z1');
            const titleCell = sheet.getCell('A1');
            titleCell.value = 'REGISTRO AUXILIAR DE EVALUACIÓN';
            titleCell.font = { name: 'Calibri', size: 16, bold: true, color: { argb: 'FFFFFFFF' } };
            titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.primary } };
            titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
            sheet.getRow(1).height = 30;
            
            // --- AJUSTE DE PRECISIÓN: Encabezado de Información con Celdas Fusionadas (Fila 2) ---
            const infoRow = sheet.getRow(2);
            infoRow.height = 20;
            const infoFont = { name: 'Calibri', size: 9, bold: true };
            const infoAlign = { vertical: 'middle', horizontal: 'left', indent: 1 };

            // DOCENTE
            sheet.mergeCells('A2:D2');
            const docenteCell = sheet.getCell('A2');
            docenteCell.value = `DOCENTE: ${docente.toUpperCase()}`;
            docenteCell.font = infoFont;
            docenteCell.alignment = infoAlign;

            // I.E.
            sheet.mergeCells('E2:I2');
            const ieCell = sheet.getCell('E2');
            ieCell.value = `I.E: ${colegio.toUpperCase()}`;
            ieCell.font = infoFont;
            ieCell.alignment = infoAlign;

            // ÁREA
            sheet.mergeCells('J2:L2');
            const areaCell = sheet.getCell('J2');
            areaCell.value = `ÁREA: ${area.toUpperCase()}`;
            areaCell.font = infoFont;
            areaCell.alignment = infoAlign;

            // GRADO Y SECCIÓN
            sheet.mergeCells('M2:O2');
            const gradoCell = sheet.getCell('M2');
            gradoCell.value = `GRADO: ${grado} "${seccion.toUpperCase()}"`;
            gradoCell.font = infoFont;
            gradoCell.alignment = infoAlign;

            // AÑO
            sheet.mergeCells('P2:Q2');
            const anioCell = sheet.getCell('P2');
            anioCell.value = `AÑO: ${anio}`;
            anioCell.font = infoFont;
            anioCell.alignment = infoAlign;
            
            // Fila vacía para espaciar
            sheet.addRow([]);

            // --- Estructura de Cabeceras de Calificaciones ---
            const headerRow = sheet.getRow(4);
            const subHeaderRow = sheet.getRow(5);
            headerRow.height = 20;
            subHeaderRow.height = 75;

            sheet.mergeCells('A4:A5');
            sheet.mergeCells('B4:B5');
            sheet.getCell('A4').value = 'N°';
            sheet.getCell('B4').value = 'APELLIDOS Y NOMBRES';

            const competenceBlocksInfo = [];
            let currentColumn = 3;

            competencies.forEach(comp => {
                const capacityCount = comp.capacities.length;
                if (capacityCount === 0) return;

                comp.capacities.forEach((cap, index) => {
                    subHeaderRow.getCell(currentColumn + index).value = cap;
                });
                
                subHeaderRow.getCell(currentColumn + capacityCount).value = 'Prom.';

                sheet.mergeCells(headerRow.number, currentColumn, headerRow.number, currentColumn + capacityCount);
                headerRow.getCell(currentColumn).value = comp.name;

                competenceBlocksInfo.push({
                    startCol: currentColumn,
                    endCol: currentColumn + capacityCount - 1,
                    promCol: currentColumn + capacityCount,
                });
                currentColumn += capacityCount + 1;
            });

            const finalPromCol = currentColumn;
            sheet.mergeCells(headerRow.number, finalPromCol, subHeaderRow.number, finalPromCol);
            headerRow.getCell(finalPromCol).value = 'PROMEDIO PERIODO';
            
            sheet.eachRow((row, rowNumber) => {
                if (rowNumber >= 4 && rowNumber <= 5) {
                    row.eachCell({ includeEmpty: true }, cell => {
                        cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FFFFFFFF' } };
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.header } };
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    });
                }
            });

            const startDataRow = 6;
            alumnos.forEach((alumno, index) => {
                const rowIndex = startDataRow + index;
                const row = sheet.addRow([index + 1, alumno]);
                row.getCell(2).alignment = { horizontal: 'left', vertical: 'middle' };

                let competencePromAddresses = []; 
                
                competenceBlocksInfo.forEach(block => {
                    const startAddr = sheet.getCell(rowIndex, block.startCol).address;
                    const endAddr = sheet.getCell(rowIndex, block.endCol).address;
                    const promCell = sheet.getCell(rowIndex, block.promCol);
                    competencePromAddresses.push(promCell.address);

                    if (calificacion === 'Cualitativo') {
                        promCell.value = { formula: `IFERROR(CHOOSE(ROUND(AVERAGE(IFERROR(SWITCH(${startAddr}:${endAddr}, "AD",4, "A",3, "B",2, "C",1), "")), 0), "C", "B", "A", "AD"), "")` };
                    } else {
                        promCell.value = { formula: `IFERROR(ROUND(AVERAGE(${startAddr}:${endAddr}), 0), "")` };
                    }
                });

                const finalPromCell = sheet.getCell(rowIndex, finalPromCol);
                if (calificacion === 'Cualitativo') {
                    const addresses = competencePromAddresses.join(',');
                    finalPromCell.value = { formula: `IFERROR(CHOOSE(ROUND(AVERAGE(IFERROR(SWITCH(${addresses}, "AD",4, "A",3, "B",2, "C",1), "")), 0), "C", "B", "A", "AD"), "")` };
                } else {
                    finalPromCell.value = { formula: `IFERROR(ROUND(AVERAGE(${competencePromAddresses.join(',')}), 0), "")` };
                }
                finalPromCell.font = { bold: true };

                if ((index + 1) % 2 === 0) {
                    row.eachCell({ includeEmpty: true }, c => { if (c.value !== null) c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: colors.lightFill } } });
                }
                 row.eachCell({ includeEmpty: true }, (c, colNumber) => { 
                    c.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    if(colNumber > 2) c.alignment = { horizontal: 'center', vertical: 'middle' };
                });
            });

            let validationRule;
            if (calificacion === 'Cualitativo') {
                validationRule = { type: 'list', allowBlank: true, formulae: ['"AD,A,B,C"'], showErrorMessage: true, errorStyle: 'stop', errorTitle: 'Valor no válido', error: 'Por favor, seleccione un valor de la lista: AD, A, B o C.' };
            } else if (calificacion === 'Vigesimal') {
                validationRule = { type: 'whole', operator: 'between', allowBlank: true, formulae: [0, 20], showErrorMessage: true, errorStyle: 'stop', errorTitle: 'Valor no válido', error: 'La nota debe ser un número entero entre 0 y 20.' };
            } else {
                validationRule = { type: 'decimal', operator: 'between', allowBlank: true, formulae: [0, 10], showErrorMessage: true, errorStyle: 'stop', errorTitle: 'Valor no válido', error: 'La nota debe ser un número entre 0 y 10.' };
            }
            
            const lastStudentRow = startDataRow + alumnos.length - 1;
            if (lastStudentRow >= startDataRow) {
                competenceBlocksInfo.forEach(block => {
                    for (let col = block.startCol; col <= block.endCol; col++) {
                        sheet.dataValidations.add(sheet.getColumn(col).letter + startDataRow + ':' + sheet.getColumn(col).letter + lastStudentRow, validationRule);
                    }
                });
            }

            sheet.getColumn(1).width = 5;
            sheet.getColumn(2).width = 38;

            for (let j = 3; j <= finalPromCol; j++) {
                const isPromCol = competenceBlocksInfo.some(b => b.promCol === j) || j === finalPromCol;
                if (isPromCol) {
                    sheet.getColumn(j).width = 10;
                } else {
                    sheet.getColumn(j).width = 16;
                }
            }
        }
        
        const buffer = await workbook.xlsx.writeBuffer();
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition': `attachment; filename="Registro_Auxiliar_${area.replace(/\s/g, '_')}_${grado}.xlsx"`
            },
            body: buffer.toString('base64'),
            isBase64Encoded: true
        };

    } catch (error) {
        console.error("Error crítico en la función generate-excel:", error);
        return { statusCode: 500, body: JSON.stringify({ error: `Hubo un problema al crear el archivo Excel: ${error.message}` }) };
    }
};
