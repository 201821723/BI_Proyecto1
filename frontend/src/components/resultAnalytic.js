import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

function PredictionResult({ predictionResult }) {
  const [chartData, setChartData] = useState(null);

  // Calcular la cantidad de reseñas positivas y negativas
  const numPositive = predictionResult.result.filter((r) => r === "positive").length;
  const numNegative = predictionResult.result.filter((r) => r === "negative").length;

  // Crear el objeto de datos para el gráfico
  const data = {
    labels: ["Positivas", "Negativas"],
    datasets: [
      {
        label: "Cantidad de reseñas",
        data: [numPositive, numNegative],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Resultados de la predicción</h2>
      <p>
        Total de reseñas: <strong>{predictionResult.result.length}</strong>
      </p>
      <Bar data={data} options={options} />
    </div>
  );
}

export default PredictionResult;