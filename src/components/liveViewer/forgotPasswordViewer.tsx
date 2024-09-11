import { useComponentContext } from "@/providers/ComponentProvider"
import ForgotPassword1 from "../authentication pages/Forgot password/ForgotPassword1";
import ForgotPassword2 from "../authentication pages/Forgot password/ForgotPassword2";


export type ForgotPasswordVariationKeys = 'Forgot Password 1' | 'Forgot Password 2'

export const forgotPasswordVariations: Record<ForgotPasswordVariationKeys, React.ReactNode> = {
    "Forgot Password 1": <ForgotPassword1/>,
    "Forgot Password 2": <ForgotPassword2/>
}

function ForgotPasswordViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {forgotPasswordVariations[selectedComponents.ForgotPassword as ForgotPasswordVariationKeys]}
        </>
    )
}

export default ForgotPasswordViewer;