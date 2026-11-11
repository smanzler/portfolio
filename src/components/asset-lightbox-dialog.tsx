import * as React from "react";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
  
} from "@/components/ui/carousel";
import type {CarouselApi} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Asset } from "@/lib/projects";
import { Spinner } from "@/components/ui/spinner";

interface AssetCarouselItemProps {
  asset: Asset;
}

function AssetCarouselItem({ asset }: AssetCarouselItemProps) {
  const [loading, setLoading] = React.useState(true);

  const handleImageLoad = () => setLoading(false);
  const handleVideoLoad = () => setLoading(false);

  return (
    <CarouselItem className="min-w-[min(200px,100%)]">
      <div className="flex items-center justify-center h-[calc(100vh-12rem)] w-full relative">
        {loading && <Spinner className="absolute size-6 text-glass-muted" />}
        {asset.type === "image" ? (
          <img
            src={asset.path}
            alt={asset.alt || ""}
            width={asset.width}
            height={asset.height}
            className="size-full object-contain"
            loading="lazy"
            onLoad={handleImageLoad}
          />
        ) : (
          <video
            src={asset.path}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            className="size-full object-contain"
            preload="metadata"
            onLoadedData={handleVideoLoad}
          >
            {asset.fallback && (
              <img
                src={asset.fallback}
                alt={asset.alt || ""}
                width={asset.width}
                height={asset.height}
                className="size-full object-contain"
                loading="lazy"
                onLoad={handleImageLoad}
              />
            )}
          </video>
        )}
      </div>
    </CarouselItem>
  );
}

const glassButton =
  "glass rounded-full text-glass-foreground hover:bg-[rgb(48_49_56/0.9)] disabled:opacity-30 cursor-pointer";

function AssetDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay className="bg-foreground/80 backdrop-blur-md">
        <DialogPrimitive.Close data-slot="dialog-close" asChild>
          <Button
            size="icon-lg"
            className={cn(glassButton, "absolute top-5 right-5")}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </DialogPrimitive.Close>
      </DialogOverlay>
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200",
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

interface AssetLightboxDialogProps {
  assets: Asset[];
  open: boolean;
  setOpen: (open: boolean) => void;
  initialIndex: number;
}

export function AssetLightboxDialog({
  open,
  setOpen,
  assets,
  initialIndex,
}: AssetLightboxDialogProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(initialIndex);
  const dragStartRef = React.useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = React.useRef(false);

  React.useEffect(() => {
    if (api && initialIndex >= 0) {
      api.scrollTo(initialIndex);
    }
  }, [api, initialIndex]);

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => setSelected(api.selectedScrollSnap());
    handleSelect();
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!open || !api) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        api.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        api.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, api]);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) return;

    if (dragStartRef.current) {
      const deltaX = Math.abs(e.clientX - dragStartRef.current.x);
      const deltaY = Math.abs(e.clientY - dragStartRef.current.y);
      if (deltaX > 5 || deltaY > 5) {
        isDraggingRef.current = true;
      }
    }
  };

  const handleClick = () => {
    if (!isDraggingRef.current) {
      setOpen(false);
    }

    dragStartRef.current = null;
    isDraggingRef.current = false;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AssetDialogContent
        className="!max-w-7xl p-10 sm:p-16 bg-transparent border-none shadow-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <DialogTitle className="sr-only">Media Gallery</DialogTitle>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
        >
          <CarouselContent>
            {assets.map((asset) => (
              <AssetCarouselItem key={asset.path} asset={asset} />
            ))}
          </CarouselContent>

          {assets.length > 1 && (
            <div onClick={(e) => e.stopPropagation()}>
              <CarouselPrevious
                variant="default"
                className={cn(
                  glassButton,
                  "size-9 sm:size-11 -left-9 sm:-left-14",
                )}
              />
              <CarouselNext
                variant="default"
                className={cn(
                  glassButton,
                  "size-9 sm:size-11 -right-9 sm:-right-14",
                )}
              />
            </div>
          )}
        </Carousel>
        <p className="m-0 flex justify-center gap-2 font-mono text-xs text-glass-muted">
          <span className="text-code-keyword">
            {String(selected + 1).padStart(2, "0")}
          </span>
          <span className="truncate">
            {assets[selected]?.alt || assets[selected]?.path}
          </span>
          <span className="text-glass-faint">
            / {String(assets.length).padStart(2, "0")}
          </span>
        </p>
      </AssetDialogContent>
    </Dialog>
  );
}
