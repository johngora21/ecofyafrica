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

export default function EcofyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [visibleSections, setVisibleSections] = useState(new Set())

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    solutions: useRef(null),
    impact: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const testimonials = [
    {
      name: "Amina Hassan",
      location: "Dodoma, Tanzania",
      image: "/images/farmer-mobile.png",
      quote:
        "Using Ecofy's mobile platform has transformed my maize farming. The real-time weather alerts and soil recommendations helped me increase my yield by 35% this season.",
      crop: "Maize & Sorghum",
      experience: "2 years with Ecofy",
    },
    {
      name: "Grace Wanjiku",
      location: "Nakuru, Kenya",
      image: "/images/farmer-harvest.png",
      quote:
        "The market intelligence feature connected me directly with buyers. I now sell my vegetables at 40% higher prices than before, and the mobile app works even with poor internet.",
      crop: "Mixed Vegetables",
      experience: "18 months with Ecofy",
    },
    {
      name: "Mama Consolata",
      location: "Mbeya, Tanzania",
      image: "/images/farmer-greenhouse.png",
      quote:
        "At 58, I thought technology wasn't for me. But Ecofy's simple interface and Swahili support helped me modernize my greenhouse farming. My income has doubled!",
      crop: "Greenhouse Tomatoes",
      experience: "1 year with Ecofy",
    },
  ]

  const impactStats = [
    { number: "10,000+", label: "Farmers Empowered", icon: Users },
    { number: "30%", label: "Average Yield Increase", icon: TrendingUp },
    { number: "5", label: "Countries Served", icon: Globe },
    { number: "25%", label: "Input Cost Reduction", icon: Droplets },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isVisible = (sectionId) => visibleSections.has(sectionId)

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation with Green */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-[hsl(var(--green-200))]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(var(--green-400))] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Ecofy</span>
                <p className="text-xs text-[hsl(var(--green-600))] font-medium">Smart Agriculture</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {["About", "Solutions", "Impact", "Technology", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[hsl(var(--green-700))] transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--green-500))] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5 rounded-xl btn-animate">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-[hsl(var(--green-50))] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-[hsl(var(--green-200))] bg-white/95 backdrop-blur-xl rounded-2xl animate-slide-down">
              <div className="flex flex-col space-y-4 pt-6 px-4">
                {["About", "Solutions", "Impact", "Technology", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[hsl(var(--green-700))] transition-colors font-medium py-2"
                  >
                    {item}
                  </Link>
                ))}
                <Button className="bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white shadow-lg w-full mt-4 rounded-xl">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Green */}
      <section ref={sectionRefs.hero} id="hero" className="pt-24 pb-20 px-6 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 lg:pr-8 ${isVisible("hero") ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Smart Climate Solutions for <span className="gradient-text">Sustainable Agriculture</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  Empowering 10,000+ smallholder farmers across Sub-Saharan Africa with AI-driven tools for
                  climate-resilient and profitable farming
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white shadow-xl hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg rounded-xl group btn-animate"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[hsl(var(--green-300))] hover:border-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-50))] text-gray-700 hover:text-[hsl(var(--green-700))] px-8 py-4 text-lg transition-all duration-300 rounded-xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {impactStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image with Context */}
            <div className={`relative ${isVisible("hero") ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-[hsl(var(--green-100))] hover-lift">
                  <Image
                    src="/images/farmer-mobile.png"
                    alt="Amina Hassan using Ecofy's mobile platform in her maize field in Dodoma, Tanzania"
                    width={600}
                    height={600}
                    className="rounded-2xl"
                  />
                  <div className="mt-6 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-200))]">
                    <p className="text-sm font-semibold text-[hsl(var(--green-800))] mb-1">Real Impact Story</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Amina Hassan</strong> from Dodoma, Tanzania, uses Ecofy's mobile platform to receive
                      real-time weather alerts and soil recommendations, increasing her maize yield by 35%.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-[hsl(var(--green-200))]/20 rounded-3xl animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ecofy with Green */}
      <section ref={sectionRefs.about} id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("about") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-4 py-2 rounded-full mb-6">
              About Ecofy
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pioneering AI-Powered Agriculture in Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're transforming how farmers across Sub-Saharan Africa grow, manage, and sell their produce through
              cutting-edge technology designed for African conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className={`space-y-8 ${isVisible("about") ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Technology in Action</h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    By combining artificial intelligence, machine learning, IoT devices, satellite data, and advanced
                    analytics, we deliver real-time insights and personalized recommendations that boost productivity,
                    climate resilience, and market access.
                  </p>
                  <p>
                    Our mobile-first platform features offline capabilities and SMS-based services, ensuring farmers in
                    connectivity-challenged regions can access our tools. With multilingual support in English and
                    Swahili, we're breaking down barriers to agricultural innovation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[hsl(var(--green-50))] p-6 rounded-2xl border border-[hsl(var(--green-100))] hover-lift">
                  <Smartphone className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Mobile-First Design</h4>
                  <p className="text-sm text-gray-600">
                    Offline capabilities and SMS support for low-connectivity areas
                  </p>
                </div>
                <div className="bg-[hsl(var(--green-50))] p-6 rounded-2xl border border-[hsl(var(--green-100))] hover-lift">
                  <Globe className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Multilingual Platform</h4>
                  <p className="text-sm text-gray-600">Supporting English and Swahili for broader accessibility</p>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible("about") ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[hsl(var(--green-100))] hover-lift">
                <Image
                  src="/images/farmer-harvest.png"
                  alt="Grace Wanjiku from Nakuru, Kenya, showcasing her improved vegetable harvest using Ecofy's market intelligence"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
                <div className="mt-6 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-200))]">
                  <p className="text-sm font-semibold text-[hsl(var(--green-800))] mb-1">Success Story</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Grace Wanjiku</strong> from Nakuru, Kenya, now sells her vegetables at 40% higher prices
                    thanks to Ecofy's market intelligence connecting her directly with buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision with Green */}
          <div className={`grid md:grid-cols-2 gap-8 ${isVisible("about") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[hsl(var(--green-50))] hover:shadow-xl transition-all duration-500 group hover-lift">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-[hsl(var(--green-500))] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To empower African farmers with innovative, data-driven agricultural solutions that enhance food
                  security, promote sustainability, and improve livelihoods across Sub-Saharan Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[hsl(var(--green-50))] hover:shadow-xl transition-all duration-500 group hover-lift">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-[hsl(var(--green-500))] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To be the leading digital agriculture platform advancing climate-smart farming and sustainable
                  agricultural practices across Sub-Saharan Africa and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section with Green */}
      <section ref={sectionRefs.solutions} id="solutions" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("solutions") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-4 py-2 rounded-full mb-6">
              Our Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive AI-Powered Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From soil analysis to market access, our integrated platform covers every aspect of modern farming
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Farm Intelligence */}
            <Card
              className={`border-0 shadow-xl hover:shadow-xl transition-all duration-500 group bg-white hover-lift ${isVisible("solutions") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive soil analysis including pH, nutrients (NPK), moisture, temperature, and texture analysis
                  powered by AI and satellite data.
                </p>
                <div className="space-y-3">
                  {["GPS Field Mapping", "Climate Risk Models", "AI-Powered Recommendations"].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--green-500))]" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* IoT Kit */}
            <Card
              className={`border-0 shadow-xl hover:shadow-xl transition-all duration-500 group bg-white hover-lift ${isVisible("solutions") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart IoT Kit</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Affordable handheld device designed for farmers without smartphones, enabling comprehensive
                  environmental data collection and SMS-based insights.
                </p>
                <div className="space-y-3">
                  {["Multi-Sensor Integration", "SMS Data Transmission", "Solar-Powered Battery"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-[hsl(var(--green-500))]" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Market Intelligence */}
            <Card
              className={`border-0 shadow-xl hover:shadow-xl transition-all duration-500 group bg-white hover-lift ${isVisible("solutions") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Connect directly with buyers and maximize profits through real-time pricing data, market trends, and
                  direct marketplace access.
                </p>
                <div className="space-y-3">
                  {["Live Price Updates", "Market Trend Analysis", "Direct Buyer Connection"].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--green-500))]" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible("solutions") ? "animate-slide-in-left" : "opacity-0"}`}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Advanced Technology Stack</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our platform combines cutting-edge technologies specifically adapted for African agricultural
                  conditions, ensuring reliability and effectiveness in diverse environments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[hsl(var(--green-100))] hover-lift">
                  <Zap className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-gray-600">Predictive analytics for personalized farming recommendations</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[hsl(var(--green-100))] hover-lift">
                  <Satellite className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Satellite Mapping</h4>
                  <p className="text-sm text-gray-600">GPS precision mapping for accurate farm monitoring</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[hsl(var(--green-100))] hover-lift">
                  <Activity className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">IoT Sensors</h4>
                  <p className="text-sm text-gray-600">Real-time environmental data collection</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[hsl(var(--green-100))] hover-lift">
                  <MessageSquare className="w-6 h-6 text-[hsl(var(--green-600))] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Multilingual Support</h4>
                  <p className="text-sm text-gray-600">English and Swahili platform accessibility</p>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible("solutions") ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-[hsl(var(--green-100))] hover-lift">
                <Image
                  src="/images/farmer-tablet.png"
                  alt="Modern farmer using tablet technology for precision agriculture with grain storage facilities in background"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
                <div className="mt-6 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-200))]">
                  <p className="text-sm font-semibold text-[hsl(var(--green-800))] mb-1">Technology Integration</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Modern agricultural operations using Ecofy's integrated technology platform for precision farming,
                    combining IoT sensors, satellite data, and AI analytics for optimal crop management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Data Visualization Section */}
      <section ref={sectionRefs.impact} id="impact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("impact") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-4 py-2 rounded-full mb-6">
              Real Impact
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Measurable Results Across Sub-Saharan Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Data-driven insights showing the transformative impact of our AI-powered agricultural solutions
            </p>
          </div>

          {/* Market Data Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className={`space-y-6 ${isVisible("impact") ? "animate-slide-in-left" : "opacity-0"}`}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Market Price Intelligence</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our platform provides real-time market data helping farmers make informed decisions about when and
                  where to sell their crops for maximum profit.
                </p>
              </div>

              <div className="bg-[hsl(var(--green-50))] p-6 rounded-2xl border border-[hsl(var(--green-100))] hover-lift">
                <Image
                  src="/images/chart-prices.png"
                  alt="Wholesale food prices comparison chart showing price variations for different crops from April to June 2024"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-gray-900 mb-2">Wholesale Food Prices Analysis</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Real-time price tracking for major crops including maize, rice, beans, and sorghum across regional
                    markets, helping farmers optimize their selling strategies and maximize profits.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${isVisible("impact") ? "animate-slide-in-right" : "opacity-0"}`}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Regional Market Trends</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Historical price trend analysis across Kenya, Tanzania, and Uganda provides farmers with strategic
                  insights for long-term planning.
                </p>
              </div>

              <div className="bg-[hsl(var(--green-50))] p-6 rounded-2xl border border-[hsl(var(--green-100))] hover-lift">
                <Image
                  src="/images/chart-trends.png"
                  alt="Price trend analysis from 2015-2022 showing market fluctuations across Kenya, Tanzania, and Uganda"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="mt-4">
                  <h4 className="font-bold text-gray-900 mb-2">7-Year Market Trend Analysis</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive price trend analysis from 2015-2022 across East African markets, enabling farmers to
                    understand seasonal patterns and make strategic planting decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Production Impact */}
          <div
            className={`grid lg:grid-cols-3 gap-8 mb-16 ${isVisible("impact") ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="lg:col-span-1">
              <div className="bg-[hsl(var(--green-50))] p-8 rounded-2xl border border-[hsl(var(--green-100))] h-full hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Growth</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Farmers using Ecofy's platform show significant improvements in crop production and yield consistency.
                </p>
                <Image
                  src="/images/chart-production.png"
                  alt="Maize production statistics showing increased yields in thousand metric tons"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="mt-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Maize Production Growth:</strong> Consistent increases in production volumes across regions
                    where Ecofy's technology has been implemented.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[hsl(var(--green-100))] hover-lift animate-scale-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">30%</div>
                  <div className="text-gray-600 font-medium">Average Yield Increase</div>
                  <p className="text-sm text-gray-500 mt-2">Across all crop types using our platform</p>
                </div>

                <div
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[hsl(var(--green-100))] hover-lift animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">25%</div>
                  <div className="text-gray-600 font-medium">Input Cost Reduction</div>
                  <p className="text-sm text-gray-500 mt-2">Water and fertilizer optimization</p>
                </div>

                <div
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[hsl(var(--green-100))] hover-lift animate-scale-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">40%</div>
                  <div className="text-gray-600 font-medium">Climate Resilience</div>
                  <p className="text-sm text-gray-500 mt-2">Improved adaptation to climate risks</p>
                </div>

                <div
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[hsl(var(--green-100))] hover-lift animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">20%</div>
                  <div className="text-gray-600 font-medium">Profit Increase</div>
                  <p className="text-sm text-gray-500 mt-2">Through better market access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRefs.testimonials} id="testimonials" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("testimonials") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-4 py-2 rounded-full mb-6">
              Farmer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Farmers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear directly from the farmers whose lives have been transformed by Ecofy's technology
            </p>
          </div>

          <div className={`relative ${isVisible("testimonials") ? "animate-scale-in" : "opacity-0"}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-[hsl(var(--green-100))] hover-lift">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={`${testimonials[activeTestimonial].name} from ${testimonials[activeTestimonial].location}`}
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[hsl(var(--green-400))] fill-current animate-twinkle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600 font-medium">{testimonials[activeTestimonial].location}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-3 py-1">
                        {testimonials[activeTestimonial].crop}
                      </Badge>
                      <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-3 py-1">
                        {testimonials[activeTestimonial].experience}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[hsl(var(--green-50))] transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index
                        ? "bg-[hsl(var(--green-500))] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[hsl(var(--green-50))] transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible("contact") ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] px-4 py-2 rounded-full mb-6">
              Get Started
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Farming?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join thousands of farmers across Sub-Saharan Africa who are already benefiting from our AI-powered
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`space-y-6 ${isVisible("contact") ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-100))] hover-lift">
                  <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">Dar es Salaam, Tanzania</p>
                    <p className="text-sm text-gray-500 mt-1">Serving farmers across East Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-100))] hover-lift">
                  <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">info@ecofy.co.tz</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 multilingual support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[hsl(var(--green-50))] rounded-xl border border-[hsl(var(--green-100))] hover-lift">
                  <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">+255 717 801 745</p>
                    <p className="text-sm text-gray-500 mt-1">English & Swahili support</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <Card className="border-0 shadow-xl mt-8 hover-lift">
                <CardContent className="p-0">
                  <div className="h-80 bg-[hsl(var(--green-100))] rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[hsl(var(--green-600))] mx-auto mb-4 animate-bounce" />
                      <p className="text-[hsl(var(--green-800))] text-lg font-bold">Our Coverage Area</p>
                      <p className="text-[hsl(var(--green-600))]">Tanzania • Kenya • Uganda • Rwanda • Burundi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`space-y-8 ${isVisible("contact") ? "animate-slide-in-right" : "opacity-0"}`}>
              <Card className="border-0 shadow-xl hover-lift">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl text-gray-900 font-bold">Start Your Journey Today</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Get personalized recommendations for your farm within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-semibold">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-2 h-12 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-2 h-12 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2 h-12 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+255 XXX XXX XXX"
                      className="mt-2 h-12 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="farmSize" className="text-gray-700 font-semibold">
                        Farm Size (acres)
                      </Label>
                      <Input
                        id="farmSize"
                        placeholder="e.g., 5 acres"
                        className="mt-2 h-12 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cropType" className="text-gray-700 font-semibold">
                        Primary Crop
                      </Label>
                      <select className="w-full p-3 border-2 border-[hsl(var(--green-200))] rounded-lg mt-2 h-12 bg-white focus:border-emerald-500 focus-ring transition-all duration-300">
                        <option>Select your main crop</option>
                        <option>Maize</option>
                        <option>Rice</option>
                        <option>Beans</option>
                        <option>Vegetables</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-semibold">
                      Tell us about your farming goals
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What challenges are you facing? What are your goals?"
                      rows={4}
                      className="mt-2 border-2 border-[hsl(var(--green-200))] focus:border-emerald-500 focus-ring transition-all duration-300"
                    />
                  </div>
                  <Button className="w-full bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white shadow-xl hover:shadow-xl transition-all duration-300 h-14 text-lg rounded-xl btn-animate">
                    Get My Free Farm Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    No spam, ever. We respect your privacy and will only send you relevant agricultural insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Ecofy</span>
                  <p className="text-xs text-gray-400">Smart Agriculture</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering 10,000+ smallholder farmers across Sub-Saharan Africa with AI-driven tools for
                climate-resilient and profitable farming.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[hsl(var(--green-500))] transition-all duration-300 cursor-pointer hover:scale-110">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg text-[hsl(var(--green-400))]">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Farm Intelligence",
                  "Smart IoT Kit",
                  "Market Intelligence",
                  "Learning Platform",
                  "Financial Services",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-[hsl(var(--green-400))] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg text-[hsl(var(--green-400))]">Company</h3>
              <ul className="space-y-3 text-gray-400">
                {["About Us", "Our Impact", "Partnerships", "Careers", "News & Updates"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-[hsl(var(--green-400))] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg text-[hsl(var(--green-400))]">Support</h3>
              <ul className="space-y-3 text-gray-400">
                {["Help Center", "Documentation", "Contact Support", "Privacy Policy", "Terms of Service"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-[hsl(var(--green-400))] transition-colors">
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">&copy; 2025 Ecofy. All rights reserved. | www.ecofy.co.tz</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>🇹🇿 Tanzania</span>
                <span>🇰🇪 Kenya</span>
                <span>🇺🇬 Uganda</span>
                <span>🇷🇼 Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
