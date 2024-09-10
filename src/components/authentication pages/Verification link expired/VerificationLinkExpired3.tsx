import { Button } from "@/components/ui/button"

const VerificationLinkExpired3 = () => {
  return (
    <div className="w-[360px] mx-auto py-8 md:py-[3.75rem] space-y-9">
        <div>
            <img src="Radian.png"/>
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
  )
}

export default VerificationLinkExpired3