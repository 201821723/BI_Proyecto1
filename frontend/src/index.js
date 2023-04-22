import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page-header" style={{background: 'darkred', padding:'20px'}}>
      <div className="row">
        <div className="col">
          <center>
            <img src="https://cdn-icons-png.flaticon.com/512/193/193929.png" alt="popcorn2" style={{width:'100px',height:'100px'}}/>
          </center>
        </div>
        <div className="col-6">
          <center>
            <h1 style={{color:'#FEC20C',padding:'20px'}}>Analisis reseñas de peliculas</h1>
          </center>
        </div>
        <div className="col">
          <center>
            <img src="https://cdn-icons-png.flaticon.com/512/193/193929.png" alt="popcorn2"style={{width:'100px',height:'100px'}}/>
          </center>
        </div>
      </div>
    </div>
    <div style={{padding:'40px'}}>
      <Main />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

