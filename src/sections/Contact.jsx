import ArrowUp from '../assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-14 lg:24 lg:pt-20' id='contact'>
      <div className="container">
        <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl">
          <div>
            <h2 className='text-center font-serif md:text-left text-2xl md:text-3xl'>
              Let's create something amazing together
            </h2>
            <p className='text-sm mt-2 text-center md:text-left md:text-base'>
              Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <a href="https://wa.me/923115917071" target="_blank" rel="noopener noreferrer">
              <button className='inline-flex items-center justify-center border border-gray-900 w-max rounded-xl mx-auto text-white px-6 h-12 bg-gray-900 gap-2'>
                <span className='font-semibold'>Contact Me</span>
                <ArrowUp className='size-4' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
