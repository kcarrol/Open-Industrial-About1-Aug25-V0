"use client"

import Script from "next/script"

export default function HubSpotForm() {
  return (
    <>
      {/* HubSpot Form Container */}
      <div id="hubspot-form" className="min-h-[400px]">
        {/* Form will be injected here by HubSpot script */}
      </div>

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
    </>
  )
}
