import React, { useState } from 'react'


export default function Gallery({ images = [] }) {
    const [open, setOpen] = useState(null)
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((src, i) => (
                    <button key={i} onClick={() => setOpen(i)} className="rounded overflow-hidden">
                        <img src={src} alt={`gallery-${i}`} className="w-full h-24 object-cover" />
                    </button>
                ))}
            </div>


            {open !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop" onClick={() => setOpen(null)}>
                    <div className="max-w-4xl mx-auto p-6">
                        <img src={images[open]} alt="enlarged" className="w-full h-auto rounded" />
                    </div>
                </div>
            )}
        </div>
    )
}