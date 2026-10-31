import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <div className="flex gap-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href || undefined}
          aria-label={label}
          title={href ? label : `${label} link coming soon`}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className={`grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary ${href ? "" : "pointer-events-none opacity-50"}`}
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="blueprint-grid relative flex min-h-screen items-center pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <MapPin className="size-3" /> Based in Egypt | Open to BIM Software Development Opportunities
          </p>
          <p className="font-mono text-sm text-primary">{profile.title}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-2xl font-medium text-foreground/90 md:text-3xl">
            Bridging Mechanical Engineering and <span className="text-primary">Software Development.</span>
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            I build engineering solutions and Revit automation tools using C# and Revit API to improve BIM workflows,
            automate repetitive tasks, and enhance engineering productivity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">Explore My Projects <ArrowRight /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SocialLinks />
            <a
              href={profile.cv || undefined}
              className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary ${profile.cv ? "" : "pointer-events-none opacity-50"}`}
              title={profile.cv ? "Download CV" : "CV coming soon"}
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up">
          <div className="absolute -inset-3 rounded-2xl border border-primary/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="size-full object-cover" />
            ) : (
              <div className="blueprint-grid grid size-full place-items-center">
                <span className="font-mono text-7xl font-bold text-primary/70">{profile.initials}</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-lg border border-border bg-card px-4 py-3 font-mono text-xs text-muted-foreground shadow-lg">
            <span className="text-primary">using</span> Autodesk.Revit.DB;
          </div>
        </div>
      </div>
    </section>
  );
}
