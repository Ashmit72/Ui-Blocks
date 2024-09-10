import { Button } from "@/components/ui/button"

const ResetEmailSent1 = () => {
  return (
    <div className="w-[360px] mx-auto space-y-9 bg-background py-8 md:py-[3.75rem]">
        <div>
            <img src="Radian.png"/>
        </div>
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Check your email</h1>
                <p className="text-muted-foreground text-sm font-medium">We've sent the password reset instructions to fullname@domain.com</p>
            </div>
            <div className="space-y-3 flex flex-col">
                <Button className="py-[0.625rem] px-[0.875rem]">Open email application</Button>
                <Button className="py-[0.625rem] px-[0.875rem]" variant={"outline"}>Back to sign in</Button>
            </div>
        </div>
    </div>
  )
}

export default ResetEmailSent1