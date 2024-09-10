import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const VerifyEmailCode2 = () => {
  const inputRef = useRef<any>([]);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleInputChange = (value: string, index: number) => {
    //regex
    if (/^[a-zA-Z0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    //movement
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRef.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

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
            <p className="font-medium text-sm text-muted-foreground">
              Please enter the 6-digit code we emailed you at
              fullname@domain.com
            </p>
          </div>
          <div className="space-y-[0.375rem]">
            <p className="font-medium text-sm">Confirmation Code</p>
            <div className="flex gap-2">
              {otp.map((letter: string, index: number) => (
                <Input
                  ref={(element) => (inputRef.current[index] = element)}
                  key={index}
                  className="rounded-md p-[0.75rem]"
                  maxLength={1}
                  value={letter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e.target.value, index)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(e, index)
                  }
                />
              ))}
            </div>
          </div>
          <div>
            <Button className="w-full">Verify</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VerifyEmailCode2;
