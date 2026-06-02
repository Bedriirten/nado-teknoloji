import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const contactTitle = "İletişim | Nado Teknoloji";
const contactDescription =
  "Nado Teknoloji ile yazılım projeleri, dijital ürün fikirleri, AI destekli çözümler ve Nado Travel iş birlikleri hakkında iletişime geçin.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: "https://nadoteknoloji.com/iletisim",
    siteName: "Nado Teknoloji",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 492,
        height: 353,
        alt: "Nado Teknoloji logosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: ["/logo.png"],
  },
};

const contactDetails = [
  {
    label: "E-posta",
    value: "info@nadoteknoloji.com",
    href: "mailto:info@nadoteknoloji.com",
  },
  {
    label: "Çalışma Alanı",
    value: "Yazılım ve Dijital Ürün Geliştirme",
  },
  {
    label: "Durum",
    value: "Aktif olarak yeni proje ve iş birliklerini değerlendiriyoruz.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-turquoise/25">
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  );
}

function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_26%,rgba(118,220,227,0.38),transparent_28rem),radial-gradient(circle_at_72%_20%,rgba(36,184,198,0.18),transparent_22rem),radial-gradient(circle_at_86%_70%,rgba(177,18,38,0.045),transparent_20rem),linear-gradient(180deg,#fffdf8_0%,#f4efe7_66%,#e8ddd0_100%)]" />
      <div className="premium-grid absolute inset-0 -z-10 opacity-35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            alt="Nado Teknoloji logosu"
            width={42}
            height={31}
            className="h-8 w-auto object-contain drop-shadow-[0_8px_16px_rgba(36,184,198,0.16)]"
            priority
          />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-turquoise-deep">
          Nado Teknoloji
        </p>
        </div>
        <h1 className="mt-4 text-5xl font-semibold leading-tight text-foreground sm:text-7xl">
          İletişim
        </h1>
        <p className="mt-5 text-lg font-semibold leading-8 text-crimson sm:text-xl">
          İş Birliği ve Projeler İçin İletişime Geçin
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
          Nado Teknoloji ile yazılım projeleri, dijital ürün fikirleri, AI destekli çözümler ve
          Nado Travel iş birlikleri hakkında iletişime geçebilirsiniz.
        </p>
      </div>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="border-y border-foreground/10 py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-turquoise-deep">
            İletişim
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            Yeni proje ve iş birliklerini değerlendirebiliriz.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Yazılım geliştirme, dijital ürün geliştirme, AI destekli çözümler veya Nado Travel
            odağındaki iş birlikleri için doğrudan iletişime geçebilirsiniz.
          </p>

          <div className="mt-9 divide-y divide-foreground/10 border-t border-foreground/10">
            {contactDetails.map((item) => (
              <ContactDetail key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-crimson">
            İletişim Formu
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: Readonly<{
  label: string;
  value: string;
  href?: string;
}>) {
  const content = (
    <>
      <span className="text-sm font-medium text-muted">{label}</span>
      <span className="text-base font-semibold text-foreground">{value}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="flex flex-col gap-2 py-5 transition duration-300 hover:text-turquoise-deep"
      >
        {content}
      </Link>
    );
  }

  return <div className="flex flex-col gap-2 py-5">{content}</div>;
}
