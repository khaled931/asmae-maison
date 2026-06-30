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
      title: "Maison Asmae | Intelligence culturelle & art de vivre",
      description: "Maison Asmae accompagne les individus et organisations internationales dans les codes sociaux, professionnels et culturels avec élégance, discrétion et précision."
    },
    brand: {
      name: "Maison Asmae",
      descriptor: "Intelligence culturelle · Art de vivre · Présence exécutive"
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
      eyebrow: "Une maison contemporaine de raffinement culturel",
      title: "Naviguer les environnements sociaux, professionnels et internationaux avec grâce.",
      intro: "Maison Asmae transmet les codes, les gestes et l’intelligence culturelle qui permettent de transformer une opportunité en influence durable.",
      primaryCta: "Demander une consultation",
      secondaryCta: "Explorer les programmes",
      promiseTitle: "Discrétion, justesse et présence",
      promiseBody: "Notre approche ne cherche pas à imposer des règles. Elle aide chaque client à comprendre les nuances, les attentes et les comportements qui créent confiance, aisance et crédibilité.",
      pillarsTitle: "Trois domaines d’accompagnement",
      pillars: [
        { title: "Hospitalité & art de recevoir", body: "Invitations, table, gestes d’attention, expérience invité et hospitalité franco-marocaine contemporaine." },
        { title: "Présence, communication & influence", body: "Conversation, prise de parole, networking, dîners d’affaires et aisance dans les environnements exigeants." },
        { title: "Positionnement personnel & réputation", body: "Aligner visibilité, crédibilité et relations avec des ambitions personnelles et professionnelles de haut niveau." }
      ],
      signatureTitle: "Une plateforme pensée comme une maison",
      signatureBody: "Conseil privé, programmes éducatifs, salons, dîners, contenus éditoriaux et accompagnements corporate peuvent évoluer progressivement autour d’une même philosophie : élégance, générosité et excellence."
    },
    services: {
      eyebrow: "Advisory privé",
      title: "Un accompagnement sur mesure pour les environnements de haut niveau.",
      intro: "Les services de Maison Asmae s’adressent aux clients internationaux qui souhaitent comprendre les codes sociaux, professionnels et culturels avec profondeur et authenticité.",
      items: [
        { title: "Consultations privées", body: "Sessions individuelles en ligne ou en personne pour clarifier une situation, préparer un séjour, renforcer une présence ou structurer un objectif de réputation." },
        { title: "Hospitalité & expérience invité", body: "Conseil autour de l’art de recevoir, de la table, des invitations, du gifting et des gestes qui créent une relation mémorable." },
        { title: "Présence exécutive", body: "Accompagnement sur la posture, la conversation, la prise de parole, les dîners d’affaires et la crédibilité dans des cercles internationaux." },
        { title: "Positionnement & réputation", body: "Réflexion stratégique sur la manière d’être perçu, de construire la confiance et de cultiver des relations significatives." }
      ]
    },
    programmes: {
      eyebrow: "Programmes signature",
      title: "Des formats structurés pour transmettre les codes avec méthode.",
      intro: "Chaque programme peut être proposé en accompagnement privé, atelier ou expérience de groupe selon le contexte.",
      items: [
        {
          slug: "paris-confidence-programme",
          title: "The Paris Confidence Programme",
          audience: "Visiteurs internationaux, expatriés et clients GCC séjournant à Paris.",
          description: "Un programme pour comprendre les codes sociaux, culturels et professionnels français avec aisance, nuance et confiance.",
          outcomes: ["Lecture des codes parisiens", "Aisance dans les rencontres sociales", "Dîners, invitations et conversation", "Présence adaptée aux contextes premium"]
        },
        {
          slug: "modern-host-programme",
          title: "The Modern Host Programme",
          audience: "Particuliers, hôtes, entrepreneurs et familles souhaitant recevoir avec élégance.",
          description: "Une approche contemporaine de l’hospitalité, de la table, du gifting et de l’expérience invité.",
          outcomes: ["Créer une atmosphère", "Recevoir avec naturel", "Construire des relations par l’hospitalité", "Développer une signature personnelle"]
        },
        {
          slug: "executive-refinement-programme",
          title: "The Executive Refinement Programme",
          audience: "Dirigeants, entrepreneurs, diplomates et professionnels internationaux.",
          description: "Un parcours pour renforcer présence, communication, influence et crédibilité dans des environnements exigeants.",
          outcomes: ["Présence exécutive", "Conversation stratégique", "Communication interculturelle", "Crédibilité et réputation"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmae Corporate",
      title: "Intelligence culturelle et expérience client pour organisations exigeantes.",
      intro: "Maison Asmae peut accompagner les marques de luxe, hôtels, family offices et équipes dirigeantes dans la compréhension des codes culturels, relationnels et d’hospitalité.",
      clientsTitle: "Pour",
      clients: ["Marques de luxe", "Hôtels & hospitality groups", "Family offices", "Équipes exécutives", "Organisations internationales"],
      servicesTitle: "Formats possibles",
      services: ["Ateliers d’intelligence culturelle", "Conseil en expérience client premium", "Formation en présence exécutive", "Communication interculturelle", "Stratégie d’hospitalité"]
    },
    letters: {
      eyebrow: "Journal éditorial",
      title: "Letters from Maison Asmae",
      intro: "Réflexions sur l’hospitalité, la culture, l’élégance contemporaine, la conversation et l’intelligence sociale.",
      empty: "Les premières lettres seront publiées prochainement."
    },
    contact: {
      eyebrow: "Commencer la conversation",
      title: "Demander une consultation privée.",
      intro: "Partagez votre contexte, votre objectif et le type d’accompagnement recherché. Maison Asmae répondra avec discrétion et attention.",
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
      line: "Cultural intelligence, hospitality and executive refinement.",
      note: "Maison Asmae est conçue comme une maison de conseil discrète, éditoriale et internationale."
    }
  },
  en: {
    meta: {
      title: "Maison Asmae | Cultural intelligence & art de vivre",
      description: "Maison Asmae helps international individuals and organisations navigate social, professional and luxury environments with elegance, discretion and confidence."
    },
    brand: {
      name: "Maison Asmae",
      descriptor: "Cultural intelligence · Art de vivre · Executive presence"
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
      eyebrow: "A contemporary house of cultural refinement",
      title: "Navigate social, professional and international environments with grace.",
      intro: "Maison Asmae transmits the codes, gestures and cultural fluency that help transform opportunity into lasting influence.",
      primaryCta: "Request a consultation",
      secondaryCta: "Explore programmes",
      promiseTitle: "Discretion, precision and presence",
      promiseBody: "Our approach is not about imposing rules. It helps each client understand the nuances, expectations and behaviours that create trust, ease and credibility.",
      pillarsTitle: "Three advisory pillars",
      pillars: [
        { title: "Hospitality & the art of receiving", body: "Invitations, table culture, thoughtful gestures, guest experience and contemporary French-Moroccan hospitality." },
        { title: "Presence, communication & influence", body: "Conversation, public speaking, networking, business dining and ease in demanding environments." },
        { title: "Personal positioning & reputation", body: "Align visibility, credibility and relationships with high-level personal and professional ambitions." }
      ],
      signatureTitle: "A platform designed as a maison",
      signatureBody: "Private advisory, educational programmes, salons, dinners, editorial content and corporate work can evolve around one philosophy: elegance, generosity and excellence."
    },
    services: {
      eyebrow: "Private advisory",
      title: "Tailored guidance for high-level environments.",
      intro: "Maison Asmae serves international clients who want to understand social, professional and cultural codes with depth and authenticity.",
      items: [
        { title: "Private consultations", body: "One-to-one online or in-person sessions to clarify a situation, prepare a stay, strengthen presence or shape a reputation goal." },
        { title: "Hospitality & guest experience", body: "Advisory around hosting, table culture, invitations, gifting and gestures that create memorable relationships." },
        { title: "Executive presence", body: "Guidance on posture, conversation, public speaking, business dining and credibility in international circles." },
        { title: "Positioning & reputation", body: "Strategic reflection on how to be perceived, build trust and cultivate meaningful relationships." }
      ]
    },
    programmes: {
      eyebrow: "Signature programmes",
      title: "Structured formats to transmit the codes with method.",
      intro: "Each programme can be delivered as private advisory, workshop or curated group experience.",
      items: [
        {
          slug: "paris-confidence-programme",
          title: "The Paris Confidence Programme",
          audience: "International visitors, expatriates and GCC clients spending time in Paris.",
          description: "A programme for understanding French social, cultural and professional codes with ease, nuance and confidence.",
          outcomes: ["Reading Parisian codes", "Ease in social encounters", "Dining, invitations and conversation", "Presence in premium contexts"]
        },
        {
          slug: "modern-host-programme",
          title: "The Modern Host Programme",
          audience: "Individuals, hosts, entrepreneurs and families who want to receive with elegance.",
          description: "A contemporary approach to hospitality, table culture, gifting and guest experience.",
          outcomes: ["Create atmosphere", "Host with natural ease", "Build relationships through hospitality", "Develop a personal signature"]
        },
        {
          slug: "executive-refinement-programme",
          title: "The Executive Refinement Programme",
          audience: "Executives, entrepreneurs, diplomats and international professionals.",
          description: "A pathway to strengthen presence, communication, influence and credibility in demanding environments.",
          outcomes: ["Executive presence", "Strategic conversation", "Intercultural communication", "Credibility and reputation"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmae Corporate",
      title: "Cultural intelligence and client experience for discerning organisations.",
      intro: "Maison Asmae can support luxury brands, hotels, family offices and executive teams in understanding cultural, relational and hospitality codes.",
      clientsTitle: "For",
      clients: ["Luxury brands", "Hotels & hospitality groups", "Family offices", "Executive teams", "International organisations"],
      servicesTitle: "Possible formats",
      services: ["Cultural intelligence workshops", "Premium client experience advisory", "Executive presence training", "Intercultural communication", "Hospitality strategy"]
    },
    letters: {
      eyebrow: "Editorial journal",
      title: "Letters from Maison Asmae",
      intro: "Reflections on hospitality, culture, contemporary elegance, conversation and social intelligence.",
      empty: "The first letters will be published soon."
    },
    contact: {
      eyebrow: "Begin the conversation",
      title: "Request a private consultation.",
      intro: "Share your context, objective and the type of support you are seeking. Maison Asmae will respond with discretion and care.",
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
      line: "Cultural intelligence, hospitality and executive refinement.",
      note: "Maison Asmae is designed as a discreet, editorial and international advisory house."
    }
  },
  ar: {
    meta: {
      title: "Maison Asmae | الذكاء الثقافي وفن العيش",
      description: "تساعد Maison Asmae الأفراد والمؤسسات الدولية على فهم البيئات الاجتماعية والمهنية والثقافية برقي وثقة وخصوصية."
    },
    brand: {
      name: "Maison Asmae",
      descriptor: "ذكاء ثقافي · فن العيش · حضور تنفيذي"
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
      eyebrow: "دار معاصرة للرقي والذكاء الثقافي",
      title: "فهم البيئات الاجتماعية والمهنية والدولية بثقة وأناقة.",
      intro: "تنقل Maison Asmae الرموز والسلوكيات والمعرفة الثقافية التي تساعد على تحويل الفرص إلى تأثير طويل الأمد.",
      primaryCta: "طلب استشارة",
      secondaryCta: "استكشاف البرامج",
      promiseTitle: "خصوصية، دقة وحضور",
      promiseBody: "لا يقوم منهجنا على فرض قواعد جامدة، بل على فهم الفروق الدقيقة والتوقعات والسلوكيات التي تبني الثقة والراحة والمصداقية.",
      pillarsTitle: "ثلاثة محاور أساسية",
      pillars: [
        { title: "الضيافة وفن الاستقبال", body: "الدعوات، ثقافة المائدة، اللفتات الراقية، تجربة الضيف والضيافة الفرنسية المغربية المعاصرة." },
        { title: "الحضور والتواصل والتأثير", body: "المحادثة، التحدث أمام الجمهور، بناء العلاقات، موائد العمل والراحة في البيئات الرفيعة." },
        { title: "التموضع الشخصي والسمعة", body: "مواءمة الظهور والمصداقية والعلاقات مع الطموحات الشخصية والمهنية عالية المستوى." }
      ],
      signatureTitle: "منصة مصممة كدار متكاملة",
      signatureBody: "يمكن أن تتطور الاستشارات الخاصة والبرامج التعليمية والصالونات والموائد والمحتوى التحريري والخدمات المؤسسية حول فلسفة واحدة: الأناقة، الكرم والتميّز."
    },
    services: {
      eyebrow: "استشارات خاصة",
      title: "مرافقة مصممة للبيئات الرفيعة والدولية.",
      intro: "تخدم Maison Asmae العملاء الدوليين الراغبين في فهم الرموز الاجتماعية والمهنية والثقافية بعمق وأصالة.",
      items: [
        { title: "استشارات فردية", body: "جلسات فردية عبر الإنترنت أو حضورياً لتوضيح موقف، التحضير لإقامة، تعزيز الحضور أو صياغة هدف مرتبط بالسمعة." },
        { title: "الضيافة وتجربة الضيف", body: "استشارات حول الاستقبال، ثقافة المائدة، الدعوات، الهدايا واللفتات التي تصنع علاقات لا تُنسى." },
        { title: "الحضور التنفيذي", body: "مرافقة في الوقفة، المحادثة، التحدث، موائد العمل والمصداقية داخل الدوائر الدولية." },
        { title: "التموضع والسمعة", body: "تفكير استراتيجي حول كيفية بناء الانطباع، الثقة والعلاقات ذات المعنى." }
      ]
    },
    programmes: {
      eyebrow: "برامج متخصصة",
      title: "صيغ منظمة لنقل الرموز الاجتماعية والثقافية بمنهجية.",
      intro: "يمكن تقديم كل برنامج كاستشارة خاصة، ورشة عمل أو تجربة جماعية منتقاة.",
      items: [
        {
          slug: "paris-confidence-programme",
          title: "The Paris Confidence Programme",
          audience: "للزوار الدوليين والمغتربين وعملاء الخليج المقيمين مؤقتاً في باريس.",
          description: "برنامج لفهم الرموز الاجتماعية والثقافية والمهنية الفرنسية براحة ووعي وثقة.",
          outcomes: ["قراءة الرموز الباريسية", "الراحة في اللقاءات الاجتماعية", "الموائد والدعوات والمحادثة", "حضور مناسب للسياقات الراقية"]
        },
        {
          slug: "modern-host-programme",
          title: "The Modern Host Programme",
          audience: "للأفراد والمضيفين ورواد الأعمال والعائلات الراغبة في الاستقبال بأناقة.",
          description: "مقاربة معاصرة للضيافة وثقافة المائدة والهدايا وتجربة الضيف.",
          outcomes: ["خلق أجواء راقية", "الاستقبال بعفوية", "بناء العلاقات عبر الضيافة", "تطوير بصمة شخصية"]
        },
        {
          slug: "executive-refinement-programme",
          title: "The Executive Refinement Programme",
          audience: "للمديرين ورواد الأعمال والدبلوماسيين والمهنيين الدوليين.",
          description: "مسار لتعزيز الحضور والتواصل والتأثير والمصداقية في البيئات المتطلبة.",
          outcomes: ["حضور تنفيذي", "محادثة استراتيجية", "تواصل بين الثقافات", "مصداقية وسمعة"]
        }
      ]
    },
    corporate: {
      eyebrow: "Maison Asmae للشركات",
      title: "ذكاء ثقافي وتجربة عميل للمؤسسات الرفيعة.",
      intro: "يمكن لـ Maison Asmae دعم علامات الرفاهية والفنادق والمكاتب العائلية والفرق التنفيذية في فهم الرموز الثقافية والعلاقاتية والضيافية.",
      clientsTitle: "مناسب لـ",
      clients: ["علامات الرفاهية", "الفنادق ومجموعات الضيافة", "المكاتب العائلية", "الفرق التنفيذية", "المنظمات الدولية"],
      servicesTitle: "صيغ ممكنة",
      services: ["ورشات الذكاء الثقافي", "استشارات تجربة العميل الفاخرة", "تدريب الحضور التنفيذي", "التواصل بين الثقافات", "استراتيجية الضيافة"]
    },
    letters: {
      eyebrow: "دفتر تحريري",
      title: "Letters from Maison Asmae",
      intro: "تأملات في الضيافة، الثقافة، الأناقة المعاصرة، المحادثة والذكاء الاجتماعي.",
      empty: "ستنشر الرسائل الأولى قريباً."
    },
    contact: {
      eyebrow: "بداية الحوار",
      title: "طلب استشارة خاصة.",
      intro: "شارك السياق والهدف ونوع المرافقة المطلوبة. سترد Maison Asmae بخصوصية واهتمام.",
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
      line: "ذكاء ثقافي، ضيافة وحضور تنفيذي.",
      note: "صُممت Maison Asmae كدار استشارية رفيعة، تحريرية ودولية."
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
        "Maison Asmae considère l’hospitalité comme une forme douce d’influence : une manière de construire la confiance, de renforcer les liens et de laisser une impression qui demeure." 
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
        "Maison Asmae défend une approche du raffinement fondée sur la culture, la discrétion et l’intelligence relationnelle." 
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
        "Maison Asmae views hospitality as a gentle form of influence: a way to build trust, strengthen relationships and leave an impression that endures."
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
        "Maison Asmae defends a vision of refinement rooted in culture, discretion and relational intelligence."
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
        "تنظر Maison Asmae إلى الضيافة كشكل هادئ من التأثير: طريقة لبناء الثقة، تقوية العلاقات وترك انطباع يبقى." 
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
        "تدافع Maison Asmae عن رؤية للرقي قائمة على الثقافة والخصوصية والذكاء العلاقاتي." 
      ]
    }
  ]
};
