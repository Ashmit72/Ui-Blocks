
import { Button } from '../ui/button'
import IconTitlePopover from './IconTitlePopover'
import TitlePopover from './TitlePopover'
import IconTitleTextPopover from './IconTItleTextPopover'
import IconTItleTextPopover2 from './IconTitleTextPopover2'
import FullScreenPopover from './FullScreenPopover'
import { useState } from 'react'
import { Menu01, X } from '@untitled-ui/icons-react'

function NavbarV2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className={`${isScrolled ? 'bg-background/80 backdrop:blur' : 'bg-background'} fixed top-0 left-0 w-screen`}>
            <div className="relative w-screen">
                <nav className={`px-5 lg:px-6 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 lg:py-3' : 'py-6 lg:py-5'} max-w-screen-xl mx-auto`}>
                    <div className="flex items-center justify-between">

                        {/* Logo or Title  */}
                        <img src="Radian.png" alt="Logo" className='h-9' />
                        {/* Logo or Title  */}

                        {/* Menu Bar- For Responsiveness */}
                        <div className='lg:hidden'>
                            {!isOpen ?
                                <Menu01 onClick={() => setIsOpen(!isOpen)} className='size-6 text-foreground shrink-0' />
                                :
                                <X onClick={() => setIsOpen(!isOpen)} className='size-6 text-foreground shrink-0' />
                            }

                        </div>
                        {/* Menu Bar- For Responsiveness End */}

                        {/* Navigation Links and Dropdowns */}
                        <ul className='hidden lg:flex lg:items-center lg:justify-center lg:gap-8'>
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
                        {/* Navigation Links and Dropdowns End*/}

                        <div className='hidden lg:flex lg:gap-2'>
                            <Button variant={"outline"}>Login</Button>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </nav>

            </div>
        </main>
    )
}

export default NavbarV2