import React from "react";
import Americanas from "../Footer/img/logo_ame.png";
import Havaianas from "../Footer/img/logo_hava.png"

function Footer(){
    return(
        <>
        <img src={Americanas} alt="Logo da Loja Americanas"/>
        <img src={Havaianas} alt="Logo da Loja Havaianas"/>
        <ul>Atendimento</ul>
        <ul>Sobre</ul>
        <ul>Unidades</ul>
        </>
    )
}

export default Footer;