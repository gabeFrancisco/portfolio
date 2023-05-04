import React from 'react'
import Title from './Title'

export default function Loading(){
    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img src="../../public/assets/favicon.png" className='animate-ping logo'/>
            {/* <div style={{marginTop: '3rem'}}>Carregando</div> */}
        </div>
    )
}