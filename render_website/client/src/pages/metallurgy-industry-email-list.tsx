import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Zap, Hammer } from "lucide-react";

export default function MetallurgyIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Steel Production & Processing",
      description: "Metallurgy Industry Email List implementation for steel production & processing and quality excellence",
      categories: ["Steel Manufacturing", "Hot Rolling", "Cold Rolling", "Galvanizing"],
      targetIndustries: [
        "Steel Manufacturers",
        "Steel Mills", 
        "Processing Plants",
        "Metal Fabricators"
      ],
      responsibleTitles: [
        "Plant Manager",
        "Metallurgical Engineer",
        "Production Supervisor",
        "Quality Manager"
      ],
      challenges: [
        "Energy efficiency and cost reduction",
        "Environmental compliance and emissions",
        "Quality control and specifications",
        "Equipment maintenance and reliability",
        "Raw material sourcing and pricing",
        "Market demand fluctuations",
        "Safety protocols and worker protection",
        "Technology modernization"
      ],
      icon: <Hammer className="w-8 h-8 text-gray-600" />
    },
    {
      title: "Non-Ferrous Metals",
      description: "Metallurgy Industry Email List implementation for non-ferrous metals and specialty excellence", 
      categories: ["Aluminum", "Copper", "Zinc", "Precious Metals"],
      targetIndustries: [
        "Aluminum Producers",
        "Copper Manufacturers",
        "Zinc Companies", 
        "Precious Metal Refiners"
      ],
      responsibleTitles: [
        "Smelter Manager",
        "Refinery Director",
        "Process Engineer",
        "Operations Manager"
      ],
      challenges: [
        "Metal purity and refinement",
        "Energy consumption optimization",
        "Recycling and sustainability",
        "Market volatility and pricing",
        "Technical specifications compliance",
        "Environmental regulations",
        "Supply chain management",
        "Innovation and product development"
      ],
      icon: <Zap className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Metal Fabrication & Manufacturing",
      description: "Metallurgy Industry Email List implementation for metal fabrication & manufacturing and precision excellence",
      categories: ["Structural Steel", "Sheet Metal", "Machining", "Welding"],
      targetIndustries: [
        "Fabrication Shops",
        "Machine Shops",
        "Welding Services", 
        "Metal Contractors"
      ],
      responsibleTitles: [
        "Fabrication Manager",
        "Shop Supervisor",
        "Welding Foreman",
        "Quality Inspector"
      ],
      challenges: [
        "Precision and tolerance requirements",
        "Material handling and logistics",
        "Skilled workforce and training",
        "Equipment calibration and maintenance",
        "Project scheduling and delivery",
        "Cost estimation and bidding",
        "Safety compliance and procedures",
        "Technology integration"
      ],
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Metallurgical Testing & Analysis",
      description: "Metallurgy Industry Email List implementation for metallurgical testing & analysis and standards excellence",
      categories: ["Material Testing", "Chemical Analysis", "Mechanical Testing", "Quality Assurance"],
      targetIndustries: [
        "Testing Laboratories",
        "Quality Control",
        "Research Institutes", 
        "Consulting Services"
      ],
      responsibleTitles: [
        "Laboratory Manager",
        "Metallurgist",
        "Test Engineer",
        "Quality Analyst"
      ],
      challenges: [
        "Testing accuracy and reliability",
        "Equipment calibration and maintenance",
        "Sample preparation and handling",
        "Data analysis and interpretation",
        "Certification and compliance",
        "Turnaround time and efficiency",
        "Technical expertise and training",
        "Laboratory accreditation"
      ],
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Metallurgical Equipment & Technology",
      description: "Metallurgy Industry Email List implementation for metallurgical equipment & technology and innovation excellence",
      categories: ["Furnaces", "Rolling Mills", "Casting Equipment", "Heat Treatment"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Technology Suppliers",
        "Service Providers", 
        "Engineering Companies"
      ],
      responsibleTitles: [
        "Sales Engineer",
        "Product Manager",
        "Technical Specialist",
        "Service Manager"
      ],
      challenges: [
        "Equipment efficiency and performance",
        "Technology advancement and innovation",
        "Maintenance and service support",
        "Integration and compatibility",
        "Cost justification and ROI",
        "Global competition and pricing",
        "Customer training and support",
        "Regulatory compliance"
      ],
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Mining & Mineral Processing",
      description: "Metallurgy Industry Email List implementation for mining & mineral processing and extraction excellence",
      categories: ["Ore Processing", "Mineral Extraction", "Beneficiation", "Smelting"],
      targetIndustries: [
        "Mining Companies",
        "Mineral Processors",
        "Extraction Plants", 
        "Ore Refineries"
      ],
      responsibleTitles: [
        "Mine Manager",
        "Process Engineer",
        "Mineral Processor",
        "Extraction Supervisor"
      ],
      challenges: [
        "Ore grade and recovery optimization",
        "Environmental impact and sustainability",
        "Equipment wear and maintenance",
        "Energy consumption and costs",
        "Water management and treatment",
        "Safety and health regulations",
        "Community relations and permits",
        "Market demand and commodity prices"
      ],
      icon: <Building className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Metallurgy Industry Email List - Metallurgy Professional Contacts Database | ELP Data"
        description="Access our comprehensive metallurgy industry email list with verified metallurgy professional contacts across all metal sectors. Target metallurgical engineers, plant managers, and metallurgy decision-makers."
        keywords="metallurgy industry email list, metallurgist contacts, steel manufacturer database, metal professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Metallurgy <span className="text-gray-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  As the world advances to new frontiers, the demand for metallurgical products are ever-expanding. 
                  Being such a vital element in the development of our society, metallurgy has become a very significant industry with immense development and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-gray-600 hover:bg-gray-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-gray-600 text-gray-600 hover:bg-gray-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>5,584 Metallurgy Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>1,953 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Metallurgy Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-gray-200 focus:border-gray-500" />
                  <Input placeholder="Metal Type" className="border-gray-200 focus:border-gray-500" />
                  <Input placeholder="Location" className="border-gray-200 focus:border-gray-500" />
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Metallurgy Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600">99.8%</div>
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
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-gray-600 mb-2">5.6K+</div>
                <div className="text-gray-600">Metallurgy Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.95K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Metal Categories</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">Real-time</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Metallurgy Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Metallurgy Industry solutions across various metal processing sectors and use cases
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
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
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
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
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
        <section className="py-16 bg-gray-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Metallurgy Industry Leaders?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Access our specialized database of 5.6K+ metallurgy contacts across all metal processing sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-600 hover:bg-gray-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-gray-500 text-lg px-8 py-3">
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