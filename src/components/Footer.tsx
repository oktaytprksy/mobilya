import { business } from "@/lib/business"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-lg font-bold">{business.name}</p>
          <p className="text-sm text-primary-foreground/70">{business.tagline}</p>
        </div>
        <div className="text-sm text-primary-foreground/70">
          <p>{business.address}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
