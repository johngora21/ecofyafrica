import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-[#008001] shadow-lg"
          : "bg-[#008001]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative bg-white p-1.5 rounded-lg">
                <Image
                  src="/images/ecofy-logo.png"
                  alt="Ecofy Logo"
                  width={40}
                  height={40}
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(32%)_sepia(99%)_saturate(1000%)_hue-rotate(118deg)_brightness(95%)]"
                />
              </div>
              <span className="text-2xl font-bold text-white">Ecofy Africa</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Home", "About", "Solutions", "Technology", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Technology" ? "#kit" : item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-white hover:text-white/80 transition-all duration-300 font-medium relative group text-base"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="https://ecofyapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#008001] hover:bg-white/90 px-4 py-1.5 rounded-lg transition-all duration-300 text-base font-medium"
            >
              Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 bg-[#008001] rounded-xl animate-slide-down">
            <div className="flex flex-col space-y-3 pt-4 px-4">
              {["Home", "About", "Solutions", "Technology", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Technology" ? "#kit" : item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className="text-white hover:text-white/80 transition-colors font-medium py-1.5 text-base"
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://ecofyapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#008001] hover:bg-white/90 shadow-lg w-full mt-3 rounded-lg text-center py-1.5 text-base font-medium"
              >
                Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 