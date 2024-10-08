"use client"

import { useFormStatus } from "react-dom"

import { Button, ButtonProps } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"

export function SubmitButton({
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button className ="bg-[#6d1f37] hover:bg-[#6d1f37]/90" type="submit" disabled={disabled || pending} {...props}>
      {pending && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
