const pathwayData = {
  Backend_Developer: [
    {
      title: "Stage 1: Foundations",
      items: [
        {
          label: "Node.js",
          url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
          details:
            "Learn server-side JavaScript, event loop, and asynchronous programming.",
        },
        {
          label: "Python",
          url: "https://docs.python.org/3/tutorial/",
          details:
            "Understand Python basics, OOP, and backend frameworks like Django/Flask.",
        },
        {
          label: "Databases",
          url: "https://www.geeksforgeeks.org/dbms/what-is-database/",
          details: "Learn SQL vs NoSQL, schema design, and CRUD operations.",
        },
      ],
    },
    {
      title: "Stage 2: Core Skills",
      items: [
        {
          label: "Express.js",
          url: "https://expressjs.com/en/starter/installing.html",
          details: "Routing, middleware, REST APIs, and error handling.",
        },
        {
          label: "Authentication",
          url: "https://jwt.io/introduction",
          details: "Implement secure login with JWT, OAuth, and sessions.",
        },
        {
          label: "API Design",
          url: "https://restfulapi.net/",
          details: "Best practices for RESTful APIs and versioning.",
        },
      ],
    },
    {
      title: "Stage 3: Advanced Topics",
      items: [
        {
          label: "Microservices",
          url: "https://microservices.io/",
          details: "Learn service decomposition, communication, and scaling.",
        },
        {
          label: "Caching",
          url: "https://redis.io/docs/",
          details: "Use Redis or Memcached to improve performance.",
        },
        {
          label: "Testing",
          url: "https://mochajs.org/",
          details: "Unit and integration testing for backend services.",
        },
      ],
    },
    {
      title: "Stage 4: Deployment & Scaling",
      items: [
        {
          label: "Docker",
          url: "https://docs.docker.com/get-started/",
          details: "Containerize applications for portability and scalability.",
        },
        {
          label: "CI/CD",
          url: "https://docs.github.com/en/actions",
          details:
            "Automate builds, tests, and deployments with GitHub Actions.",
        },
        {
          label: "Cloud Platforms",
          url: "https://aws.amazon.com/getting-started/",
          details: "Deploy apps on AWS, Azure, or GCP.",
        },
      ],
    },
  ],
  Full_Stack_Developer: [
    {
      title: "Stage 1: Foundations",
      items: [
        {
          label: "Frontend Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Front-End_Web_Developer",
          details: "HTML, CSS, JavaScript fundamentals.",
        },
        {
          label: "Backend Basics",
          url: "https://nodejs.org/en/docs/",
          details: "Learn server-side programming with Node.js or Python.",
        },
        {
          label: "Databases",
          url: "https://postgres.guide/docs/intro/",
          details: "Understand relational and non-relational databases.",
        },
      ],
    },
    {
      title: "Stage 2: Frameworks",
      items: [
        {
          label: "React",
          url: "https://react.dev/learn",
          details: "Component-based UI development.",
        },
        {
          label: "Express.js",
          url: "https://expressjs.com/",
          details: "Backend routing and middleware.",
        },
        {
          label: "GraphQL",
          url: "https://graphql.org/learn/",
          details: "Efficient API queries and schema design.",
        },
      ],
    },
    {
      title: "Stage 3: Integration",
      items: [
        {
          label: "REST APIs",
          url: "https://restfulapi.net/",
          details: "Connect frontend and backend with APIs.",
        },
        {
          label: "Authentication",
          url: "https://jwt.io/introduction",
          details: "Secure user sessions with JWT/OAuth.",
        },
        {
          label: "State Management",
          url: "https://redux.js.org/",
          details: "Manage complex frontend state with Redux.",
        },
      ],
    },
    {
      title: "Stage 4: Deployment",
      items: [
        {
          label: "Docker",
          url: "https://docs.docker.com/get-started/",
          details: "Containerize full stack apps.",
        },
        {
          label: "CI/CD",
          url: "https://circleci.com/docs/",
          details: "Automate testing and deployment pipelines.",
        },
        {
          label: "Cloud Hosting",
          url: "https://vercel.com/docs",
          details: "Deploy apps on Vercel, Netlify, or AWS.",
        },
      ],
    },
  ],
  Frontend_Developer: [
    {
      title: "Stage 1: Foundations",
      items: [
        {
          label: "HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          details: "Learn semantic tags, forms, accessibility, and SEO basics.",
        },
        {
          label: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          details:
            "Master layouts with Flexbox and Grid, responsive design, and animations.",
        },
        {
          label: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          details:
            "Understand ES6+, DOM manipulation, events, and modern JS features.",
        },
      ],
    },
    {
      title: "Stage 2: Core Skills",
      items: [
        {
          label: "Git & GitHub",
          url: "https://www.w3schools.com/git/git_intro.asp?remote=github",
          details:
            "Version control basics, branching, merging, and collaboration workflows.",
        },
        {
          label: "TypeScript",
          url: "https://www.typescriptlang.org/docs/",
          details: "Add static typing to JavaScript for scalable applications.",
        },
        {
          label: "Webpack",
          url: "https://webpack.js.org/",
          details: "Learn bundling, code splitting, and build optimization.",
        },
      ],
    },
    {
      title: "Stage 3: Frameworks",
      items: [
        {
          label: "React",
          url: "https://react.dev/learn",
          details: "Build component-based UIs with hooks, props, and state.",
        },
        {
          label: "Vue",
          url: "https://vuejs.org/guide/introduction.html",
          details: "Learn Vue’s reactivity system and template syntax.",
        },
        {
          label: "Angular",
          url: "https://angular.io/docs",
          details:
            "Understand Angular’s TypeScript-based framework and dependency injection.",
        },
      ],
    },
    {
      title: "Stage 4: Advanced Topics",
      items: [
        {
          label: "Redux",
          url: "https://redux.js.org/tutorials/fundamentals/part-1-overview",
          details: "Centralized state management for complex applications.",
        },
        {
          label: "GraphQL",
          url: "https://graphql.org/learn/",
          details: "Query APIs efficiently with GraphQL schemas and resolvers.",
        },
        {
          label: "Testing (Jest)",
          url: "https://jestjs.io/docs/getting-started",
          details: "Unit testing framework for JavaScript and React apps.",
        },
        {
          label: "Performance",
          url: "https://developer.mozilla.org/en-US/docs/Web/Performance",
          details:
            "Optimize loading speed, caching, and rendering performance.",
        },
      ],
    },
    {
      title: "Stage 5: UI/UX",
      items: [
        {
          label: "Accessibility (WCAG)",
          url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
          details: "Guidelines for making web content accessible to all users.",
        },
        {
          label: "Tailwind CSS",
          url: "https://tailwindcss.com/docs",
          details: "Utility-first CSS framework for rapid UI development.",
        },
        {
          label: "Material UI",
          url: "https://mui.com/material-ui/getting-started/",
          details: "React component library with ready-made UI elements.",
        },
      ],
    },
    {
      title: "Stage 6: Full-Stack Awareness",
      items: [
        {
          label: "Node.js + Express",
          url: "https://expressjs.com/en/starter/installing.html",
          details: "Server-side JavaScript with routing and middleware.",
        },
        {
          label: "MongoDB",
          url: "https://www.mongodb.com/docs/",
          details: "NoSQL database for flexible document storage.",
        },
        {
          label: "PostgreSQL",
          url: "https://www.postgresql.org/docs/",
          details: "Relational database with powerful SQL features.",
        },
        {
          label: "JWT",
          url: "https://jwt.io/introduction",
          details: "Token-based authentication for secure APIs.",
        },
      ],
    },
    {
      title: "Stage 7: Portfolio & Growth",
      items: [
        {
          label: "Portfolio Inspiration",
          url: "https://alvarotrigo.com/blog/web-developer-portfolio-examples/",
          details: "Examples of developer portfolios to inspire your own.",
        },
        {
          label: "Project Ideas",
          url: "https://www.bosscoderacademy.com/blog/frontend-projects-with-source-code",
          details:
            "Frontend project ideas with source code to practice skills.",
        },
        {
          label: "Open Source Contributions",
          url: "https://github.com/firstcontributions/first-contributions",
          details:
            "Step-by-step guide to contributing to open source projects.",
        },
      ],
    },
  ],
  DevOps_Engineer: [
    {
      title: "Stage 1: Foundations",
      items: [
        {
          label: "Linux",
          url: "https://ubuntu.com/tutorials/command-line-for-beginners",
          details:
            "Learn shell commands, scripting, and system administration.",
        },
        {
          label: "Networking",
          url: "https://www.cloudflare.com/learning/networking/what-is-networking/",
          details: "Understand TCP/IP, DNS, firewalls, and load balancers.",
        },
        {
          label: "Version Control",
          url: "https://git-scm.com/doc",
          details: "Master Git workflows for collaboration.",
        },
      ],
    },
    {
      title: "Stage 2: Core Tools",
      items: [
        {
          label: "Docker",
          url: "https://docs.docker.com/get-started/",
          details: "Containerization basics for applications.",
        },
        {
          label: "Kubernetes",
          url: "https://kubernetes.io/docs/home/",
          details: "Orchestrate containers at scale.",
        },
        {
          label: "Terraform",
          url: "https://developer.hashicorp.com/terraform/docs",
          details: "Infrastructure as Code for cloud provisioning.",
        },
      ],
    },
    {
      title: "Stage 3: CI/CD",
      items: [
        {
          label: "Jenkins",
          url: "https://www.jenkins.io/doc/",
          details: "Automate builds and deployments.",
        },
        {
          label: "GitHub Actions",
          url: "https://docs.github.com/en/actions",
          details: "Integrate CI/CD pipelines with GitHub.",
        },
        {
          label: "Monitoring",
          url: "https://prometheus.io/docs/introduction/overview/",
          details: "Track system health with Prometheus and Grafana.",
        },
      ],
    },
    {
      title: "Stage 4: Advanced Topics",
      items: [
        {
          label: "Cloud Platforms",
          url: "https://aws.amazon.com/getting-started/",
          details: "Deploy and manage infrastructure on AWS, Azure, GCP.",
        },
        {
          label: "Security",
          url: "https://owasp.org/www-project-top-ten/",
          details: "Learn DevSecOps practices and vulnerability management.",
        },
        {
          label: "Scalability",
          url: "https://12factor.net/",
          details:
            "Design scalable, resilient systems using 12-factor principles.",
        },
      ],
    },
  ],
};

export default pathwayData;