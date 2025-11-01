import React from 'react'
import useInView from '../hooks/useInView'

export default function AboutUs() {
    const [ref, inView] = useInView()
    const [missionRef, missionInView] = useInView()
    const [whyRef, whyInView] = useInView()

    return (
        <section id="about" className="bg-gray-100 text-black">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* About Section */}
                <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-3xl font-display mb-4" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bolder' }}>
                        Our Story – Vanya Eco Products
                    </h2>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
                        At Vanya Eco Products, we believe purity begins at the source. That’s why we work hand-in-hand with trusted farmers, sourcing raw spices directly from the heart of Wayanad’s fertile lands. Each spice is harvested with care, carrying the aroma of the soil and the strength of nature.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
                        From there, the journey continues in our very own mills. Here, tradition meets precision — our spices are cleaned, processed, and ground in small batches, ensuring that what reaches your kitchen is as close to nature as possible.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
                        Unlike commercial brands that stretch shelf life with chemicals and preservatives, we choose authenticity. Our products have a naturally shorter shelf life because they are pure, unadulterated, and free from artificial additives. Every packet you open is filled with freshness, flavor, and the promise of good health.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif' }}>
                        For us, it’s not just about selling spices — it’s about preserving trust. When you choose Flavours by Vanya, you’re not just cooking a meal, you’re keeping alive a tradition of honesty, purity, and care that starts in the farmer’s field and ends on your dining table.
                    </p>
                    <p className="mt-4 text-gray-700 font-medium" style={{ fontFamily: '"Roboto", sans-serif' }}>
                        Vanya Eco Products From Farm to Your Home, Pure & Honest.
                    </p>
                </div>

                <div className="rounded-xl overflow-hidden w-full aspect-[4/3] bg-white/5">
                    <img src="/assets/hero.webp" alt="Farm or spices" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>

            
        </section>
    )
}
