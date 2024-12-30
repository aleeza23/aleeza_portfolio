import React from 'react'
import grainImage from '../assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

export const Card = ({ className, children, style }) => {
    return (<div style={style} className={twMerge("bg-gray-800 rounded-3xl p-6 md:p-8 overflow-hidden after:z-10 relative after:content[''] after:absolute after:inset-0 after:outline after:rounded-3xl after:outline-2 after:outline-white/20 after:-outline-offset-2 after:pointer-events-none ", className)}>
        <div className="absolute -z-10 opacity-5 inset-0" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        {children}
    </div>
    )
}
