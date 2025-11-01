import React from 'react'
import useInView from '../hooks/useInView'


function DontSellOnline() {
    const [ref, inView] = useInView()
        const [missionRef, missionInView] = useInView()
        const [whyRef, whyInView] = useInView()
    return (
        <section className="bg-gradient-to-b from-gray-100 to-black py-16 md:py-20">
            <div ref={missionRef} className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h3 className="text-2xl font-display mb-6 text-black" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bolder' }}>
                    Why We Don’t Sell in Online Stores or Supermarkets
                </h3>
                <div className="text-white leading-relaxed text-left space-y-6" style={{ fontFamily: '"Merriweather", serif' }}>
                    <div>
                        <h4 className="font-semibold text-black mb-2" >1. Focus on Freshness & Authenticity</h4>
                        <p style={{ fontFamily: '"Roboto", sans-serif' }}>
                            Our spices are freshly ground in small batches without preservatives or anti caking agents. Selling through online stores or supermarkets means the stock may sit for months under varied storage conditions, which can affect aroma and quality. We prefer direct delivery so our customers receive products that are truly fresh just as they leave our mills.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">2. Control Over Product Handling</h4>
                        <p style={{ fontFamily: '"Roboto", sans-serif' }}>
                            We personally ensure every pouch, jar, and box is packed, sealed, and transported under ideal conditions. In retail shelves or large e-commerce warehouses, we lose control over how products are handled, stored, or displayed which can compromise the “Flavours by Vanya” promise.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">3. Building a Direct Relationship with Customers</h4>
                        <p style={{ fontFamily: '"Roboto", sans-serif' }}>
                            We believe in personal connections our goal is to build trust, not just sales numbers. By selling directly (door-to-door, via our own channels, or through trusted partners), we can listen to feedback, share stories about Wayanad farmers, and ensure customer satisfaction first hand.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">4. Avoiding Middlemen Margins</h4>
                        <p style={{ fontFamily: '"Roboto", sans-serif' }}>
                            Supermarkets and online platforms charge high commissions, listing fees, and offer discounts that eat into the farmer’s and producer’s share. By staying independent, we ensure fair pricing for customers and fair pay for our farmers.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black mb-2">5. Promoting Local & Sustainable Trade</h4>
                        <p style={{ fontFamily: '"Roboto", sans-serif' }}>
                            We want to grow sustainably, step by step, with community support. Our focus is on local and regional markets first ensuring traceability, transparency, and the “farm to kitchen” experience before scaling to mass retail.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div ref={whyRef} className={`max-w-6xl mx-auto mt-16 px-6 transition-all duration-700 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h3 className="text-2xl font-display text-center mb-10 text-white" style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 'bolder' }}>
                    Why Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700" style={{ fontFamily: '"Merriweather", serif' }}>Pure & Natural</h4>
                        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif' }}>No chemicals, preservatives, or artificial coloring — just pure, natural goodness from Wayanad’s fertile soil.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700" style={{ fontFamily: '"Merriweather", serif' }}>Farm-to-Table Freshness</h4>
                        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif' }}>We source directly from farmers and process in small batches to preserve maximum aroma and flavor.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                        <h4 className="font-semibold text-lg mb-3 text-amber-700" style={{ fontFamily: '"Merriweather", serif' }}>Sustainable & Honest</h4>
                        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif' }}>We prioritize sustainability, fair trade, and transparency in every step — from harvest to your home.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DontSellOnline