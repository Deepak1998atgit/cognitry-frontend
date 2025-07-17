'use client';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
export default function WhatWeOffer() {
    const offerings = [
        {
            title: "Graduate Training",
            description:
                "For university students and recent graduates looking to kickstart a career in IT with hands-on experience.",
            img: "/graduate_training.png",
            alt: "Young woman studying with headphones on",
        },
        {
            title: "Upskilling for Employees",
            description:
                "Advanced,hands-on courses designed to help professionals stay competitive in their fields.",
            img: "/upskilling_employees.png",
            alt: "Professional woman working on a laptop",
        },
        {
            title: "Early Tech Training for Kids",
            description:
                "Interactive programs that introduce young minds to foundational technology skills.",
            img: "/tech_training_kids.png",
            alt: "Two children learning with a tablet",
        },
        {
            title: "Reskilling for Career Switchers",
            description:
                "A structured pathway for individuals from non-tech backgrounds to confidently transition into tech roles.",
            img: "/reskilling_switchers.png",
            alt: "Smiling man holding a tablet",
        },
    ];
    return (
        <section className="px-4  md:pl-28  mb-20 bg-white" aria-labelledby="offerings-heading">
            <div className="text-left mt-5 mb-12">
                <h2 id="offerings-heading" className={`${spaceGrotesk.className} mb-11 text-4xl`}>
                    What We Offer
                </h2>
                <span className="text-[19px] font-proxima font-light antialiased break-words align-baseline">
                    Flexible, Industry-Aligned Programs for Every Learner
                </span>
            </div>
            <div className="grid grid-cols-1 w-full gap-x-14  md:grid-cols-2 place-items-center gap-y-4  lg:grid-cols-4 font-extralight">
                {offerings.map((item, idx) => (
                    <article key={idx} className="md:w-[287.65px]  flex flex-col items-center  md:items-start overflow-hidden">
                            <figure className="relative w-[231px] h-[304px] overflow-hidden">
                                <img
                                    loading="lazy"
                                    sizes="227px"
                                    src={item.img}
                                    alt="Female student using Cognitry edtech solution for career growth"
                                    className="object-fit:cover border-2 border-black rounded-xl"
                                />
                            </figure>
                            <figcaption className="text-center flex flex-col items-center md:pr-12">
                                <h6 className={`${spaceGrotesk.className} font-bold w-full mt-11 text-[16px]`}>
                                    {item.title}
                                </h6>
                                <p className="mt-4 text-[15px] tracking-normal mb-3 text-gray-900 w-[78%] font-normal  leading-[25.6px] font-proxima">{item.description}</p>
                            </figcaption>
                    </article>
                ))}
            </div>
        </section>
    );
}
