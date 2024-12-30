import ArrowUp from '../assets/icons/arrow-up-right.svg'

const footerLinks = [
  { title: 'Github', link: 'https://github.com/aleeza23' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/aleezarubab/' },
  { title: 'Instagram', link: 'https://www.instagram.com/aleeza_codes_/' },
  { title: 'Facebook', link: 'https://web.facebook.com/profile.php?id=61570431953298' },

]
export const Footer = () => {
  return <footer className='relative -z-10 overflow-x-clip'> 
<div className="absolute  bottom-0 h-[400px] w-[1600px] left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10 " style={{
  maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
  WebkitMaskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)', 
}}
></div>

    <div className="container">      
    <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
      <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
      <nav className='flex flex-col md:flex-row items-center gap-8'>
        {footerLinks.map(link => {
          return <a key={link.title} href={link.link} className='inline-flex items-center gap-1.5'><span className='font-semibold'>{link.title}</span> <ArrowUp className='size-4' /></a>
        })}

      </nav>
    </div>
  </div>
  </footer>
};
