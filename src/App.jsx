import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import LogoCloud from './components/LogoCloud'
import FeaturesSection from './components/FeaturesSection'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div class="bg-slate-50 text-slate-900 smooth-scroll">

        {/* <!-- NAVIGATION --> */}
        <NavbarComponent />
        {/* <NavbarComponent /> */}

        {/* <!-- HERO SECTION --> */}
        <HeroSection />
        {/* <HeroSection /> */}

        {/* <!-- LOGO CLOUD --> */}
        <LogoCloud />

        {/* <!-- FEATURES SECTION --> */}
        <FeaturesSection />

        {/* <!-- TESTIMONIALS --> */}
        <Testimonials />

        {/* <!-- CTA SECTION --> */}
        <CTASection />

        {/* <!-- FOOTER --> */}
        <Footer />
      </div>
    </>
  )
}

export default App
