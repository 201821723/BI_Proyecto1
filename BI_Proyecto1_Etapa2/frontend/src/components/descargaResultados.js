import React from 'react';
import { ExportToCsv } from 'export-to-csv';

function Descargar(props) {
  const { resultados, titulo ="Descargar Predicciones" } = props;
  let name = "resultados" + titulo.split(" ")[titulo.split(" ").length -1];
  // Función para crear una fila de la tabla de resultados
  function descargar() {
    const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: false,
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: false,
        headers: ['', 'review_es', 'sentimiento'], // <-- Won't work with useKeysAsHeaders present!
        filename : name
      };
     
    const csvExporter = new ExportToCsv(options);
     
    csvExporter.generateCsv(resultados);
  }

  return (
    <div>
     <button type="button" className="btn btn-secondary" onClick={descargar}>{titulo}</button>
    </div>
  );
}

export default Descargar;