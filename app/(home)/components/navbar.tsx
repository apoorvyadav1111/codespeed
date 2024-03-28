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

            <ModeToggle />
        </div>
      );
}
export default Navbar;