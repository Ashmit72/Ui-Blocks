import { useComponentContext } from "@/providers/ComponentProvider"
import PasswordChanged1 from "../authentication pages/Password changed/PasswordChanged1";
import PasswordChanged2 from "../authentication pages/Password changed/PasswordChanged2";

export type PasswordChangedVariationKeys = 'Password Changed 1' | 'Password Changed 2'

export const passwordChangedVariations: Record<PasswordChangedVariationKeys, React.ReactNode> = {
   "Password Changed 1": <PasswordChanged1/>,
   "Password Changed 2": <PasswordChanged2/>
}

function PasswordChangedViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {passwordChangedVariations[selectedComponents.PasswordChanged as PasswordChangedVariationKeys]}
        </>
    )
}

export default PasswordChangedViewer;