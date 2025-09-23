import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EmailMarketingPlatformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="url(#email-pattern)"/>
            <defs>
              <pattern id="email-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                <rect x="20" y="20" width="40" height="30" rx="4" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M25 30L40 40L55 30" stroke="white" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Professional Email Marketing Services
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                Drive revenue growth with our comprehensive email marketing services including campaign strategy, design and development, list management, automation setup, A/B testing, deliverability optimization, and detailed performance analytics to maximize engagement and conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Request Email Marketing
                </Link>
                <Link href="/marketing-solutions" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-800 font-semibold transition-all">
                  All Marketing Platforms
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <svg className="w-full h-80" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Email Marketing Dashboard */}
                  <rect width="400" height="320" rx="12" fill="white" fillOpacity="0.95"/>
                  
                  {/* Header */}
                  <rect x="20" y="20" width="360" height="30" rx="6" fill="#4f46e5"/>
                  <rect x="30" y="27" width="100" height="16" rx="8" fill="white"/>
                  
                  {/* Email Templates */}
                  <rect x="30" y="70" width="100" height="70" rx="8" fill="#e0e7ff"/>
                  <rect x="35" y="75" width="90" height="8" rx="4" fill="#4f46e5"/>
                  <rect x="35" y="88" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="35" y="95" width="70" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="35" y="102" width="50" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="35" y="115" width="40" height="15" rx="7" fill="#4f46e5"/>
                  
                  <rect x="150" y="70" width="100" height="70" rx="8" fill="#fef3c7"/>
                  <rect x="155" y="75" width="90" height="8" rx="4" fill="#f59e0b"/>
                  <rect x="155" y="88" width="65" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="155" y="95" width="75" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="155" y="102" width="55" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="155" y="115" width="45" height="15" rx="7" fill="#f59e0b"/>
                  
                  <rect x="270" y="70" width="100" height="70" rx="8" fill="#d1fae5"/>
                  <rect x="275" y="75" width="90" height="8" rx="4" fill="#10b981"/>
                  <rect x="275" y="88" width="70" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="275" y="95" width="60" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="275" y="102" width="80" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="275" y="115" width="50" height="15" rx="7" fill="#10b981"/>
                  
                  {/* Analytics Section */}
                  <rect x="30" y="160" width="340" height="130" rx="8" fill="#f8fafc"/>
                  <rect x="40" y="170" width="120" height="6" rx="3" fill="#6366f1"/>
                  
                  {/* Email Performance Metrics */}
                  <circle cx="80" cy="200" r="25" fill="#6366f1" fillOpacity="0.2"/>
                  <circle cx="80" cy="200" r="20" fill="#6366f1"/>
                  <text x="80" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">95%</text>
                  <rect x="60" y="230" width="40" height="6" rx="3" fill="#9ca3af"/>
                  
                  <circle cx="200" cy="200" r="25" fill="#10b981" fillOpacity="0.2"/>
                  <circle cx="200" cy="200" r="20" fill="#10b981"/>
                  <text x="200" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">68%</text>
                  <rect x="180" y="230" width="40" height="6" rx="3" fill="#9ca3af"/>
                  
                  <circle cx="320" cy="200" r="25" fill="#f59e0b" fillOpacity="0.2"/>
                  <circle cx="320" cy="200" r="20" fill="#f59e0b"/>
                  <text x="320" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">45%</text>
                  <rect x="300" y="230" width="40" height="6" rx="3" fill="#9ca3af"/>
                  
                  {/* Growth Arrow */}
                  <path d="M50 260 L350 260" stroke="#10b981" strokeWidth="2"/>
                  <path d="M340 255 L350 260 L340 265" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Email Marketing Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-envelope text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Campaign Strategy & Design</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Complete email campaign development including strategic planning, responsive design, compelling copywriting, and brand-consistent templates optimized for maximum engagement.</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">45% Open Rate</div>
              <div className="text-sm text-gray-600 font-medium">Strategy • Design • Copywriting • Testing</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-mail-bulk text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Account-Based Email Marketing</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Personalized email campaigns for target accounts, executive-level messaging, multi-stakeholder engagement sequences, and account penetration strategies.</p>
              <div className="text-3xl font-bold text-green-600 mb-2">68% Executive Open Rate</div>
              <div className="text-sm text-gray-600 font-medium">ABM • Personalization • Multi-Touch • Executive Outreach</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Analytics & Optimization</h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">Comprehensive performance tracking, A/B testing, deliverability monitoring, revenue attribution, and detailed reporting with actionable insights for continuous improvement.</p>
              <div className="text-3xl font-bold text-purple-600 mb-2">250% ROI Growth</div>
              <div className="text-sm text-gray-600 font-medium">Analytics • Testing • Reporting • Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Usage */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Email Marketing by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-shopping-cart text-blue-600 mr-3"></i>
                  <span className="font-medium">E-commerce & Retail</span>
                </div>
                <span className="text-blue-600 font-bold">1.2M+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-laptop text-green-600 mr-3"></i>
                  <span className="font-medium">Technology & Software</span>
                </div>
                <span className="text-green-600 font-bold">987,340+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-university text-purple-600 mr-3"></i>
                  <span className="font-medium">Financial Services</span>
                </div>
                <span className="text-purple-600 font-bold">834,567+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-heartbeat text-red-600 mr-3"></i>
                  <span className="font-medium">Healthcare</span>
                </div>
                <span className="text-red-600 font-bold">923,789+ companies</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-orange-600 mr-3"></i>
                  <span className="font-medium">Education</span>
                </div>
                <span className="text-orange-600 font-bold">756,430+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-home text-teal-600 mr-3"></i>
                  <span className="font-medium">Real Estate</span>
                </div>
                <span className="text-teal-600 font-bold">678,290+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-utensils text-pink-600 mr-3"></i>
                  <span className="font-medium">Food & Hospitality</span>
                </div>
                <span className="text-pink-600 font-bold">645,890+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center">
                  <i className="fas fa-industry text-gray-600 mr-3"></i>
                  <span className="font-medium">Manufacturing</span>
                </div>
                <span className="text-gray-600 font-bold">812,340+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Decision Makers */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Email Marketing Decision Makers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Chief Marketing Officer", description: "Strategic oversight of email marketing initiatives and budget allocation", icon: "fas fa-crown", count: "18,400+ contacts" },
              { title: "Marketing Director", description: "Campaign management and marketing technology selection", icon: "fas fa-bullseye", count: "24,600+ contacts" },
              { title: "Digital Marketing Manager", description: "Day-to-day email campaign execution and optimization", icon: "fas fa-laptop", count: "31,200+ contacts" },
              { title: "Marketing Automation Specialist", description: "Technical implementation and workflow automation", icon: "fas fa-cogs", count: "14,800+ contacts" },
              { title: "Email Marketing Manager", description: "Dedicated email strategy and performance management", icon: "fas fa-envelope", count: "22,100+ contacts" },
              { title: "Customer Success Manager", description: "Email-based customer retention and engagement", icon: "fas fa-users", count: "19,300+ contacts" }
            ].map((role, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-3">
                  <i className={`${role.icon} text-lg text-blue-600 mr-3`}></i>
                  <h3 className="font-bold text-gray-800">{role.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                <div className="text-sm font-semibold text-blue-600">{role.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Marketing Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Platform Performance Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">21.3%</div>
              <div className="text-gray-600 font-medium">Average Open Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2.9%</div>
              <div className="text-gray-600 font-medium">Average Click Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">$38</div>
              <div className="text-gray-600 font-medium">Average ROI per $1</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">98.2%</div>
              <div className="text-gray-600 font-medium">Delivery Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Email Marketing Users</h2>
          <p className="text-xl text-blue-100 mb-8">
            Access decision-makers at companies using email marketing platforms to drive engagement and revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Get Database Access
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