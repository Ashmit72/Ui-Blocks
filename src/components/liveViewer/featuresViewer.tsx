import { useComponentContext } from "@/providers/ComponentProvider"
import Features1 from "../features/Features1";
import Features2 from "../features/Features2";
import Features3 from "../features/Features3";
import Features4 from "../features/Features4";



export type featuresVariationKeys = 'Features 1' | 'Features 2' | 'Features 3' | 'Features 4'

export const featuresVariations: Record<featuresVariationKeys, React.ReactNode> = {
    "Features 1": <Features1 />,
    "Features 2": <Features2 />,
    "Features 3": <Features3 />,
    "Features 4": <Features4 />
}

function FeaturesViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {featuresVariations[selectedComponents.features as featuresVariationKeys]}
        </>
    )
}
export default FeaturesViewer;