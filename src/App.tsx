
import { ModeToggle } from './components/ModeSwitch'
import Navbar1 from './components/navbars/Navbar1'
import Navbar2 from './components/navbars/Navbar2'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        {/* <Navbar1 /> */}

        <Navbar2 />

        <div className="min-h-[200vh]">

        </div>
        <div className='text-center'>
          <ModeToggle />
        </div>

        <div className="w-20 h-20 border border-red-600">

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
