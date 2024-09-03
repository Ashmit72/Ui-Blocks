
import { Button } from '../ui/button'
import IconTitlePopover, { IconTitleAccordion } from './IconTitlePopover'
import TitlePopover, { TitleAccordion } from './TitlePopover'
import IconTitleTextPopover, { IconTitleTextAccordion } from './IconTItleTextPopover'
import IconTItleTextPopover2, { IconTitleTextAccordion2 } from './IconTitleTextPopover2'
import FullScreenPopover, { ComplexAccordion } from './FullWidthPopover'
import { useState } from 'react'
import { Menu01, X } from '@untitled-ui/icons-react'
import { Accordion } from '../ui/custom/mobile-nav-accordion'

function Navbar2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <main className='bg-gradient-to-b from-background/20 backdrop-blur to-transparent pt-4 z-10 fixed top-0 left-0 overflow-y-scroll w-screen'>
            {/* CONFUSION: Regarding the border and its opacity */}
            {/* CONFUSION:Regarding the padding on the navbar which is equal in all sides in this variant */}
            <nav className={`px-5 sm:px-6 lg:px-3.5 py-3 max-w-[1260px] mx-auto ${isScrolled ? 'lg:bg-background/60 lg:backdrop-blur lg:border lg:border-border/80' : ''} transition-all ease-in-out rounded-xl`}>
                {/* 
                When the page is scrolled the following classes should be added in the nav element:
                - bg-background/60 
                - backdrop-blur 
                - border
                */}
                <div className="flex items-center justify-between relative">
                    <img src="Radian.png" alt="Logo" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert' />
                    {/* Menu Bar- For Responsiveness */}
                    <div className='lg:hidden'>
                        {!isOpen ?
                            <div onClick={() => setIsOpen(!isOpen)} className="size-10 flex items-center justify-center">
                                <Menu01 className='size-6 text-foreground shrink-0' />
                            </div>
                            :
                            <div onClick={() => setIsOpen(!isOpen)} className="size-10 flex items-center justify-center">
                                <X className='size-6 text-foreground shrink-0' />
                            </div>
                        }

                    </div>
                    <ul className='hidden lg:flex items-center justify-center gap-8'>
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
                    <div className='hidden lg:flex gap-2'>
                        <Button variant={"outline"} size={"lg"}>Login</Button>
                        <Button size={"lg"}>Get Started</Button>
                    </div>
                </div>
            </nav>


            {/* Navigation Links and Accordions For Small and Medium Devices */}
            <nav className={`fixed top-0 left-0 w-screen h-screen bg-background overflow-y-auto z-50  ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                <div className="flex justify-between items-center px-5 sm:px-6 py-5">
                    {/* Logo and Close Button */}
                    <img src="Radian.png" alt="Logo" className='h-8' />
                    <div onClick={() => setIsOpen(false)} className="size-10 flex items-center justify-center bg-border/50 rounded-md">
                        <X className='size-6 text-foreground shrink-0' />
                    </div>
                </div>
                <div className="flex flex-col px-5 sm:px-6 pb-5 gap-4">
                    <Accordion type="single" collapsible>
                        <a href='#' className="flex flex-1 items-center justify-between py-[1.125rem] text-base text-foreground font-medium border-b cursor-pointer">
                            Non Accordion
                        </a>
                        {/* Accordion Style Navigation Menus */}
                        <TitleAccordion />
                        <IconTitleAccordion />
                        <IconTitleTextAccordion />
                        <IconTitleTextAccordion2 />
                        <ComplexAccordion />
                    </Accordion>
                    <div className='flex flex-col gap-4 '>
                        <Button variant={"outline"} size={"lg"} className='w-full'>Login</Button>
                        <Button className='w-full' size={"lg"}>Get Started</Button>
                    </div>
                </div>

            </nav>

        </main>
    )
}

export default Navbar2