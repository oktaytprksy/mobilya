import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FramedImage } from "@/components/FramedImage"
import photo1 from "@/assets/gallery1.webp"
import photo2 from "@/assets/gallery2.webp"
import photo3 from "@/assets/gallery3.webp"
import photo4 from "@/assets/gallery4.webp"
import insaat1 from "@/assets/insaat1.webp"
import insaat2 from "@/assets/insaat2.webp"
import insaat3 from "@/assets/insaat3.webp"
import insaat4 from "@/assets/insaat4.webp"
import insaat5 from "@/assets/insaat5.webp"
import insaat6 from "@/assets/insaat6.webp"
import insaat7 from "@/assets/insaat7.webp"
import insaat8 from "@/assets/insaat8.webp"
import insaat9 from "@/assets/insaat9.webp"
import insaat10 from "@/assets/insaat10.webp"

const photos = [photo1, photo2, photo3, photo4]
const insaatPhotos = [
  insaat1, insaat2, insaat3, insaat4, insaat5,
  insaat6, insaat7, insaat8, insaat9, insaat10,
]
// tum gorseller tek listede, lightbox sirayla gezer
const allPhotos = [...photos, ...insaatPhotos]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % allPhotos.length)
      if (e.key === "ArrowLeft")
        setActive((i) => ((i ?? 0) - 1 + allPhotos.length) % allPhotos.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active])

  return (
    <section id="galeri">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Yaptığımız İşlerden</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo, i) => (
            <FramedImage
              key={i}
              src={photo}
              alt="Toyroom tamamlanan iş örneği"
              aspect="square"
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-bold tracking-tight">
          İnşaat Tamamlayıcı İşlerimiz
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {insaatPhotos.map((photo, i) => (
            <FramedImage
              key={i}
              src={photo}
              alt="Toyroom inşaat tamamlama iş örneği"
              aspect="square"
              onClick={() => setActive(photos.length + i)}
            />
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Kapat"
          >
            <X className="size-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => ((i ?? 0) - 1 + allPhotos.length) % allPhotos.length)
            }}
            className="absolute left-2 cursor-pointer rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:left-6"
            aria-label="Önceki"
          >
            <ChevronLeft className="size-9" />
          </button>
          <img
            src={allPhotos[active]}
            alt="Toyroom iş örneği"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActive((i) => ((i ?? 0) + 1) % allPhotos.length)
            }}
            className="absolute right-2 cursor-pointer rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:right-6"
            aria-label="Sonraki"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>
      )}
    </section>
  )
}
