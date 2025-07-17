'use client';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function WhyCognitry() {
    return (
        <section className="relative  duration-700 ease-out w-full bg-[#e8e6e6] pb-36 md:pb-80  md:pt-12">
            <div className="flex flex-col w-full gap-2  md:flex-row items-start pt-10 px-3">
                <div className="w-full  md:w-[45%]">
                    <h2
                        id="why-cognitry-heading"
                        className={`${spaceGrotesk.className} md:pl-5 text-[38px] font-normal text-gray-900`}
                    >
                        Bridging the gap between<br/>
                        talent and opportunity.
                    </h2>
                </div>
                <div className="w-full md:w-[55%]  mt-5 text-gray-900 space-y-8">
                    <p>Technology is constantly evolving, and so should you.</p>
                    <p>
                        Whether you're a student, a working professional, or exploring a career shift, we at Cognitry help you stay ahead in the digital world. Our immersive learning experience is designed for all skill levels – no matter where you start, there's a path for you.
                    </p>
                    <ul className="space-y-8">
                        <li className="flex items-start space-x-3">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="21.873 20.073 156.219 159.954" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="21.873 20.073 156.219 159.954" data-type="color" role="presentation" aria-hidden="true" className='w-[20px] h-[20px]' aria-label="">
                                <g>
                                    <path fill="#f48ce0" d="M169.4 176.9c-7.9 4-17.6.8-21.5-7L83.6 43.3c-4-7.9-.8-17.6 7-21.5 7.9-4 17.6-.8 21.5 7l64.2 126.6c4.1 7.8.9 17.5-6.9 21.5z" data-color="1"></path>
                                    <path fill="#e5c74c" d="M119.2 178.3c-7.9 4-17.6.8-21.5-7L52.8 82.9c-4-7.9-.8-17.6 7-21.5 7.9-4 17.6-.8 21.5 7l44.8 88.3c4.1 7.9.9 17.6-6.9 21.6z" data-color="2"></path>
                                    <path fill="#9dabed" d="M67.4 176.6c-7.9 4-17.6.8-21.5-7l-22.3-43.9c-4-7.9-.8-17.6 7-21.5 7.9-4 17.6-.8 21.5 7l22.3 43.9c4 7.8.9 17.5-7 21.5z" data-color="3"></path>
                                </g>
                            </svg>
                            <span><strong>Learn industry-relevant skills</strong></span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.532 45.947 158.928 108.107" viewBox="20.532 45.947 158.928 108.107" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" className='w-[20px] h-[20px]' aria-hidden="true" aria-label="">
                                <g>
                                    <path d="M82.935 75.852l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759l33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" fill="#FD6262" data-color="1"></path>
                                    <path d="M172.608 95.616l-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                                    <path d="M172.608 124.149l-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                                    <path d="M65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                                    <path d="M65.095 76.446H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                                    <path d="M65.095 113.897H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                                </g>
                            </svg>
                            <span><strong>Gain hands-on experience with real-world projects</strong></span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.868 38.586 160.264 121.194" viewBox="19.868 38.586 160.264 121.194" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" className='w-[20px] h-[20px]' aria-hidden="true" aria-label="">
                                <g>
                                    <path d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z" fill="#FD6262" data-color="1"></path>
                                </g>
                            </svg>
                            <span><strong>Get mentored by top experts</strong></span>
                        </li>
                    </ul>
                </div>
            </div>
            <svg
                className="absolute bottom-0 left-0 w-full  pointer-events-none"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    fill="#ffffff"
                    d="M0,320 C360,170 1080,1 1440,1 L1440,320 L0,320 Z"
                />
            </svg>
        </section>
    );
}
