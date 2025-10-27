import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Product-Page",
      description:
        "Product Page is a modern, responsive web application showcasing a single product with interactive features. Built with React and Tailwind CSS, it provides a seamless shopping experience with elegant design and smooth animations.",
      image: "/images/WhatsApp Image 2025-07-08 at 19.49.07_7cf10fbc.jpg",
      tech: ["Next.js"],
      liveUrl: "https://product-page-bice-two.vercel.app/",
      githubUrl: "https://github.com/ELAZBAWY/Product_Page",
    },
    {
      title: "BurgerBlaze",
      description:
        "Burger Blaze is a modern, interactive burger ordering web application built with React and MUI (Material UI). It allows users to browse menu items, customize orders, and manage their shopping cart with an intuitive UI and smooth animations.",
      image: "/images/1761245763773.jpeg",
      tech: ["Next.js", "MUI", "Firebase", "Tailwind"],
      liveUrl: "https://burgerblaze.vercel.app/",
      githubUrl: "https://github.com/ELAZBAWY/Resturant",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A professional and responsive landing page template designed for business solutions and corporate services Built using clean HTML, CSS, and vanilla JavaScript, offering a sleek and modern interface with easy navigation.",
      image: "/images/Dashboard.png",
      tech: ["HTML", "CSS"],
      liveUrl: "https://elazbawy.github.io/Dashboaed/",
      githubUrl: "https://github.com/ELAZBAWY/Dashboaed?tab=readme-ov-file",
    },
    {
      title: "Amazon",
      description:
        "Amazon Clone is a full-stack e-commerce platform built with **React JS, Firebase, Stripe, Tailwind CSS, and Material-UI**. It replicates core Amazon functionalities with a responsive UI and seamless shopping experience, designed for performance, scalability, and easy customization.",
      image: "/images/1753906016253.jpeg",
      tech: ["React.js", "Tailwind", "Firebase"],
      liveUrl: "https://amazon-rouge-xi.vercel.app/",
      githubUrl: "https://github.com/ELAZBAWY/Amazon?tab=readme-ov-file",
    },
    {
      title: "shramp-zone",
      description:
        "Shramp Zone is a web-based restaurant platform designed to simulate an online food ordering experience. Users can browse a rich menu, add items to their cart, and manage their orders smoothly. The app focuses on user experience, speed, and clean design to reflect the brand of a high-end seafood restaurant.",
      image: "/images/1753762061336.jpeg",
      tech: ["React.js", "Tailwind"],
      liveUrl: "https://shramp-zone.vercel.app/",
      githubUrl: "https://github.com/ELAZBAWY/-shramp-zone",
    },
    {
      title: "Skills",
      description:
        "A responsive and modern business landing page built with HTML, CSS, and JavaScript Designed to showcase a company's services with a clean and professional layout",
      image: "/images/Skills.png",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://elazbawy.github.io/Skills/",
      githubUrl: "https://github.com/ELAZBAWY/Skills?tab=readme-ov-file",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-yellow-500/20 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:hover:shadow-yellow-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-yellow-400/20 dark:to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Code className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-yellow-400 dark:group-hover:to-yellow-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-yellow-600 text-white dark:text-black rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-yellow-500/30 rounded-lg hover:border-gray-900 dark:hover:border-yellow-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-pink-400/0 dark:from-yellow-400/0 dark:via-yellow-500/0 dark:to-yellow-600/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 dark:group-hover:from-yellow-400/5 dark:group-hover:via-yellow-500/5 dark:group-hover:to-yellow-600/5 pointer-events-none transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
