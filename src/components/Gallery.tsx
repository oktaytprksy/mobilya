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

        <h2 className="mt-20 text-3xl font-bold tracking-tight">
          İnşaat Tamamlayıcı İşlerimiz
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {insaatPhotos.map((photo, i) => (
            <FramedImage
              key={i}
              src={photo}
              alt="Toyrrum inşaat tamamlama iş örneği"
              aspect="square"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
