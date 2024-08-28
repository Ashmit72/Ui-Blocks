import { ModeToggle } from './components/ModeSwitch'
import Navbar1 from './components/navbars/Navbar1'
import Navbar2 from './components/navbars/Navbar2'
import NavbarV2 from './components/navbars/NavbarV2'
import { ThemeProvider } from './providers/ThemeProvider'
import HeroSection1 from './components/heroSections/v2/HeroSection1'
import HeroSection2 from './components/heroSections/v2/HeroSection2'
import HeroSection3 from './components/heroSections/v2/HeroSection3'
import HeroSection4 from './components/heroSections/v2/HeroSection4'
import SocialProofCompanies1 from './components/socialProofCompanies/socialProofCompanies1'
import Footer1 from './components/footers/Footer1'
import Footer2 from './components/footers/Footer2'
import Footer3 from './components/footers/Footer3'
import CTA1 from './components/CTAs/CTA1'
import CTA2 from './components/CTAs/CTA2'
import CTA3 from './components/CTAs/CTA3'
import CTA4 from './components/CTAs/CTA4'
import SideBar from './components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className='min-h-[120vh] mt-20'>
        <Outlet />
        <SideBar />
      </main>
    </ThemeProvider>
  )
}

export default App
