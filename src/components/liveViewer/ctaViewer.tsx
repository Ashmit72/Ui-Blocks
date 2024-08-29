import React from 'react'
import CTA1 from '../CTAs/CTA1'
import CTA2 from '../CTAs/CTA2'
import CTA3 from '../CTAs/CTA3'
import CTA4 from '../CTAs/CTA4'
import { useComponentContext } from '@/providers/ComponentProvider'

export type CTAVariationKeys = 'CTA 1' | 'CTA 2' | 'CTA 3' | 'CTA 4'

export const CTAVariations: Record<CTAVariationKeys, React.ReactNode> = {
    'CTA 1': <CTA1 />,
    'CTA 2': <CTA2 />,
    'CTA 3': <CTA3 />,
    'CTA 4': <CTA4 />
}

function CTAViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {CTAVariations[selectedComponents.cta as CTAVariationKeys]}
        </>
    )
}

export default CTAViewer