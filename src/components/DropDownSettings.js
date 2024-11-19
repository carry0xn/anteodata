import React from "react"


const DropDownSettings = ({ onClose }) => (
  <div className="dropDownProfile">
    <ul>
      <li>Idioma</li>
      <li>Apariencia</li>
      <li>...</li>
    </ul>
    <button onClick={() => onClose(true)}>Aceptar</button>
    <button onClick={() => onClose(false)}>Cancelar</button>
  </div>
)

export default DropDownSettings
