import { Button } from "@/components/ui/button"

const PasswordChanged2 = () => {
  return (
    <div className="py-8 md:py-[3.75rem]">
    <div className="w-[360px] mx-auto px-6 py-8 border rounded-xl">

    <div className="space-y-9 bg-background">
        <div>
            <img src="Radian.webp" className='h-8 dark:saturate-0 dark:brightness-50 dark:invert'/>
        </div>
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Password changed</h1>
                <p className="font-medium text-sm text-muted-foreground">Your password has been successfully changed</p>
            </div>
            <div>
                <Button className="w-full ">Back to Login</Button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default PasswordChanged2