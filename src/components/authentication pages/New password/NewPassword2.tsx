import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewPasswordSchema } from "@/schema/newPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { Eye } from "@untitled-ui/icons-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const NewPassword2 = () => {
  const form = useForm({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleResetButton = () => { };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  return (
    <div className="py-8 md:py-[3.75rem]">
      <div className="w-[408px] mx-auto px-6 py-8 border rounded-xl">
        <div className="w-[360px] space-y-9 bg-background">
          <div>
            <img
              src="Radian.webp"
              className="h-8 dark:saturate-0 dark:brightness-50 dark:invert"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Set new password</h1>
              <p className="text-muted-foreground text-sm font-semibold">
                Enter a new password for your account
              </p>
            </div>
            <div>
              <Form {...form}>
                <form className="space-y-4" ref={formRef}>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={`${showPassword ? "text" : "password"}`}
                            />
                            {!showPassword && (
                              <Eye
                                className="absolute top-2 right-4 text-muted-foreground cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            )}
                            {showPassword && (
                              <EyeClosedIcon
                                className="absolute top-2 right-4 text-muted-foreground cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={`${showConfirmPassword ? "text" : "password"}`}
                            />
                            {!showConfirmPassword && (
                              <Eye
                                className="absolute top-2 right-4 text-muted-foreground cursor-pointer"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                              />
                            )}
                            {showConfirmPassword && (
                              <EyeClosedIcon
                                className="absolute top-2 right-4 text-muted-foreground cursor-pointer"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                              />
                            )}{" "}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-[0.875rem] leading-[1.3125] text-muted-foreground">
                    Your password must be at least 8 characters with a mix of
                    letters, numbers and symbols
                  </p>
                </form>
              </Form>
            </div>
            <div>
              <Button
                className="w-full"
                onClick={() => form.handleSubmit(handleResetButton)()}
              >
                Reset Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword2;
