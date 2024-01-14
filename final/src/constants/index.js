import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    path: ".#about",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    path: ".#testimonials",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "learning-outcomes",
    title: "LearningOutcomes",
    path: "/projects#learning-outcomes",
  },
  {
    id: "contact",
    title: "Contact",
    path: ".#contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const divisions = [
  {
    title: "Portfolio",
    icon: web,
  },
  {
    title: "Group Project",
    icon: mobile,
  },
  {
    title: "Out of Space",
    icon: backend,
  },
  {
    title: "DDW",
    icon: creator,
  },
  {
    title: "Malaga",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const testimonials = [
  {
    testimonial:
      "Mazoun is a good motivated student ! I have been teaching her for 1.5 years , and during the time she has proven herself constantly , aiming for outstanding all the time ! She shows a lot of interests in research and design, and delivers good work Good to see her growth and more confidence in these year I can see a lot of potential in her, and I think she will achieve a lot more in the future !",
    name: "Yuzhong Lin",
    designation: "Lecturer Media design",
    company: "Fontys Uni",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I am privileged to write in support of my dear student, Mazoun Al Habsi. Mazoun studied in my classroom of Media design subject group at Fontys School of ICT bachelor program, during which time I witnessed her tremendous growth and development. Mazoun demonstrated a genuine interest in the field, an open, inquiring mindset, and a broad skillset. Furthermore, I remember Mazoun as a student with a strong interest in the way we use technology to support and enable humans to achieve their goals as well as a drive for creativity and innovation. I recommend Mazoun to your internship program with absolute confidence",
    name: "Amer Jaganjac",
    designation: "Teacher of information and communication technology",
    company: "Fontys Uni",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Inspiring and motivating, that is what comes to mind if I describe Mazoun.Together we worked on the project “Fan loyalty program” in partnership with Team Liquid. We created a loyalty program. We made use of HTML, CSS, JavaScript, PHP and MySQL. Mazoun was our team leader in this project. It was always special to see how Mazoun got a group of people on board for her ideas, even when some people didn't seem to agree in the first place. She really brought everyone together, making use of everyone's personal strengths. Making clear to-do list and professional documents. Mazoun would be an amazing addition to any team.",
    name: "Megin van Herk",
    designation: "ICT & Media with AI",
    company: "Student",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, divisions, technologies, testimonials, projects };
