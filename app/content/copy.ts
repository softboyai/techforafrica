// ─── TechBridge for Africa — All Page Copy ────────────────────────────────
// Edit text here. Components stay presentational.

export const REGISTRATION_URL = "https://forms.gle/rqk8ivMrig4cNKYR8";

// ─── Nav ──────────────────────────────────────────────────────────────────
export const nav = {
  brand: "TechBridge for Africa",
  brandSub: "by Pathway to Salesforce",
  links: [
    { label: "Courses", href: "#courses" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Register Now",
} as const;

// ─── Hero ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Pathway to Salesforce · London, UK",
  headline: "Build a tech career that crosses borders.",
  subheadline:
    "TechBridge for Africa is a structured training program that helps you master Salesforce CRM or Applied AI Skills and step into roles that global companies actually hire for.",
  primaryCta: "Register for the Programme",
  secondaryCta: "Explore Courses",
  badge: "Now accepting applications",
} as const;

// ─── Who It's For ─────────────────────────────────────────────────────────
export const whoItsFor = {
  eyebrow: "Who this is for",
  headline: "You do not need a computer science degree to get here.",
  intro:
    "TechBridge for Africa is designed for people who are ready to make a deliberate shift into technology, whether that is a first career move or a pivot from another field.",
  profiles: [
    {
      title: "Recent graduates",
      description:
        "You have a degree in any discipline and want a clear, skills-first path into a tech role without starting from scratch.",
    },
    {
      title: "Career changers",
      description:
        "You are working in finance, education, healthcare, or another sector and want to add verifiable technology skills that open new doors.",
    },
    {
      title: "Professionals already in tech",
      description:
        "You work in tech support, administration, or operations and want to specialise in Salesforce or AI tooling to move into better-paid roles.",
    },
    {
      title: "Entrepreneurs and founders",
      description:
        "You run or plan to run a business and want to understand the CRM and AI tools that make modern operations work.",
    },
  ],
  closing:
    "If you are serious about building a skill set that holds real market value, this programme was built for you.",
} as const;

// ─── Courses ──────────────────────────────────────────────────────────────
export const courses = {
  eyebrow: "Two tracks",
  headline: "Pick the path that fits your goals.",
  items: [
    {
      track: "salesforce",
      label: "TRACK 01",
      title: "Salesforce CRM",
      tagline: "The world's most-used CRM platform. Learn it from the ground up.",
      description:
        "You will learn how to configure, administer, and use Salesforce, covering core CRM concepts, Sales Cloud, Service Cloud, and the practical skills needed to pass the Salesforce Administrator certification. The programme follows Salesforce's official Trailhead curriculum alongside live instruction.",
      outcomes: [
        "Salesforce Administrator certification preparation",
        "Sales Cloud and Service Cloud configuration",
        "Data management, reports, and dashboards",
        "Workflow automation with Flow Builder",
        "Real client scenario practice",
      ],
      format: "Live online + self-paced Trailhead",
      level: "Beginner to intermediate",
      accent: "primary" as const,
    },
    {
      track: "ai",
      label: "TRACK 02",
      title: "Applied AI Skills",
      tagline: "Practical AI tools for people who want to use them at work, not just talk about them.",
      description:
        "This track focuses on applied use of AI tools in professional contexts: prompt engineering, AI-assisted workflows, data analysis with AI, and understanding how to evaluate and use AI responsibly. No machine learning background required. This is for practitioners, not researchers.",
      outcomes: [
        "Prompt engineering for business applications",
        "AI-assisted content, research, and data workflows",
        "Evaluating AI outputs critically",
        "Responsible and ethical AI use in the workplace",
        "Building an AI-augmented personal workflow",
      ],
      format: "Live online + hands-on project work",
      level: "No prior AI experience needed",
      accent: "secondary" as const,
    },
  ],
} as const;

// ─── About ────────────────────────────────────────────────────────────────
export const about = {
  eyebrow: "About our programme",
  headline: "TechBridge for Africa's Future",
  programLabel: "About Our Program",
  program:
    "Our programme focuses on AI and Salesforce CRM certification training, designed to equip learners with the skills and confidence needed for today's digital workforce. We combine practical learning with Pathway to Salesforce UK, London — an online training school certification. We exist to bridge the gap between talent and opportunity, building a more inclusive and digitally skilled future.",
  mission: {
    label: "Mission",
    text: "To equip youth and women with in-demand AI and Salesforce CRM international certification and job readiness programmes that open pathways to meaningful international employment.",
  },
  vision: {
    label: "Vision",
    text: "To become a leading tech-based programme in Africa for inclusive digital transformation for youth and women — through equal access to technology skills, global opportunities and sustainable careers in the tech ecosystem.",
  },
  objectives: {
    label: "Objectives",
    items: [
      "Provide high quality AI and Salesforce CRM training that builds practical job readiness skills.",
      "Build confidence, leadership and professional readiness required by the international marketplace.",
      "Bridge the technology skills gap by offering accessible and inclusive learning programmes.",
      "Connect learners to internships, mentorship and job placement.",
      "Foster a strong community of certified professionals.",
    ],
  },
  solution: {
    label: "Our Solution",
    text: "Building Africa's next generation of digitally skilled, employable and entrepreneurial youth and women.",
  },
  operatorLabel: "Programme Operator",
  operatorName: "Pathway to Salesforce",
  operatorLocation: "London, United Kingdom",
  partnerLabel: "Delivery Partners",
  partnerNames: ["One Africa Digital", "Afrinnovators", "NovaCore Hub"],
} as const;

// ─── Partners ─────────────────────────────────────────────────────────────
export const partners = {
  eyebrow: "Collaboration partners",
  headline: "Delivered with trusted Rwandan tech companies.",
  intro:
    "TechBridge for Africa works with three Rwandan partners who provide local coordination and participant support. The curriculum and programme standards are set by Pathway to Salesforce.",
  items: [
    {
      name: "One Africa Digital",
      region: "Rwanda",
    },
    {
      name: "Afrinnovators",
      region: "Rwanda",
    },
    {
      name: "NovaCore Hub",
      region: "Rwanda",
    },
  ],
  disclaimer:
    "One Africa Digital, Afrinnovators, and NovaCore Hub are delivery partners of TechBridge for Africa. Pathway to Salesforce (London) operates the programme.",
} as const;

// ─── Advert / Spotlight Strip ─────────────────────────────────────────────
export const advertStrip = {
  messages: [
    "Applications are now open. Register today to secure your place.",
    "Salesforce is used by over 150,000 companies worldwide. Certified admins are in consistent demand.",
    "You do not need a technical background to start the Salesforce CRM track.",
    "The Applied AI Skills track is designed for practitioners, not engineers.",
    "Delivered by Pathway to Salesforce, London. Supporting careers across Africa.",
  ],
} as const;

// ─── How It Works ─────────────────────────────────────────────────────────
export const howItWorks = {
  eyebrow: "How it works",
  headline: "From registration to certification, a clear process.",
  steps: [
    {
      number: "01",
      title: "Register",
      description:
        "Complete the registration form. There is no lengthy application process. Tell us which track interests you and a little about your background.",
    },
    {
      number: "02",
      title: "Confirm your place",
      description:
        "You will receive a confirmation email with your cohort dates, onboarding materials, and everything you need before day one.",
    },
    {
      number: "03",
      title: "Complete the programme",
      description:
        "Attend live sessions, work through structured modules, and complete practice projects. You will have access to instructors and your peer cohort throughout.",
    },
    {
      number: "04",
      title: "Earn your credential",
      description:
        "Finish the programme and receive your certificate of completion. Salesforce CRM track participants are prepared and supported through the Salesforce Administrator certification exam.",
    },
    {
      number: "05",
      title: "Step into the market",
      description:
        "You leave with a verified skill set, a completed project portfolio, and the resources to pursue roles that require the skills you have built.",
    },
  ],
} as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────
export const faq = {
  eyebrow: "Common questions",
  headline: "What you need to know before registering.",
  items: [
    {
      question: "Do I need a technical background to register?",
      answer:
        "No. Both tracks are designed to be accessible to people without a technical background. The Salesforce CRM track starts from the fundamentals of CRM, and the Applied AI Skills track focuses on practical use of AI tools, not theory or engineering. If you can use a computer and are willing to commit to the learning, you can do this.",
    },
    {
      question: "Who runs this programme?",
      answer:
        "TechBridge for Africa is operated by Pathway to Salesforce, a corporate technology training organisation based in London, UK. The programme is delivered in collaboration with three Rwandan tech companies: One Africa Digital, Afrinnovators, and NovaCore Hub, who provide local support. Pathway to Salesforce sets the curriculum and is responsible for the programme's quality and outcomes.",
    },
    {
      question: "What does the Salesforce CRM track prepare me for?",
      answer:
        "The Salesforce CRM track prepares you for the Salesforce Certified Administrator exam. Beyond certification, you will have hands-on configuration experience across Sales Cloud, Service Cloud, automation tools, and data management. These are the practical skills employers look for when hiring Salesforce Administrators.",
    },
    {
      question: "What is the format? Is it fully online?",
      answer:
        "Yes, the programme is delivered online. It combines live instructor-led sessions with self-paced module work. The Salesforce CRM track also uses Salesforce's Trailhead platform for structured self-study. Exact session schedules are provided at enrolment.",
    },
    {
      question: "How long does the programme take?",
      answer:
        "Programme duration and cohort dates are confirmed at registration. Complete the registration form to get current schedule details.",
    },
    {
      question: "Is there a cost to participate?",
      answer:
        "Programme fees and any available funding or bursary options are detailed on the registration form. Contact us if you have specific questions about cost before registering.",
    },
    {
      question: "What happens after I complete the programme?",
      answer:
        "You receive a certificate of completion from TechBridge for Africa / Pathway to Salesforce. Salesforce CRM track graduates are supported through the Salesforce Administrator certification exam process. You will also have a completed project portfolio and access to guidance on pursuing roles that use the skills you have built.",
    },
    {
      question: "Can I do both tracks?",
      answer:
        "The tracks run on separate schedules. It is possible to complete both over time. If you are interested in doing both, note this on your registration form and we will advise based on current scheduling.",
    },
  ],
} as const;

// ─── Final CTA ────────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Ready to start",
  headline: "Registrations are open.",
  body:
    "Places are limited. Complete the registration form to secure your spot. The form takes under five minutes.",
  primaryCta: "Register for the Programme",
  secondaryCta: "Have a question? Contact us",
  contactHref: "mailto:techbridgeforafrica@gmail.com",
  note: "Operated by Pathway to Salesforce, London, UK.",
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────
export const footer = {
  brand: "TechBridge for Africa",
  operatedBy: "Operated by Pathway to Salesforce, London, UK",
  tagline:
    "A structured technology training programme for individuals building careers in Salesforce CRM and Applied AI.",
  links: [
    { label: "Courses", href: "#courses" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Partners", href: "#partners" },
    { label: "FAQ", href: "#faq" },
    { label: "Register", href: "https://forms.gle/rqk8ivMrig4cNKYR8" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  contact: {
    email: "techbridgeforafrica@gmail.com",
    emailHref: "mailto:techbridgeforafrica@gmail.com",
    phone: "+250788353033",
    phoneHref: "tel:+250788353033",
    address: "Kigali, Rwanda",
  },
  copyright: `© ${new Date().getFullYear()} TechBridge for Africa. All rights reserved.`,
  deliveryPartners: "Delivered in collaboration with One Africa Digital, Afrinnovators, and NovaCore Hub.",
} as const;
