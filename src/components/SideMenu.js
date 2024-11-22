import React, { useState } from "react"
import Menu from "../img/menu.png"
import Cancel from "../img/cancel.png"
import SideMenuFijo from "./SideMenuFijo"

/*ICONOS:👤 🔧 👨‍💻 🔨 ⚙️*/

const SideMenu = () => {
  const menuStructure = [
    {
      unidad: "Unidad 1",
      icono: "🏠",
      stakeholders: [
        {
          nombre: "Stakeholder 1",
          icono: "👤",
          procesos: [
            { nombre: "Proceso 1", icono: "🔧" },
            { nombre: "Proceso 2", icono: "🛠" },
          ],
        }
      ],
    },
    {
      unidad: "Unidad 2",
      icono: "📊",
      stakeholders: [
        {
          nombre: "Stakeholder 2",
          icono: "👩‍🔬",
          procesos: [
            { nombre: "Proceso 3", icono: "🧰" },
            { nombre: "Proceso 4", icono: "🛠" },
          ],
        },
      ],
    },
  ]

  const [selectedPath, setSelectedPath] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState({})// Controla qué submenús están abiertos
  const [openStakeholders, setOpenStakeholders] = useState({}); // Controla qué submenús de stakeholders están abiertos

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (unidad, stakeholder, proceso) => {
    const path = `${unidad} / ${stakeholder || ""} / ${proceso || ""}`.trim()
    setSelectedPath(path);
  }

  const toggleSubMenu = (unidad) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [unidad]: !prev[unidad], // Alterna el estado del submenú específico
    }))
  }

  const toggleStakeholderMenu = (stakeholder) => {
    setOpenStakeholders((prev) => ({
      ...prev,
      [stakeholder]: !prev[stakeholder],
    }))
  }


  return (
    <div className="side-menu">
      {!isMenuOpen && (
        <img
          src={Menu}
          alt="Abrir menú"
          className="icon"
          onClick={toggleMenu}/>
      )}
      {isMenuOpen && (
        <div className="menu-desplegable">
          <div className="content">
            <img
              src={Cancel}
              alt="Cerrar menú"
              className="icon"
              onClick={toggleMenu}/>
          </div>
          <div className={`lista-del-menu ${isMenuOpen ? "abrir_menu" : ""}`}>
            <h1>Menú Negocios</h1>
            {/* UNIDAD SUBMENU*/}
            {menuStructure.map((unidad) => (  
            <div key={unidad.unidad}>
                <div
                  onClick={() => toggleSubMenu(unidad.unidad)}
                  className="menu-item">
                  <span>{unidad.icono}</span>
                  {unidad.unidad}
                </div>
                {openSubMenus[unidad.unidad] && (
                <div className="submenu"> 
                  {/* UNIDAD SUBMENU*/}
                  {unidad.stakeholders.map((stakeholder) => (
                    <div key={stakeholder.nombre}>
                      <div
                        onClick={() => toggleStakeholderMenu(stakeholder.nombre)}
                        className="menu-item">
                        <span>{stakeholder.icono}</span>
                        {stakeholder.nombre}
                      </div>
                    {openStakeholders[stakeholder.nombre] && (
                    <div className="submenu-stakeholder"> 
                    {/* STAKEHOLDER SUBMENU*/}
                              {stakeholder.procesos.map((proceso) => (
                                <div
                                  key={proceso.nombre}
                                  onClick={() =>
                                    handleItemClick(
                                      unidad.unidad,
                                      stakeholder.nombre,
                                      proceso.nombre
                                    )}
                                    className="menu-item">
                                    <span>{proceso.icono}</span>
                                    {proceso.nombre}
                                </div>
                            ))}
                        </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={`lista-del-menu ${isMenuOpen ? "abrir_menu" : ""}`}>
        <SideMenuFijo />
          <div>
            <h1>Ruta Seleccionada</h1>
            {selectedPath ? (
              <p>{selectedPath}</p>
            ) : (
              <p>Selecciona una opción del menú</p>
            )}
          </div>
      </div>
    </div>
  )
}

export default SideMenu

