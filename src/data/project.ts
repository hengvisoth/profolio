import { Technologies } from './icon';
import type { projectType } from "@/types/project.dto";

export const projectsData: projectType[] = [
    // 01 shuttle bus
    {
        id: 1,
        code: "01",
        title: "Shuttle Bus System",
        role: "Full-Stack Developer",
        startDate: "Jul ,2023",
        endDate: "Mar ,2024",
        short_desc:
            "Shuttle Bus System is a web application designed to simplify the booking process for students and staff traveling between Phnom Penh and Kirirom. It offers an intuitive reservation system for users and a comprehensive admin dashboard for managing schedules, departures, and user tickets.",
        description: `
        This project aims to improve the booking experience for students and staff who need to travel between Phnom Penh and Kirirom in our community. 
        It provides a website for users to easily make reservations and an admin site for residential management to oversee and control the monthly bus schedule, departures date and time, users data, and ticket of each user.
       
    `,
        imageUrl: "/projects/shuttlebus/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",

        // technologies: [
        //     Technologies.vuejs,
        //     Technologies.nuxtjs,
        //     Technologies.vuetify,
        //     Technologies.vuex,
        // ],
        technologies: [
            {
                name: "Node Js",
                icon: Technologies.nodejs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            },
            {
                name: "Next Js",
                icon: Technologies.nextjs,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            }
        ],

        screenshots: [
            "/projects/shuttlebus/pic1.jpg",
            "/projects/shuttlebus/pic2.jpg",
            "/projects/shuttlebus/pic3.jpg",
            "/projects/shuttlebus/pic4.jpg",
            "/projects/shuttlebus/pic5.jpg",
            "/projects/shuttlebus/pic6.jpg",
            "/projects/shuttlebus/pic7.jpg",
            "/projects/shuttlebus/pic8.jpg",
            "/projects/shuttlebus/pic9.jpg",
            "/projects/shuttlebus/pic10.jpg",
            "/projects/shuttlebus/pic11.jpg",
        ],
    },

    // 02 face recognition system
    {
        id: 2,
        code: "02",
        title: "FACE RECOGNITION SYSTEM",
        role: "Full-Stack Developer",
        startDate: "Aug ,2023",
        endDate: "Feb ,2024",
        short_desc:
            "Face Recognition System is a comprehensive solution featuring a mobile application for facial recognition-based student attendance tracking and a dashboard website for management to monitor and export detailed check-in, status, and check-out data.",
        description: `
            KIT Point Management System  is an internship reporting system designed for students in KIT to log their hours, track their performance, and access internship information, while enabling administrators to monitor student activities during their internships.
          
            This application was created as an internal project during my internship, where I was engaged as a Frontend developer. I've developed several features for KPMS and am currently in
            the process of migrating the system to a new technology to
            enhance its functionality and performance.
            
           
        `,
        imageUrl: "/projects/facerecognition/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Nest Js",
                icon: Technologies.nestjs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.typescript,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            },
            {
                name: "Nuxt Js",
                icon: Technologies.nuxtjs,
            },
            {
                name: "Tailwind CSS",
                icon: Technologies.tailwindcss,
            }
        ],

        screenshots: [
            "/projects/facerecognition/pic1.jpg",
            "/projects/facerecognition/pic2.jpg",
            "/projects/facerecognition/pic3.jpg",
            "/projects/facerecognition/pic4.jpg",
            "/projects/facerecognition/pic5.jpg",
            "/projects/facerecognition/pic6.jpg",
            "/projects/facerecognition/pic7.jpg",
            "/projects/facerecognition/pic8.jpg",
            "/projects/facerecognition/pic9.jpg",
            "/projects/facerecognition/pic10.jpg",
        ],
    },

    // 03 kirirom institute of technology
    {
        id: 3,
        code: "03",
        title: "Institution Website",
        role: "Front-End Developer",
        startDate: "Feb ,2024",
        endDate: "Jun ,2024",
        short_desc:
            "This project aims to create a dynamic , user-friendly, and informative platform that reflects the university's values and offerings. ",
        description: `
        Shuttle Bus is designed to simplify transportation for students and staff, offering a booking system for shuttle services between locations, alongside administrative tools for efficient transportation schedule management.

        This application was created as an internal project during my internship, where I was engaged as a Frontend developer. Together with my team, I was involved in the maintenance of the system, focusing on enhancing and migrating both the user and admin interfaces to be more user-friendly and efficient. In addition to these improvements, we were tasked with integrating new features to meet evolving requirements, showcasing our collective effort to refine and advance the system's capabilities.
           
        `,
        imageUrl: "/projects/kiriromInstituteOfTechnology/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",

        // technologies: [
        //     Technologies.nextjs,
        //     Technologies.tailwindcss,
        //     Technologies.typescript,
        // ],
        technologies: [
            {
                name: "ReactJS",
                icon: Technologies.reactjs,
            },
            {
                name: "Tailwind CSS",
                icon: Technologies.tailwindcss,
            }
        ],

        screenshots: [
            "/projects/kiriromInstituteOfTechnology/pic1.png",
            "/projects/kiriromInstituteOfTechnology/pic2.png",
            "/projects/kiriromInstituteOfTechnology/pic3.png",
            "/projects/kiriromInstituteOfTechnology/pic4.png",
            "/projects/kiriromInstituteOfTechnology/pic5.png",
            "/projects/kiriromInstituteOfTechnology/pic6.png",
            "/projects/kiriromInstituteOfTechnology/pic7.png",
            "/projects/kiriromInstituteOfTechnology/pic8.png",
            "/projects/kiriromInstituteOfTechnology/pic9.png",
            "/projects/kiriromInstituteOfTechnology/pic10.png",
            "/projects/kiriromInstituteOfTechnology/pic11.png",
            "/projects/kiriromInstituteOfTechnology/pic12.png",
            "/projects/kiriromInstituteOfTechnology/pic13.png",
            "/projects/kiriromInstituteOfTechnology/pic14.png",
            "/projects/kiriromInstituteOfTechnology/pic15.png",
            "/projects/kiriromInstituteOfTechnology/pic16.png",
            "/projects/kiriromInstituteOfTechnology/pic17.png",
            "/projects/kiriromInstituteOfTechnology/pic18.png",
            "/projects/kiriromInstituteOfTechnology/pic19.png",
            "/projects/kiriromInstituteOfTechnology/pic20.png",
            "/projects/kiriromInstituteOfTechnology/pic21.png",
            "/projects/kiriromInstituteOfTechnology/pic22.png",
            "/projects/kiriromInstituteOfTechnology/pic23.png",
            "/projects/kiriromInstituteOfTechnology/pic24.png",
            "/projects/kiriromInstituteOfTechnology/pic25.png",
            "/projects/kiriromInstituteOfTechnology/pic26.png",
            "/projects/kiriromInstituteOfTechnology/pic27.png",
            "/projects/kiriromInstituteOfTechnology/pic28.png",
            "/projects/kiriromInstituteOfTechnology/pic29.png",
            "/projects/kiriromInstituteOfTechnology/pic30.png"

        ],
    },

    // 04 stock inventory management :zippy BackEnd
    {
        id: 4,
        code: "04",
        title: "Stock Inventory Management",
        role: "Back-End Developer",
        startDate: "Apr ,2024",
        endDate: "Jun ,2024",
        short_desc:
            "The inventory product system and order management system was designed for a start-up company to efficiently manage product listings, track real-time stock levels, and handle order processing. The system streamlines operations, from managing inventory data to processing orders, enhancing the company's ability to track stock, fulfill customer requests, and scale for future growth.",
        description: `
        I developed a comprehensive inventory product system and order management system for a start-up company. The system was designed to efficiently manage product listings, track stock levels in real time, and handle incoming orders. It also facilitated seamless order processing, from initial customer requests to final delivery. This project involved coding back-end APIs, managing relational database structures for inventory and order data, and ensuring system scalability to support future growth. The solution helped streamline the company's operations, making inventory tracking and order fulfillment more efficient and user-friendly.
            `,
        imageUrl: "/projects/zippyAsBE/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Nest Js",
                icon: Technologies.nestjs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            }
        ],



        screenshots: [
        ],
    },

    // 05 stock inventory management :zippy Frontend
    {
        id: 5,
        code: "05",
        title: "Stock Inventory Management",
        role: "Front-End Developer",
        startDate: "Oct ,2024",
        endDate: "Jan ,2025",
        short_desc:
            "The inventory product system and order management system was designed for a start-up company to efficiently manage product listings, track real-time stock levels, and handle order processing. The system streamlines operations, from managing inventory data to processing orders, enhancing the company's ability to track stock, fulfill customer requests, and scale for future growth.",
        description: `
            Maintain and develop the existing system, add new features, and improve some UI.
            `,
        imageUrl: "/projects/zippyAsFE/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Vue Js",
                icon: Technologies.vuejs,
            },
            {
                name: "Tailwind CSS",
                icon: Technologies.tailwindcss
            }
        ],



        screenshots: [
        ],
    },

    // 06 RokTenh E-commerce Platform
    {
        id: 6,
        code: "06",
        title: "RokTenh E-commerce Platform",
        role: "Front-End Developer",
        startDate: "Jan ,2025",
        endDate: "April ,2025",
        short_desc:
            "RokTenh is a comprehensive e-commerce platform designed to facilitate the buying and selling of products and services. It offers a user-friendly interface for both buyers and sellers, enabling seamless transactions and efficient management of product listings.",
        description: `
            Intergrate API to the existing system, add new features, and improve some UI.
            `,
        imageUrl: "/projects/rokTenh/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Nuxt Js",
                icon: Technologies.nuxtjs,
            },
            {
                name: "Tailwind CSS",
                icon: Technologies.tailwindcss
            }
        ],



        screenshots: [
        ],
    },

    // 07 E-Commerce Platform AI Bootcamp
    {
        id: 7,
        code: "07",
        title: "AI Bootcamp E-commerce Platform",
        role: "Back-End Developer",
        startDate: "Nov ,2024",
        endDate: "Feb ,2025",
        short_desc:
            "URBAN is a comprehensive e-commerce mobile application designed to facilitate the buying of clothing and accessories. It allows users to scan images to search for similar products",
        description: `
                Developed system APIs for an eCommerce mobile application and stock inventory management. 
                Responsible for coding backend logic using Nest Js and managing the PostgreSQL database with Prisma ORM. Implemented SMS OTP functionality using the PlasGate service. Managed server deployment of the APIs on AWS and handled project version control using GitHub.
                `,
        imageUrl: "/projects/bootcamp/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Nest Js",
                icon: Technologies.nestjs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            }
        ],



        screenshots: [
        ],
    },

    // 08 self learning : ASP.NET Core
    {
        id: 8,
        code: "08",
        title: "Notes Application",
        role: "Full-Stack Developer",
        startDate: "09, April ,2025",
        endDate: "12, April ,2025",
        short_desc:
            `
            Notes Application is a project developed using ASP.NET Core and Vue.js.
            This project was developed for self-learning purposes to enhance skills in backend development with ASP.NET Core and frontend development with Vue.js. 
            It includes features such as CRUD operations for managing notes, filtering, and sorting, as well as API integration for seamless data management.
            `,
        description: `
            This project was developed for self-learning purposes to enhance skills in backend development with ASP.NET Core and frontend development with Vue.js. 
            It includes features such as CRUD operations for managing notes, filtering, and sorting, as well as API integration for seamless data management.
         `,
        imageUrl: "/projects/noteApplicationDotNet/poster.png",
        gitHubRepo: "https://github.com/Seanghor/note-application-crud",
        demo: "",
        technologies: [
            {
                name: "ASP.NET Core",
                icon: Technologies?.dotNetCore,
            },
            {
                name: "SQL Server",
                icon: Technologies?.sqlServer,
            },
            {
                name: "Dapper ORM",
                icon: Technologies?.dapper,
            },
            {
                name: "Vue Js",
                icon: Technologies.vuejs,
            }
        ],
        screenshots: [],
    },

    // 09 self learning : avatar cineplex
    {
        id: 9,
        code: "09",
        title: "Avatar Cineplex",
        role: "Full-Stack Developer",
        startDate: "none",
        endDate: "none",
        short_desc:
            "Avatar Cineplex is an online movie booking web application that allows users to easily browse movies, view showtimes, select seats, and book tickets securely from home. Designed for convenience, the platform ensures a seamless booking experience and handles high traffic efficiently.",
        description: `
        Avatar Cineplex  is an online movie booking web application that allows users to book movie tickets from the comfort of their homes. The project aims to provide users with a simple and convenient way to book movie tickets online, without the need to physically visit a movie theater or stand in long queues.

        The application will feature a user-friendly interface that will enable users to browse and select movies, view showtimes, select seats, and make payments securely. The system will be designed to handle a large volume of traffic, ensuring that users can book tickets quickly and efficiently.
         `,
        imageUrl: "/projects/avatarCineplex/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Nest Js",
                icon: Technologies.nestjs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            },
            {
                name: "React Js",
                icon: Technologies.reactjs,
            },
            {
                name: "AWS EC2",
                icon: Technologies.awsEc2,
            },
        ],



        screenshots: [
            "/projects/avatarCineplex/pic1.png",
            "/projects/avatarCineplex/pic2.png",
            "/projects/avatarCineplex/pic3.png",
            "/projects/avatarCineplex/pic4.png",
            "/projects/avatarCineplex/pic5.png",
            "/projects/avatarCineplex/pic6.png",
            "/projects/avatarCineplex/pic7.png",
            "/projects/avatarCineplex/pic8.png",
            "/projects/avatarCineplex/pic9.png",
            "/projects/avatarCineplex/pic10.png",
            "/projects/avatarCineplex/pic11.png",
            "/projects/avatarCineplex/pic12.png",
            "/projects/avatarCineplex/pic13.png",
            "/projects/avatarCineplex/pic14.png",
            "/projects/avatarCineplex/pic15.png",
            "/projects/avatarCineplex/pic16.png",
            "/projects/avatarCineplex/pic17.png",
            "/projects/avatarCineplex/pic18.png",
            "/projects/avatarCineplex/pic19.png",
            "/projects/avatarCineplex/pic20.png",
        ],
    },

    // 10 school management system
    {
        id: 10,
        code: "10",
        title: "School Management System",
        role: "Back-End Developer",
        startDate: "Nov, 2022",
        endDate: "Feb, 2023",
        short_desc:
            "School Management System is a training project developed by a team to manage and control data for students, teachers, staff, fees, exams, results, and attendance, offering a comprehensive solution for school administration.",
        description: `
        Avatar Cineplex  is an online movie booking web application that allows users to book movie tickets from the comfort of their homes. The project aims to provide users with a simple and convenient way to book movie tickets online, without the need to physically visit a movie theater or stand in long queues.

        The application will feature a user-friendly interface that will enable users to browse and select movies, view showtimes, select seats, and make payments securely. The system will be designed to handle a large volume of traffic, ensuring that users can book tickets quickly and efficiently.
         `,
        imageUrl: "/projects/sms/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Node Js",
                icon: Technologies.nodejs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            }
        ],



        screenshots: [
            "/projects/avatarCineplex/pic1.jpg",
            "/projects/avatarCineplex/pic2.jpg",
            "/projects/avatarCineplex/pic3.jpg",
            "/projects/avatarCineplex/pic4.jpg",
            "/projects/avatarCineplex/pic5.jpg",
            "/projects/avatarCineplex/pic6.jpg",
            "/projects/avatarCineplex/pic7.jpg",
            "/projects/avatarCineplex/pic8.jpg",
        ],
    },

    // 11 self learning : KITCHI shopping product
    {
        id: 11,
        code: "11",
        title: "KITCHI Shopping E-commerce",
        role: "Full-Stack Developer",
        startDate: "none",
        endDate: "none",
        short_desc:
            "Avatar Cineplex is an online movie booking web application that allows users to easily browse movies, view showtimes, select seats, and book tickets securely from home. Designed for convenience, the platform ensures a seamless booking experience and handles high traffic efficiently.",
        description: `
        Avatar Cineplex  is an online movie booking web application that allows users to book movie tickets from the comfort of their homes. The project aims to provide users with a simple and convenient way to book movie tickets online, without the need to physically visit a movie theater or stand in long queues.

        The application will feature a user-friendly interface that will enable users to browse and select movies, view showtimes, select seats, and make payments securely. The system will be designed to handle a large volume of traffic, ensuring that users can book tickets quickly and efficiently.
         `,
        imageUrl: "/projects/kitchi/poster.png",
        gitHubRepo: "https://github.com/Seanghor",
        demo: "",
        technologies: [
            {
                name: "Node Js",
                icon: Technologies.nodejs,
            },
            {
                name: "Postgre SQL",
                icon: Technologies.postgresql,
            },
            {
                name: "React Js",
                icon: Technologies.reactjs,
            },
            {
                name: "Prisma ORM",
                icon: Technologies.prisma,
            }
        ],

        screenshots: [
            "/projects/kitchi/pic1.png",
            "/projects/kitchi/pic2.png",
            "/projects/kitchi/pic3.png",
            "/projects/kitchi/pic4.png",
            "/projects/kitchi/pic5.png",
            "/projects/kitchi/pic6.png",
            "/projects/kitchi/pic7.png",
            "/projects/kitchi/pic8.png",
            "/projects/kitchi/pic9.png",
            "/projects/kitchi/pic10.png",
            "/projects/kitchi/pic11.png",
            "/projects/kitchi/pic12.png"
        ],
    },
];
