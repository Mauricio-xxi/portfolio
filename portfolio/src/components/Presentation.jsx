import React from 'react'
import mainImage from '../assets/images/mainImage.jpg'

export const Presentation = () => {
    return (
        <div className={'presentation-container'}>
            <div className={'presentation-image-card'}>
                <div className={'presentation-back-image'}></div>
                <div
                    className={'presentation-image'}
                    style={{
                        backgroundImage: `url(${mainImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
            <div className={'presentation-text'}>
                <h6 style={{ margin: 0 }}>who am I</h6>
                <h2
                    style={{
                        margin: 0,
                        width: 'fit-content',
                        borderBottom: '5px solid #fcee3d',
                    }}
                >
                    Hello
                </h2>
                <p>
                    I am a full stack developer and financial technical
                    developer with a great orientation to new technologies and
                    businesses, an entrepreneur who loves challenges and new
                    projects. With my startup Psychologicapp I have won prizes
                    such as Rottary scholarship and the award for disruptive
                    technology in the program "Yuzz" of the Santander group. I
                    have recently finished Ironhack's Full Stack Program.
                </p>
            </div>
        </div>
    )
}
