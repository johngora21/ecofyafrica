"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Smartphone,
  Wifi,
  Battery,
  Clock,
  CloudRain,
  Languages,
  MapPin,
  WifiOff,
  Camera,
  MessageSquare,
  ArrowRight
} from "lucide-react"

interface EcofyKitProps {
  isVisible: boolean
}

export function EcofyKit({ isVisible }: EcofyKitProps) {
  const features = [
    {
      icon: Smartphone,
      title: "Smartphone Integration",
      description: "Connect to any smartphone via Bluetooth for real-time data access"
    },
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Built-in WiFi and cellular connectivity for remote monitoring"
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Up to 6 months of operation on a single charge"
    },
    {
      icon: Clock,
      title: "Quick Analysis",
      description: "Get soil analysis results in under 30 seconds"
    },
    {
      icon: CloudRain,
      title: "Weather Resistant",
      description: "IP67 rated for use in all weather conditions"
    },
    {
      icon: Languages,
      title: "Easy to Use",
      description: "Simple interface with clear instructions in local languages"
    },
    {
      icon: MapPin,
      title: "GPS Location Tracking",
      description: "Built-in GPS for precise farm mapping and geotagging"
    },
    {
      icon: WifiOff,
      title: "2G/4G & WiFi",
      description: "Works with all network types, from 2G to 4G, with offline sync capability"
    },
    {
      icon: Camera,
      title: "AI Camera",
      description: "Built-in camera for crop disease detection"
    },
    {
      icon: MessageSquare,
      title: "SMS Support",
      description: "Works with basic phones via SMS for wider accessibility"
    }
  ]

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/farmer-greenhouse.png')] opacity-5"></div>
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
            Our Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Ecofy IoT Kit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Advanced sensor technology with user-friendly design for accurate soil analysis and farm mapping.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/kit/soil-sensor.jpg"
                alt="Ecofy IoT Soil Sensor"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-[hsl(var(--green-100))] hover:border-[hsl(var(--green-300))]"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-[hsl(var(--green-50))] text-[hsl(var(--green-600))]">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 