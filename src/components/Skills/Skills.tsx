const skills = [
  {
    name: "HTML 5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    name: "CSS 3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Framework",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "CSS",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "CSS",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "Github",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "Tools",
  },
]

export function Skills() {
  const categories = ["Frontend", "Framework", "CSS", "Tools"]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/50" id="Skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <p className="text-accent-light font-dm font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
            Competências
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-text-light mb-4">
            Minhas <span className="text-accent">Stacks</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Tecnologias e ferramentas com as quais trabalho para criar
            experiências web excepcionais
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="animate-slideUp">
              <h3 className="text-xl md:text-2xl font-bold text-accent-light mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-accent rounded-full"></span>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-secondary/50 hover:bg-secondary border border-accent/20 hover:border-accent/50 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:scale-105"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 md:w-16 h-12 md:h-16 mb-3 transition-transform group-hover:scale-110"
                      />
                      <p className="text-sm md:text-base font-medium text-text-light group-hover:text-accent-light transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
