"use client";
import { useState } from "react";
import Menu from "./components/menu";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Test from "./components/test";


const HomePage = () => {
  const [lang, setLang] = useState('');
  const [isTesting, setIsTesting] = useState(false);

  const onSelect = (lang: string) =>{
    setLang(lang)
  }

  const loadTest = () => {
    setIsTesting(true);
  }

  return (
    <div className="flex flex-col items-center justify-between p-24">
      {
        !isTesting &&
        (
          <p>
          I want to practice typing for
          <Menu onSelect={onSelect}/>
          {
            lang !=="" && (
            <div className="flex justify-center w-full items-center">
              <Button 
                onClick={()=>loadTest()}
                size="sm" 
                variant="outline" 
                className="border-none p-2 m-2 rounded-full">
                Start Test &nbsp;
                <CornerDownLeft />
              </Button>
            </div>
            )
          }
          </p>
        )
      }
      {
        isTesting && (
          <div>
            <Test language={lang}/>
          </div>
        )

      }
    </div>
  );
}

export default HomePage;
