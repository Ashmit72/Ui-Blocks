import { ComponentProvider } from "./providers/ComponentProvider"
import { ThemeProvider } from "./providers/ThemeProvider"
import Navbar1 from "./components/navbars/Navbar1"
import HeroSection1 from "./components/heroSections/v1/HeroSection1"
import CTA3 from "./components/CTAs/CTA3"
import SocialProofCompanies1 from "./components/socialProofCompanies/socialProofCompanies1"
import Footer2 from "./components/footers/Footer2"
import { ModeToggle } from "./components/ModeSwitch"
import Pricing1 from "./components/Pricings/Pricing1"
import Pricing2 from "./components/Pricings/Pricing2"

function Test() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="radian-ui-theme">
            <ComponentProvider>
                <main className='min-h-[120vh] mt-20'>
                    <Navbar1 />
                    <HeroSection1 />
                    <CTA3 />
                    <SocialProofCompanies1 />
                    <Pricing1/>
                    <Footer2 />
                    <div className="fixed bottom-3 left-3">
                        <ModeToggle />
                    </div>
                </main>
            </ComponentProvider>
        </ThemeProvider>
    )
}

export default Test
