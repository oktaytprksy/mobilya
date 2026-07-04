export function FramedImage({
  src,
  alt,
  aspect = "4/3",
}: {
  src: string
  alt: string
  aspect?: "4/3" | "square"
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${aspect === "square" ? "aspect-square" : "aspect-4/3"}`}
      />
    </div>
  )
}
