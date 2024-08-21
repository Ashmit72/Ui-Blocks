
import { Button } from '../ui/button'
import IconTitlePopover from './IconTitlePopover'
import TitlePopover from './TitlePopover'
import IconTitleTextPopover from './IconTItleTextPopover'
import IconTItleTextPopover2 from './IconTitleTextPopover2'
import FullScreenPopover from './FullWidthPopover'
import { useState } from 'react'

function Navbar2() {
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
        <main className='bg-transparent py-4 fixed top-0 left-0 w-screen'>
            {/* CONFUSION: Regarding the border and its opacity */}
            {/* CONFUSION:Regarding the padding on the navbar which is equal in all sides in this variant */}
            <nav className={`px-6 py-2.5 max-w-screen-xl mx-auto ${isScrolled ? 'bg-background/60 backdrop-blur border border-border/80' : ''} transition-all ease-in-out rounded-lg`}>
                {/* 
                When the page is scrolled the following classes should be added in the nav element:
                - bg-background/60 
                - backdrop-blur 
                - border
                */}
                <div className="flex items-center justify-between relative">
                    <img src="Radian.png" alt="Logo" className='h-9' />
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

export default Navbar2