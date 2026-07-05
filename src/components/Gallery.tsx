import { FramedImage } from "@/components/FramedImage"
import photo1 from "@/assets/gallery1.webp"
import photo2 from "@/assets/gallery2.webp"
import photo3 from "@/assets/gallery3.webp"
import photo4 from "@/assets/gallery4.webp"

const photos = [photo1, photo2, photo3, photo4]

export function Gallery() {
  return (
    <section id="galeri">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Yaptığımız İşlerden</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((photo, i) => (
            <FramedImage
              key={i}
              src={photo}
              alt="Toyrrum tamamlanan iş örneği"
              aspect="square"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
