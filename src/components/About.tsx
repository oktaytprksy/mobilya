import { BadgeCheck, Clock, Wrench } from "lucide-react"
import { IconBadge } from "@/components/IconBadge"
import { FramedImage } from "@/components/FramedImage"
import kurucu from "@/assets/kurucu.webp"

const values = [
  {
    icon: BadgeCheck,
    title: "Yılların Deneyimi",
    description: "Döşeme ve tamamlama işlerinde uzun yıllara dayanan tecrübe.",
  },
  {
    icon: Wrench,
    title: "Kaliteli Malzeme",
    description: "Kumaş, sünger ve boya-alçı malzemesinde ödün vermiyoruz.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslim",
    description: "Verdiğimiz süre içinde işi eksiksiz tamamlıyoruz.",
  },
]

export function About() {
  return (
    <section id="hakkimizda">
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium text-muted-foreground">Hakkımızda</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-balance">
            Güvenilir İşçilik, Zamanında Teslim
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <FramedImage src={kurucu} alt="Toyrum kurucusu" />

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Yılların verdiği tecrübeyle koltuk döşeme, mobilya tamiri ve
              inşaat tamamlama işlerinde müşterilerimize güvenilir ve kaliteli
              hizmet sunuyoruz. İşimizi zamanında, özenle ve doğru malzemeyle
              teslim etmeyi ilke edindik.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Küçük bir tamirden komple döşeme ve tamamlama işine kadar her
              işi aynı özenle ele alıyor, müşterilerimizle uzun vadeli güven
              ilişkisi kuruyoruz.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-border/60 pt-16 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-3">
              <IconBadge icon={value.icon} />
              <h3 className="font-bold">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
