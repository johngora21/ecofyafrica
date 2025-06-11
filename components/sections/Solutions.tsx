"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Smartphone, 
  LineChart, 
  Cloud, 
  Droplets, 
  Leaf, 
  ArrowRight,
  TrendingUp,
  Users,
  Wallet,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState, useRef } from "react"

interface SolutionsProps {
  isVisible: boolean
}

export function Solutions({ isVisible }: SolutionsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      title: "Farm Intelligence & Soil Health",
      description: "Comprehensive soil analysis and farm mapping using advanced technology",
      icon: Leaf,
      badge: "Core Technology",
      features: [
        "API-based soil data using GPS-enabled smartphones",
        "Optional Ecofy IoT Kit with inbuilt GPS for precise measurements",
        "Satellite-powered weather and topographic analysis",
        "SMS-based personalized recommendations"
      ]
    },
    {
      title: "Market Intelligence & Analysis",
      description: "AI-driven market insights and direct buyer connections",
      icon: TrendingUp,
      badge: "Market Access",
      features: [
        "AI analysis of prices, demand, and market trends",
        "Cultural and regional crop suitability insights",
        "Direct farmer-to-buyer connections",
        "Logistics support for streamlined deliveries"
      ]
    },
    {
      title: "Learning & Support",
      description: "24/7 AI-powered assistance and community support",
      icon: Users,
      badge: "Support",
      features: [
        "AI-generated tutorials and agribusiness plans",
        "24/7 AI chatbot via app or SMS (English and Swahili)",
        "Access to community support and agronomists",
        "Personalized farming recommendations"
      ]
    },
    {
      title: "Financial Services",
      description: "Access to financing and insurance solutions",
      icon: Wallet,
      badge: "Finance",
      features: [
        "Loan matching with vetted financial institutions",
        "Crop insurance based on localized climate risks",
        "Government subsidy program alerts",
        "Financial planning and management tools"
      ]
    },
    {
      title: "Climate Resilience",
      description: "Tools and insights for climate-smart farming",
      icon: Cloud,
      badge: "Climate",
      features: [
        "Real-time weather monitoring and alerts",
        "Climate-smart farming recommendations",
        "Drought and flood risk assessment",
        "Sustainable resource management"
      ]
    }
  ]

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const cardWidth = scrollContainerRef.current.offsetWidth / 3
    const newIndex = Math.round(scrollContainerRef.current.scrollLeft / cardWidth)
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }

  const handleDragStart = (clientX: number) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(clientX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = clientX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    if (!scrollContainerRef.current) return
    
    const cardWidth = scrollContainerRef.current.offsetWidth / 3
    const targetIndex = Math.round(scrollContainerRef.current.scrollLeft / cardWidth)
    setActiveIndex(targetIndex)
    scrollContainerRef.current.scrollTo({
      left: targetIndex * cardWidth,
      behavior: 'smooth'
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.pageX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragMove(e.pageX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    handleDragEnd()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].pageX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].pageX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const nextIndex = (activeIndex + 1) % solutions.length
      setActiveIndex(nextIndex)
      const cardWidth = scrollContainerRef.current.offsetWidth / 3
      scrollContainerRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const prevIndex = (activeIndex - 1 + solutions.length) % solutions.length
      setActiveIndex(prevIndex)
      const cardWidth = scrollContainerRef.current.offsetWidth / 3
      scrollContainerRef.current.scrollTo({
        left: prevIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--green-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] hover:bg-[hsl(var(--green-200))]"
          >
            Our Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tools for Modern Farming
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our suite of innovative solutions designed to transform farming practices
            and boost productivity across Africa.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[hsl(var(--green-600))] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[hsl(var(--green-600))] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`flex-none w-full md:w-1/2 lg:w-1/3 snap-center transition-all duration-300 ${
                  index === activeIndex ? 'scale-100' : 'scale-95'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[hsl(var(--green-500))] rounded-2xl flex items-center justify-center shadow-lg">
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))]"
                    >
                      {solution.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--green-500))] mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 