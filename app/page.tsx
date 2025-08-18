import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Eye, Zap, MessageSquare, Shield, Workflow } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
            <a href="#mission" className="text-slate-300 hover:text-white transition-colors">
              Mission
            </a>
            <a href="#what-we-do" className="text-slate-300 hover:text-white transition-colors">
              What We Do
            </a>
            <a href="#vision" className="text-slate-300 hover:text-white transition-colors">
              Vision
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
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">About Open Industrial</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Your Industrial Data.
            </span>
            <br />
            Unified, Queryable, Actionable.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Open Industrial is an Azure-powered telemetry hub for operational technology (OT). It ingests data from control systems, MES, lab tools, historians, and IoT devices — making it instantly queryable in natural language or APIs, and ready for integration into analytics, agents, and automation workflows.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              To help industrial teams unify data across systems, access insights without delay, and coordinate actions across the systems that keep operations running.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Open Industrial transforms how organizations interact with their industrial data through four core
              capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Connect Industrial Systems</h3>
                <p className="text-slate-300 leading-relaxed">
                  Unify data from control, execution, lab, and sensor systems into one queryable hub.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Query Naturally</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ask questions in plain English and get explainable answers instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integrate Anywhere</h3>
                <p className="text-slate-300 leading-relaxed">
                  Plug results into dashboards, agents, and automation systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Secure and Govern</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ensure trust with audit trails, role-based access, and schema enforcement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Who We Serve</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We work with OT engineers, process automation leads, lab managers, and industrial IT teams in sectors like
              manufacturing, life sciences, energy, and utilities — anyone who needs to unify operational data and act
              on it in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Manufacturing</h3>
                <p className="text-slate-400 text-sm">Unify production line, equipment, and control data to reduce downtime and boost efficiency.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Life Sciences</h3>
                <p className="text-slate-400 text-sm">Govern lab and research telemetry to accelerate validation, trials, and compliance.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
                <p className="text-slate-400 text-sm">Balance supply and demand with live grid monitoring, renewable integration, and analytics.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Utilities</h3>
                <p className="text-slate-400 text-sm">
                  Monitor water, infrastructure, and environmental systems with real-time visibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Process Industries</h3>
                <p className="text-slate-400 text-sm">Optimize chemical, refining, and continuous manufacturing with integrated operational data.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Industrial IT</h3>
                <p className="text-slate-400 text-sm">Bridge OT/IT convergence with secure integration, governance, and system oversight.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Industrial data should work as hard as the operations it supports. Open Industrial unifies legacy OT systems with modern tools, giving teams a trusted way to access insights, co-ordinate workflows, and act with confidence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">The Future of Industrial Intelligence</h3>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Connect your systems. Ask questions in plain English. Act on insights with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
                  >
                    Learn More
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
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© 2025 Open Industrial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
