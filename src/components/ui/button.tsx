import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "hero-primary": "relative overflow-hidden bg-gradient-fire text-primary-foreground px-10 py-5 rounded-3xl font-bold text-lg shadow-mega transition-all duration-500 hover:scale-[1.05] hover:shadow-fire active:scale-[0.95] border border-primary/20 bg-[length:200%_200%]",
        "outline-earth": "relative border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold bg-transparent transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
        "orange-gradient": "relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-base text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] border border-orange-500/20 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-[length:200%_200%] animate-shimmer hover:text-white hover:from-orange-400 hover:via-orange-300 hover:to-orange-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        hero: "h-auto py-5 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
