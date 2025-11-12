"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle, Dot } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4 sm:px-6 md:px-12 font-sans text-gray-900">
      
      {/* Section 1 - Capture New Leads */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 md:mb-28">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/illustrations/Capture-Leads.png"
            alt="Capture New Leads"
            width={450}
            height={350}
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Capture New Leads
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Unlock Hidden Visitor Data with Full Visibility and Control. Exact
            Match reveals the contact details of website visitors—emails,
            phone numbers, and even addresses—turning anonymous traffic into
            high-value leads.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Real-Time Visitor Tracking</strong>
                <p className="text-gray-600">
                  Know exactly who’s landing on your site in real-time. Identify
                  anonymous visitors and turn passive traffic into potential
                  clients without needing forms or opt-ins.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Automatic Lead Data Enrichment</strong>
                <p className="text-gray-600">
                  Instantly gather detailed contact info using advanced tracking
                  technology—no manual research or third-party tools required.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Seamless Integration with Any Website</strong>
                <p className="text-gray-600">
                  Easily plug into any site—WordPress, Webflow, Shopify, or
                  custom builds. Start capturing leads with just one line of code.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>


      {/* Section 2 - White-Labeled Platform */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            White-Labeled Platform
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Put Your Brand Front and Center, Always. Your clients see your logo,
            your colors, and your domain—because every part of the platform is
            fully customizable to your agency’s brand.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Custom Domain & Branding</strong>
                <p className="text-gray-600">
                  Launch your own branded dashboard with custom logos, domain,
                  and styles. Your clients will never know it’s not built in-house.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Personalized Client Access</strong>
                <p className="text-gray-600">
                  Offer individual logins for each client so they can view their
                  leads, campaigns, and results under your branded experience.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Full Control, Zero Development</strong>
                <p className="text-gray-600">
                  Enjoy all the power of a SaaS product without the time, cost,
                  or headaches of building and maintaining it yourself.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/illustrations/white-labeled.png"
            alt="White Labeled Platform"
            width={420}
            height={380}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 1 - Scale Your Agency Without Limits */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 md:mb-28">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/illustrations/scale-agency.png"
            alt="Scale Your Agency Without Limits"
            width={450}
            height={350}
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Scale Your Agency Without Limits
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Grow Without Limits—Built to Support Your Success. Whether you're
            serving 5 clients or 500, Exact Match scales with you—no feature
            restrictions, no added stress.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Unlimited Clients & Campaigns</strong>
                <p className="text-gray-600">
                  Add as many clients and run as many campaigns as you want—
                  there are no hard caps or per-seat pricing barriers.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Built for Multi-Account Management</strong>
                <p className="text-gray-600">
                  Manage all your clients in one place with an intuitive dashboard
                  that keeps things organized and easy to control.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>High-Performance Infrastructure</strong>
                <p className="text-gray-600">
                  Our backend is optimized for speed, uptime, and performance—
                  giving you the power to scale without compromise.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 - Attract High-Intent Leads */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Attract High-Intent Leads with Smart Campaigns
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Target the right audience with{" "}
            <strong>keyword-based campaigns</strong> that capture leads and
            data—all on autopilot.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Keyword-Based Lead Triggers</strong>
                <p className="text-gray-600">
                  Define keywords your clients care about. When someone searches
                  or lands on relevant pages, tracking activates automatically.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Smart Campaigns</strong>
                <p className="text-gray-600">
                  Run multiple campaigns across different niches, industries,
                  and accounts—no usage limits, no hidden fees.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Campaign Performance Analytics</strong>
                <p className="text-gray-600">
                  Track which campaigns bring in the most leads and optimize in
                  real-time with detailed metrics and graphs.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/illustrations/smart-campaigns.png"
            alt="Smart Campaigns"
            width={420}
            height={380}
            className="object-contain"
            loading="lazy"
          />
        </div>
        </div>


        {/* Section 1 - Unlock High-Quality B2B Data */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 md:mb-28">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/illustrations/b2b-data.png"
            alt="Unlock High-Quality B2B Data"
            width={450}
            height={350}
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Unlock High-Quality B2B Data That Drives Results
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Get Verified Business Leads with Company-Level Insights. Empower
            your clients with high-quality B2B data—perfect for outbound sales,
            account-based marketing, and targeted outreach.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Access to Business Contacts</strong>
                <p className="text-gray-600">
                  Access decision-maker details including names, emails,
                  LinkedIn profiles, and job titles—so your clients can reach
                  the right people faster.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>In-Depth Company Insights</strong>
                <p className="text-gray-600">
                  Provide clients with verified company details like website,
                  revenue, size, and employee count—ready for outreach.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Fuel Sales, Partnerships & Outreach</strong>
                <p className="text-gray-600">
                  Boost LinkedIn outreach, cold emails, or campaigns with
                  actionable B2B data to target high-value opportunities.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 - Developer Tools & API Access */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 md:mb-28">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Developer Tools & API Access (Enterprise Plan)
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            For Agencies That Want Full Control and Custom Automation. Take
            things to the next level with API access, webhooks, and data syncs—
            perfect for advanced setups and integrations.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Robust API Endpoints</strong>
                <p className="text-gray-600">
                  Retrieve, sync, or push lead data across any platform—CRM,
                  dashboard, or analytics system. Full documentation included.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Custom Webhook Support</strong>
                <p className="text-gray-600">
                  Trigger actions in real-time. Send lead data directly to your
                  clients’ systems, Slack, or any webhook-supported app.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Secure, Scalable, and Built for Growth</strong>
                <p className="text-gray-600">
                  Enterprise-grade performance, rate limiting, and secure token
                  access ensure reliability at any scale.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/illustrations/developer-tools.png"
            alt="Developer Tools"
            width={420}
            height={380}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 3 - Powerful Integrations */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24 md:mb-28">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/illustrations/integrations.png"
            alt="Powerful Integrations"
            width={450}
            height={350}
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Powerful Integrations That Fit Your Workflow
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Connect Your Favorite Tools Without the Tech Headaches. Easily plug
            your SaaS into the tools your agency already uses—no dev team
            required.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Connect with Top Platforms</strong>
                <p className="text-gray-600">
                  Instantly integrate with LeadConnector, SendGrid, Kartra,
                  ClickFunnels, and more to streamline workflows.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Flexible Workflows for Every Client</strong>
                <p className="text-gray-600">
                  Automate campaigns, nurturing leads, or triggering sales
                  actions effortlessly with smooth data syncs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Seamless Zapier Integration</strong>
                <p className="text-gray-600">
                  Sync leads and automate data flows with thousands of apps via
                  Zapier—set up in minutes, no coding required.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Section 4 - Targeted Data by Location */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Targeted Data by Location
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Unlock Deeper Insights with Location & Demographic Intelligence.
            Access powerful data to refine targeting and deliver more value to
            your clients.
          </p>

          <ul className="space-y-4 text-[15px] sm:text-[16px] text-gray-700">
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Zipcode, City & State Level Targeting</strong>
                <p className="text-gray-600">
                  Capture leads by hyper-specific areas for local or national
                  campaigns—perfect for maximizing relevance.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Dot className="text-[#a53000] w-5 h-5 mt-[3px]" />
              <div>
                <strong>Demographics & Financial Profiles</strong>
                <p className="text-gray-600">
                  View income range, spending potential, and behavior-based
                  insights to qualify leads faster and smarter.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/illustrations/Target.png"
            alt="Targeted Data"
            width={350}
            height={350}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

    </section>
  );
}
