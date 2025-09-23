import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Star, Cpu } from "lucide-react";

export default function SemiconductorIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Chip Design & Development",
      description: "Semiconductor Industry Email List implementation for chip design & development and innovation excellence",
      categories: ["IC Design", "System Architecture", "EDA Tools", "Verification"],
      targetIndustries: [
        "Fabless Semiconductor Companies",
        "Design Service Providers", 
        "IP Licensing Companies",
        "EDA Software Vendors"
      ],
      responsibleTitles: [
        "Design Engineer",
        "Verification Engineer", 
        "System Architect",
        "Design Manager"
      ],
      challenges: [
        "Advanced process node complexity and yield optimization",
        "Time-to-market pressures and design cycles",
        "Power efficiency and thermal management",
        "AI/ML integration and specialized processing",
        "Security and hardware protection requirements",
        "Design tool licensing and technology access",
        "Talent acquisition and skill development",
        "Intellectual property protection and licensing"
      ],
      icon: <Cpu className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Manufacturing & Fabrication",
      description: "Semiconductor Industry Email List implementation for manufacturing & fabrication and operational excellence",
      categories: ["Wafer Fabrication", "Process Engineering", "Yield Management", "Equipment"],
      targetIndustries: [
        "Semiconductor Foundries",
        "Integrated Device Manufacturers",
        "Equipment Suppliers", 
        "Materials Providers"
      ],
      responsibleTitles: [
        "Process Engineer",
        "Manufacturing Manager",
        "Yield Engineer",
        "Equipment Engineer"
      ],
      challenges: [
        "Capital intensity and equipment investment",
        "Process complexity and contamination control",
        "Yield optimization and defect reduction",
        "Supply chain disruptions and material shortages",
        "Technology node migration and scaling",
        "Environmental compliance and sustainability",
        "Workforce safety and cleanroom protocols",
        "Equipment maintenance and utilization"
      ],
      icon: <Building className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Testing & Quality Assurance",
      description: "Semiconductor Industry Email List implementation for testing & quality assurance and reliability excellence",
      categories: ["Test Engineering", "Quality Control", "Reliability Testing", "Failure Analysis"],
      targetIndustries: [
        "Test Service Providers",
        "Quality Assurance Labs",
        "Reliability Testing", 
        "Failure Analysis Services"
      ],
      responsibleTitles: [
        "Test Engineer",
        "Quality Manager",
        "Reliability Engineer",
        "Applications Engineer"
      ],
      challenges: [
        "Test coverage and pattern development",
        "Automotive and aerospace qualification requirements",
        "High-volume manufacturing test efficiency",
        "Advanced packaging and system-level testing",
        "Data analysis and predictive quality methods",
        "Cost of test and yield correlation",
        "Multi-site test correlation and standardization",
        "New technology characterization and validation"
      ],
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Supply Chain & Logistics", 
      description: "Semiconductor Industry Email List implementation for supply chain & logistics and operational efficiency",
      categories: ["Supply Chain Management", "Procurement", "Distribution", "Inventory Management"],
      targetIndustries: [
        "Semiconductor Distributors",
        "Supply Chain Services",
        "Contract Manufacturers",
        "Logistics Providers"
      ],
      responsibleTitles: [
        "Supply Chain Manager",
        "Procurement Director",
        "Logistics Coordinator", 
        "Inventory Manager"
      ],
      challenges: [
        "Global supply chain complexity and geopolitical risks",
        "Demand volatility and forecasting accuracy",
        "Long lead times and capacity planning",
        "Counterfeit component prevention",
        "Supplier qualification and risk management",
        "Just-in-time delivery and inventory optimization",
        "Trade compliance and export controls",
        "Digital transformation and supply chain visibility"
      ],
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Market Research & Analysis",
      description: "Semiconductor Industry Email List implementation for market research & analysis and strategic intelligence", 
      categories: ["Market Intelligence", "Competitive Analysis", "Technology Trends", "Forecasting"],
      targetIndustries: [
        "Market Research Firms",
        "Industry Analysts",
        "Strategic Consulting",
        "Technology Intelligence"
      ],
      responsibleTitles: [
        "Market Analyst",
        "Industry Researcher",
        "Strategic Planner",
        "Business Intelligence Manager"
      ],
      challenges: [
        "Rapid technology evolution and disruption", 
        "Market segmentation and application analysis",
        "Customer behavior and adoption patterns",
        "Competitive intelligence and benchmarking",
        "Technology roadmap alignment",
        "Emerging market identification and entry",
        "Data collection and validation methodologies",
        "Economic impact and cycle analysis"
      ],
      icon: <Target className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Applications & System Integration",
      description: "Semiconductor Industry Email List implementation for applications & system integration and solution development",
      categories: ["System Design", "Application Engineering", "Technical Support", "Solution Development"],
      targetIndustries: [
        "System Integrators",
        "OEM Manufacturers",
        "Application Development",
        "Technical Support Services"
      ],
      responsibleTitles: [
        "Applications Engineer",
        "System Designer",
        "Technical Support Manager",
        "Solution Architect"
      ],
      challenges: [
        "Customer application requirements and customization",
        "System-level optimization and integration",
        "Technical support and documentation",
        "Reference design development and validation",
        "Cross-platform compatibility and portability",
        "Performance benchmarking and optimization",
        "Field application support and troubleshooting",
        "Ecosystem partnership and collaboration"
      ],
      icon: <Star className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Semiconductor Industry Email List - Semiconductor Professional Contacts Database | ELP Data"
        description="Access our comprehensive Semiconductor Industry email list with 91,175 verified semiconductor professional contacts across 31,911 companies. Target semiconductor decision-makers and industry leaders."
        keywords="semiconductor industry email list, chip contacts, semiconductor professional database, electronics mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Semiconductor Industry <span className="text-blue-600">Email List</span>
                </h1>
                <div className="space-y-4 text-lg text-gray-600 mb-8">
                  <p>
                    With over <strong>70% of the world dependent on electronics</strong>, the semiconductor industry is having a hard time matching the supply with demand.
                  </p>
                  <p>
                    Do you own a business/service that works in the semiconductor industry? Then InfoClutch's curated <strong>semiconductor industry email list</strong> might be the game-changer you need.
                  </p>
                  <p>
                    The fully customizable email list offers you unrestricted access to <strong>91K contact data</strong> on the key industry players that spearhead the semiconductor industry.
                  </p>
                  <p className="font-semibold text-blue-600">
                    Ready to penetrate the market? Then, fill out our form and let us get back to you.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>91,175 Semiconductor Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>31,911 Company Profiles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Penetrate the Semiconductor Market</h3>
                <p className="text-gray-600 mb-6">
                  Access 91K+ contact data on key industry players in the semiconductor industry.
                </p>
                <div className="space-y-4">
                  <Input placeholder="Your Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Email Address" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Phone Number" className="border-blue-200 focus:border-blue-500" />
                  <Textarea placeholder="Tell us about your semiconductor requirements..." className="border-blue-200 focus:border-blue-500" rows={3} />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Get Semiconductor Contact List
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98.5%</div>
                    <div className="text-sm text-gray-600">Data Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">91.2K+</div>
                <div className="text-gray-600">Total Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">31.9K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">70%+</div>
                <div className="text-gray-600">World Electronics Dependency</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%+</div>
                <div className="text-gray-600">Email Deliverability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Semiconductor Industry Email List Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Semiconductor Industry Email List across various semiconductor functions and use cases
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {implementationSolutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{solution.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.categories.map((category, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Industries */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Target Industries:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.targetIndustries.map((industry, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible Job Titles */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsible Job Titles:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.responsibleTitles.map((title, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Current Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                        {solution.challenges.slice(0, 4).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                      {solution.challenges.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{solution.challenges.length - 4} more challenges
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Penetrate the Semiconductor Market?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 91,175 semiconductor contacts across 31,911 company profiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-500 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}