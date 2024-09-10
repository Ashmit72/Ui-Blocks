import { Youtube } from "@untitled-ui/icons-react";
import { ProductAccordion } from "./ProductAccordion";
import { Accordion } from "../ui/accordion";
import { CompanyAccordion } from "./CompanyAccordion";
import { ResourceAccordion } from "./ResourceAccordion";
import { LegalAccordion } from "./LegalAccordion";

const Footer2 = () => {
  return (
    <footer className="py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 ">
        <div className="flex flex-wrap justify-between md:pb-12">
          {/* Left section */}
          <div className="w-full md:w-2/5 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <img src="Radian.webp" alt="Radian Logo" className="dark:saturate-0 dark:brightness-50 dark:invert" />
            </div>
            <p className="text-sm text-wrap text-muted-foreground">
              Empowering next generation of digital thinkers and creatives
            </p>
          </div>

          {/* Center sections */}
          <div className="w-full lg:w-3/5 flex flex-col lg:flex-wrap lg:flex-row lg:justify-between">
            <div className="hidden lg:flex w-full lg:flex-wrap lg:flex-row lg:justify-between">
              <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
                <h3 className="text-sm font-medium mb-5">Product</h3>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li>
                    <a href="#" className="text-sm">
                      Watch Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Product Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Download app
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      My Custom Link
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
                <h3 className="text-sm font-medium mb-5">Company</h3>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li>
                    <a href="#" className="text-sm">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Become a partner
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-1/4 mb-8 lg:mb-0">
                <h3 className="text-sm font-medium mb-5">Resources</h3>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li>
                    <a href="#" className="text-sm">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Blog Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-1/4">
                <h3 className="text-sm font-medium mb-5">Legal</h3>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li>
                    <a href="#" className="text-sm">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Other Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:hidden">
              <Accordion type="single" collapsible>
                <ProductAccordion />
                <CompanyAccordion/>
                <ResourceAccordion/>
                <LegalAccordion/>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap-reverse items-center justify-between border-t pt-5 mt-5 text-sm text-left md:text-center">
          <p className="w-full md:w-auto mt-4 lg:mt-0 text-muted-foreground">
            &copy; 2024 Radian OS LLC. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-5 md:mt-0 text-muted-foreground">
            {/* Social media icons */}
            <a href="#" aria-label="LinkedIn">
              <Youtube />
            </a>
            <a href="#" aria-label="YouTube">
            <Youtube />

            </a>
            <a href="#" aria-label="Twitter">
            <Youtube />

            </a>
            <a href="#" aria-label="Instagram">
            <Youtube />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
