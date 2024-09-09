import { useComponentContext } from '@/providers/ComponentProvider'
import SocialProofCompanies1 from '../socialProofCompanies/socialProofCompanies1'
import SocialProofCompanies2 from "../socialProofCompanies/socialProofCompanies2"
import SocialProofCompanies3 from "../socialProofCompanies/socialProofCompanies3"
import SocialProofCompanies4 from "../socialProofCompanies/socialProofCompanies4"


export type SocialProofVariationKeys = 'Social Proof Companies 1' | 'Social Proof Companies 2' | 'Social Proof Companies 3' | 'Social Proof Companies 4'

export const socialProofVariations: Record<SocialProofVariationKeys, React.ReactNode> = {
    'Social Proof Companies 1': <SocialProofCompanies1 />,
    'Social Proof Companies 2': <SocialProofCompanies2 />,
    'Social Proof Companies 3': <SocialProofCompanies3 />,
    'Social Proof Companies 4': <SocialProofCompanies4 />,
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