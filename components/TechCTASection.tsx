'use client';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
export default function TechCTASection() {
    return (
        <section
            id="cta-tech"
            aria-labelledby="tech-cta-heading"
            className="py-20 px-4 bg-white"
        >
            <div className="md:pl-32 pt-16 grid font-proxima  grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left Text Block */}
                <div>
                    <header>
                        <h2
                            id="tech-cta-heading"
                            className={`${spaceGrotesk.className} text-3xl md:text-4xl  text-black mb-10`}
                        >
                            Take the Leap Into Tech
                        </h2>
                    </header>
                    <div className="text-gray-800 text-[16px] leading-[1.6em] mb-6">
                        <p className="">Your future starts now.</p>
                        <p className='text-[16px]'>
                            No matter your starting point, Cognitry provides a clear pathway
                            to success. Our expert-led training, hands-on projects, and
                            career-focused approach prepare you for the digital world.
                        </p>
                    </div>
                    <p className=" text-[20px] text-black mb-6">
                        Upskill. Reskill. Transform your career.
                    </p>
                    {/* CTA Button */}
                    <a
                        href="#"
                        className="flex pl-5 mt-10 items-center border border-[#FFBF23] hover:bg-[#FFBF23] w-[152px] text-black  py-2 text-sm tracking-wider bg-white transition"
                        aria-label="Explore Cognitry Programs"
                    >
                        Enroll Today <HiChevronRight size={20} className="ml-1" />
                    </a>
                </div>
                {/* Right Image/Icon */}
                <div className="flex justify-center">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="10.499 10.001 179 179.999" viewBox="10.499 10.001 179 179.999" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                        <g>
                            <path d="M77.48 129.887c-3.786 0-6.698-2.904-6.698-6.679s2.912-6.679 6.698-6.679 6.698 2.904 6.698 6.679c.001 3.775-2.912 6.679-6.698 6.679zm0-7.551c-.582 0-.874.29-.874.871s.291.871.874.871c.582 0 .874-.29.874-.871 0-.58-.291-.871-.874-.871z" fill="#F15A24" data-color="1"></path>
                            <path d="M77.48 144.697c-11.94 0-21.841-9.874-21.841-21.78s9.901-21.78 21.841-21.78 21.841 9.874 21.841 21.78c.001 12.197-9.609 21.78-21.841 21.78zm0-37.462c-8.737 0-16.017 7.26-16.017 15.972s7.28 15.972 16.017 15.972 16.017-7.26 16.017-15.972-6.989-15.972-16.017-15.972z" fill="#F15A24" data-color="1"></path>
                            <path d="M77.48 167.349c-24.462 0-44.265-19.747-44.265-44.141S53.018 79.066 77.48 79.066c24.462-.29 44.557 19.747 44.557 44.141s-20.094 44.142-44.557 44.142zm0-82.765c-21.259 0-38.441 17.134-38.441 38.333S56.221 161.25 77.48 161.25c21.259.29 38.732-16.843 38.732-38.043S98.739 84.584 77.48 84.584z" fill="#F15A24" data-color="1"></path>
                            <path d="M77.48 190c-36.985 0-66.98-29.911-66.98-66.793s29.996-66.793 66.98-66.793 66.98 29.911 66.98 66.793C144.461 159.798 114.465 190 77.48 190zm0-127.777c-33.781 0-61.156 27.298-61.156 60.985s27.375 60.985 61.156 60.985 61.156-27.298 61.156-60.985-27.374-60.985-61.156-60.985z" fill="#F15A24" data-color="1"></path>
                            <path d="M77.48 126.111c-.874 0-1.456-.29-2.039-.871-1.165-1.162-1.165-2.904 0-4.066l90.569-90.315c1.165-1.162 2.912-1.162 4.077 0s1.165 2.904 0 4.066L79.519 125.24c-.582.581-1.165.871-2.039.871z" fill="#F15A24" data-color="1"></path>
                            <path d="M154.362 73.138c-6.116 0-12.522-3.194-18.638-9.293-7.572-7.55-10.775-15.391-8.737-23.232 4.66-19.457 38.441-30.202 39.897-30.492.874-.29 1.747 0 2.621.29.874.581 1.165 1.452 1.165 2.323v15.972h16.017c.874 0 1.747.581 2.33 1.162.582.581.582 1.742.291 2.614-.582 1.742-12.813 40.656-34.946 40.656zm10.677-55.653c-8.737 3.194-29.122 12.197-32.325 24.975-1.456 5.518 1.165 11.616 7.28 17.715 4.951 4.937 9.429 7.147 14.089 7.147 13.396 0 23.449-20.564 27.817-32.18l-13.949.058a2.908 2.908 0 0 1-2.912-2.904V17.485z" fill="#F15A24" data-color="1"></path>
                            <path d="M150.285 53.058c-1.747 0-2.912-1.162-2.912-2.904V21.566c0-1.742 1.165-2.904 2.912-2.904s2.912 1.162 2.912 2.904v28.588c0 1.452-1.164 2.904-2.912 2.904z" fill="#F15A24" data-color="1"></path>
                            <path d="M13.412 190c-.874 0-1.456-.29-2.039-.871-1.165-1.162-1.165-2.904 0-4.066l18.929-18.876c1.165-1.162 2.912-1.162 4.077 0s1.165 2.904 0 4.066L15.45 189.129c-.29.581-1.164.871-2.038.871z" fill="#F15A24" data-color="1"></path>
                            <path d="M141.549 190c-.874 0-1.456-.29-2.039-.871l-18.929-18.876c-1.165-1.162-1.165-2.904 0-4.066s2.912-1.162 4.077 0l18.929 18.876c1.165 1.162 1.165 2.904 0 4.066-.582.581-1.165.871-2.038.871z" fill="#F15A24" data-color="1"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
