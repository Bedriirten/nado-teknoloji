"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-surface/78 p-6 shadow-[0_24px_70px_rgba(23,32,38,0.1)] sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-turquoise/55 to-crimson/20" />
      <div className="space-y-5">
        <ContactField label="Ad Soyad" name="name" placeholder="Adınızı ve soyadınızı girin." />
        <ContactField
          label="E-posta"
          name="email"
          placeholder="E-posta adresinizi girin."
          type="email"
        />
        <ContactField
          label="Konu Başlığı"
          name="subject"
          placeholder="İletmek istediğiniz konunun başlığını girin."
        />

        <label className="block">
          <span className="text-sm font-semibold text-foreground">Mesajınız</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Mesajınızı yazın."
            className="mt-3 w-full resize-y rounded-xl border border-foreground/10 bg-background/55 px-4 py-3 text-base text-foreground outline-none transition duration-300 placeholder:text-muted/55 focus:border-turquoise/55 focus:bg-surface focus:shadow-[0_0_0_4px_rgba(36,184,198,0.08)]"
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-turquoise px-7 py-3 text-sm font-bold text-foreground shadow-[0_16px_42px_rgba(36,184,198,0.18)] transition duration-300 hover:bg-turquoise-glow"
        >
          Gönder
        </button>
        {sent ? (
          <p className="text-sm font-medium text-turquoise-deep">
            Mesajınız alındı. Teşekkür ederiz!
          </p>
        ) : null}
      </div>
    </form>
  );
}

function ContactField({
  label,
  name,
  placeholder,
  type = "text",
}: Readonly<{
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}>) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-3 h-12 w-full rounded-xl border border-foreground/10 bg-background/55 px-4 text-base text-foreground outline-none transition duration-300 placeholder:text-muted/55 focus:border-turquoise/55 focus:bg-surface focus:shadow-[0_0_0_4px_rgba(36,184,198,0.08)]"
      />
    </label>
  );
}
