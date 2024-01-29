import React from "react";
import Americanas from "../Footer/img/logo_ame.png";
import Havaianas from "../Footer/img/logo_hava.png"

function Footer(){
    return(
        <>
        <img src={Americanas} alt="Logo da Loja Americanas"/>
        <img src={Havaianas} alt="Logo da Loja Havaianas"/>
        <div>
            <h2>Atendimento</h2>
            <ul>
                <li>Chat virtual</li>
                <li>Whatsapp</li>
                <li>Telefone</li>
                <li>Email</li>
            </ul>
            <h2>Sobre</h2>
            <ul>
                <li>Nosso trabalho</li>
                <li>Infraestrutura</li>
                <li>Nossas Unidades</li>
                <li>Especialistas</li>
            </ul>
            <h2>Unidades</h2>
            <ul>
            <li>Clinica RJ</li>
            <li>Clinica SP</li>
            <li>Clinica ES</li>
            <li>Clinica SC</li>
            </ul>
        </div>
        </>
    )
}

export default Footer;