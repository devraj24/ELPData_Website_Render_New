import { useState } from "react";

export default function APIIntegration() {
  const [isConnected] = useState(true);
  const [selectedProvider] = useState("github");

  const endpoints = [
    { method: "GET", name: "Companies endpoint", path: "/api/v2/companies", color: "bg-primary-navy" },
    { method: "POST", name: "Search endpoint", path: "/api/v2/search", color: "bg-accent-green" },
    { method: "GET", name: "Analytics endpoint", path: "/api/v2/analytics", color: "bg-primary-orange" }
  ];

  return (
    <section id="api-integration" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Integration & Database Access</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect your applications directly to our comprehensive technology database with enterprise-grade APIs and real-time data streams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* API Configuration Panel */}
          <div className="card-3d bg-white rounded-2xl p-8 border border-neutral-gray">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-teal to-accent-green rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-code text-gray-800 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">API Configuration</h3>
                <p className="text-sm text-gray-600">Configure your API access and integration settings</p>
              </div>
            </div>

            {/* API Status */}
            <div className="mb-6">
              <div className={`flex items-center justify-between p-4 rounded-lg ${
                isConnected 
                  ? "bg-green-50 border border-green-200" 
                  : "bg-red-50 border border-red-200"
              }`}>
                <div className="flex items-center">
                  <i className={`fas fa-circle text-sm mr-2 ${
                    isConnected ? "text-green-600" : "text-red-600"
                  }`}></i>
                  <span className={`font-semibold ${
                    isConnected ? "text-green-700" : "text-red-700"
                  }`}>
                    API Status: {isConnected ? "Connected" : "Disconnected"}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <i className="fas fa-clock mr-1"></i>Last sync: 2 min ago
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div className="space-y-4 mb-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm bg-blue-600 text-white px-2 py-1 rounded">
                      {endpoint.method}
                    </span>
                    <span className="text-sm text-gray-700">{endpoint.name}</span>
                  </div>
                  <div className="font-mono text-sm text-blue-600">{endpoint.path}</div>
                </div>
              ))}
            </div>

            {/* Rate Limits */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Current Usage</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-700">
                    <span>API Calls</span>
                    <span>847 / 10,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "8.47%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-700">
                    <span>Data Transfer</span>
                    <span>2.3GB / 50GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "4.6%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="/contact-us"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center"
            >
              <i className="fas fa-download mr-2"></i>Download SDK
            </a>
          </div>

          {/* Database Visualization */}
          <div className="card-3d bg-white rounded-2xl p-8 border border-neutral-gray">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-accent-purple rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-database text-gray-800 text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary-navy">Database Overview</h3>
                <p className="text-neutral-dark">Real-time database statistics and performance metrics</p>
              </div>
            </div>

            {/* Database Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-accent-blue/10 to-primary-teal/10 rounded-lg">
                <div className="text-3xl font-bold text-accent-blue mb-2">8.7M</div>
                <div className="text-sm text-neutral-dark">Total Records</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-accent-green/10 to-primary-teal/10 rounded-lg">
                <div className="text-3xl font-bold text-accent-green mb-2">1,247</div>
                <div className="text-sm text-neutral-dark">Live Updates/Day</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-orange/10 to-accent-red/10 rounded-lg">
                <div className="text-3xl font-bold text-primary-orange mb-2">99.9%</div>
                <div className="text-sm text-neutral-dark">Uptime</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-accent-purple/10 to-primary-navy/10 rounded-lg">
                <div className="text-3xl font-bold text-accent-purple mb-2">&lt; 50ms</div>
                <div className="text-sm text-neutral-dark">Avg Response</div>
              </div>
            </div>

            {/* Technology Breakdown */}
            <div className="mb-6">
              <h4 className="font-semibold text-primary-navy mb-4">Technology Distribution</h4>
              <div className="space-y-3">
                {[
                  { name: "Cloud Computing", percentage: "32.8%", color: "bg-accent-blue" },
                  { name: "AI/Machine Learning", percentage: "24.1%", color: "bg-accent-green" },
                  { name: "FinTech", percentage: "18.5%", color: "bg-primary-orange" },
                  { name: "Cybersecurity", percentage: "15.2%", color: "bg-accent-purple" },
                  { name: "Other", percentage: "9.4%", color: "bg-neutral-dark" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${tech.color} rounded mr-3`}></div>
                      <span className="text-sm">{tech.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{tech.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/contact-us" className="w-full bg-primary-navy text-gray-800 py-3 rounded-lg hover:bg-primary-teal transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center">
              <i className="fas fa-chart-bar mr-2"></i>View Full Analytics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
