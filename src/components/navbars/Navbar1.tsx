
import { Button } from '../ui/button'
import IconTitlePopover, { IconTitleAccordion } from './IconTitlePopover'
import TitlePopover, { TitleAccordion } from './TitlePopover'
import IconTitleTextPopover, { IconTitleTextAccordion } from './IconTItleTextPopover'
import IconTItleTextPopover2, { IconTitleTextAccordion2 } from './IconTitleTextPopover2'
import FullWidthPopover, { FullWidthAccordion } from './FullWidthPopover'
import { useEffect, useState } from 'react'
import { Menu01, X } from '@untitled-ui/icons-react'
import { Accordion } from '../ui/custom/mobile-nav-accordion'
import { Link } from 'react-router-dom'


function Navbar1() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    // Handle navbar background on scroll
    useEffect(() => {
        const changeNavbarColor = () => {
            setIsScrolled(window.scrollY >= 80);
        };
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);

    return (
        <>
            {/* Navigation Links and Popovers For Large and Extra Large Devices*/}
            <nav className={`${isScrolled ? 'bg-background/80 backdrop-blur' : 'bg-background'} sticky z-50 top-0 w-full`}>
                <div className={`px-5 lg:px-6 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4 lg:py-3' : 'py-5'} max-w-screen-xl mx-auto`}>
                    <div className="flex items-center justify-between relative">
                        {/* Logo or Title  */}
                        <Link to={"/"}>
                            <img src="Radian.png" alt="Logo" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert' />
                        </Link>
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
                                <FullWidthPopover />
                            </li>
                        </ul>
                        <div className='hidden lg:flex lg:gap-2'>
                            <Link to={"#"}>
                                <Button variant={"outline"} size={"lg"}>Login</Button>
                            </Link>
                            <Link to={"#"}>
                                <Button size={"lg"}>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Links and Accordions For Small and Medium Devices */}
                <nav className={`fixed top-0 left-0 w-screen h-screen bg-background overflow-y-auto z-10  ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                    <div className="flex justify-between items-center px-5 py-5">
                        {/* Logo and Close Button */}
                        <Link to={"/"}>
                            <img src="Radian.png" alt="Logo" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert' />
                        </Link>
                        <div onClick={() => setIsOpen(false)} className="size-10 flex items-center justify-center bg-border/50 rounded-md">
                            <X className='size-6 text-foreground shrink-0' />
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pb-5 gap-4">
                        <Accordion type="single" collapsible>
                            <Link to="#" className="flex flex-1 items-center justify-between py-[1.125rem] text-base text-foreground font-medium border-b cursor-pointer">
                                Non Accordion
                            </Link>
                            {/* Accordion Style Navigation Menus */}
                            <TitleAccordion />
                            <IconTitleAccordion />
                            <IconTitleTextAccordion />
                            <IconTitleTextAccordion2 />
                            <FullWidthAccordion />
                        </Accordion>
                        <div className='flex flex-col gap-4 '>
                            <Link to={"#"}>
                                <Button variant={"outline"} size={"lg"} className='w-full'>Login</Button>
                            </Link>
                            <Link to={"#"}>
                                <Button className='w-full' size={"lg"}>Get Started</Button>
                            </Link>
                        </div>
                    </div>

                </nav>
            </nav>
        </>
    )
}

export default Navbar1

