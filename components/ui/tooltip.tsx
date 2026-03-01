"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

type TouchTooltipState = {
    isTouchDevice: boolean
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TooltipTouchContext = React.createContext<TouchTooltipState | null>(null)

const Tooltip = ({
    children,
    open: openProp,
    onOpenChange: onOpenChangeProp,
    ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) => {
    const [open, setOpen] = React.useState(false)
    const [isTouchDevice, setIsTouchDevice] = React.useState(false)

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)")
        const handleMediaChange = () => setIsTouchDevice(mediaQuery.matches)
        handleMediaChange()
        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", handleMediaChange)
            return () => mediaQuery.removeEventListener("change", handleMediaChange)
        }
        mediaQuery.addListener(handleMediaChange)
        return () => mediaQuery.removeListener(handleMediaChange)
    }, [])

    return (
        <TooltipTouchContext.Provider value={{ isTouchDevice, open, setOpen }}>
            <TooltipPrimitive.Root
                {...props}
                open={isTouchDevice ? open : openProp}
                onOpenChange={isTouchDevice ? setOpen : onOpenChangeProp}
            >
                {children}
            </TooltipPrimitive.Root>
        </TooltipTouchContext.Provider>
    )
}

const TooltipTrigger = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ onClick, ...props }, ref) => {
    const touchState = React.useContext(TooltipTouchContext)

    return (
        <TooltipPrimitive.Trigger
            ref={ref}
            {...props}
            onClick={(event) => {
                onClick?.(event)
                if (!touchState?.isTouchDevice) {
                    return
                }
                event.preventDefault()
                touchState.setOpen((prev) => !prev)
            }}
        />
    )
})
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className
            )}
            {...props}
        />
    </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
