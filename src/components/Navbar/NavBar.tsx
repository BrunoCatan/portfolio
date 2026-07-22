import { useState } from "react"
import scrollToElement from "scroll-to-element"
import { FiMenu, FiX } from "react-icons/fi"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute("href")
    if (targetId) {
      scrollToElement(targetId, {
        offset: 0,
        ease: "out-quint",
        duration: 800,
      })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "Skills", href: "#Skills" },
    { label: "Projetos", href: "#MyProjects" },
    { label: "Contato", href: "#Contact" },
  ]

  return (
    <div id="top">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-md border-b border-accent/20 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 items-center mx-auto">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleClick}
                    className="text-text-light hover:text-accent-light font-medium transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX size={24} className="text-accent" />
              ) : (
                <FiMenu size={24} className="text-text-light" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-slideDown">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleClick}
                      className="text-text-light hover:text-accent-light font-medium block transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
