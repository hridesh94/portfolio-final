import { useEffect, useState } from "react";
const images = [
  "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781514089/Photo_Mar_28_2026_znf56q.jpg",
  "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781514001/Photo_Jul_25_2024_expmjo.jpg",
  "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506694/Photo_Apr_22_2024_aq034e.jpg",
];

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
      <figcaption className="absolute bottom-3 left-3 font-sans text-[11px] tracking-[0.12em] text-foreground/50">
        Plate {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </figcaption>
    </figure>
  );
}
