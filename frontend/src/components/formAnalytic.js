import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import './formAnalytic.css'

import ResultadosTabla from "./resultadoTabla";
import Plots     from "./plots";


// Funcion NavbarMarvel
function FormAnalytic () {
    const [archivo, setArchivo] = useState()
    const [review, setReview] = useState('')
    const [resultadoArchivo, setResultadoArchivo] = useState([])
    const [resultadoTexto, setResultadoTexto] = useState({reviews: [], sentimientos: []})

    function handleFileChange(event) {
        setArchivo(event.target.files[0])
      }
    
      function handleTextChange(event) {
        setReview(event.target.value)
      }
    
    const enviarTexto = (event) => {
        event.preventDefault()
        console.log(review, resultadoTexto)
        prediccionTexto();
    }

    const enviarArchivo = (event) => {
        event.preventDefault()
        console.log(archivo, resultadoArchivo)
        prediccionArchivo();
    }
    async function prediccionArchivo() {

        const url = 'http://localhost:8000/predict';
        const formData = new FormData();
        formData.append('file', archivo);
        formData.append('fileName', archivo.name);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        axios.post(url, formData, config).then((response) => {
          console.log(response.data);   setResultadoArchivo(JSON.parse(response.data));
        }); 
    }

    async function prediccionTexto() {

        const url = 'http://localhost:8000/predictText';
        const data = { 'review_es' : review };
        axios.post(url, data).then((response) => {
          console.log(response.data);   setResultadoTexto((prevResultados) => ({
            reviews: prevResultados.reviews.concat(response.data.review),
            sentimientos: prevResultados.sentimientos.concat(response.data.result),
          })); });
    }
    return (
        <div>
            <div className="jumbotron"  style={{backgroundColor: '#e1e2e1'}}>
                <div className="col 1 border">
                    <Form onSubmit={enviarTexto}>
                        <Form.Group className="mt-3">
                            <Form.Label><b>Analizar una reseña</b></Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el texto de tu reseña aqui" id="review" onChange={handleTextChange}/>
                        </Form.Group>
                       <Button className="btn btn-danger" type="submit">
                            Enviar
                        </Button>   
                    </Form>
                    <Form onSubmit={enviarArchivo}>
                        <Form.Group className="mt-3">
                            <Form.Label><b>Analizar multiples reseñas</b></Form.Label>
                            <Form.Control type="file" text id="archivo" onChange={handleFileChange}/>
                        </Form.Group>
                        <Button className="btn btn-danger" type="submit">
                            Enviar
                        </Button>   
                    </Form>
                </div>
            </div> 
            <br></br>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="texto-tab" data-toggle="tab" href="#texto" role="tab" aria-controls="texto" aria-selected="true">Resultado texto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="false">Resultado Archivo</a>
                    </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="texto" role="tabpanel" aria-labelledby="texto-tab"> {resultadoTexto.reviews.length ? <ResultadosTabla resultados={resultadoTexto} /> : null}</div>
                <div class="tab-pane fade" id="file" role="tabpanel" aria-labelledby="file-tab"> {resultadoArchivo.length ? <Plots resultados={resultadoArchivo} /> :null}</div>
            </div>
            <br></br>
            <br></br>
        </div>

    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default FormAnalytic;