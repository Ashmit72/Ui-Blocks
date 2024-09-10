import { Button } from "@/components/ui/button";
import { GoogleChrome } from "@untitled-ui/icons-react";
import React from "react";

const VerifyEmailSent2 = () => {
  return (
    <div className="py-8 md:py-[3.75rem]">
      <div className="w-[360px] mx-auto px-6 py-8 border rounded-xl">
        <div className="space-y-9 bg-background">
          <div>
            <img src="Radian.png" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Verify your email</h1>
              <p className="text-sm font-medium text-muted-foreground">
                We've sent a email to fullname@domain.com to activate your
                account
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <Button> Open email app</Button>
              <Button
                variant={"outline"}
                className="text-foreground gap-[0.25rem]"
              >
                <GoogleChrome />
                Open Gmail
              </Button>
              <Button
                variant={"outline"}
                className="text-foreground gap-[0.25rem]"
              >
                <GoogleChrome />
                Open Outlook
              </Button>
            </div>

            <div className="flex flex-col text-sm font-medium">
              <p>Didn't get the email? Check your spam folder!</p>
              <p className="text-blue-600">Re-enter your email and try again</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailSent2;
