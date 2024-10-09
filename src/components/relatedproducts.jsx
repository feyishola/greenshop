import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';

export default function CarouselRelatedProducts({ images,heading }) {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="glide-05 relative w-full my-16 md:my-32">
      <h2 className="text-[17px] font-bold text-primary-color text-start pb-5 pl-5 md:pl-0">{heading}</h2>
      <hr/>
      {/* Slides Container */}
      <div className="overflow-hidden pt-5" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {images.map((image, index) => (
            <li key={index}>
              <img
                src={image.url}
                alt={image.alt || `slide-${index}`}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className='text-[16px]'>{image.productname}</p>
              <p className='text-[18px] font-bold text-[#46A358]'>{image.price}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Indicators (Dynamically Generated Based on Number of Images) */}
      <div className="flex w-full items-center justify-center gap-2" data-glide-el="controls[nav]" >
        {images.map((_, index) => (
          <button
            key={index}
            className="group p-4 glide__bullet glide__bullet--active "
            data-glide-dir={`=${index}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="block h-2 w-2 "></span>
          </button>
        ))}
      </div>
    </div>
  );
}
