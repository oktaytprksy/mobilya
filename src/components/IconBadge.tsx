import type { LucideIcon } from "lucide-react"

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 items-center justify-center rounded-md border border-border text-foreground">
      <Icon className="size-5" />
    </div>
  )
}
