'use client';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


export default function CareerPathSection() {
    return (
        <section
            className="bg-[#e8e6e6]  pb-20 w-full"
            aria-labelledby="career-heading"
        >
            <div className="w-full flex flex-col md:flex-row h-auto md:h-screen gap-9 md:mt-20 items-center">
                <figure className="relative w-full md:w-[54%] h-[400px] md:h-screen">
                    <Image
                        src="/career_path_teacher.png"
                        alt="Confident professional holding a tablet"
                        width={784}
                        height={629}
                        className="object-cover mt-0 md:object-none h-full md:mt-1 w-[784px]"
                        loading='lazy'
                    />
                    <svg preserveAspectRatio="none" className='absolute top-3 right-10 md:top-8 opacity-45 md:right-36' fill='#91c1ed' data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="230" height="230" viewBox="0 0 200 200" role="presentation" aria-hidden="true">
                        <g>
                            <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                        </g>
                    </svg>
                    <svg preserveAspectRatio="none" className='absolute right-4 bottom-5 opacity-45 md:-right-10' fill='#ffbf23' data-bbox="50 157 900 686" viewBox="50 157 900 686" height="127" width="180" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                        <g>
                            <path d="M902 843H98c-26.5 0-48-21.5-48-48V205c0-26.5 21.5-48 48-48h804c26.5 0 48 21.5 48 48v590c0 26.5-21.5 48-48 48z"></path>
                        </g>
                    </svg>
                    <div className="absolute  -bottom-10 right-20 opacity-40 ">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="23.437 39.199 153.124 121.603" viewBox="23.437 39.199 153.124 121.603" className='w-[151px] h-[120px] opacity-80' height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <path d="M175.561 49.199c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 65.142c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 81.085c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 97.029c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 112.972c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 128.915c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 144.859c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                                <path d="M175.561 160.802c-5.729 0-8.607-2.134-11.392-4.196-2.64-1.956-5.133-3.804-10.2-3.804s-7.561 1.848-10.2 3.804c-2.784 2.062-5.663 4.196-11.392 4.196-5.728 0-8.606-2.134-11.391-4.196-2.639-1.956-5.132-3.804-10.199-3.804-5.066 0-7.56 1.848-10.198 3.804-2.784 2.062-5.662 4.196-11.39 4.196s-8.605-2.134-11.39-4.196c-2.639-1.956-5.132-3.804-10.198-3.804s-7.56 1.848-10.198 3.804c-2.784 2.062-5.662 4.196-11.39 4.196-5.727 0-8.604-2.134-11.389-4.196-2.639-1.956-5.131-3.804-10.197-3.804a1 1 0 1 1 0-2c5.727 0 8.604 2.134 11.389 4.196 2.639 1.956 5.131 3.804 10.197 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.605 2.134 11.39 4.196c2.639 1.956 5.132 3.804 10.198 3.804s7.56-1.848 10.198-3.804c2.784-2.062 5.662-4.196 11.39-4.196s8.606 2.134 11.391 4.196c2.639 1.956 5.132 3.804 10.199 3.804s7.561-1.848 10.2-3.804c2.784-2.062 5.663-4.196 11.392-4.196s8.607 2.134 11.392 4.196c2.64 1.956 5.133 3.804 10.2 3.804a1 1 0 1 1 0 2z" fill="#F28FE0" data-color="1"></path>
                            </g>
                        </svg>
                    </div>
                    <figcaption className="sr-only">
                        A confident professional in a tech workspace
                    </figcaption>
                </figure>
                <article className="w-full md:w-[46%] px-4 md:px-0 mt-8 md:mt-0">
                    <div className="flex w-full flex-col items-center font-proxima justify-center text-left">
                        <header className='md:w-[74%]'>
                            <h2
                                id="career-heading"
                                className={`${spaceGrotesk.className}  text-3xl text-left leading-12 md:text-4xl  mb-7`}
                            >
                                Your Pathway to a High-Growth Tech Career
                            </h2>
                            <p className="text-[18px]  mb-7">
                                From Beginner to Pro – We've Got You Covered
                            </p>
                        </header>
                        <p className="text-left text-[16px] mb-7 leading-relaxed max-w-md">
                            The right skills can open doors to limitless possibilities in tech.
                            Whether you're starting from scratch or refining your expertise,
                            our comprehensive courses guide you through:
                        </p>
                        <ul className="space-y-5 md:space-y-5 list-nonetext-left">
                            {[
                                ['Beginner-friendly concepts', 'to build a strong foundation'],
                                ['Intermediate and advanced techniques', 'for career growth'],
                                ['Real-world projects', 'that prepare you for industry challenges'],
                                ['Expert mentorship', 'from leading professionals'],
                            ].map(([bold, rest], i) => (
                                <li key={i} className="flex items-start ml-3  text-[16px] gap-2">
                                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.371 23.519 174.297 155.481" xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="12.371 23.519 174.297 155.481" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                                        <g>
                                            <path fill="#32584e" d="M90.1 179c-9.7 0-19.5-1.8-29-5.6-19.3-7.8-34.3-22.6-42.5-41.7-8.1-19.1-8.3-40.2-.6-59.5 16-39.8 61.4-59.1 101.2-43 1 .4 1.5 1.6 1.1 2.6-.4 1-1.6 1.5-2.6 1.1C80 17.7 36.9 36 21.7 73.7c-15.2 37.7 3.1 80.8 40.8 96 37.7 15.2 80.8-3.1 96-40.8.4-1 1.6-1.5 2.6-1.1 1 .4 1.5 1.6 1.1 2.6-12.1 30.2-41.3 48.6-72.1 48.6z" data-color="1"></path>
                                            <path fill="#058466" d="M91.6 136.1L53.3 87.3c-.7-.9-.5-2.1.3-2.8.9-.7 2.1-.5 2.8.3l35.3 45L183.2 27c.7-.8 2-.9 2.8-.2.8.7.9 2 .2 2.8L91.6 136.1z" data-color="2"></path>
                                        </g>
                                    </svg>
                                    <span >
                                        <strong>{bold}</strong> {rest}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
}