"use client";
import { useRef, useState } from "react";
import Menu from "./components/menu";
import { CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Test from "./components/test";
import {code} from "@/public/code";

const HomePage = () => {
  const [lang, setLang] = useState('');
  const [isTesting, setIsTesting] = useState(false);

  const onSelect = (lang: string) =>{
    setLang(lang)
  }

  const loadTest = () => {
    setIsTesting(true);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const loadTestOnEnter = () => {
    if (isTesting) {
      return;
    }
    return (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        loadTest();
      }
    }
  }

  return (
    <>
    {
      !isTesting && (
        <div className="fixed opacity-10 h-screen w-full text-slate-700 dark:text-white  top-0 left-0 p-4 z-[-99]">
          <code>
            {code}
          </code>
        </div>
      )
    }
    <div onClick={focusInput} onKeyDown={loadTestOnEnter()} className="min-h-screen flex flex-col items-center justify-center">
      {
        !isTesting &&
        (
          <>
          <div className="absolute top-[40%] text-2xl flex flex-col">
            <p>
          I want to practice typing for
          <Menu onSelect={onSelect}/>
            </p>
          {
            lang !=="" && (
              <Button 
                onClick={()=>loadTest()}
                size="sm" 
                variant="ghost" 
                className="border-none p-2 m-2 rounded-full hover:bg-transparent">
                Start Test &nbsp;
                <CornerDownLeft />
              </Button>
            )
          }
          </div>
          </>
        )
      }
      {
        isTesting && (
          <div>
            <Test inputRef={inputRef} focusInput={focusInput} language={lang}/>
          </div>
        )

      }
    </div>
    </>
  );
}

export default HomePage;
