import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="page-header" style={{background: 'darkred', padding:'20px'}}>
      <Header />
    </div>
    <div style={{padding:'40px'}}>
      <Main />
    </div>
    <Footer/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

