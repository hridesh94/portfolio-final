import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { HeroPlate } from "@/components/HeroPlate";
import { Reveal } from "@/components/Reveal";
import { works } from "@/lib/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hridesh — Media, technology, and stories" },
      {
        name: "description",
        content:
          "Portfolio of Hridesh — interactive storytelling, documentary practice, audio production, and design.",
      },
      { property: "og:title", content: "Hridesh — Media, technology, and stories" },
      {
        property: "og:description",
        content:
          "A small digital exhibition of interactive, documentary, audio, and design work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain min-h-screen">
      <SiteNav />

      {/* Landing */}
      <section className="relative mx-auto flex min-h-screen max-w-[1480px] flex-col px-8 pb-16 pt-28 md:px-12 md:pt-36 lg:flex-row lg:gap-16 lg:pt-40">
        <div className="flex flex-1 flex-col justify-between">
          <header className="rise-in">
            <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
              {"\n"}
            </p>
            <h1 className="mt-10 font-serif text-[clamp(3.2rem,9vw,8.5rem)] font-light leading-[0.95] tracking-[-0.02em]">
              Hridesh
              <br />
              <span className="italic text-foreground/85">Sapkota</span>
            </h1>
            <p className="mt-10 max-w-xl font-serif text-2xl font-light leading-snug text-foreground/80 md:text-3xl">
              Media, technology, and stories that shape how we understand the world.
            </p>
          </header>

          <div className="mt-16 grid gap-10 lg:mt-0 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <p className="max-w-md text-[15px] leading-[1.8] text-foreground/75">
              I work across interactive storytelling, documentary practice, audio production,
              and design. My work explores the relationship between media, culture, and
              emerging technologies.
            </p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md self-end lg:mt-0 lg:w-[34%]">
          <HeroPlate />
        </div>
      </section>

      <Divider label="I · Works" />

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1480px] px-8 py-24 md:px-12 md:py-40">
        <Reveal as="header" className="mb-24 max-w-3xl md:mb-32">
          <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-[-0.01em] md:text-6xl">
            Selected Projects
          </h2>
        </Reveal>

        <ol className="flex flex-col">
          {works.map((w, idx) => (
            <Reveal as="li" key={w.slug} className="border-t border-rule">
              <Link
                to="/work/$slug"
                params={{ slug: w.slug }}
                className="group block py-12 md:py-20"
              >
                <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/50">
                      {w.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-3xl font-light leading-tight tracking-[-0.01em] md:text-[2.6rem]">
                      {w.title}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-[15px] leading-[1.75] text-foreground/75">
                      {w.description}
                    </p>
                  </div>
                  <figure className="plate md:col-span-4">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={w.image}
                        alt={w.title}
                        width={1600}
                        height={1100}
                        loading={idx < 2 ? "eager" : "lazy"}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </figure>
                </div>
              </Link>
            </Reveal>
          ))}
          <li className="border-t border-rule" />
        </ol>
      </section>

      <Divider label="II · Ethos" />

      {/* Ethos */}
      <section id="ethos" className="mx-auto max-w-[1480px] px-8 py-24 md:px-12 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="header" className="md:col-span-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
              II
            </p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-none tracking-[-0.01em] md:text-7xl">
              My Ethos
            </h2>
          </Reveal>
          <Reveal as="div" delay={150} className="md:col-span-7 md:col-start-6">
            <p className="font-serif text-2xl font-light leading-[1.45] text-foreground/85 md:text-[1.9rem]">
              I am interested in how media shapes human experience. Through code, film, sound, and design, I explore how technology influences culture and everyday life.
            </p>
            <p className="mt-10 max-w-2xl text-[16px] leading-[1.85] text-foreground/70">
              My practice is guided by an interest in storytelling, digital culture, and the ways technology changes how people communicate and understand the world around them.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider label="III · Contact" />

      {/* Contact / Footer */}
      <footer id="contact" className="mx-auto max-w-[1480px] px-8 pb-16 pt-24 md:px-12 md:pb-20 md:pt-40">
        <Reveal>
          <h2 className="font-serif text-5xl font-light leading-[1] tracking-[-0.01em] md:text-[7rem]">
            Write,
            <br />
            <span className="italic text-foreground/85">if you'd like to.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-12 border-t border-rule pt-10 md:grid-cols-4">
          <FooterItem label="EMAIL" value="hridesh.sap@gmail.com" href="mailto:hridesh.sap@gmail.com" />

          <FooterItem label="LinkedIn" value="linkedin.com/in/hrideshsapkota/" href="https://linkedin.com/in/hrideshsapkota/" />
          <FooterItem label="Source" value="github.com/hrides94" href="https://github.com/hrides94" />
        </div>

        <div className="mt-20 flex flex-col gap-3 text-[11px] uppercase tracking-[0.12em] text-foreground/45 md:flex-row md:items-end md:justify-between">
          <p className="font-sans">© HRIDESH</p>
          <p className="font-sans">FROM THE HIMALAYAS</p>
        </div>
      </footer>
    </main>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-[1480px] px-8 md:px-12">
      <div className="flex items-center gap-6 border-t border-rule py-6">
        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/45">
          {label}
        </span>
      </div>
    </div>
  );
}

function CVBlock({ heading, rows }: { heading: string; rows: [string, string][] }) {
  return (
    <div className="mb-14 last:mb-0">
      <h3 className="mb-6 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
        {heading}
      </h3>
      <dl className="flex flex-col">
        {rows.map(([when, what]) => (
          <div
            key={what}
            className="grid grid-cols-[140px_1fr] gap-6 border-t border-rule py-5 md:grid-cols-[180px_1fr]"
          >
            <dt className="font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/55">
              {when}
            </dt>
            <dd className="font-serif text-lg font-light leading-snug text-foreground/85">
              {what}
            </dd>
          </div>
        ))}
        <div className="border-t border-rule" />
      </dl>
    </div>
  );
}

function FooterItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-foreground/45">
        {label}
      </p>
      <a
        href={href}
        className="story-link mt-3 inline-block font-serif text-xl font-light text-foreground/90 transition-opacity hover:opacity-70"
      >
        {value}
      </a>
    </div>
  );
}
