import React from 'react'

export default function NavbarComponent() {
  return (
    <div>
      <nav class="bg-white border-b border-slate-200 fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                {/* <!-- Logo --> */}
                <div class="flex-shrink-0 flex items-center gap-2">
                    <i data-lucide="zap" class="text-indigo-600 w-8 h-8"></i>
                    <span class="font-bold text-xl tracking-tight">NexStream</span>
                </div>
                
                {/* <!-- Desktop Menu --> */}
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="#features" class="text-slate-600 hover:text-indigo-600 transition">Features</a>
                    <a href="#testimonials" class="text-slate-600 hover:text-indigo-600 transition">Testimonials</a>
                    <a href="#pricing" class="text-slate-600 hover:text-indigo-600 transition">Pricing</a>
                    <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium transition">Get Started</a>
                </div>

                {/* <!-- Mobile Menu Button --> */}
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-slate-600 hover:text-slate-900 focus:outline-none">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>
        {/* <!-- Mobile Menu (Hidden by default) --> */}
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 p-4">
            <a href="#features" class="block py-2 text-slate-600">Features</a>
            <a href="#testimonials" class="block py-2 text-slate-600">Testimonials</a>
            <a href="#pricing" class="block py-2 text-slate-600">Pricing</a>
            <a href="#" class="block mt-4 text-center bg-indigo-600 text-white px-5 py-2 rounded-md">Get Started</a>
        </div>
    </nav>  
    </div>
  )
}
