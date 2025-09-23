import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, HardHat, Layers } from "lucide-react";

export default function CementIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Cement Manufacturing & Production",
      description: "Cement Industry Email List implementation for cement manufacturing & production and quality excellence",
      categories: ["Portland Cement", "Blended Cement", "Specialty Cement", "Raw Materials"],
      targetIndustries: [
        "Cement Manufacturers",
        "Production Plants", 
        "Mining Companies",
        "Raw Material Suppliers"
      ],
      responsibleTitles: [
        "Plant Manager",
        "Production Director",
        "Quality Control Manager",
        "Operations Supervisor"
      ],
      challenges: [
        "Energy efficiency and cost reduction",
        "Environmental compliance and emissions",
        "Quality control and testing standards",
        "Equipment maintenance and reliability",
        "Raw material sourcing and logistics",
        "Market demand fluctuations",
        "Safety protocols and worker protection",
        "Technology modernization and automation"
      ],
      icon: <HardHat className="w-8 h-8 text-gray-600" />
    },
    {
      title: "Construction & Infrastructure",
      description: "Cement Industry Email List implementation for construction & infrastructure and building excellence", 
      categories: ["Ready-Mix Concrete", "Precast Products", "Infrastructure Projects", "Commercial Construction"],
      targetIndustries: [
        "Construction Companies",
        "Concrete Suppliers",
        "Infrastructure Developers", 
        "Building Contractors"
      ],
      responsibleTitles: [
        "Project Manager",
        "Construction Manager",
        "Concrete Specialist",
        "Engineering Manager"
      ],
      challenges: [
        "Project scheduling and delivery",
        "Concrete quality and durability",
        "Weather and seasonal variations",
        "Transportation and logistics",
        "Customer specifications and requirements",
        "Competitive pricing and margins",
        "Technical support and expertise",
        "Sustainable construction practices"
      ],
      icon: <Building className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Cement Equipment & Technology",
      description: "Cement Industry Email List implementation for cement equipment & technology and innovation excellence",
      categories: ["Production Equipment", "Testing Instruments", "Automation Systems", "Maintenance Tools"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Technology Providers",
        "Service Companies", 
        "Engineering Firms"
      ],
      responsibleTitles: [
        "Sales Engineer",
        "Technical Specialist",
        "Service Manager",
        "Product Manager"
      ],
      challenges: [
        "Equipment efficiency and performance",
        "Technology integration and compatibility",
        "Maintenance and service support",
        "Cost-benefit analysis and ROI",
        "Training and technical expertise",
        "Regulatory compliance and standards",
        "Innovation and product development",
        "Global market competition"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Cement Distribution & Logistics",
      description: "Cement Industry Email List implementation for cement distribution & logistics and supply excellence",
      categories: ["Transportation", "Warehousing", "Distribution Centers", "Bulk Handling"],
      targetIndustries: [
        "Transportation Companies",
        "Logistics Providers",
        "Distribution Centers", 
        "Storage Facilities"
      ],
      responsibleTitles: [
        "Logistics Manager",
        "Transportation Director",
        "Warehouse Manager",
        "Supply Chain Coordinator"
      ],
      challenges: [
        "Transportation cost optimization",
        "Storage and handling efficiency",
        "Delivery scheduling and timing",
        "Quality preservation during transport",
        "Fleet management and maintenance",
        "Regulatory compliance and permits",
        "Customer service and communication",
        "Technology and tracking systems"
      ],
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      title: "Cement Testing & Quality Assurance",
      description: "Cement Industry Email List implementation for cement testing & quality assurance and standards excellence",
      categories: ["Laboratory Testing", "Quality Control", "Certification", "Standards Compliance"],
      targetIndustries: [
        "Testing Laboratories",
        "Quality Assurance",
        "Certification Bodies", 
        "Consulting Services"
      ],
      responsibleTitles: [
        "Quality Manager",
        "Laboratory Technician",
        "Testing Specialist",
        "Compliance Officer"
      ],
      challenges: [
        "Testing accuracy and reliability",
        "Standard compliance and certification",
        "Laboratory equipment and calibration",
        "Sample collection and handling",
        "Data management and reporting",
        "Regulatory updates and changes",
        "Technical expertise and training",
        "Quality documentation and records"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Cement Research & Development",
      description: "Cement Industry Email List implementation for cement research & development and innovation excellence",
      categories: ["Material Research", "Product Development", "Sustainability", "Innovation"],
      targetIndustries: [
        "Research Institutes",
        "Universities",
        "Innovation Centers", 
        "Development Labs"
      ],
      responsibleTitles: [
        "Research Director",
        "Materials Scientist",
        "Product Developer",
        "Innovation Manager"
      ],
      challenges: [
        "Research funding and resources",
        "Technology transfer and commercialization",
        "Sustainability and environmental impact",
        "Innovation and breakthrough development",
        "Collaboration and partnerships",
        "Intellectual property and patents",
        "Market application and validation",
        "Industry adoption and implementation"
      ],
      icon: <Layers className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cement Industry Email List - Cement Professional Contacts Database | ELP Data"
        description="Access our comprehensive cement industry email list with verified cement professional contacts across all cement sectors. Target cement manufacturers, construction managers, and cement industry decision-makers."
        keywords="cement industry email list, cement manufacturer contacts, construction manager database, cement professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Cement <span className="text-gray-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Cement has always played a pivotal role in the development of societies and countries. 
                  Being the fundamental element of any construction project, cement is widely popular and has shaped into a multi-billion-dollar industry that is heavily relied upon.
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
                    <span>23,370 Cement Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>8,180 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Cement Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-gray-200 focus:border-gray-500" />
                  <Input placeholder="Cement Type" className="border-gray-200 focus:border-gray-500" />
                  <Input placeholder="Location" className="border-gray-200 focus:border-gray-500" />
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Cement Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600">99.6%</div>
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
                <div className="text-3xl font-bold text-gray-600 mb-2">23K+</div>
                <div className="text-gray-600">Cement Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.2K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                <div className="text-gray-600">Cement Categories</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">Weekly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Cement Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Cement Industry solutions across various construction sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Cement Industry Leaders?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Access our comprehensive database of 23K+ cement contacts across all cement sectors
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