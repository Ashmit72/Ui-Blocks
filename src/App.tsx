
import { ModeToggle } from './components/ModeSwitch'
import NavbarOne from './components/navbars/Navbar'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <NavbarOne />
        <div className='text-center'>
          <ModeToggle />
        </div>
        <div className="w-20 h-20 border">

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
