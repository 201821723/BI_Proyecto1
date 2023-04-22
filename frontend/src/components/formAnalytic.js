import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
/*import axios from 'axios';*/
import ResultAnalytic from './resultAnalytic';

// Funcion NavbarMarvel
function FormAnalytic () {
    const [datos, setDatos] = useState({
        review: ''
    })
    const [resultado, setResultado] = useState("")

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.id] : event.target.value,
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(datos)
        prediccionElegibilidad(datos);
    }

    async function prediccionElegibilidad(datos) {
        var url = "http://localhost:3000/predict"
        
        if (datos.review === "Prueba 1"){
            setResultado("1")
        }else{
            setResultado("0")
        }
    }
    /*
    async function prediccionElegibilidad(datos) {
        var url = "https://proyecto1-etapa2-bi.herokuapp.com/decisionTree"
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        const info = JSON.stringify({ "texts": [{"processed_study": datos.study, "processed_condition": datos.condition}]});
        axios
            .post(url, info, {headers} )
            .then((resp)=> {
               console.log(resp.data.Predict_DT[1])
               setResultado(resp.data.Predict_DT[1])
            })
            .catch((err)=> {
                console.log(err);
            }) 
    }*/

    return (
        <div className="row">
            <div className="col-7 border">
                <Form onSubmit={enviarDatos}>
                    <Form.Group className="mt-3">
                        <Form.Label><b>Reseña</b></Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el texto de tu reseña aqui" id="review" onChange={handleInputChange}/>
                    </Form.Group>
                    <Button className="bg-dark mt-3 mb-3" variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
            <div className="col-5 d-flex align-items-center border">
                <ResultAnalytic resultadoElegibilidad={resultado}/>
            </div>  
        </div> 
    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default FormAnalytic;