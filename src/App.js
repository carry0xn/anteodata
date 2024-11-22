import React from "react"
import SideMenu from "./components/SideMenu"
import Header from "./components/Header"
/*import Footer from "./components/Footer"*/
import './App.css'

const App = () => {


  return (
    <div className="layout">
        <SideMenu />
        <Header />
        <div className="anteodata-section">
          <div className="anteodata-header">
            <h1>El Arte de Transformar Datos en Conocimiento</h1>
            <p>Somos especialistas en <strong>gobernanza del dato</strong>. Anteodata alinea Estrategia, Gobierno, 
              IT con Negocio, implantando una Cultura de Mejora Continua para adecuar la organización al nuevo 
              paradigma <strong>Data-Driven</strong>, donde la toma de decisiones se fundamenta en el dato.</p>
          </div>
          <div className="anteodata-cards">
            <div className="card">
              <h2>Innovación radical con gestión cautelosa</h2>
              <p>Soluciones Business Intelligence Gobernadas, Proactivas, Disruptivas y No Invasivas.</p>
            </div>
            <div className="card">
              <h2>Nuestras Ventajas</h2>
              <p>Distinción en el mercado.</p>
            </div>
            <div className="card">
              <h2>Contacto</h2>
              <ul>
                <li>+34 625 19 28 79</li>
                <li>Anteodata
                  C/ José Abascal, 32, 4ºdcha<br/>
                  28003 Madrid<br/>
                  ESPAÑA</li>
                <li>infocomercial@anteodata.es</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="anteodata-section">
          <div className="anteodata-header">
            <h1>El Arte de Transformar Datos en Conocimiento</h1>
            <p>Somos especialistas en <strong>gobernanza del dato</strong>. Anteodata alinea Estrategia, Gobierno, 
              IT con Negocio, implantando una Cultura de Mejora Continua para adecuar la organización al nuevo 
              paradigma <strong>Data-Driven</strong>, donde la toma de decisiones se fundamenta en el dato.</p>
          </div>
          <div className="anteodata-cards">
            <div className="card">
              <h2>Innovación radical con gestión cautelosa</h2>
              <p>Soluciones Business Intelligence Gobernadas, Proactivas, Disruptivas y No Invasivas.</p>
            </div>
            <div className="card">
              <h2>Nuestras Ventajas</h2>
              <p>Distinción en el mercado.</p>
            </div>
            <div className="card">
              <h2>Contacto</h2>
              <ul>
                <li>+34 625 19 28 79</li>
                <li>Anteodata
                  C/ José Abascal, 32, 4ºdcha<br/>
                  28003 Madrid<br/>
                  ESPAÑA</li>
                <li>infocomercial@anteodata.es</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default App
