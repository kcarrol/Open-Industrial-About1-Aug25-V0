import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AppWindowIcon,
  KeyIcon,
  ShieldIcon,
  LucideGripHorizontal as LucideGripHorizontalIcon,
  ZapIcon,
  SearchCheckIcon,
  UploadCloudIcon,
  CheckCircle,
  MessageSquare,
  Share2,
  Zap,
  CheckCircleIcon,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
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
          <nav className="flex items-center space-x-3 sm:space-x-6">
            <a href="/" className="text-white font-medium text-sm sm:text-base">
              Home
            </a>
            <a href="/about" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
              About
            </a>
            <a
              href="/use-case/batch-quality"
              className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
            >
              Use Cases
            </a>
            <a href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
              Contact
            </a>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
            AI-Powered Industrial Intelligence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Ask anything about your plant – <br />
            <span className="text-blue-400">get answers instantly</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect industrial systems. Stream telemetry. Ask questions in plain English. Share insights anywhere — no
            pipelines, no delay.
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
              className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-8">
                <Image
                  src="/azi-industrial-dashboard.png"
                  alt="Azi Industrial Monitoring Interface - Real-time plant data visualization with AI insights"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Connect Your Data. Ask Anything. Share Anywhere.</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Open Industrial ingests live telemetry from DCS, SCADA, MES, historians, and lab systems — making it
            instantly queryable through natural language, APIs, and dashboards.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UploadCloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">1. Connect Your Data</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ingest and stream telemetry via OPC UA, MQTT, HTTP, SQL, or CSV.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">2. Ask Azi</h3>
                <p className="text-slate-300 leading-relaxed">
                  Query your plant's data in plain English. Azi translates your intent into KQL and returns explainable,
                  actionable results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">3. Share & Integrate</h3>
                <p className="text-slate-300 leading-relaxed">
                  Save queries as API endpoints to plug into dashboards, reports, apps and workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Azi */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Azi — Your AI Query Assistant</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Azi gives engineers direct access to live plant insights — no scripts, no SQL, no waiting on IT or vendor
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 mb-4 text-purple-400" />
                <p className="text-slate-300 italic">"Show flow anomalies for Line 4 over the past 24 hours"</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-slate-300 italic">"Compare batch temperatures for Reactor 2"</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 mb-4 text-purple-400" />
                <p className="text-slate-300 italic">"List top causes of downtime last week"</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-slate-300">Built for real-time telemetry</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <p className="text-slate-300">
                Translates questions into KQL — Microsoft's query language for exploring and analyzing telemetry data
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-slate-300">Explains every query and its results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Turn Industrial Data Into Trusted Insight */}
      <section id="features" className="py-12 sm:py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 sm:mb-6">
              Turn Industrial Data Into Trusted Insight
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Break down data silos across OT and IT systems by turning live plant data into actionable, audit-ready
              insight your teams can act on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white font-bold text-sm sm:text-base">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Downtime Diagnosis & Root Cause
                </h3>
                <div className="mb-3 sm:mb-4">
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30 mb-2 text-xs sm:text-sm px-3 py-2 whitespace-normal leading-relaxed inline-block w-full">
                    "What caused Line 4 downtime for the past 24 hours?"
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Unify SCADA, historian, and PLCs data to diagnose downtime faster. Get clear answers with context —
                  from codes, timing, and trends — without waiting on vendor support or manual analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white font-bold text-sm sm:text-base">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Batch Quality & Compliance</h3>
                <div className="mb-3 sm:mb-4">
                  <Badge className="bg-green-600/20 text-green-300 border-green-400/30 mb-2 text-xs sm:text-sm px-3 py-2 whitespace-normal leading-relaxed inline-block w-full">
                    "Which Reactor 2 batches had temp &gt;140°C this week?"
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Instantly track and batch across MES, LIMS, and historian data with repeatable, audit-ready queries.
                  Compare the results with expected parameters to document investigations and accelerate investigations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white font-bold text-sm sm:text-base">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Cross-Line Performance Reporting
                </h3>
                <div className="mb-3 sm:mb-4">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30 mb-2 text-xs sm:text-sm px-3 py-2 whitespace-normal leading-relaxed inline-block w-full">
                    "Show throughput and top 3 downtime causes for Line 4 today."
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Generate consistent OEE, yield, and downtime reports across shifts and lines — governed by your plant
                  context, free from spreadsheets and a manual error.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-white font-bold text-sm sm:text-base">4</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Safety & Compliance Triggers</h3>
                <div className="mb-3 sm:mb-4">
                  <Badge className="bg-orange-600/20 text-orange-300 border-orange-400/30 mb-2 text-xs sm:text-sm px-3 py-2 whitespace-normal leading-relaxed inline-block w-full">
                    "Log all pressure events &gt;80psi with full context."
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Set rules on safety telemetry and capture incidents with complete historian and SCADA context. Every
                  event logged is a governed, auditable trail to simplify compliance reviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section id="integration" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Works with Your Existing Stack</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect seamlessly to your current industrial systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <UploadCloudIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Protocols</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    OPC UA
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    MQTT
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    REST
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    SQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Middleware</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    HighByte
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    HiveMQ
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    Ignition
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <LucideGripHorizontalIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Systems</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    DCS
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    MES
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    SCADA
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    LIMS
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    DeltaV
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    Syncade
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <AppWindowIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Apps</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    Mobius Suite
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    ProofCheck™
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    AlertTrack+
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    QuickView+
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-slate-900/50 rounded-lg p-6 border border-slate-700">
              <span className="text-slate-300">All systems</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white font-semibold">Open Industrial</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-slate-300">Instant insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Flow Diagram */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{"Data In > Insight Out"}</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              The unified intelligence hub for your industrial ecosystem.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="max-w-6xl mx-auto">
            {/* Input Systems */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-100 mb-6 text-center">Input Systems</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">Control Systems</h4>
                    <p className="text-xs text-slate-400">DCS, SCADA, PLC</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">Manufacturing Systems</h4>
                    <p className="text-xs text-slate-400">MES, ERP, WMS</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">Quality & Lab Systems</h4>
                    <p className="text-xs text-slate-400">LIMS, QMS, Historians</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">IoT & Sensors</h4>
                    <p className="text-xs text-slate-400">Edge devices, Protocols</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent"></div>
            </div>

            {/* Open Industrial Hub */}
            <div className="mb-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20 max-w-md mx-auto">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/open-industrial-icon.svg"
                      alt="Open Industrial Icon"
                      width={32}
                      height={32}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Open Industrial</h3>
                  <p className="font-semibold mb-4 text-white">AI-Powered Hub</p>
                  <div className="text-sm text-slate-300 space-y-1">
                    <p>• Real-time ingestion</p>
                    <p>• Natural language queries</p>
                    <p>• Instant API generation</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-600"></div>
            </div>

            {/* Output Destinations */}
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-6 text-center">Output Destinations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">Custom Applications</h4>
                    <p className="text-xs text-slate-400">Web apps, Mobile apps</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">Intelligent Agents</h4>
                    <p className="text-xs text-slate-400">Monitoring, Alerts, Actions</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">BI & Analytics Tools</h4>
                    <p className="text-xs text-slate-400">Power BI, Tableau, Grafana</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mx-auto mb-2"></div>
                    <h4 className="text-sm font-semibold text-white mb-1">APIs & Integrations</h4>
                    <p className="text-xs text-slate-400">REST APIs, Webhooks</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Universal Connectivity</h3>
              <p className="text-slate-300 leading-relaxed">
                Connect any industrial system through standard protocols and APIs
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Instant Intelligence</h3>
              <p className="text-slate-300 leading-relaxed">
                Ask questions in plain English and get immediate, actionable insights
              </p>
            </div>
            <div className="text-center">
              <Share2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Flexible Output</h3>
              <p className="text-slate-300 leading-relaxed">
                Share insights as granular API endpoints in any workflow, app, tool or system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Control */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-6">Your Cloud, Your Rules</h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Run Open Industrial in your Azure tenant for full access and control – or choose from shared cloud or
              fully managed options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex items-center sm:items-start space-x-4 p-4 sm:p-0">
              <div className="flex-shrink-0">
                <KeyIcon className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">Your data, your access policies</p>
            </div>
            <div className="flex items-center sm:items-start space-x-4 p-4 sm:p-0">
              <div className="flex-shrink-0">
                <SearchCheckIcon className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">Full auditability and governance</p>
            </div>
            <div className="flex items-center sm:items-start space-x-4 p-4 sm:p-0">
              <div className="flex-shrink-0">
                <ShieldIcon className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">Secure APIs with token-scoped permissions</p>
            </div>
            <div className="flex items-center sm:items-start space-x-4 p-4 sm:p-0">
              <div className="flex-shrink-0">
                <ZapIcon className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">Automated, seamless setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">From Insight to Action</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Open Industrial is evolving into a modular automation platform with adaptive agents that observe data,
              trigger workflows, and coordinate logic across systems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-slate-300 mb-6">Soon, you'll be able to:</p>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Define schema-aware workflows</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Deploy adaptive agents that monitor, respond, and evolve</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300">Coordinate action across MES, SCADA, LIMS, and cloud systems</p>
              </div>
            </div>

            <div className="text-center bg-transparent">
              <Card className="bg-slate-900/50 border-slate-700 inline-block">
                <CardContent className="p-6">
                  <p className="text-lg text-white font-medium">
                    Start with insight. Grow into orchestration. All inside your own stack.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Unlock Instant Telemetry Insights?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Connect, query and act on insights from the plant floor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
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
              <a href="/contact" className="text-slate-400 hover:text-white transition-colors">
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
