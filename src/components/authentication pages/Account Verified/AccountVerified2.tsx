import { Button } from "@/components/ui/button";

const AccountVerified2 = () => {
  return (
    <div className="py-8 md:py-[3.75rem]">

    <div className="w-[408px] mx-auto px-6 py-8 border rounded-xl">
      <div className="w-[360px] space-y-9 bg-background">
        <div>
          <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert' />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Account verified</h1>
            <p className="font-medium text-sm text-muted-foreground">
              Congratulations! your email fullname@domain.com has been verified
            </p>
          </div>
          <div>
            <Button className="w-full">Continue to your account</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountVerified2;
