import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "BAĞLANTILAR",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Nado Travel", href: "/nado-travel" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "ÜRÜNLER",
    links: [
      { label: "Nado Travel", href: "/nado-travel" },
    ],
  },
  {
    title: "İLETİŞİM",
    links: [
      { label: "E-posta", href: "/iletisim" },
      { label: "İş Birliği", href: "/iletisim" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-crimson-hover/15 px-5 py-12 sm:px-8 sm:py-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_18%,rgba(177,18,38,0.09),transparent_28rem),radial-gradient(circle_at_86%_76%,rgba(217,74,43,0.06),transparent_24rem),linear-gradient(180deg,rgba(244,239,231,0.16),rgba(232,221,208,0.68))]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-crimson-hover/35 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
              aria-label="Nado Teknoloji ana sayfa"
            >
              <Image
                src="/logo.png"
                alt="Nado Teknoloji logosu"
                width={62}
                height={45}
                className="h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_10px_18px_rgba(177,18,38,0.18)]"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
                Nado Teknoloji
              </span>
            </Link>

            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              Yazılım geliştirme, dijital ürünler ve AI destekli çözümler
              üzerine çalışan teknoloji girişimi.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-8 sm:grid-cols-3 sm:gap-8 lg:pt-2"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-crimson">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="footer-link text-[0.96rem] font-semibold text-muted transition duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-11 border-t border-crimson-hover/15 pt-5 text-center text-sm text-muted sm:mt-12">
          © 2026 Nado Teknoloji. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
