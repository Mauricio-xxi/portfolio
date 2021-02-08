import React from 'react'
import mainImage from '../assets/images/mainImage.jpg'

export const Presentation = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap-reverse',
                justifyContent: 'space-around',
                backgroundColor: '#ececec',
                padding: '1rem',
            }}
        >
            <div
                style={{
                    width: '40vw',
                    height: '80vh',
                    padding: '1rem',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        height: '80%',
                        width: '80%',
                        backgroundColor: '#121212',
                        position: 'absolute',
                    }}
                ></div>
                <div
                    style={{
                        height: '80%',
                        width: '80%',
                        position: 'absolute',
                        top: '17%',
                        left: '20%',
                        backgroundImage: `url(${mainImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
            <div
                style={{
                    width: '40vw',
                    height: '80vh',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
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
