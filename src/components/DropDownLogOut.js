import React from "react"

const DropDownLogOut = ({ onClose }) => (
  <div className="dropDownProfile">
    <p>¿Seguro que quiere salir?</p>
    <button onClick={() => onClose(true)}>Aceptar</button>
    <button onClick={() => onClose(false)}>Cancelar</button>
  </div>
)

export default DropDownLogOut
