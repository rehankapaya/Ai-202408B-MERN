import React from 'react'

export default function FeaturesSection() {
  return (
    <div>
      <section id="features" class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">We've built the tools that allow you to focus on your product, not your infrastructure.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div class="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="bar-chart-2" class="text-indigo-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Real-time Analytics</h3>
                    <p class="text-slate-600">Track every metric that matters. Our dashboard updates in real-time so you never miss a beat.</p>
                </div>
                {/* <!-- Feature 2 --> */}
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div class="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="shield-check" class="text-indigo-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Bank-grade Security</h3>
                    <p class="text-slate-600">Your data is encrypted end-to-end. We adhere to the strictest security standards in the industry.</p>
                </div>
                {/* <!-- Feature 3 --> */}
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                    <div class="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <i data-lucide="zap" class="text-indigo-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Lightning Fast</h3>
                    <p class="text-slate-600">Optimized for speed. Our infrastructure ensures your workflow remains smooth and lag-free.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
