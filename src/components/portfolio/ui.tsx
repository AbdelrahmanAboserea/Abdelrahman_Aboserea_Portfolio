import type { ReactNode } from "react";

export function SectionHeader({ label, title, index }: { label: string; title: string; index: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 font-mono text-sm text-primary">
        {index} <span className="text-muted-foreground">//</span> {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
    </div>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`border-t border-border py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}
