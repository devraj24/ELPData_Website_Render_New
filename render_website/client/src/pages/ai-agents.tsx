import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <i className="fas fa-robot text-2xl text-cyan-400"></i>
              <span className="font-semibold text-lg">Next-Generation AI Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligent AI Agents for
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Business Automation
              </span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered automation platform that transforms your business operations through intelligent workflow orchestration, 
              data processing, email validation, campaign management, and real-time news intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-rocket mr-2"></i>
                Deploy AI Agents
              </Link>
              <Link href="/contact-us" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 font-bold text-lg backdrop-blur-sm transition-all duration-300">
                <i className="fas fa-play mr-2"></i>
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Automation Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete workflow automation from data upload to intelligent campaign execution with real-time news monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-upload text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Upload & Processing</h3>
                <p className="text-gray-700">
                  Upload contact data including Name, Email, Phone, Company LinkedIn, Personal LinkedIn, and Application details. 
                  Our AI automatically processes and validates all information.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Validation & Verification</h3>
                <p className="text-gray-700">
                  Advanced email validation ensures 99%+ deliverability rates. Invalid emails are automatically filtered out 
                  before campaign launch to protect your sender reputation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-newspaper text-purple-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time News Intelligence</h3>
                <p className="text-gray-700">
                  AI monitors Google and major news sources for application-specific company news. 
                  Delivers personalized messages based on recent developments or general outreach.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-brain text-3xl text-slate-900"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Platform AI Agent</h3>
                  <p className="text-slate-200 mb-6">
                    Central intelligence system that orchestrates all automation workflows, 
                    from data processing to campaign execution and news monitoring.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-cyan-300 font-bold text-lg">99.2%</div>
                      <div className="text-slate-200">Accuracy Rate</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-purple-300 font-bold text-lg">24/7</div>
                      <div className="text-slate-200">Monitoring</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-green-300 font-bold text-lg">95%</div>
                      <div className="text-slate-200">Time Savings</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-orange-300 font-bold text-lg">Real-time</div>
                      <div className="text-slate-200">Processing</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-cog text-white text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fas fa-lightning-bolt text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Workflow Automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end automation that handles everything from data processing to personalized campaign delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <i className="fas fa-database text-white text-2xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Ingestion</h3>
              <p className="text-gray-600">
                Upload contact data with application details. AI automatically structures and validates all information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <i className="fas fa-check-circle text-white text-2xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Validation</h3>
              <p className="text-gray-600">
                Advanced validation algorithms verify email deliverability and filter invalid contacts automatically.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <i className="fas fa-search text-white text-2xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">News Intelligence</h3>
              <p className="text-gray-600">
                AI scrapes LinkedIn and news sources for application-specific company updates and developments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <i className="fas fa-paper-plane text-white text-2xl"></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Campaigns</h3>
              <p className="text-gray-600">
                Personalized messages sent based on news findings or targeted general outreach for maximum engagement.
              </p>
            </div>
          </div>
          
          {/* Workflow Visualization */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <i className="fas fa-play text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Workflow Trigger</h3>
                    <p className="text-gray-600">Data upload initiates automation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-600">ACTIVE</span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fas fa-cogs text-blue-600 text-lg"></i>
                    <h4 className="font-bold text-gray-900">Processing Engine</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Data validation & cleansing
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      LinkedIn URL extraction
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Application categorization
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fas fa-brain text-purple-600 text-lg"></i>
                    <h4 className="font-bold text-gray-900">AI Intelligence</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      News sentiment analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Content personalization
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Timing optimization
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fas fa-rocket text-green-600 text-lg"></i>
                    <h4 className="font-bold text-gray-900">Campaign Execution</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Multi-channel delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Response tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                      Performance analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized AI Agent Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of AI agents designed for specific business functions and industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-robot text-blue-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Platform AI Agent</h3>
              <p className="text-blue-100 mb-6">
                Master orchestrator managing entire workflow automation, data processing, and campaign execution with real-time monitoring capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Workflow automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Data validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Campaign management</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-newspaper text-purple-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">News Intelligence Agent</h3>
              <p className="text-purple-100 mb-6">
                Advanced web scraping and news monitoring system that tracks application-specific company developments across multiple sources.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Real-time news monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">LinkedIn company tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Sentiment analysis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-envelope text-green-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Campaign Agent</h3>
              <p className="text-green-100 mb-6">
                Intelligent email automation with advanced validation, personalization, and deliverability optimization for maximum engagement rates.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Email validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Content personalization</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Deliverability optimization</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-orange-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics Agent</h3>
              <p className="text-orange-100 mb-6">
                Comprehensive performance tracking and optimization system providing real-time insights and campaign improvement recommendations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Performance metrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">ROI optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Predictive insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-cyan-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Agent</h3>
              <p className="text-cyan-100 mb-6">
                Advanced security monitoring and compliance system ensuring data protection, privacy compliance, and secure communication channels.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Data encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Compliance monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Threat detection</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-violet-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-cog text-violet-900 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Integration Agent</h3>
              <p className="text-violet-100 mb-6">
                Seamless connectivity with existing business systems, CRMs, and third-party platforms for unified workflow management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">API connections</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">Data synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span className="text-sm">System compatibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced Technical Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade AI infrastructure built for scale, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i className="fas fa-server text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Cloud Infrastructure</h3>
              <p className="text-slate-200 text-sm">
                Scalable cloud architecture with 99.9% uptime, auto-scaling, and global distribution for optimal performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i className="fas fa-lock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Enterprise Security</h3>
              <p className="text-slate-200 text-sm">
                Bank-level encryption, GDPR compliance, SOC 2 certification, and comprehensive audit trails for maximum security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i className="fas fa-tachometer-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-time Processing</h3>
              <p className="text-slate-200 text-sm">
                Sub-second response times with real-time data processing, instant notifications, and live dashboard updates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i className="fas fa-plug text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">API Integration</h3>
              <p className="text-slate-200 text-sm">
                RESTful APIs, webhooks, and SDKs for seamless integration with existing business systems and workflows.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200">Data Processing Speed</span>
                      <span className="text-cyan-300 font-bold">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.2%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200">Email Deliverability</span>
                      <span className="text-green-300 font-bold">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '98.7%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200">News Detection Accuracy</span>
                      <span className="text-purple-300 font-bold">96.8%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '96.8%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200">Campaign Response Rate</span>
                      <span className="text-orange-300 font-bold">34.5%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '34.5%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="text-6xl font-bold text-white mb-4">24/7</div>
                  <div className="text-xl text-blue-100 mb-6">Continuous Monitoring</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-white font-bold text-lg">1.2M+</div>
                      <div className="text-blue-200">Records Processed</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-white font-bold text-lg">450K+</div>
                      <div className="text-blue-200">Campaigns Sent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy AI Agents</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Transform your business operations with intelligent automation that works 24/7 to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-rocket mr-2"></i>
              Start AI Implementation
            </Link>
            <Link href="/contact-us" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 font-bold text-lg backdrop-blur-sm transition-all duration-300">
              <i className="fas fa-calendar mr-2"></i>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}