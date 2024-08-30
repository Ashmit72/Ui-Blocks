import { useComponentContext } from "@/providers/ComponentProvider"
import Footer1 from "../footers/Footer1"
import Footer2 from "../footers/Footer2"
import Footer3 from "../footers/Footer3"
import Footer4 from "../footers/Footer4"

export type FooterVariationKeys = 'Footer 1' | 'Footer 2' | 'Footer 3' | 'Footer 4'

export const footerVariations: Record<FooterVariationKeys, React.ReactNode> = {
    "Footer 1": <Footer1 />,
    "Footer 2": <Footer2 />,
    "Footer 3": <Footer3 />,
    "Footer 4": <Footer4 />
}

function FooterViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {footerVariations[selectedComponents.footer as FooterVariationKeys]}
        </>
    )
}

export default FooterViewer;