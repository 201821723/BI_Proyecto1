import React from "react";

// Funcion Analtytic
function Header () {
    return (
        
        <div className="row">
            <div className="col">
            <center>
                <img src="./popcorn.png" alt="popcorn2" style={{width:'80px',height:'80px'}}/>
            </center>
            </div>
            <div className="col-6">
            <center>
            <a href="#"><h1 style={{color:'#FEC20C',padding:'10px'}}>Analisis reseñas de peliculas</h1></a>
            </center>
            </div>
            <div className="col">
            <center>
                <img src="./popcorn.png" alt="popcorn2"style={{width:'80px',height:'80px'}}/>
            </center>
            </div>
      </div>
    );
}

// Exportar funcion Analtytic para ser visible en otros archivos
export default Header;

