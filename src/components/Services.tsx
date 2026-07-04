import { Sofa, Hammer, PaintRoller, Scissors } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconBadge } from "@/components/IconBadge"

const services = [
  {
    icon: Sofa,
    title: "Koltuk Döşeme",
    description:
      "Yıpranmış koltuk, kanepe ve sandalyelerinize yeni kumaş, sünger ve iskele onarımıyla ikinci bir ömür kazandırıyoruz.",
  },
  {
    icon: Hammer,
    title: "Mobilya Tamiri",
    description:
      "Kırılan, gıcırdayan ya da sallanan mobilyalarınızı yerinde veya atölyemizde onarıyoruz.",
  },
  {
    icon: PaintRoller,
    title: "İnşaat Tamamlama",
    description:
      "Alçı, boya ve ince işler dahil, yeni yapı ve yenileme sonrası tamamlama işlerini titizlikle yürütüyoruz.",
  },
  {
    icon: Scissors,
    title: "Terzi İşleri",
    description:
      "Bol gelen koltuk kılıfı, perde ve döşemelik kumaşlarınızı ölçünüze göre daraltıp dikiyoruz.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight">Hizmetlerimiz</h2>
          <p className="mt-3 text-muted-foreground">
            Mobilyadan yapıya, işinizi tek elden ve güvenle teslim ediyoruz.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-border/70">
              <CardHeader>
                <div className="mb-2">
                  <IconBadge icon={service.icon} />
                </div>
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
