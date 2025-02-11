import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,

    
    threejs,
    clerk,
    spring,
    linkedin,
    instagram,
    facebook,
    github,
    ayit,
    car,
    store,
    ui,weather
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "socials",
      title: "Socials",
    },
  ];
  
  const services = [
    {
      title: "UI Design",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
   
    
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Clerk Authentication",
      icon: clerk,
    },
    // {
    //   name: "Spring Boot",
    //   icon: spring,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
   
  ];
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aqib proved me wrong.",
      name: "Hassan Qasim",
      designation: "Software Engineering Student",
      company: "Karachi University",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Aqib does.",
      name: "Murtaza Hasan",
      designation: "Senior sales Representative",
      company: "Jumpace",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      testimonial:
        "After Aqib optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jawwad Nadeem",
      designation: "Software Engineering Student",
      company: "Karachi University",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  // const projects = [
  //   {
  //     name: "Car Hub",
  //     description:
  //       "Web-based platform that allows users to see car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "HeadlessUI",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: car,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "AYIT ",
  //     description:
  //       "Web application that enables users to do meetings instantly and can also be scheduled to specific time also you can share your screen change layouts and much more.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "streamApi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "Clerk",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: ayit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: car,
  //     source_code_link: "https://github.com/",
  //   },
  // ];
  const projects = [
    {
      name: "AYIT Zoom",
      description:
        "A powerful video conferencing web application that enables instant and scheduled meetings. It offers features like screen sharing, multiple layout options, and real-time collaboration for an enhanced virtual meeting experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "streamApi",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "pink-text-gradient",
        },
      ],
      image: ayit,
      source_code_link: "https://github.com/aqibyameen/ayit_zoom",
    },
    {
      name: "Stunning UI",
      description:
        "A beautifully designed web interface with smooth animations and modern aesthetics. Built using React and CSS, this project showcases an eye-catching design with an intuitive user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: ui, 
      source_code_link: "https://github.com/aqibyameen/stunning-ui",
    },
    {
      name: "Weather App",
      description:
        "A real-time weather forecasting app built with React and Tailwind CSS. It fetches live weather data using the Weather API and provides users with detailed insights, including temperature, humidity, and wind speed, in an intuitive UI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "weatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weather, 
      source_code_link: "https://github.com/aqibyameen/weather-app-react",
    },
    {
      name: "General Store Management",
      description:
        "A full-stack inventory and billing management system built with React and Spring Boot. It efficiently handles product management, billing history, and real-time updates using optimized data structures like HashMaps for fast lookups and ArrayLists for structured storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "data-structures",
          color: "pink-text-gradient",
        },
      ],
      image: store,
      source_code_link: "https://github.com/aqibyameen/Genereal_store_management_system",
    },
    {
      name: "Car Hub",
      description:
        "A sleek and user-friendly web platform that aggregates car rental services from various providers, offering users a seamless browsing and booking experience. It ensures efficient filtering, availability tracking, and price comparisons to enhance convenience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HeadlessUI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/aqibyameen/car_showcase",
    },
  ];
  
  
  const socialLinks=[
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/aqib-yamin-a82a94202/"
    },
    {
      name: "Instagram",
      icon: instagram,
      link: "https://www.instagram.com/_aqib_yameen_/"
    },
    {
      name: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/malikaqib.malikaqib.927"
    },
    {
      name: "Github",
      icon: github,
      link: "https://www.github.com/aqibyameen"
    },
  ]
  
  export { services,socialLinks, technologies, testimonials, projects };