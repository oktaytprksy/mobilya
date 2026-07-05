import { MapPin, Phone } from "lucide-react"
import { CallButton } from "@/components/CallButton"
import { business } from "@/lib/business"

export function Contact() {
  return (
    <section id="iletisim">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">İletişim</h2>
          <p className="mt-3 text-muted-foreground">
            Sorularınız ve teklif talepleriniz için bize ulaşın.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{business.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <CallButton size="lg" label="Hemen Ara" />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg border border-border/70">
          <iframe
            title="Konum"
            className="h-[420px] w-full lg:h-full lg:min-h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${business.mapsLat},${business.mapsLng}&z=17&output=embed`}
          />
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${business.mapsLat},${business.mapsLng}`}
            target="_blank"
            rel="noreferrer"
            className="border-t border-border/70 bg-secondary/40 px-4 py-2 text-center text-sm hover:text-accent"
          >
            Yol tarifi al
          </a>
        </div>
      </div>
    </section>
  )
}
