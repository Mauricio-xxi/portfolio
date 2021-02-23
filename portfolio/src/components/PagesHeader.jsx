import React from 'react'

export const PagesHeader = ({ name }) => {
    return (
        <>
            <div className={'App-header'} style={{ minHeight: '30vh' }}>
                <h1 style={{ color: '#fcee3d' }}>{name}</h1>
            </div>
        </>
    )
}
