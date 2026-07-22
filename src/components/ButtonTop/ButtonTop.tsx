import { useState, useEffect } from "react"
import { BsArrowUpCircle } from "react-icons/bs"
import scrollToElement from "scroll-to-element"

export function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault()
    scrollToElement("#top", {
      offset: 0,
      ease: "out-quint",
      duration: 800,
    })
  }

  return (
    isVisible && (
      <a
        href="#top"
        onClick={handleClick}
        className="fixed bottom-8 right-8 bg-accent hover:bg-accent-light text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-slideUp z-40"
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <BsArrowUpCircle size={28} />
      </a>
    )
  )
}
