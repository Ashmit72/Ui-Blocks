import { useComponentContext } from "@/providers/ComponentProvider"
import ResetEmailSent1 from "../authentication pages/Reset Email Sent/ResetEmailSent1";
import ResetEmailSent2 from "../authentication pages/Reset Email Sent/ResetEmailSent2";

export type ResetEmailSentVariationKeys = 'Reset Email Sent 1' | 'Reset Email Sent 2'

export const resetEmailSentVariations: Record<ResetEmailSentVariationKeys, React.ReactNode> = {
   "Reset Email Sent 1": <ResetEmailSent1/>,
   "Reset Email Sent 2": <ResetEmailSent2/>
}

function ResetEmailSentViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {resetEmailSentVariations[selectedComponents.ResetEmailSent as ResetEmailSentVariationKeys]}
        </>
    )
}

export default ResetEmailSentViewer;