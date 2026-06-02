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
    id: "anita-colm",
    title: "ANITA & COLM",
    subtitle: "A Romantic Summer Wedding in Kent",
    client: "Anita & Colm",
    category: "Event Films",
    year: "JUL 2022",
    location: "KENT",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "A gorgeous, emotionally charged summer wedding story shot on location in the lush gardens of Kent. Blending timeless elegance with organic intimacy, this film stands as a classic showcase of creative storytelling.",
    credits: [
      { role: "Director", name: "Elena Bianchi" },
      { role: "DP", name: "Kenji Sato" },
      { role: "Editor", name: "Alesis Vance" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Cooke S7/i Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800"
    ]
  },
  {
    id: "gopalika-dhruv",
    title: "GOPALIKA & DHRUV",
    subtitle: "A Golden Celebration of Love & Petals",
    client: "Gopalika & Dhruv",
    category: "Event Films",
    year: "NOV 2020",
    location: "MILA",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "Capturing the vibrant joy, sensory overloads, and shower of rose petals during the Haldi ceremony of Gopalika & Dhruv. Filmed with high speed and shallow depth of field to capture every micro-expression.",
    credits: [
      { role: "Director", name: "Arjun Verma" },
      { role: "DP", name: "Kenji Sato" },
      { role: "Colorist", name: "Alesis Vance" }
    ],
    specs: {
      format: "ARRI ALEXA Mini LF",
      lens: "ARRI Signature Primes",
      aspect: "1.85:1 Flat"
    },
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800"
    ]
  },
  {
    id: "roma-jaskaran",
    title: "ROMA & JASKARAN",
    subtitle: "An Epic Royal Wedding Legacy",
    client: "Roma & Jaskaran",
    category: "Event Films",
    year: "DEC 2019",
    location: "OMAN",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "An extraordinary cinematic masterpiece detailing the union of Roma and Jaskaran in Oman. Shot on high-definition cinema systems to capture the grand architecture, traditional outfits, and raw human emotions.",
    credits: [
      { role: "Director", name: "Rajesh Sen" },
      { role: "DP", name: "Kenji Sato" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Cooke S7/i Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
    ]
  },
  {
    id: "maserati-art-of-precision",
    title: "THE ART OF PRECISION",
    subtitle: "Maserati GranTurismo India Launch Film",
    client: "Maserati India",
    category: "Commercial Films",
    year: "2025",
    location: "MUMBAI",
    imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f3af0c0f994073e5ffb650570b55ec70c2fa216&profile_id=139&oauth2_token_id=57447761",
    description: "A high-octane commercial film capturing the elegant lines and raw power of the Maserati GranTurismo. Shot on location in the architectural backdrops of Mumbai, this campaign bridges high fashion with automotive adrenaline.",
    credits: [
      { role: "Director", name: "Marco Valenti" },
      { role: "Director of Photography", name: "Kenji Sato" },
      { role: "Executive Producer", name: "Vikram Malhotra" }
    ],
    specs: {
      format: "ARRI ALEXA 35 (LF 4.6K)",
      lens: "ARRI Signature Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800"
    ]
  },
  {
    id: "vogue-silhouettes-mumbai",
    title: "SILHOUETTES OF MUMBAI",
    subtitle: "Fall/Winter Editorial Fashion Campaign",
    client: "Vogue India",
    category: "Fashion Campaigns",
    year: "2025",
    location: "MUMBAI",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/538568259.sd.mp4?s=d00e6e78eb32c4a92c31e21b0b6b23a5d8935c1f&profile_id=164&oauth2_token_id=57447761",
    description: "A monochromatic, dream-like visual study of modern tailoring, architectural movement, and slow-motion shadows. This campaign explores Mumbai's heritage monuments through a high-contrast cinematic lens.",
    credits: [
      { role: "Director / Editor", name: "Elena Bianchi" },
      { role: "Creative Lead", name: "Rohan Kapoor" }
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
    id: "bandra-bistro-story",
    title: "THE BOMBAY BISTRO",
    subtitle: "Artisanal Coffee & Culinary Story",
    client: "Bombay Coffee House",
    category: "Restaurant Promotions",
    year: "2025",
    location: "BANDRA",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e339f37a916e1e1273934336c1e&profile_id=139&oauth2_token_id=57447761",
    description: "A warm, atmospheric brand film capturing the artisanal craft of specialty coffee brewing and contemporary culinary design in Bandra. Focusing on organic textures, warm lighting, and intimate conversation.",
    credits: [
      { role: "Director", name: "Kabir Mehta" },
      { role: "Cinematographer", name: "Kenji Sato" }
    ],
    specs: {
      format: "Sony VENICE 2 (8K)",
      lens: "Zeiss Supreme Primes",
      aspect: "1.85:1 Flat"
    },
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
    ]
  },
  {
    id: "lodha-seafront-living",
    title: "SEAFRONT LUXURY",
    subtitle: "Lodha Worli Residences Showcase",
    client: "Lodha Group",
    category: "Real Estate Projects",
    year: "2024",
    location: "WORLI",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/394145417.sd.mp4?s=78a7f0581335b1d40fb176b66ca2ca59f81cd420&profile_id=139&oauth2_token_id=57447761",
    description: "A cinematic walkthrough showcasing the elegant interiors and breathtaking Arabian Sea views of the new luxury residential tower in Worli. Combining fluid camera work, steadicam sweeps, and natural sunset lighting.",
    credits: [
      { role: "Director", name: "Arjun Verma" },
      { role: "Drone Operator", name: "Amit Dev" }
    ],
    specs: {
      format: "Sony VENICE 2 (8K)",
      lens: "Zeiss Supreme Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800"
    ]
  },
  {
    id: "kerala-backwater-retreat",
    title: "ECHOES OF KERALA",
    subtitle: "Leela Wellness Resort Brand Film",
    client: "The Leela Resorts",
    category: "Social Media Campaigns",
    year: "2024",
    location: "KERALA",
    imageUrl: "https://images.unsplash.com/photo-1478720143022-385f704d3b7e?q=80&w=1600",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "A serene, visually poetic social media campaign highlighting luxury wellness treatments and natural backwaters in Kerala. Designed to capture peaceful, organic lifestyle moments for digital platforms.",
    credits: [
      { role: "Director / DP", name: "Kenji Sato" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Cooke S7/i Primes",
      aspect: "1.85:1 VistaVision"
    },
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800"
    ]
  },
  {
    id: "isha-devpal",
    title: "ISHA & DEVPAL",
    subtitle: "A Golden Taj Lake Palace Fairytale",
    client: "Isha & Devpal",
    category: "Event Films",
    year: "FEB 2024",
    location: "UDAIPUR",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "An elite destination wedding film captured at the Taj Lake Palace in Udaipur. Features slow-motion drone captures, intimate sunset vows, and grand visual storytelling.",
    credits: [
      { role: "Director", name: "Rajesh Sen" },
      { role: "DP", name: "Amit Dev" }
    ],
    specs: {
      format: "Sony VENICE 2 (8K)",
      lens: "Zeiss Supreme Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800"
    ]
  },
  {
    id: "zara-indigo",
    title: "ZARA INDIGO",
    subtitle: "Zara Spring Summer Campaign",
    client: "Zara India",
    category: "Fashion Campaigns",
    year: "APR 2025",
    location: "GOA",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/538568259.sd.mp4?s=d00e6e78eb32c4a92c31e21b0b6b23a5d8935c1f&profile_id=164&oauth2_token_id=57447761",
    description: "An high-fashion campaign film exploring textures, colors, and motion along the rocky shores of Goa. Shot on high-speed digital celluloid formats.",
    credits: [
      { role: "Director", name: "Elena Bianchi" },
      { role: "Stylist", name: "Pooja Valli" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Zeiss Supreme Primes",
      aspect: "1.33:1 Academy"
    },
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800"
    ]
  },
  {
    id: "kabir-riya",
    title: "KABIR & RIYA",
    subtitle: "A Sunset Beach Wedding Love Story",
    client: "Kabir & Riya",
    category: "Event Films",
    year: "DEC 2023",
    location: "GOA",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "A sweeping, cinematic sunset wedding film of Kabir and Riya in Goa. Emphasizing candid frames, natural lighting, and warm ocean-breeze aesthetics.",
    credits: [
      { role: "Director", name: "Arjun Verma" },
      { role: "DP", name: "Kenji Sato" }
    ],
    specs: {
      format: "ARRI ALEXA Mini LF",
      lens: "ARRI Signature Primes",
      aspect: "1.85:1 Flat"
    },
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800"
    ]
  },
  {
    id: "meera-siddharth",
    title: "MEERA & SIDDHARTH",
    subtitle: "A Tranquil Kerala Backwater Celebration",
    client: "Meera & Siddharth",
    category: "Event Films",
    year: "OCT 2024",
    location: "KERALA",
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/454877717.sd.mp4?s=a2bf753fbdb27163f91de03b9b4f6ed5e386ccfe&profile_id=164&oauth2_token_id=57447761",
    description: "A serene and visually cinematic wedding film shot along the tranquil backwaters of Kerala, highlighting authentic wellness aesthetics and slow-motion organic emotions.",
    credits: [
      { role: "Director / DP", name: "Kenji Sato" },
      { role: "Stylist", name: "Sanya Sen" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Cooke S7/i Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800",
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800"
    ]
  },
  {
    id: "tata-sustainability-legacy",
    title: "TATA SUSTAINABILITY",
    subtitle: "Tata Group Sustainability Legacy Film",
    client: "Tata Group",
    category: "Corporate Videos",
    year: "2025",
    location: "MUMBAI",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    videoUrl: "https://player.vimeo.com/external/394145417.sd.mp4?s=78a7f0581335b1d40fb176b66ca2ca59f81cd420&profile_id=139&oauth2_token_id=57447761",
    description: "A premium corporate vision film documenting the sustainability initiatives and green energy transition of Tata Group. Shot across multiple industrial and ecological landscapes in India.",
    credits: [
      { role: "Director", name: "Vikram Malhotra" },
      { role: "DP", name: "Amit Dev" }
    ],
    specs: {
      format: "RED V-Raptor 8K VV",
      lens: "Zeiss Supreme Primes",
      aspect: "2.39:1 Anamorphic"
    },
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "commercial-production",
    number: "01",
    title: "Commercial Production",
    description: "High-end television commercials and digital ad campaigns designed for impact. We handle casting, filming, and post-production to elevate your brand presence.",
    capabilities: ["TVC / Digital Ads", "Creative Treatments", "Talent Casting", "High-End Styling"]
  },
  {
    id: "corporate-films",
    number: "02",
    title: "Corporate Films",
    description: "Professional corporate videos, summit highlights, and internal communications that reflect your company's values, growth, and vision.",
    capabilities: ["Company Profiles", "Summit Coverage", "CSR Campaigns", "Executive Profiles"]
  },
  {
    id: "brand-storytelling",
    number: "03",
    title: "Brand Storytelling",
    description: "Narrative-driven films that dive deep into your brand's heritage, founders' journey, and core philosophy to connect emotionally with audiences.",
    capabilities: ["Founder Stories", "Brand Heritage", "Documentary Style", "Scriptwriting"]
  },
  {
    id: "social-media-content",
    number: "04",
    title: "Social Media Content",
    description: "High-quality, short-form visual content optimized for Instagram Reels, YouTube Shorts, and LinkedIn campaigns to boost engagement.",
    capabilities: ["Reels & Shorts", "LinkedIn Content", "Creator Collaborations", "Trend Optimization"]
  },
  {
    id: "product-videos",
    number: "05",
    title: "Product Videos",
    description: "Stunning close-up showcases, CGI integration, and detailed product walk-throughs that highlight aesthetics, design, and functionality.",
    capabilities: ["Close-Up Macro Shots", "CGI / 3D Renderings", "Lifestyle Integration", "Unboxing Narratives"]
  },
  {
    id: "event-coverage",
    number: "06",
    title: "Event Coverage",
    description: "Comprehensive multi-camera coverage and highlight films for summits, launches, fashion weeks, and corporate events.",
    capabilities: ["Multi-Cam Setups", "Highlight Reels", "On-Site Interviews", "Same-Day Delivery"]
  },
  {
    id: "real-estate-videos",
    number: "07",
    title: "Real Estate Videos",
    description: "Cinematic architecture walkthroughs, luxury home showcases, and development overviews with fluid movements and natural lighting.",
    capabilities: ["Interior Steadicam", "Architecture Styling", "Twilight / Sunset Shoots", "Development Overviews"]
  },
  {
    id: "drone-cinematography",
    number: "08",
    title: "Drone Cinematography",
    description: "Certified aerial capture using professional cinema drones for sweeping landscapes, high-speed tracking shots, and bird's-eye perspectives.",
    capabilities: ["ProRes / RAW Aerials", "FPV Flythroughs", "RTK Precision Tracking", "Certified Operations"]
  },
  {
    id: "photography",
    number: "09",
    title: "Photography",
    description: "Premium editorial, corporate headshots, culinary spreads, and architectural photography that captures texture, light, and geometry.",
    capabilities: ["Fashion Editorial", "Architecture & Interiors", "Culinary Spreads", "Corporate Headshots"]
  },
  {
    id: "video-editing",
    number: "10",
    title: "Video Editing",
    description: "Frame-accurate narrative editing, pacing, soundscapes, and sound design to bring together raw footage into a seamless, engaging story.",
    capabilities: ["Narrative Pacing", "Sound Design & Mix", "Asset Management", "Multi-Format Delivery"]
  },
  {
    id: "color-grading",
    number: "11",
    title: "Color Grading",
    description: "Premium DaVinci Resolve color grading to establish cinema-grade visual tones, custom LUT profiles, and skin-tone perfection.",
    capabilities: ["Dolby Vision HDR", "Custom LUT Creation", "Film Emulation (35mm)", "Skin-Tone Calibration"]
  },
  {
    id: "bespoke-projects",
    number: "12",
    title: "Bespoke Projects",
    description: "Tailored production solutions for unique concepts. From music videos and documentaries to art installations and custom creative campaigns, we bring your specific vision to life.",
    capabilities: ["Music Videos", "Creative Strategy", "Bespoke Formats", "Art Installations"]
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
    author: "Aditya Roy",
    role: "Marketing Director",
    company: "Maserati India"
  },
  {
    id: "2",
    quote: "Working with them in Mumbai on our Bistro launch campaign was effortless. They have a global mindset, an elite technical workflow, and a dedication to storytelling that is extremely rare.",
    author: "Kabir Mehta",
    role: "Founder",
    company: "Bombay Coffee House"
  },
  {
    id: "3",
    quote: "The visual aesthetic of our FW25 campaign was highly praised in fashion circles. Blurry Visuals translates couture clothing textures into beautiful celluloid stories.",
    author: "Anjali Sharma",
    role: "Visual Lead",
    company: "Vogue India"
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
    id: "mumbai-production-landscape",
    title: "Cinematic Storytelling in India: Navigating the Mumbai Film Landscape",
    category: "Studio",
    date: "April 15, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=800",
    summary: "How we align modern brand requirements with traditional cinematic craftsmanship, establishing a high-end visual language in Mumbai."
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
