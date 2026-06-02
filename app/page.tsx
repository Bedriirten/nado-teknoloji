import type { CSSProperties } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";

const workAreas = [
  {
    title: "Yazılım Geliştirme",
    description:
      "Kullanıcı ihtiyaçlarına yönelik ölçeklenebilir web, mobil ve backend sistemleri geliştiriyoruz.",
  },
  {
    title: "AI Destekli Çözümler",
    description:
      "Yapay zeka teknolojilerini ürün deneyimini güçlendiren akıllı sistemlere dönüştürüyoruz.",
  },
  {
    title: "Dijital Ürün Geliştirme",
    description:
      "Fikir aşamasından çalışan ürüne kadar kullanıcı odaklı dijital ürünler geliştiriyoruz.",
  },
  {
    title: "Veri ve Bulut Altyapıları",
    description:
      "Modern uygulamalar için güvenilir, ölçeklenebilir ve sürdürülebilir altyapılar oluşturuyoruz.",
  },
];

const workProcess = [
  {
    title: "Problemi anlamak",
    description:
      "Kullanıcı ihtiyacını, iş hedefini ve çözülmesi gereken temel problemi netleştiriyoruz.",
  },
  {
    title: "Doğru teknolojiyi belirlemek",
    description:
      "Projenin ihtiyacına göre yazılım mimarisi, veri yapısı ve AI destekli çözüm yaklaşımlarını planlıyoruz.",
  },
  {
    title: "Ürünü geliştirmek",
    description:
      "Web, mobil, backend ve bulut altyapılarını bir araya getirerek çalışan dijital ürünler geliştiriyoruz.",
  },
  {
    title: "Sürekli iyileştirmek",
    description:
      "Geri bildirim, performans ve kullanım verilerine göre ürünü geliştirmeye devam ediyoruz.",
  },
];

const processJavaCodeLines = [
  "@Service",
  "public class ProductService {",
  "  private final RoutePlanner routePlanner;",
  "  private final RecommendationEngine engine;",
  "  private final AIRecommendationService ai;",
  "",
  "  public ProductService(RoutePlanner routePlanner,",
  "                        RecommendationEngine engine,",
  "                        AIRecommendationService ai) {",
  "    this.routePlanner = routePlanner;",
  "    this.engine = engine;",
  "    this.ai = ai;",
  "  }",
  "",
  "  public TravelPlan createPlan(UserPreferences preferences) {",
  "    RouteDraft draft = routePlanner.prepare(preferences);",
  "    List<LocationScore> scores = engine.rank(draft.locations());",
  "",
  "    TravelPlan plan = new TravelPlan();",
  "    plan.setCity(preferences.city());",
  "    plan.setDuration(preferences.duration());",
  "    plan.setBudget(preferences.budget());",
  "    plan.setStops(ai.selectBestStops(scores, preferences));",
  "",
  "    return routePlanner.optimize(plan);",
  "  }",
  "",
  "  public boolean isReady(TravelPlan plan) {",
  "    return plan != null && plan.hasRoute() && plan.hasDailySchedule();",
  "  }",
  "}",
];

const processUiCodeLines = [
  '<section class="product">',
  '  <article class="card route-card">',
  '    <img src="/city.jpg" alt="Rota önizleme" />',
  '    <div class="card-content">',
  "      <h2>Nasıl çalışıyoruz</h2>",
  "      <p>Problemi analiz eder, akışı tasarlar ve ürünü geliştiririz.</p>",
  '      <ul class="route-list">',
  "        <li>Problemi anlamak</li>",
  "        <li>Doğru teknolojiyi belirlemek</li>",
  "        <li>Ürünü geliştirmek</li>",
  "      </ul>",
  "      <button>Projeyi başlat</button>",
  "    </div>",
  "  </article>",
  "</section>",
  "",
  ".product {",
  "  display: grid;",
  "  grid-template-columns: minmax(0, 1fr);",
  "  gap: 2rem;",
  "}",
  "",
  ".card {",
  "  display: flex;",
  "  gap: 1.25rem;",
  "  border-radius: 1.25rem;",
  "  transition: transform 240ms ease, border-color 240ms ease;",
  "}",
  "",
  ".card:hover {",
  "  transform: translateY(-2px);",
  "  border-color: var(--turquoise);",
  "}",
  "",
  ".route-list {",
  "  display: grid;",
  "  gap: .75rem;",
  "}",
];

export default function Home() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-background text-foreground selection:bg-turquoise/25">
      <Navbar />
      <Hero />
      <FeaturedProduct />
      <WorkAreas />
      <HowWeWork />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate max-w-full overflow-x-hidden overflow-y-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(118,220,227,0.34),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(185,174,161,0.28),transparent_28%),radial-gradient(circle_at_86%_60%,rgba(177,18,38,0.045),transparent_20%),linear-gradient(180deg,#fffdf8_0%,#f4efe7_56%,#e8ddd0_100%)]" />
      <div className="premium-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute left-1/2 top-10 -z-10 h-px w-[86vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-turquoise/35 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:pt-16">
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-turquoise-deep">
              Nado Teknoloji
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-normal text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Yazılım, yapay zeka ve dijital ürünler geliştiriyoruz.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Nado Teknoloji; kullanıcı ihtiyaçlarına yönelik dijital ürünler geliştiren, yapay
              zeka destekli çözümler üreten ve teknoloji odaklı sistemler geliştirmeyi hedefleyen
              teknoloji girişimidir.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#one-cikan-urun"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-turquoise px-7 py-3 text-sm font-bold text-foreground shadow-[0_16px_42px_rgba(36,184,198,0.18)] transition duration-300 hover:bg-turquoise-glow hover:shadow-[0_18px_46px_rgba(36,184,198,0.24)] sm:w-auto"
              >
                Projelerimizi İncele
              </a>
              <a
                href="/iletisim"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-7 py-3 text-sm font-bold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 hover:border-crimson-hover/50 hover:bg-crimson/10 sm:w-auto"
              >
                İletişime Geç
              </a>
            </div>
          </div>

          <HeroMineralScene />
        </div>

        <HeroSignals />
      </div>
    </section>
  );
}

function HeroMineralScene() {
  return (
    <div
      className="mineral-scene relative mx-auto h-[16rem] w-full max-w-[20rem] sm:h-[25rem] sm:max-w-xl lg:h-[34rem]"
      aria-hidden="true"
    >
      <div className="mineral-mark">
        <Image
          src="/logo.png"
          alt=""
          width={492}
          height={353}
          priority
          sizes="(min-width: 1024px) 492px, 84vw"
          className="h-auto w-full object-contain"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="mineral-route mineral-route-a">
        <span className="mineral-runner mineral-runner-a">
          <Image
            src="/tsukuyomi.png"
            alt=""
            width={18}
            height={18}
            className="mineral-node"
          />
        </span>
      </div>
      <div className="mineral-route mineral-route-b">
        <span className="mineral-runner mineral-runner-b">
          <Image
            src="/tsukuyomi.png"
            alt=""
            width={18}
            height={18}
            className="mineral-node"
          />
        </span>
      </div>
      <div className="mineral-route mineral-route-c">
        <span className="mineral-runner mineral-runner-c">
          <Image
            src="/tsukuyomi.png"
            alt=""
            width={18}
            height={18}
            className="mineral-node"
          />
        </span>
      </div>
      <div className="mineral-route mineral-route-d">
        <span className="mineral-runner mineral-runner-d">
          <Image
            src="/tsukuyomi.png"
            alt=""
            width={18}
            height={18}
            className="mineral-node"
          />
        </span>
      </div>
    </div>
  );
}

function HeroSignals() {
  const signals = [
    { code: "01", label: "Aktif ürün geliştirme" },
    { code: "AI", label: "Yapay zeka odaklı yaklaşım" },
    { code: "IN", label: "İnovasyon odaklı yaklaşım" },
  ];

  return (
    <div className="mt-16 grid gap-0 border-y border-foreground/10 sm:grid-cols-3">
      {signals.map((signal) => (
        <div
          key={signal.code}
          className="flex items-baseline gap-5 border-b border-foreground/10 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
        >
          <span className="text-3xl font-semibold text-turquoise-deep">{signal.code}</span>
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
            {signal.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function FeaturedProduct() {
  return (
    <Section
      id="one-cikan-urun"
      eyebrow="Öne Çıkan Ürün"
      title="Nado Teknoloji çatısı altında gelişen ilk ürün odağı"
    >
      <ProductCard />
    </Section>
  );
}

function WorkAreas() {
  return (
    <Section eyebrow="Çalışma Alanları" title="Yeni nesil ürünler için teknik odak">
      <div className="grid gap-x-8 gap-y-0 border-t border-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
        {workAreas.map((area, index) => (
          <article
            key={area.title}
            className="border-b border-foreground/10 py-7 transition duration-300 lg:min-h-56 lg:py-8"
          >
            <span className="text-xs font-bold text-crimson-hover">0{index + 1}</span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{area.title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">{area.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function HowWeWork() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="process-panel grid gap-10 border-y border-foreground/10 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-14">
          <ProcessCodeBackdrop />
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-turquoise-deep">
              Yaklaşım
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Nasıl Çalışıyoruz
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Her projeye önce problemi anlayarak başlıyor, doğru teknolojiyi belirleyip sade,
              ölçeklenebilir ve geliştirilebilir ürünler ortaya koymayı hedefliyoruz.
            </p>
          </div>

          <div className="process-flow">
            {workProcess.map((step, index) => (
              <article key={step.title} className="process-step">
                <span className="process-step-number">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCodeBackdrop() {
  return (
    <div className="process-code-backdrop" aria-hidden="true">
      <CodeTypingField
        className="process-code-field-java"
        initialLines={7}
        lines={processJavaCodeLines}
      />
      <CodeTypingField
        className="process-code-field-ui"
        initialLines={8}
        lines={processUiCodeLines}
      />
    </div>
  );
}

function CodeTypingField({
  className,
  initialLines,
  lines,
}: Readonly<{
  className: string;
  initialLines: number;
  lines: string[];
}>) {
  return (
    <div className={`process-code-field ${className}`}>
      {lines.map((line, index) => {
        const isInitial = index < initialLines;
        const style = {
          "--line-index": Math.max(index - initialLines, 0),
          "--line-chars": Math.max(line.length, 1),
        } as CSSProperties;

        return (
          <span
            key={`${className}-${index}-${line}`}
            className={`process-code-line ${isInitial ? "process-code-line-initial" : ""}`}
            style={style}
          >
            {line || " "}
          </span>
        );
      })}
    </div>
  );
}
