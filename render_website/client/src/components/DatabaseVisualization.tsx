export default function DatabaseVisualization() {
  const stats = [
    { value: "8.7M", label: "Active Databases", icon: "fas fa-database", color: "text-accent-blue" },
    { value: "89.7%", label: "Uptime Average", icon: "fas fa-sync-alt", color: "text-accent-green" },
    { value: "1.2TB", label: "Data Processed Daily", icon: "fas fa-chart-line", color: "text-primary-orange" },
    { value: "4.8s", label: "Avg Response Time", icon: "fas fa-clock", color: "text-accent-purple" }
  ];

  const features = [
    {
      icon: "fas fa-chart-line",
      title: "Performance Monitoring",
      description: "Real-time monitoring of database performance metrics including query response times, throughput, and resource utilization across all connected systems.",
      gradient: "from-primary-teal to-accent-green"
    },
    {
      icon: "fas fa-cogs",
      title: "Query Optimization",
      description: "Automated analysis of slow queries with intelligent recommendations for index creation, query restructuring, and performance improvements.",
      gradient: "from-accent-blue to-primary-teal"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security Analytics",
      description: "Comprehensive security monitoring including access pattern analysis, anomaly detection, and compliance reporting for data protection regulations.",
      gradient: "from-accent-red to-primary-orange"
    },
    {
      icon: "fas fa-expand-arrows-alt",
      title: "Scalability Planning",
      description: "Predictive analytics for capacity planning, helping you scale database infrastructure proactively based on usage trends and growth patterns.",
      gradient: "from-accent-purple to-primary-navy"
    },
    {
      icon: "fas fa-sync",
      title: "Backup & Recovery",
      description: "Automated backup scheduling, recovery testing, and disaster recovery planning with comprehensive data integrity verification and restoration capabilities.",
      gradient: "from-accent-green to-primary-teal"
    },
    {
      icon: "fas fa-chart-pie",
      title: "Usage Analytics",
      description: "Detailed insights into database usage patterns, user behavior analysis, and resource allocation optimization for improved efficiency and cost management.",
      gradient: "from-primary-orange to-accent-red"
    }
  ];

  return (
    <section className="py-20 gradient-primary text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-white">Comprehensive Database</h2>
          <p className="text-base text-white max-w-3xl mx-auto leading-relaxed">
            Our extensive database powers intelligent insights across global technology ecosystems.
          </p>
        </div>

        {/* Database Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <i className={`${stat.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-2xl font-semibold mb-2 text-white">{stat.value}</div>
              <div className="text-sm text-white">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Database Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-base font-medium mb-3 text-white">{feature.title}</h3>
              <p className="text-sm text-white mb-4 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2 text-sm text-white">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent-green"></i>
                  <span>Real-time monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent-green"></i>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent-green"></i>
                  <span>Automated optimization</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
