import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ForgotPassword1 = () => {
  return (
    <div className="w-[360px] mx-auto space-y-9 bg-background py-8 md:py-[3.75rem]">
        <div>
            <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert'/>
        </div>
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Reset password</h1>
                <p className="text-muted-foreground text-sm font-medium">Enter the email address you registered with and we'll send you the reset instructions</p>
            </div>
            <div className="space-y-[0.375rem]">
                <label className="text-sm font-medium">Email</label>
                <Input className="py-2 px-3"/>
            </div>
            <div>
                <Button className="w-full">Send Reset Instructions</Button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword1