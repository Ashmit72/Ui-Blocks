import { Eye, GoogleChrome } from "@untitled-ui/icons-react";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { SignInSchema } from "@/schema/signin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { useRef } from "react";

const SignIn4 = () => {
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("submitted");
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="hidden md:flex lg:flex h-screen mx-auto ">
      <div className="w-3/5">
        <div className="space-y-9 w-[360px] mx-auto py-8 md:py-[3.75rem]">
          <div>
            <img
              src="Radian.webp"
              className="h-8 dark:saturate-0 dark:brightness-50 dark:invert"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl">Sign in</h1>
              <p className="text-muted-foreground font-medium text-sm">
                Don't have an account yet?{" "}
                <span className="text-foreground">Sign up</span>
              </p>
            </div>
            <div className="space-y-5">
              <div className="space-y-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                    ref={formRef}
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex justify-between">
                            Password{" "}
                            <p className="text-muted-foreground font-medium text-sm">
                              Forgot Password?
                            </p>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input {...field} className="w-full" />
                              <Eye className="absolute inset-y-2 right-4 text-muted-foreground" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div>
                      <div className="space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>

              <div>
                <Button
                  className="w-full py-[0.625rem] px-[0.875rem]"
                  onClick={() => form.handleSubmit(onSubmit)()}
                >
                  Sign In
                </Button>
              </div>
              <div className="flex items-center justify-center w-full">
                <hr className="flex-1 border-t border-gray-300" />
                <span className="mx-4 text-gray-500">or</span>
                <hr className="flex-1 border-t border-gray-300" />
              </div>
              <div className="">
                <Button
                  variant={"outline"}
                  className="w-full text-foreground gap-[0.375rem] py-[0.625rem] px-[0.875rem]"
                >
                  <GoogleChrome />
                  Continue with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-2/5">
        <img src="./assets/photo.webp" className="h-full w-full object-cover" />
        <div className="space-y-6 p-8 border rounded-xl absolute bottom-8 bg-background overflow-hidden mx-[32px]">
          <p className="font-medium text-lg">
            “Building products in a large organization can be a very lengthy and
            expensive process. With Radian we were able to cut our development
            costs and time by more than 60%, which allowed our team to develop
            very high quality digital experiences”
          </p>
          <div className="text-[0.125rem]">
            <p className="font-semibold text-sm">Nick Bayer</p>
            <p className="text-sm font-normal">
              VP of Engineering, Open Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn4;
