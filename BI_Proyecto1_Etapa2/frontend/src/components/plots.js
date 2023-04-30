import React from 'react';
import Descargar from './descargaResultados';
import ResultadosTabla from './resultadoTabla';
import { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

function Plots(props) {
  const { resultados } = props;
  const [mostrarNegativos, setMostrarNegativos] = React.useState(true);
  const [mostrarPositivos, setMostrarPositivos] = React.useState(true);
  const [resultadosFiltrados, setResultadosFiltrados] = React.useState(resultados);


  const numPositive = resultados.filter(value => value.sentimiento === 'positivo').length;
  const numNegative = resultados.filter(value => value.sentimiento === 'negativo').length;
  const plotRef = useRef(null);

  const inicializarGrafico = () => {
    const myPlot = plotRef.current;
    let data = [
      {
        values: [numPositive, numNegative],
        labels: ['positivo', 'negativo'],
        marker: {
          colors: ['#00a600', '#ff4c2c']
        },
        type: 'pie',
      }
    ];
    let layout = { autosize: true, title: 'Reseñas por sentimiento', legend: {font: {size: 20}} };

    Plotly.newPlot(myPlot, data, layout, { responsive: true });

    const onLegendClick = data => {
      const label = data.label;
      if (label === 'positivo') {
        setMostrarPositivos(mostrarPositivos => !mostrarPositivos);
      } else if (label === 'negativo') {
        setMostrarNegativos(mostrarNegativos => !mostrarNegativos);
      }
    };

    myPlot.on('plotly_legendclick', onLegendClick);
  };

  React.useEffect(() => {
    inicializarGrafico();
  }, [resultados]);

  useEffect(() => {
    setResultadosFiltrados(
      resultados.filter((res) => {
        if (mostrarNegativos && mostrarPositivos) {
          return true;
        } else if (mostrarNegativos) {
          return res.sentimiento === "negativo";
        } else if (mostrarPositivos) {
          return res.sentimiento === "positivo";
        }
      })
    );
  }, [mostrarNegativos, mostrarPositivos, resultados]);

  return (

    <div>
    <h1>Resumen resultados</h1>

    <div ref={plotRef} id='myDiv'  style={{ height: '100%', width: '100%' }} />
        <Descargar resultados={resultadosFiltrados}   
        titulo = {(mostrarNegativos && mostrarPositivos)? "Descargar predicciones" : (mostrarNegativos) ? "Descargar Reseñas negativas": (mostrarPositivos) ? "Descargar Reseñas Positivas" : "No se han seleccionado reseñas"}  />
        <ResultadosTabla resultados={resultadosFiltrados} 
        titulo = {(mostrarNegativos && mostrarPositivos)? "Resultados individuales" : (mostrarNegativos) ? "Reseñas negativas":  (mostrarPositivos) ? "Reseñas Positivas" : "No se han seleccionado reseñas"} /> 
    </div>

  );
}

export default Plots;
