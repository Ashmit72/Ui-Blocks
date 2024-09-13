import { Button } from "@/components/ui/button"

const VerificationLinkExpired4 = () => {
  return (
    <div className="py-8 md:py-[3.75rem]">

    <div className="w-[408px] mx-auto px-6 py-8 border rounded-xl">
        <div className="w-[360px] space-y-9">
        <div>
            <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert'/>
        </div>
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Verification code expired</h1>
                <p className="font-medium text-sm text-muted-foreground">Looks like your email verification link has expired. No worries we can send the link again</p>
            </div>
            <div>
                <Button className="w-full">Resend verification code</Button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default VerificationLinkExpired4