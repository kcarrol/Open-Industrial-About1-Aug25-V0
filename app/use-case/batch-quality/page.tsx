import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Database, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BatchQualityPage() {
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
              Home
            </a>
            <a href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/use-case/batch-quality" className="text-white font-medium">
              Use Cases
            </a>
            <a href="/contact" className="text-slate-300 hover:text-white transition-colors">
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
          <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">Use Case</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Batch Quality &
            </span>
            <br />
            Compliance
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unify MES, LIMS, QMS, and ERP into an explainable, audit-ready query layer for every batch.
          </p>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Query Example</h3>
              <p className="text-xl text-slate-200 font-mono leading-relaxed">
                "Which Reactor 2 batches exceeded 140°C this week, what deviations were logged, and which CAPAs are
                linked?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">The Problem</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Batch records live across MES/EBR, LIMS, QMS, DMS, and ERP. Reconciling them for investigations or audits means exports, spreadsheets, and lost time. Deviations surface late, CAPAs lack full context, and “why is this batch on hold?” becomes a ticket—not an answer.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture Diagram */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">System Integration Overview</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Open Industrial connects across ERP, MES, QMS, and LIMS to unify the Electronic Batch Record into a governed query layer. 

What Open Industrial unifies for this use case: Batches &amp; genealogy (MES/EBR), lab samples &amp; test results (LIMS), deviations/CAPAs/changes (QMS), specs/docs/training (DMS), suppliers/material lots (ERP).

            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardContent className="p-8">
                <Image
                  src="/batch-reporting-diagram.png"
                  alt="Batch Quality System Architecture"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Open Industrial Helps Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">How Open Industrial Helps</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Unify Batch Telemetry</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Bring MES/EBR, LIMS, QMS, ERP, and DMS into one governed query layer so investigators see the full picture in one place.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Reusable Query Endpoints</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Save warm queries (e.g., Batches on hold and why, Open CAPAs by product) as explainable, versioned endpoints for repeatable answers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Automated CAPA Hooks</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Flag threshold breaches (temp, pressure, results out-of-spec) and expose them as query signals tied to CAPAs and deviations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Audit-Ready Reports</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Generate validated, consistent outputs aligned to your document and data-retention practices — ready for internal QA or regulators.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Outcome Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">The Outcome</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Faster investigations, proactive compliance, and traceability you can trust — with every batch deviation
              mapped, explained, and connected to corrective actions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Batch Quality Process?</h3>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Connect your systems. Query your data. Act with confidence.
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
