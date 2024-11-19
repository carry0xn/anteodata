import React from "react"

const DropDownProfile = ({ onClose }) => (
  <div className="dropDownProfile">
    <ul>
      <li>Datos de la Cuenta del usuario</li>
      <li>Cambio de Contraseña</li>
      <li>...</li>
    </ul>
    <button onClick={() => onClose(true)}>Aceptar</button>
    <button onClick={() => onClose(false)}>Cancelar</button>
  </div>
)

export default DropDownProfile
