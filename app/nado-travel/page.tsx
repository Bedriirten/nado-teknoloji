import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

const problemPoints = [
  "Dağınık bilgi kaynakları",
  "Rota ve zaman planlama zorluğu",
  "Gerçek kullanıcı deneyimlerine ulaşma ihtiyacı",
];

const productOutputs = [
  {
    title: "Günlük gezi rotası",
    variant: "route",
  },
  {
    title: "İlgi alanına göre yer önerileri",
    variant: "interests",
  },
  {
    title: "Zaman ve mesafe odaklı sıralama",
    variant: "timeline",
  },
  {
    title: "Bütçeye uygun planlama",
    variant: "budget",
  },
  {
    title: "Rotadaki yerlerle ilgili gerçek kullanıcı fotoğrafları ve deneyimleri",
    variant: "gallery",
  },
];

const travelSteps = [
  {
    title: "Şehir ve süre seçilir",
  },
  {
    title: "Bütçe ve ilgi alanları belirlenir",
  },
  {
    title: "Nado Travel uygulanabilir rota planı oluşturur",
  },
  {
    title: "Kullanıcı rotasındaki yerleri gerçek gezgin içerikleriyle keşfeder",
  },
];

const audienceItems = [
  "Türkiye’de şehir gezisi planlayan kullanıcılar",
  "Kısa tatil ve hafta sonu rotası oluşturmak isteyenler",
  "İlgi alanlarına göre gezi planı arayanlar",
  "Gittiği yerlerde deneyim ve fotoğraf paylaşmak isteyen gezginler",
];

const travelStatus = [
  "MVP planlanıyor",
  "Pilot şehir modeli",
  "AI destekli rota motoru",
  "Yer bazlı fotoğraf ve deneyim katmanı",
  "Türkiye odaklı ilk sürüm",
];

const sampleRoute = [
  { place: "Galata Kulesi", time: "09:00", distance: "12 dk" },
  { place: "Karaköy", time: "11:00", distance: "8 dk" },
  { place: "Eminönü", time: "13:00" },
];

const travelTitle = "Nado Travel | Nado Teknoloji";
const travelDescription =
  "Nado Travel, AI destekli rota planlama ve gerçek gezgin deneyimleri üzerine geliştirilen Türkiye odaklı dijital seyahat ürünüdür.";

export const metadata: Metadata = {
  title: travelTitle,
  description: travelDescription,
  alternates: {
    canonical: "/nado-travel",
  },
  openGraph: {
    title: travelTitle,
    description: travelDescription,
    url: "https://nadoteknoloji.com/nado-travel",
    siteName: "Nado Teknoloji",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/gezgin-cesme.jpg",
        width: 1920,
        height: 1080,
        alt: "Çeşme sahilinde gezgin paylaşımı örneği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: travelTitle,
    description: travelDescription,
    images: ["/gezgin-cesme.jpg"],
  },
};

export default function NadoTravelPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-turquoise/25">
      <Navbar />
      <TravelHero />
      <Problem />
      <ProductOutput />
      <HowItWorks />
      <TravelerExperiences />
      <Audience />
      <ProductStatus />
      <EarlyAccess />
      <Footer />
    </main>
  );
}

function TravelHero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_10%,rgba(118,220,227,0.38),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(177,18,38,0.05),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f4efe7_70%,#e8ddd0_100%)]" />
      <div className="premium-grid absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-turquoise/30 bg-turquoise/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise-deep">
            Nado Teknoloji Ürünü
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-foreground sm:text-7xl">
            Nado Travel
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-9 text-turquoise-deep">
            AI destekli rota planlama ve gezgin deneyimleri platformu.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Nado Travel; şehir, süre, bütçe ve ilgi alanı bilgilerini analiz ederek
            kişiselleştirilmiş gezi rotaları oluşturmayı hedefler. Kullanıcıların rotalarındaki
            yerleri daha önce ziyaret eden gezginlerin fotoğraf ve deneyimleriyle keşfetmesine
            olanak tanıyan dijital seyahat ürünüdür.
          </p>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-foreground">
            Planını oluştur. Rotandaki yerleri keşfet. Gerçek gezgin deneyimlerinden ilham al.
          </p>
          <Link
            href="/iletisim"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-turquoise px-7 py-3 text-sm font-bold text-foreground shadow-[0_16px_42px_rgba(36,184,198,0.18)] transition duration-300 hover:bg-turquoise-glow"
          >
            Erken Erişim İçin İletişime Geç
          </Link>
        </div>

        <TravelPlanPreview />
      </div>
    </section>
  );
}

function TravelPlanPreview() {
  return (
    <aside
      aria-label="Nado Travel örnek seyahat planı"
      className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-surface/75 p-6 shadow-[0_28px_90px_rgba(23,32,38,0.14),0_0_54px_rgba(36,184,198,0.1)] sm:p-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(118,220,227,0.28),transparent_32%),radial-gradient(circle_at_82%_76%,rgba(177,18,38,0.055),transparent_26%),linear-gradient(145deg,rgba(255,253,248,0.94),rgba(232,221,208,0.62))]" />
      <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/45 to-transparent" />

      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-turquoise-deep">
            İstanbul
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            3 Günlük Gezi Planı
          </h2>
          <p className="mt-4 text-sm font-semibold text-muted">
            Tarih • Yemek • Kültür
          </p>
        </div>
        <div className="hidden rounded-full border border-crimson/20 bg-crimson/5 px-3 py-1 text-xs font-semibold text-crimson sm:block">
          AI rota
        </div>
      </div>

      <div className="my-7 h-px bg-gradient-to-r from-turquoise/35 via-border-soft to-crimson/18" />

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson">
          1. Gün
        </p>
        <div className="mt-6 space-y-3">
          {sampleRoute.map((stop) => (
            <div key={stop.place}>
              <div className="grid grid-cols-[1.25rem_1fr_auto] items-center gap-4">
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-turquoise/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-turquoise shadow-[0_0_14px_rgba(36,184,198,0.35)]" />
                </span>
                <span className="text-lg font-semibold text-foreground">{stop.place}</span>
                <span className="text-sm font-semibold text-muted">{stop.time}</span>
              </div>

              {stop.distance ? (
                <div className="ml-2.5 mt-2 flex items-center gap-4">
                  <span className="h-8 w-px bg-gradient-to-b from-turquoise/55 to-crimson/24" />
                  <span className="text-xs font-semibold text-muted">↓ {stop.distance}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="my-7 h-px bg-gradient-to-r from-turquoise/30 via-border-soft to-crimson/20" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-2xl font-semibold text-foreground">128</p>
          <p className="mt-1 text-sm font-medium text-muted">Gezgin Fotoğrafı</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-foreground">42</p>
          <p className="mt-1 text-sm font-medium text-muted">Keşfedilen Nokta</p>
        </div>
      </div>
    </aside>
  );
}

function Problem() {
  return (
    <Section
      eyebrow="Problem"
      title="Seyahat planlamak çoğu zaman dağınık bir araştırma sürecine dönüşüyor."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <p className="max-w-4xl text-lg leading-8 text-muted sm:text-xl">
          Bir şehir gezisi planlamak isteyen kullanıcılar; gezilecek yerleri, restoranları,
          ulaşım bilgilerini, yorumları, sosyal medya içeriklerini ve bütçe seçeneklerini farklı
          platformlarda aramak zorunda kalıyor. Bu süreç hem zaman kaybına hem de uygulanması zor
          planlara neden oluyor.
        </p>

        <div className="space-y-3 border-l border-crimson/20 pl-5">
          {problemPoints.map((point) => (
            <div key={point} className="flex items-center gap-3 text-base font-semibold text-foreground">
              <span className="h-2 w-2 rounded-full bg-crimson" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProductOutput() {
  return (
    <Section eyebrow="Ürün Çıktısı" title="Nado Travel ne üretir?">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {productOutputs.map((output) => (
            <article
              key={output.title}
              className={`travel-output-card travel-output-${output.variant}`}
            >
              <TravelOutputVisual variant={output.variant} />
              <p className="relative z-10 mt-5 text-sm font-semibold leading-6 text-foreground/90">
                {output.title}
              </p>
            </article>
          ))}
      </div>
    </Section>
  );
}

function TravelOutputVisual({ variant }: Readonly<{ variant: string }>) {
  if (variant === "route") {
    return (
      <div className="travel-output-visual travel-output-visual-route" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (variant === "interests") {
    return (
      <div className="travel-output-visual travel-output-visual-interests" aria-hidden="true">
        <span>Tarih</span>
        <span>Yemek</span>
        <span>Kültür</span>
      </div>
    );
  }

  if (variant === "timeline") {
    return (
      <div className="travel-output-visual travel-output-visual-timeline" aria-hidden="true">
        <span>09:00</span>
        <span>11:00</span>
        <span>13:00</span>
      </div>
    );
  }

  if (variant === "budget") {
    return (
      <div className="travel-output-visual travel-output-visual-budget" aria-hidden="true">
        <span>₺</span>
        <span />
      </div>
    );
  }

  return (
    <div className="travel-output-visual travel-output-visual-gallery" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function HowItWorks() {
  return (
    <Section eyebrow="Nasıl Çalışır?" title="Dört adımda planlama ve keşif akışı">
      <div className="travel-flow">
        {travelSteps.map((step, index) => (
          <article
            key={step.title}
            className={`travel-flow-step ${index === 2 ? "travel-flow-step-featured" : ""}`}
          >
            <span className="travel-flow-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-lg font-semibold leading-7 text-foreground">{step.title}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TravelerExperiences() {
  return (
    <Section eyebrow="Gezgin Deneyimleri" title="Rotaya bağlı gerçek gezgin içerikleri">
      <div className="relative overflow-hidden rounded-2xl border border-turquoise/20 bg-surface/70 p-6 shadow-[0_24px_70px_rgba(23,32,38,0.1)] sm:p-8 lg:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(118,220,227,0.22),transparent_30%),radial-gradient(circle_at_92%_78%,rgba(177,18,38,0.045),transparent_24%)]" />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="max-w-5xl text-lg leading-8 text-muted sm:text-xl">
              Kullanıcılar gezdikleri yerlerde fotoğraf ve deneyim paylaşabilir. Nado Travel, yeni
              rota oluşturan kullanıcılara öncelikle kendi rotasındaki yerlerde paylaşılan içerikleri
              gösterir. Böylece kullanıcılar yalnızca mekan bilgisi değil, o yeri daha önce
              deneyimleyen kişilerin gerçek içeriklerini de görebilir.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {["Yer odaklı içerik", "Rota bağlamı", "Gerçek gezgin deneyimi"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-foreground/10 bg-surface/60 px-5 py-4 text-sm font-semibold text-foreground/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[1.35rem] border border-foreground/10 bg-surface shadow-[0_24px_70px_rgba(23,32,38,0.14)]">
            <div className="absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-turquoise/55 to-crimson/25" />
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/gezgin-cesme.jpg"
                alt="Çeşme sahilinde gerçek gezgin paylaşımı örneği"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col gap-1 border-t border-foreground/10 bg-surface/85 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-semibold text-foreground">Çeşme</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
                Gerçek gezgin paylaşımı
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

function Audience() {
  return (
    <Section eyebrow="Kimler İçin?" title="Türkiye’de seyahat edecek kullanıcılar için">
      <div className="grid gap-4 sm:grid-cols-2">
        {audienceItems.map((item) => (
          <article key={item} className="border-b border-border-soft pb-5 text-lg font-medium leading-8 text-foreground">
            {item}
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProductStatus() {
  return (
    <Section eyebrow="Ürün Durumu" title="İlk sürüm odağı">
      <div className="surface-card rounded-2xl border border-crimson/15 p-6 shadow-[0_24px_70px_rgba(23,32,38,0.1)] sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {travelStatus.map((status) => (
            <div
              key={status}
              className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-surface/65 p-5 text-sm font-medium text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-turquoise shadow-[0_0_12px_rgba(36,184,198,0.32)]" />
              {status}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EarlyAccess() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-turquoise/20 bg-surface/75 p-6 shadow-[0_28px_90px_rgba(23,32,38,0.14),0_0_50px_rgba(36,184,198,0.08)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(118,220,227,0.3),transparent_30%),radial-gradient(circle_at_90%_22%,rgba(177,18,38,0.05),transparent_26%),linear-gradient(135deg,rgba(255,253,248,0.92),rgba(232,221,208,0.62))]" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                Nado Travel geliştirme sürecinde.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Erken erişim, iş birliği veya ürün geliştirme süreci hakkında iletişime
                geçebilirsiniz.
              </p>
            </div>

            <Link
              href="/iletisim"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-turquoise px-7 py-3 text-sm font-bold text-foreground shadow-[0_16px_42px_rgba(36,184,198,0.18)] transition duration-300 hover:bg-turquoise-glow"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
