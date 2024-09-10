import { useComponentContext } from "@/providers/ComponentProvider"
import AccountVerified1 from "../authentication pages/Account Verified/AccountVerified1";
import AccountVerified2 from "../authentication pages/Account Verified/AccountVerified2";


export type AccountVerifiedVariationKeys = 'Account Verified 1' | 'Account Verified 2'

export const accountVerifiedVariations: Record<AccountVerifiedVariationKeys, React.ReactNode> = {
    "Account Verified 1": <AccountVerified1/>,
    "Account Verified 2": <AccountVerified2/>
}

function AccountVerifiedViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {accountVerifiedVariations[selectedComponents.AccountVerified as AccountVerifiedVariationKeys]}
        </>
    )
}

export default AccountVerifiedViewer;