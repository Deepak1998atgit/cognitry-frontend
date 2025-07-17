import { HiChevronRight } from 'react-icons/hi';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function HeroSection() {
  return (
    <section
      className="w-full flex  flex-col md:flex-row"
      aria-labelledby="hero-heading"
    >
      <div className="w-full md:w-[54%]  order-1 md:order-2">
        <figure className="relative w-full h-[300px] md:h-[603px]">
          <Image
            src="/hero_image.png"
            alt="Happy students celebrating tech success"
            fill
            className="w-full h-[600px] md:h-[805px] md:w-[805px] overflow-hidden object-cover object-left"
            priority={true} 
          />
        </figure>
      </div>
      <div className="w-full md:w-[46%] flex flex-col bg-white text-black order-2 md:order-1">
        <header className="pt-12 md:pt-20 px-6 md:pl-16">
          <h1
            id="hero-heading"
            className={`${spaceGrotesk.className} text-[36px] md:text-[50px] mb-4 md:mb-9 leading-tight`}
          >
            Launch Your Tech Career with{' '}
            <span className="text-[#ff4c4c]">Cognitry</span>
          </h1>
        </header>
        <p
          className="text-base md:text-[16px]  leading-[31px] px-6 md:pl-16 md:pr-8 font-normal font-['Arial','sans-serif'] mb-10"
          aria-label="Program description"
        >
          We partner with individuals, businesses, and educational institutions
          to turn potential into expertise – delivering future-ready skills in
          Data Science, AI, Cloud Computing, and Full-Stack Development.
        </p>
        <a
          href="#"
          className="flex mb-10 ml-6 md:ml-16 items-center border  border-[#FFBF23] w-fit px-5 py-2 text-sm tracking-wider hover:bg-[#FFBF23] transition"
          aria-label="Explore Cognitry Programs"
        >
          Explore Programs <HiChevronRight size={20} className="ml-1" />
        </a>
      </div>
    </section>
  );
}

