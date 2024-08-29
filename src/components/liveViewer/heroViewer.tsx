import { useComponentContext } from "@/providers/ComponentProvider";
import HeroSection1 from "../heroSections/v1/HeroSection1";
import HeroSection2 from "../heroSections/v1/HeroSection2";
import HeroSection3 from "../heroSections/v1/HeroSection3";
import HeroSection4 from "../heroSections/v1/HeroSection4";
import HeroSection5 from "../heroSections/v2/HeroSection1"
import HeroSection6 from "../heroSections/v2/HeroSection2"
import HeroSection7 from "../heroSections/v2/HeroSection3"
import HeroSection8 from "../heroSections/v2/HeroSection4"

export type HeroVariationKeys = 'Hero Section 1' | 'Hero Section 2' | 'Hero Section 3' | 'Hero Section 4' | 'Hero Section 5' | 'Hero Section 6' | 'Hero Section 7' | 'Hero Section 8'

export const heroVariations: Record<HeroVariationKeys, React.ReactNode> = {
    'Hero Section 1': <HeroSection1 />,
    'Hero Section 2': <HeroSection2 />,
    'Hero Section 3': <HeroSection3 />,
    'Hero Section 4': <HeroSection4 />,
    'Hero Section 5': <HeroSection5 />,
    'Hero Section 6': <HeroSection6 />,
    'Hero Section 7': <HeroSection7 />,
    'Hero Section 8': <HeroSection8 />,
}

function NavbarViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {heroVariations[selectedComponents.hero as HeroVariationKeys]}
        </>
    )
}
export default NavbarViewer