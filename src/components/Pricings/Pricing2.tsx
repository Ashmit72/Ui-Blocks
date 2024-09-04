import { Badge } from "../ui/badge";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Check, ChevronDown } from "@untitled-ui/icons-react";

function Pricing2() {
  const [isOn, setIsOn] = useState(true);

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
        <Switch checked={isOn} onCheckedChange={() => setIsOn(!isOn)}  />
        <p className="text-sm">Billed annually</p>
      </div>

      <div className="lg:hidden border flex -mx-5 md:-mx-6">
        <div className="w-1/4 text-center border-r">
          <div className="py-3 px-[0.625rem] border-b-2 border-black">Free</div>
        </div>

        <div className="w-1/4 text-center border-r">
          <div className="py-3 px-[0.625rem]">Basic</div>
        </div>

        <div className="w-1/4 text-center border-r">
          <div className="py-3 px-[0.625rem]">Business</div>
        </div>

        <div className="w-1/4 text-center">
          <div className="py-3 px-[0.625rem]">Enterprise</div>
        </div>
      </div>

      <div className="lg:flex lg:px-6 space-y-5 lg:space-x-5 lg:space-y-0 ">
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
              <div className="hidden lg:flex space-x-2">
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
    </div>
  );
}

export default Pricing2;
