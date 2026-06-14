import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { works, worksBySlug } from "@/lib/works";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const work = worksBySlug[params.slug];
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    const w = loaderData?.work;
    if (!w) return { meta: [{ title: "Work — Hridesh" }] };
    return {
      meta: [
        { title: `${w.title} — Hridesh` },
        { name: "description", content: w.description },
        { property: "og:title", content: `${w.title} — Hridesh` },
        { property: "og:description", content: w.description },
        { property: "og:image", content: w.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-8 text-center">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/50">
          Not in this exhibition
        </p>
        <h1 className="mt-6 font-serif text-5xl font-light">Work not found</h1>
        <Link to="/" className="story-link mt-10 inline-block font-serif text-lg">
          Return to the index
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center px-8 text-center">
      <div>
        <h1 className="font-serif text-3xl">Something interrupted the reading.</h1>
        <button onClick={reset} className="story-link mt-6 font-mono text-xs uppercase tracking-[0.28em]">
          Try again
        </button>
      </div>
    </div>
  ),
  component: WorkPage,
});

function WorkPage() {
  const { work } = Route.useLoaderData();
  const idx = works.findIndex((w) => w.slug === work.slug);
  const next = works[(idx + 1) % works.length];

  return (
    <main className="grain min-h-screen">
      <SiteNav />

      <article className="mx-auto max-w-[1480px] px-8 pb-24 pt-28 md:px-12 md:pt-36">
        {/* Heading */}
        <header className="rise-in mx-auto max-w-5xl pb-20 pt-12 md:pb-28 md:pt-20">
          <div className="flex items-baseline gap-6">
            <Link
              to="/"
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/55 hover:opacity-60"
            >
              ← Index
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/45">
              Work {work.number}
            </span>
          </div>
          <h1 className="mt-12 font-serif text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1] tracking-[-0.02em]">
            {work.title}
          </h1>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/55">
            {work.medium} · {work.year}
          </p>
        </header>

        {/* Hero plate */}
        <Reveal as="figure" className="plate mx-auto max-w-[1180px]">
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <img
              src={work.image}
              alt={work.title}
              width={1920}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
            Plate I — {work.title}
          </figcaption>
        </Reveal>

        {/* Overview */}
        <Reveal as="section" className="mx-auto mt-32 grid max-w-5xl gap-12 md:grid-cols-12 md:mt-44">
          <h2 className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/55">
            Overview
          </h2>
          <p className="md:col-span-9 font-serif text-2xl font-light leading-[1.5] text-foreground/85 md:text-[1.7rem]">
            {work.overview}
          </p>
        </Reveal>

        {/* Secondary plates */}
        <div className="mx-auto mt-32 grid max-w-[1180px] gap-10 md:mt-44 md:grid-cols-12">
          <Reveal as="figure" className="plate md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={work.image}
                alt=""
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal as="figure" delay={150} className="plate md:col-span-5 md:mt-24">
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={work.image}
                alt=""
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Process */}
        <Reveal as="section" className="mx-auto mt-32 grid max-w-5xl gap-12 md:mt-44 md:grid-cols-12">
          <h2 className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/55">
            Process
          </h2>
          <p className="md:col-span-9 text-[17px] leading-[1.9] text-foreground/80">
            {work.process}
          </p>
        </Reveal>

        {/* Reflection */}
        <Reveal as="section" className="mx-auto mt-24 grid max-w-5xl gap-12 md:mt-32 md:grid-cols-12">
          <h2 className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/55">
            Reflection
          </h2>
          <p className="md:col-span-9 font-serif text-2xl font-light italic leading-[1.55] text-foreground/85 md:text-[1.8rem]">
            "{work.reflection}"
          </p>
        </Reveal>

        {/* Next */}
        <nav className="mx-auto mt-40 max-w-5xl border-t border-rule pt-10 md:mt-56">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-col gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/50">
              Next · {next.number}
            </span>
            <span className="font-serif text-4xl font-light tracking-[-0.01em] transition-opacity group-hover:opacity-60 md:text-6xl">
              {next.title} <span className="italic text-foreground/55">→</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/50">
              {next.medium}
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
