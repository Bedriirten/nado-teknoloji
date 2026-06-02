export function Section({
  id,
  eyebrow,
  title,
  children,
}: Readonly<{
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-turquoise-deep">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
