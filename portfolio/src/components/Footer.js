import React from 'react'

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
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href={'https://www.codewars.com/users/Mauricio-xxi'}>
                        Code Wars
                    </a>
                </li>
                <li>
                    <a href={'mailto:alvarocamachodavila@gmail.com'}>Mail</a>
                </li>
            </ul>
            <ul className={'copyright'}>
                <li>© Alvaro Camacho</li>
                <li>Made with love ♥</li>
            </ul>
        </div>
    )
}
