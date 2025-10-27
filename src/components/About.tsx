import { Code2, Palette, Rocket, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, user-centric interfaces with attention to detail.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and seamless user experience.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and modern solutions.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Front-End Developer with a strong focus on
              building responsive, user-friendly web applications. Skilled in
              HTML, CSS, JavaScript, React.js, and Next.js, I craft elegant and
              interactive interfaces that provide seamless digital experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in web development is driven by curiosity and
              continuous learning. I enjoy solving complex problems, optimizing
              performance, and delivering clean, maintainable code that brings
              ideas to life.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-yellow-600 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-yellow-500/20 shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    React / Next.js
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">95%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-yellow-600 w-[95%] rounded-full animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    HTML / CSS /Javascript
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">90%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-yellow-600 w-[90%] rounded-full animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    UI/UX Design
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">85%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-yellow-600 w-[85%] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-yellow-500/20 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 dark:from-yellow-400/0 dark:to-yellow-600/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 dark:group-hover:from-yellow-400/10 dark:group-hover:to-yellow-600/10 rounded-xl transition-all duration-300"></div>
              <div className="relative">
                <item.icon className="w-12 h-12 mb-4 text-gray-700 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
