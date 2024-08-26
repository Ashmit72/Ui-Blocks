
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

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Navbar1 />

        {/* <Navbar2 /> */}

        {/* <NavbarV2 /> */}

        <div className="min-h-screen mt-20">
          <HeroSection1 />
          <HeroSection2 />
          <HeroSection3 />
          <HeroSection4 />
          <SocialProofCompanies1 />
        </div>

        <div className='text-center'>
          <ModeToggle />
        </div>

        <div className='mt-10'>
          <Footer1/>
          {/* <Footer2/> */}
        </div>


        {/* <form className="max-w-xs mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-foreground sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchMd className='h-4 w-4 text-muted-foreground' />
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-foreground border border-border/5 rounded-md bg-background" placeholder="Search components" required />
          </div>
        </form> */}
      </div>
    </ThemeProvider>
  )
}

export default App
