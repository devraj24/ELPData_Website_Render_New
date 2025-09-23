import { Link } from "wouter";

export default function SustainabilityUsersListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Sustainability Technology Users
            </h1>
            <p className="text-lg text-green-100 mb-6 max-w-3xl mx-auto">
              Access comprehensive data on 32,500+ organizations using sustainability and environmental technology solutions.
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

      {/* Sustainability Technologies */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sustainability Technology Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-leaf text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Carbon Management</h3>
              <p className="text-gray-600 mb-3">Carbon accounting, emissions tracking, and reduction planning software.</p>
              <div className="text-sm text-green-600 font-semibold">8,940+ Organizations</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-solar-panel text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Renewable Energy</h3>
              <p className="text-gray-600 mb-3">Solar, wind, and renewable energy management systems and monitoring.</p>
              <div className="text-sm text-blue-600 font-semibold">12,760+ Energy Companies</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-recycle text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Waste Management</h3>
              <p className="text-gray-600 mb-3">Circular economy platforms and waste reduction optimization tools.</p>
              <div className="text-sm text-purple-600 font-semibold">6,830+ Companies</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-water text-teal-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Water Management</h3>
              <p className="text-gray-600 mb-3">Water conservation, quality monitoring, and treatment technologies.</p>
              <div className="text-sm text-teal-600 font-semibold">4,970+ Utilities</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-bar text-orange-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">ESG Reporting</h3>
              <p className="text-gray-600 mb-3">Environmental, social, and governance reporting and compliance platforms.</p>
              <div className="text-sm text-orange-600 font-semibold">7,240+ Enterprises</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-building text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Green Building</h3>
              <p className="text-gray-600 mb-3">Smart building management and energy efficiency optimization systems.</p>
              <div className="text-sm text-indigo-600 font-semibold">9,320+ Buildings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Industry Leadership in Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Energy & Utilities</span>
                <span className="text-green-600 font-bold">8,940+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Manufacturing</span>
                <span className="text-blue-600 font-bold">7,680+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Real Estate</span>
                <span className="text-purple-600 font-bold">6,120+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Transportation</span>
                <span className="text-orange-600 font-bold">4,890+ companies</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Technology</span>
                <span className="text-teal-600 font-bold">3,570+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Retail & Consumer</span>
                <span className="text-indigo-600 font-bold">2,940+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Healthcare</span>
                <span className="text-red-600 font-bold">2,460+ companies</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <span className="font-medium">Financial Services</span>
                <span className="text-yellow-600 font-bold">1,780+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Sustainability Leaders</h2>
          <p className="text-xl text-green-100 mb-8">
            Access decision-makers driving environmental technology adoption and sustainability initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
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