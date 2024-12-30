import { twMerge } from "tailwind-merge"

export const HeroStars = ({ children, size, rotation, spinDuration, shouldSpin = false, shouldOrbit = false }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{animationDuration : spinDuration}}>
        <div className=' flex justify-start items-start' style={{ width: `${size}px`, height: `${size}px`, transform: `rotate(${rotation}deg)` }}>
         <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{animationDuration : '6s'}}>
          <div className=" inline-flex " style={{ transform: `rotate(${rotation * -1}deg)` }}>
            {children}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
