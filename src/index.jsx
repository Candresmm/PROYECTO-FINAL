import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navba from './botones';
import Karusel from './imagenes';
import Cartas from './cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navba></Navba>
    <br />
    <App  nome="BIENVENIDOS AL INSTITUTO" insti=" LA MUSICA ES VIDA"  imgs="IMAGENDEMUSI.jpg"></App>
    <br />
    <App  nome="Nuestro objetivo" insti=" ayudar aquellas personas que les gusta la musica"  imgs="img3.jpg"></App>
    <br />
    <Karusel que="tocar cualquier instrumento" para="aprender de la mejor forma" name="LA MUSICA ES VIDA"></Karusel>
    
    <Cartas img="negro.jpg" poner="PAGINA ECHA POR : CARLOS ANDRES MAMANI MAMANI" escribir="gmail:carlosandres777@gmail.com"></Cartas>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
