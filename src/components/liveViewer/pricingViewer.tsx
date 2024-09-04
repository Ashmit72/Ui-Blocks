import { useComponentContext } from "@/providers/ComponentProvider"
import Pricing1 from "../Pricings/Pricing1";
import Pricing2 from "../Pricings/Pricing2";


export type PricingVariationKeys = 'Pricing 1' | 'Pricing 2'

export const pricingVariations: Record<PricingVariationKeys, React.ReactNode> = {
    "Pricing 1": <Pricing1 />,
    "Pricing 2": <Pricing2 />,
}

function PricingViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {pricingVariations[selectedComponents.pricing as PricingVariationKeys]}
        </>
    )
}

export default PricingViewer;