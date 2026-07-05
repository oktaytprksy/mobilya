export function FramedImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
}: {
  src: string
  alt: string
  aspect?: "4/3" | "square"
  priority?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
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
