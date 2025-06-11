import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--green-900))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative bg-white rounded-xl p-1">
                <Image
                  src="/images/ecofy-logo.png"
                  alt="Ecofy Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Ecofy Africa</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering 10,000+ smallholder farmers across Sub-Saharan Africa with AI-driven tools for climate-resilient and profitable farming.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                <Facebook className="w-4 h-4 text-[hsl(var(--green-900))]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                <Twitter className="w-4 h-4 text-[hsl(var(--green-900))]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                <Instagram className="w-4 h-4 text-[hsl(var(--green-900))]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                <Linkedin className="w-4 h-4 text-[hsl(var(--green-900))]" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {["Farm Intelligence", "Smart IoT Kit", "Market Intelligence", "Learning Platform", "Financial Services"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Our Impact", "Partnerships", "Careers", "News & Updates"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Documentation", "Contact Support", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2025 Ecofy. All rights reserved. | www.ecofy.co.tz
            </p>
            <div className="flex space-x-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 