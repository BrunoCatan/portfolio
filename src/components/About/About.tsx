import img from "../../assets/Image01.jpg"
import { FiDownload, FiArrowRight } from "react-icons/fi"

export function About() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="animate-slideUp">
            <div className="mb-6">
              <p className="text-accent-light font-dm font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
                Bem-vindo ao meu portfólio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-text-light mb-4 leading-tight">
                Bruno <span className="text-accent">Catan</span>
              </h1>
              <p className="text-lg md:text-xl text-accent-light font-dm font-semibold mb-4">
                Desenvolvedor Front-end
              </p>
            </div>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-lg">
              Transformo ideias em experiências digitais impactantes. Desenvolvo
              interfaces modernas e performáticas com React e TypeScript, sempre
              com foco em acessibilidade e experiência do usuário.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#MyProjects"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
                <FiArrowRight size={20} />
              </a>
              <a
                href="/BrunoCatanDev.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FiDownload size={20} />
                Baixar CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slideUp flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-2xl blur-2xl"></div>
              <img
                src={img}
                alt="Bruno Catan"
                className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl hover:shadow-accent/20 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-accent/20">
          {[
            { number: "50+", label: "Projetos" },
            { number: "30+", label: "Clientes" },
            { number: "5+", label: "Anos" },
            { number: "100%", label: "Dedicação" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-2xl md:text-3xl font-bold text-accent group-hover:text-accent-light transition-colors">
                {stat.number}
              </p>
              <p className="text-text-muted text-sm md:text-base mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
