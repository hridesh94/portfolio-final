import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

export function HeroPlate() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), 6500);
    return () => clearInterval(id);
  }, []);
  return (
    <figure className="plate relative aspect-[3/4] w-full overflow-hidden bg-muted">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1080}
          height={1440}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms] ease-in-out"
          style={{ opacity: idx === i ? 1 : 0 }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
        Plate {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </figcaption>
    </figure>
  );
}
