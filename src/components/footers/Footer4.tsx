import { ProductAccordion } from "./ProductAccordion";
import { Accordion } from "../ui/accordion";
import { CompanyAccordion } from "./CompanyAccordion";
import { ResourceAccordion } from "./ResourceAccordion";
import { LegalAccordion } from "./LegalAccordion";
import { FeaturesAccordion } from "./FeaturesAccordion";
import { ComparisonAccordion } from "./ComparisonAccordion";
import { IntegrationsAccordion } from "./IntegrationsAccordion";
import { CommunityAccordion } from "./CommunityAccordion";

const Footer4 = () => {
  return (
    <footer className="py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 ">
        <div className="flex flex-wrap justify-between md:pb-12">
          {/* Left section */}
          <div className="hidden md:block lg:block w-full md:w-2/5 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <img src="Radian.webp" alt="Radian Logo" className="dark:saturate-0 dark:brightness-50 dark:invert"/>
            </div>
            <p className="text-sm text-wrap text-muted-foreground">
              Empowering next generation of digital thinkers and creatives
            </p>
          </div>

          {/* Center sections */}
          <div className="w-full lg:w-3/5 flex flex-col lg:flex-wrap lg:flex-row lg:justify-between">
            <div className="hidden lg:flex w-full lg:flex-wrap lg:flex-row lg:justify-between">
              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <div className="space-y-6">
                    <div>
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
                    
                   

                  <div>
                  <h3 className="text-sm font-medium mb-5">Features</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
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

                    

                </div>
                
              </div>

              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <div className="space-y-6">
                    <div>
                    <h3 className="text-sm font-medium mb-5">Company</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
                    <li>
                        <a href="#" className="text-sm">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Carrers
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
                    
                   

                  <div>
                  <h3 className="text-sm font-medium mb-5">Comparison</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
                    <li>
                        <a href="#" className="text-sm">
                        Radian vs Product a
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Radian vs Product b
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Radian vs Product x
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Radian vs Product y
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Radian vs Product z
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        See all comparison
                        </a>
                    </li>
                    </ul>
                  </div>

                    

                </div>
                
              </div>

              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <div className="space-y-6">
                    <div>
                    <h3 className="text-sm font-medium mb-5">Resources</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
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
                    
                   

                  <div>
                  <h3 className="text-sm font-medium mb-5">Integrations</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
                    <li>
                        <a href="#" className="text-sm">
                        Salesforce
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Krispcall
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Skynet
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Oasis Devops
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Stargazer
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        See all integrations
                        </a>
                    </li>
                    </ul>
                  </div>

                    

                </div>
                
              </div>

              <div className="w-1/2 sm:w-1/5 mb-8 lg:mb-0">
                <div className="space-y-6">
                    <div>
                    <h3 className="text-sm font-medium mb-5">Community</h3>
                    <ul className="space-y-4 text-muted-foreground  text-sm">
                    <li>
                        <a href="#" className="text-sm">
                        Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">
                        Twitter
                        </a>
                    </li>
                    
                    </ul>
                    </div>
                    
                   

                  <div>
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
                
              </div>

              
            </div>

            <div className="lg:hidden">
              <Accordion type="single" collapsible>
                <ProductAccordion />
                <FeaturesAccordion/>
                <CompanyAccordion/>
                <ComparisonAccordion/>
                <ResourceAccordion/>
                <IntegrationsAccordion/>
                <CommunityAccordion/>
                <LegalAccordion/>
              </Accordion>

            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-5 mt-5 text-sm">
          <p className="w-full md:w-auto mt-4 lg:mt-0 text-left text-sm text-muted-foreground">
            &copy; 2024 Radian OS LLC. All Rights Reserved
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
