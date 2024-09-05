import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/custom/sidebar-accordion'
import { Label } from './ui/label'
import { Check, Settings02 } from '@untitled-ui/icons-react'
import { Badge } from './ui/badge'
import { ModeToggle } from './ModeSwitch'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarVariations } from './liveViewer/navbarViewer'
import { ComponentType, useComponentContext } from '@/providers/ComponentProvider'
import { heroVariations } from './liveViewer/heroViewer'
import { CTAVariations } from './liveViewer/ctaViewer'
import { footerVariations } from './liveViewer/footerViewer'
import { faqVariations } from './liveViewer/faqViewer'
import { socialProofVariations } from './liveViewer/socialProofCompanies'
import { featuresVariations } from './liveViewer/featuresViewer'
import { testimonialsVariations } from './liveViewer/testimonialsViewer'
import { pricingVariations } from './liveViewer/pricingViewer'

export type component = {
    name: string,
    componentType: ComponentType,
    variations: string[]
}

function SideBar() {
    const websiteComponents: component[] = [
        {
            name: 'Navigation Bar',
            componentType: 'navbar',
            variations: Object.keys(navbarVariations)
        },
        {
            name: 'Hero Section',
            componentType: 'hero',
            variations: Object.keys(heroVariations)
        },
        {
            name: 'Social Proof Company',
            componentType: 'socialProofCompany',
            variations: Object.keys(socialProofVariations)
        },
        {
            name: 'Features',
            componentType: 'features',
            variations: Object.keys(featuresVariations)
        },
        {
            name:'Testimonials',
            componentType:'testimonials',
            variations:Object.keys(testimonialsVariations)
        },
        {
            name: 'Pricing',
            componentType: 'pricing',
            variations: Object.keys(pricingVariations)
        },
        {
            name: 'FAQ',
            componentType: 'faq',
            variations: Object.keys(faqVariations)
        },
        {
            name: 'CTA',
            componentType: 'cta',
            variations: Object.keys(CTAVariations)
        },
       
        {
            name: 'Footer',
            componentType: 'footer',
            variations: Object.keys(footerVariations)
        },

    ]

    const [isOpen, setIsOpen] = useState(false)

    const { selectedComponents, setComponentVariation } = useComponentContext();

    const handleComponentChange = (type: ComponentType, variation: string) => {
        setComponentVariation(type, variation);
    };

    return (
        <>
            {!isOpen ?
                <div onClick={() => setIsOpen(true)} className="fixed border p-3 rounded-xl bg-background flex items-center justify-center z-50 bottom-3 left-3 cursor-pointer">
                    <Settings02 className='size-6 animate-spin' />
                </div>
                :
                <div className="fixed top-0 left-0 w-fit bg-background z-50 h-screen py-3 pl-3">
                    <div className="relative w-[17.5rem] border rounded-xl h-full py-3 flex flex-col gap-2">

                        <div>
                            {/* Logo */}
                            <Link to={"/"}>
                                <div className="px-3.5 py-2">
                                    <img src="Radian.png" alt="Radian" className='h-6 dark:saturate-0 dark:brightness-50 dark:invert' />
                                </div>
                            </Link>
                            <div className="px-2.5 py-2">
                                {/* Badge */}
                                <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                    <span className='text-xs font-medium text-foreground capitalize'>Internal Library Version 0.0.1</span>
                                </Badge>
                            </div>
                        </div>


                        <div className='px-3 flex flex-col gap-2 h-[calc(100vh-15rem)] overflow-y-scroll scroll-smooth no-scrollbar'>
                            {/* Website Components */}
                            <div>
                                <div className="text-sm font-semibold py-2">
                                    Website Components
                                </div>
                                {websiteComponents.map((component, index) => (
                                    <Accordion type='single' collapsible>
                                        <AccordionItem key={`${component.componentType}-${index}`} value={`${component.componentType}-${index}`}>
                                            <AccordionTrigger className='text-sm font-normal'>{component.name}</AccordionTrigger>
                                            <AccordionContent >
                                                <div className="flex flex-col gap-0.5">
                                                    {component.variations.map((variation, index) => (
                                                        <div key={index} onClick={() => { handleComponentChange(component.componentType, variation) }} className={`inline-flex items-center justify-between px-2 py-3 cursor-pointer rounded-xl hover:bg-secondary ${variation === selectedComponents[component.componentType] && 'bg-secondary'}`}>
                                                            <span>{variation}</span>
                                                            {variation === selectedComponents[component.componentType] && <Check className="size-4" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ))}
                            </div>


                            {/* Application Components */}
                            <div className=''>
                                <div className="text-sm font-semibold py-2">
                                    Application Components
                                </div>
                                <Accordion type='single' collapsible>
                                    <AccordionItem value="navigation-bar">
                                        <AccordionTrigger className='text-sm font-normal'>Login</AccordionTrigger>
                                        <AccordionContent >
                                            <div className="flex flex-col">
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Login 1
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Login 2
                                                </div>
                                                <div className='px-2 py-3 cursor-pointer hover:bg-secondary'>
                                                    Login 3
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
        </>
    )
}

export default SideBar