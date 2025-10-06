import React from 'react'
import useInView from '../hooks/useInView'

export default function AboutUs() {
    const [ref, inView] = useInView()
    const [missionRef, missionInView] = useInView()
    const [whyRef, whyInView] = useInView()

    return (
        <section id="about" className="py-20 bg-gray-50 text-black">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* About Section */}
                <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-3xl font-display mb-4">🌿 Our Story – Vanya Eco Products 🌿</h2>
                    <p className="text-gray-700 leading-relaxed">At Vanya Eco Products, we believe purity begins at the source. That’s why we work hand-in-hand with trusted farmers, sourcing raw spices directly from the heart of Wayanad’s fertile lands. Each spice is harvested with care, carrying the aroma of the soil and the strength of nature.</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">From there, the journey continues in our very own mills. Here, tradition meets precision our spices are cleaned, processed, and ground in small batches, ensuring that what reaches your kitchen is as close to nature as possible.</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">Unlike commercial brands that stretch shelf life with chemicals and preservatives, we choose authenticity. Our products have a naturally shorter shelf life, because they are pure, unadulterated, and free from artificial additives. Every packet you open is filled with freshness, flavor, and the promise of good health.</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">For us, it’s not just about selling spices it’s about preserving trust. When you choose Flavours by Vanya, you’re not just cooking a meal, you’re keeping alive a tradition of honesty, purity, and care that starts in the farmer’s field and ends on your dining table.</p>
                    <p className="mt-4 text-gray-700 font-medium">✨ Vanya Eco Products From Farm to Your Home, Pure & Honest. ✨</p>
                </div>

                <div className="rounded-xl overflow-hidden w-full aspect-[4/3] bg-white/5">
                    <img src="/assets/hero.webp" alt="Farm or spices" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>

            {/* Mission Section */}
            <div ref={missionRef} className={`max-w-6xl mx-auto mt-20 px-6 text-center transition-all duration-700 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h3 className="text-2xl font-display mb-4 text-black">Why We Don’t Sell on Amazon</h3>
                <p className="text-gray-700 leading-relaxed">
                    At Vanya Eco Products, we’ve chosen not to sell through Amazon or supermarkets — not because it’s easy, but because it’s right.
                    Our products contain no preservatives or artificial stabilizers, giving them a shorter shelf life but unmatched freshness and purity.
                    We believe in direct connections — between the farmer, us, and you. Every pack is freshly ground, packed with care, and shipped straight from Wayanad.
                    We’re not chasing mass shelves; we’re nurturing trust, freshness, and authenticity. Because for us, it’s not just business — it’s a promise from our land to your kitchen. 
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div ref={whyRef} className={`max-w-6xl mx-auto mt-16 px-6 transition-all duration-700 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h3 className="text-2xl font-display text-center mb-10 text-black">Why Choose Us </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700">Pure & Natural</h4>
                        <p className="text-gray-600">No chemicals, preservatives, or artificial coloring—just pure, natural goodness from Wayanad’s fertile soil.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700">Farm-to-Table Freshness</h4>
                        <p className="text-gray-600">We source directly from farmers and process in small batches to preserve maximum aroma and flavor.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700">Sustainable & Honest</h4>
                        <p className="text-gray-600">We prioritize sustainability, fair trade, and transparency in every step — from harvest to your home.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
