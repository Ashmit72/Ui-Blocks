import { useComponentContext } from "@/providers/ComponentProvider"
import NewPassword1 from "../authentication pages/New password/NewPassword1";
import NewPassword2 from "../authentication pages/New password/NewPassword2";


export type NewPasswordVariationKeys = 'New Password 1' | 'New Password 2'

export const newPasswordVariations: Record<NewPasswordVariationKeys, React.ReactNode> = {
   "New Password 1": <NewPassword1/>,
   "New Password 2": <NewPassword2/>
}

function NewPasswordViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {newPasswordVariations[selectedComponents.NewPassword as NewPasswordVariationKeys]}
        </>
    )
}

export default NewPasswordViewer;