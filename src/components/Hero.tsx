import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500"></div>

      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-yellow-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center perspective-1000">
          <div className="relative group" style={{ perspective: "1000px" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-yellow-400 dark:via-yellow-500 dark:to-yellow-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <div className="absolute -inset-8 opacity-50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 dark:bg-yellow-400 rounded-full animate-orbit-1 shadow-lg shadow-blue-500/50 dark:shadow-yellow-400/50"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-purple-500 dark:bg-yellow-500 rounded-full animate-orbit-2 shadow-lg shadow-purple-500/50 dark:shadow-yellow-500/50"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 dark:bg-yellow-600 rounded-full animate-orbit-3 shadow-lg shadow-pink-500/50 dark:shadow-yellow-600/50"></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-blue-400 dark:bg-yellow-300 rounded-full animate-orbit-4 shadow-lg shadow-blue-400/50 dark:shadow-yellow-300/50"></div>
            </div>

            <div className="absolute -inset-6 opacity-60">
              <Code2 className="absolute top-0 right-0 w-8 h-8 text-blue-600 dark:text-yellow-400 animate-float-1" />
              <Sparkles className="absolute bottom-0 left-0 w-7 h-7 text-purple-600 dark:text-yellow-500 animate-float-2" />
              <Zap className="absolute top-1/2 left-0 w-6 h-6 text-pink-600 dark:text-yellow-300 animate-float-3" />
            </div>
            <div
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-yellow-400 shadow-2xl animate-3d-rotate hover:scale-150 transform transition-transform duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-yellow-400/20 dark:to-yellow-600/20 animate-shine"></div>
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-yellow-900 dark:via-yellow-700 dark:to-yellow-500 flex items-center justify-center text-6xl font-bold text-white dark:text-black animate-gradient relative z-10">
                <img src="/images/Think.png" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent dark:via-yellow-300/30 animate-scan"></div>
            </div>

            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 dark:border-yellow-400/30 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border border-dotted border-purple-400/40 dark:border-yellow-500/40 animate-spin-reverse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-yellow-400 dark:via-yellow-500 dark:to-yellow-400 bg-clip-text text-transparent animate-gradient">
            Ahmed Alazzbaawy
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-light">
          Frontend Developer
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern technologies.
          Passionate about clean code, innovative solutions, and pushing
          boundaries.
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/ELAZBAWY"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alazzbaawy-58868726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="ahmed.elazbawy200@gmail.com"
            className="group relative p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-yellow-400 transition-colors" />
          </a>
        </div>

        <a href="#about" className="inline-block animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-yellow-400" />
        </a>
        <div className="flex justify-center gap-7 mt-8 flex-wrap">
          <a
            href="/Resume.pdf"
            download
            className="text-[18px] font-bold text-[#0070c9] transition duration-500 px-4 py-2 rounded-full flex items-center gap-2 shadow hover:shadow-[0_0_20px_#0070c9] border border-transparent hover:border-[#0070c9]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 9h12a2 2 0 002-2V7a2 2 0 00-2-2h-3.5a1.5 1.5 0 01-1.5-1.5V3h-4v.5A1.5 1.5 0 019.5 5H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Download Resume
          </a>

          <a
            href="https://wa.me/201555989244"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-bold transition duration-500 px-4 py-2 rounded-full flex items-center gap-2 border border-[#1e2939] text-[#1e2939] hover:bg-[#1e2939] hover:text-white hover:shadow-[0_0_30px_#1e2939] dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black dark:hover:shadow-[0_0_30px_#FFD700]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5A6.75 6.75 0 0113.5 14.25h.75v2.25a.75.75 0 001.5 0v-2.25h1.5a.75.75 0 000-1.5h-1.5V9a.75.75 0 00-1.5 0v3.75H9A6.75 6.75 0 012.25 6H3a.75.75 0 000-1.5H1.5a.75.75 0 00-.75.75v3A.75.75 0 001.5 9h1.5A6.75 6.75 0 016.75 7.5z"
              />
            </svg>
            Contact With Me
          </a>
        </div>
      </div>
    </section>
  );
}
