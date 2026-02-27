import type { LanguageCode } from '@/store/store'

export interface AppTranslations {
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    contact: string
  }
  landing: {
    availabilityTag: string
    heroGreeting: string
    heroName: string
    heroTaglinePrefix: string
    heroRoles: string[]
    heroDescription: string
    primaryCta: string
    secondaryCta: string
    findMeOn: string
    stats: Array<{ value: string; label: string; caption: string }>
  }
  about: {
    heading: string
    emphasis: string
    passionHeading: string
    passionBody: string
    details: Array<{ label: string; value: string; isLink?: boolean; href?: string }>
  }
  skills: {
    badge: string
    titleLead: string
    titleAccent: string
    description: string
    categories: string[]
  }
  experience: {
    heading: string
    emphasis: string
  }
  contact: {
    badge: string
    title: string
    description: string
    details: Array<{ label: string; value: string; href?: string }>
    responseHeading: string
    responseCopy: string
    form: {
      emailLabel: string
      emailPlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
    }
  }
  footer: {
    badge: string
    message: string
    ctas: {
      email: string
      phone: string
    }
    contactHeading: string
    locationHeading: string
    locationValue: string
  }
  languageSelector: {
    heading: string
    messages: {
      active: string
      pending: string
    }
    tooltips: {
      switchTo: string
      comingSoon: string
    }
  }
}

const en: AppTranslations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact'
  },
  landing: {
    availabilityTag: 'Available for opportunities',
    heroGreeting: "Hey, I'm",
    heroName: 'Visoth',
    heroTaglinePrefix: 'Crafting delightful web experiences as a',
    heroRoles: ['Full Stack Developer'],
    heroDescription:
      'I craft responsive, accessible interfaces with modern Vue ecosystems. My work blends thoughtful interaction design with performance-focused engineering, resulting in experiences that feel polished, immersive, and fast on every device.',
    primaryCta: 'Let’s collaborate',
    secondaryCta: 'Download CV',
    findMeOn: 'Find me on',
    stats: [
      {
        value: '4+',
        label: 'Years building UI',
        caption: 'Hands-on with Vue, React, and design systems.'
      },
      {
        value: '18+',
        label: 'Projects shipped',
        caption: 'From concept to launch with measurable impact.'
      },
      {
        value: '5',
        label: 'Teams collaborated',
        caption: 'Cross-functional squads across product and design.'
      }
    ]
  },
  about: {
    heading: 'Who',
    emphasis: 'I Am',
    passionHeading: 'Passionate About Front-End Craft',
    passionBody:
      'I am deeply enthusiastic about crafting engaging, dynamic, and responsive web interfaces. I enjoy translating design concepts into functional front-end applications that elevate user experience. My passion lies in blending creativity with clean, efficient code to bring digital products to life. Constantly exploring modern frameworks and technologies, I aim to push boundaries and grow with every project I take on. For me, development isn’t just about code—it’s about creating meaningful, intuitive digital experiences.',
    details: [
      { label: 'Degree', value: 'Software Engineering' },
      { label: 'Location', value: 'Phnom Penh, Cambodia' },
      {
        label: 'Email',
        value: 'hengsoth68@gmail.com',
        isLink: true,
        href: 'mailto:hengsoth68@gmail.com'
      },
      { label: 'Phone', value: '+855 (0) 96 681 5223', isLink: true, href: 'tel:+855966815223' },
      { label: 'Languages', value: 'Khmer, English' },
      { label: 'Telegram', value: '@visothhh', isLink: true, href: 'https://t.me/@visothhh' }
    ]
  },
  skills: {
    badge: 'Toolkit highlights',
    titleLead: 'Full-stack craft powered by',
    titleAccent: 'modern tooling',
    description:
      'I combine strong fundamentals with a curated set of frameworks, libraries, and cloud tooling to launch resilient, performant experiences. This stack evolves with each project, but the quality bar stays high: clean architecture, pixel-level detail, and inclusive user journeys.',
    categories: ['Languages', 'Frontend Frameworks', 'Cloud & DevOps', 'Design Systems']
  },
  experience: {
    heading: 'My',
    emphasis: 'Experience'
  },
  contact: {
    badge: 'Let’s connect',
    title: 'Let’s shape something memorable together',
    description:
      'Share a challenge, product idea, or feature concept. I respond within 24 hours with a thoughtful follow-up and next steps. Projects of all sizes welcome—from rapid landing pages to design systems.',
    details: [
      {
        label: 'Email',
        value: 'hengsoth68@gmail.com',
        href: 'mailto:hengsoth68@gmail.com'
      },
      {
        label: 'Phone',
        value: '+855 (0) 96 681 5223',
        href: 'tel:+855966815223'
      },
      {
        label: 'Location',
        value: 'Phnom Penh, Cambodia'
      },
      {
        label: 'Telegram',
        value: '@visothhh',
        href: 'https://t.me/@visothhh'
      }
    ],
    responseHeading: 'Current response time',
    responseCopy: 'Within 24h on weekdays • Within 48h on weekends',
    form: {
      emailLabel: 'Email',
      emailPlaceholder: 'you@awesome.dev',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Project intro or topic',
      messageLabel: 'Message',
      messagePlaceholder: 'Share goals, scope, timelines, or links...',
      submit: 'Send message'
    }
  },
  footer: {
    badge: 'Let’s build',
    message:
      'Turn your ideas into reality with efficient and scalable web development solutions. Let’s create something impactful together.',
    ctas: {
      email: 'Email Me',
      phone: 'Call Now'
    },
    contactHeading: 'Contact Me',
    locationHeading: 'Location',
    locationValue: 'Phnom Penh, Cambodia'
  },
  languageSelector: {
    heading: 'Languages',
    messages: {
      active: '{language} is now active.',
      pending: '{language} localization is in progress.'
    },
    tooltips: {
      switchTo: 'Switch to {language}',
      comingSoon: '{language} translation is coming soon'
    }
  }
}

const reuseEn = en // Placeholder reuse for other languages until full localization is provided

export const translations: Record<LanguageCode, AppTranslations> = {
  en,
  kh: reuseEn,
  jp: reuseEn,
  cn: reuseEn
}

export const fallbackLanguage: LanguageCode = 'en'
