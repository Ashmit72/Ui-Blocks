import { useComponentContext } from "@/providers/ComponentProvider"
import VerificationLinkExpired1 from "../authentication pages/Verification link expired/VerificationLinkExpired1";
import VerificationLinkExpired2 from "../authentication pages/Verification link expired/VerificationLinkExpired2";
import VerificationLinkExpired3 from "../authentication pages/Verification link expired/VerificationLinkExpired3";
import VerificationLinkExpired4 from "../authentication pages/Verification link expired/VerificationLinkExpired4";


export type VerificationLinkExpiredVariationKeys = 'Verification Link Expired 1' | 'Verification Link Expired 2' | 'Verification Link Expired 3' | 'Verification Link Expired 4'

export const verificationLinkExpiredVariations: Record<VerificationLinkExpiredVariationKeys, React.ReactNode> = {
    "Verification Link Expired 1": <VerificationLinkExpired1/>,
    "Verification Link Expired 2": <VerificationLinkExpired2/>,
    "Verification Link Expired 3": <VerificationLinkExpired3/>,
    "Verification Link Expired 4": <VerificationLinkExpired4/>
}

function VerificationLinkExpiredViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {verificationLinkExpiredVariations[selectedComponents.VerificationLinkExpired as VerificationLinkExpiredVariationKeys]}
        </>
    )
}

export default VerificationLinkExpiredViewer;