export function FramedImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  onClick,
}: {
  src: string
  alt: string
  aspect?: "4/3" | "square"
  priority?: boolean
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`overflow-hidden rounded-lg border border-border ${onClick ? "cursor-pointer transition-transform hover:scale-[1.02]" : ""}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // @ts-expect-error fetchpriority is valid HTML, not yet in React types
        fetchpriority={priority ? "high" : undefined}
        decoding="async"
        className={`w-full object-cover ${aspect === "square" ? "aspect-square" : "aspect-4/3"}`}
      />
    </div>
  )
}
