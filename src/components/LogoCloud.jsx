import React from 'react'

export default function LogoCloud() {
  return (
    <div>
       <section class="bg-white py-12 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4">
            <p class="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">Trusted by industry leaders</p>
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* <!-- Using Text as placeholder logos for simplicity --> */}
                <span class="text-xl font-bold font-serif">ACME Corp</span>
                <span class="text-xl font-bold font-mono">Quantum</span>
                <span class="text-xl font-extrabold italic">Bolt</span>
                <span class="text-xl font-bold">GlobalBank</span>
                <span class="text-xl font-semibold">Niave</span>
            </div>
        </div>
    </section>
    </div>
  )
}
