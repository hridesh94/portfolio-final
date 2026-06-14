import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";

export type WorkSegment = {
  title: string;
  body: string;
  image?: string;
  imageCaption?: string;
};

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
  segments?: WorkSegment[];
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
      "This project made me think differently about media and storytelling. It showed me that media is not only technology but also people, traditions, and shared experiences. By bringing these stories to the web, I explored how digital tools can help preserve and share cultural heritage.",
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
      "The ASAM Community Project documents local efforts in environmental restoration and afforestation. Working closely with volunteers on the ground, the project focused on bringing forward stories from the community and their relationship with the landscape.\n\n\n\n\nMy role involved coordinating with field teams, shaping narratives, and translating community experiences into a visual story. Through conversations and observations, the documentary highlights how environmental initiatives are experienced by the people directly involved in them.\n\n\n\n\nThe work reflects an interest in community-centered storytelling, where local voices guide the narrative.",
    process:
      "The documentary was developed through close collaboration with volunteers and community members. Rather than following a fixed script, the process evolved through field visits, conversations, and observations. This approach allowed the stories to emerge naturally from the people and places involved.\n\n\n\n\nThe final film brings together interviews, visual documentation, and moments from everyday life to present a grounded view of the community's work and experiences.",
    reflection:
      "Working on this project showed me the importance of listening before telling a story. Community narratives often exist in everyday experiences, and documenting them requires patience and trust. The process deepened my understanding of how media can support local voices and create spaces for shared experiences.\n\n\n\n\nAlongside this work, I also documented the impact of improved cookstoves in Bardiya, in western Nepal. Through conversations with local residents, I learned about daily life in the Terai region and how small technological changes can shape routines, health, and community life.",
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
      "Podcast Production brings together my experience in audio, video, and editorial storytelling. Across different projects, I have worked on recording, editing, sound design, and publishing conversations that engage with technology, society, and public life.\n\n\n\n\nThrough these experiences, I have become interested in how podcasts create spaces for dialogue and make complex ideas more accessible to broader audiences.",
    process:
      "Podcast Production brings together my experience in audio, video, and editorial storytelling — from recording and sound design to hosting and post-production across two distinct bodies of work.",
    reflection:
      "Working in podcast production taught me that good storytelling is often an act of careful listening. Whether through sound, visuals, or conversation, my goal has been to make complex ideas more engaging and accessible to diverse audiences.",
    segments: [
      {
        title: "PODS by PEI",
        body:
          "As Podcast Producer and Editor for PODS by PEI, I managed studio operations to ensure high-quality audio production. My work included recording sessions, sound design, editing episodes, and publishing them across digital platforms.\n\nBeyond production, I also hosted selected episodes that explored the relationship between technology and society. This experience helped me understand podcasting as both a technical and conversational medium.",
        imageCaption: "PODS by PEI — studio & production",
      },
      {
        title: "Blockchain Socialist & Governance Futures",
        body:
          "I also worked on video podcasts such as Blockchain Socialist and Governance Futures. While Blockchain Socialist explored the political and social dimensions of technology, Governance Futures focused on policy, governance, and emerging technologies.\n\nMy role included video editing, thumbnail design, and shaping the narrative structure of each episode to ensure that complex discussions were communicated clearly and effectively.",
        imageCaption: "Blockchain Socialist & Governance Futures — video podcasts",
      },
    ],
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
