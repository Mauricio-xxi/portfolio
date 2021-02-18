import React from 'react'
import { ContactForm } from '../components/ContactForm'
import { PagesHeader } from '../components/PagesHeader'

export const Contact = () => {
    return (
        <>
            <PagesHeader name={'Contact'} />
            <div style={{ overflow: 'auto', padding: '1rem' }}>
                <ContactForm />
            </div>
        </>
    )
}
