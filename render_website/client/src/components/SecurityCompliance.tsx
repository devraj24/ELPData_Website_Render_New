export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: "fas fa-shield-alt",
      title: "SOC 2 Type II Compliance",
      description: "Audited security controls for data protection, availability, and confidentiality with annual third-party verification.",
      status: "Certified"
    },
    {
      icon: "fas fa-lock",
      title: "End-to-End Encryption",
      description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit across all API endpoints and database connections.",
      status: "Active"
    },
    {
      icon: "fas fa-user-check",
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with global data protection regulations including right to deletion and data portability.",
      status: "Verified"
    },
    {
      icon: "fas fa-eye",
      title: "24/7 Security Monitoring",
      description: "Continuous threat detection and incident response with real-time alerts and automated security protocols.",
      status: "Monitoring"
    }
  ];

  const complianceMetrics = [
    { metric: "99.9%", label: "Uptime SLA", icon: "fas fa-clock" },
    { metric: "< 2 mins", label: "Incident Response", icon: "fas fa-bolt" },
    { metric: "Zero", label: "Data Breaches", icon: "fas fa-shield-alt" },
    { metric: "24/7", label: "SOC Monitoring", icon: "fas fa-eye" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-teal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Security & Compliance</h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bank-grade security infrastructure with comprehensive compliance certifications to protect your data and ensure regulatory adherence.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const colors = [
              'bg-slate-100',
              'bg-green-100', 
              'bg-yellow-100',
              'bg-orange-100'
            ];
            const iconColors = [
              'text-slate-600',
              'text-green-600',
              'text-yellow-600', 
              'text-orange-600'
            ];
            return (
              <div key={index} className={`${colors[index]} rounded-2xl p-8 border border-gray-200 shadow-lg`}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className={`${feature.icon} ${iconColors[index]} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-medium text-gray-700">{feature.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        feature.status === 'Certified' ? 'bg-green-200 text-green-800' :
                        feature.status === 'Active' ? 'bg-slate-200 text-slate-800' :
                        feature.status === 'Verified' ? 'bg-orange-200 text-orange-800' :
                        'bg-orange-200 text-orange-800'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Prominent Highlights Column */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Security Highlights</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-slate-400 pl-4">
                <div className="text-slate-400 text-sm font-medium">SOC 2 Type II</div>
                <div className="text-white text-sm">Certified Security Controls</div>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <div className="text-green-400 text-sm font-medium">AES-256 Encryption</div>
                <div className="text-white text-sm">Data Protection Active</div>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="text-yellow-400 text-sm font-medium">GDPR Compliant</div>
                <div className="text-white text-sm">Regulatory Verified</div>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="text-orange-400 text-sm font-medium">24/7 Monitoring</div>
                <div className="text-white text-sm">Continuous Protection</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Metrics */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Security Performance Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceMetrics.map((item, index) => {
              const colors = ['bg-slate-500', 'bg-green-500', 'bg-orange-500', 'bg-red-500'];
              return (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className={`w-16 h-16 ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="text-3xl font-bold mb-2 text-gray-900">{item.metric}</div>
                  <div className="text-gray-600 text-sm font-medium">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="bg-green-100 rounded-lg p-4 border border-green-200 shadow-md">
              <div className="text-sm text-green-700 mb-1 font-medium">Certified</div>
              <div className="font-bold text-green-900">SOC 2 Type II</div>
            </div>
            <div className="bg-slate-100 rounded-lg p-4 border border-slate-200 shadow-md">
              <div className="text-sm text-slate-700 mb-1 font-medium">Compliant</div>
              <div className="font-bold text-slate-900">GDPR</div>
            </div>
            <div className="bg-red-100 rounded-lg p-4 border border-red-200 shadow-md">
              <div className="text-sm text-red-700 mb-1 font-medium">Compliant</div>
              <div className="font-bold text-red-900">CCPA</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-4 border border-orange-200 shadow-md">
              <div className="text-sm text-orange-700 mb-1 font-medium">Certified</div>
              <div className="font-bold text-orange-900">ISO 27001</div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Our security and compliance programs are continuously audited by independent third parties to ensure the highest standards of data protection and regulatory adherence.
          </p>
        </div>
      </div>
    </section>
  );
}