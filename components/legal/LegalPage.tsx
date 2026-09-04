import type { ReactNode } from "react";

type Section = { title: string; content: ReactNode };

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: Section[] }) {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <article className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-charcoal/70">Last updated: {updated}</p>
        <div className="mt-10 space-y-9 text-base leading-relaxed text-charcoal">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-navy">{section.title}</h2>
              <div className="mt-3 space-y-3">{section.content}</div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
