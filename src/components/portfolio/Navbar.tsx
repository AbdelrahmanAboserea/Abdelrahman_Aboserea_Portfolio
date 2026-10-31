import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm font-semibold text-foreground">
          <span className="text-primary">&lt;</span>{profile.initials}<span className="text-primary">/&gt;</span>
        </a>
        <nav className="hidden gap-1 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-primary ${
                active === n.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2 text-muted-foreground hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
