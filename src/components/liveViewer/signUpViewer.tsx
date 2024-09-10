import { useComponentContext } from "@/providers/ComponentProvider"
import SignUp1 from "../authentication pages/SignUp/SignUp1";
import SignUp2 from "../authentication pages/SignUp/SignUp2";
import SignUp3 from "../authentication pages/SignUp/SignUp3";



export type SignUpVariationKeys = 'SignUp 1' | 'SignUp 2' | 'SignUp 3'

export const signUpVariations: Record<SignUpVariationKeys, React.ReactNode> = {
    "SignUp 1": <SignUp1/>,
    "SignUp 2": <SignUp2/>,
    "SignUp 3": <SignUp3/>
}

function SignUpViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {signUpVariations[selectedComponents.SignUp as SignUpVariationKeys]}
        </>
    )
}

export default SignUpViewer;