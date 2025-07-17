'use client';
import React from 'react';

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
                    <address className="not-italic  leading-relaxed space-y-2">
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
                    <ul className="space-y-2 text-sm">
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
                                href="/get-started"
                                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-sm font-medium rounded hover:bg-yellow-300 transition"
                            >
                                Get Started
                                <img
                                    src="/icons/arrow-right.svg"
                                    alt="Arrow icon"
                                    className="w-4 h-4"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Quick Links & Social */}
                <nav aria-label="Quick Links & Social">
                    <ul className="space-y-2 text-sm">
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
                    <div className="mt-6">
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
                                    className="w-5 h-5 opacity-70 hover:opacity-100 transition"
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
                                    className="w-5 h-5 opacity-70 hover:opacity-100 transition"
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
                                    className="w-5 h-5 opacity-70 hover:opacity-100 transition"
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
                                    className="w-5 h-5 opacity-70 hover:opacity-100 transition"
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
