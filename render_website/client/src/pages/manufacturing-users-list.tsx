import { Link } from "wouter";

export default function ManufacturingUsersListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Manufacturing Technology Users
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Access comprehensive data on 45,800+ manufacturing companies using advanced technology solutions for Industry 4.0 transformation.
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

      {/* Key Technologies */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Manufacturing Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-industry text-2xl text-blue-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">Industrial IoT & Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">Smart sensors, robotics, and automated production systems for connected manufacturing.</p>
              <div className="text-sm text-blue-600 font-semibold">12,340+ Companies</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-chart-line text-2xl text-green-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">MES & Production Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">Manufacturing execution systems and advanced planning solutions for operational efficiency.</p>
              <div className="text-sm text-green-600 font-semibold">8,920+ Manufacturing Plants</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <i className="fas fa-cube text-2xl text-purple-600 mr-3"></i>
                <h3 className="text-xl font-bold text-gray-800">CAD/CAM & PLM</h3>
              </div>
              <p className="text-gray-600 mb-4">Product lifecycle management and computer-aided design systems for innovation.</p>
              <div className="text-sm text-purple-600 font-semibold">15,680+ Design Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Segments */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Manufacturing Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">8,400+</div>
              <div className="text-gray-600 font-medium">Automotive</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">6,200+</div>
              <div className="text-gray-600 font-medium">Electronics</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">5,800+</div>
              <div className="text-gray-600 font-medium">Aerospace</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">7,900+</div>
              <div className="text-gray-600 font-medium">Industrial Equipment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Manufacturing Technology Users</h2>
          <p className="text-xl text-blue-100 mb-8">
            Access decision-makers driving digital transformation in manufacturing operations worldwide.
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