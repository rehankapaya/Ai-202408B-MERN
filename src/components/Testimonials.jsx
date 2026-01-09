import React from 'react'

export default function Testimonials() {
  return (
    <div>
      <section id="testimonials" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Loved by thousands of creators</h2>
            <div class="grid md:grid-cols-2 gap-8">
                {/* <!-- Review 1 --> */}
                <div class="bg-slate-50 p-8 rounded-2xl">
                    <div class="flex gap-1 mb-4 text-yellow-400">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <p class="text-lg text-slate-700 mb-6 italic">"NexStream completely transformed how we handle our project management. I can't imagine going back to the old way."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" class="w-12 h-12 rounded-full"/>
                        <div>
                            <h4 class="font-bold">Sarah Jenkins</h4>
                            <p class="text-sm text-slate-500">CTO at TechFlow</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Review 2 --> */}
                <div class="bg-slate-50 p-8 rounded-2xl">
                    <div class="flex gap-1 mb-4 text-yellow-400">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <p class="text-lg text-slate-700 mb-6 italic">"The ROI was immediate. Within two weeks, we saw a 40% increase in team productivity. Highly recommended."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="w-12 h-12 rounded-full"/>
                        <div>
                            <h4 class="font-bold">Mark Thompson</h4>
                            <p class="text-sm text-slate-500">Founder of StartUp Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
