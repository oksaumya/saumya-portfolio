import { links } from "@/config";

export const personalData = {
  name: "Saumya Kumar",
  designation: "Full Stack and AI Developer",
  github: "https://github.com/oksaumya",
  linkedIn: "https://linkedin.com/in/oksaumya",
  facebook: "https://facebook.com/saumyakumar",
  leetcode: "https://leetcode.com/oksaumya",
  twitter: "https://twitter.com/oksaumya",
  codeforces: "https://codeforces.com/profile/oksaumya",
  resume: "https://drive.google.com/file/d/1ADTByWN_cH8zSuIWAWyif-lGWGRBIuCQ/view?usp=sharing",
} as const;

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working OCR VLM and vector databases",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Chat Secure: Web3-Authenticated Chat App",
    des: "This project is a decentralized, peer-to-peer (P2P) chat application featuring end-to-end encryption (E2E) and Web3-based authentication using Sign-In with Ethereum (SIWE).",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/oksaumya/chat_secure.git",
    sourceCode: "https://github.com/oksaumya/chat_secure.git",
  },
  {
    id: 2,
    title: "MindMesh – Collaborative Study Platform ",
    des: "Built and scaled a full-stack real-time study platform with video calls, collaborative tools, secure payments, and high-performance backend, improving productivity, learning efficiency, and reliability at scale.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/oksaumya/MindMesh.git",
    sourceCode: "https://github.com/oksaumya/MindMesh.git",
  },
  {
    id: 3,
    title: "ResQCart - Food Waste Prediction",
    des: "Developed an AI-driven food spoilage prediction and waste prevention system with predictive analytics, automated rescue workflows, and real-time dashboards to optimize pricing, inventory, and redistribution.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/oksaumya/ResQCart.git",
    sourceCode: "https://github.com/oksaumya/ResQCart.git",
  },
  {
    id: 4,
    title: "VeloRent - Car Rental Management System",
    des: "The traditional car rental process is often fragmented, leading to complex booking procedures, uncertainty about real-time vehicle availability, and significant manual overhead for businesses.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://velo-rent-delta.vercel.app/",
    sourceCode: "https://github.com/oksaumya/VeloRent.git",
  },
] as const;

export const testimonials = [
  {
    img: "/1713460068758.jpeg",
    quote: `I was tremendously impressed with Saumya's engagement, enthusiasm, and diligence on the KubeStellar UI/UX Design project in term 2 of 2024. The results were everything we hoped for, and have given us a clear plan to implement as the Kubestellar project matures. Saumya has remained engaged with the KubeStellar community, and in fact is now one of our project maintainers and mentors for the implementation of the design spec he built during the term. His technical expertise and willingness to learn and expand those skills make him a dynamic and vital member of the team. I can wholeheartedly recommend him for his skill, enthusiasm and the quality of his work.`,
    name: "Kevin Roche",
    title: "Engineer/Scientist at IBM Research and IBM Quantum Ambassador",
  },
  {
    img: "/1610567182553.jpeg",
    quote: `I had the pleasure of mentoring Saumya during the CNCF mentorship program, where he contributed as an intern to the creation of the KubeStellar Design System. With complete honesty, I can say that the level of commitment, dedication, and hard work Saumya brings to everything he does is truly exceptional. He consistently delivers high-quality results with remarkable attention to detail. Saumya also demonstrates a natural sense of leadership — he inspires the students around him to uphold high standards and elevates the team through his example. In the following term, we even had the opportunity to serve as co-mentors for a new group of students within the CNCF program, which further highlighted his professionalism, curiosity, and drive. Anyone who has Saumya on their team will be incredibly fortunate. He is a rising star, and I’m excited to witness all the future achievements I know he will accomplish`,
    name: "Andrea Velázquez Sánchez",
    title: "UX expert - UI Designer - Art Director",
  },
  {
    img: "/1754052151798.jpeg",
    quote: `I had the pleasure of working with Saumya on CNCF - KubeStellar: Design System Foundations (2025 Term 2). He impressed me with his clear thinking, technical skill, and steady, methodical approach to challenges—qualities not always common early in one’s career. Saumya’s understanding of cloud-native systems, distributed architectures, and design fundamentals helped the team move forward effectively, and his genuine enthusiasm made collaboration easy and enjoyable.`,
    name: "Mahi Monga",
    title: "AI Product Manager || WE’20 @Google || GHC’22 scholar  || GDSC Lead’22 || Ex @Google @Axis bank @Cashify @GFG @Redcliffe",
  },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Generative AI Intern - Kunishe Software Private Limited ",
    desc: "Developed PaddleOCR-based OCR solutions for invoice text extraction and field detection, built vector-based document matching using Qdrant for semantic search and intelligent classification, and implemented post-OCR pipelines with text normalization, fuzzy matching, and structured validation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mentor - Linux Foundation Mentorship",
    desc: "Mentored 5+ contributors to deliver 50+ WCAG 2.1 AA–compliant UI components for the KubeStellar Design System, led a Next.js documentation site with 3D Kubernetes visuals and API docs reducing integration support requests by 70%, and deployed Dockerized workloads on Oracle Cloud using Kubernetes and CI/CD enabling 5+ releases with 99.9% uptime.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mentee - Linux Foundation Mentorship",
    desc: "Architected a scalable design system with 25+ reusable UI components ensuring consistency across four platforms, optimized frontend interfaces across web apps, documentation, and CLI tooling to improve page load performance by 35%, enhanced documentation UX to increase contributor adoption by 50%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "SDE Intern - CNCF | KubeStellar (Sandbox Project ) ",
    desc: "Redesigned the dashboard UI with real-time cluster health and activity feeds to improve operational visibility by 40%, streamlined the installation workflow UI to cut onboarding time by 55% and reduce installation errors by 65%, and enhanced 15+ reusable components—including fullscreen toggles and status indicators—to accelerate feature delivery by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/oksaumya",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/oksaumya",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/oksaumya",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
