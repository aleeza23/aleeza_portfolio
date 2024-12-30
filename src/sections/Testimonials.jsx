import Image from "next/image";
import memojiAvatar1 from "../assets/images/bruno.jpg";
import memojiAvatar2 from "../assets/images/moli.jpg";
import memojiAvatar3 from "../assets/images/mujeeb.jpg";
import memojiAvatar4 from "../assets/images/liaqat.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { Fragment } from "react";


const testimonials = [
  {
    name: "Bruno Cesar",
    position: "Creative ChatGPT Researcher",
    text: "Aleeza demonstrated excellent skills in converting UI designs to frontend development. Her dedication to precision and her problem-solving mindset significantly improved our project, making her a vital part of the team.",
    avatar: memojiAvatar1,
  }, 
  {
    name: "Mujeeb Ur Rehman",
    position: "GDC Web Tech Lead",
    text: "I highly recommend Aleeza as a standout Frontend developer. Her mastery of frontend frameworks and dedication to user-friendly design make her an excellent addition to any team.",
    avatar: memojiAvatar3,
  },
  {
    name: "Liaqat Ali",
    position: "Web Lead GDGOC",
    text: "Having collaborated with Aleeza on numerous React.js projects, I am amazed by her exceptional skills and dedication to delivering innovative, high-quality web solutions every time.",
    avatar: memojiAvatar4,
  },
  {
    name: "Moli G.Ott.",
    position: "Ecosocial innovator/educator",
    text: "Aleeza worked with me during a hackathon and brought a unique perspective to our team. Her ability to handle challenges and deliver impactful results proved invaluable in achieving success.",
    avatar: memojiAvatar2,
  },
];


const arrayLength = ['', '']

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow={'Happy Clients'} title={'What Clients Say About Me'} description={"Don't just take my word for it. See what my clients have to say about my work."} />

      <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <div className="flex flex-none gap-8 animate-move-left [animation-duration:90s] hover:[animation-play-state : paused]  " >
          {arrayLength.map((_, index) => {
            return <Fragment key={index}>
              {testimonials.map(testimonial => {
                return <Card key={testimonial.name} className={'max-w-xs md:max-w-md hover:-rotate-3 transition duration-300'}>
                  <div className="flex gap-x-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center flex-shrink-0 rounded-full">
                      <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <div>{testimonial.name}</div>
                      <div className="text-white/40 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              })}
            </Fragment>
          })}

        </div>
      </div>
    </div>
  </div>;
};
