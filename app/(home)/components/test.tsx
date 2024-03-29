"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";

interface TestProps{
    language: string
}

const Test = ({language}:TestProps) => {
    const [code,setCode] = useState([] as string[]);
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
    },[]);

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
            if(input.length === line.length){
                if (lineIdx === code.length-1){
                    setIsCompleted(true);
                }else{
                    console.log('next line');
                    if (lineIdx < code.length-1) {
                        setLineIdx(lineIdx =>lineIdx+1);
                    }else{
                        setLineIdx(lineIdx =>lineIdx+1);
                    }
                }
            }
        }else if(e.key==='Tab'){
            e.preventDefault();
        }
    }

    const getCharColor = (idx:number, char: string) => {
        if (idx < input.length){
            return char === input[idx] ? 'text-green-500' : 'text-red-500';
        }
        return '';
    }

    return (
        <>
        {
            isLoading ? (<Spinner size="lg"/>):(
                <div className="absolute top-[25%] left-[25%] min-w-[50%] p-4 rounded dark:text-gray-200 text-gray-800">
                    <pre className="">
                        {line.length} {input.length} {lineIdx} {code.length} {isCompleted.toString()}
                        <div className="text-3xl">
                            { line.split('').map((char, i) => {
                                return <span key={i} className={getCharColor(i,char)}>{char}</span>
                            })}
                        </div>
                        <br/>
                        <br/>
                        <span className="text-m opacity-70">{nextLine}</span>
                    </pre>
                    {input}
                    <Input 
                        className="opacity-5"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        onKeyDown={(e)=>handleKeyDown(e)}
                    />
                </div>
            )
        }
        {

        }
        </>
    );
}
 
export default Test;