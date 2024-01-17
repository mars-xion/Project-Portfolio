//code for managing learning outcomes and projects

const designThinkingMethod = "blue-text-gradient";
const projectCatogrie = "green-text-gradient";
const TypeOfDelivary = "pink-text-gradient";

export const LAData = {
  jobs: [
    {
      expData: {
        title: "All",
        position: "All Projects",
        period: "Oct 2018 - present",
        details: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim fringilla dui ac mattis.",
          "Donec in sodales eros. Nulla fermentum, ante in venenatis pellentesque, justo odio viverra lorem, varius posuere erat tortor et magna.",
        ],
      },
    },
    {
      expData: {
        title: "LO1",
        position: "User interaction @analysis @advice",
        period: "Oct 2016 - May 2018",
        details: [
          "Analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. ",
          "Select a suitable design process to be able to advise on UX interventions based on a validated UX design.",
        ],
      },
    },
    {
      expData: {
        title: "LO2",
        position: "User interaction @execution @Validation",
        period: "Oct 2018 - present",
        details: [
          "Execute and evaluate the user experience of an interactive product.",
          "Document the development process for the stakeholders.",
        ],
      },
    },
    {
      expData: {
        title: "LO3",
        position: "Software design and realisation",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Create & design software with existing components or libraries using predetermined quality criteria and version control. ",
        ],
      },
    },
    {
      expData: {
        title: "LO4",
        position: "Future-oriented organisation",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Carry out a problem analysis and on that basis, determine the definitive problem and elaborate on this in a project plan.",
        ],
      },
    },
    {
      expData: {
        title: "LO5",
        position: "Investigative problem solving",
        period: "Mar 2016 - Oct 2016",
        details: [
          "formulate sub-questions pertaining to the primary question and answer these using relevant research methods. ",
          "Use the conclusions of the sub-questions to justify (design) choices.",
        ],
      },
    },
    {
      expData: {
        title: "LO6",
        position: "Personal leadership",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Methodically reflect on my professional identity and personal development.  ",
        ],
      },
    },
    {
      expData: {
        title: "LO7",
        position: "Goal-oriented interaction",
        period: "Mar 2016 - Oct 2016",
        details: [
          "communicate with different stakeholders and team members about the ICT assignment",
        ],
      },
    },
  ],
};

export const LAprojects = [
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Design trends and principles in 2023",
    image: "/src/assets/carrent.png",
    tags: [
      { name: "Empathize", color: designThinkingMethod },
      {
        name: "(Literature Study, Trend Analysis, Design Pattern Search)",
        color: TypeOfDelivary,
      },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Website selection process for portfolio testing",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Document Analysis, Product Review", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Website contribution to personal brand",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Literature Study, Concept", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Requirement list document",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      {
        name: "Literature study, Benchmarking, Requirement list, Moscow table",
        color: TypeOfDelivary,
      },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Mood Board",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Mood Board", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename:
      "The journalist Role, Values, Types and Challenges in modern reporting",
    image: "/src/assets/carrent.png",
    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "User requirements",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "User stories",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Analysis of Design Choices for Competitors",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "The User Guide",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Brainstorming",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Brainstorming", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Prepaid questions for the software team",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Qouestions", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Took pictures and videos",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Media", color: TypeOfDelivary },
      { name: "International week", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @analysis @advice",
    delivearlablename: "Summary of day 1",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Summary", color: TypeOfDelivary },
      { name: "International week", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Usability Test",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Usability Testing", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Results of Usability Testing",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Brand guide",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Brand guide", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Prototype",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Prototype", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Persona",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Persona", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Interview questions for Tom editor journalist chef",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Results of Usability Test",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "User interaction @execution @Validation",
    delivearlablename: "Video recording of team members",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Media", color: TypeOfDelivary },
      { name: "International week:", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "Sketches, Wireframes",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Sketches, Wireframes", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "Mock-ups",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Mock-ups", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "Prototype",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Prototype", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "GitHub repo",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Data storing", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "C4 model",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "C4 model", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "Sketches ",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Sketches, ", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "wireframes, ",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "wireframes, ", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "mock-ups",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "mock-ups", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "prototypes",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "prototypes", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "Web flow",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Web flow", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "coded the AI image generation",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "code", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Software design and realisation",
    delivearlablename: "createdd the front end code",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "code", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "Project plan",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "React courses",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Course", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "Expert interview",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Feedback", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "Project plan",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "Daily Standups",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Future-oriented organisation",
    delivearlablename: "Scheduled meeting with the software team ",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Schedule", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Project plan",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Challenges faced when creating a portfolio",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Different type of contents in a portfolio",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Coding document",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Usability Testing of 3 different websites",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Usability Testing", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Results of Usability Testing",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Website contribution to personal brand",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "How to test the website",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Literature Study", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Project plan",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: " User Stories",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: " User Stories", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Results of Usability Test",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Document", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Investigative problem solving",
    delivearlablename: "Presentation for the stakeholders on each sprint",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Presantion", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Feedback from teachers and peers",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Trello board",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Retrospective and Peer feedback",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Retrospective", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Weekly and daily plans",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Schedula", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Updated the CV and Cover Latter",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "CV and Cover Letter", color: TypeOfDelivary },
      { name: "Internship", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename:
      "Applied to internships throughout LinkedIn and Fontys portal",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: "Internship", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Meet with student plus\u201d How to apply successfully",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Workshop", color: TypeOfDelivary },
      { name: "Internship", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Meet with student plus\u201d Interview practice",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: "Interview Practice", color: TypeOfDelivary },
      { name: "Internship", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Joined Career Day on the 16 November",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Carrer Day", color: TypeOfDelivary },
      { name: "Internship", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "HTML segments workshop",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Workshop", color: TypeOfDelivary },
      { name: "WeyWeyWeb Malaga", color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename: "Other courses like 3D and LSH",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Weyweyweb", color: TypeOfDelivary },
      { name: "WeyWeyWeb Malaga", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Personal leadership",
    delivearlablename:
      "Attended different courses done by teachers over the semester",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: "Workshops", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename: "Feedback from teachers and peers",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Feedback", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename: "Feed pulse in Canvas",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Feedpulse", color: TypeOfDelivary },
      { name: "Portfolio", color: projectCatogrie },
    ],
  },
  {
    position: NaN,
    delivearlablename: NaN,
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Prototype", color: designThinkingMethod },
      { name: NaN, color: TypeOfDelivary },
      { name: NaN, color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename: "Retrospective and Peer feedback",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Test", color: designThinkingMethod },
      { name: "Retrospective ", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename: "Poster",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Empathize", color: designThinkingMethod },
      { name: "Poster", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename:
      "Meet with the software team\u201d share thought of the project",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Define", color: designThinkingMethod },
      { name: "Meeting", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
  {
    position: "Goal-oriented interaction",
    delivearlablename:
      "Meet with the software team\u201d Share progress and ideas",
    image: "/src/assets/carrent.png",

    tags: [
      { name: "Ideate", color: designThinkingMethod },
      { name: "Meeting", color: TypeOfDelivary },
      { name: "Journalist platform project", color: projectCatogrie },
    ],
  },
];
