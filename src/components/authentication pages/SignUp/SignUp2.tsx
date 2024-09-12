import { Eye, GoogleChrome } from "@untitled-ui/icons-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
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
import { SignUpSchema } from "@/schema/signup";
import { useRef } from "react";

const SignUp2 = () => {
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("submitted");
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    // Using shadcn ui form
    <div className="py-8 md:py-[3.75rem]">
      <div className="w-[408px] mx-auto px-6 py-8 border rounded-xl">
        <div className="space-y-9 w-[360px]">
          <div>
            <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert' />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl">Sign Up</h1>
              <p className="text-muted-foreground font-medium text-sm">
                Already have an account?{" "}
                <span className="text-foreground">Sign in</span>
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                    ref={formRef}
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                          <FormLabel>Password </FormLabel>
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
                  </form>
                </Form>
              </div>

              <div className="space-y-5">
                <div>
                  <Button
                    className="w-full py-[0.625rem] px-[0.875rem]"
                    onClick={() => form.handleSubmit(onSubmit)()}
                  >
                    Sign Up
                  </Button>
                </div>
                <div className="text-[0.875rem] leading-[1.3125rem] font-normal">
                  <p className="text-muted-foreground">
                    By signing up, you agree to Radian's{" "}
                    <span className="text-foreground">Terms of Service</span>{" "}
                    and <span className="text-foreground">Privacy Policy</span>
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <hr className="flex-1 border-t border-gray-300" />
                  <span className="mx-4 text-gray-500">or</span>
                  <hr className="flex-1 border-t border-gray-300" />
                </div>
                <div className="">
                  <Button variant={"outline"} className="w-full text-foreground gap-[0.375rem]  py-[0.625rem] px-[0.875rem]">
                    <GoogleChrome />
                    Continue with Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
