import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/custom/sidebar-accordion'
import { Label } from './ui/label'
import { Check, Settings02 } from '@untitled-ui/icons-react'
import { Badge } from './ui/badge'
import { ModeToggle } from './ModeSwitch'
import { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function SideBar() {
    const websiteComponents = [
        {
            name: "Navigation Bar",
            variations: [
                {
                    name: "Navigation Bar 1",
                    route: "/navigation-bar-1"
                },
                {
                    name: "Navigation Bar 2",
                    route: "/navigation-bar-2"
                },
            ]
        },
        {
            name: "Navbar Dropdown",
            variations: [
                {
                    name: "Navbar Dropdown 1",
                    route: "navbar-dropdown-1"
                },
                {
                    name: "Navbar Dropdown 2",
                    route: "navbar-dropdown-2"
                },
                {
                    name: "Navbar Dropdown 3",
                    route: "navbar-dropdown-3"
                },
                {
                    name: "Navbar Dropdown 4",
                    route: "navbar-dropdown-4"
                },
                {
                    name: "Navbar Dropdown 5",
                    route: "navbar-dropdown-5"
                },
            ]
        },
        {
            name: "Hero Section",
            variations: [
                {
                    name: "Hero Section 1",
                    route: "hero-section-1"
                },
                {
                    name: "Hero Section 2",
                    route: "hero-section-2"
                },
                {
                    name: "Hero Section 3",
                    route: "hero-section-3"
                },
                {
                    name: "Hero Section 4",
                    route: "hero-section-4"
                },
                {
                    name: "Hero Section 5",
                    route: "hero-section-5"
                },
            ]
        },
        {
            name: "Trusted Companies",
            variations: [
                {
                    name: "Trusted Companies 1",
                    route: "trusted-companies-1"
                }
            ]
        }
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Router>
            {!isOpen ?
                <div onClick={() => setIsOpen(true)} className="fixed border p-3 rounded-xl bg-background flex items-center justify-center z-99 bottom-3 left-3 cursor-pointer">
                    <Settings02 className='size-6 animate-spin' />
                </div>
                :
                <div className="fixed top-0 left-0 w-fit bg-background h-screen py-3 pl-3">
                    <div className="relative w-[17.5rem] border rounded-xl h-full py-3 flex flex-col gap-2">

                        <div>
                            {/* Logo */}
                            <div className="px-3.5 py-2">
                                <img src="Radian.png" alt="Radian" className='h-6' />
                            </div>
                            <div className="px-2.5 py-2">
                                {/* Badge */}
                                <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                    <span className='text-xs font-medium text-foreground capitalize'>Internal Library Version 0.0.1</span>
                                </Badge>
                            </div>
                        </div>


                        <div className='px-3 flex flex-col gap-2'>
                            {/* Website Components */}
                            <div>
                                <div className="text-sm font-semibold py-2">
                                    Website Components
                                </div>
                                <Accordion type='single' collapsible>
                                    {/* Navigation Bar Start */}
                                    {websiteComponents.map((component) => (
                                        <AccordionItem key={component.name} value={component.name}>
                                            <AccordionTrigger className='text-sm font-normal'>{component.name}</AccordionTrigger>
                                            <AccordionContent >
                                                <div className="flex flex-col gap-0.5">
                                                    {component.variations.map((variation) => (
                                                        <NavLink key={variation.name} to={variation.route}
                                                            className={({ isActive }) =>
                                                                `inline-flex items-center justify-between px-2 py-3 cursor-pointer rounded-xl ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                                                            }>
                                                            {({ isActive }) => (
                                                                <>
                                                                    <span>{variation.name}</span>
                                                                    {isActive && <Check className="size-4" />}
                                                                </>
                                                            )}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                    {/* Navigation Bar End */}
                                </Accordion>
                            </div>

                            {/* Application Components */}
                            <div>
                                <div className="text-sm font-semibold py-2">
                                    Application Components
                                </div>
                                <Accordion type='single' collapsible>
                                    <AccordionItem value="navigation-bar">
                                        <AccordionTrigger className='text-sm font-normal'>Navigation Bar</AccordionTrigger>
                                        <AccordionContent >
                                            <div className="flex flex-col">
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="navbar-dropdown">
                                        <AccordionTrigger className='text-sm font-normal'>Navigation Bar</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col">
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Navigation Bar 1
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Dark Mode and Collapse */}
                        <div>
                            <div className='absolute bottom-3'>
                                <ModeToggle />
                                <div onClick={() => setIsOpen(false)} className="px-3 py-2 flex items-center space-x-2">
                                    <Settings02 id="collapse" className='size-6' />
                                    <Label htmlFor="collapse" className='font-normal'>Collapse</Label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}
        </Router>
    )
}

export default SideBar