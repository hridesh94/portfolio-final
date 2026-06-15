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
  embedHtml?: string;
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
  url?: string;
  segments?: WorkSegment[];
  secondaryImages?: string[];
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
    image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506833/homeapge-_gaine_rspb0f.png",
    url: "https://gandarva.pages.dev/",
    overview:
      "Gaine, the Media Man is an interactive web project exploring the history and cultural role of Nepal's Gandharva community. Traditionally known as storytellers, musicians, and messengers, the Gandharvas carried news and memory through songs performed with the Sarangi.\n\nBuilt using vanilla JavaScript, the project combines oral history, visual storytelling, and interaction design. An interactive Sarangi element allows visitors to engage with the instrument's sound, creating a more direct connection to the community's musical tradition.\n\nThrough this work, I explore how digital media can preserve cultural heritage while creating new ways of experiencing it online.",
    process:
      "The website was developed using HTML, CSS, and vanilla JavaScript. Rather than reproducing a conventional article, the project was designed as an interactive experience where sound, movement, and narrative unfold together. The interactive Sarangi feature invites visitors to engage with the instrument not only as an object, but as a medium of storytelling.",
    reflection:
      "This project made me think differently about media and storytelling. It showed me that media is not only technology but also people, traditions, and shared experiences. By bringing these stories to the web, I explored how digital tools can help preserve and share cultural heritage.",
    segments: [
      {
        title: "Visual Storytelling",
        body:
          "The project balances rich visual imagery with narrative depth, creating a cohesive experience where images and storytelling work together to explore the cultural heritage of the Gandharva community.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506831/gaine_ix7ef5.png",
        imageCaption: "Balancing visual narrative with cultural storytelling",
      },
      {
        title: "Interactive Sound Design",
        body:
          "At the heart of the experience lies an interactive Sarangi element that emulates the authentic sound of traditional strings. This feature transforms the website into an instrument, inviting visitors to actively engage with the musical traditions central to Gandharva culture.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506836/sarangi_interactive_eywabg.png",
        imageCaption: "Interactive Sarangi element with authentic string sound emulation",
      },
    ],
  },
  {
    slug: "documentary-practice",
    number: "02",
    title: "Documentary Production",
    medium: "OYU GREEN",
    year: "2024",
    description:
      "Documentary works on clean cooking initiatives and environmental restoration in Nepal.",
    image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506694/Photo_Apr_22_2024_aq034e.jpg",
    url: "https://www.youtube.com/watch?v=R1bWnLm5xkQ",
    overview:
      "The ASAM Community Project documents local efforts in environmental restoration and afforestation. Working closely with volunteers on the ground, the project focused on bringing forward stories from the community and their relationship with the landscape.\n\n\n\n\nMy role involved coordinating with field teams, shaping narratives, and translating community experiences into a visual story. Through conversations and observations, the documentary highlights how environmental initiatives are experienced by the people directly involved in them.\n\n\n\n\nThe work reflects an interest in community-centered storytelling, where local voices guide the narrative.",
    process:
      "The documentary was developed through close collaboration with volunteers and community members. Rather than following a fixed script, the process evolved through field visits, conversations, and observations. This approach allowed the stories to emerge naturally from the people and places involved.\n\n\n\n\nThe final film brings together interviews, visual documentation, and moments from everyday life to present a grounded view of the community's work and experiences.",
    reflection:
      "Working on this project showed me the importance of listening before telling a story. Community narratives often exist in everyday experiences, and documenting them requires patience and trust. The process deepened my understanding of how media can support local voices and create spaces for shared experiences.\n\n\n\n\nAlongside this work, I also documented the impact of improved cookstoves in Bardiya, in western Nepal. Through conversations with local residents, I learned about daily life in the Terai region and how small technological changes can shape routines, health, and community life.",
    segments: [
      {
        title: "Greening India Initiative",
        body:
          "A short documentary production for OYU Green exploring the greening initiatives in Assam. The film documents the environmental restoration efforts and community engagement in the region.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506694/Photo_Apr_22_2024_aq034e.jpg",
        imageCaption: "Greening India initiative, an Assam-based short documentary production for OYU Green",
      },
      {
        title: "Community Engagement",
        body:
          "Working directly with local communities to document their environmental restoration efforts and the stories behind them. These moments capture the dedication and commitment of volunteers on the ground.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781506694/Photo_Apr_22_2024_1_aftyig.jpg",
        imageCaption: "Community members working on environmental restoration initiatives",
      },
    ],
  },
  {
    slug: "podcast-production",
    number: "03",
    title: "Podcast Production",
    medium: "Audio and Editorial Practice",
    year: "2022 — present",
    description:
      "Editing and producing conversations across technology, governance, and public discourse.",
    image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781511145/Photo_Jul_24_2023_rlhfyr.jpg",
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
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781511148/Photo_Aug_3_2023_pn35xn.jpg",
        imageCaption: "PODS by PEI — studio & production",
        embedHtml: `<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://poddtoppen.se/podcast/1644664068/pods-by-pei/hem-sagar-on-the-beauty-of-birds-and-bird-watching" data-iframely-url="https://iframely.net/0KZyy6P9?theme=light"></a></div></div>`,
      },
      {
        title: "Blockchain Socialist",
        body:
          "I worked on the video podcast Blockchain Socialist, exploring the political and social dimensions of technology. My role included video editing, thumbnail design, and shaping the narrative structure of each episode to ensure that complex discussions were communicated clearly and effectively.",
        imageCaption: "Blockchain Socialist — video podcast",
        embedHtml: `<div class="aspect-video w-full overflow-hidden bg-muted"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/HhjfZxAF0cA" title="Blockchain Socialist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" /></div>`,
      },
      {
        title: "Governance Futures",
        body:
          "Governance Futures focused on policy, governance, and emerging technologies. I was responsible for the video production and editorial flow, helping translate academic and policy-heavy discussions into engaging video content.",
        imageCaption: "Governance Futures — video podcast",
        embedHtml: `<div class="aspect-video w-full overflow-hidden bg-muted"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/x8YREa3mnK8" title="Governance Futures" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" /></div>`,
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
    image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781507822/Nepal_Paper_Cover_Ideas_vrbelu.png",
    url: "https://pei.center/all-publications/",
    secondaryImages: [
      "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781508348/Photo_Jan_2_2024_vqpmbd.jpg",
      "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781508349/nagdhunga_tunel_xtgn9m.jpg",
    ],
    overview:
      "Photographs created for the research project Of Infrastructure Diplomacy & Development. I visited infrastructure projects across Nepal and documented them through photography. The images were later featured in the research publication.",
    process:
      "I travelled to different project sites and photographed roads, tunnels, hydropower projects, and construction work. The goal was to create visual records that supported the research and showed how infrastructure changes places and communities.",
    reflection:
      "Research often explains infrastructure through reports and data. Photography helps show the people, landscapes, and spaces behind these projects.",
  },
  {
    slug: "brand-identity-and-visual-systems",
    number: "05",
    title: "Brand Identity and Visual Systems",
    medium: "Design Practice",
    year: "2021 — present",
    description: "Identity projects exploring place, trust, and the stories that shape organizations.",
    image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781507293/TLA_Brand_Guidelines_rj5mkn.png",
    overview:
      "Selected identity work for small institutions and businesses. These projects focus on typography, colour, and visual systems rather than logos alone. Each identity is built to reflect the values and context of the organisation.",
    segments: [
      {
        title: "Tempus Lake Capital",
        body:
          "Developed the logo and brand guidelines for a finance company. The visual identity was inspired by the landscape of Lake Como, combining natural imagery with a sense of stability and long-term growth. The logo was traced and refined to maintain a balance between elegance and financial credibility.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781507290/TLA_Logo_nj98wf.png",
        imageCaption: "Tempus Lake Capital — logo & identity",
      },
      {
        title: "Bharosa",
        body:
          "Created the identity for a Nepali real estate company. The logo draws from the form of a home, reflecting ideas of trust and belonging. The colour palette was inspired by traditional Nepali terracotta bricks, using warm tones to create a sense of familiarity and comfort.",
        image: "https://res.cloudinary.com/dj7hwtgxy/image/upload/v1781507142/bharosa_owr0wp.png",
        imageCaption: "Bharosa — identity & color system",
      },
    ],
    process:
      "I begin with a list of words the institution would never use about itself. The visual system follows from that refusal. Typography is usually the first decision; colour is almost always the last.",
    reflection:
      "An identity is a promise an organisation makes to behave a certain way in public. The design job is to make that promise legible without making it loud.",
  },
];

export const worksBySlug = Object.fromEntries(works.map((w) => [w.slug, w]));
