import { useState, useEffect } from "react";

export default function EnhancedMetrics() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    {
      value: "500+", 
      label: "Software Customer Lists",
      icon: "fas fa-server",
      color: "text-accent-blue",
      bgColor: "from-accent-blue/10 to-primary-teal/10"
    },
    {
      value: "368,700", 
      label: "SAP Users",
      icon: "fas fa-database",
      color: "text-primary-orange",
      bgColor: "from-primary-orange/10 to-accent-red/10"
    },
    {
      value: "391,200", 
      label: "VMware Companies",
      icon: "fas fa-cogs",
      color: "text-accent-green",
      bgColor: "from-accent-green/10 to-primary-teal/10"
    },
    {
      value: "167,365", 
      label: "PEO/EOR Companies",
      icon: "fas fa-cloud",
      color: "text-accent-purple",
      bgColor: "from-accent-purple/10 to-primary-navy/10"
    }
  ];

  const industryData = [
    { industry: "Technology", percentage: 32.1, companies: "289,400", icon: "fas fa-microchip", color: "bg-blue-600" },
    { industry: "Healthcare", percentage: 26.0, companies: "234,700", icon: "fas fa-heartbeat", color: "bg-emerald-600" },
    { industry: "Financial Services", percentage: 22.0, companies: "198,300", icon: "fas fa-university", color: "bg-red-600" },
    { industry: "Manufacturing", percentage: 18.6, companies: "167,900", icon: "fas fa-industry", color: "bg-purple-600" },
    { industry: "Retail", percentage: 16.2, companies: "145,800", icon: "fas fa-shopping-cart", color: "bg-orange-600" },
    { industry: "Cybersecurity", percentage: 14.9, companies: "134,600", icon: "fas fa-shield-alt", color: "bg-amber-600" },
    { industry: "Telecommunications", percentage: 16.1, companies: "145,300", icon: "fas fa-signal", color: "bg-slate-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Database Overview</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            500+ Software Customer Lists - The most comprehensive technology database overview with verified enterprise implementations, decision makers, and market intelligence data from leading technology platforms.
          </p>
        </div>

        {/* Rotating Metrics Display */}
        <div className="bg-gradient-to-br from-neutral-light to-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${metrics[currentMetric].bgColor} rounded-full mb-6`}>
                <i className={`${metrics[currentMetric].icon} text-3xl ${metrics[currentMetric].color}`}></i>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-600 mb-3">
                {metrics[currentMetric].value}
              </div>
              <div className="text-base text-gray-600 font-medium">
                {metrics[currentMetric].label}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    index === currentMetric 
                      ? 'border-primary-teal bg-primary-teal/5' 
                      : 'border-neutral-gray hover:border-primary-teal/50'
                  }`}
                  onClick={() => setCurrentMetric(index)}
                >
                  <div className="text-2xl font-bold text-teal-600 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Distribution */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-gray p-8">
          <h3 className="text-2xl font-heading font-bold text-primary-navy mb-8 text-center">Industry Distribution</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {industryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-neutral-light rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mr-4`}>
                      <i className={`${item.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{item.industry}</div>
                      <div className="text-sm text-gray-600">{item.companies} companies</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-600">{item.percentage}%</div>
                    <div className="w-24 bg-neutral-gray rounded-full h-2 mt-1">
                      <div 
                        className="bg-gradient-to-r from-primary-teal to-accent-green h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {industryData.map((item, index) => {
                    const previousTotal = industryData.slice(0, index).reduce((sum, curr) => sum + curr.percentage, 0);
                    const circumference = 2 * Math.PI * 45;
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((previousTotal / 100) * circumference);
                    
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={`hsl(${180 + index * 30}, 70%, 50%)`}
                        strokeWidth="10"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 hover:stroke-[12]"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-navy">100%</div>
                    <div className="text-sm text-neutral-dark">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}