import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Fish, Anchor } from "lucide-react";

export default function FishingIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Commercial Fishing Operations",
      description: "Fishing Industry Email List implementation for commercial fishing operations and marine excellence",
      categories: ["Deep Sea Fishing", "Coastal Fishing", "Aquaculture", "Fish Processing"],
      targetIndustries: [
        "Commercial Fisheries",
        "Fishing Fleets", 
        "Fish Processing Plants",
        "Seafood Companies"
      ],
      responsibleTitles: [
        "Fleet Manager",
        "Fishing Captain",
        "Operations Manager",
        "Marine Biologist"
      ],
      challenges: [
        "Sustainable fishing practices and quotas",
        "Weather conditions and seasonal variations",
        "Equipment maintenance and vessel management",
        "Fish quality and cold storage requirements",
        "Regulatory compliance and licensing",
        "Market price fluctuations",
        "Labor management and crew safety",
        "Environmental conservation efforts"
      ],
      icon: <Fish className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Aquaculture & Fish Farming",
      description: "Fishing Industry Email List implementation for aquaculture & fish farming and sustainable excellence", 
      categories: ["Fish Farms", "Shellfish Cultivation", "Hatcheries", "Feed Production"],
      targetIndustries: [
        "Fish Farms",
        "Aquaculture Companies",
        "Hatchery Operations", 
        "Feed Manufacturers"
      ],
      responsibleTitles: [
        "Aquaculture Manager",
        "Farm Operations Director",
        "Hatchery Technician",
        "Feed Specialist"
      ],
      challenges: [
        "Water quality management and monitoring",
        "Disease prevention and fish health",
        "Feed optimization and nutrition",
        "Environmental impact assessment",
        "Technology integration and automation",
        "Market demand and pricing strategies",
        "Regulatory compliance and certifications",
        "Sustainable production practices"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Seafood Processing & Distribution",
      description: "Fishing Industry Email List implementation for seafood processing & distribution and supply chain excellence",
      categories: ["Processing Facilities", "Cold Storage", "Distribution", "Packaging"],
      targetIndustries: [
        "Seafood Processors",
        "Cold Storage Facilities",
        "Distribution Companies", 
        "Packaging Solutions"
      ],
      responsibleTitles: [
        "Processing Manager",
        "Quality Control Supervisor",
        "Distribution Manager",
        "Cold Chain Specialist"
      ],
      challenges: [
        "Food safety and HACCP compliance",
        "Cold chain management and logistics",
        "Processing efficiency and automation",
        "Product traceability and labeling",
        "Packaging innovation and sustainability",
        "Inventory management and rotation",
        "Transportation and delivery timing",
        "Export regulations and documentation"
      ],
      icon: <Shield className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Marine Equipment & Technology",
      description: "Fishing Industry Email List implementation for marine equipment & technology and innovation excellence",
      categories: ["Fishing Gear", "Navigation Systems", "Fish Finders", "Vessel Equipment"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Marine Technology",
        "Navigation Systems", 
        "Fishing Gear Suppliers"
      ],
      responsibleTitles: [
        "Sales Manager",
        "Marine Engineer",
        "Technical Support",
        "Product Development"
      ],
      challenges: [
        "Technology advancement and innovation",
        "Equipment reliability and durability",
        "Installation and maintenance services",
        "Training and technical support",
        "Cost-effectiveness and ROI",
        "Environmental regulations compliance",
        "Product customization and adaptation",
        "After-sales service and warranty"
      ],
      icon: <Anchor className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Fishing Regulations & Compliance",
      description: "Fishing Industry Email List implementation for fishing regulations & compliance and governance excellence",
      categories: ["Regulatory Bodies", "Licensing", "Quota Management", "Conservation"],
      targetIndustries: [
        "Government Agencies",
        "Regulatory Bodies",
        "Conservation Organizations", 
        "Compliance Services"
      ],
      responsibleTitles: [
        "Fisheries Officer",
        "Compliance Manager",
        "Marine Conservation Specialist",
        "Regulatory Affairs Director"
      ],
      challenges: [
        "Quota allocation and management",
        "Licensing and permit administration",
        "Monitoring and enforcement activities",
        "Environmental impact assessments",
        "International treaty compliance",
        "Data collection and reporting",
        "Stakeholder engagement and communication",
        "Policy development and implementation"
      ],
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    },
    {
      title: "Fishing Markets & Trade",
      description: "Fishing Industry Email List implementation for fishing markets & trade and commerce excellence",
      categories: ["Fish Markets", "Seafood Trading", "Export/Import", "Retail"],
      targetIndustries: [
        "Fish Markets",
        "Seafood Traders",
        "Export Companies", 
        "Retail Chains"
      ],
      responsibleTitles: [
        "Market Manager",
        "Seafood Buyer",
        "Export Manager",
        "Category Manager"
      ],
      challenges: [
        "Market demand forecasting",
        "Price negotiation and volatility",
        "Quality standards and certifications",
        "Export documentation and logistics",
        "Customer relationship management",
        "Market expansion and development",
        "Seasonal supply variations",
        "Competition and market positioning"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Fishing Industry Email List - Marine Professional Contacts Database | ELP Data"
        description="Access our comprehensive fishing industry email list with verified marine professional contacts across all fishing sectors. Target fishing managers, aquaculture specialists, and marine industry decision-makers."
        keywords="fishing industry email list, commercial fishing contacts, aquaculture database, marine professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Fishing <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Fishing is a part of the agriculture industry and it has been a predominant channel of food sourcing for generations.
                  Almost 10-12% of the world's population depends on this 700 billion dollar industry, as it has forged more than 5 million job opportunities around the world.
                </p>
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
                    <span>162,648 Fishing Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>56,926 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Fishing Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Fishing Type" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Fishing Contacts
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
                <div className="text-3xl font-bold text-blue-600 mb-2">163K+</div>
                <div className="text-gray-600">Fishing Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">57K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
                <div className="text-gray-600">Fishing Sectors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Monthly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Fishing Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Fishing Industry solutions across various marine sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Fishing Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 162,000+ fishing contacts across all marine sectors
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