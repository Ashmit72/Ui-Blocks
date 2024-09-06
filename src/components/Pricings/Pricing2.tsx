import { Badge } from "../ui/badge";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Check, CheckCircle, ChevronDown } from "@untitled-ui/icons-react";

function Pricing2() {
  const [isBilledMonthly, setIsBilledMonthly] = useState(false);

  const [isFree, setIsFree] = useState(true)
  const [isBasic, setIsBasic] = useState(false)
  const [isBusiness, setIsBusiness] = useState(false)
  const [isEnterpise, setIsEnterprise] = useState(false)

  const handleFreeClick = () => {
    setIsFree(true)
    setIsBasic(false)
    setIsBusiness(false)
    setIsEnterprise(false)
  }

  const handleBasicClick = () => {
    setIsFree(false)
    setIsBasic(true)
    setIsBusiness(false)
    setIsEnterprise(false)
  }

  const handleBusinessClick = () => {
    setIsFree(false)
    setIsBasic(false)
    setIsBusiness(true)
    setIsEnterprise(false)
  }
  const handleEnterpriseClick = () => {
    setIsFree(false)
    setIsBasic(false)
    setIsBusiness(false)
    setIsEnterprise(true)
  }

  return (
    <div className="max-w-screen-xl flex flex-col mx-auto px-5 md:px-6 py-14 md:py-20 space-y-8">
      <div className="text-center space-y-6">
        <div className="space-y-3 md:px-[1.5625rem]">
          <Badge
            variant={"outline"}
            className="bg-background rounded-full px-3 py-1 w-fit"
          >
            <span className="text-sm font-medium text-foreground capitalize">
              Pricing
            </span>
          </Badge>
          <h1 className="text-foreground font-semibold text-[2rem] leading-[2.6rem] md:text-[2.25rem] md:leading-[2.75rem] lg:text-[3rem] lg:leading-[3.75rem] text-center">
            Find best plan for your project
          </h1>
        </div>
        <div>
          <p className="text-foreground font-normal text-base">
            Start building for free and expedite your dreams into reality
          </p>
        </div>
      </div>

      <div className="flex space-x-2 mx-auto items-center">
        <p className="text-sm">Billed monthly</p>
        <Switch checked={isBilledMonthly} onCheckedChange={() => setIsBilledMonthly(!isBilledMonthly)}  />
        <p className="text-sm">Billed annually</p>
      </div>

      <div className="lg:hidden border flex -mx-5 md:-mx-6 sticky top-[4.5rem]  bg-background">
        <div className="w-1/4 text-center border-r" onClick={handleFreeClick}>
          <div className={`py-3 px-[0.625rem]  ${isFree ? 'border-black border-b-2' : ''}`}>Free</div>
        </div>

        <div className="w-1/4 text-center border-r" onClick={handleBasicClick}>
          <div className={`py-3 px-[0.625rem] ${isBasic ? 'border-black border-b-2': ''}`}>Basic</div>
        </div>

        <div className="w-1/4 text-center border-r" onClick={handleBusinessClick}>
          <div className={`py-3 px-[0.625rem] ${isBusiness ? 'border-black border-b-2' : ''} `}>Business</div>
        </div>

        <div className="w-1/4 text-center" onClick={handleEnterpriseClick}>
          <div className={`py-3 px-[0.625rem] ${isEnterpise ? 'border-black border-b-2' : ''}`}>Enterprise</div>
        </div>
      </div>

      <div className="lg:hidden lg:px-6 space-y-5 lg:space-x-5 lg:space-y-0 ">
        {
          isFree && (
            <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Free
              </h1>{" "}
              <p className="font-normal text-sm"> Great for solo founders</p>
            </div>
            <div className="flex relative space-x-2">
              <div>
                <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                  $0
                </h1>
              </div>
              <div className="py-1 ">
                <p className="font-normal text-sm absolute bottom-1">
                  {isBilledMonthly ? "per year" : "per month"}
                </p>
              </div>
            </div>
            <Button className="w-full order-1" size={"lg"}>
              Start for Free
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">2 admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        }
        
        {
          isBasic && (
            <div className="border rounded-xl lg:w-1/4">
            <div className="p-5 space-y-4">
              <div className="space-y-[0.125rem]">
                <div className="flex space-x-2">
                  <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                    Basic
                  </h1>{" "}
                  <Badge
                    variant={"outline"}
                    className="bg-background rounded-full px-[0.625rem] py-[0.125rem] w-fit"
                  >
                    <span className="text-sm font-medium text-foreground capitalize">
                      Popular
                    </span>
                  </Badge>{" "}
                </div>
                <p className="font-normal text-sm"> Great for small teams</p>
              </div>
              <div className="flex relative space-x-2">
                <div>
                  <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                    {isBilledMonthly ? "$10" : "$15"}
                  </h1>
                </div>
                <div className="py-1">
                  <p className="font-normal text-sm absolute bottom-1">
                  {isBilledMonthly ? "per year" : "per month"}
                  </p>
                </div>
              </div>
              <Button className="w-full order-1" size={"lg"}>
                Get Started
              </Button>
            </div>
            <div className="p-5 border-t">
              <div className="space-y-4">
                <div>
                  <h1 className="font-medium text-sm">Get started with</h1>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">Unlimited members</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">
                      All interface components
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">Full user support</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">4 admins</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">Free</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4" />
                    <p className="text-sm font-normal">Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        }
     

      {
        isBusiness && (
          <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Business
              </h1>{" "}
              <p className="font-normal text-sm">
                {" "}
                Great for business and large teams
              </p>
            </div>
            <div className="flex relative space-x-2">
              <div>
                <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                  {isBilledMonthly ? "$15" : "$20"}
                </h1>
              </div>
              <div className="py-1">
                <p className="font-normal text-sm absolute bottom-1">
                {isBilledMonthly ? "per year" : "per month"}
                </p>
              </div>
            </div>
            <Button className="w-full order-1" size={"lg"}>
              Start for Free
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">8 admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
      

        {
          isEnterpise && (
            <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Enterprise
              </h1>{" "}
              <p className="font-normal text-sm">
                {" "}
                Customer tailored enterprise grade
              </p>
            </div>
            <div className="flex space-x-2">
              <div>
                <h1 className="font-semibold text-[2rem] leading-[2.6rem]">
                  Custom
                </h1>
              </div>
            </div>

            <Button className="w-full order-1" variant={"outline"} size={"lg"}>
              Contact us
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        }
        
      </div>

      <div className="lg:flex hidden lg:px-6 space-y-5 lg:space-x-5 lg:space-y-0 ">
        <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Free
              </h1>{" "}
              <p className="font-normal text-sm"> Great for solo founders</p>
            </div>
            <div className="flex relative space-x-2">
              <div>
                <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                  $0
                </h1>
              </div>
              <div className="py-1 ">
                <p className="font-normal text-sm absolute bottom-1">
                  per month
                </p>
              </div>
            </div>
            <Button className="w-full order-1" size={"lg"}>
              Start for Free
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">2 admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <div className="flex space-x-2">
                <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                  Basic
                </h1>{" "}
                <Badge
                  variant={"outline"}
                  className="bg-background rounded-full px-[0.625rem] py-[0.125rem] w-fit"
                >
                  <span className="text-sm font-medium text-foreground capitalize">
                    Popular
                  </span>
                </Badge>{" "}
              </div>
              <p className="font-normal text-sm"> Great for small teams</p>
            </div>
            <div className="flex relative space-x-2">
              <div>
                <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                  $10
                </h1>
              </div>
              <div className="py-1">
                <p className="font-normal text-sm absolute bottom-1">
                  per month
                </p>
              </div>
            </div>
            <Button className="w-full order-1" size={"lg"}>
              Get Started
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">4 admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Business
              </h1>{" "}
              <p className="font-normal text-sm">
                {" "}
                Great for business and large teams
              </p>
            </div>
            <div className="flex relative space-x-2">
              <div>
                <h1 className="font-semibold text-[2.25rem] leading-[2.75rem]">
                  $15
                </h1>
              </div>
              <div className="py-1">
                <p className="font-normal text-sm absolute bottom-1">
                  per month
                </p>
              </div>
            </div>
            <Button className="w-full order-1" size={"lg"}>
              Start for Free
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">8 admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl lg:w-1/4">
          <div className="p-5 space-y-4">
            <div className="space-y-[0.125rem]">
              <h1 className="font-semibold text-[1.25rem] leading-[1.875rem]">
                Enterprise
              </h1>{" "}
              <p className="font-normal text-sm">
                {" "}
                Customer tailored enterprise grade
              </p>
            </div>
            <div className="flex space-x-2">
              <div>
                <h1 className="font-semibold text-[2rem] leading-[2.6rem]">
                  Custom
                </h1>
              </div>
            </div>

            <Button className="w-full order-1" variant={"outline"} size={"lg"}>
              Contact us
            </Button>
          </div>
          <div className="p-5 border-t">
            <div className="space-y-4">
              <div>
                <h1 className="font-medium text-sm">Get started with</h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited members</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">
                    All interface components
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Full user support</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Unlimited admins</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4" />
                  <p className="text-sm font-normal">Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-fit mx-auto  py-[0.625rem] px-[0.875rem] gap-1"
        variant={"outline"}
        size={"lg"}
      >
        View full Features List <ChevronDown />
      </Button>

        {/* Pricing Details for small screen devices */}
      {
          isFree && (
            <div className="lg:hidden">
          <div>
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Core Features</h2>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Ready-to-use UI Components
              </h4>
              <h4 className="font-medium text-sm">Limited Access</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Customizable Themes</h4>
              <h4 className="font-medium text-sm">Basic</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Integration with React</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Integration with TypeScript
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Integration with Tailwind CSS
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Integration with shadcn/ui
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Code Snippet Library</h4>
              <h4 className="font-medium text-sm">Limited Access</h4>
            </div>
          </div>

          <div>
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Collaboration Tools</h2>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Team Members</h4>
              <h4 className="font-medium text-sm">Limited Access</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Shared Design Libraries</h4>
              <h4 className="font-medium text-sm">Basic</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Component Version Control</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
          </div>

          <div>
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Support & Maintenance</h2>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Documentation Access</h4>
              <h4 className="font-medium text-sm">Limited Access</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Email Support</h4>
              <h4 className="font-medium text-sm">Basic</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Custom Component Requests</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
          </div>

          <div>
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">
                Performance & Scalability
              </h2>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Component Load Optimization
              </h4>
              <h4 className="font-medium text-sm">Basic</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Scalability for Large Projects
              </h4>
              <h4 className="font-medium text-sm">-</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Custom Hosting Integration
              </h4>
              <h4 className="font-medium text-sm">-</h4>
            </div>
          </div>

          <div>
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Security & Compliance</h2>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Best Security</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">Role-Based Access Control</h4>
              <h4 className="font-medium text-sm">-</h4>
            </div>
            <div className="flex justify-between py-4 border-b space-x-4">
              <h4 className="font-medium text-sm">
                Compliance with Industry Standards
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
          </div>
        </div>
          )
        }

        {
          isBasic && (
            <div className="lg:hidden">
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Core Features</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Ready-to-use UI Components
                </h4>
                <h4 className="font-medium text-sm">Full Access</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Customizable Themes</h4>
                <h4 className="font-medium text-sm">Standard</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Integration with React</h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with TypeScript
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with Tailwind CSS
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with shadcn/ui
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Code Snippet Library</h4>
                <h4 className="font-medium text-sm">Standard</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Collaboration Tools</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Team Members</h4>
                <h4 className="font-medium text-sm">5 members</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Shared Design Libraries</h4>
                <h4 className="font-medium text-sm"><CheckCircle className="text-green-600"/></h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Component Version Control</h4>
                <h4 className="font-medium text-sm">
                  Basic
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Support & Maintenance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Documentation Access</h4>
                <h4 className="font-medium text-sm">Standard</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Email Support</h4>
                <h4 className="font-medium text-sm">Standard Support</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Custom Component Requests</h4>
                <h4 className="font-medium text-sm">
                  Limited
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">
                  Performance & Scalability
                </h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Component Load Optimization
                </h4>
                <h4 className="font-medium text-sm">Standard</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Scalability for Large Projects
                </h4>
                <h4 className="font-medium text-sm">Basic</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Custom Hosting Integration
                </h4>
                <h4 className="font-medium text-sm">-</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Security & Compliance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Best Security</h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Role-Based Access Control</h4>
                <h4 className="font-medium text-sm">Basic</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Compliance with Industry Standards
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
            </div>
          </div>
          )
        }

        {
          isBusiness && (
            <div className="lg:hidden">
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Core Features</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Ready-to-use UI Components
                </h4>
                <h4 className="font-medium text-sm">Full Access</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Customizable Themes</h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Integration with React</h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with TypeScript
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with Tailwind CSS
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with shadcn/ui
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Code Snippet Library</h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Collaboration Tools</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Team Members</h4>
                <h4 className="font-medium text-sm">10 members</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Shared Design Libraries</h4>
                <h4 className="font-medium text-sm"><CheckCircle className="text-green-600"/></h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Component Version Control</h4>
                <h4 className="font-medium text-sm">
                  Advanced
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Support & Maintenance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Documentation Access</h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Email Support</h4>
                <h4 className="font-medium text-sm">24/7 Support</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Custom Component Requests</h4>
                <h4 className="font-medium text-sm">
                  Standard
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">
                  Performance & Scalability
                </h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Component Load Optimization
                </h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Scalability for Large Projects
                </h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Custom Hosting Integration
                </h4>
                <h4 className="font-medium text-sm">Standard</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Security & Compliance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Best Security</h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Role-Based Access Control</h4>
                <h4 className="font-medium text-sm">Advanced</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Compliance with Industry Standards
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
            </div>
          </div>
          )
        }
        
        {
          isEnterpise && (
            <div className="lg:hidden">
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Core Features</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Ready-to-use UI Components
                </h4>
                <h4 className="font-medium text-sm">Customizable Access</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Customizable Themes</h4>
                <h4 className="font-medium text-sm">Full Customization</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Integration with React</h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with TypeScript
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with Tailwind CSS
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Integration with shadcn/ui
                </h4>
                <h4 className="font-medium text-sm">
                  <CheckCircle className="text-green-600" />
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Code Snippet Library</h4>
                <h4 className="font-medium text-sm">Full Access</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Collaboration Tools</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Team Members</h4>
                <h4 className="font-medium text-sm">Custom</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Shared Design Libraries</h4>
                <h4 className="font-medium text-sm"><CheckCircle className="text-green-600"/></h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Component Version Control</h4>
                <h4 className="font-medium text-sm">
                  Advanced
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Support & Maintenance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Documentation Access</h4>
                <h4 className="font-medium text-sm">Priority Support</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Email Support</h4>
                <h4 className="font-medium text-sm">Dedicated Support</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Custom Component Requests</h4>
                <h4 className="font-medium text-sm">
                  Full Access
                </h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">
                  Performance & Scalability
                </h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Component Load Optimization
                </h4>
                <h4 className="font-medium text-sm">Custom Optimization</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Scalability for Large Projects
                </h4>
                <h4 className="font-medium text-sm">Full Scalability</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Custom Hosting Integration
                </h4>
                <h4 className="font-medium text-sm">Full Customization</h4>
              </div>
            </div>
  
            <div>
              <div className="py-4 border-b">
                <h2 className="font-semibold text-base">Security & Compliance</h2>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Best Security</h4>
                <h4 className="font-medium text-sm">
                  Custom Security
                </h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">Role-Based Access Control</h4>
                <h4 className="font-medium text-sm">Custom</h4>
              </div>
              <div className="flex justify-between py-4 border-b space-x-4">
                <h4 className="font-medium text-sm">
                  Compliance with Industry Standards
                </h4>
                <h4 className="font-medium text-sm text-right">
                  Custom Compliance
                </h4>
              </div>
            </div>
          </div>
          )
        }


      {/* Pricing Details for large screen device */}
      <div className="hidden lg:block">
          <div className="sticky top-0 pt-20 bg-background">
          <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <div className="relative">
                <h2 className="font-semibold text-lg absolute bottom-4">
                  Features
                </h2>
              </div>
              <h4 className="font-medium text-sm">
                <div className="py-4 space-y-2">
                  <div>
                    <h1 className="font-semibold text-lg">
                      Free
                    </h1>
                    <div className="flex space-x-2">
                      <p className="text-base font-semibold">$0</p>
                      <p className="text-base font-normal">per month</p>
                    </div>
                  </div>
                  <Button className="w-full py-[0.625rem] px-[0.875rem]">Start for Free</Button>
                </div>
              </h4>
              <h4 className="font-medium text-sm">
                <div className="py-4 space-y-2">
                  <div>
                    <div className="flex space-x-2">
                      <h1 className="font-semibold text-lg">
                        Basic
                      </h1>
                      <Badge
                        variant={"outline"}
                        className="bg-background rounded-full px-[0.625rem]  w-fit"
                      >
                        <span className="text-sm font-medium text-foreground capitalize">
                          Popular
                        </span>
                      </Badge>{" "}
                    </div>
                    <div className="flex space-x-2">
                      <p className="text-base font-semibold">$10</p>
                      <p className="text-base font-normal">per month</p>
                    </div>
                  </div>
                  <Button className="w-full py-[0.625rem] px-[0.875rem]">Get Started</Button>
                </div>
              </h4>
              <h4 className="font-medium text-sm">
                <div className="py-4 space-y-2">
                  <div>
                    <h1 className="font-semibold text-lg">
                      Business
                    </h1>
                    <div className="flex space-x-2">
                      <p className="text-base font-semibold">$15</p>
                      <p className="text-base font-normal">per month</p>
                    </div>
                  </div>
                  <Button className="w-full py-[0.625rem] px-[0.875rem]">Get Started</Button>
                </div>
              </h4>
              <h4 className="font-medium text-sm">
                <div className="py-4 space-y-2">
                  <div>
                    <h1 className="font-semibold text-lg">
                      Enterprise
                    </h1>
                    <div className="flex space-x-2">
                      <p className="text-base font-medium">Custom</p>
                    </div>
                  </div>
                  <Button className="w-full py-[0.625rem] px-[0.875rem]" variant={"outline"}>
                    Contact us
                  </Button>
                </div>
              </h4>
            </div>
          </div>

          <div className="text-foreground">
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Core Features</h2>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Ready-to-use UI Components
              </h4>
              <h4 className="font-medium text-sm">Limited Access</h4>
              <h4 className="font-medium text-sm">Full Access</h4>
              <h4 className="font-medium text-sm">Full Access</h4>
              <h4 className="font-medium text-sm">Customizable Access</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Customizable Themes</h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Full Customization</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Integration with React</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Integration with TypeScript
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Integration with Tailwind CSS
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Integration with shadcn/ui
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Code Snippet Library</h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Full Access</h4>
            </div>
          </div>

          <div className="">
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Support & Maintenance</h2>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Documentation Access</h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Priority Support</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Email Support</h4>
              <h4 className="font-medium text-sm">Communnity Only</h4>
              <h4 className="font-medium text-sm">Standard Support</h4>
              <h4 className="font-medium text-sm">24/7 Support</h4>
              <h4 className="font-medium text-sm">Dedicated Support</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Custom Component Requests</h4>
              <h4 className="font-medium text-sm">-</h4>
              <h4 className="font-medium text-sm">Limited</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Full Access</h4>
            </div>
          </div>

          <div className="">
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">
                Performance & Scalability
              </h2>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Component Load Optimization
              </h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Custom Optimization</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Scalability for Large Projects
              </h4>
              <h4 className="font-medium text-sm">-</h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Full Scalability</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Custom Hosting Integration
              </h4>
              <h4 className="font-medium text-sm">-</h4>
              <h4 className="font-medium text-sm">-</h4>
              <h4 className="font-medium text-sm">Standard</h4>
              <h4 className="font-medium text-sm">Full Customization</h4>
            </div>
          </div>

          <div className="">
            <div className="py-4 border-b">
              <h2 className="font-semibold text-base">Security & Compliance</h2>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Basic Security</h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">Custom Security</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">Role-Based Access Contol</h4>
              <h4 className="font-medium text-sm">-</h4>
              <h4 className="font-medium text-sm">Basic</h4>
              <h4 className="font-medium text-sm">Advanced</h4>
              <h4 className="font-medium text-sm">Custom</h4>
            </div>
            <div className="grid grid-cols-[1.64fr_1fr_1fr_1fr_1fr] py-4 border-b gap-8">
              <h4 className="font-medium text-sm">
                Compliance with industry Standards
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">
                <CheckCircle className="text-green-600" />
              </h4>
              <h4 className="font-medium text-sm">Custom Compliance</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Pricing2;
