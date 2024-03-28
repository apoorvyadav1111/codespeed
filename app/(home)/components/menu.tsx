"use client";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MenuProps{
    onSelect: (lang:string)=>void
}

const Menu = (
    {
        onSelect
    }:MenuProps
) => {
    const [lang, setLang] = useState('');
    const selectLang = (lang: string) => {
        setLang(lang);
        onSelect(lang);
    }
    return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="pl-2 border-none underline hover:bg-transparent" size="lg">
                  {
                    lang === ''? 'Language' : lang
                  }
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>selectLang('Python')}>
                  Python
              </DropdownMenuItem>
              <DropdownMenuItem  onClick={()=>selectLang('Java')}>
                  Java
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>selectLang('C')}>
                  C
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>selectLang('Rust')}>
                  Rust
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>selectLang('C++')}>
                  C++
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    );
}
 
export default Menu;