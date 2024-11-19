import React, { useState } from "react";
import User from "../img/user.png";
import LogOut from "../img/log_out.png";
import Settings from "../img/settings.png";
import Logo from "../img/image005.png";
import FloatingBoxProfile from "./DropDownProfile";
import FloatingBoxSettings from "./DropDownSettings";
import FloatingBoxLogOut from "./DropDownLogOut";

//Estados de cada logo
const Header = ({ onClose }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isLogOutOpen, setIsLogOutOpen] = useState(false)

//Configuracion del "click" de cada uno de los logos
  const toggleProfile = () => {
    setIsProfileOpen(true) //al clickear se abre
    setIsSettingsOpen(false)// se cierran los demas para que no se abra mas de uno
    setIsLogOutOpen(false)
  }

  const toggleSettings = () => {
    setIsSettingsOpen(true)
    setIsProfileOpen(false)
    setIsLogOutOpen(false)
  }

  const toggleLogOut = () => {
    setIsLogOutOpen(true)
    setIsProfileOpen(false)
    setIsSettingsOpen(false)
  }

  //La unica manera de que se cierre es que se aprete Aceptar o Cancelar
    const handleProfileClose = (isAccepted) => {
    if (isAccepted) {
    }
    setIsProfileOpen(false)
  }

  const handleSettingsClose = (isAccepted) => {
    if (isAccepted) {
    }
    setIsSettingsOpen(false)
  }

  const handleLogOutClose = (isAccepted) => {
    if (isAccepted) {
    }
    setIsLogOutOpen(false)
  }

  return (
    <header className="header">
      <img src={Logo} alt="Logo Cliente" className="logo-cliente" />

      <div className="header-icons">
        <img
          src={User}
          alt="Usuario"
          className="icon"
          onClick = {toggleProfile}
        />
        {isProfileOpen && <FloatingBoxProfile onClose={handleProfileClose} />}

        <img
          src={Settings}
          alt="Preferencias"
          className="icon"
          onClick={toggleSettings}
        />
        {isSettingsOpen && <FloatingBoxSettings onClose={handleSettingsClose} />}

        <img
          src={LogOut}
          alt="Salir"
          className="icon"
          onClick={toggleLogOut}
        />
        {isLogOutOpen && <FloatingBoxLogOut onClose={handleLogOutClose} />}
      </div>
    </header>
  )
}

export default Header
