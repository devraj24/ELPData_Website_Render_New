import { Link } from "wouter";

export default function MainframeUsersListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Mainframe Users Database
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Access comprehensive data on 18,720+ companies using mainframe systems for mission-critical enterprise operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Access Database
              </Link>
              <Link href="/data-solutions" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">18,720+</div>
              <div className="text-gray-600 font-medium">Total Companies</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Fortune 500</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">9</div>
              <div className="text-gray-600 font-medium">Key Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Primary Industries Using Mainframes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-university text-2xl text-blue-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Banking & Financial Services</h3>
              </div>
              <p className="text-gray-600 mb-4">Mission-critical transaction processing, real-time fraud detection, and core banking systems.</p>
              <div className="text-sm text-blue-600 font-semibold">5,240+ Financial Institutions</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-shield-alt text-2xl text-green-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Insurance Companies</h3>
              </div>
              <p className="text-gray-600 mb-4">Policy management, claims processing, and actuarial calculations for large-scale operations.</p>
              <div className="text-sm text-green-600 font-semibold">2,890+ Insurance Providers</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-landmark text-2xl text-purple-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Government & Public Sector</h3>
              </div>
              <p className="text-gray-600 mb-4">Critical infrastructure, social services, and large-scale administrative systems.</p>
              <div className="text-sm text-purple-600 font-semibold">3,120+ Government Agencies</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-heartbeat text-2xl text-red-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Healthcare Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">Patient records, billing systems, and large-scale health information exchanges.</p>
              <div className="text-sm text-red-600 font-semibold">1,680+ Healthcare Organizations</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-phone text-2xl text-indigo-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Telecommunications</h3>
              </div>
              <p className="text-gray-600 mb-4">Network management, billing systems, and customer service platforms.</p>
              <div className="text-sm text-indigo-600 font-semibold">2,450+ Telecom Companies</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-plane text-2xl text-teal-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Airlines & Transportation</h3>
              </div>
              <p className="text-gray-600 mb-4">Reservation systems, logistics management, and real-time operations control.</p>
              <div className="text-sm text-teal-600 font-semibold">3,340+ Transportation Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Decision Makers */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Key Decision Makers & Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mainframe Systems Administrators", description: "Manage day-to-day mainframe operations and system maintenance", icon: "fas fa-server" },
              { title: "COBOL Developers", description: "Develop and maintain legacy applications and business logic", icon: "fas fa-code" },
              { title: "Database Administrators (DBAs)", description: "Manage enterprise databases and data integrity", icon: "fas fa-database" },
              { title: "System Programmers", description: "Handle system-level programming and optimization", icon: "fas fa-cogs" },
              { title: "IT Infrastructure Managers", description: "Oversee enterprise computing infrastructure strategy", icon: "fas fa-network-wired" },
              { title: "Enterprise Architects", description: "Design enterprise-wide technology architecture", icon: "fas fa-building" }
            ].map((role, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-3">
                  <i className={`${role.icon} text-lg text-blue-600 mr-3`}></i>
                  <h3 className="font-bold text-gray-800">{role.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Challenges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Current Implementation Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Skills Shortage & Aging Workforce",
                description: "Critical need for mainframe expertise as experienced professionals retire",
                impact: "High Priority",
                color: "red"
              },
              {
                title: "Modernization & Digital Transformation",
                description: "Balancing legacy system reliability with modern technology integration",
                impact: "Strategic Focus",
                color: "blue"
              },
              {
                title: "High Operational Costs",
                description: "Managing expensive licensing, hardware, and maintenance expenses",
                impact: "Cost Concern",
                color: "orange"
              },
              {
                title: "Cloud Integration Challenges",
                description: "Connecting mainframe systems with modern cloud architectures",
                impact: "Technology Gap",
                color: "purple"
              },
              {
                title: "Security & Compliance",
                description: "Maintaining security standards while meeting modern regulatory requirements",
                impact: "Compliance Risk",
                color: "green"
              },
              {
                title: "Vendor Dependencies",
                description: "Limited vendor options creating potential lock-in situations",
                impact: "Strategic Risk",
                color: "indigo"
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-800 flex-1">{challenge.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${challenge.color}-100 text-${challenge.color}-700`}>
                    {challenge.impact}
                  </span>
                </div>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Access Mainframe User Intelligence</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with decision-makers at organizations running mission-critical mainframe systems across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get Database Access
            </Link>
            <Link href="/data-solutions" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}