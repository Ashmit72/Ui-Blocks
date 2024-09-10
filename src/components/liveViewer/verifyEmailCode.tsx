import { useComponentContext } from "@/providers/ComponentProvider"
import VerifyEmailCode1 from "../authentication pages/Verify email code/VerifyEmailCode1";
import VerifyEmailCode2 from "../authentication pages/Verify email code/VerifyEmailCode2";



export type VerifyEmailCodeVariationKeys = 'Verify Email Code 1' | 'Verify Email Code 2'

export const verifyEmailCodeVariations: Record<VerifyEmailCodeVariationKeys, React.ReactNode> = {
    "Verify Email Code 1": <VerifyEmailCode1/>,
    "Verify Email Code 2": <VerifyEmailCode2/>
}

function VerifyEmailCodeViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {verifyEmailCodeVariations[selectedComponents.VerifyEmailCode as VerifyEmailCodeVariationKeys]}
        </>
    )
}

export default VerifyEmailCodeViewer;