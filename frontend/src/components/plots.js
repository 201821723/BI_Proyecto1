import React from 'react';
import Plot from 'react-plotly.js';
import Descargar from './descargaResultados';

function Plots(props) {
  const { resultados } = props;

  // Función para crear una fila de la tabla de resultados
  function graficar() {
   
    const numPositive = resultados.filter(value => value.sentimiento === 'positivo').length;
    const numNegative = resultados.filter(value => value.sentimiento === 'negativo').length;
    return(<div>
    <Plot
        data = {[
            {
            values: [numPositive, numNegative],
            labels: ['positivo', 'negativo'],
            type: 'pie',
            }
        ]}

        layout={ {autosize: true, title: 'Reseñas por sentimiento'} }
        useResizeHandler
        style={{height:"100%",width: "100%"}}
        
    />
    </div>);
  }

  return (
    <div>
        <h1>Resumen resultados</h1>
        {graficar()}
        <Descargar resultados={resultados} />
    </div>
  );
}

export default Plots;