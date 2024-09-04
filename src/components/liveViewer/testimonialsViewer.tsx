import { useComponentContext } from "@/providers/ComponentProvider";
import Testimonials1 from "../testimonials/Testimonials1";
import Testimonials2 from "../testimonials/Testimonials2";
import Testimonials3 from "../testimonials/Testimonials3";
import Testimonials4 from "../testimonials/Testimonials4";

export type TestimonialsVariationKeys = 'Testimonials 1' | 'Testimonials 2' | 'Testimonials 3' | 'Testimonials 4'

export const testimonialsVariations: Record<TestimonialsVariationKeys, React.ReactNode> = {
    'Testimonials 1': <Testimonials1 />,
    'Testimonials 2': <Testimonials2 />,
    'Testimonials 3': <Testimonials3 />,
    'Testimonials 4': <Testimonials4 />
}

function TestimonialViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {testimonialsVariations[selectedComponents.testimonials as TestimonialsVariationKeys]}
        </>
    )
}
export default TestimonialViewer