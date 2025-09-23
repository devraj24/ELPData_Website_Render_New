import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompetitiveIntelligencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-rose-800 to-pink-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="url(#intelligence-pattern)"/>
            <defs>
              <pattern id="intelligence-pattern" patternUnits="userSpaceOnUse" width="150" height="150">
                <circle cx="75" cy="75" r="50" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="75" cy="75" r="30" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="75" cy="75" r="10" fill="white"/>
                <rect x="25" y="25" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
                <rect x="105" y="25" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
                <rect x="25" y="105" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
                <rect x="105" y="105" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Strategic Competitive Intelligence
              </h1>
              <p className="text-xl text-white font-medium mb-8">
                Advanced competitive analysis, market positioning intelligence, competitor tracking, strategic benchmarking, and threat assessment to maintain competitive advantage and drive strategic planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Start Intelligence Gathering
                </Link>
                <Link href="/market-analysis" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                  Market Analysis
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Competitive Intelligence Dashboard */}
                  <rect width="400" height="320" rx="12" fill="white" fillOpacity="0.95"/>
                  
                  {/* Header */}
                  <rect x="20" y="20" width="360" height="30" rx="6" fill="#dc2626"/>
                  <rect x="30" y="27" width="120" height="16" rx="8" fill="white"/>
                  <circle cx="350" cy="35" r="8" fill="#10b981"/>
                  
                  {/* Competitor Analysis Grid */}
                  <rect x="30" y="70" width="100" height="60" rx="8" fill="#fef2f2"/>
                  <rect x="40" y="80" width="80" height="6" rx="3" fill="#dc2626"/>
                  <rect x="40" y="90" width="50" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="40" y="96" width="60" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="40" y="102" width="40" height="3" rx="1" fill="#9ca3af"/>
                  <circle cx="110" cy="115" r="10" fill="#dc2626"/>
                  <text x="110" y="119" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A</text>
                  
                  <rect x="150" y="70" width="100" height="60" rx="8" fill="#fef3c7"/>
                  <rect x="160" y="80" width="80" height="6" rx="3" fill="#f59e0b"/>
                  <rect x="160" y="90" width="55" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="160" y="96" width="65" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="160" y="102" width="45" height="3" rx="1" fill="#9ca3af"/>
                  <circle cx="230" cy="115" r="10" fill="#f59e0b"/>
                  <text x="230" y="119" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">B</text>
                  
                  <rect x="270" y="70" width="100" height="60" rx="8" fill="#f0fdf4"/>
                  <rect x="280" y="80" width="80" height="6" rx="3" fill="#10b981"/>
                  <rect x="280" y="90" width="60" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="280" y="96" width="70" height="3" rx="1" fill="#9ca3af"/>
                  <rect x="280" y="102" width="50" height="3" rx="1" fill="#9ca3af"/>
                  <circle cx="350" cy="115" r="10" fill="#10b981"/>
                  <text x="350" y="119" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">C</text>
                  
                  {/* Market Position Matrix */}
                  <rect x="30" y="150" width="340" height="140" rx="8" fill="#f8fafc"/>
                  <rect x="40" y="160" width="100" height="6" rx="3" fill="#8b5cf6"/>
                  
                  {/* Positioning Chart */}
                  <line x1="50" y1="270" x2="350" y2="270" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="50" y1="270" x2="50" y2="180" stroke="#e5e7eb" strokeWidth="1"/>
                  
                  {/* Competitor Positions */}
                  <circle cx="120" cy="220" r="8" fill="#dc2626"/>
                  <text x="120" y="225" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">A</text>
                  <circle cx="200" cy="200" r="8" fill="#f59e0b"/>
                  <text x="200" y="205" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">B</text>
                  <circle cx="280" cy="190" r="8" fill="#10b981"/>
                  <text x="280" y="195" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">C</text>
                  <circle cx="160" cy="240" r="10" fill="#8b5cf6"/>
                  <text x="160" y="245" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">US</text>
                  
                  {/* Axis Labels */}
                  <text x="200" y="285" textAnchor="middle" fill="#6b7280" fontSize="8">Market Share</text>
                  <text x="40" y="225" textAnchor="middle" fill="#6b7280" fontSize="8" transform="rotate(-90 40 225)">Innovation</text>
                  
                  {/* Trend Arrows */}
                  <path d="M300 200 L320 180" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M240 210 L260 230" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Services */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Competitive Intelligence Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-800 to-red-950 text-white p-8 rounded-xl shadow-2xl border-2 border-red-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Competitor Profiling & Analysis</h3>
              <p className="text-white mb-6 text-base font-medium">Comprehensive competitor profiles, business model analysis, technology stack assessment, pricing strategies, and market positioning evaluation.</p>
              <div className="text-3xl font-bold text-white mb-2">200+ Profiles</div>
              <div className="text-base text-white font-medium">Profiling • Analysis • Assessment • Monitoring</div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-800 to-rose-950 text-white p-8 rounded-xl shadow-2xl border-2 border-rose-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-crosshairs text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Threat Assessment & Monitoring</h3>
              <p className="text-white mb-6 text-base font-medium">Continuous threat monitoring, early warning systems, competitive threat analysis, and strategic risk assessment for proactive response planning.</p>
              <div className="text-3xl font-bold text-white mb-2">24/7 Monitoring</div>
              <div className="text-base text-white font-medium">Monitoring • Assessment • Alerts • Response</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-800 to-pink-950 text-white p-8 rounded-xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-bar text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Market Position Benchmarking</h3>
              <p className="text-white mb-6 text-base font-medium">Strategic benchmarking, competitive positioning analysis, market share tracking, and performance comparison across key business metrics.</p>
              <div className="text-3xl font-bold text-white mb-2">50+ KPIs</div>
              <div className="text-base text-white font-medium">Benchmarking • Tracking • Analysis • Reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Intelligence Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">800+</div>
              <div className="text-gray-600 font-medium">Competitors Tracked</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Threat Detection Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">72hr</div>
              <div className="text-gray-600 font-medium">Intelligence Delivery</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">$25M+</div>
              <div className="text-gray-600 font-medium">Risk Mitigation Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of Competition with Strategic Intelligence</h2>
          <p className="text-xl text-red-100 mb-8">
            Access comprehensive competitive intelligence and market positioning analysis to maintain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Start Intelligence Program
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