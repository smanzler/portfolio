import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto">
        <div className="h-14 flex mx-auto justify-between items-center px-4 max-w-7xl">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold">Simon Manzler</span>
          </a>

          <nav className="flex items-center gap-6">
            <div className="hidden gap-6 md:flex">
              <Button
                variant="ghost"
                className="text-lg"
                onClick={() => handleScroll("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="text-lg"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                className="text-lg"
                onClick={() => handleScroll("contact")}
              >
                Contact
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => handleScroll("about")}>
                    About
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleScroll("projects")}>
                    Projects
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleScroll("contact")}>
                    Contact
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
