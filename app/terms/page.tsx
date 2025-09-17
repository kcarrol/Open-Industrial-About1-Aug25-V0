import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/favicon-openindustrial.svg"
                alt="Open Industrial"
                width={200}
                height={36}
                className="h-9 w-auto cursor-pointer"
              />
            </Link>
          </div>
          <MobileNavigation currentPage="terms" />
        </div>
      </header>

      {/* Terms and Conditions Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-lg text-slate-300">Last updated: May 2025 | Effective Date: May 2025</p>
          </div>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") form an agreement ("Agreement") between you, or, if you are
                entering into this Agreement on behalf of an entity or an organization, that entity or organization
                ("you" and "your") and Open Industrial ("Open Industrial," "us," or "we").
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Open Industrial platform ("Platform"), includes a variety of services and other offerings
                ("Offerings"). Open Industrial is willing to allow you to become a user of the Platform, including the
                available Offerings ("User") if you agree to be bound by this Agreement.
              </p>
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-6 mt-6">
                <p className="text-slate-200 font-semibold mb-2">IMPORTANT NOTICE:</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  PLEASE READ THIS AGREEMENT CAREFULLY. BY ACCESSING AND USING THE PLATFORM, YOU AGREE THAT YOU HAVE
                  READ, UNDERSTAND, AND AGREE TO COMPLY WITH AND BE BOUND BY THIS AGREEMENT. THIS AGREEMENT CONTAINS
                  PROVISIONS FOR MANDATORY BINDING ARBITRATION AND WAIVER OF JURY TRIALS, WHICH LIMIT YOUR RIGHTS TO
                  BRING AN ACTION IN COURT.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Scope</h2>
              <p className="text-slate-300 leading-relaxed">
                This Agreement governs your access to and use of the Platform, which includes all Offerings and any
                Content. Unless otherwise specified in this Agreement, all access to and use of the Platform by you or
                on your behalf is subject to this Agreement. This Agreement is the complete and exclusive understanding
                and agreement between the parties.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
              <p className="text-slate-300 leading-relaxed">
                The Platform and all Offerings are for use by individuals 18 years of age and older. By entering into
                this Agreement and using the Platform, you confirm that you are legally capable of entering into a
                binding agreement with Open Industrial and you meet all such eligibility requirements.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Your Account</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Before you can become a User of the Platform and access the Offerings, you will be required to establish
                an account on the Platform (your "Account"). All Accounts are issued at the sole discretion of Open
                Industrial.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Your Account and the user name and password for your Account ("Account ID") are personal in nature. Your
                Account is for your own use and your Account ID may be used only by you alone. You are solely
                responsible for your Account and all use of the Platform and any Offerings through your Account.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Access to the Platform</h2>
              <p className="text-slate-300 leading-relaxed">
                Subject to your compliance with this Agreement, during the term of this Agreement, Open Industrial will
                permit you to access the Platform, including all applicable Offerings, solely for your own use in
                accordance with the terms of this Agreement. You may not distribute, sell, resell, lend, loan, lease,
                license, sublicense or transfer any of your rights to access or use the Platform.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. User Content</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Platform may permit you to upload, provide, or make available your data, information, and other
                content ("Content") through the Platform. You are solely responsible for all Content that you may
                upload, provide, or make available through the Platform ("User Content").
              </p>
              <p className="text-slate-300 leading-relaxed">
                You will obtain all rights, authorizations, consents, and permissions necessary to provide all User
                Content and to permit the processing and use thereof through the Platform under this Agreement.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Restrictions</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You may use the Platform, including all Offerings and any Content, only for lawful purposes as expressly
                provided in this Agreement. Without limiting the foregoing, you will not and will not permit any third
                party to:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300">
                <li>Use the Platform to further or promote any criminal or illegal activity</li>
                <li>
                  Access or use the Platform in a manner that interferes with, disables, disrupts, impairs or creates an
                  undue burden on the Platform
                </li>
                <li>Alter, modify, reproduce, create derivative works of the Platform</li>
                <li>
                  Reverse engineer, disassemble, decompile, or otherwise attempt to derive the method of operation of
                  the Platform
                </li>
                <li>
                  Transfer, sell, lease, license, sublicense, distribute, or make available to any third party your
                  right to access or use the Platform
                </li>
                <li>
                  Use the Platform in a manner that will infringe the intellectual property rights or other rights of
                  any third party
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Fees</h2>
              <p className="text-slate-300 leading-relaxed">
                General access to Open Industrial is available without a fee. However, Third Party Offerings may require
                the payment of a fee or charge. In addition, Open Industrial may elect to charge fees for the use of
                certain of the Offerings included on the Platform. You are responsible for paying Open Industrial the
                applicable fees and charges that you may incur through your use of or access to the Platform.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <p className="text-slate-300 leading-relaxed">
                This Agreement may be terminated by either party at any time, in that party's sole discretion, upon
                notice to the other party as permitted under this Agreement. Upon termination of this Agreement for any
                reason, all rights and subscriptions granted to you under this Agreement will terminate, and you will
                immediately cease all use of and access to the Platform and all Offerings.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                THE PLATFORM AND ALL OFFERINGS AND ANY CONTENT ARE PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS. OPEN
                INDUSTRIAL AND ITS PROVIDERS DO NOT WARRANT OR GUARANTEE THE ACCURACY, COMPLETENESS, ADEQUACY, OR
                CURRENCY OF THE OFFERINGS OR ANY CONTENT.
              </p>
              <p className="text-slate-300 leading-relaxed">
                UNDER NO CIRCUMSTANCES WILL OPEN INDUSTRIAL BE LIABLE TO YOU, OR ANY THIRD PARTY CLAIMING THROUGH YOU,
                FOR ANY LOSSES OR DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM, INCLUDING THE OFFERINGS OR
                ANY CONTENT, OR YOUR USE OF OR INABILITY TO USE THE PLATFORM.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Except as otherwise provided below, the parties will attempt to resolve all disputes, controversies, or
                claims arising under, out of, or relating to this Agreement through binding arbitration under the
                arbitration of the Judicial Arbitration and Mediation Services ("JAMS").
              </p>
              <p className="text-slate-300 leading-relaxed">
                The arbitration will be conducted exclusively in the English language at a site specified by Open
                Industrial in Denver, Colorado. YOU AGREE THAT YOU WILL PURSUE ANY CLAIM OR LAWSUIT AS AN INDIVIDUAL,
                AND WILL NOT LEAD, JOIN, OR SERVE AS A REPRESENTATIVE OF A CLASS OR GROUP OF PERSONS.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have any questions or concerns regarding this Agreement, please contact us using the information
                provided on our contact page. If you need to provide notice of any claims of non-compliance with this
                Agreement, or complaints of any other kind, please contact us as well.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/favicon-openindustrial.svg"
                  alt="Open Industrial"
                  width={200}
                  height={36}
                  className="h-9 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
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
