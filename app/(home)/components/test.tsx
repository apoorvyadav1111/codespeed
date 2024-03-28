"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/spinner";

interface TestProps{
    language: string
}

const Test = ({language}:TestProps) => {
    const [code,setCode] = useState([] as string[]);
    const [isLoading, setIsLoading] = useState(true);

    const getCode = async () => {
        // fetch random code snippet from api
        const res = await fetch(`/api/data?folder=${language}`);
        const data = await res.json();
        const lines = data.code.split('\n');
        setCode(lines);
        setTimeout(()=>{setIsLoading(false)},200);
    }

    const [lineIdx, setLineIdx] = useState(1);
    const [idx, setIdx] = useState(0);
    const [line, setLine] = useState('');
    


    useEffect(()=>{
        getCode();
    },[]);

    useEffect(()=>{
        setIdx(0);
        setLineIdx(0);
        setLine(code[lineIdx]);
    },[code]);

    useEffect(()=>{
        if(idx === line.length){
            setLineIdx(lineIdx+1);
            setLine(code[lineIdx+1]);
            setIdx(0);
        }
    },[idx]);

    return (
        <>
        {
            isLoading ? (<Spinner size="lg"/>):(
                <div className="border">
                    <pre>
                        {line}
                    </pre>
                </div>
            )
        }
        {

        }
        </>
    );
}
 
export default Test;