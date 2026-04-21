import type { CareerHistoryContent } from '@/types/career.dto'

export const careerHistoryContent: CareerHistoryContent = {
  label: 'Career History',
  title: 'Work Experience',
  description:
    '5 roles across mobile, frontend, and full stack development - consistently owning features end-to-end and delivering measurable business impact.',
  educationLabel: 'Academic Background',
  educationTitle: 'Education',
  achievementsLabel: 'Achievements',
  experiences: [
    {
      dateRange: 'Sep 2025 - Jan 2026',
      company: 'Maya Technologies',
      companyType: 'Co., Ltd.',
      role: 'Frontend Developer - Vue.js',
      bullets: [
        'Built a centralized Vue.js admin dashboard using Vben Admin to streamline core system operations.',
        'Engineered a scalable Agent Portal with a 100%-accurate automated commission engine, eliminating manual workflows.',
        'Integrated Apache ECharts to convert raw JSON logs into interactive visual reports.'
      ],
      tags: ['Vue.js', 'Vben Admin', 'Apache ECharts', 'Ant Design Vue']
    },
    {
      dateRange: 'Jul 2024 - Sep 2025',
      company: 'Tonaire Digital',
      companyType: 'Full Stack',
      role: 'Full Stack Developer - Flutter & Node.js',
      bullets: [
        'Architected and deployed 2 cross-platform POS apps to the App Store and Google Play Store, owning the full SDLC.',
        'Integrated ABA Payway payment gateway to fully automate subscription management and renewals.',
        'Built a custom Flutter library via Method Channels to bridge native iOS and Android Bluetooth SDKs for hardware printers.',
        'Developed a real-time device session management system with Socket.IO, enabling users to terminate active sessions instantly.',
        'Platform adopted by 30+ business owners for daily operations management.'
      ],
      tags: ['Flutter', 'Node.js', 'Socket.IO', 'ABA Payway', 'Firebase']
    },
    {
      dateRange: 'Dec 2024 - Jul 2025',
      company: 'GTech Cambodia',
      companyType: 'Part-time',
      role: 'Mobile App Developer - Flutter',
      bullets: [
        'Deployed 4 production-ready Flutter apps in 8 months for logistics clients in the delivery industry.',
        'Integrated Google Maps for real-time driver routing and SMS OTP via PlusGate for account security.',
        'Maintained an existing bus booking app, improving stability and speed with zero downtime.'
      ],
      tags: ['Flutter', 'Google Maps', 'Firebase', 'SMS OTP']
    },
    {
      dateRange: 'Jan 2024 - Jul 2024',
      company: 'Optimus Virtual',
      companyType: 'Company',
      role: 'Full Stack Developer - Python & Vue.js',
      bullets: [
        'Built a live vehicle tracking dashboard using Vue.js, Tailwind CSS, and Python with real-time traffic log management.',
        'Automated Cambodian license plate recognition to calculate parking duration and boost resort security.',
        'Deployed the entire system using Docker and Linux, running 24/7 with zero downtime.'
      ],
      tags: ['Python', 'Vue.js', 'Docker', 'Linux', 'Telegram API']
    },
    {
      dateRange: 'Oct 2022 - Jan 2024',
      company: 'Vectorasoft',
      companyType: 'Co., Ltd.',
      role: 'Mobile App Developer - Flutter',
      bullets: [
        'Published 4 Flutter apps to major app stores, from UI/UX design handoff to live deployment.',
        'Integrated backend APIs to ensure fast, error-free data flow across all applications.',
        'Implemented OTP via PlusGate and live push notifications using Firebase.'
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    }
  ],
  education: [
    {
      degree: 'Bachelor of Software Engineering',
      yearRange: '2020-2024',
      school: 'Kirirom Institute of Technology'
    },
    {
      degree: 'High School',
      yearRange: '2016-2020',
      school: 'The Westline School'
    },
    {
      degree: 'ESL Diploma',
      yearRange: '2013-2017',
      school: 'BELTEI International School'
    }
  ],
  achievements: [
    {
      title: 'Top 4 Finalist - Cambodia CS Cup 2023',
      description:
        'Secured 4th place in the National Programming Contest at Paragon International University, solving complex algorithmic problems under strict time constraints.'
    },
    {
      title: 'Top 20 Finalist - Cambodia CS Cup 2022',
      description:
        'Ranked within the Top 20 nationally against elite university teams across Cambodia, demonstrating strong foundational programming and competitive skills.'
    },
    {
      title: 'National Outstanding Student - Math 2020',
      description:
        'Ranked 11th in Phnom Penh, demonstrating elite analytical reasoning and mathematical problem-solving among top national candidates.'
    }
  ]
}
