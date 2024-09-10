import { useComponentContext } from "@/providers/ComponentProvider"
import SignIn1 from "../authentication pages/SignIn/SignIn1";
import SignIn2 from "../authentication pages/SignIn/SignIn2";
import SignIn3 from "../authentication pages/SignIn/SignIn3";



export type SignInVariationKeys = 'SignIn 1' | 'SignIn 2' | 'SignIn 3'

export const signInVariations: Record<SignInVariationKeys, React.ReactNode> = {
    "SignIn 1": <SignIn1/>,
    "SignIn 2": <SignIn2/>,
    "SignIn 3": <SignIn3/>
}

function SignInViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {signInVariations[selectedComponents.SignIn as SignInVariationKeys]}
        </>
    )
}

export default SignInViewer;