"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CalendlyButtonProps extends Omit<ButtonProps, "onClick"> {
  calendlyUrl?: string
  children: React.ReactNode
}

export function CalendlyButton({
  calendlyUrl = "https://calendly.com/dai-agency-g/30min",
  children,
  className,
  ...props
}: CalendlyButtonProps) {
  return (
    <Button
      asChild
      className={className}
      {...props}
    >
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  )
}
