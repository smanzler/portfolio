import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { FolderOpenDot, User } from "lucide-react";
import simonIcon from "@/assets/simon-icon.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const lastVisibilityChangeY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const isScrolledNow = latest > 50;
      const isScrollingDown = latest > lastScrollY.current;
      const scrollDelta = latest - lastVisibilityChangeY.current;

      // Always show header when near top
      if (!isScrolledNow) {
        setIsVisible(true);
        lastVisibilityChangeY.current = latest;
      } else {
        // When scrolling up, show immediately
        if (!isScrollingDown) {
          setIsVisible(true);
          lastVisibilityChangeY.current = latest;
        } else {
          // When scrolling down, only hide after 50px delay
          if (scrollDelta >= 50) {
            setIsVisible(false);
            lastVisibilityChangeY.current = latest;
          }
        }
      }

      setIsScrolled(isScrolledNow);
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const handleClick = (id: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", {
        state: {
          id: id,
        },
      });
    }
  };

  return (
    <motion.header
      className="fixed left-0 right-0 z-5"
      animate={{
        top: isScrolled ? (isVisible ? "20px" : "-80px") : "0",
      }}
      transition={{ duration: 0.4, ease: [0.1, 0.6, 0.3, 0.95] }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className={cn(
            "mx-auto rounded-full transition-colors max-w-4xl flex justify-between items-center mx-auto",
            isScrolled
              ? "bg-card shadow-lg backdrop-blur-lg supports-[backdrop-filter]:bg-input/50"
              : "bg-transparent"
          )}
          animate={{
            padding: isScrolled ? "4px 24px" : "4px 0px",
          }}
          transition={{ duration: 0.3, ease: [0.1, 0.6, 0.3, 0.95] }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => handleClick("home", e)}
              >
                <img src={simonIcon} alt="Simon Manzler" className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Simon Manzler</TooltipContent>
          </Tooltip>

          <nav className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => handleClick("projects", e)}
                >
                  <FolderOpenDot />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Projects</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => handleClick("about", e)}
                >
                  <User />
                </Button>
              </TooltipTrigger>
              <TooltipContent>About</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>Toggle Theme</TooltipContent>
            </Tooltip>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
