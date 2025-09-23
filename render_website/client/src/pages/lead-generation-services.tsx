import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeadGenerationServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Lead Generation Services
            </h1>
            <p className="text-lg text-emerald-100 mb-6 max-w-3xl mx-auto">
              Professional lead generation services combining verified contact data, intelligent targeting, and multi-channel outreach to accelerate pipeline growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Request Lead Generation
              </Link>
              <Link href="/marketing-solutions" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                Marketing Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Services */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Comprehensive Lead Generation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-target text-2xl text-emerald-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Targeted Prospecting</h3>
              </div>
              <p className="text-gray-600 mb-4">Advanced prospect identification using technology stack analysis, company growth signals, and buying intent data.</p>
              <div className="text-sm text-emerald-600 font-semibold">2.8M+ Qualified Prospects</div>
              <div className="text-xs text-gray-500 mt-1">Technology-based targeting</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-2xl text-green-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Email Campaign Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Professional email sequences with A/B testing, personalization, and automated follow-up optimization.</p>
              <div className="text-sm text-green-600 font-semibold">18.3% Average Open Rate</div>
              <div className="text-xs text-gray-500 mt-1">Industry-leading performance</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-phone text-2xl text-teal-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Cold Calling Services</h3>
              </div>
              <p className="text-gray-600 mb-4">Professional sales development representatives with industry expertise and proven conversion methodologies.</p>
              <div className="text-sm text-teal-600 font-semibold">12.7% Connection Rate</div>
              <div className="text-xs text-gray-500 mt-1">Qualified conversations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">5-Step Lead Generation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Target Identification", description: "Analyze your ideal customer profile and identify high-value prospects using technology and growth signals", icon: "fas fa-crosshairs", color: "emerald" },
              { step: "2", title: "Data Enrichment", description: "Enrich prospect profiles with verified contact information, company intelligence, and buying triggers", icon: "fas fa-database", color: "green" },
              { step: "3", title: "Campaign Development", description: "Create personalized multi-channel campaigns with targeted messaging and optimal timing strategies", icon: "fas fa-edit", color: "teal" },
              { step: "4", title: "Outreach Execution", description: "Deploy professional outreach across email, phone, and social channels with consistent follow-up", icon: "fas fa-paper-plane", color: "blue" },
              { step: "5", title: "Lead Qualification", description: "Qualify and score leads based on engagement, fit, and purchase intent before handoff to sales", icon: "fas fa-check-circle", color: "purple" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${item.icon} text-${item.color}-600 text-xl`}></i>
                </div>
                <div className={`w-8 h-8 bg-${item.color}-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Quality Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Lead Generation Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">94.6%</div>
              <div className="text-gray-600 font-medium">Data Accuracy Rate</div>
              <div className="text-xs text-gray-500 mt-1">Verified contact information</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">47%</div>
              <div className="text-gray-600 font-medium">Lead-to-Opportunity Rate</div>
              <div className="text-xs text-gray-500 mt-1">Qualified prospects only</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">23%</div>
              <div className="text-gray-600 font-medium">Faster Sales Cycles</div>
              <div className="text-xs text-gray-500 mt-1">Pre-qualified leads</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$1.2M</div>
              <div className="text-gray-600 font-medium">Average Pipeline Value</div>
              <div className="text-xs text-gray-500 mt-1">Per campaign (3 months)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-laptop text-emerald-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Technology & Software</h3>
                </div>
                <p className="text-gray-600 mb-3">SaaS platforms, enterprise software, cybersecurity, and cloud services targeting IT decision-makers and C-level executives.</p>
                <div className="text-sm text-emerald-600 font-semibold">24,800+ qualified leads generated</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-university text-green-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Financial Services</h3>
                </div>
                <p className="text-gray-600 mb-3">Banks, investment firms, insurance companies, and fintech startups seeking technology solutions and professional services.</p>
                <div className="text-sm text-green-600 font-semibold">18,400+ qualified leads generated</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-heartbeat text-teal-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Healthcare & Life Sciences</h3>
                </div>
                <p className="text-gray-600 mb-3">Hospitals, pharmaceutical companies, medical device manufacturers, and healthcare technology providers.</p>
                <div className="text-sm text-teal-600 font-semibold">14,600+ qualified leads generated</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-industry text-blue-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Manufacturing & Industrial</h3>
                </div>
                <p className="text-gray-600 mb-3">Manufacturing companies, industrial equipment suppliers, and logistics providers seeking operational technology solutions.</p>
                <div className="text-sm text-blue-600 font-semibold">16,200+ qualified leads generated</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-shopping-cart text-purple-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Retail & E-commerce</h3>
                </div>
                <p className="text-gray-600 mb-3">Retailers, e-commerce platforms, consumer brands, and omnichannel solutions targeting marketing and operations teams.</p>
                <div className="text-sm text-purple-600 font-semibold">12,900+ qualified leads generated</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <i className="fas fa-graduation-cap text-orange-600 text-xl mr-3"></i>
                  <h3 className="text-lg font-bold">Education & Non-Profit</h3>
                </div>
                <p className="text-gray-600 mb-3">Universities, K-12 schools, non-profit organizations, and educational technology companies seeking digital transformation.</p>
                <div className="text-sm text-orange-600 font-semibold">9,800+ qualified leads generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Lead Generation Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Starter Package</h3>
                <div className="text-sm text-gray-600">For growing businesses</div>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> 500 qualified leads/month</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Email campaign management</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Basic lead scoring</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Monthly performance reports</li>
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">$2,500/mo</div>
                <div className="text-xs text-gray-500">3-month minimum</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-green-600 mb-2">Professional Package</h3>
                <div className="text-sm text-gray-600">For established companies</div>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> 1,500 qualified leads/month</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Multi-channel campaigns</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Advanced lead scoring</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> CRM integration</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Dedicated account manager</li>
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">$6,500/mo</div>
                <div className="text-xs text-gray-500">6-month minimum</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-teal-600 mb-2">Enterprise Package</h3>
                <div className="text-sm text-gray-600">For large organizations</div>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> 3,000+ qualified leads/month</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Full-service campaigns</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Custom lead scoring models</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Sales team training</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> White-label solutions</li>
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">Custom</div>
                <div className="text-xs text-gray-500">12-month minimum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your Pipeline Growth</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Partner with our lead generation experts to build a consistent pipeline of qualified prospects and accelerate revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Request Lead Generation
            </Link>
            <Link href="/marketing-solutions" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Explore Marketing Solutions
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}