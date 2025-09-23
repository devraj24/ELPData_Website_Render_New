import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="url(#automation-pattern)"/>
            <defs>
              <pattern id="automation-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <circle cx="40" cy="40" r="3" fill="white" opacity="0.3"/>
                <rect x="20" y="35" width="40" height="10" rx="5" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
                AI-Powered Marketing Automation
              </h1>
              <p className="text-xl text-white leading-relaxed mb-8">
                Advanced AI agent technology that automates your entire marketing workflow including campaign creation, content generation, data intelligence, competitive analysis, and multi-channel outreach to accelerate business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Start Automation
                </Link>
                <Link href="/marketing-solutions" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-800 font-semibold transition-all">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* AI Automation Dashboard */}
                  <rect width="400" height="320" rx="12" fill="white" fillOpacity="0.95"/>
                  
                  {/* Header */}
                  <rect x="20" y="20" width="360" height="30" rx="6" fill="#6366f1"/>
                  <rect x="30" y="27" width="120" height="16" rx="8" fill="white"/>
                  
                  {/* AI Brain Icon */}
                  <circle cx="340" cy="35" r="12" fill="#f59e0b"/>
                  <circle cx="336" cy="31" r="2" fill="white"/>
                  <circle cx="344" cy="31" r="2" fill="white"/>
                  <path d="M332 39 L340 35 L348 39" stroke="white" strokeWidth="2" fill="none"/>
                  
                  {/* Automation Workflow */}
                  <rect x="30" y="70" width="80" height="40" rx="6" fill="#3b82f6"/>
                  <rect x="35" y="78" width="70" height="8" rx="4" fill="white"/>
                  <rect x="35" y="90" width="50" height="6" rx="3" fill="white" fillOpacity="0.7"/>
                  
                  <rect x="160" y="70" width="80" height="40" rx="6" fill="#10b981"/>
                  <rect x="165" y="78" width="70" height="8" rx="4" fill="white"/>
                  <rect x="165" y="90" width="60" height="6" rx="3" fill="white" fillOpacity="0.7"/>
                  
                  <rect x="290" y="70" width="80" height="40" rx="6" fill="#f59e0b"/>
                  <rect x="295" y="78" width="70" height="8" rx="4" fill="white"/>
                  <rect x="295" y="90" width="45" height="6" rx="3" fill="white" fillOpacity="0.7"/>
                  
                  {/* Arrows */}
                  <path d="M115 90 L155 90" stroke="#6b7280" strokeWidth="2"/>
                  <path d="M245 90 L285 90" stroke="#6b7280" strokeWidth="2"/>
                  <polygon points="150,88 150,92 155,90" fill="#6b7280"/>
                  <polygon points="280,88 280,92 285,90" fill="#6b7280"/>
                  
                  {/* Performance Metrics */}
                  <rect x="30" y="140" width="340" height="60" rx="8" fill="#f3f4f6"/>
                  <rect x="40" y="150" width="100" height="20" rx="4" fill="#ddd6fe"/>
                  <rect x="45" y="155" width="90" height="10" rx="2" fill="#6366f1"/>
                  
                  <rect x="160" y="150" width="100" height="20" rx="4" fill="#dcfce7"/>
                  <rect x="165" y="155" width="90" height="10" rx="2" fill="#10b981"/>
                  
                  <rect x="280" y="150" width="80" height="20" rx="4" fill="#fed7aa"/>
                  <rect x="285" y="155" width="70" height="10" rx="2" fill="#f59e0b"/>
                  
                  {/* Campaign Results */}
                  <rect x="30" y="220" width="340" height="80" rx="8" fill="#f9fafb"/>
                  <circle cx="80" cy="250" r="15" fill="#3b82f6"/>
                  <rect x="70" y="245" width="20" height="10" rx="2" fill="white"/>
                  
                  <circle cx="200" cy="250" r="15" fill="#10b981"/>
                  <path d="M192 250 L198 256 L208 242" stroke="white" strokeWidth="3" fill="none"/>
                  
                  <circle cx="320" cy="250" r="15" fill="#f59e0b"/>
                  <rect x="315" y="247" width="10" height="6" rx="1" fill="white"/>
                  
                  {/* Progress Indicators */}
                  <rect x="40" y="275" width="50" height="4" rx="2" fill="#3b82f6"/>
                  <rect x="160" y="275" width="80" height="4" rx="2" fill="#10b981"/>
                  <rect x="280" y="275" width="60" height="4" rx="2" fill="#f59e0b"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Automation Features */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">AI Marketing Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-robot text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Campaign Creation</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Automated campaign design, content generation using OpenAI, and intelligent audience targeting with real-time optimization.</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">95% Automation</div>
              <div className="text-sm text-gray-600 font-medium">AI Content • Smart Targeting • Auto-optimization</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-search text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Intelligence</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Automated scraping of competitor data, news monitoring, social media tracking, and market intelligence gathering.</p>
              <div className="text-3xl font-bold text-green-600 mb-2">Real-time Insights</div>
              <div className="text-sm text-gray-600 font-medium">Data Scraping • News Monitoring • Social Tracking</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Multi-Channel Outreach</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Automated email campaigns, LinkedIn messaging and connection requests, data extraction, and coordinated multi-platform engagement strategies.</p>
              <div className="text-3xl font-bold text-purple-600 mb-2">360° Reach</div>
              <div className="text-sm text-gray-600 font-medium">Email • LinkedIn Messages • Social • Direct</div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Automation Feature */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">LinkedIn Message Automation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Automated LinkedIn outreach with personalized connection requests, follow-up messages, and relationship building sequences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-linkedin text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Auto Connection Requests</h3>
              <p className="text-gray-600 text-sm">Intelligent targeting and personalized connection requests sent automatically to qualified prospects.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-comments text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Personalized Messaging</h3>
              <p className="text-gray-600 text-sm">AI-generated personalized messages based on prospect's profile, company, and industry insights.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-sync text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Follow-up Sequences</h3>
              <p className="text-gray-600 text-sm">Automated follow-up message sequences with smart timing and relationship nurturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflow */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How Our AI Agent Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Collection</h3>
              <p className="text-gray-600 text-sm">Automated gathering of contact data, company intelligence, and market insights using advanced scraping technology.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Machine learning algorithms analyze data patterns, identify opportunities, and generate personalized content strategies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Campaign Execution</h3>
              <p className="text-gray-600 text-sm">Automated campaign deployment across multiple channels with real-time performance monitoring and optimization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Tracking</h3>
              <p className="text-gray-600 text-sm">Comprehensive analytics, ROI measurement, and continuous learning to improve future campaign effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Advanced Platform Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  <span className="font-medium">Email Campaign Automation</span>
                </div>
                <span className="text-blue-600 font-bold">Automated Sending</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-linkedin text-blue-700 mr-3"></i>
                  <span className="font-medium">LinkedIn Message Automation</span>
                </div>
                <span className="text-blue-700 font-bold">Auto Messaging</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-newspaper text-green-600 mr-3"></i>
                  <span className="font-medium">Real-time News Monitoring</span>
                </div>
                <span className="text-green-600 font-bold">Market Intelligence</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-purple-600 mr-3"></i>
                  <span className="font-medium">Contact Data Validation</span>
                </div>
                <span className="text-purple-600 font-bold">Quality Assurance</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fab fa-twitter text-blue-400 mr-3"></i>
                  <span className="font-medium">Social Media Monitoring</span>
                </div>
                <span className="text-blue-400 font-bold">Social Intelligence</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-brain text-orange-600 mr-3"></i>
                  <span className="font-medium">AI Content Generation</span>
                </div>
                <span className="text-orange-600 font-bold">Smart Writing</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-server text-green-700 mr-3"></i>
                  <span className="font-medium">Secure Data Management</span>
                </div>
                <span className="text-green-700 font-bold">Enterprise Storage</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-spider text-red-600 mr-3"></i>
                  <span className="font-medium">Competitive Intelligence</span>
                </div>
                <span className="text-red-600 font-bold">Market Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Automation ROI Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Time Savings</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600 font-medium">Lead Generation Increase</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
              <div className="text-gray-600 font-medium">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Continuous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Marketing?</h2>
          <p className="text-xl mb-8 opacity-90">Deploy our AI agent to transform your marketing operations with intelligent automation, data-driven insights, and multi-channel campaign management.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Automation
            </Link>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 font-semibold transition-all">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}