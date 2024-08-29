import { ThemeProvider } from './providers/ThemeProvider'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import NavbarViewer from './components/liveViewer/navbarViewer'
import { ComponentProvider } from './providers/ComponentProvider'
import HeroViewer from './components/liveViewer/heroViewer'
import CTAViewer from './components/liveViewer/ctaViewer'
import FooterViewer from './components/liveViewer/footerViewer'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ComponentProvider>
        <main className='min-h-[120vh] mt-20'>
          <Outlet />
          <NavbarViewer />
          <HeroViewer />
          <CTAViewer />
          <br/>
          <FooterViewer />
          <SideBar />
        </main>
      </ComponentProvider>
    </ThemeProvider>
  )
}

export default App
