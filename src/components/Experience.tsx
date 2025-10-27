import { Briefcase, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "DevWave",
      role: "Frontend Developer Trainee",
      period: "1 Month",
      description:
        "Completed an intensive one-month training program, gaining hands-on experience with React.js. Collaborated with a team to build the final project: an Amazon Clone.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Teamwork",
        "Github",
        "Git",
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "HTML",
    "React",
    "Next.js",
    "CSS",
    "netlify",
    "Github",
    "Git",
    "MUI"
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          Experience & Skills
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-gray-700 dark:text-yellow-400" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-yellow-500/20 hover:border-gray-900 dark:hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-yellow-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 dark:from-yellow-400/0 dark:to-yellow-600/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 dark:group-hover:from-yellow-400/5 dark:group-hover:to-yellow-600/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-yellow-400 dark:group-hover:to-yellow-600 group-hover:bg-clip-text transition-all duration-300">
                      {exp.role}
                    </h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="relative text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="relative flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Technical Skills
          </h3>

          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-yellow-500/20 shadow-xl">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-300 dark:border-yellow-500/30 hover:border-gray-900 dark:hover:border-yellow-400 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
