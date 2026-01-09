import React from 'react'

export default function HeroSection() {
  return (
    <div>
        <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto">
            <div class="inline-block bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                🚀 Version 2.0 is now live
            </div>
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Automate your workflow, <span class="text-indigo-600">amplify your results.</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Stop wasting time on manual tasks. NexStream helps you streamline your business operations with powerful AI-driven tools designed for growth.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition shadow-lg shadow-indigo-200">
                    Start Free Trial
                </a>
                <a href="#" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-lg px-8 py-4 rounded-lg font-semibold transition">
                    View Demo
                </a>
            </div>
            <div class="mt-8 text-sm text-slate-500">
                No credit card required · 14-day free trial
            </div>
        </div>
        
        {/* <!-- Hero Image Placeholder --> */}
        <div class="mt-16 rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="App Dashboard" class="w-full object-cover"/>
        </div>
    </section>
    </div>
  )
}
