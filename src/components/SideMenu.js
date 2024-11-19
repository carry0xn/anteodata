import React, {useState} from "react"
import Menu from "../img/menu.png"
import Cancel from "../img/cancel.png"

const SideMenu = () => {
  // Estado para controlar si el menú lateral está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  // Estado para controlar la visibilidad del submenú
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  // Función para alternar el estado del menú lateral
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para alternar la visibilidad del submenú "Unidad de Negocio"
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen); // Cambia el estado de visibilidad

  }

  return (
    <div className="side-menu">
      
      {/* Botón para abrir el menú (solo visible si está cerrado) */}
      {!isMenuOpen && (
        <img
          src={Menu}
          alt="Abrir menú"
          className="icon"
          onClick={toggleMenu}
        />
      )}
     
      {/* Menú lateral y botón para cerrar (solo visible si el menú está abierto) */}
      {isMenuOpen && (
        <div className="menu-desplegable">
          <div className="content">
            <img
              src={Cancel}
              alt="Cerrar menú"
              className="icon"
              onClick={toggleMenu}
            />
          </div>
      <div className="lista-del-menu">
          <h1>Menú Negocios</h1>
          <ul className="lista-menu">
            <li onClick={toggleSubMenu}>
              Unidad de Negocio</li>
              <ul className={`submenu ${isSubMenuOpen ? "mostrar" : ""}`}>
                <li>Opción 1</li>
              </ul>
            
            <li>Stakeholder</li>
            <li>Proceso de Negocio</li>
          </ul>
        </div>
        </div>
      )}
    </div>
    
  )
}


export default SideMenu
