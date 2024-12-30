import { Fragment } from 'react';
import StarIcon from '../assets/icons/star.svg'

const words = [
  'Perfomant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Maintaince',
  'Search Optimized',
  'Usable',
  'Reliable'
]

const arrayLength = ['', '']

export const TapeSection = () => {
  return <div className='py-16 lg:py-24 overflow-x-clip'>
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3" >
      <div className="flex" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <div className='flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]'>
          {arrayLength.map((_, index) => {
            return <Fragment key={index}>
              {words.map(word => {
                return <div className='inline-flex items-center gap-4' key={word}>
                  <span className='text-gray-900 uppercase text-sm font-extrabold'>{word}</span>
                  <StarIcon className='size-6 text-gray-900 -rotate-12' />
                </div>
              })}
            </Fragment>
          })}

        </div>
      </div>
    </div>
  </div>;
};
