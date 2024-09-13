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

const SignIn2 = () => {
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
    // Using shadcn ui form
    <div className="py-8 md:py-[3.75rem]">

    <div className="mx-auto w-[408px] px-6 py-8 border rounded-xl">
      <div className="space-y-9 w-[360px]  mx-auto">
        <div>
          <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert'/>
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
              <hr className="flex-1 border-t" />
              <span className="mx-[0.625rem] text-muted-foreground">or</span>
              <hr className="flex-1 border-t" />
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

  );
};

export default SignIn2;
