import { BsLink45Deg, BsGithub } from "react-icons/bs"
import rkt_web from "../../assets/rkt_web.jpeg"
import rkt_garage from "../../assets/rkt_garage.jpeg"

const projects = [
  {
    img: "https://raw.githubusercontent.com/BrunoCatan/CalculadoraDeConsumo/master/.github/Project.png",
    title: "Calculadora Consumo",
    description:
      "Projeto desenvolvido para facilitar a vida de quem não sabe como calcular o consumo de combustível do seu veículo.",
    deploy: "https://calculadora-de-consumo.vercel.app/",
    repo: "https://github.com/BrunoCatan/CalculadoraDeConsumo",
  },
  {
    img: "./.github/project.png",
    title: "Meu Portfólio",
    description:
      "Projeto desenvolvido para demonstrar um pouco mais dos meus projetos, um portfólio profissional.",
    deploy: "https://bruno.cortextechnology.com.br/",
    repo: "https://github.com/BrunoCatan/portifolio",
  },
  {
    img: rkt_web,
    title: "Rocket Website",
    description: "Projeto web para o Rocket Roleplay.",
    deploy: "https://rocketrp.com.br/",
    repo: "#",
  },
  {
    img: rkt_garage,
    title: "Rocket Garage",
    description:
      "O Rocket Garage é um script de garagem para seus players poder retirar seus veículos em game.",
    deploy:
      "https://media.discordapp.net/attachments/666981266008309770/1069048216873603112/project.png?ex=66a9823c&is=66a830bc&hm=ea2bca45db6b7701258f261ce0f7028fcf83638f08de3dc5f337e30a0f8081b7&=&format=webp&quality=lossless&width=1203&height=614",
    repo: "#",
  },
  {
    img: "https://raw.githubusercontent.com/BrunoCatan/secret_word/main/.github/project.png",
    title: "Secret Word",
    description:
      "Jogo de palavras, onde você tem que adivinhar a palavra de acordo com a dica.",
    deploy: "https://secret-word-tau.vercel.app/",
    repo: "https://github.com/BrunoCatan/secret_word",
  },
  {
    img: "https://raw.githubusercontent.com/BrunoCatan/pesquisador-github/main/.github/project.png",
    title: "Pesquisador Github",
    description:
      "Com ele você consegue pesquisar coisas dentro do GitHub, desde usuários a repositórios e muito mais.",
    deploy: "https://pesquisador-github.vercel.app/",
    repo: "https://github.com/BrunoCatan/pesquisador-github",
  },
]

export function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary border border-accent/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-text-light mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-text-muted mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent hover:text-primary text-accent-light font-semibold py-2 px-3 md:px-4 rounded-lg transition-all duration-300 text-sm md:text-base"
                  >
                    <BsLink45Deg size={18} />
                    Deploy
                  </a>
                  {project.repo !== "#" && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent hover:text-primary text-accent-light font-semibold py-2 px-3 md:px-4 rounded-lg transition-all duration-300 text-sm md:text-base"
                    >
                      <BsGithub size={18} />
                      Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center animate-slideUp">
          <a
            href="https://github.com/BrunoCatan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-primary font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-accent-light transition-all duration-300"
          >
            <BsGithub size={20} />
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
