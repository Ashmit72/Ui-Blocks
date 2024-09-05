import { useState } from 'react'
import { useComponentContext } from '@/providers/ComponentProvider'
import SocialProofCompanies1 from '../socialProofCompanies/socialProofCompanies1'
import SocialProofCompanies2 from "../socialProofCompanies/socialProofCompanies2"

export type SocialProofVariationKeys = 'Social Proof Companies 1'

export const socialProofVariations: Record<SocialProofVariationKeys, React.ReactNode> = {
    'Social Proof Companies 1': <SocialProofCompanies1 />,
    'Social Proof Companies 2': <SocialProofCompanies2 />
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