import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Technology White Papers & Research
            </h1>
            <p className="text-lg text-violet-100 mb-6 max-w-3xl mx-auto">
              In-depth research papers, market analysis, and strategic insights on enterprise technology trends and adoption patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Download White Papers
              </Link>
              <Link href="/data-solutions" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Latest Research Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-brain text-blue-600 text-xl"></i>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">NEW</span>
              </div>
              <h3 className="text-xl font-bold mb-3">The AI Enterprise Revolution: 2024 Adoption Trends</h3>
              <p className="text-gray-600 mb-4">Comprehensive analysis of artificial intelligence adoption across Fortune 1000 companies, implementation strategies, and ROI metrics.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <i className="fas fa-calendar mr-2"></i>
                <span>December 2024</span>
                <span className="mx-2">•</span>
                <span>42 pages</span>
              </div>
              <Link href="/white-paper/ai-enterprise-2024" className="text-blue-600 font-semibold hover:text-blue-700">Download PDF →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-cloud text-green-600 text-xl"></i>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">POPULAR</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Migration Strategies: Enterprise Best Practices</h3>
              <p className="text-gray-600 mb-4">Strategic framework for large-scale cloud transformations with risk mitigation, cost optimization, and performance benchmarks.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <i className="fas fa-calendar mr-2"></i>
                <span>November 2024</span>
                <span className="mx-2">•</span>
                <span>38 pages</span>
              </div>
              <Link href="/white-paper/cloud-migration-2024" className="text-green-600 font-semibold hover:text-green-700">Download PDF →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-shield-alt text-purple-600 text-xl"></i>
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">TRENDING</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cybersecurity in the Modern Enterprise</h3>
              <p className="text-gray-600 mb-4">Zero-trust architecture implementation, threat landscape analysis, and security technology investment priorities for 2025.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <i className="fas fa-calendar mr-2"></i>
                <span>October 2024</span>
                <span className="mx-2">•</span>
                <span>56 pages</span>
              </div>
              <Link href="/white-paper/cybersecurity-2024" className="text-purple-600 font-semibold hover:text-purple-700">Download PDF →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Research Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Market Analysis</h3>
              <p className="text-gray-600 text-sm mb-3">Technology market sizing, growth forecasts, and competitive landscape analysis.</p>
              <div className="text-blue-600 font-semibold text-sm">12 Papers</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Implementation Guides</h3>
              <p className="text-gray-600 text-sm mb-3">Best practices, frameworks, and methodologies for technology deployment.</p>
              <div className="text-green-600 font-semibold text-sm">8 Papers</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation Trends</h3>
              <p className="text-gray-600 text-sm mb-3">Emerging technologies, future predictions, and innovation impact assessment.</p>
              <div className="text-purple-600 font-semibold text-sm">15 Papers</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Industry Reports</h3>
              <p className="text-gray-600 text-sm mb-3">Sector-specific technology adoption patterns and digital transformation strategies.</p>
              <div className="text-orange-600 font-semibold text-sm">10 Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Series */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Research Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border border-indigo-100">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Digital Transformation Playbook Series</h3>
              <p className="text-gray-600 mb-6">Comprehensive guide series covering end-to-end digital transformation strategies, from assessment to implementation and optimization.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-indigo-600 mr-3"></i>
                  <span>Volume 1: Assessment & Strategy (28 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-indigo-600 mr-3"></i>
                  <span>Volume 2: Technology Selection (35 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-indigo-600 mr-3"></i>
                  <span>Volume 3: Implementation & Change Management (42 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-indigo-600 mr-3"></i>
                  <span>Volume 4: Performance Measurement (31 pages)</span>
                </div>
              </div>
              <Link href="/white-paper-series/digital-transformation" className="text-indigo-600 font-semibold hover:text-indigo-700">Download Complete Series →</Link>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">Enterprise Technology Benchmarks</h3>
              <p className="text-gray-600 mb-6">Annual benchmark reports comparing technology adoption, performance metrics, and ROI across industries and company sizes.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-emerald-600 mr-3"></i>
                  <span>2024 Enterprise Software Benchmarks (67 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-emerald-600 mr-3"></i>
                  <span>Cloud Infrastructure Performance Report (52 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-emerald-600 mr-3"></i>
                  <span>AI/ML Implementation Success Metrics (44 pages)</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-file-pdf text-emerald-600 mr-3"></i>
                  <span>Cybersecurity Investment Analysis (39 pages)</span>
                </div>
              </div>
              <Link href="/white-paper-series/benchmarks" className="text-emerald-600 font-semibold hover:text-emerald-700">Download Benchmark Reports →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Research Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-violet-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Collection</h3>
              <p className="text-gray-600">Primary research from 500,000+ enterprises, technology vendor partnerships, and industry surveys for comprehensive data coverage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-microscope text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Analysis Framework</h3>
              <p className="text-gray-600">Advanced analytics, machine learning models, and statistical validation to ensure accuracy and reliability of insights.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Validation Process</h3>
              <p className="text-gray-600">Peer review by industry experts, cross-validation with market data, and continuous updates to maintain research quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Access Enterprise Technology Research</h2>
          <p className="text-xl text-violet-100 mb-8">
            Download comprehensive white papers and research reports to guide your technology strategy and implementation decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Download Research Library
            </Link>
            <Link href="/data-solutions" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}