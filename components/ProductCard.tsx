import Link from "next/link";

const travelFeatures = ["Akıllı rota", "Kişiselleştirme", "Türkiye odaklı başlangıç"];

export function ProductCard() {
  return (
    <article className="travel-product-card relative overflow-hidden rounded-2xl bg-surface/88 p-6 shadow-[0_22px_68px_rgba(23,32,38,0.09)] sm:p-8 lg:p-10">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/45 to-transparent" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-turquoise/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise-deep">
            İlk Ürünümüz
          </span>

          <h3 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Nado Travel
          </h3>
          <p className="mt-4 text-lg font-medium leading-8 text-turquoise-deep">
            Yapay zeka destekli seyahat planlama ve rota optimizasyon platformu.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Nado Travel, kullanıcıların şehir, süre, bütçe ve ilgi alanı bilgilerini analiz
            ederek kişiselleştirilmiş seyahat planları oluşturmayı hedefleyen Nado Teknoloji
            ürünüdür.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {travelFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-background/75 px-4 py-2 text-sm font-semibold text-foreground/90 shadow-[inset_0_0_0_1px_rgba(23,32,38,0.08)]"
              >
                {feature}
              </span>
            ))}
          </div>

          <Link
            href="/nado-travel"
            className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-turquoise px-7 py-3 text-sm font-bold text-foreground shadow-[0_16px_40px_rgba(36,184,198,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-turquoise-glow hover:shadow-[0_18px_48px_rgba(36,184,198,0.22)]"
          >
            Nado Travel&apos;ı İncele
          </Link>
        </div>

        <TravelRouteScene />
      </div>
    </article>
  );
}

function TravelRouteScene() {
  return (
    <div className="travel-route-scene" aria-hidden="true">
      <div className="travel-route-map">
        <span className="travel-route-path travel-route-path-a" />
        <span className="travel-route-path travel-route-path-b" />
        <span className="travel-route-flow" />
        <span className="travel-route-node travel-route-node-start" />
        <span className="travel-route-node travel-route-node-mid" />
        <span className="travel-route-node travel-route-node-city" />
        <span className="travel-route-node travel-route-node-target" />
      </div>
    </div>
  );
}
