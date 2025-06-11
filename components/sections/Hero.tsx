"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, TrendingUp, Globe, Droplets, Shield, Leaf } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { Badge } from "@/components/ui/badge"

interface HeroProps {
  isVisible: boolean
}

export function Hero({ isVisible }: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const impactStats = [
    { number: "10,000+", label: "Farmers Empowered", icon: Users },
    { number: "30%", label: "Average Yield Increase", icon: TrendingUp },
    { number: "5", label: "Countries Served", icon: Globe },
    { number: "25%", label: "Input Cost Reduction", icon: Droplets },
  ]

  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-20 bg-gradient-to-b from-white via-[hsl(var(--green-50))] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(var(--green-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                
                <br />
                Transforming Agriculture with{" "}
                <span className="text-[hsl(var(--green-600))]">Smart Technology</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering farmers across Tanzania with AI-driven tools for sustainable and profitable farming.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="border-2 border-[hsl(var(--green-500))] text-[hsl(var(--green-700))] hover:bg-[hsl(var(--green-50))] px-6 py-3 text-base rounded-xl transition-all duration-300 text-center"
              >
                Learn More
              </a>
              <a
                href="https://ecofyapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white px-6 py-3 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between gap-4 pt-8">
              {[
                { label: "Farmers", value: "10,000+" },
                { label: "Yield Increase", value: "35%" },
                { label: "Regions", value: "12" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/90 px-3 py-1.5 rounded-lg border border-[hsl(var(--green-100))] hover:border-[hsl(var(--green-200))] transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-[hsl(var(--green-700))]">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            ref={parallaxRef}
            className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--green-500))] to-[hsl(var(--green-400))] opacity-20"></div>
                <img
                  src="/images/1720087130961.png"
                  alt="Farmer using digital agriculture technology in Africa"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 