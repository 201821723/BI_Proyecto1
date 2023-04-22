import React from "react";

// Funcion ResultAnalytic
function ResultAnalytic (props) {
    
    return (
        <div>
            {props.resultadoElegibilidad !== "0" ? 
                <div>
                    <div className="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70"><path d="M18.9 35.7 7.7 24.5 9.85 22.35 18.9 31.4 38.1 12.2 40.25 14.35Z"/></svg>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <h4 className="text-center">El texto coincide</h4>            
                    </div>
                </div> :
                <div>
                    <div className="row d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="70"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/></svg>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <h4 className="text-center">El texto no coicide</h4>            
                    </div>
                </div>
            }
        </div>
    )
}


// Exportar funcion ResultAnalytic para ser visible en otros archivos
export default ResultAnalytic;