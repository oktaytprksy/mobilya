import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/business"

export function CallButton({
  size = "default",
  label = business.phoneDisplay,
}: {
  size?: "sm" | "default" | "lg"
  label?: string
}) {
  return (
    <Button size={size} nativeButton={false} render={<a href={business.phoneHref} />}>
      <Phone className="size-4" />
      {label}
    </Button>
  )
}
