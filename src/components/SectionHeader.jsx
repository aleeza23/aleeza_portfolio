import React from 'react'

export const SectionHeader = ({eyebrow, title, description}) => {
  return (
    <>
     <div className="flex justify-center items-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-serif mt-6 md:mt-5">{title}</h2>
      <p className="text-center mx-auto md:text-lg lg:text-xl text-white/60 mt-4 md:mt-5 max-w-md ">{description}</p>
    </>
  )
}
