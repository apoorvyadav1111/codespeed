"use client";
import { CodeSquare, EyeIcon, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
    const [focus, setFocus] = useState(false);
    
    const toggleFocus = () => {
        setFocus(focus => !focus);
    }

    return (  
        <>
            <div className={cn(focus&&'opacity-0',"fixed bg-[#1f1f1f] text-green-300 dark:bg-green-300 dark:text-[#1f1f1f] p-4 bottom-0 w-full")}>
                <div className="flex text-xs text-center justify-center items-center">
                    <div className="absolute left-10">
                        {/* click to fade */}
                        <Button 
                            onClick={toggleFocus}
                            variant="ghost" 
                            className="hover:bg-transparent"
                        >
                            { 
                                !focus && (<EyeIcon size="sm"/>)
                            }
                        </Button>
                    </div>
                    <div>
                        <p><b>codespeed</b>&nbsp;
                            <a href="https://apoorvyadav.vercel.app" target="_blank">
                            Made by Apoorv Yadav
                            </a> in 2024</p>
                    </div>
                    <div> | </div>
                    <div>
                        Powered by <a href="https://nextjs.org" className="underline">Next.js</a> on <a href="https://vercel.com" className="underline">Vercel</a>
                    </div>
                    <div> | </div>
                    <div className="w-6 h-6">
                        <a href="https://github.com/apoorvyadav1111/codespeed" target="_blank" className="underline">
                            <CodeSquare size="sm"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cn(!focus&&'opacity-0',"opacity-30 fixed bg-transparent p-4 bottom-0 w-full")}>
                <div className="flex text-xs text-center justify-center items-center">
                    <div className="absolute left-10 pb-4">
                        <Button 
                            onClick={toggleFocus}
                            variant="ghost" 
                            className="hover:bg-transparent"
                        >
                            { 
                                focus && (<EyeOff  size="sm"/>)
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;