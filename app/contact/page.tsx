import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import Image from "next/image"
import Script from "next/script"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/favicon-openindustrial.svg"
              alt="Open Industrial"
              width={200}
              height={36}
              className="h-9 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact-form" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">Contact Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Connect
            </span>
            <br />
            Your Industrial Data Journey
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to unify your industrial data and unlock actionable insights? Get in touch with our team to discuss
            how Open Industrial can transform your operations.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-slate-300">hello@openindustrial.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
                <p className="text-slate-300">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your industrial data operations? Fill out the form below and our team will get back
                to you within 24 hours.
              </p>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* HubSpot Form Container */}
                <div id="hubspot-form" className="min-h-[400px]">
                  {/* Form will be injected here by HubSpot script */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Join industrial teams who trust Open Industrial to unify their operational data and drive actionable
                  insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
                  >
                    View Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/favicon-openindustrial.svg"
                alt="Open Industrial"
                width={200}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="/" className="text-slate-400 hover:text-white transition-colors">
                About
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© 2025 Open Industrial. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* HubSpot Form Script */}
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.hbspt) {
            // @ts-ignore
            window.hbspt.forms.create({
              portalId: "2687377",
              formId: "c469e188-69b9-4165-b524-62c5a33b834c",
              region: "na1",
              target: "#hubspot-form",
            })
          }
        }}
      />
    </div>
  )
}
