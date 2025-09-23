import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="url(#analysis-pattern)"/>
            <defs>
              <pattern id="analysis-pattern" patternUnits="userSpaceOnUse" width="120" height="120">
                <path d="M20 60 L40 40 L60 50 L80 30 L100 35" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="40" cy="40" r="2" fill="white"/>
                <circle cx="60" cy="50" r="2" fill="white"/>
                <circle cx="80" cy="30" r="2" fill="white"/>
                <circle cx="100" cy="35" r="2" fill="white"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Comprehensive Market Analysis
              </h1>
              <p className="text-xl text-white font-medium mb-8">
                Strategic market intelligence, competitive landscape analysis, industry benchmarking, and market opportunity assessment to drive informed business decisions and strategic planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Request Market Analysis
                </Link>
                <Link href="/competitive-intelligence" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                  Competitive Intelligence
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Market Analysis Dashboard */}
                  <rect width="400" height="320" rx="12" fill="white" fillOpacity="0.95"/>
                  
                  {/* Header */}
                  <rect x="20" y="20" width="360" height="30" rx="6" fill="#7c3aed"/>
                  <rect x="30" y="27" width="100" height="16" rx="8" fill="white"/>
                  <circle cx="350" cy="35" r="8" fill="#10b981"/>
                  
                  {/* Market Segments */}
                  <rect x="30" y="70" width="160" height="70" rx="8" fill="#ede9fe"/>
                  <rect x="40" y="80" width="140" height="8" rx="4" fill="#7c3aed"/>
                  <rect x="40" y="95" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="40" y="105" width="80" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="40" y="115" width="50" height="4" rx="2" fill="#9ca3af"/>
                  <circle cx="160" cy="125" r="12" fill="#7c3aed"/>
                  <text x="160" y="130" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">42%</text>
                  
                  <rect x="210" y="70" width="160" height="70" rx="8" fill="#fef3c7"/>
                  <rect x="220" y="80" width="140" height="8" rx="4" fill="#f59e0b"/>
                  <rect x="220" y="95" width="70" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="220" y="105" width="90" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="220" y="115" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <circle cx="340" cy="125" r="12" fill="#f59e0b"/>
                  <text x="340" y="130" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">38%</text>
                  
                  {/* Competitive Analysis */}
                  <rect x="30" y="160" width="340" height="130" rx="8" fill="#f8fafc"/>
                  <rect x="40" y="170" width="120" height="6" rx="3" fill="#3b82f6"/>
                  
                  {/* Market Share Chart */}
                  <circle cx="120" cy="220" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none"/>
                  <circle cx="120" cy="220" r="40" stroke="#7c3aed" strokeWidth="8" fill="none" strokeDasharray="75.4 175.9" transform="rotate(-90 120 220)"/>
                  <circle cx="120" cy="220" r="40" stroke="#3b82f6" strokeWidth="8" fill="none" strokeDasharray="50.3 175.9" strokeDashoffset="-75.4" transform="rotate(-90 120 220)"/>
                  <circle cx="120" cy="220" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="37.7 175.9" strokeDashoffset="-125.7" transform="rotate(-90 120 220)"/>
                  
                  {/* Market Trends */}
                  <path d="M200 250 L230 230 L260 210 L290 195 L320 180 L350 165" stroke="#10b981" strokeWidth="3" fill="none"/>
                  <circle cx="230" cy="230" r="3" fill="#10b981"/>
                  <circle cx="260" cy="210" r="3" fill="#10b981"/>
                  <circle cx="290" cy="195" r="3" fill="#10b981"/>
                  <circle cx="320" cy="180" r="3" fill="#10b981"/>
                  <circle cx="350" cy="165" r="3" fill="#10b981"/>
                  
                  {/* Growth Indicators */}
                  <rect x="200" y="265" width="25" height="10" rx="5" fill="#10b981"/>
                  <text x="212" y="272" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">+24%</text>
                  <rect x="240" y="265" width="25" height="10" rx="5" fill="#3b82f6"/>
                  <text x="252" y="272" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">+18%</text>
                  <rect x="280" y="265" width="25" height="10" rx="5" fill="#f59e0b"/>
                  <text x="292" y="272" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">+15%</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Services */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Market Analysis Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-800 to-purple-950 text-white p-8 rounded-xl shadow-2xl border-2 border-purple-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-pie text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Market Segmentation Analysis</h3>
              <p className="text-white mb-6 text-base font-medium">Comprehensive market segmentation, customer profiling, addressable market sizing, and opportunity assessment across target segments and geographies.</p>
              <div className="text-3xl font-bold text-white mb-2">8 Market Segments</div>
              <div className="text-base text-white font-medium">Segmentation • Profiling • Sizing • Assessment</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-8 rounded-xl shadow-2xl border-2 border-blue-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Competitive Landscape Mapping</h3>
              <p className="text-white mb-6 text-base font-medium">Detailed competitive analysis, market positioning, share analysis, pricing strategies, and competitive advantage assessment for strategic planning.</p>
              <div className="text-3xl font-bold text-white mb-2">250+ Competitors</div>
              <div className="text-base text-white font-medium">Analysis • Positioning • Strategy • Intelligence</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 text-white p-8 rounded-xl shadow-2xl border-2 border-indigo-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Market Opportunity Assessment</h3>
              <p className="text-white mb-6 text-base font-medium">Strategic opportunity identification, market entry analysis, growth potential evaluation, and investment prioritization for expansion planning.</p>
              <div className="text-3xl font-bold text-white mb-2">$2.5B Opportunity</div>
              <div className="text-base text-white font-medium">Identification • Evaluation • Planning • Prioritization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Market Analysis Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Markets Analyzed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Strategy Success Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">$50M+</div>
              <div className="text-gray-600 font-medium">Opportunities Identified</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">48hr</div>
              <div className="text-gray-600 font-medium">Analysis Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Drive Strategic Growth with Market Intelligence</h2>
          <p className="text-xl text-purple-100 mb-8">
            Access comprehensive market analysis and competitive intelligence to identify opportunities and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Request Market Analysis
            </Link>
            <Link href="/technology-research" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Technology Research
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}