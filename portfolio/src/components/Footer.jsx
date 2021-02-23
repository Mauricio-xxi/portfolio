import React from 'react'
import linkedin from "../assets/images/linkedin.svg"
import codeWars from "../assets/images/promo.svg"
import mail from "../assets/images/mail.svg"
import github from "../assets/images/github.svg"

export const Footer = () => {
    return (
        <div className={'footer'}>
            <ul className={'icons'}>
                <li>
                    <a
                        href={
                            'https://www.linkedin.com/in/alvaro-mauricio-camacho-davila/'
                        }
                    >
                        <img src={linkedin} alt={"linkedin icon"} className={"footer-icons"} />
                    </a>
                </li>
                <li>
                    <a href={'https://www.codewars.com/users/Mauricio-xxi'}>
                    <img src={codeWars} alt={"code wars icon"} className={"footer-icons"} />
                    </a>
                </li>
                <li>
                    <a href={'mailto:alvarocamachodavila@gmail.com'}>
                    <img src={mail} alt={"mail icon"} className={"footer-icons"} />
                        
                    </a>
                </li>
                <li>
                    <a href={'https://github.com/Mauricio-xxi'}>
                    <img src={github} alt={"github icon"} className={"footer-icons"} />
                        
                    </a>
                </li>
            </ul>
            <ul className={'copyright'}>
                <li>© Alvaro Camacho</li>
                <li>Made with love ♥</li>
            </ul>
        </div>
    )
}
