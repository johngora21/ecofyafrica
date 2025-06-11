"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedText } from "@/components/ui/animated-text"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send
} from "lucide-react"

interface ContactProps {
  isVisible: boolean
}

export function Contact({ isVisible }: ContactProps) {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-white to-[hsl(var(--green-50))]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--green-400))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--green-300))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <Badge 
            variant="secondary" 
            className="mb-2 bg-[hsl(var(--green-100))] text-[hsl(var(--green-800))] hover:bg-[hsl(var(--green-200))]"
          >
            Contact Us
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about our platform or want to learn more about how we can help
            transform your farming business? We're here to help.
          </p>
        </div>

        {/* Contact Info - Simple Design */}
        <div className={`max-w-4xl mx-auto mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <a href="tel:+254700000000" className="text-[hsl(var(--green-600))] hover:text-[hsl(var(--green-700))] transition-colors text-base font-medium">
                  +254 700 000000
                </a>
                <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8am-5pm EAT</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <a href="mailto:info@ecofy.africa" className="text-[hsl(var(--green-600))] hover:text-[hsl(var(--green-700))] transition-colors text-base font-medium">
                  info@ecofy.africa
                </a>
                <p className="text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[hsl(var(--green-500))] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Office</h3>
                <p className="text-[hsl(var(--green-600))] text-base font-medium">
                  Dar es Salaam, Tanzania
                </p>
                <p className="text-xs text-gray-500 mt-1">Visit us by appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div className={`bg-white rounded-xl p-6 shadow-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
              <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[hsl(var(--green-500))] focus:ring-2 focus:ring-[hsl(var(--green-100))] transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[hsl(var(--green-500))] focus:ring-2 focus:ring-[hsl(var(--green-100))] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[hsl(var(--green-500))] focus:ring-2 focus:ring-[hsl(var(--green-100))] transition-all duration-300"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[hsl(var(--green-500))] focus:ring-2 focus:ring-[hsl(var(--green-100))] transition-all duration-300 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="group relative overflow-hidden w-full bg-[hsl(var(--green-500))] hover:bg-[hsl(var(--green-600))] text-white px-4 py-2 text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--green-600))] to-[hsl(var(--green-500))] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div className={`bg-white rounded-xl p-6 shadow-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Our Location</h2>
              <p className="text-sm text-gray-600">Visit our office in Dar es Salaam, Tanzania</p>
            </div>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536223157963!2d39.20875561475853!3d-6.792069995031475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f7%3A0x47dccba28d294d95!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1647884587297!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 