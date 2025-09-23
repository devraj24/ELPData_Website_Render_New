import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AccountBasedMarketingPlatformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Account-Based Marketing Services
            </h1>
            <p className="text-lg text-white leading-relaxed mb-6 max-w-3xl mx-auto">
              Strategic account-based marketing solutions that target high-value prospects with personalized campaigns, custom content, and multi-channel engagement strategies to accelerate sales cycles and maximize deal sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Start ABM Campaign
              </Link>
              <Link href="/intent-data-solutions" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-800 font-semibold transition-all">
                Intent Data Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABM Platform Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ABM Service Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-crosshairs text-2xl text-purple-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Strategic Account Targeting</h3>
              </div>
              <p className="text-gray-600 mb-4">Advanced account identification and targeting services with intent data analysis and precision targeting strategies.</p>
              <div className="text-sm text-purple-600 font-semibold">97% Target Accuracy</div>
              <div className="text-xs text-gray-500 mt-1">Account scoring • Intent analysis • Lookalike modeling</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-user-tie text-2xl text-blue-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Personalized Engagement</h3>
              </div>
              <p className="text-gray-600 mb-4">Custom content creation and multi-channel engagement strategies tailored to specific target accounts and stakeholders.</p>
              <div className="text-sm text-blue-600 font-semibold">3x Higher Engagement</div>
              <div className="text-xs text-gray-500 mt-1">Custom content • Multi-channel • Stakeholder mapping</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-chart-line text-2xl text-green-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Campaign Analytics & ROI</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive performance measurement and attribution analysis for ABM campaign optimization and ROI tracking.</p>
              <div className="text-sm text-green-600 font-semibold">208% Average ROI</div>
              <div className="text-xs text-gray-500 mt-1">Performance tracking • Attribution • Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABM Success Metrics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ABM Performance Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">208%</div>
              <div className="text-gray-600 font-medium">Higher Marketing ROI</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">36%</div>
              <div className="text-gray-600 font-medium">Increase in Deal Size</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">71%</div>
              <div className="text-gray-600 font-medium">Higher Account Engagement</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">18%</div>
              <div className="text-gray-600 font-medium">Faster Sales Cycles</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABM Implementation Framework */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ABM Implementation Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic ABM</h3>
              <p className="text-gray-600 mb-4">One-to-one marketing for top-tier accounts with highly personalized campaigns and dedicated resources.</p>
              <div className="text-sm text-purple-600 font-semibold">5-20 Target Accounts</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-layer-group text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">ABM Lite</h3>
              <p className="text-gray-600 mb-4">One-to-few approach targeting account clusters with similar characteristics and semi-personalized content.</p>
              <div className="text-sm text-blue-600 font-semibold">50-500 Target Accounts</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-broadcast-tower text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Programmatic ABM</h3>
              <p className="text-gray-600 mb-4">One-to-many strategy using automation and AI for scalable account targeting and engagement.</p>
              <div className="text-sm text-green-600 font-semibold">1,000+ Target Accounts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise ABM Users */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ABM Platform Users by Company Size</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Enterprise (10,000+ employees)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Strategic ABM Programs</span>
                  <span className="font-semibold text-purple-600">8,400 companies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Annual ABM Budget</span>
                  <span className="font-semibold">$2.4M - $8.7M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Target Accounts</span>
                  <span className="font-semibold">150 - 500</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Mid-Market (1,000-9,999 employees)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>ABM Lite & Programmatic</span>
                  <span className="font-semibold text-blue-600">14,200 companies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Annual ABM Budget</span>
                  <span className="font-semibold">$180K - $950K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average Target Accounts</span>
                  <span className="font-semibold">50 - 300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABM Decision Makers */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ABM Decision Makers & Influencers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "VP of Marketing", description: "Strategic ABM program oversight and platform selection", icon: "fas fa-crown", count: "12,400+ contacts" },
              { title: "ABM Program Manager", description: "Day-to-day ABM campaign execution and optimization", icon: "fas fa-bullseye", count: "8,600+ contacts" },
              { title: "Demand Generation Manager", description: "Account targeting and lead generation strategy", icon: "fas fa-magnet", count: "14,200+ contacts" },
              { title: "Sales Development Director", description: "Sales and marketing alignment for account penetration", icon: "fas fa-handshake", count: "9,800+ contacts" },
              { title: "Marketing Operations Manager", description: "ABM technology stack and data management", icon: "fas fa-cogs", count: "11,600+ contacts" },
              { title: "Customer Success Director", description: "Account expansion and retention strategies", icon: "fas fa-chart-line", count: "7,400+ contacts" }
            ].map((role, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-3">
                  <i className={`${role.icon} text-lg text-purple-600 mr-3`}></i>
                  <h3 className="font-bold text-gray-800">{role.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                <div className="text-sm font-semibold text-purple-600">{role.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with ABM Platform Users</h2>
          <p className="text-xl text-purple-100 mb-8">
            Access decision-makers at enterprises using account-based marketing platforms for high-value account targeting and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Get ABM Database Access
            </Link>
            <Link href="/intent-data-solutions" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Intent Data Solutions
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}