import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient text-white pt-6 pb-10 relative overflow-hidden">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white text-shadow leading-tight">
                AI Technology Data & Business Intelligence Platform
              </h1>
              <h2 className="text-sm sm:text-base md:text-lg font-medium mb-4 text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text leading-relaxed">
                Technology Database Overview: 500+ Software Customer Lists. The most comprehensive technology data and business insights platform covering enterprise implementations, decision makers, and market intelligence.
              </h2>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              <div className="group bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 p-3 sm:p-4 rounded-xl shadow-lg border border-emerald-300/40 backdrop-blur-sm transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-emerald-500/30">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 group-hover:text-emerald-100 transition-all">AI Technology Expert</h3>
                  <p className="text-emerald-50 text-xs leading-relaxed">
                    Get instant insights on any enterprise technology
                  </p>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 p-3 sm:p-4 rounded-xl shadow-lg border border-violet-300/40 backdrop-blur-sm transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-violet-500/30">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 group-hover:text-violet-100 transition-all">1025+ Technology Lists</h3>
                  <p className="text-violet-50 text-xs leading-relaxed">
                    Access comprehensive user databases
                  </p>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-rose-400 via-pink-500 to-red-600 p-3 sm:p-4 rounded-xl shadow-lg border border-rose-300/40 backdrop-blur-sm transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-rose-500/30 sm:col-span-2 lg:col-span-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 group-hover:text-rose-100 transition-all">Market Intelligence</h3>
                  <p className="text-rose-50 text-xs leading-relaxed">
                    Strategic insights and competitive analysis
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/contact-us">
                <a 
                  className="group bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg border border-orange-300/30 backdrop-blur-sm transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-orange-500/40 flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  <span>Get Started Today</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
              <Link href="/contact-us">
                <a 
                  className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg border border-cyan-300/30 backdrop-blur-sm transform hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-cyan-500/40 flex items-center justify-center"
                >
                  <span className="mr-2">⚡</span>
                  <span>API Access</span>
                  <svg className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-40 transform rotate-2 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-orange-400 to-pink-500 rounded-2xl blur-2xl opacity-30 transform -rotate-1 scale-105"></div>
              <div className="relative rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <svg className="w-full h-72" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Office Environment */}
                  <rect x="20" y="20" width="360" height="60" rx="8" fill="#f8fafc" stroke="#64748b" strokeWidth="1"/>
                  <rect x="30" y="30" width="100" height="40" rx="4" fill="#e2e8f0"/>
                  <rect x="140" y="30" width="100" height="40" rx="4" fill="#e2e8f0"/>
                  <rect x="250" y="30" width="100" height="40" rx="4" fill="#e2e8f0"/>
                  
                  {/* Modern Conference Table */}
                  <ellipse cx="200" cy="180" rx="160" ry="50" fill="#374151"/>
                  <ellipse cx="200" cy="175" rx="160" ry="50" fill="#4b5563"/>
                  <ellipse cx="200" cy="170" rx="160" ry="50" fill="#6b7280"/>
                  
                  {/* Laptops and Devices */}
                  <rect x="120" y="150" width="40" height="28" rx="3" fill="#1f2937"/>
                  <rect x="124" y="154" width="32" height="20" rx="2" fill="#475569"/>
                  <rect x="127" y="157" width="6" height="4" rx="1" fill="#64748b"/>
                  <rect x="136" y="157" width="14" height="3" rx="1" fill="#94a3b8"/>
                  <rect x="136" y="162" width="10" height="3" rx="1" fill="#94a3b8"/>
                  <rect x="136" y="167" width="12" height="3" rx="1" fill="#94a3b8"/>
                  
                  <rect x="240" y="150" width="40" height="28" rx="3" fill="#1f2937"/>
                  <rect x="244" y="154" width="32" height="20" rx="2" fill="#10b981"/>
                  <rect x="247" y="157" width="6" height="4" rx="1" fill="#34d399"/>
                  <rect x="256" y="157" width="14" height="3" rx="1" fill="#6ee7b7"/>
                  <rect x="256" y="162" width="10" height="3" rx="1" fill="#6ee7b7"/>
                  <rect x="256" y="167" width="12" height="3" rx="1" fill="#6ee7b7"/>
                  
                  {/* Large Display Screen */}
                  <rect x="80" y="90" width="240" height="140" rx="8" fill="#111827"/>
                  <rect x="88" y="98" width="224" height="124" rx="4" fill="#1e293b"/>
                  
                  {/* Dashboard Interface */}
                  <rect x="96" y="106" width="208" height="24" rx="4" fill="#0f172a"/>
                  <rect x="104" y="112" width="64" height="8" rx="2" fill="#64748b"/>
                  <circle cx="280" cy="116" r="6" fill="#10b981"/>
                  <path d="M276 116L278 118L284 112" stroke="white" strokeWidth="1" fill="none"/>
                  
                  {/* Analytics Charts */}
                  <rect x="104" y="140" width="80" height="60" rx="4" fill="#374151"/>
                  <path d="M110 180 L122 168 L134 172 L146 160 L158 164 L170 152" stroke="#10b981" strokeWidth="2" fill="none"/>
                  <circle cx="122" cy="168" r="2" fill="#10b981"/>
                  <circle cx="134" cy="172" r="2" fill="#10b981"/>
                  <circle cx="146" cy="160" r="2" fill="#10b981"/>
                  <circle cx="158" cy="164" r="2" fill="#10b981"/>
                  
                  {/* Bar Chart */}
                  <rect x="200" y="140" width="96" height="60" rx="4" fill="#064e3b"/>
                  <rect x="208" y="175" width="10" height="16" rx="2" fill="#10b981"/>
                  <rect x="220" y="165" width="10" height="26" rx="2" fill="#059669"/>
                  <rect x="232" y="155" width="10" height="36" rx="2" fill="#047857"/>
                  <rect x="244" y="145" width="10" height="46" rx="2" fill="#065f46"/>
                  <rect x="256" y="135" width="10" height="56" rx="2" fill="#064e3b"/>
                  <rect x="268" y="150" width="10" height="41" rx="2" fill="#047857"/>
                  <rect x="280" y="140" width="10" height="51" rx="2" fill="#059669"/>
                  
                  {/* Professional Business People */}
                  <ellipse cx="60" cy="270" rx="20" ry="6" fill="#1f2937" opacity="0.3"/>
                  <rect x="55" y="210" width="10" height="60" rx="5" fill="#1e40af"/>
                  <circle cx="60" cy="200" r="10" fill="#fbbf24"/>
                  <rect x="50" y="220" width="6" height="20" rx="3" fill="#1e40af"/>
                  <rect x="64" y="220" width="6" height="20" rx="3" fill="#1e40af"/>
                  <rect x="50" y="240" width="5" height="30" rx="2" fill="#374151"/>
                  <rect x="65" y="240" width="5" height="30" rx="2" fill="#374151"/>
                  
                  <ellipse cx="140" cy="270" rx="18" ry="5" fill="#1f2937" opacity="0.3"/>
                  <rect x="135" y="230" width="10" height="40" rx="5" fill="#dc2626"/>
                  <circle cx="140" cy="220" r="8" fill="#f59e0b"/>
                  <rect x="130" y="240" width="5" height="15" rx="2" fill="#dc2626"/>
                  <rect x="145" y="240" width="5" height="15" rx="2" fill="#dc2626"/>
                  <rect x="130" y="255" width="4" height="15" rx="2" fill="#374151"/>
                  <rect x="146" y="255" width="4" height="15" rx="2" fill="#374151"/>
                  
                  <ellipse cx="260" cy="270" rx="18" ry="5" fill="#1f2937" opacity="0.3"/>
                  <rect x="255" y="230" width="10" height="40" rx="5" fill="#7c3aed"/>
                  <circle cx="260" cy="220" r="8" fill="#f97316"/>
                  <rect x="250" y="240" width="5" height="15" rx="2" fill="#7c3aed"/>
                  <rect x="265" y="240" width="5" height="15" rx="2" fill="#7c3aed"/>
                  <rect x="250" y="255" width="4" height="15" rx="2" fill="#374151"/>
                  <rect x="266" y="255" width="4" height="15" rx="2" fill="#374151"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
