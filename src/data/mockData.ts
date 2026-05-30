export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  year: string;
  location: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  credits: { role: string; name: string }[];
  specs: { format: string; lens: string; aspect: string };
  gallery: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface Equipment {
  id: string;
  category: string;
  name: string;
  spec: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  summary: string;
}

export const projectsData: Project[] = [
  {
    id: "maserati-art-of-precision",
    title: "THE ART OF PRECISION",
    subtitle: "Maserati GranTurismo Launch Film",
    client: "Maserati",
    category: "Commercial Films",
    year: "2025",
    location: "Milan, Italy",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f3af0c0f994073e5ffb650570b55ec70c2fa216&profile_id=139&oauth2_token_id=57447761",
    description: "A high-octane commercial film capturing the elegant lines and raw auditory power of the Maserati GranTurismo. Shot on location in the industrial outskirts of Milan, this campaign bridges high fashion with automotive adrenaline.",
    credits: [
      { role: "Director", name: "Marco Valenti" },
      { role: "Director of Photography", name: "Kenji Sato" },
      { role: "Executive Producer", name: "Sofia Moretti" },
      { role: "Editor / Colorist", name: "Alesis Vance" },
      { role: "Sound Design", name: "Kavinski Noise" }
    ],
    specs: {
      format: "ARRI ALEXA 35 (LF 4.6K)",
      lens: "ARRI Signature Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800"
    ]
  },
  {
    id: "vogue-silhouettes-milan",
    title: "SILHOUETTES OF MILAN",
    subtitle: "Fall/Winter Editorial Campaign",
    client: "Vogue Italia",
    category: "Fashion Campaigns",
    year: "2025",
    location: "Milan, Italy",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/538568259.sd.mp4?s=d00e6e78eb32c4a92c31e21b0b6b23a5d8935c1f&profile_id=164&oauth2_token_id=57447761",
    description: "A monochromatic, dream-like visual study of modern tailoring, architectural movement, and slow-motion shadows. This campaign explores Milan's brutalist monuments through a high-contrast cinematic lens.",
    credits: [
      { role: "Director / Editor", name: "Elena Bianchi" },
      { role: "Creative Lead", name: "Davide Rosso" },
      { role: "Stylist", name: "Chiara Valli" },
      { role: "Lead Model", name: "Vittoria Ceretti" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Zeiss Supreme Primes",
      aspect: "1.33:1 Academy"
    },
    gallery: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800"
    ]
  },
  {
    id: "sony-echoes-of-tokyo",
    title: "ECHOES OF TOKYO",
    subtitle: "Brand Storytelling Experience",
    client: "Sony Alpha",
    category: "Brand Films",
    year: "2024",
    location: "Tokyo, Japan",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e339f37a916e1e1273934336c1e&profile_id=139&oauth2_token_id=57447761",
    description: "A neon-soaked journey through the quiet alleys of Shinjuku and the bustling crosswalks of Shibuya. This brand film showcases high-sensitivity cinematic capture, focusing on the poetry of low-light urban stories.",
    credits: [
      { role: "Director of Photography", name: "Kenji Sato" },
      { role: "Narrator", name: "Takeshi Kitano" },
      { role: "Soundscape Designer", name: "Ryuichi Y." },
      { role: "Local Fixer", name: "Satoshi Tanaka" }
    ],
    specs: {
      format: "Sony VENICE 2 (8K)",
      lens: "Kowa Anamorphic Primes",
      aspect: "2.40:1 Scope"
    },
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800",
      "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=800",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800"
    ]
  },
  {
    id: "neon-nocturne",
    title: "NEON NOCTURNE",
    subtitle: "Electronic Music Visual Narrative",
    client: "Tokyo Synth Wave",
    category: "Music Videos",
    year: "2025",
    location: "Shibuya, Tokyo",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/371434316.sd.mp4?s=71e8da6f236ef6530663884d5df68d54625b045e&profile_id=139&oauth2_token_id=57447761",
    description: "A hallucinatory, pulse-pounding music video driven by retro-futuristic synthesized beats. Blending fast-shutter optics, heavy color grading, and retro CRT scanlines to evoke a deep feeling of cybernetic nostalgia.",
    credits: [
      { role: "Creative Director", name: "Alesis Vance" },
      { role: "Choreographer", name: "Yuki Hirose" },
      { role: "Gaffer", name: "Shinjiro O." },
      { role: "VFX Supervisor", name: "Renzo Rossi" }
    ],
    specs: {
      format: "ARRI ALEXA Mini LF",
      lens: "Lomo Anamorphic Vintage",
      aspect: "2.00:1 Univisium"
    },
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
      "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=800"
    ]
  },
  {
    id: "the-last-artisan",
    title: "THE LAST ARTISAN",
    subtitle: "Short Documentary Film",
    client: "National Geographic",
    category: "Documentary",
    year: "2024",
    location: "Kyoto, Japan",
    imageUrl: "https://images.unsplash.com/photo-1478720143022-385f704d3b7e?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "A poetic, intimate look at the last master swordsmith in Kyoto. Shot completely with natural and candlelight, this film explores the philosophy of legacy, craftsmanship, and the beauty of slow repetition.",
    credits: [
      { role: "Director / DP", name: "Kenji Sato" },
      { role: "Producer", name: "Sofia Moretti" },
      { role: "Sound Design", name: "Ryuichi Y." },
      { role: "Colorist", name: "Alesis Vance" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Cooke S7/i Primes",
      aspect: "1.85:1 VistaVision"
    },
    gallery: [
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800"
    ]
  },
  {
    id: "designing-tomorrow",
    title: "DESIGNING TOMORROW",
    subtitle: "Corporate Cinema Experience",
    client: "Prada HQ",
    category: "Corporate Cinema",
    year: "2024",
    location: "Milan, Italy",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/394145417.sd.mp4?s=78a7f0581335b1d40fb176b66ca2ca59f81cd420&profile_id=139&oauth2_token_id=57447761",
    description: "A sleek, architecturally driven film documenting Prada's new sustainability initiative and carbon-neutral Milan workspace design. Blending clean lines, drone sweeps, and corporate storytelling.",
    credits: [
      { role: "Director", name: "Elena Bianchi" },
      { role: "Camera Operator", name: "Filippo Conte" },
      { role: "Drone Operator", name: "Renato Negri" },
      { role: "Editor", name: "Marco Valenti" }
    ],
    specs: {
      format: "Sony VENICE 2 (8K)",
      lens: "Zeiss Supreme Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "film-production",
    number: "01",
    title: "Film Production",
    description: "Full-scale cinematic production capabilities. From handling complex logistics to execution, we take your vision from script to high-fidelity screen outputs.",
    capabilities: ["Line Production", "Crew Assembly", "On-Set Management", "Location Scouting"]
  },
  {
    id: "commercial-direction",
    number: "02",
    title: "Commercial Direction",
    description: "Visually arresting advertising campaigns crafted with emotional depth. We direct high-impact films that elevate brand prestige.",
    capabilities: ["Pre-visuals", "Treatment Writing", "Talent Casting", "Visual Aesthetics"]
  },
  {
    id: "cinematography",
    number: "03",
    title: "Cinematography",
    description: "World-class camera operations using elite digital cinema cameras. Our lighting and lens configurations focus on creating evocative narrative moods.",
    capabilities: ["ARRI/RED Operation", "Anamorphic Framing", "Lighting Design", "Drone Capture"]
  },
  {
    id: "vfx-cgi",
    number: "04",
    title: "VFX & CGI",
    description: "Integrating high-end CGI, green screens, and photorealistic 3D rendering with live-action footage for immersive surreal experiences.",
    capabilities: ["3D Camera Tracking", "Cleanups & Compositing", "Matte Painting", "Fluid Simulations"]
  },
  {
    id: "color-grading",
    number: "05",
    title: "Color Grading",
    description: "Premium Davinci Resolve color grading. We curate custom look-up tables (LUTs) and color spaces to establish unique, movie-grade visual tones.",
    capabilities: ["HDR Dolby Vision", "Film Emulation (35mm)", "Color Management", "Skin-Tone Recovery"]
  },
  {
    id: "post-production",
    number: "06",
    title: "Post Production",
    description: "End-to-end post workflow. We handle frame-accurate editing, sound mixing, Foley, soundscapes, and delivery encoding.",
    capabilities: ["Offline/Online Editing", "Sound Design", "Audio Mix 5.1/Atmos", "Master Delivery"]
  },
  {
    id: "creative-direction",
    number: "07",
    title: "Creative Direction",
    description: "Structuring structural visual identities and creative narratives for brands, musicians, and artists globally.",
    capabilities: ["Brand Strategy", "Storyboarding", "Moodboarding", "Scriptwriting"]
  },
  {
    id: "brand-storytelling",
    number: "08",
    title: "Brand Storytelling",
    description: "Crafting editorial-grade documentaries and profiles that dive deep into authentic human stories.",
    capabilities: ["Interviews", "Mini-Docs", "Corporate Narrative", "Social Cutdowns"]
  }
];

export const equipmentData: Equipment[] = [
  {
    id: "arri-alexa-35",
    category: "Camera Systems",
    name: "ARRI ALEXA 35",
    spec: "4.6K Super 35 / 17 Stops DR",
    description: "The gold standard in digital cinema capture, providing unparalleled dynamic range, natural skin tones, and native film-like rendering.",
    tag: "A-Cam"
  },
  {
    id: "signature-primes",
    category: "Optics",
    name: "ARRI Signature Primes",
    spec: "LPL Mount / T1.8 Aperture",
    description: "Warm, natural-looking skin tones, exceptionally soft bokeh, and delicate flares. Ideal for high-end editorial and cinematic rendering.",
    tag: "Prime Optics"
  },
  {
    id: "kowa-vintage",
    category: "Optics",
    name: "Kowa Prominar Anamorphics",
    spec: "Vintage Anamorphic / 2x Squeeze",
    description: "Rare 1960s Japanese cinema lenses with distinctive warm flares, organic distortions, and cinematic vertical bokeh.",
    tag: "Vintage Glass"
  },
  {
    id: "dji-inspire-3",
    category: "Aviation",
    name: "DJI Inspire 3 Drone",
    spec: "8K Full-Frame ProRes RAW",
    description: "Professional cinema drone integrated with centimeter-level RTK positioning for precision high-speed tracking shots.",
    tag: "Cinema Aerials"
  },
  {
    id: "davinci-resolve-studio",
    category: "Color & Grading",
    name: "DaVinci Resolve Advanced Panel",
    spec: "Hardware Control / HDR grading",
    description: "The ultimate grading system for precise color-space control, primary corrections, and Dolby Vision master passes.",
    tag: "Color Suite"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Blurry Visuals engineered a brand campaign that didn't just showcase our product — it told a visual poem. Their mastery of light, color, and cinematic structure is unparalleled.",
    author: "Federica Rossi",
    role: "Global Marketing Director",
    company: "Maserati Group"
  },
  {
    id: "2",
    quote: "Working with them in Tokyo and Milan was effortless. They have a global mindset, an elite technical workflow, and a dedication to storytelling that is extremely rare.",
    author: "Takeshi Sato",
    role: "Creative Director",
    company: "Sony Alpha Global"
  },
  {
    id: "3",
    quote: "The visual aesthetic of our FW25 campaign was highly praised at Milan Fashion Week. Blurry Visuals translates haute couture clothing textures into beautiful celluloid stories.",
    author: "Elena Galli",
    role: "Visual Lead",
    company: "Vogue Italia"
  }
];

export const journalData: JournalPost[] = [
  {
    id: "sculpting-light-arri-alexa-35",
    title: "Sculpting Light: Our Hands-On Review of the ARRI ALEXA 35",
    category: "Cinematography",
    date: "May 20, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
    summary: "An in-depth exploration of the ALEXA 35's 17 stops of dynamic range and how it changes low-light lighting setups in brutalist urban spaces."
  },
  {
    id: "tokyo-milan-bridge-production",
    title: "The Tokyo-Milan Bridge: Aligning Aesthetic Styles Across Continents",
    category: "Studio",
    date: "April 15, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=800",
    summary: "How we synchronize Japanese minimalism with Italian editorial luxury, establishing a cross-cultural cinematic design language."
  },
  {
    id: "crafting-celluloid-emulation",
    title: "Crafting Celluloid: The Science Behind Modern Digital Film Emulation",
    category: "Color Grading",
    date: "March 28, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=800",
    summary: "Breaking down halation, grain densities, and color channel curves to make RED/Sony digital captures look identical to Kodak 5219 film stock."
  }
];
