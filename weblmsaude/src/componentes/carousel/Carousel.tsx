import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  children?: React.ReactNode;
  loop?: boolean;
  align: "start";
  onClick?: () => void;
  className?: string;
  classNameChildren?: string;
};

const Carousel = (props: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: props.loop,
      align: props.align,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Viewport */}
      <div ref={emblaRef} className="pt-5">
        {/* Container */}
        <div className={`flex ${props.classNameChildren}`}>
          {props.children}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute rounded-full left-2 top-1/2 -translate-y-1/2 bg-blue-light/20 px-1 py-1"
      >
        <ChevronLeft className="cursor-pointer text-blue-light" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute rounded-full right-2 top-1/2 -translate-y-1/2 bg-blue-light/20 px-1 py-1"
      >
        <ChevronRight className="cursor-pointer text-blue-light" />
      </button>
    </div>
  );
};

export default Carousel;
