import memojiImage from '../assets/images/heroAvatar.png'
import grainImage from '../assets/images/grain.jpg'
import ArrowDown from '../assets/icons/arrow-down.svg'
import StarIcon from '../assets/icons/star.svg'
import SparkleIcon from '../assets/icons/sparkle.svg'


import Image from 'next/image';
import { HeroStars } from '../components/HeroStars';



export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className="absolute inset-0" style={{
      maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)', // For Safari support
    }}>
      <div className='absolute inset-0 opacity-5 -z-30' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      {/* ring layers */}
      <div className='size-[620px] hero-ring '></div>
      <div className='size-[820px] hero-ring '></div>
      <div className='size-[1020px] hero-ring '></div>
      <div className='size-[1220px] hero-ring '></div>

      {/* start icons */}
      <HeroStars size={800} rotation={-72} shouldSpin shouldOrbit spinDuration={'48s'}>
        <StarIcon className='size-28 text-emerald-300' />
      </HeroStars>
      <HeroStars size={550} rotation={20} shouldSpin shouldOrbit spinDuration={'38s'}>
        <StarIcon className='size-12 text-emerald-300' />
      </HeroStars>
      <HeroStars size={590} rotation={98} shouldSpin shouldOrbit spinDuration={'40s'}>
        <StarIcon className='size-8 text-emerald-300' />
      </HeroStars>
      <HeroStars size={430} rotation={-14} shouldOrbit spinDuration={'30s'}>
        <SparkleIcon className='size-8 text-emerald-300/20' />
      </HeroStars>
      <HeroStars size={440} rotation={79} shouldOrbit spinDuration={'32s'}>
        <SparkleIcon className='size-5 text-emerald-300/20' />
      </HeroStars>
      <HeroStars size={530} rotation={178} shouldOrbit spinDuration={'36s'}>
        <SparkleIcon className='size-10 text-emerald-300/20' />
      </HeroStars>
      <HeroStars size={710} rotation={144} shouldOrbit spinDuration={'44s'}>
        <SparkleIcon className='size-14 text-emerald-300/20' />
      </HeroStars>
      <HeroStars size={720} rotation={85} shouldOrbit spinDuration={'46s'}>
        <div className='size-3 rounded-full bg-emerald-300/20'></div>
      </HeroStars>
      <HeroStars size={650} rotation={-5} shouldOrbit spinDuration={'42s'}>
        <div className='size-2 rounded-full bg-emerald-300/20'></div>
      </HeroStars>
      <HeroStars size={520} rotation={-41} shouldOrbit spinDuration={'34s'}>
        <div className='size-2 rounded-full bg-emerald-300/20'></div>
      </HeroStars>
    </div>

    <div className="container">
      {/* image */}
      <div className='flex flex-col justify-center items-center '>
        <Image src={memojiImage} alt='hero' className='size-[100px]' />
        <div className='bg-gray-950 border border-gray-800 rounded-lg inline-flex items-center gap-x-4 px-4 py-1.5'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
          </div>
          <p className='text-sm font-semibold'>Available for new projects</p>
        </div>
      </div>
      {/* text */}
      <div className='max-w-lg mx-auto'>
        <h1 className='mt-8 font-serif text-3xl md:text-5xl text-center tracking-wide'>Building Exceptional User Experiences</h1>
        <p className='text-center mt-4 md:text-lg text-white/60'>I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.</p>
      </div>

      {/* buttons */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 rounded-xl h-12'>
          <span>Explore My Work</span>
          <ArrowDown className='size-4' />
        </button>

        <button className='inline-flex items-center gap-2 border text-gray-900 border-white/15 px-6 rounded-xl h-12 bg-white'>
          <span>👋</span>
          <span className='font-bold'>Let's connect</span>
        </button>
      </div>
    </div>

  </div>
};
