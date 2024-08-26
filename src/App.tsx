
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
import Footer1 from './components/footers/Footer1'
import Footer2 from './components/footers/Footer2'
import CTA1 from './components/CTAs/CTA1'
import CTA2 from './components/CTAs/CTA2'
import CTA3 from './components/CTAs/CTA3'
import CTA4 from './components/CTAs/CTA4'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Navbar1 />

        {/* <Navbar2 /> */}

        {/* <NavbarV2 /> */}

        <div className="min-h-screen mt-20">
          <HeroSection1 />
          <br></br>
          <HeroSection2 />
          <br/>
          <HeroSection3 />
          <br/>
          <HeroSection4 />
          <br/>
          <CTA1 />
          <br/>
          <CTA2 />
          <br/>
          <CTA3 />
          <br />
          <CTA4 />
        </div>

        <div className='text-center'>
          <ModeToggle />
        </div>

        <div className='mt-10'>
          {/* <Footer1 /> */}
          <Footer2 />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
