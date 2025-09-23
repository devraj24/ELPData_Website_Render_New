import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnologyCategories from "@/components/TechnologyCategories";
import EnhancedMetrics from "@/components/EnhancedMetrics";
import InteractiveDataTables from "@/components/InteractiveDataTables";
import APIIntegration from "@/components/APIIntegration";
import AIChat from "@/components/AIChat";
import AccountBasedMarketing from "@/components/AccountBasedMarketing";
import TestimonialsSection from "@/components/TestimonialsSection";
import SecurityCompliance from "@/components/SecurityCompliance";
import DatabaseVisualization from "@/components/DatabaseVisualization";
import TechnologyComparison from "@/components/TechnologyComparison";
import Footer from "@/components/Footer";

import SEOHead from "@/components/SEOHead";
import SocialProofNotification from "@/components/SocialProofNotification";

export default function Home() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ELP Data",
    "url": "https://elpdata.com",
    "logo": "https://elpdata.com/logo.png",
    "description": "Premium technology data and business intelligence platform providing verified technology user lists across 1000+ technologies.",
    "services": [
      {
        "@type": "Service",
        "name": "Technology User Lists",
        "description": "Verified contacts for enterprise technology users"
      },
      {
        "@type": "Service", 
        "name": "Business Intelligence",
        "description": "Advanced analytics and market insights"
      },
      {
        "@type": "Service",
        "name": "Lead Generation",
        "description": "B2B prospecting and sales acceleration"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900",
      "contactType": "customer service",
      "email": "info@elpdata.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Force cache refresh - gradient background */}
      <SEOHead 
        title="ELP Data - AI Technology Data & Business Intelligence"
        description="Access 1000+ technology user lists and accelerate B2B sales with 96% accurate data. AI-powered automation and marketing services to boost your revenue."
        keywords="technology data, enterprise data, B2B data, technology users, CRM data, ERP users, database lists, business intelligence, lead generation, sales prospecting"
        canonical="https://www.elpdata.com"
        structuredData={structuredData}
      />
      <Header />
      <div className="hero-section">
        <Hero />
      </div>
      
      {/* Enhanced SEO Internal Links Section */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">Popular Technology User Lists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <a href="/sap-users-list" className="group p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-base font-semibold text-slate-600 group-hover:text-slate-700">368.7K</div>
              <div className="text-sm text-slate-700 font-medium">SAP Users</div>
              <div className="text-xs text-slate-500 mt-1">Enterprise ERP</div>
            </a>
            <a href="/salesforce-com-users-list" className="group p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="text-lg font-bold text-green-600 group-hover:text-green-700">599K</div>
              <div className="text-sm text-gray-700 font-medium">Salesforce.com</div>
              <div className="text-xs text-gray-500 mt-1">69+ Cloud Products</div>
            </a>
            <a href="/aws-users-list" className="group p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="text-lg font-bold text-orange-600 group-hover:text-orange-700">156.2K</div>
              <div className="text-sm text-gray-700 font-medium">AWS Cloud</div>
              <div className="text-xs text-gray-500 mt-1">Cloud Computing</div>
            </a>
            <a href="/oracle-corporation-users-list" className="group p-4 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-100 hover:border-red-300 hover:shadow-lg transition-all" id="oracle-card-force-update">
              <div className="text-lg font-bold text-red-600 group-hover:text-red-700">2M</div>
              <div className="text-sm text-gray-700 font-medium">Oracle Corporation</div>
              <div className="text-xs text-gray-500 mt-1">613 Products & Technologies</div>
            </a>
            <a href="/vmware-users-list" className="group p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="text-lg font-bold text-purple-600 group-hover:text-purple-700">391.2K</div>
              <div className="text-sm text-gray-700 font-medium">VMware Users</div>
              <div className="text-xs text-gray-500 mt-1">Virtualization</div>
            </a>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-900 mt-12 mb-6">Executive Email Lists by Role</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href="/ceo-email-list" className="group p-4 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all text-center">
              <div className="text-lg font-bold text-indigo-600 group-hover:text-indigo-700">CEO Email List</div>
              <div className="text-xs text-gray-500 mt-1">Chief Executives</div>
            </a>
            <a href="/cto-email-list" className="group p-4 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center">
              <div className="text-lg font-bold text-teal-600 group-hover:text-teal-700">CTO Email List</div>
              <div className="text-xs text-gray-500 mt-1">Technology Leaders</div>
            </a>
            <a href="/cfo-email-list" className="group p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all text-center">
              <div className="text-lg font-bold text-emerald-600 group-hover:text-emerald-700">CFO Email List</div>
              <div className="text-xs text-gray-500 mt-1">Finance Chiefs</div>
            </a>
            <a href="/vp-email-list" className="group p-4 bg-gradient-to-br from-rose-50 to-white rounded-lg border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all text-center">
              <div className="text-lg font-bold text-rose-600 group-hover:text-rose-700">VP Email List</div>
              <div className="text-xs text-gray-500 mt-1">Vice Presidents</div>
            </a>
          </div>
          
          <div className="text-center mt-8">
            <a href="/installed-base" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              View All 1000+ Technology Lists
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <div className="space-y-4">
        <TechnologyCategories />
        <EnhancedMetrics />
        <InteractiveDataTables />
        <APIIntegration />
        <AIChat />
        <AccountBasedMarketing />
        <TestimonialsSection />
        <DatabaseVisualization />
        <TechnologyComparison />
        <SecurityCompliance />
      </div>
      <SocialProofNotification />
      <Footer />
    </div>
  );
}
