
import { Button } from '../ui/button'
import IconTitlePopover from './IconTitlePopover'
import TitlePopover from './TitlePopover'
import IconTitleTextPopover from './IconTItleTextPopover'
import IconTItleTextPopover2 from './IconTitleTextPopover2'
import FullScreenPopover from './FullWidthPopover'
import { useState } from 'react'

function Navbar1() {
    const [isScrolled, setIsScrolled] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <main className={`${isScrolled ? 'bg-background/80 backdrop:blur' : 'bg-background'} fixed top-0 left-0 w-screen`}>
            <nav className={`px-6 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2.5' : 'py-5'} max-w-screen-xl mx-auto`}>
                <div className="flex items-center justify-between relative">
                    <img src="Radian.png" alt="Logo" />
                    <ul className='flex items-center justify-center gap-8'>
                        <li>
                            <TitlePopover />
                        </li>
                        <li>
                            <IconTitlePopover />
                        </li>
                        <li>
                            <IconTitleTextPopover />
                        </li>
                        <li>
                            <IconTItleTextPopover2 />
                        </li>
                        <li>
                            <FullScreenPopover />
                        </li>
                    </ul>
                    <div className='flex gap-2'>
                        <Button variant={"outline"}>Login</Button>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Navbar1