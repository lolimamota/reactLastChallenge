import React from "react";
import Americanas from "../Footer/img/logo_ame.png";
import Havaianas from "../Footer/img/logo_hava.png"
import LogoInsta from "../Header/img/logo_insta.png"
import LogoYt from "../Header/img/logo_yt.png"
import LogoWpp from "../Header/img/logo_wpp.png"
import LogoFanta from "./img/logo_fanta.png"

function Footer() {
    return (
        <>
        <div>
            <img src={Americanas} alt="Logo da Loja Americanas" />
            <img src={Havaianas} alt="Logo da Loja Havaianas" />
        </div>
        <section>
            <img src={LogoFanta} alt="Logo da Fantastika, uma patinha e o nome" />
            <div>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/its_anephilim/" target="_blank">
                        <img src={LogoInsta} alt="Logo do Instagram" /></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/' target="_blank">
                        <img src={LogoYt} alt="Logo do YouTube" /></a>
                    </li>
                    <li>
                        <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
                        <img src={LogoWpp} alt="Logo do WhatsApp" /></a>
                    </li>
                </ul>
            </div>
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
        </section>
        </>
    )
}

export default Footer;