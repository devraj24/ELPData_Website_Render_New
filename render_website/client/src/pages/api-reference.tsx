import { Link } from "wouter";

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              API Reference Documentation
            </h1>
            <p className="text-lg text-slate-100 mb-6 max-w-3xl mx-auto">
              Complete API reference with endpoints, parameters, authentication methods, and code examples for seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Get API Key
              </Link>
              <Link href="/api-integration" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                Integration Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">API Endpoints</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">GET</span>
                  <code className="text-blue-600 font-mono">/api/v1/companies</code>
                </div>
                <h3 className="text-lg font-bold mb-2">Search Companies</h3>
                <p className="text-gray-600 mb-3">Search for companies using specific technologies with advanced filtering options.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    GET /api/v1/companies?technology=SAP&industry=Financial&size=Enterprise
                  </code>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                <div className="flex items-center mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">GET</span>
                  <code className="text-green-600 font-mono">/api/v1/technologies</code>
                </div>
                <h3 className="text-lg font-bold mb-2">List Technologies</h3>
                <p className="text-gray-600 mb-3">Get comprehensive list of available technologies with adoption statistics.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    GET /api/v1/technologies?category=CRM&market_size=min:1000
                  </code>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">GET</span>
                  <code className="text-purple-600 font-mono">/api/v1/analytics</code>
                </div>
                <h3 className="text-lg font-bold mb-2">Market Analytics</h3>
                <p className="text-gray-600 mb-3">Access market trends, adoption patterns, and competitive intelligence data.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    GET /api/v1/analytics/trends?technology=AI&timeframe=12months
                  </code>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">POST</span>
                  <code className="text-orange-600 font-mono">/api/v1/enrichment</code>
                </div>
                <h3 className="text-lg font-bold mb-2">Data Enrichment</h3>
                <p className="text-gray-600 mb-3">Enrich company data with technology usage, contact information, and firmographics.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    POST /api/v1/enrichment<br/>
                    {"{"}"company_domain": "example.com"{"}"}
                  </code>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
                <div className="flex items-center mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">GET</span>
                  <code className="text-red-600 font-mono">/api/v1/contacts</code>
                </div>
                <h3 className="text-lg font-bold mb-2">Contact Discovery</h3>
                <p className="text-gray-600 mb-3">Find decision-makers and technical contacts at companies using specific technologies.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    GET /api/v1/contacts?company_id=123&role=CTO&technology=AWS
                  </code>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
                <div className="flex items-center mb-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">GET</span>
                  <code className="text-teal-600 font-mono">/api/v1/industries</code>
                </div>
                <h3 className="text-lg font-bold mb-2">Industry Analysis</h3>
                <p className="text-gray-600 mb-3">Analyze technology adoption patterns across different industry verticals.</p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    GET /api/v1/industries/healthcare/technologies
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Authentication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">API Key Authentication</h3>
              <p className="text-gray-600 mb-4">Include your API key in the Authorization header for all requests.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-sm">
                  curl -H "Authorization: Bearer YOUR_API_KEY" \<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://api.elpdata.com/v1/companies
                </code>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Rate Limiting</h3>
              <p className="text-gray-600 mb-4">API requests are limited to ensure optimal performance for all users.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard: 1,000 requests/hour</li>
                <li>• Professional: 5,000 requests/hour</li>
                <li>• Enterprise: 25,000 requests/hour</li>
                <li>• Custom limits available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Format */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Response Format</h2>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4">Example Response</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`{
  "status": "success",
  "data": {
    "companies": [
      {
        "id": "comp_123456",
        "name": "Acme Corporation",
        "domain": "acme.com",
        "industry": "Technology",
        "size": "Enterprise",
        "location": {
          "country": "United States",
          "state": "California",
          "city": "San Francisco"
        },
        "technologies": [
          {
            "name": "Salesforce",
            "category": "CRM",
            "implementation_date": "2022-03-15",
            "confidence": 0.95
          }
        ],
        "contacts": [
          {
            "name": "John Smith",
            "title": "Chief Technology Officer",
            "email": "j.smith@acme.com"
          }
        ]
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 25,
      "total": 1847,
      "total_pages": 74
    }
  },
  "meta": {
    "request_id": "req_abc123",
    "response_time": "142ms"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">SDKs & Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fab fa-js-square text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">JavaScript</h3>
              <code className="text-sm text-gray-600">npm install @elpdata/sdk</code>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fab fa-python text-blue-600 text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">Python</h3>
              <code className="text-sm text-gray-600">pip install elpdata</code>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fab fa-java text-orange-600 text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">Java</h3>
              <code className="text-sm text-gray-600">Maven/Gradle available</code>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-code text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">.NET</h3>
              <code className="text-sm text-gray-600">NuGet package</code>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building with Our API</h2>
          <p className="text-xl text-slate-100 mb-8">
            Get your API key and start integrating enterprise technology intelligence into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Get API Access
            </Link>
            <Link href="/documentation" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}