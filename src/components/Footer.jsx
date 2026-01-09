import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="bg-slate-900 text-slate-400 py-12">
        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-1">
                <div class="flex items-center gap-2 mb-4 text-white">
                    <i data-lucide="zap" class="w-6 h-6"></i>
                    <span class="font-bold text-lg">NexStream</span>
                </div>
                <p class="text-sm">Making workflow automation accessible for everyone.</p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-4">Product</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">Features</a></li>
                    <li><a href="#" class="hover:text-white">Pricing</a></li>
                    <li><a href="#" class="hover:text-white">Integrations</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-4">Company</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">About Us</a></li>
                    <li><a href="#" class="hover:text-white">Careers</a></li>
                    <li><a href="#" class="hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-4">Legal</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
            &copy; 2023 NexStream Inc. All rights reserved.
        </div>
    </footer>
    </div>
  )
}
