import { Space_Grotesk } from 'next/font/google';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTestimonials() {
    const res = await fetch(`${API_URL}/api/testimonials`);
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    const data = await res.json();
    return data.data; 
}

export default async function TestimonialsSection() {
    const testimonials = await getTestimonials();

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white pt-28">
            <div className="text-left mb-12 pl-3 lg:pl-48">
                <header>
                    <h2 id="testimonials-heading" className={`${spaceGrotesk.className} text-3xl md:text-4xl mb-9`}>
                        What Our Students Say
                    </h2>
                    <p className="text-lg font-proxima leading-7">
                        Real Experiences. Real Impact. <br />
                        From those who have been there – and walked the path.
                    </p>
                </header>
            </div>

            <div className="grid grid-cols-1 place-items-center md:place-items-start  md:grid-cols-2 md:pl-32 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial: any, index: number) => (
                    <article
                        key={testimonial.id}
                        className="bg-[#e8e6e6] border border-[#e8e6e6] w-[279px] h-[370px] font-proxima rounded-[20px] p-6 pt-14 shadow-lg text-left"
                        itemScope
                        itemType="https://schema.org/Review"
                    >
                        <p className="text-gray-800 text-[16px] leading-relaxed mb-4" itemProp="reviewBody">
                            {testimonial.Feedback}
                        </p>
                        <footer>
                            <p className="font-semibold font-proxima text-[15px] text-black" itemProp="author">
                                – {testimonial.Name}
                            </p>
                        </footer>
                    </article>
                ))}
            </div>

            {/*JSON-LD*/}
            <Script id="testimonials-jsonld" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    itemListElement: testimonials.map((t: any, i: number) => ({
                        "@type": "Review",
                        "position": i + 1,
                        "author": { "@type": "Person", "name": t.Name },
                        "reviewBody": t.Feedback,
                    })),
                })}
            </Script>
        </section>
    );
}
