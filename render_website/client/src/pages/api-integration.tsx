import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function APIIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="url(#api-pattern)"/>
            <defs>
              <pattern id="api-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <rect x="20" y="20" width="40" height="40" rx="8" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="40" cy="40" r="8" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M40 32 v16 M32 40 h16" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-white">
                Seamless API Integration Solutions
              </h1>
              <p className="text-xl text-white font-medium mb-8">
                Enterprise-grade API integration services, custom development, data synchronization, real-time connectivity, and comprehensive technical support for seamless business system integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/api-reference" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  View API Documentation
                </Link>
                <Link href="/data-services" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                  All Data Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* API Integration Dashboard */}
                  <rect width="400" height="320" rx="12" fill="white" fillOpacity="0.95"/>
                  
                  {/* Header */}
                  <rect x="20" y="20" width="360" height="30" rx="6" fill="#059669"/>
                  <rect x="30" y="27" width="100" height="16" rx="8" fill="white"/>
                  <circle cx="350" cy="35" r="8" fill="#10b981"/>
                  
                  {/* API Endpoints */}
                  <rect x="30" y="70" width="160" height="80" rx="8" fill="#ecfdf5"/>
                  <rect x="40" y="80" width="140" height="8" rx="4" fill="#059669"/>
                  <rect x="40" y="95" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="40" y="105" width="80" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="40" y="115" width="50" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="40" y="125" width="40" height="15" rx="7" fill="#10b981"/>
                  <text x="60" y="135" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">GET</text>
                  <rect x="90" y="125" width="40" height="15" rx="7" fill="#3b82f6"/>
                  <text x="110" y="135" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">POST</text>
                  
                  <rect x="210" y="70" width="160" height="80" rx="8" fill="#fef3c7"/>
                  <rect x="220" y="80" width="140" height="8" rx="4" fill="#f59e0b"/>
                  <rect x="220" y="95" width="70" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="220" y="105" width="90" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="220" y="115" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="220" y="125" width="40" height="15" rx="7" fill="#f59e0b"/>
                  <text x="240" y="135" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PUT</text>
                  <rect x="270" y="125" width="50" height="15" rx="7" fill="#ef4444"/>
                  <text x="295" y="135" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DELETE</text>
                  
                  {/* Integration Flow */}
                  <rect x="30" y="170" width="340" height="120" rx="8" fill="#f8fafc"/>
                  <rect x="40" y="180" width="100" height="6" rx="3" fill="#6366f1"/>
                  
                  {/* Data Flow Diagram */}
                  <rect x="50" y="200" width="60" height="40" rx="8" fill="#3b82f6"/>
                  <text x="80" y="215" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Client</text>
                  <text x="80" y="225" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">App</text>
                  
                  <rect x="170" y="200" width="60" height="40" rx="8" fill="#059669"/>
                  <text x="200" y="215" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ELP</text>
                  <text x="200" y="225" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">API</text>
                  
                  <rect x="290" y="200" width="60" height="40" rx="8" fill="#f59e0b"/>
                  <text x="320" y="215" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Data</text>
                  <text x="320" y="225" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Source</text>
                  
                  {/* Connection Lines */}
                  <path d="M110 220 L170 220" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M230 220 L290 220" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  
                  {/* Response Codes */}
                  <rect x="50" y="255" width="30" height="20" rx="4" fill="#10b981"/>
                  <text x="65" y="267" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">200</text>
                  <rect x="90" y="255" width="30" height="20" rx="4" fill="#f59e0b"/>
                  <text x="105" y="267" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">429</text>
                  <rect x="130" y="255" width="30" height="20" rx="4" fill="#ef4444"/>
                  <text x="145" y="267" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">500</text>
                  
                  {/* Performance Metrics */}
                  <rect x="200" y="255" width="80" height="20" rx="4" fill="#8b5cf6"/>
                  <text x="240" y="267" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">99.9% Uptime</text>
                  <rect x="290" y="255" width="80" height="20" rx="4" fill="#06b6d4"/>
                  <text x="330" y="267" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">100ms</text>
                  
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

      {/* Integration Services */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">API Integration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-8 rounded-xl shadow-2xl border-2 border-emerald-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-plug text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">RESTful API Development</h3>
              <p className="text-white mb-6 text-base font-medium">Custom RESTful API development, endpoint design, authentication systems, rate limiting, documentation, and comprehensive testing for robust integrations.</p>
              <div className="text-3xl font-bold text-white mb-2">50+ Endpoints</div>
              <div className="text-base text-white font-medium">Development • Testing • Documentation • Support</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-800 to-teal-950 text-white p-8 rounded-xl shadow-2xl border-2 border-teal-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-sync text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Real-Time Data Synchronization</h3>
              <p className="text-white mb-6 text-base font-medium">Real-time data sync, webhook integration, event streaming, data transformation, and bi-directional synchronization for seamless data flow.</p>
              <div className="text-3xl font-bold text-white mb-2">100ms Latency</div>
              <div className="text-base text-white font-medium">Sync • Webhooks • Streaming • Transformation</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-800 to-cyan-950 text-white p-8 rounded-xl shadow-2xl border-2 border-cyan-300 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/40 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise Security & Support</h3>
              <p className="text-white mb-6 text-base font-medium">Enterprise-grade security, OAuth 2.0, API key management, monitoring, 24/7 support, and comprehensive SLA guarantees.</p>
              <div className="text-3xl font-bold text-white mb-2">99.9% Uptime SLA</div>
              <div className="text-base text-white font-medium">Security • Monitoring • Support • SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">API Integration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-code text-emerald-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">SDK & Code Libraries</h3>
                  <p className="text-gray-600">Pre-built SDKs for popular programming languages including Python, JavaScript, PHP, and Java.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book text-teal-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Comprehensive Documentation</h3>
                  <p className="text-gray-600">Detailed API documentation, code examples, tutorials, and interactive testing environment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chart-line text-cyan-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Usage Analytics & Monitoring</h3>
                  <p className="text-gray-600">Real-time usage analytics, performance monitoring, error tracking, and detailed reporting.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cogs text-emerald-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Custom Integration Support</h3>
                  <p className="text-gray-600">Dedicated integration support, custom endpoint development, and specialized consulting services.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-teal-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Rate Limiting & Throttling</h3>
                  <p className="text-gray-600">Intelligent rate limiting, request throttling, and fair usage policies for optimal performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-key text-cyan-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">API Key Management</h3>
                  <p className="text-gray-600">Secure API key generation, rotation, access control, and usage tracking for enhanced security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">API Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-emerald-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">API Uptime</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-teal-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">100ms</div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-cyan-200">
              <div className="text-3xl font-bold text-cyan-600 mb-2">10M+</div>
              <div className="text-gray-600 font-medium">API Calls/Month</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Accelerate Integration with Enterprise APIs</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Access powerful APIs and integration services to connect your systems and streamline data flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api-reference" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              View API Documentation
            </Link>
            <Link href="/contact-us" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Request Integration Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}