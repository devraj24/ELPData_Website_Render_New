export default function TechnologyComparison() {
  const comparisonData = [
    {
      technology: "SAP ERP",
      marketSize: "$28.5B",
      growth: "+12%",
      adoption: 89,
      investment: "High",
      risk: "Low",
      icon: "fas fa-server",
      gradient: "from-accent-blue to-primary-teal"
    },
    {
      technology: "Salesforce.com",
      marketSize: "$24.1B",
      growth: "+18%",
      adoption: 76,
      investment: "High",
      risk: "Low",
      icon: "fas fa-users",
      gradient: "from-accent-green to-primary-teal"
    },
    {
      technology: "AWS Cloud",
      marketSize: "$80.1B",
      growth: "+29%",
      adoption: 82,
      investment: "Very High",
      risk: "Medium",
      icon: "fas fa-cloud",
      gradient: "from-accent-purple to-primary-navy"
    },
    {
      technology: "Oracle Corporation",
      marketSize: "$47.3B",
      growth: "+42%",
      adoption: 94,
      investment: "Very High",
      risk: "Low",
      icon: "fas fa-database",
      gradient: "from-primary-orange to-accent-red"
    }
  ];

  const comparisonCards = [
    {
      title: "AI vs Traditional Analytics",
      gain: "+340%",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Cloud Cost Analysis",
      gain: "-45%",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Security Enhancement",
      gain: "+280%",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Comparison Matrix</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Compare emerging technologies across multiple dimensions including market adoption, funding levels, and growth potential.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {comparisonCards.map((card, index) => (
            <div key={index} className="card-3d bg-white rounded-xl p-8 text-center">
              <img 
                src={card.image}
                alt={card.title}
                className="image-3d rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-heading font-semibold text-primary-navy mb-4">{card.title}</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-dark">Performance Gain</span>
                <span className="font-bold text-accent-green">{card.gain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="gradient-primary text-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Technology</th>
                  <th className="px-6 py-4 text-center font-semibold">Market Size</th>
                  <th className="px-6 py-4 text-center font-semibold">Growth Rate</th>
                  <th className="px-6 py-4 text-center font-semibold">Adoption</th>
                  <th className="px-6 py-4 text-center font-semibold">Investment</th>
                  <th className="px-6 py-4 text-center font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((tech, index) => (
                  <tr key={index} className="border-b border-neutral-gray hover:bg-neutral-light transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center mr-3`}>
                          <i className={`${tech.icon} text-gray-800 text-sm`}></i>
                        </div>
                        <span className="font-semibold text-primary-navy">{tech.technology}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">{tech.marketSize}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-accent-green font-semibold">{tech.growth}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="w-full bg-neutral-gray rounded-full h-2 mx-auto max-w-16">
                        <div 
                          className="bg-accent-green h-2 rounded-full" 
                          style={{ width: `${tech.adoption}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-neutral-dark mt-1">{tech.adoption}%</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <i className="fas fa-arrow-up text-accent-green"></i>
                      <span className="text-accent-green font-semibold ml-1">{tech.investment}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tech.risk === "Low" 
                          ? "bg-accent-green/10 text-accent-green"
                          : tech.risk === "Medium"
                          ? "bg-primary-orange/10 text-primary-orange"
                          : "bg-accent-red/10 text-accent-red"
                      }`}>
                        {tech.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
