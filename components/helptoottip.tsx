import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface HelpTooltipProps{
    text: string
    children: React.ReactNode
}

const HelpTooltip = (
    {text, children}:HelpTooltipProps
) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <Tooltip>
                        {text}
                    </Tooltip>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default HelpTooltip;
