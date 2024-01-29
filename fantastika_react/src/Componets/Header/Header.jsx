import React from "react";
import LogoFanta from "../Header/img/patinha.png"
import LogoInsta from "../Header/img/logo_insta.png"
import LogoYt from "../Header/img/logo_yt.png"
import LogoWpp from "../Header/img/logo_wpp.png"


function Header(){
    return(
        <div>
            <img src={LogoFanta} alt="logo da Fantastika, uma patinha"/>
            <h1>Fantastika</h1>
            <img src={LogoInsta} alt="logo do Instagram"/>
            <img src={LogoYt} alt="logo do YouTube"/>
            <img src={LogoWpp}alt="logo do WhatsApp"/>
        </div>
    )
}

export default Header;