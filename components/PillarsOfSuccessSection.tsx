'use client';
import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { HiChevronRight } from 'react-icons/hi';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});


export default function PillarsOfSuccessSection() {
    const pillars = [
        {
            title: 'Future-Focused Curriculum',
            description:
                'We stay ahead of industry trends to provide students with the relevant skills that are most in demand.',
        },
        {
            title: 'Flexible Learning Paths',
            description:
                'Our programs are designed to meet learners where they are, with support for each and every level.',
        },
        {
            title: 'Expert Mentorship',
            description:
                'Our team comprises industry veterans and passionate educators who guide learners with hands-on insights.',
        },
        {
            title: 'Career Growth Support',
            description:
                'Whether you\'re upskilling, reskilling, or just beginning, Cognitry helps you make an impact.',
        },
    ];
    return (
        <section
            id="pillars-of-success"
            aria-labelledby="pillars-heading"
            className="w-full h-full mb-10 bg-[#e8e6e6]"
        >
            {/* Decorative SVG top border */}
            <div className="relative w-full -mt-[5px] h-[150px]  overflow-hidden" aria-hidden="true">
                <svg
                    className="absolute top-0 left-0  w-full h-full"
                    viewBox="0 0 1440 150"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                >
                    <title>Decorative top wave</title>
                    <desc>Curved SVG section divider</desc>
                    <path
                        d="M0,80 C360,100 1080,60 1440,50 L1440,150 L0,150 Z"
                        fill="black"
                    />
                </svg>
            </div>
            {/* Content Section */}
            <div className="w-full text-white md:pl-44 bg-black h-full py-14 -mt-[5px]">
                <header className="mb-12 ml-10 md:ml-0 ">
                    <h2
                        id="pillars-heading"
                        className={`${spaceGrotesk.className} md:w-1/2 leading-12 text-4xl mb-8`}
                    >
                        Where Potential Meets Opportunity
                    </h2>
                    <h3 className="text-xl font-proxima mb-8">
                        Build Skills That Shape the Future
                    </h3>
                    <p className="text-base md:text-base md:w-[50%] font-proxima">
                        At Cognitry, we don’t just teach tech – we empower learners with the tools to thrive. Our approach is built on four key pillars.
                    </p>
                </header>
                {/* Four Key Pillars */}
                <div
                    className="grid grid-cols-1 place-items-center gap-0.5  items-start md:pr-44 md:grid-cols-2 lg:grid-cols-4"
                    role="list"
                >
                    {pillars.map((pillar, index) => (
                        <article
                            key={index}
                            className="group bg-white w-full md:w-full h-full text-black p-4  pt-12 border text-center shadow-sm transition-all duration-300 ease-in-out md:hover:-translate-y-1 md:hover:shadow-lg"
                            role="listitem"
                        >
                            <div className="transition-all duration-300 ease-in-out md:group-hover:-translate-y-1">
                                <h6 className={`${spaceGrotesk.className} text-[16px] font-semibold mb-6`}>
                                    {pillar.title}
                                </h6>
                                <p className="text-sm mb-4">{pillar.description}</p>
                            </div>
                            <div className="flex justify-center items-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 44 24"
                                    stroke="currentColor"
                                    strokeWidth={0.7}
                                    className="text-gray-700 opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-y-1 transition-all duration-300"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h38M34 6l6 6-6 6" />
                                </svg>
                            </div>
                        </article>
                    ))}
                    <div className="w-full flex sm:mb-7 items-center  justify-center md:justify-start lg:justify-center col-span-1 lg:col-span-4">
                        <a
                            href="#"
                            className="flex pl-5 mt-10 items-center border border-[#FFBF23] bg-[#FFBF23] w-[152px] text-black py-2 text-sm tracking-wider hover:bg-white transition"
                            aria-label="Explore Cognitry Programs"
                        >
                            Start Learning <HiChevronRight size={20} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
