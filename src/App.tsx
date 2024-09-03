import { ThemeProvider } from './providers/ThemeProvider'
import SideBar from './components/SideBar'
import NavbarViewer from './components/liveViewer/navbarViewer'
import { ComponentProvider } from './providers/ComponentProvider'
import HeroViewer from './components/liveViewer/heroViewer'
import CTAViewer from './components/liveViewer/ctaViewer'
import FooterViewer from './components/liveViewer/footerViewer'
import FAQViewer from './components/liveViewer/faqViewer'
import SocialProofViewer from './components/liveViewer/socialProofCompanies'
import Testimonials1 from './components/testimonials/Testimonials1'
import CTA1 from './components/CTAs/CTA1'
import Testimonials3 from './components/testimonials/Testimonials3'
import Testimonials2 from './components/testimonials/Testimonials2'
import Testimonials4 from './components/testimonials/Testimonials4'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ComponentProvider>
        <main className='min-h-[120vh] mt-20'>
          <NavbarViewer />
          <CTA1/>
          <Testimonials1/>
          <Testimonials2/>
          <Testimonials3/>
          <Testimonials4/>
          <HeroViewer />
          <SocialProofViewer/>
          <CTAViewer />
          <FAQViewer/>
          <br />
          <FooterViewer />
          <SideBar />
        </main>
      </ComponentProvider>
    </ThemeProvider>
  )
}

export default App
