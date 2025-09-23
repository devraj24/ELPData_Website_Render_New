import { Link } from "wouter";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Documentation & Guides
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Comprehensive documentation, integration guides, and best practices for leveraging enterprise technology intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/api-reference" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                API Reference
              </Link>
              <Link href="/contact-us" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 font-semibold transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">Quick start guides and onboarding documentation for new users.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Platform overview</li>
                <li>• Account setup guide</li>
                <li>• First data request</li>
                <li>• Basic filtering options</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-code text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">API Integration</h3>
              <p className="text-gray-600 mb-4">Complete API documentation with code examples and SDKs.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• REST API endpoints</li>
                <li>• Authentication methods</li>
                <li>• SDK libraries</li>
                <li>• Rate limiting</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-database text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Reference</h3>
              <p className="text-gray-600 mb-4">Detailed data schemas, field definitions, and data quality information.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data dictionary</li>
                <li>• Field mappings</li>
                <li>• Quality metrics</li>
                <li>• Update frequencies</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-orange-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Practices</h3>
              <p className="text-gray-600 mb-4">Implementation guides and optimization strategies for maximum value.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Query optimization</li>
                <li>• Data enrichment</li>
                <li>• Integration patterns</li>
                <li>• Performance tuning</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-question-circle text-red-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Troubleshooting</h3>
              <p className="text-gray-600 mb-4">Common issues, error codes, and resolution guides.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Error code reference</li>
                <li>• Common issues</li>
                <li>• Debug techniques</li>
                <li>• Support contacts</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-lg border border-teal-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-teal-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step tutorials for common use cases and advanced features.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lead generation setup</li>
                <li>• Market analysis</li>
                <li>• Competitive research</li>
                <li>• Data visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Technology Market Research Guide</h3>
              <p className="text-gray-600 mb-4">Learn how to conduct comprehensive technology market research using our platform and data sources.</p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-clock mr-2"></i>
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Beginner</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-green-600">API Integration Walkthrough</h3>
              <p className="text-gray-600 mb-4">Complete guide to integrating our APIs into your applications with code examples and best practices.</p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-clock mr-2"></i>
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Competitive Intelligence Framework</h3>
              <p className="text-gray-600 mb-4">Build effective competitive intelligence processes using technology adoption data and market insights.</p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-clock mr-2"></i>
                <span>20 min read</span>
                <span className="mx-2">•</span>
                <span>Advanced</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-600">Data Quality & Validation</h3>
              <p className="text-gray-600 mb-4">Understanding data quality metrics, validation processes, and how to ensure data accuracy.</p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-clock mr-2"></i>
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our technical documentation team is here to help you get the most out of our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/api-reference" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              View API Docs
            </Link>
            <Link href="/contact-us" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold transition-all">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}