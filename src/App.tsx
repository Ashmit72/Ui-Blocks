
import { SearchMd } from '@untitled-ui/icons-react'
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
import CTA1 from './components/CTAs/CTA1'
import CTA2 from './components/CTAs/CTA2'
import CTA3 from './components/CTAs/CTA3'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Navbar1 />

        {/* <Navbar2 /> */}

        {/* <NavbarV2 /> */}

        <div className="min-h-screen mt-20 flex flex-col gap-4">
          <HeroSection1 />
          <HeroSection2 />
          <HeroSection3 />
          <HeroSection4 />
          <CTA1 />
          <CTA2 />
          <CTA3 />
        </div>

        <div className='text-center'>
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
