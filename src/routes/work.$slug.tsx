import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { works, worksBySlug, type WorkSegment } from "@/lib/works";

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
        <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
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
        <button onClick={reset} className="story-link mt-6 font-sans text-xs uppercase tracking-[0.12em]">
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

  useEffect(() => {
    // Load Iframely script if there are any iframely embeds
    if (document.querySelector(".iframely-embed")) {
      const script = document.createElement("script");
      script.src = "https://iframely.net/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [work]);

  return (
    <main className="grain min-h-screen">
      <SiteNav />

      <article className="mx-auto max-w-[1480px] px-8 pb-24 pt-28 md:px-12 md:pt-36">
        {/* Heading */}
        <header className="rise-in mx-auto max-w-5xl pb-20 pt-12 md:pb-28 md:pt-20">
          <div className="flex items-baseline gap-6">
            <Link
              to="/"
              className="font-sans text-[11px] uppercase tracking-[0.12em] text-foreground/55 hover:opacity-60"
            >
              ← Index
            </Link>
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/45">
              Work {work.number}
            </span>
          </div>
          <h1 className="mt-12 font-serif text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1] tracking-[-0.02em]">
            {work.title}
          </h1>
        </header>

        {/* Hero plate */}
        <Reveal as="figure" className="plate mx-auto max-w-[1180px]">
          {work.url ? (
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer hover:opacity-90 transition-opacity">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={work.image}
                  alt={work.title}
                  width={1920}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          ) : (
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={work.image}
                alt={work.title}
                width={1920}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="mt-4 flex items-center justify-between">
            <figcaption className="font-sans text-[11px] tracking-[0.12em] text-foreground/45">
              Plate I — {work.title}
            </figcaption>
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#c15a3e] text-white rounded-full font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-[#a84e34] transition-all group shadow-sm"
              >
                <span className="font-medium">Live Demo</span>
                <span className="italic opacity-80 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            )}
          </div>
        </Reveal>

        {/* Overview */}
        <Reveal as="section" className="mx-auto mt-32 grid max-w-5xl gap-12 md:grid-cols-12 md:mt-44">
          <h2 className="md:col-span-3 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/55">
            Overview
          </h2>
          <p className="md:col-span-9 font-serif text-2xl font-light leading-[1.5] text-foreground/85 md:text-[1.7rem]">
            {work.overview}
          </p>
        </Reveal>

        {/* YouTube Player */}
        {work.url && work.url.includes("youtube.com") && (
          <Reveal as="section" className="mx-auto mt-32 max-w-[1180px] md:mt-44">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${new URL(work.url).searchParams.get("v")}`}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </Reveal>
        )}

        {work.segments && work.segments.length > 0 ? (
          <div className="mx-auto mt-32 max-w-[1180px] md:mt-44">
            {work.segments.map((seg: WorkSegment, i: number) => (
              <Reveal
                as="section"
                key={seg.title}
                className={`grid gap-10 md:grid-cols-12 md:gap-14 ${i > 0 ? "mt-32 md:mt-44" : ""}`}
              >
                <figure
                  className={`plate md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  {seg.image ? (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={seg.image}
                        alt={seg.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : seg.embedHtml ? (
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: seg.embedHtml }}
                    />
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-foreground/40">
                          Image — coming soon
                        </span>
                      </div>
                    </div>
                  )}
                  {seg.imageCaption && (
                    <figcaption className="mt-4 font-sans text-[11px] tracking-[0.12em] text-foreground/45">
                      {seg.imageCaption}
                    </figcaption>
                  )}
                </figure>
                <div className="md:col-span-6 md:self-center">
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/55">
                    Chapter · {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] md:text-4xl">
                    {seg.title}
                  </h3>
                  <div className="mt-6 space-y-5 text-[16px] leading-[1.9] text-foreground/80">
                    {seg.body.split("\n\n").map((para: string, j: number) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  {seg.embedHtml && seg.image && (
                    <div
                      className="mt-8"
                      dangerouslySetInnerHTML={{ __html: seg.embedHtml }}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            {/* Secondary plates */}
            <div className="mx-auto mt-32 grid max-w-[1180px] gap-10 md:mt-44 md:grid-cols-12">
              <Reveal as="figure" className="plate md:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={work.secondaryImages?.[0] || work.image}
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
                    src={work.secondaryImages?.[1] || work.image}
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
              <h2 className="md:col-span-3 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/55">
                Process
              </h2>
              <p className="md:col-span-9 text-[17px] leading-[1.9] text-foreground/80">
                {work.process}
              </p>
            </Reveal>
          </>
        )}

        {/* Reflection */}
        <Reveal as="section" className="mx-auto mt-24 grid max-w-5xl gap-12 md:mt-32 md:grid-cols-12">
          <h2 className="md:col-span-3 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/55">
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
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground/50">
              Next · {next.number}
            </span>
            <span className="font-serif text-4xl font-light tracking-[-0.01em] transition-opacity group-hover:opacity-60 md:text-6xl">
              {next.title} <span className="italic text-foreground/55">→</span>
            </span>
            <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-foreground/50">
              {next.medium}
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
