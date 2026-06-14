import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";

export type Work = {
  slug: string;
  number: string;
  title: string;
  medium: string;
  year: string;
  description: string;
  image: string;
  overview: string;
  process: string;
  reflection: string;
};

export const works: Work[] = [
  {
    slug: "gaine-the-media-man",
    number: "01",
    title: "Gaine, the Media Man",
    medium: "INTERACTIVE STORYTELLING WEBSITE",
    year: "2026",
    description:
      "An interactive storytelling project exploring Nepal's Gandharva community and their historical role as carriers of stories, music, and news.",
    image: work01,
    overview:
      "Gaine, the Media Man is an interactive web project exploring the history and cultural role of Nepal's Gandharva community. Traditionally known as storytellers, musicians, and messengers, the Gandharvas carried news and memory through songs performed with the Sarangi.\n\nBuilt using vanilla JavaScript, the project combines oral history, visual storytelling, and interaction design. An interactive Sarangi element allows visitors to engage with the instrument's sound, creating a more direct connection to the community's musical tradition.\n\nThrough this work, I explore how digital media can preserve cultural heritage while creating new ways of experiencing it online.",
    process:
      "The website was developed using HTML, CSS, and vanilla JavaScript. Rather than reproducing a conventional article, the project was designed as an interactive experience where sound, movement, and narrative unfold together. The interactive Sarangi feature invites visitors to engage with the instrument not only as an object, but as a medium of storytelling.",
    reflection:
      "I began the project asking what a medium is. I left it understanding that the Gandharva is not a folkloric relic but a precise technology, a mobile, embodied network whose protocols pre-date the ones we now take for granted.",
  },
  {
    slug: "documentary-practice",
    number: "02",
    title: "Documentary Production",
    medium: "OYU GREEN",
    year: "2024",
    description:
      "Documentary works on clean cooking initiatives and environmental restoration in Nepal.",
    image: work02,
    overview:
      "An ongoing body of short documentary work made alongside communities adopting electric and improved cookstoves across the mid-hills, and with restoration ecologists rewilding degraded watersheds.",
    process:
      "Each piece is shot small — one camera, available light, long conversations before any frame is captured. Editing favours pause over coverage. The cuts are slow because the subject is slow.",
    reflection:
      "Documentary is, for me, a form of attention. The camera is a reason to stay longer than is polite, and the edit is a way of making that stay legible to someone who was never there.",
  },
  {
    slug: "podcast-production",
    number: "03",
    title: "Podcast Production",
    medium: "Audio and Editorial Practice",
    year: "2022 — present",
    description:
      "Editing and producing conversations across technology, governance, and public discourse.",
    image: work03,
    overview:
      "Long-form audio work — editing, scoring, and producing interview programmes that sit at the intersection of technology policy, civic life, and the slower currents of public discourse.",
    process:
      "Most episodes are assembled from two- to three-hour conversations cut down to under an hour. The craft is in the silences kept and the asides removed. Sound design is restrained: a single room tone, a thin signature, no music underneath speech.",
    reflection:
      "Audio teaches a different relationship to time than image. A listener will give you twenty minutes of breath if the breath is honest. Most of the work is earning that.",
  },
  {
    slug: "research-photography",
    number: "04",
    title: "Research Photography",
    medium: "Visual Documentation",
    year: "2023",
    description:
      "Photographic documentation and ground reporting of infrastructure projects in Kathmandu Valley.",
    image: work04,
    overview:
      "A documentary survey of half-finished public infrastructure across the Kathmandu Valley — flyovers paused mid-span, tunnels stalled, drainage culverts overtaken by monsoon. The photographs accompany written ground reports.",
    process:
      "Sites were visited repeatedly across a year. The frame stays at human height, the light is whatever the day offered, and captions are brief. The image is meant to be read alongside the document, not in place of it.",
    reflection:
      "Infrastructure photography risks two failures: the heroic and the indignant. I tried for a third register — patient, unembarrassed, willing to let a stalled pillar simply be a stalled pillar.",
  },
  {
    slug: "brand-identity-and-visual-systems",
    number: "05",
    title: "Brand Identity and Visual Systems",
    medium: "Design Practice",
    year: "2021 — present",
    description: "Identity projects exploring place, trust, and the stories that shape organizations.",
    image: work05,
    overview:
      "Selected identity work for small institutions — a research collective, an independent bookshop, a community radio initiative. Each system is built from a small set of typographic and material decisions rather than a logo.",
    process:
      "I begin with a list of words the institution would never use about itself. The visual system follows from that refusal. Typography is usually the first decision; colour is almost always the last.",
    reflection:
      "An identity is a promise an organisation makes to behave a certain way in public. The design job is to make that promise legible without making it loud.",
  },
];

export const worksBySlug = Object.fromEntries(works.map((w) => [w.slug, w]));
