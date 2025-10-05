import { useEffect, useRef } from "react";

import img1 from "../assets/tara-clark-Gk8LG7dsHWA-unsplash.jpg";
import img2 from "../assets/pexels-kampus-7551607 (1).jpg";
import img3 from "../assets/pexels-delot-19599238.jpg";
import img4 from "../assets/pexels-rdne-6148881.jpg";
import img5 from "../assets/pexels-rdne-8541349.jpg";
import img6 from "../assets/pexels-harry-thomas-3543800-10525693.jpg";

export default function Slideshow({speed = 0.5}) {
  const sliderRef = useRef(null);
  const images = [img2, img1, img6,img4, img3, img5 ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    let frameId;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  return (
    <div className="w-full h-45 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-max"
        style={{ scrollBehavior: "auto" }}
      >
        {[...images, ...images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="h-45 w-auto object-contain shadow-md
             flex-shrink-0 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
