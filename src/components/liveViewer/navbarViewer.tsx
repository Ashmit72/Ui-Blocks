import { useState } from 'react'
import Navbar1 from '../navbars/Navbar1'
import Navbar2 from '../navbars/Navbar2'
import { useComponentContext } from '@/providers/ComponentProvider'

export type NavbarVariationKeys = 'Navigation Bar 1' | 'Navigation Bar 2'

export const navbarVariations: Record<NavbarVariationKeys, React.ReactNode> = {
    'Navigation Bar 1': <Navbar1 />,
    'Navigation Bar 2': <Navbar2 />
}

function NavbarViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {navbarVariations[selectedComponents.navbar as NavbarVariationKeys]}
        </>
    )
}
export default NavbarViewer