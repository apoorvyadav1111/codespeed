"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcwIcon, XIcon } from "lucide-react";
import HelpTooltip from "@/components/helptoottip";
import { useRouter } from "next/navigation";

interface TestProps{
    language: string
}

const Test = ({language}:TestProps) => {
    const router = useRouter();
    const [code,setCode] = useState([] as string[]);
    const [difficulty, setDifficulty] = useState('easy');
    const [isLoading, setIsLoading] = useState(true);
    const [lineIdx, setLineIdx] = useState(0);
    const [line, setLine] = useState('');
    const [nextLine, setNextLine] = useState('');
    const [input, setInput] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    

    const getCode = async () => {
        // fetch random code snippet from api
        const res = await fetch(`/api/data?folder=${language}`);
        const data = await res.json();
        const lines = data.code.replace('\t','').split('\n').filter((line:string)=>line!=='').map((line:string)=>line.trim());
        setCode(lines);
        setTimeout(()=>{setIsLoading(false)},200);
    }



    useEffect(()=>{
        getCode();
    },[difficulty]);

    useEffect(()=>{
        setLine(code[lineIdx]);
        if (lineIdx < code.length-1){ 
            setNextLine(code[lineIdx+1]);
        }else{
            setNextLine('');
        }

    },[code]);

    useEffect(()=>{
        setLine(code[lineIdx]);
        if (lineIdx < code.length-1){ 
            setNextLine(code[lineIdx+1]);
        }
        else{
            setNextLine('');
        }
        setInput('');
    },[lineIdx]);

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if(e.key === 'Enter'){
            if(input.length >= line.length){
                if (lineIdx === code.length-1){
                    setIsCompleted(true);
                }else{
                    if (lineIdx < code.length-1) {
                        setLineIdx(lineIdx =>lineIdx+1);
                    }else{
                        setLineIdx(lineIdx =>lineIdx+1);
                    }
                }
            }
        }else if(e.key==='Tab'){
            e.preventDefault();
        }else if(difficulty ==='hard' && e.key==='Backspace'){
            e.preventDefault();
        }
    }

    const getCharColor = (idx:number, char: string) => {
        if (idx < input.length){
            return char === input[idx] ? 'border-green-500 text-green-500 dark:text-green-300 dark:border-green-300' : 'border-red-500 text-red-500 dark:text-red-400 dark:border-red-400';
        }
        return '';
    }
    const spaceClassUnderline = (char: string) => {
        return char === ' ' ? 'border-dashed border-b-2  border-gray-100  dark:border-gray-700' : '';
    }

    const getCharClass = (idx:number, char: string) => {
        return `${getCharColor(idx,char)} ${spaceClassUnderline(char)}`;
    }

    const setMode = (mode:string) => {
        setDifficulty(mode);
    }

    const restart = () => {
        setLineIdx(0);
        setIsCompleted(false);
    }

    const abort = () => {
        // go back to home
        console.log('abort');
        window.location.reload();
    }
    return (
        <>
        {
            isLoading && <Spinner size="lg"/> 
        }
        {
            !isLoading && !isCompleted && (
                <>
                <div className="absolute top-[25%] left-[25%] min-w-[50%] p-4 rounded dark:text-gray-200 text-gray-800 gap-y-10">
                    {/* easy and hard mode represented as EASY | HARD */}
                    <div className="text-2xl text-center">
                        <Button 
                            onClick={()=>setMode('easy')}
                            variant="ghost" 
                            size="sm" 
                            className={cn(difficulty === 'easy' ? 'text-green-500 dark:text-green-300' : 'text-gray-800 dark:text-gray-200')}
                        >EASY</Button>
                        <span className="mx-2">|</span>
                        <Button
                            onClick={()=>setMode('hard')}
                            variant="ghost" 
                            size="sm" 
                            className={cn(difficulty === 'hard' ? 'text-green-500 dark:text-green-300' : 'text-gray-800 dark:text-gray-200')}
                        >HARD</Button>
                    </div>

                    <pre className="">
                        <div className="text-xl">
                            { line.split('').map((char, i) => {
                                return <span key={i} className={getCharClass(i, char)}>{char}</span>
                            })}
                        </div>
                        <span className="text-sm opacity-70">{nextLine}</span>
                    </pre>
                    <Input 
                        autoFocus
                        className="opacity-0"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        onKeyDown={(e)=>handleKeyDown(e)}
                    />
                </div>
                </>
            )
        }
        {
            isCompleted && (
            <>
            <div className="absolute top-[25%] left-[25%] min-w-[50%] p-4 rounded dark:text-gray-200 text-gray-800 gap-y-10">
                <div className="text-2xl text-center">
                    <h1>Test Completed</h1>
                    <Button 
                        onClick={()=>restart()}
                        variant="ghost"
                        size="sm"
                    >Restart</Button>
                </div>
            </div>
            </>
            )
        }
        {
            !isLoading && !isCompleted && (
            <>
            <div className="absolute w-[80%] left-[10%] bottom-[10%] items-center justify-center">
                <hr className="border-t-1 border-gray-200 dark:border-gray-700"/>
                    <div className="flex">
                        <HelpTooltip text="Restart the test">
                            <Button 
                                onClick={()=>restart()}
                                variant="ghost"
                                size="sm"
                            >
                                <RotateCcwIcon className="w-4 h-4"/>
                            </Button>
                        </HelpTooltip>
                        <HelpTooltip text="Abort">
                            <Button 
                                onClick={()=>abort()}
                                variant="ghost"
                                size="sm"
                            >
                                <XIcon className="w-4 h-4"/>
                            </Button>
                        </HelpTooltip>
                        <HelpTooltip text="Current index of the line">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-sm"
                                >{input.length}/{line.length}
                            </Button>
                        </HelpTooltip>
                        <HelpTooltip text="Line number of the code">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-sm"
                                >{lineIdx}/{code.length}
                            </Button>
                        </HelpTooltip>
                    </div>
                </div>
                </>
            )
        }
        </>
    );
}
 
export default Test;