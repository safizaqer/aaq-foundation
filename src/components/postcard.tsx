import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  tilt?: "left" | "right" | "straight";
  caption?: string;
  className?: string;
};

export function Postcard({ src, alt, width, height, tilt = "straight", caption, className = "" }: Props) {
  const tiltClass = tilt === "left" ? "tilt-left" : tilt === "right" ? "tilt-right" : "straight";
  return (
    <figure className={`postcard ${tiltClass} ${className}`}>
      <Image src={src} alt={alt} width={width} height={height}
             className="block object-cover" style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%", maxHeight: "60vh" }} />
      {caption && (
        <figcaption
          className="mt-2 text-xs italic text-center"
          style={{ color: "var(--foundation-muted-fg)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
