import { useComponentContext } from "@/providers/ComponentProvider"
import VerifyEmailSent1 from "../authentication pages/Verify email sent/VerifyEmailSent1";
import VerifyEmailSent2 from "../authentication pages/Verify email sent/VerifyEmailSent2";




export type VerifyEmailSentVariationKeys = 'Verify Email Sent 1' | 'Verify Email Sent 2'

export const verifyEmailSentVariations: Record<VerifyEmailSentVariationKeys, React.ReactNode> = {
    "Verify Email Sent 1": <VerifyEmailSent1/>,
    "Verify Email Sent 2": <VerifyEmailSent2/>
}

function VerifyEmailSentViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {verifyEmailSentVariations[selectedComponents.VerifyEmailSent as VerifyEmailSentVariationKeys]}
        </>
    )
}

export default VerifyEmailSentViewer;