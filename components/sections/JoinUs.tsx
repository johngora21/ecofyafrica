"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Users,
  Handshake,
  Lightbulb,
  ArrowRight,
  Building,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react"

interface JoinUsProps {
  isVisible: boolean
}

export function JoinUs({ isVisible }: JoinUsProps) {
  const opportunities = [
    {
      icon: Users,
      title: "Early Adopter Farmers",
      description: "Be among the first to access our platform and shape its development",
      benefits: [
        "Free premium features for 6 months",
        "Direct access to our development team",
        "Priority support and training"
      ]
    },
    {
      icon: Building,
      title: "Agricultural Partners",
      description: "Join our network of agricultural service providers",
      benefits: [
        "Expand your reach to our growing farmer network",
        "Access to our technology platform",
        "Joint marketing opportunities"
      ]
    },
    {
      icon: Globe,
      title: "Community Leaders",
      description: "Help us bring technology to your farming community",
      benefits: [
        "Free training and resources",
        "Community engagement tools",
        "Recognition in our network"
      ]
    }
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-white to-[hsl(var(--green-50))]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/iStock-1421231403-e1666081905766-768x512-1.webp')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--green-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-2 bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] hover:bg-[hsl(var(--green-200))]"
          >
            Get Involved
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're building the future of agriculture in Tanzania, and we want you to be part of it.
            Whether you're a farmer, partner, or supporter, there's a place for you in our community.
          </p>
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[hsl(var(--green-500))] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <opportunity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[hsl(var(--green-700))] transition-colors">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                  {opportunity.description}
                </p>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--green-500))] mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--green-500))] to-[hsl(var(--green-400))] opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Badge 
            variant="secondary" 
            className="mb-2 bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] hover:bg-[hsl(var(--green-200))]"
          >
            Our Partners
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
            <div className="group bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <div className="relative w-full h-16 mb-1">
                <Image
                  src="/images/partners/ArenoLogisticsLogo.png"
                  alt="Areno Logistics"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[hsl(var(--green-700))] transition-colors">
                Areno Logistics
              </h3>
            </div>
            <div className="group bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <div className="relative w-full h-16 mb-1">
                <Image
                  src="/images/partners/arenotechlogo.png"
                  alt="Areno Technologies"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[hsl(var(--green-700))] transition-colors">
                Areno Technologies
              </h3>
            </div>
            <div className="group bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm">
              <div className="relative w-full h-16 mb-1">
                <Image
                  src="/images/partners/africaunveil.png"
                  alt="Sahara Unveil"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[hsl(var(--green-700))] transition-colors">
                Sahara Unveil
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 