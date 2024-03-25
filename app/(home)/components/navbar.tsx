import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
    return (
        <div className="min-w-full z-99999 gap-x-2 p-2 flex right-1 justify-between">
            <Button
                className="text-lg dark:text-green-300 text-red-600 hover:cursor-none"
                variant="ghost"
                size="lg"
            >
                codespeed
            </Button>
            <div className="flex justify-end gap-x-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                            <span>Select Language</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Python
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Java
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            C
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Rust
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            C++
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
            </div>
        </div>
      );
}
export default Navbar;