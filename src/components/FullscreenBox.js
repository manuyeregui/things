import React from 'react'
import grid from './svg/grid.svg'

export default function FullscreenBox(props) {

    return (
        <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-mateblack to-black'>
        <div className={'min-h-screen w-screen relative flex justify-center items-center'} style={{backgroundImage: `url(${grid})`}}>
            {props.children}
        </div>
        </div>
    )
}
