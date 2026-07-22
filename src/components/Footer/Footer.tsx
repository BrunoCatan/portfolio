import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/brunocatan/",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: BsWhatsapp,
      href: "https://wa.me/+5517992817472",
      color: "hover:text-green-400",
    },
    {
      name: "Email",
      icon: AiFillMail,
      href: "mailto:bruno@cortextechnology.com.br",
      color: "hover:text-red-400",
    },
    {
      name: "GitHub",
      icon: BsGithub,
      href: "https://github.com/brunocatan",
      color: "hover:text-gray-300",
    },
  ]

  return (
    <footer className="bg-secondary border-t border-accent/20" id="Contact">
      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      {/* Main Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12 animate-slideUp">
            <h3 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Estou sempre disponível para novos projetos e oportunidades. Não
              hesite em entrar em contato!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-slideUp">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 md:px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent rounded-lg transition-all duration-300"
                >
                  <Icon
                    className={`text-xl text-accent-light ${social.color} transition-colors`}
                  />
                  <span className="text-text-light font-medium hidden sm:inline">
                    {social.name}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-accent/20 mb-8"></div>

          {/* Footer Info */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-text-muted text-sm">
            <p>© {currentYear} Bruno Catan. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0">
              Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
