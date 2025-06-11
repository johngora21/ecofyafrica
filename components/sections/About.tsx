"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Target, 
  Shield,
  Zap
} from "lucide-react"

interface AboutProps {
  isVisible: boolean
}

export function About({ isVisible }: AboutProps) {
  const coreValues = [
    {
      icon: Target,
      title: "Farmer-First",
      description: "Everything we do starts with understanding farmers' needs"
    },
    {
      icon: Shield,
      title: "Sustainability",
      description: "Building solutions that protect our environment"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging technology to solve age-old challenges"
    }
  ]

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/489f39ee2556440499c7cc837a58cea6.jpg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--green-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-2 bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] hover:bg-[hsl(var(--green-200))]"
          >
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Transforming Agriculture in Tanzania
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Launched in April 2024, we're on a mission to empower Tanzania's farmers with
            technology-driven solutions for sustainable and profitable farming.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower Tanzania's farmers with technology-driven solutions that increase productivity,
                reduce environmental impact, and improve livelihoods across the country.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A future where every farmer in Tanzania has access to the tools and knowledge needed to
                build a sustainable and profitable agricultural business.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/Untitled-3-950x640.jpg"
                alt="Our team working together"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[hsl(var(--green-500))] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[hsl(var(--green-700))] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--green-500))] to-[hsl(var(--green-400))] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}