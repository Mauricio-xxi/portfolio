import React from 'react'
import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
    return (
        <>
            <div className={'App-header'} style={{ minHeight: '30vh' }}>
                <h1 style={{ color: '#fcee3d' }}>Contact</h1>
            </div>
            <div style={{ overflow: 'auto', padding: '1rem' }}>
                <ContactForm />
            </div>
        </>
    )
}
