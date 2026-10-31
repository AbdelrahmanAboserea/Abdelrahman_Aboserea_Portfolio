import { useState } from "react";
import { Briefcase, Code2, Github, GraduationCap, Layers, Mail, MapPin, Send, Wrench, ChevronDown } from "lucide-react";
import { profile, projects, skills, timeline, type Project } from "@/data/portfolio";
import { Section, SectionHeader, Tag } from "./ui";
import { SocialLinks } from "./Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function About() {
  const cards = [
    { Icon: Wrench, title: "Mechanical Engineering", text: "Mechanical Power background with hands-on internship experience." },
    { Icon: Layers, title: "BIM & MEP Systems", text: "HVAC, Plumbing and Fire Fighting design and modeling." },
    { Icon: Code2, title: "Revit API Development", text: "C# / .NET add-ins that automate BIM workflows." },
  ];
  const info = [
    ["Location", profile.location],
    ["University", "Helwan University"],
    ["Degree", "Bachelor of Mechanical Engineering"],
    ["Graduation", "July 2026"],
    ["Grade", "Excellent – 85.93%"],
  ];
  return (
    <Section id="about">
      <SectionHeader index="01" label="About Me" title="Engineering knowledge meets software development." />
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 text-muted-foreground">
          <p>I am a Mechanical Power Engineering graduate from Helwan University with an interest in BIM Development and digital engineering workflows.</p>
          <p>My work focuses on developing software solutions for the Architecture, Engineering, and Construction (AEC) industry.</p>
          <p>I use C#, .NET, and Autodesk Revit API to build tools that automate engineering tasks and improve modeling workflows.</p>
          <p>My mechanical engineering background also gives me practical knowledge of HVAC, Plumbing, and Fire Fighting systems, supported by engineering internships and technical training.</p>
          <p>I am particularly interested in BIM automation, Revit add-in development, and the integration of software engineering with the AEC industry.</p>
        </div>
        <dl className="h-fit rounded-xl border border-border bg-card p-6 font-mono text-sm">
          {info.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-border py-3 last:border-0">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="text-right text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map(({ Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <Icon className="size-6 text-primary" />
            <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50">
      <div className="relative aspect-[5/3] overflow-hidden">
        <img src={p.image} alt={`${p.title} preview (placeholder)`} loading="lazy" width={1280} height={768}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded bg-background/80 px-2 py-1 font-mono text-xs text-primary">{p.id}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-primary">{p.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
        <p className={`mt-3 text-sm text-muted-foreground ${open ? "" : "line-clamp-3"}`}>{p.description.join(" ")}</p>
        {open && p.status && <p className="mt-3 text-xs text-muted-foreground">Status: <span className="text-foreground">{p.status}</span></p>}
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-auto flex gap-2 pt-6">
          <Button variant="outline" size="sm" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "Hide Details" : "View Details"} <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </Button>
          {p.github ? (
            <Button asChild variant="ghost" size="sm"><a href={p.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
          ) : (
            <Button variant="ghost" size="sm" disabled title="Repository link coming soon"><Github /> GitHub</Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-card/30">
      <SectionHeader index="02" label="Selected Projects" title="Engineering problems. Software solutions." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader index="03" label="Technical Skills" title="My Engineering & Development Toolbox" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-semibold text-foreground">{s.group}</h3>
            <div className="flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" className="bg-card/30">
      <SectionHeader index="04" label="My Journey" title="Experience & Education" />
      <ol className="relative ml-3 border-l border-border">
        {timeline.map((t) => {
          const Icon = t.kind === "edu" ? GraduationCap : Briefcase;
          return (
            <li key={t.org + t.period} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-4 grid size-8 place-items-center rounded-full border border-primary/50 bg-background">
                <Icon className="size-4 text-primary" />
              </span>
              <p className="font-mono text-xs text-primary">{t.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{t.role}</h3>
              <p className="text-sm text-muted-foreground">{t.org}</p>
              <ul className="mt-3 max-w-3xl list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {t.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <Section id="contact">
      <SectionHeader index="05" label="Let's Build Something Together." title="Have an engineering problem that needs a software solution?" />
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-muted-foreground">
            I am interested in connecting with professionals and teams working in BIM Development, Revit API, AEC Software Development, and digital engineering.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p className="flex items-center gap-3 text-foreground"><MapPin className="size-4 text-primary" /> {profile.location}</p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-foreground hover:text-primary"><Mail className="size-4 text-primary" /> {profile.email}</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild><a href={`mailto:${profile.email}`}><Mail /> Email Me</a></Button>
            <SocialLinks />
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required placeholder="Name" aria-label="Name" value={form.name} onChange={set("name")} />
            <Input required type="email" placeholder="Email" aria-label="Email" value={form.email} onChange={set("email")} />
          </div>
          <Input required placeholder="Subject" aria-label="Subject" value={form.subject} onChange={set("subject")} />
          <Textarea required rows={5} placeholder="Message" aria-label="Message" value={form.message} onChange={set("message")} />
          <Button type="submit" className="w-full"><Send /> Send Message</Button>
          <p className="text-xs text-muted-foreground">Opens your email app with the message pre-filled.</p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
          <p className="text-sm text-muted-foreground">Building engineering solutions through software.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <SocialLinks />
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
