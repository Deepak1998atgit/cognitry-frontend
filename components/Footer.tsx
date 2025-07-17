'use client';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6 text-[16px] font-proxima">
            <div className=" grid grid-cols-1 md:grid-cols-3 px-14 pt-10 lg:grid-cols-3 gap-5">
                {/* Logo & Contact */}
                <div>
                    <img
                        src="/cognitry_footer_logo.png"
                        alt="Cognitry logo"
                        className="object-cover w-[158px] h-[72px] mb-4"
                        loading="lazy"
                    />
                    <address className="not-italic  leading-relaxed space-y-5">
                        <p>
                            <strong>Location:</strong> <br />
                            United Kingdom, India, Dubai, Qatar
                        </p>
                        <p>
                            <strong>Contact:</strong> <br />
                            <a href="mailto:info@cognitry.io" className="hover:underline">
                                info@cognitry.io
                            </a>
                        </p>
                        <p>
                            <strong>General Inquiries:</strong> <br />
                            <a href="tel:+917736458999" className="hover:underline">
                                +91 77364 58999
                            </a>
                        </p>
                    </address>
                </div>

                {/* Site Navigation */}
                <nav aria-label="Site Navigation">
                    <ul className="space-y-5 text-sm mt-20 ">
                        <li>
                            <a href="/programs" className="hover:underline">
                                Programs
                            </a>
                        </li>
                        <li>
                            <a href="/courses" className="hover:underline">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex  items-center justify-center border border-[#FFBF23] bg-[#FFBF23] w-[120px] text-black py-2 text-sm tracking-wider hover:bg-white transition"
                                aria-label="Explore Cognitry Programs"
                            >
                                Get Started <HiChevronRight size={20} className="" />
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Quick Links & Social */}
                <nav aria-label="Quick  Links & Social">
                    <ul className="space-y-2 text-sm mt-20">
                        <li className="font-semibold">Quick Links</li>
                        <li>
                            <a href="/terms" className="hover:underline">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="mt-12">
                        <p className="font-semibold mb-2 text-sm">Follow Us @</p>
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <img
                                    src="instagram.png"
                                    alt="Instagram"
                                    className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition"
                                />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <img
                                    src="/facebook.png"
                                    alt="Facebook"
                                    className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition"
                                />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <img
                                    src="/linkedin.png"
                                    alt="Linkedin"
                                    className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition"
                                />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <img
                                    src="/youtube.png"
                                    alt="YouTube"
                                    className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition"
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
