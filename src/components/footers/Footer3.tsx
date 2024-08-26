import { Youtube } from "@untitled-ui/icons-react";
import React from "react";
import { ProductAccordion } from "./ProductPopOver";
import { Accordion } from "../ui/accordion";
import { CompanyAccordion } from "./CompanyPopOver";
import { ResourceAccordion } from "./ResourcePopOver";
import { LegalAccordion } from "./LegalPopOver";
import { FeaturesAccordion } from "./FeaturesPopOver";

const Footer3 = () => {
  return (
    <footer className="sm:pt-6 md:pt-6 lg:pt-12 border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 ">
        <div className="flex flex-wrap justify-between md:pb-6 lg:pb-12 ">
        
          <div className="w-full flex flex-col lg:flex-wrap lg:flex-row lg:justify-between">
            <div className="hidden lg:flex w-full lg:flex-wrap lg:flex-row lg:justify-between">
              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <h3 className="text-sm font-semibold mb-5">Product</h3>
                <ul className="space-y-4">
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

            
              <div className="w-1/2 sm:w-1/5">
                <h3 className="text-sm font-semibold mb-5">Features</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-sm">
                      Radian Components
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Starter Kit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Modular Themes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Logo Dark Mode
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm">
                      Build me a website
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <h3 className="text-sm font-semibold mb-5">Company</h3>
                <ul className="space-y-4">
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

              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <h3 className="text-sm font-semibold mb-5">Resources</h3>
                <ul className="space-y-4">
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

              <div className="w-1/2 sm:w-1/5">
                <h3 className="text-sm font-semibold mb-5">Legal</h3>
                <ul className="space-y-4">
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

            {/* accordion */} 
            <div className="lg:hidden">
              <Accordion type="single" collapsible>
                <ProductAccordion />
                <FeaturesAccordion/>
                <CompanyAccordion/>
                <ResourceAccordion/>
                <LegalAccordion/>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap-reverse items-center justify-between border-t pt-5 pb-8 lg:pb-5  text-sm text-left md:text-center">
          <p className="w-full md:w-auto mt-4 lg:mt-0">
            &copy; 2024 Radian OS LLC. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-5 md:mt-0">
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

export default Footer3;
