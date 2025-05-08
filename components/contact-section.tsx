"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import AnimateInView from "@/components/animate-in-view"
import StaggerChildren from "@/components/stagger-children"
import AnimatedChild from "@/components/animated-child"
import { Button } from "@/components/ui/button-enhanced"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real implementation
    console.log("Form submitted:", formData)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StaggerChildren>
            <AnimatedChild>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Let's Build Your MVP</h2>
            </AnimatedChild>
            <AnimatedChild>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Ready to turn your idea into reality? Fill out the form and we'll get back to you within 24 hours.
              </p>
            </AnimatedChild>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-blue-600" />,
                  title: "Email Us",
                  content: "hello@mvpro.dz",
                },
                {
                  icon: <Phone className="h-5 w-5 text-blue-600" />,
                  title: "Call Us",
                  content: "+213 555 123 456",
                },
                {
                  icon: <MapPin className="h-5 w-5 text-blue-600" />,
                  title: "Visit Us",
                  content: "Tech Hub, Algiers, Algeria",
                },
              ].map((item, index) => (
                <AnimatedChild key={index} direction="right">
                  <div className="flex items-start space-x-4 group">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                    </div>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </StaggerChildren>

          <AnimateInView direction="left" delay={0.3}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="w-full dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    rounded="full"
                    className="w-full py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-blue-600/20 dark:hover:shadow-blue-800/20"
                  >
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
