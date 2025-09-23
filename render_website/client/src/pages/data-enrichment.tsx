import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataEnrichmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Data Enrichment Services
            </h1>
            <p className="text-lg text-cyan-100 mb-6 max-w-3xl mx-auto">
              Transform incomplete data into comprehensive business intelligence with advanced enrichment services that add verified contact details, company insights, and technology intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Start Data Enrichment
              </Link>
              <Link href="/data-services" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                Data Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Services */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Comprehensive Data Enrichment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-user-plus text-2xl text-cyan-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Contact Enrichment</h3>
              </div>
              <p className="text-gray-600 mb-4">Add verified email addresses, phone numbers, job titles, and social profiles to incomplete contact records.</p>
              <div className="text-sm text-cyan-600 font-semibold">97.4% Match Rate</div>
              <div className="text-xs text-gray-500 mt-1">Verified contact information</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-building text-2xl text-blue-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Company Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">Enhance company records with industry classification, revenue data, employee count, and growth indicators.</p>
              <div className="text-sm text-blue-600 font-semibold">3.2M+ Company Records</div>
              <div className="text-xs text-gray-500 mt-1">Real-time company data</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-cogs text-2xl text-indigo-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Technology Stack Data</h3>
              </div>
              <p className="text-gray-600 mb-4">Append technology adoption details including software platforms, vendors, and implementation timelines.</p>
              <div className="text-sm text-indigo-600 font-semibold">450+ Technologies</div>
              <div className="text-xs text-gray-500 mt-1">Current installations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">4-Stage Enrichment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "1", 
                title: "Data Analysis", 
                description: "Analyze existing data quality, identify gaps, and create enrichment strategy", 
                icon: "fas fa-search", 
                color: "cyan",
                details: "Quality assessment and gap identification"
              },
              { 
                step: "2", 
                title: "Source Matching", 
                description: "Match records against 180+ verified data sources using advanced algorithms", 
                icon: "fas fa-link", 
                color: "blue",
                details: "Multi-source data correlation"
              },
              { 
                step: "3", 
                title: "Data Appending", 
                description: "Append verified information with confidence scoring and source attribution", 
                icon: "fas fa-plus-circle", 
                color: "indigo",
                details: "Verified data integration"
              },
              { 
                step: "4", 
                title: "Quality Assurance", 
                description: "Validate enriched data through automated checks and manual verification", 
                icon: "fas fa-check-circle", 
                color: "purple",
                details: "Accuracy validation and scoring"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${item.icon} text-${item.color}-600 text-xl`}></i>
                </div>
                <div className={`w-8 h-8 bg-${item.color}-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="text-xs text-gray-500">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Data Enrichment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-lg border border-cyan-100">
                <h3 className="text-xl font-bold text-cyan-900 mb-4">Professional Contact Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="fas fa-check text-cyan-600 mr-2"></i> Business email addresses (verified)</li>
                  <li className="flex items-center"><i className="fas fa-check text-cyan-600 mr-2"></i> Direct phone numbers and extensions</li>
                  <li className="flex items-center"><i className="fas fa-check text-cyan-600 mr-2"></i> LinkedIn and social media profiles</li>
                  <li className="flex items-center"><i className="fas fa-check text-cyan-600 mr-2"></i> Job titles and reporting hierarchy</li>
                  <li className="flex items-center"><i className="fas fa-check text-cyan-600 mr-2"></i> Department and functional area</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Firmographic Intelligence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i> Industry and sub-industry classification</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i> Annual revenue and growth metrics</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i> Employee count and headcount trends</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i> Geographic presence and locations</li>
                  <li className="flex items-center"><i className="fas fa-check text-blue-600 mr-2"></i> Ownership structure and parent company</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Technology Intelligence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="fas fa-check text-indigo-600 mr-2"></i> Enterprise software installations</li>
                  <li className="flex items-center"><i className="fas fa-check text-indigo-600 mr-2"></i> Cloud platform usage and spend</li>
                  <li className="flex items-center"><i className="fas fa-check text-indigo-600 mr-2"></i> CRM and marketing technology stack</li>
                  <li className="flex items-center"><i className="fas fa-check text-indigo-600 mr-2"></i> Implementation dates and renewal cycles</li>
                  <li className="flex items-center"><i className="fas fa-check text-indigo-600 mr-2"></i> IT decision-maker identification</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Intent & Behavioral Signals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="fas fa-check text-purple-600 mr-2"></i> Purchase intent scoring and timing</li>
                  <li className="flex items-center"><i className="fas fa-check text-purple-600 mr-2"></i> Content consumption patterns</li>
                  <li className="flex items-center"><i className="fas fa-check text-purple-600 mr-2"></i> Competitor research activities</li>
                  <li className="flex items-center"><i className="fas fa-check text-purple-600 mr-2"></i> Technology evaluation stage</li>
                  <li className="flex items-center"><i className="fas fa-check text-purple-600 mr-2"></i> Budget cycle and procurement timing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Enrichment Quality Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-cyan-600 mb-2">97.4%</div>
              <div className="text-gray-600 font-medium">Match Success Rate</div>
              <div className="text-xs text-gray-500 mt-1">Contact enrichment accuracy</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">180+</div>
              <div className="text-gray-600 font-medium">Data Sources</div>
              <div className="text-xs text-gray-500 mt-1">Verified information providers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24hrs</div>
              <div className="text-gray-600 font-medium">Processing Time</div>
              <div className="text-xs text-gray-500 mt-1">Typical enrichment delivery</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">95.8%</div>
              <div className="text-gray-600 font-medium">Data Freshness</div>
              <div className="text-xs text-gray-500 mt-1">Information updated monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Enrichment Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CRM Enhancement",
                description: "Enrich existing CRM records with missing contact details and company intelligence",
                icon: "fas fa-database",
                color: "cyan",
                benefit: "78% improvement in contact rates"
              },
              {
                title: "Lead Scoring",
                description: "Append firmographic and technographic data for advanced lead qualification models",
                icon: "fas fa-star",
                color: "blue", 
                benefit: "43% increase in qualified leads"
              },
              {
                title: "Account-Based Marketing",
                description: "Complete target account profiles with decision-maker contacts and tech stack data",
                icon: "fas fa-bullseye",
                color: "indigo",
                benefit: "67% higher engagement rates"
              },
              {
                title: "Market Research",
                description: "Enhance survey data with additional company and contact attributes for deeper analysis",
                icon: "fas fa-chart-line",
                color: "purple",
                benefit: "Enhanced analytical insights"
              },
              {
                title: "Sales Prospecting",
                description: "Augment prospect lists with verified contact information and buying signals",
                icon: "fas fa-handshake",
                color: "green",
                benefit: "52% faster sales cycles"
              },
              {
                title: "Data Migration",
                description: "Clean and enrich data during system migrations and platform consolidations",
                icon: "fas fa-exchange-alt",
                color: "orange",
                benefit: "95% data quality improvement"
              }
            ].map((useCase, index) => (
              <div key={index} className={`bg-gradient-to-br from-${useCase.color}-50 to-white p-6 rounded-xl shadow-lg border border-${useCase.color}-100`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${useCase.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${useCase.icon} text-${useCase.color}-600 text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{useCase.description}</p>
                <div className={`text-sm font-semibold text-${useCase.color}-600`}>{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Data Quality Today</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Unlock the full potential of your data with comprehensive enrichment services that deliver verified, actionable business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Start Data Enrichment
            </Link>
            <Link href="/data-services" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Explore Data Services
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}