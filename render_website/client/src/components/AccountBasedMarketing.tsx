export default function AccountBasedMarketing() {
  const features = [
    {
      icon: "fas fa-bullseye",
      title: "Target Account Selection",
      description: "Data-driven identification and prioritization of high-value accounts that align with your ideal customer profile and revenue potential.",
      gradient: "from-accent-blue to-primary-teal"
    },
    {
      icon: "fas fa-users",
      title: "Buying Committee Mapping",
      description: "Comprehensive identification of all key stakeholders and decision-makers within target accounts, including roles, responsibilities, and relationships.",
      gradient: "from-accent-green to-primary-teal"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Personalized Content",
      description: "Custom content development that addresses specific pain points, challenges, and objectives of each target account and buying role.",
      gradient: "from-accent-purple to-primary-navy"
    },
    {
      icon: "fas fa-chart-line",
      title: "Multi-Channel Orchestration",
      description: "Coordinated engagement across digital advertising, email, direct mail, events, and sales outreach for maximum impact and conversion.",
      gradient: "from-primary-orange to-accent-red"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Account Intelligence",
      description: "Identify and analyze target accounts using comprehensive technology usage data and firmographic intelligence."
    },
    {
      number: "2", 
      title: "Stakeholder Mapping",
      description: "Map buying committees and key decision-makers within each target account across all relevant departments."
    },
    {
      number: "3",
      title: "Campaign Orchestration",
      description: "Execute coordinated multi-channel campaigns with personalized messaging for each stakeholder and account."
    },
    {
      number: "4",
      title: "Performance Optimization", 
      description: "Monitor engagement metrics and optimize campaigns in real-time for maximum conversion and ROI."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Account-Based Marketing Solutions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Precision-targeted marketing for high-value accounts. Our ABM solutions help B2B organizations identify, engage, and convert their most valuable target accounts through highly personalized, multi-channel campaigns.
          </p>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-blue-700 font-medium">Technology Lists</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">391.2K</div>
              <div className="text-sm text-green-700 font-medium">VMware Companies</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">368.7K</div>
              <div className="text-sm text-purple-700 font-medium">SAP Users</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">599K</div>
              <div className="text-sm text-orange-700 font-medium">Salesforce.com</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card-3d bg-white rounded-xl p-6 text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${feature.icon} text-gray-800 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our ABM Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#800020' }}>
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your B2B Marketing?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Connect with decision-makers at your ideal accounts using our comprehensive technology intelligence and precision-targeted ABM strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-semibold shadow-lg inline-flex items-center justify-center">
                Start ABM Campaign
              </a>
              <a href="/contact-us" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold shadow-lg inline-flex items-center justify-center">
                Request ABM Marketing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}