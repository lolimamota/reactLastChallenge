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

            <a href="https://www.instagram.com/its_anephilim/">
            <img src={LogoInsta} alt="logo do Instagram"/>
            </a> 

            <a href="https://www.youtube.com/" target="_blank">
            <img src={LogoYt} alt="logo do YouTube"/>
            </a>

            <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
            <img src={LogoWpp}alt="logo do WhatsApp"/>
            </a>
        </div>
    )
}

export default Header;