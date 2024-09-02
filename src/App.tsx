import { ThemeProvider } from './providers/ThemeProvider'
import SideBar from './components/SideBar'
import NavbarViewer from './components/liveViewer/navbarViewer'
import { ComponentProvider } from './providers/ComponentProvider'
import HeroViewer from './components/liveViewer/heroViewer'
import CTAViewer from './components/liveViewer/ctaViewer'
import FooterViewer from './components/liveViewer/footerViewer'
import { FilterLines } from '@untitled-ui/icons-react'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ComponentProvider>
        <main className='min-h-[120vh] mt-20'>
          <NavbarViewer />
          <HeroViewer />
          <CTAViewer />
          <FooterViewer />
          <SideBar />
        </main>
      </ComponentProvider>
    </ThemeProvider>
  )
}

export default App
