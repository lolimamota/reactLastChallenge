import React from "react";
import styled from 'styled-components';
import Americanas from "../Footer/img/logo_ame.png";
import Havaianas from "../Footer/img/logo_hava.png";
import LogoInsta from "../Header/img/logo_insta.png";
import LogoYt from "../Header/img/logo_yt.png";
import LogoWpp from "../Header/img/logo_wpp.png";
import LogoFanta from "./img/logo_fanta.png";

const Display = styled.ul
`display: flex;
justify-content: center;
align-itens: center;
list-style:none;`;

const Details = styled.li
`list-style:none;`;



function Footer() {
    return (
        <>
        <div >
            <img src={Americanas} alt="Logo da Loja Americanas" />
            <img src={Havaianas} alt="Logo da Loja Havaianas" />
        </div>
        <section>
            <img src={LogoFanta} alt="Logo da Fantastika, uma patinha e o nome" />
            <div>
                <Display>
                    <Details>
                        <a href="https://www.instagram.com/its_anephilim/" target="_blank">
                        <img src={LogoInsta} alt="Logo do Instagram" /></a>
                    </Details>
                    <Details>
                        <a href='https://www.youtube.com/' target="_blank">
                        <img src={LogoYt} alt="Logo do YouTube" /></a>
                    </Details>
                    <Details>
                        <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
                        <img src={LogoWpp} alt="Logo do WhatsApp" /></a>
                    </Details>
                </Display>
            </div>
            <Display>
                <h2>Atendimento</h2>
                <ul>
                    <Details>Chat virtual</Details>
                    <Details>Whatsapp</Details>
                    <Details>Telefone</Details>
                    <Details>Email</Details>
                </ul>
                <h2>Sobre</h2>
                <ul>
                    <Details>Nosso trabalho</Details>
                    <Details>Infraestrutura</Details>
                    <Details>Nossas Unidades</Details>
                    <Details>Especialistas</Details>
                </ul>
                <h2>Unidades</h2>
                <ul>
                    <Details>Clinica RJ</Details>
                    <Details>Clinica SP</Details>
                    <Details>Clinica ES</Details>
                    <Details>Clinica SC</Details>
                </ul>
            </Display>
        </section>
        </>
    )
}

export default Footer;

