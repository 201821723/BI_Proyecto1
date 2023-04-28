import React from "react";

// Funcion Analtytic
function Header () {
    return (
        
        <div className="row">
            <div className="col">
            <center>
                <img src="./popcorn.png" alt="popcorn2" style={{width:'100px',height:'100px'}}/>
            </center>
            </div>
            <div className="col-6">
            <center>
                <h1 style={{color:'#FEC20C',padding:'20px'}}>Analisis reseñas de peliculas</h1>
            </center>
            </div>
            <div className="col">
            <center>
                <img src="./popcorn.png" alt="popcorn2"style={{width:'100px',height:'100px'}}/>
            </center>
            </div>
      </div>
    );
}

// Exportar funcion Analtytic para ser visible en otros archivos
export default Header;

