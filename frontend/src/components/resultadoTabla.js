import React from 'react';

function ResultadosTabla(props) {
  const { resultados } = props;

  // Función para crear una fila de la tabla de resultados
  function crearFila(res, index) {
    return (
      <tr key={res}>
        <td>{res}</td>
        <td>{resultados.result[index]}</td>
      </tr>
    );
  }

  return (
    <div>
      <h2>Resultados</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th  scope="col">Reseña</th>
            <th  scope="col">Sentimiento</th>
          </tr>
        </thead>
        <tbody>
           { resultados.review.map((texto, index) => crearFila(texto, index))}
        </tbody>
      </table>

    </div>
  );
}

export default ResultadosTabla;