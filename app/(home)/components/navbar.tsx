import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <div className="min-w-full fixed z-[99999] gap-x-2 p-2 flex right-1 justify-between">
            <Button
                className="text-lg text-green-600 dark:text-green-300 hover:cursor-none"
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