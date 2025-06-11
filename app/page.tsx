"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Leaf,
  Smartphone,
  TrendingUp,
  Globe,
  Zap,
  BarChart3,
  Shield,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Target,
  Eye,
  Droplets,
  Activity,
  Satellite,
  MessageSquare,
  Building,
  Play,
  ChevronLeft,
  ChevronRight,
  Users,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Solutions } from "@/components/sections/Solutions"
import { JoinUs } from "@/components/sections/JoinUs"
import { Contact } from "@/components/sections/Contact"
import { EcofyKit } from "@/components/sections/EcofyKit"

export default function EcofyWebsite() {
  const [visibleSections, setVisibleSections] = useState(new Set())

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    solutions: useRef(null),
    kit: useRef(null),
    join: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (sectionId: string): boolean => visibleSections.has(sectionId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      {/* Hero Section - Introduction */}
      <div ref={sectionRefs.hero} id="hero" className="bg-gradient-to-b from-white to-gray-50">
        <Hero isVisible={isVisible("hero")} />
            </div>

      {/* About Section - Company story */}
      <div ref={sectionRefs.about} id="about" className="bg-gradient-to-b from-gray-50 to-white">
        <About isVisible={isVisible("about")} />
          </div>

      {/* Solutions Section - What we offer */}
      <div ref={sectionRefs.solutions} id="solutions" className="bg-gradient-to-b from-white to-gray-50">
        <Solutions isVisible={isVisible("solutions")} />
              </div>

      {/* Ecofy Kit Section - Our Technology */}
      <div ref={sectionRefs.kit} id="kit" className="bg-gradient-to-b from-gray-50 to-white">
        <EcofyKit isVisible={isVisible("kit")} />
              </div>

      {/* Join Us Section - Get involved */}
      <div ref={sectionRefs.join} id="join" className="bg-gradient-to-b from-white to-gray-50">
        <JoinUs isVisible={isVisible("join")} />
            </div>

      {/* Contact Section - Get in touch */}
      <div ref={sectionRefs.contact} id="contact" className="bg-gradient-to-b from-gray-50 to-white">
        <Contact isVisible={isVisible("contact")} />
          </div>

      <Footer />
    </div>
  )
}
