import { FramedImage } from "@/components/FramedImage"
import photo1 from "@/assets/Gemini_Generated_Image_wd618awd618awd61.png"
import photo2 from "@/assets/Gemini_Generated_Image_jp2olqjp2olqjp2o.png"
import photo3 from "@/assets/Gemini_Generated_Image_53ur2m53ur2m53ur.png"
import photo4 from "@/assets/Gemini_Generated_Image_2678ud2678ud2678.png"

const photos = [photo1, photo2, photo3, photo4]

export function Gallery() {
  return (
    <section id="galeri">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">Yaptığımız İşlerden</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tamamlanan döşeme ve tamamlama projelerimizden örnekler.
        </p>

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
