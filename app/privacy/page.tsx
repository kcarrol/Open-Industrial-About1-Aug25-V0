import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function PrivacyPage() {
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
          <MobileNavigation currentPage="privacy" />
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-lg text-slate-300">Effective Date: May 2025 | Last Updated: May 2025</p>
          </div>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-slate-300 leading-relaxed">
                Open Industrial, and our affiliates (collectively "Open Industrial", "we", "us") care deeply about
                privacy, security, and online safety. This Privacy Policy ("Privacy Policy") is designed to inform you
                about how we collect, use, and disclose your Personal Information (as defined below), and our commitment
                to using the Personal Information we collect in a transparent and respectful manner.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                This Privacy Policy applies to "Personal Information" we obtain from individuals ("you") through our
                website (collectively, our "Site"), products, and services (collectively, the "Services"), and from
                third party and publicly available sources, as further described below. Please read this Privacy Policy
                carefully before you start to use our Services, whether online or offline.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Categories of Personal Information We May Collect</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The types of Personal Information we collect about you depends on how you interact with us. Depending on
                the Services you use, the following are the categories and specific types of Personal Information that
                we may collect, or have collected in the preceding twelve months:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300">
                <li>
                  <strong>Contact Information/Identifiers</strong>, including name, email address, postal address, phone
                  number, username, business contact information, or other similar identifiers and account information.
                </li>
                <li>
                  <strong>Information Specific to the Services</strong>, in certain instances, such as invoices,
                  business and commercial communications, order status and history.
                </li>
                <li>
                  <strong>Device Information and Other Unique Identifiers</strong>, device identifier, internet protocol
                  (IP) address, or similar unique identifiers.
                </li>
                <li>
                  <strong>Internet or Other Network Activity</strong>, including browsing or search history, and
                  information regarding your interactions with our websites, mobile applications, emails, or
                  advertisements.
                </li>
                <li>
                  <strong>Payment Information</strong>, including credit or debit card number, or other financial
                  information.
                </li>
                <li>
                  <strong>Sensitive Personal Information</strong> (where permitted and in accordance with applicable
                  law): we do not collect Sensitive Personal Information.
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Sources of Personal Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We collect your Personal Information in the following ways, pursuant to applicable law:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300">
                <li>
                  <strong>Directly From You</strong>, such as when you use our Services, create an account and profile
                  with us; sign up with us to receive marketing communications; or otherwise reach out to us.
                </li>
                <li>
                  <strong>Other Sources</strong>, including vendors and affiliates.
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Use and Processing of Your Personal Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We use your Personal Information for the following business purposes ("Processing Purposes") associated
                with our general business operations. We may collect your Personal Information for the following
                Processing Purposes:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300">
                <li>To provide you the Services.</li>
                <li>To enable you to access and use our websites.</li>
                <li>
                  To communicate with you and to respond to your requests, questions, comments, and other inquiries.
                </li>
                <li>
                  To understand what partner resources you use, if any, and to connect you to additional resources at
                  your request.
                </li>
                <li>
                  To send marketing and promotional materials, including information relating to our products, Services,
                  sales, or promotions or those of a third party.
                </li>
                <li>
                  To administer, maintain, evaluate, and improve our websites and Services, and to develop new products
                  and services.
                </li>
                <li>To conduct research and analytics related to our websites and Services.</li>
                <li>
                  To manage our business operations, perform our obligations and exercise our rights under any agreement
                  that you or your organization has with us.
                </li>
                <li>For other purposes with your consent, or as otherwise permitted or required by applicable law.</li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclosure of Your Personal Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We respect the importance of privacy. Other than as provided in this Privacy Policy, we do not sell your
                Personal Information, nor do we share it with unaffiliated third parties for their own marketing use,
                unless we have your consent, or we are required by law to do so.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We may disclose each category of Personal Information listed above to third parties including Service
                Providers, Affiliated Companies, in Corporate Transactions, to Other Parties as required by law, and
                with your consent.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Security and Retention</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We have implemented generally accepted standards of technical and organizational security to protect
                Personal Information from loss, misuse, alteration or destruction. All employees are required to keep
                Personal Information confidential and only authorized personnel have access to this information.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We will keep your Personal Information for as long as we have a relationship with you. Once our
                relationship with you has come to an end, we will retain your Personal Information for a period of time
                that enables us to maintain business records, comply with record retention requirements, defend legal
                claims, and comply with applicable laws and regulations.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You may have certain rights regarding your Personal Information. The rights available to you depend on
                our reason for processing your Personal Information and the requirements of applicable law.
                Specifically, you may have the following rights:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-300">
                <li>
                  <strong>Right to access</strong>: You may have the right to obtain confirmation as to whether Personal
                  Information concerning you is being processed.
                </li>
                <li>
                  <strong>Right to rectification</strong>: You may have the right to request that we correct any
                  Personal Information about you that is inaccurate.
                </li>
                <li>
                  <strong>Right to erasure</strong>: You may have the right to request that we erase your Personal
                  Information, under certain conditions.
                </li>
                <li>
                  <strong>Right to restrict processing</strong>: You may have the right to request that we restrict the
                  processing of your Personal Information, under certain conditions.
                </li>
                <li>
                  <strong>Right to object to processing</strong>: You may have the right to object to our processing of
                  your Personal Information, under certain conditions.
                </li>
                <li>
                  <strong>Right to data portability</strong>: You may have the right to request that we transfer the
                  Personal Information we have collected about you to another organization.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong>: Where we rely on your consent to process your Personal
                  Information, you have the right to withdraw that consent at any time.
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                If you have questions or comments regarding this Privacy Policy or our privacy practices, please contact
                us using the information provided on our contact page. You may also have a right to lodge a complaint
                with a data protection supervisory authority.
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
