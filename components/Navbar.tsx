import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Nado Travel", href: "/nado-travel" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  return (
    <header className="glass-nav sticky inset-x-0 top-0 z-50 border-b border-foreground/10 backdrop-blur-md">
      <nav className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Nado Teknoloji ana sayfa">
          <Image
            src="/logo.png"
            alt="Nado Teknoloji logosu"
            width={54}
            height={40}
            className="h-10 w-auto object-contain transition duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-[0_8px_14px_rgba(177,18,38,0.28)]"
            priority
          />
          <span className="truncate text-sm font-semibold uppercase tracking-[0.16em] text-foreground sm:text-base sm:tracking-[0.2em]">
            <span className="sm:hidden">Nado</span>
            <span className="hidden sm:inline">Nado Teknoloji</span>
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-0.5 sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-2 py-2 text-[0.7rem] font-semibold text-muted transition duration-300 hover:border-turquoise/25 hover:bg-surface/60 hover:text-turquoise-deep sm:px-4 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
