import { Link } from "react-router-dom"
import { MapPin } from "lucide-react"
import { CallButton } from "@/components/CallButton"
import { FramedImage } from "@/components/FramedImage"
import { business } from "@/lib/business"
import dukkan from "@/assets/dukkan.jpg"

export function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm font-medium text-muted-foreground">
            İncek, Ankara
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Koltuk Döşeme ve İnşaat Tamamlama İşleri
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground text-pretty">
            Koltuk döşeme, mobilya tamiri, alçı ve boya işlerinde uzman
            ekibimizle işinizi zamanında ve kaliteli malzemeyle teslim
            ediyoruz.
          </p>

          <div className="pt-2">
            <CallButton size="lg" />
          </div>

          <Link
            to="/iletisim"
            className="flex items-center gap-2 pt-4 text-sm text-muted-foreground hover:text-foreground"
          >
            <MapPin className="size-4" />
            {business.address}
          </Link>
        </div>

        <FramedImage src={dukkan} alt="Toyrrum dükkanı" />
      </div>
    </section>
  )
}
