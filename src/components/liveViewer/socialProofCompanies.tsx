import { useState } from 'react'
import { useComponentContext } from '@/providers/ComponentProvider'
import SocialProofCompanies1 from '../socialProofCompanies/socialProofCompanies1'

export type SocialProofVariationKeys = 'Social Proof Companies 1'

export const socialProofVariations: Record<SocialProofVariationKeys, React.ReactNode> = {
    'Social Proof Companies 1': <SocialProofCompanies1 />,
}

function SocialProofViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {socialProofVariations[selectedComponents.socialProofCompany as SocialProofVariationKeys]}
        </>
    )
}
export default SocialProofViewer