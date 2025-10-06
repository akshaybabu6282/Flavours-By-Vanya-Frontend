import React from 'react'
import useInView from '../hooks/useInView'

const licenses = [
  { 
    id: 'fssai', 
    title: 'FSSAI Certified', 
    number: 'Lic No: 21325247000571', 
    desc: 'Ensures food safety, hygiene & quality standards.', 
    logo: '/assets/fssai.svg' 
  },
  { 
    id: 'gst', 
    title: 'GST Registered', 
    number: 'GSTIN: 32DZEPK4981E1ZE', 
    desc: 'Transparent tax compliance for business transactions.', 
    logo: '/assets/gst.svg' 
  },
  { 
    id: 'udyam', 
    title: 'Udyam (MSME)', 
    number: 'UDYAM-KL-14-0022806', 
    desc: 'Recognized under MSME for small business credibility.', 
    logo: '/assets/Udyam.svg' 
  },
  { 
    id: 'tm', 
    title: 'Trademark', 
    number: 'In Process', 
    desc: 'Our brand is officially trademarked (application in process).', 
    logo: '/assets/trademark.svg' 
  },
]

export default function Licenses() {
  const [ref, inView] = useInView()

  return (
    <section id="licenses" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-display mb-6">Our Certifications & Licenses</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          We are a fully certified and compliant business, ensuring trust, authenticity, and transparency in every step.
        </p>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
            transition-all duration-700`}
        >
          {licenses.map(l => (
            <div key={l.id} className="p-6 border rounded-lg flex flex-col items-center gap-4 hover:shadow-2xl transition">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 border-1">
                <img src={l.logo} alt={l.title} className="w-15 h-15 object-contain" />
              </div>
              <div className="text-lg font-semibold">{l.title}</div>
              <div className="text-gray-500 text-sm">{l.number}</div>
              <p className="text-gray-600 text-sm text-center">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
