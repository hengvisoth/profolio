import { icon } from '@fortawesome/fontawesome-svg-core'
import { Technologies } from './icon'
import type { projectType } from '@/types/project.dto'

export const projectsData: projectType[] = [
  // 01 MB POS
  {
    id: 1,
    code: '01',
    title: 'MB POS',
    role: 'Full-Stack Developer',
    startDate: 'Jul ,2024',
    endDate: 'Present',
    short_desc:
      'Built a cross-platform Point-of-Sale (POS) system with Flutter and Node.js, integrated banking APIs for smoother payments, and shipped mobile apps to both Play Store and App Store. Also crafted a Vue.js + Ant Design admin dashboard with Vuex for state management. Handled ops for 100+ daily users, keeping things running smooth and glitch-free.',
    description: '',
    imageUrl: '/projects/01/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',

    // technologies: [
    //     Technologies.vuejs,
    //     Technologies.nuxtjs,
    //     Technologies.vuetify,
    //     Technologies.vuex,
    // ],
    technologies: [
      {
        name: 'Vue Js',
        icon: Technologies.vuejs
      },
      {
        name: 'VueX',
        icon: Technologies.vueX
      },
      {
        name: 'Ant Design',
        icon: Technologies.antDesign
      },
      {
        name: 'Node Js',
        icon: Technologies.nodejs
      },
      {
        name: 'Flutter',
        icon: Technologies.flutter
      },

      {
        name: 'SQL Server',
        icon: Technologies.sqlServer
      },

      {
        name: 'Prisma ORM',
        icon: Technologies.prisma
      }
    ],

    screenshots: [
      '/projects/shuttlebus/pic1.jpg',
      '/projects/shuttlebus/pic2.jpg',
      '/projects/shuttlebus/pic3.jpg',
      '/projects/shuttlebus/pic4.jpg',
      '/projects/shuttlebus/pic5.jpg',
      '/projects/shuttlebus/pic6.jpg',
      '/projects/shuttlebus/pic7.jpg',
      '/projects/shuttlebus/pic8.jpg',
      '/projects/shuttlebus/pic9.jpg',
      '/projects/shuttlebus/pic10.jpg',
      '/projects/shuttlebus/pic11.jpg'
    ]
  },

  // 02 Employee Management System
  {
    id: 2,
    code: '02',
    title: 'Employee Management System',
    role: 'Full-Stack Developer',
    startDate: 'Mar ,2024',
    endDate: 'Jul ,2024',
    short_desc:
      'Built a full-stack employee management tool with Next.js and Django, featuring role-based access, CSV import/export, and secure APIs. Deployed the system on AWS with EC2, RDS, and Elastic IP, handling both frontend and backend ops for stable performance.',
    description: ``,
    imageUrl: '/projects/02/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'Postgre SQL',
        icon: Technologies.typescript
      },
      {
        name: 'Prisma ORM',
        icon: Technologies.prisma
      },
      {
        name: 'Nuxt Js',
        icon: Technologies.nuxtjs
      },
      {
        name: 'Tailwind CSS',
        icon: Technologies.tailwindcss
      },
      {
        name: 'Django',
        icon: Technologies.django
      },
      {
        name: 'AWS',
        icon: Technologies.awsEc2
      },
      {
        name: 'RDS',
        icon: Technologies.rds
      }
    ],

    screenshots: [
      '/projects/facerecognition/pic1.jpg',
      '/projects/facerecognition/pic2.jpg',
      '/projects/facerecognition/pic3.jpg',
      '/projects/facerecognition/pic4.jpg',
      '/projects/facerecognition/pic5.jpg',
      '/projects/facerecognition/pic6.jpg',
      '/projects/facerecognition/pic7.jpg',
      '/projects/facerecognition/pic8.jpg',
      '/projects/facerecognition/pic9.jpg',
      '/projects/facerecognition/pic10.jpg'
    ]
  },

  // 03 License Plate Recognition System
  {
    id: 3,
    code: '03',
    title: 'License Plate Recognition System',
    role: 'Full-Stack Developer',
    startDate: 'Sep ,2023',
    endDate: 'Mar ,2024',
    short_desc:
      'Built a full-stack LPR system with Vue.js and Flask, handling real-time license plate detection, vehicle tracking, and Telegram alerts for unrecognized plates. Deployed via Docker on Linux for smooth, scalable performance in a resort environment.',
    description: ``,
    imageUrl: '/projects/03/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',

    technologies: [
      {
        name: 'VueJS',
        icon: Technologies.vuejs
      },
      {
        name: 'Tailwind CSS',
        icon: Technologies.tailwindcss
      },
      {
        name: 'Flask',
        icon: Technologies.flask
      },
      {
        name: 'Docker',
        icon: Technologies.docker
      },
      {
        name: 'Linux',
        icon: Technologies.linux
      },
      {
        name: 'WebSocket',
        icon: Technologies.websocket
      }
    ],

    screenshots: []
  },

  // 04 License Plate Recognition System
  {
    id: 4,
    code: '04',
    title: 'Face Recognition System',
    role: 'Front-End Developer',
    startDate: 'Aug ,2023',
    endDate: 'Feb ,2024',
    short_desc:
      'Built a web dashboard with Vue.js and a Flutter mobile app for real-time attendance tracking using facial recognition. Integrated FaceNet.tflite for on-device face matching, and deployed the system with Docker on Linux for stable, scalable performance.',
    description: ``,
    imageUrl: '/projects/04/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'Vue JS',
        icon: Technologies.vuejs
      },
      {
        name: 'Tailwind CSS',
        icon: Technologies.tailwindcss
      },
      {
        name: 'Flutter',
        icon: Technologies.flutter
      },
      {
        name: 'Python',
        icon: Technologies.python
      },
      {
        name: 'Tensorflow',
        icon: Technologies.tensorFlow
      },
      {
        name: 'Docker',
        icon: Technologies.docker
      },
      {
        name: 'Linux',
        icon: Technologies.linux
      }
    ],

    screenshots: []
  },

  // 05 Shuttle Bus System
  {
    id: 5,
    code: '05',
    title: 'Shuttle Bus System',
    role: 'Front-End Developer',
    startDate: 'Apr ,2023',
    endDate: 'Sep ,2023',
    short_desc:
      'Developed a web-based booking system with Vue.js and Tailwind CSS for students to reserve shuttle rides. Implemented ticket booking, confirmation, and cancellation features, then containerized and deployed the app on Ubuntu for reliable access.',
    description: ``,
    imageUrl: '/projects/05/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'Vue Js',
        icon: Technologies.vuejs
      },
      {
        name: 'Tailwind CSS',
        icon: Technologies.tailwindcss
      },
      {
        name: 'Docker',
        icon: Technologies.docker
      },
      {
        name: 'Linux',
        icon: Technologies.linux
      }
    ],

    screenshots: []
  },

  // 06 Delivery Express System
  {
    id: 6,
    code: '06',
    title: 'Delivery Express System',
    role: 'Front-End Mobile Developer',
    startDate: 'Jan ,2023',
    endDate: 'Apr ,2023',
    short_desc:
      'Built two Flutter apps for merchants and drivers to manage deliveries, with real-time tracking via Google Maps, OTP registration, push notifications, and Telegram alerts. Published on both Android and iOS platforms.',
    description: ``,
    imageUrl: '/projects/06/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'Flutter',
        icon: Technologies.flutter
      },
      {
        name: 'Firebase',
        icon: Technologies.firebase
      },
      {
        name: 'Google Map API',
        icon: Technologies.googleMap
      }
    ],

    screenshots: []
  },

  // 07 E-commerce Shoe Store
  {
    id: 7,
    code: '07',
    title: 'E-commerce Shoe Store',
    role: 'Full-Stack Developer',
    startDate: 'Sep ,2022',
    endDate: 'May ,2025',
    short_desc:
      'Built a full-stack e-commerce site with Vue.js, Node.js, and MongoDB—featuring user auth, PayPal checkout, and a clean, responsive UI. Handled everything from product management to order flow via custom RESTful APIs.',
    description: ``,
    imageUrl: '/projects/07/poster.jpg',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'Nest Js',
        icon: Technologies.nestjs
      },
      {
        name: 'Postgre SQL',
        icon: Technologies.postgresql
      },
      {
        name: 'Prisma ORM',
        icon: Technologies.prisma
      }
    ],

    screenshots: []
  },

  // 08  role: 'Full-Stack Developer',
  {
    id: 8,
    code: '08',
    title: 'Personal Profolio',
    role: 'Front-End Developer',
    startDate: '22, Jan ,2022',
    endDate: '**, Feb ,2022',
    short_desc: `
            Created a sleek, responsive portfolio with Vue 3, Tailwind CSS, and Vite, featuring GSAP/AOS animations and typewriter effects. Used TypeScript and Vitest for maintainable, well-tested code.
            `,
    description: ``,
    imageUrl: '/projects/08/poster.png',
    gitHubRepo: 'https://github.com/hengvisoth',
    demo: '',
    technologies: [
      {
        name: 'ASP.NET Core',
        icon: Technologies?.dotNetCore
      },
      {
        name: 'SQL Server',
        icon: Technologies?.sqlServer
      },
      {
        name: 'Dapper ORM',
        icon: Technologies?.dapper
      },
      {
        name: 'Vue Js',
        icon: Technologies.vuejs
      }
    ],
    screenshots: []
  }
]
