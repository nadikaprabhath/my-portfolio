"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "o.crm44@gmail.com",
        }),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "nadikagamage11@gmail.com",
      href: "mailto:nadikagamage11@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+94 (78) 735-8510",
      href: "tel:+947358510",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Matara, Sri Lanka",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm currently available for new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="glass-effect rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#58A6FF]">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#58A6FF] bg-opacity-20 rounded-lg flex items-center justify-center text-[#58A6FF]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[#8B949E] text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-[#F0F6FC] hover:text-[#58A6FF] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#F0F6FC]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[#30363D]">
                <h4 className="text-lg font-semibold mb-4 text-[#F0F6FC]">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-[#21262D] rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#58A6FF] hover:bg-[#30363D] transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#21262D] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-[#3FB950] rounded-full animate-pulse" />
                  <span className="text-[#3FB950] text-sm font-medium">Available for work</span>
                </div>
                <p className="text-[#8B949E] text-sm">
                  Currently open to new opportunities and exciting projects. Response time: Usually within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#58A6FF]">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#F0F6FC] mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#21262D] border-[#30363D] text-[#F0F6FC] focus:border-[#58A6FF]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#F0F6FC] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#21262D] border-[#30363D] text-[#F0F6FC] focus:border-[#58A6FF]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#F0F6FC] mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#21262D] border-[#30363D] text-[#F0F6FC] focus:border-[#58A6FF]"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#F0F6FC] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#21262D] border-[#30363D] text-[#F0F6FC] focus:border-[#58A6FF] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#58A6FF] hover:bg-[#4A90E2] text-white disabled:opacity-50"
                >
                  <Send size={20} className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#30363D] text-center">
          <p className="text-[#8B949E]">© 2024 Nadika Prabhath </p>
        </div>
      </div>
    </section>
  )
}
