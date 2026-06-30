import type { Locale } from "@/lib/i18n";

export type Programme = {
  slug: string;
  title: string;
  audience: string;
  description: string;
  outcomes: string[];
};

export type JournalPost = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  body: string[];
};

type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    descriptor: string;
  };
  nav: { href: string; label: string }[];
  theme: {
    light: string;
    dark: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    promiseTitle: string;
    promiseBody: string;
    pillarsTitle: string;
    pillars: { title: string; body: string }[];
    signatureTitle: string;
    signatureBody: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  programmes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Programme[];
  };
  corporate: {
    eyebrow: string;
    title: string;
    intro: string;
    clientsTitle: string;
    clients: string[];
    servicesTitle: string;
    services: string[];
  };
  letters: {
    eyebrow: string;
    title: string;
    intro: string;
    empty: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    note: string;
    emailPlaceholder: string;
  };
  footer: {
    line: string;
    note: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  fr: {
    meta: {
      title: "Maison Asmæ | Académie premium d’étiquette moderne",
      description: "Maison Asmæ est une académie premium dédiée à l’étiquette moderne, l’hospitalité, l’intelligence culturelle et la présence exécutive."
    },
    brand: {
      name: "Maison Asmæ",
      descriptor: "Étiquette moderne · Hospitalité · Présence exécutive"
    },
    nav: [
      { href: "/services", label: "Services" },
      { href: "/programmes", label: "Programmes" },
      { href: "/corporate", label: "Corporate" },
      { href: "/letters", label: "Letters" },
      { href: "/contact", label: "Contact" }
    ],
    theme: {
      light: "Clair",
      dark: "Sombre"
    },
    home: {
      eyebrow: "Académie premium d’étiquette moderne",
      title: "Hospitalité, présence exécutive et confiance sociale pour les environnements d’exception.",
      intro: "Maison Asmæ forme les individus et organisations aux codes contemporains de l’élégance internationale : recevoir, communiquer, réseauter, dîner, voyager et se présenter avec justesse dans les cercles exigeants.",
      primaryCta: "Demander une consultation",
      secondaryCta: "Voir les parcours",
      promiseTitle: "Ce que l’on comprend dès l’arrivée",
      promiseBody: "Une académie premium au croisement de l’excellence corporate, de l’hospitalité de luxe et de la confiance sociale raffinée — inspirée par l’Europe, le GCC et les grands hubs internationaux.",
      pillarsTitle: "Trois parcours clairs",
      pillars: [
        { title: "The Modern Host", body: "Hospitalité, art de recevoir, entertaining, gifting, table culture et création d’expériences sociales mémorables." },
        { title: "Executive Presence Academy", body: "Business dining, networking, diplomatie, leadership presence, conversation stratégique et codes professionnels internationaux." },
        { title: "The Finishing House", body: "Programme premium pour évoluer avec aisance dans les environnements sociaux et professionnels de haut niveau." }
      ],
      signatureTitle: "Une référence moderne pour la sophistication globale",
      signatureBody: "Le visiteur doit comprendre immédiatement que Maison Asmæ n’est pas un blog lifestyle : c’est une académie et maison de conseil qui enseigne les codes de la confiance, de l’hospitalité et de la présence dans un contexte international."
    },
    services: {
      eyebrow: "Advisory & Academy",
      title: "Des services conçus pour transmettre les codes de l’élégance contemporaine.",
      intro: "Maison Asmæ accompagne les clients privés, professionnels et organisations qui veulent maîtriser les codes sociaux, culturels et professionnels avec précision.",
      items: [
        { title: "Étiquette moderne", body: "Codes sociaux contemporains, communication élégante, gestes justes et aisance dans les environnements internationaux." },
        { title: "Hospitalité & art de recevoir", body: "Recevoir, composer une table, inviter, offrir, accueillir et créer une expérience invitée mémorable." },
        { title: "Présence exécutive", body: "Posture, conversation, leadership presence, networking, business dining et crédibilité professionnelle." },
        { title: "Intelligence culturelle", body: "Comprendre les nuances entre Europe, GCC et hubs internationaux afin d’agir avec tact et confiance." }
      ]
    },
    programmes: {
      eyebrow: "Parcours signature",
      title: "Une académie structurée autour de trois piliers premium.",
      intro: "Chaque parcours peut évoluer en programme en ligne, accompagnement privé, masterclass ou expérience de groupe curated.",
      items: [
        {
          slug: "modern-host",
          title: "The Modern Host",
          audience: "Pour celles et ceux qui souhaitent recevoir, inviter et créer des expériences sociales avec aisance.",
          description: "Un parcours dédié à l’hospitalité, l’entertaining, la table, le gifting, la conversation et la confiance sociale.",
          outcomes: ["Recevoir avec naturel", "Créer une atmosphère raffinée", "Maîtriser les codes de la table", "Transformer l’hospitalité en relation"]
        },
        {
          slug: "executive-presence-academy",
          title: "Executive Presence Academy",
          audience: "Pour dirigeants, entrepreneurs, diplomates et professionnels internationaux.",
          description: "Un programme pour naviguer business dining, networking, diplomatie, leadership presence et environnements corporate exigeants.",
          outcomes: ["Présence exécutive", "Conversation stratégique", "Business dining", "Communication interculturelle"]
        },
        {
          slug: "finishing-house",
          title: "The Finishing House by Maison Asmæ",
          audience: "Programme flagship pour clients recherchant une transformation premium et complète.",
          description: "L’art d’évoluer avec aisance dans les environnements sociaux, professionnels, culturels et internationaux de haut niveau.",
          outcomes: ["Confiance sociale raffinée", "Codes internationaux", "Élégance comportementale", "Positionnement personnel"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmæ Corporate",
      title: "Intelligence culturelle et excellence relationnelle pour organisations exigeantes.",
      intro: "Maison Asmæ accompagne les marques de luxe, hôtels, family offices et équipes dirigeantes dans les codes de l’hospitalité, du protocole moderne, de la communication et de l’expérience client premium.",
      clientsTitle: "Pour",
      clients: ["Marques de luxe", "Hôtels & groupes hospitality", "Family offices", "Équipes exécutives", "Organisations internationales"],
      servicesTitle: "Formats possibles",
      services: ["Ateliers d’intelligence culturelle", "Formation en présence exécutive", "Business dining & networking", "Conseil en expérience client premium", "Protocoles d’hospitalité moderne"]
    },
    letters: {
      eyebrow: "Journal éditorial",
      title: "Letters from Maison Asmæ",
      intro: "Réflexions sur l’hospitalité, l’étiquette moderne, l’élégance contemporaine, la communication et l’intelligence sociale.",
      empty: "Les premières lettres seront publiées prochainement."
    },
    contact: {
      eyebrow: "Commencer la conversation",
      title: "Demander une consultation privée.",
      intro: "Partagez votre contexte, votre objectif et le type d’accompagnement recherché. Maison Asmæ répondra avec discrétion et attention.",
      emailLabel: "Email direct",
      formTitle: "Demande initiale",
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: "Préparer l’email",
      note: "Le formulaire ouvre votre client email pour ce MVP. Un backend de réservation pourra être ajouté dans une phase suivante.",
      emailPlaceholder: "bonjour@maisonasmae.com"
    },
    footer: {
      line: "Modern etiquette, luxury hospitality and executive presence.",
      note: "Maison Asmæ est conçue comme une académie premium et maison de conseil internationale."
    }
  },
  en: {
    meta: {
      title: "Maison Asmæ | Premium academy for modern etiquette",
      description: "Maison Asmæ is a premium academy for modern etiquette, hospitality, cultural intelligence and executive presence."
    },
    brand: {
      name: "Maison Asmæ",
      descriptor: "Modern etiquette · Hospitality · Executive presence"
    },
    nav: [
      { href: "/services", label: "Services" },
      { href: "/programmes", label: "Programmes" },
      { href: "/corporate", label: "Corporate" },
      { href: "/letters", label: "Letters" },
      { href: "/contact", label: "Contact" }
    ],
    theme: {
      light: "Light",
      dark: "Dark"
    },
    home: {
      eyebrow: "Premium academy for modern etiquette",
      title: "Hospitality, executive presence and refined social confidence for exceptional environments.",
      intro: "Maison Asmæ trains individuals and organisations in the contemporary codes of international elegance: hosting, communication, networking, business dining, travel and high-level social confidence.",
      primaryCta: "Request a consultation",
      secondaryCta: "View pathways",
      promiseTitle: "Clear from the first impression",
      promiseBody: "A premium academy at the intersection of corporate excellence, luxury hospitality and refined social confidence — inspired by Europe, the GCC and global business hubs.",
      pillarsTitle: "Three clear pathways",
      pillars: [
        { title: "The Modern Host", body: "Hospitality, entertaining, gifting, table culture and the creation of memorable social experiences." },
        { title: "Executive Presence Academy", body: "Business dining, networking, diplomacy, leadership presence, strategic conversation and international professional codes." },
        { title: "The Finishing House", body: "A premium flagship programme for moving with ease through high-level social and professional environments." }
      ],
      signatureTitle: "A modern reference for global sophistication",
      signatureBody: "Visitors should immediately understand that Maison Asmæ is not a lifestyle blog. It is an academy and advisory house teaching the codes of confidence, hospitality and presence in a global context."
    },
    services: {
      eyebrow: "Advisory & Academy",
      title: "Services designed to transmit the codes of contemporary elegance.",
      intro: "Maison Asmæ supports private clients, professionals and organisations seeking to master social, cultural and professional codes with precision.",
      items: [
        { title: "Modern etiquette", body: "Contemporary social codes, elegant communication, thoughtful gestures and ease in international settings." },
        { title: "Hospitality & hosting", body: "Hosting, table culture, invitations, gifting, welcoming and creating memorable guest experiences." },
        { title: "Executive presence", body: "Posture, conversation, leadership presence, networking, business dining and professional credibility." },
        { title: "Cultural intelligence", body: "Understanding nuances across Europe, the GCC and international hubs in order to act with tact and confidence." }
      ]
    },
    programmes: {
      eyebrow: "Signature pathways",
      title: "An academy structured around three premium pillars.",
      intro: "Each pathway can evolve into an online programme, private advisory journey, masterclass or curated group experience.",
      items: [
        {
          slug: "modern-host",
          title: "The Modern Host",
          audience: "For those who want to host, entertain and create social experiences with ease.",
          description: "A pathway dedicated to hospitality, entertaining, table culture, gifting, conversation and social confidence.",
          outcomes: ["Host with natural ease", "Create a refined atmosphere", "Master table codes", "Turn hospitality into relationship"]
        },
        {
          slug: "executive-presence-academy",
          title: "Executive Presence Academy",
          audience: "For executives, entrepreneurs, diplomats and international professionals.",
          description: "A programme for navigating business dining, networking, diplomacy, leadership presence and demanding corporate environments.",
          outcomes: ["Executive presence", "Strategic conversation", "Business dining", "Intercultural communication"]
        },
        {
          slug: "finishing-house",
          title: "The Finishing House by Maison Asmæ",
          audience: "A flagship programme for clients seeking a complete premium transformation.",
          description: "The art of moving effortlessly through high-level social, professional, cultural and international environments.",
          outcomes: ["Refined social confidence", "International codes", "Behavioural elegance", "Personal positioning"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmæ Corporate",
      title: "Cultural intelligence and relational excellence for discerning organisations.",
      intro: "Maison Asmæ supports luxury brands, hotels, family offices and executive teams with the codes of hospitality, modern protocol, communication and premium client experience.",
      clientsTitle: "For",
      clients: ["Luxury brands", "Hotels & hospitality groups", "Family offices", "Executive teams", "International organisations"],
      servicesTitle: "Possible formats",
      services: ["Cultural intelligence workshops", "Executive presence training", "Business dining & networking", "Premium client experience advisory", "Modern hospitality protocols"]
    },
    letters: {
      eyebrow: "Editorial journal",
      title: "Letters from Maison Asmæ",
      intro: "Reflections on hospitality, modern etiquette, contemporary elegance, communication and social intelligence.",
      empty: "The first letters will be published soon."
    },
    contact: {
      eyebrow: "Begin the conversation",
      title: "Request a private consultation.",
      intro: "Share your context, objective and the type of support you are seeking. Maison Asmæ will respond with discretion and care.",
      emailLabel: "Direct email",
      formTitle: "Initial request",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Prepare email",
      note: "For this MVP, the form opens your email client. A booking backend can be added in a later phase.",
      emailPlaceholder: "bonjour@maisonasmae.com"
    },
    footer: {
      line: "Modern etiquette, luxury hospitality and executive presence.",
      note: "Maison Asmæ is designed as a premium academy and international advisory house."
    }
  },
  ar: {
    meta: {
      title: "Maison Asmæ | أكاديمية راقية للإتيكيت الحديث",
      description: "Maison Asmæ أكاديمية راقية للإتيكيت الحديث، الضيافة، الذكاء الثقافي والحضور التنفيذي."
    },
    brand: {
      name: "Maison Asmæ",
      descriptor: "إتيكيت حديث · ضيافة · حضور تنفيذي"
    },
    nav: [
      { href: "/services", label: "الخدمات" },
      { href: "/programmes", label: "البرامج" },
      { href: "/corporate", label: "للشركات" },
      { href: "/letters", label: "الرسائل" },
      { href: "/contact", label: "تواصل" }
    ],
    theme: {
      light: "فاتح",
      dark: "داكن"
    },
    home: {
      eyebrow: "أكاديمية راقية للإتيكيت الحديث",
      title: "الضيافة، الحضور التنفيذي والثقة الاجتماعية الراقية للبيئات عالية المستوى.",
      intro: "تدرّب Maison Asmæ الأفراد والمؤسسات على رموز الأناقة الدولية المعاصرة: الاستقبال، التواصل، بناء العلاقات، موائد العمل، السفر والثقة في الدوائر الاجتماعية والمهنية الرفيعة.",
      primaryCta: "طلب استشارة",
      secondaryCta: "عرض المسارات",
      promiseTitle: "الغاية واضحة من اللحظة الأولى",
      promiseBody: "أكاديمية راقية تقع عند تقاطع التميز المؤسسي، معايير الضيافة الفاخرة والثقة الاجتماعية المهذبة — باستلهام من أوروبا، الخليج ومراكز الأعمال العالمية.",
      pillarsTitle: "ثلاثة مسارات واضحة",
      pillars: [
        { title: "The Modern Host", body: "الضيافة، الاستقبال، الهدايا، ثقافة المائدة وصناعة تجارب اجتماعية راقية ولا تُنسى." },
        { title: "Executive Presence Academy", body: "موائد العمل، بناء العلاقات، الدبلوماسية، الحضور القيادي، المحادثة الاستراتيجية والرموز المهنية الدولية." },
        { title: "The Finishing House", body: "برنامج رئيسي راقٍ لتعلّم الحركة بثقة وسلاسة داخل البيئات الاجتماعية والمهنية عالية المستوى." }
      ],
      signatureTitle: "مرجع حديث للرقي العالمي",
      signatureBody: "يجب أن يفهم الزائر مباشرة أن Maison Asmæ ليست مدونة أسلوب حياة، بل أكاديمية ودار استشارية تعلّم رموز الثقة والضيافة والحضور في سياق عالمي."
    },
    services: {
      eyebrow: "استشارات وأكاديمية",
      title: "خدمات مصممة لنقل رموز الأناقة المعاصرة.",
      intro: "ترافق Maison Asmæ العملاء الأفراد والمهنيين والمؤسسات الراغبة في إتقان الرموز الاجتماعية والثقافية والمهنية بدقة.",
      items: [
        { title: "الإتيكيت الحديث", body: "الرموز الاجتماعية المعاصرة، التواصل الأنيق، اللفتات المدروسة والراحة في البيئات الدولية." },
        { title: "الضيافة وفن الاستقبال", body: "الاستقبال، ثقافة المائدة، الدعوات، الهدايا، الترحيب وصناعة تجربة ضيف لا تُنسى." },
        { title: "الحضور التنفيذي", body: "الوقفة، المحادثة، الحضور القيادي، بناء العلاقات، موائد العمل والمصداقية المهنية." },
        { title: "الذكاء الثقافي", body: "فهم الفروق الدقيقة بين أوروبا والخليج ومراكز الأعمال العالمية للتصرف بلباقة وثقة." }
      ]
    },
    programmes: {
      eyebrow: "مسارات متخصصة",
      title: "أكاديمية مبنية حول ثلاثة محاور راقية.",
      intro: "يمكن أن يتحول كل مسار إلى برنامج إلكتروني، مرافقة خاصة، ماستر كلاس أو تجربة جماعية منتقاة.",
      items: [
        {
          slug: "modern-host",
          title: "The Modern Host",
          audience: "لمن يرغب في الاستقبال وصناعة تجارب اجتماعية بثقة وسلاسة.",
          description: "مسار مخصص للضيافة، الاستقبال، ثقافة المائدة، الهدايا، المحادثة والثقة الاجتماعية.",
          outcomes: ["الاستقبال بعفوية", "خلق أجواء راقية", "إتقان رموز المائدة", "تحويل الضيافة إلى علاقة"]
        },
        {
          slug: "executive-presence-academy",
          title: "Executive Presence Academy",
          audience: "للمديرين ورواد الأعمال والدبلوماسيين والمهنيين الدوليين.",
          description: "برنامج للتعامل مع موائد العمل، بناء العلاقات، الدبلوماسية، الحضور القيادي والبيئات المؤسسية المتطلبة.",
          outcomes: ["حضور تنفيذي", "محادثة استراتيجية", "موائد العمل", "تواصل بين الثقافات"]
        },
        {
          slug: "finishing-house",
          title: "The Finishing House by Maison Asmæ",
          audience: "برنامج رئيسي للعملاء الباحثين عن تحول راقٍ ومتكامل.",
          description: "فن الحركة بسلاسة داخل البيئات الاجتماعية والمهنية والثقافية والدولية عالية المستوى.",
          outcomes: ["ثقة اجتماعية راقية", "رموز دولية", "أناقة سلوكية", "تموضع شخصي"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmæ للشركات",
      title: "ذكاء ثقافي وتميز علاقاتي للمؤسسات الرفيعة.",
      intro: "تدعم Maison Asmæ علامات الرفاهية والفنادق والمكاتب العائلية والفرق التنفيذية في رموز الضيافة والبروتوكول الحديث والتواصل وتجربة العميل الفاخرة.",
      clientsTitle: "مناسب لـ",
      clients: ["علامات الرفاهية", "الفنادق ومجموعات الضيافة", "المكاتب العائلية", "الفرق التنفيذية", "المنظمات الدولية"],
      servicesTitle: "صيغ ممكنة",
      services: ["ورشات الذكاء الثقافي", "تدريب الحضور التنفيذي", "موائد العمل وبناء العلاقات", "استشارات تجربة العميل الفاخرة", "بروتوكولات الضيافة الحديثة"]
    },
    letters: {
      eyebrow: "دفتر تحريري",
      title: "Letters from Maison Asmæ",
      intro: "تأملات في الضيافة، الإتيكيت الحديث، الأناقة المعاصرة، التواصل والذكاء الاجتماعي.",
      empty: "ستنشر الرسائل الأولى قريباً."
    },
    contact: {
      eyebrow: "بداية الحوار",
      title: "طلب استشارة خاصة.",
      intro: "شارك السياق والهدف ونوع المرافقة المطلوبة. سترد Maison Asmæ بخصوصية واهتمام.",
      emailLabel: "البريد المباشر",
      formTitle: "طلب أولي",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "تحضير البريد",
      note: "في هذه النسخة الأولى يفتح النموذج برنامج البريد لديك. يمكن إضافة نظام حجز لاحقاً.",
      emailPlaceholder: "bonjour@maisonasmae.com"
    },
    footer: {
      line: "إتيكيت حديث، ضيافة فاخرة وحضور تنفيذي.",
      note: "صُممت Maison Asmæ كأكاديمية راقية ودار استشارية دولية."
    }
  }
};

export const journalPosts: Record<Locale, JournalPost[]> = {
  fr: [
    {
      slug: "forgotten-art-of-hosting",
      date: "2026-06-30",
      category: "Hospitalité",
      title: "L’art oublié de recevoir",
      excerpt: "Recevoir ne consiste pas seulement à organiser une table. C’est créer les conditions d’une relation plus attentive.",
      readingTime: "4 min",
      body: [
        "Recevoir commence bien avant l’arrivée des invités. Le véritable art de l’hospitalité réside dans la capacité à anticiper sans contrôler, à guider sans imposer et à créer un cadre dans lequel chacun se sent reconnu.",
        "Dans les traditions françaises, marocaines et moyen-orientales, l’hôte n’est pas simplement une personne qui ouvre sa maison. Il devient le gardien d’une atmosphère, d’un rythme et d’une attention portée aux détails.",
        "Maison Asmæ considère l’hospitalité comme une forme douce d’influence : une manière de construire la confiance, de renforcer les liens et de laisser une impression qui demeure."
      ]
    },
    {
      slug: "what-luxury-truly-means",
      date: "2026-06-30",
      category: "Art de vivre",
      title: "Ce que le luxe signifie vraiment",
      excerpt: "Le luxe contemporain n’est pas l’accumulation. Il se trouve dans la justesse, le calme et la qualité de l’attention.",
      readingTime: "3 min",
      body: [
        "Le luxe le plus durable n’est pas toujours visible. Il se manifeste dans la précision d’un geste, la qualité d’un silence, la pertinence d’une invitation ou la capacité à respecter le contexte.",
        "À une époque saturée d’images, la vraie sophistication se reconnaît souvent à ce qui est retenu plutôt qu’à ce qui est montré.",
        "Maison Asmæ défend une approche du raffinement fondée sur la culture, la discrétion et l’intelligence relationnelle."
      ]
    }
  ],
  en: [
    {
      slug: "forgotten-art-of-hosting",
      date: "2026-06-30",
      category: "Hospitality",
      title: "The forgotten art of hosting",
      excerpt: "Hosting is not only about arranging a table. It is about creating the conditions for more attentive relationships.",
      readingTime: "4 min",
      body: [
        "Hosting begins long before guests arrive. The real art of hospitality lies in anticipating without controlling, guiding without imposing and creating a setting where people feel considered.",
        "Across French, Moroccan and Middle Eastern traditions, the host is not merely someone who opens a home. The host becomes the guardian of an atmosphere, a rhythm and a quality of attention.",
        "Maison Asmæ views hospitality as a gentle form of influence: a way to build trust, strengthen relationships and leave an impression that endures."
      ]
    },
    {
      slug: "what-luxury-truly-means",
      date: "2026-06-30",
      category: "Art de vivre",
      title: "What luxury truly means",
      excerpt: "Contemporary luxury is not accumulation. It is found in precision, calm and the quality of attention.",
      readingTime: "3 min",
      body: [
        "The most enduring luxury is not always visible. It appears in the precision of a gesture, the quality of a silence, the relevance of an invitation or the ability to respect context.",
        "In an age saturated by images, true sophistication is often recognised by what is restrained rather than what is displayed.",
        "Maison Asmæ defends a vision of refinement rooted in culture, discretion and relational intelligence."
      ]
    }
  ],
  ar: [
    {
      slug: "forgotten-art-of-hosting",
      date: "2026-06-30",
      category: "الضيافة",
      title: "فن الاستقبال المنسي",
      excerpt: "الاستقبال ليس ترتيب مائدة فقط، بل خلق ظروف علاقة أكثر انتباهاً وعمقاً.",
      readingTime: "٤ دقائق",
      body: [
        "يبدأ الاستقبال قبل وصول الضيوف بوقت طويل. يكمن فن الضيافة الحقيقي في القدرة على التوقع دون السيطرة، والتوجيه دون فرض، وخلق مساحة يشعر فيها كل شخص بأنه محل اهتمام.",
        "في التقاليد الفرنسية والمغربية والشرق أوسطية، لا يكون المضيف مجرد شخص يفتح بيته. يصبح حارساً للأجواء والإيقاع ونوعية الاهتمام.",
        "تنظر Maison Asmæ إلى الضيافة كشكل هادئ من التأثير: طريقة لبناء الثقة، تقوية العلاقات وترك انطباع يبقى."
      ]
    },
    {
      slug: "what-luxury-truly-means",
      date: "2026-06-30",
      category: "فن العيش",
      title: "ما معنى الفخامة حقاً؟",
      excerpt: "الفخامة المعاصرة ليست تراكم الأشياء، بل الدقة والهدوء وجودة الانتباه.",
      readingTime: "٣ دقائق",
      body: [
        "الفخامة الأكثر بقاء ليست دائماً مرئية. تظهر في دقة اللفتة، جودة الصمت، مناسبة الدعوة أو القدرة على احترام السياق.",
        "في زمن ممتلئ بالصور، تُعرف الأناقة الحقيقية غالباً بما يتم ضبطه لا بما يتم عرضه.",
        "تدافع Maison Asmæ عن رؤية للرقي قائمة على الثقافة والخصوصية والذكاء العلاقاتي."
      ]
    }
  ]
};
