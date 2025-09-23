import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Bird, Wheat } from "lucide-react";

export default function PoultryIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Poultry Production & Breeding",
      description: "Poultry Industry Email List implementation for poultry production & breeding and farming excellence",
      categories: ["Broiler Production", "Layer Farms", "Breeding Operations", "Hatcheries"],
      targetIndustries: [
        "Poultry Farms",
        "Breeding Companies", 
        "Hatchery Operations",
        "Commercial Producers"
      ],
      responsibleTitles: [
        "Farm Manager",
        "Production Manager",
        "Breeding Specialist",
        "Hatchery Manager"
      ],
      challenges: [
        "Disease prevention and biosecurity measures",
        "Feed efficiency and nutrition optimization",
        "Breeding program management and genetics",
        "Egg production and quality control",
        "Environmental control and housing systems",
        "Labor management and training",
        "Regulatory compliance and certifications",
        "Market price volatility and profitability"
      ],
      icon: <Bird className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Poultry Processing & Manufacturing",
      description: "Poultry Industry Email List implementation for poultry processing & manufacturing and food safety excellence", 
      categories: ["Processing Plants", "Meat Processing", "Value-Added Products", "Packaging"],
      targetIndustries: [
        "Processing Facilities",
        "Food Manufacturers",
        "Packaging Companies", 
        "Cold Storage"
      ],
      responsibleTitles: [
        "Plant Manager",
        "Processing Supervisor",
        "Quality Assurance Manager",
        "Food Safety Director"
      ],
      challenges: [
        "Food safety and HACCP compliance",
        "Processing efficiency and automation",
        "Product quality and consistency",
        "Cold chain management and logistics",
        "Packaging and labeling requirements",
        "Waste management and sustainability",
        "Equipment maintenance and upgrades",
        "Worker safety and training"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Feed & Nutrition Solutions",
      description: "Poultry Industry Email List implementation for feed & nutrition solutions and dietary excellence",
      categories: ["Feed Mills", "Nutrition Services", "Feed Additives", "Supplements"],
      targetIndustries: [
        "Feed Manufacturers",
        "Nutrition Companies",
        "Additive Suppliers", 
        "Agricultural Services"
      ],
      responsibleTitles: [
        "Nutritionist",
        "Feed Mill Manager",
        "Technical Director",
        "Sales Manager"
      ],
      challenges: [
        "Feed formulation and nutritional balance",
        "Ingredient sourcing and quality control",
        "Cost optimization and price fluctuations",
        "Feed safety and contamination prevention",
        "Regulatory compliance and approvals",
        "Research and development of new products",
        "Customer education and technical support",
        "Supply chain management and logistics"
      ],
      icon: <Wheat className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Veterinary & Animal Health",
      description: "Poultry Industry Email List implementation for veterinary & animal health and wellness excellence",
      categories: ["Veterinary Services", "Vaccines", "Pharmaceuticals", "Diagnostics"],
      targetIndustries: [
        "Veterinary Clinics",
        "Animal Health Companies",
        "Pharmaceutical Manufacturers", 
        "Diagnostic Labs"
      ],
      responsibleTitles: [
        "Poultry Veterinarian",
        "Animal Health Specialist",
        "Technical Service Manager",
        "Research Scientist"
      ],
      challenges: [
        "Disease diagnosis and treatment protocols",
        "Vaccination programs and schedules",
        "Antibiotic stewardship and alternatives",
        "Health monitoring and surveillance",
        "Regulatory compliance and drug approvals",
        "Emergency response and outbreak management",
        "Professional development and training",
        "Cost-effective health management"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Equipment & Technology",
      description: "Poultry Industry Email List implementation for equipment & technology and automation excellence",
      categories: ["Farm Equipment", "Processing Machinery", "Automation Systems", "Environmental Controls"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Technology Providers",
        "Automation Companies", 
        "Engineering Services"
      ],
      responsibleTitles: [
        "Equipment Sales Manager",
        "Technical Engineer",
        "Project Manager",
        "Service Technician"
      ],
      challenges: [
        "Equipment reliability and maintenance",
        "Technology integration and compatibility",
        "Automation and labor reduction",
        "Energy efficiency and sustainability",
        "Installation and commissioning",
        "Training and technical support",
        "Upgrade and modernization projects",
        "Return on investment calculations"
      ],
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Distribution & Retail",
      description: "Poultry Industry Email List implementation for distribution & retail and market excellence",
      categories: ["Distributors", "Retailers", "Food Service", "Export/Import"],
      targetIndustries: [
        "Food Distributors",
        "Retail Chains",
        "Restaurant Chains", 
        "Export Companies"
      ],
      responsibleTitles: [
        "Distribution Manager",
        "Buyer",
        "Category Manager",
        "Export Manager"
      ],
      challenges: [
        "Supply chain coordination and logistics",
        "Cold storage and transportation",
        "Product traceability and tracking",
        "Market demand forecasting",
        "Pricing strategies and negotiations",
        "Quality maintenance during distribution",
        "Regulatory compliance for exports",
        "Customer relationship management"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Poultry Industry Email List - Poultry Professional Contacts Database | ELP Data"
        description="Access our comprehensive poultry industry email list with verified poultry professional contacts across all poultry sectors. Target poultry farmers, processors, and agriculture decision-makers."
        keywords="poultry industry email list, poultry farm contacts, chicken producer database, agriculture professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-yellow-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Poultry <span className="text-yellow-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  As the second most widely eaten meat in the world, poultry, a subset of the agriculture industry is a staple for almost 33% of the world's population. 
                  With the meat craze steadily increasing, the poultry industry has seen significant growth and has opened up for innovation and disruptions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>639,698 Poultry Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>223,908 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-yellow-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Poultry Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-yellow-200 focus:border-yellow-500" />
                  <Input placeholder="Poultry Type" className="border-yellow-200 focus:border-yellow-500" />
                  <Input placeholder="Location" className="border-yellow-200 focus:border-yellow-500" />
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Poultry Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">98.7%</div>
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
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border border-yellow-100">
                <div className="text-3xl font-bold text-yellow-600 mb-2">640K+</div>
                <div className="text-gray-600">Poultry Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">224K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Poultry Sectors</div>
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
              Poultry Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Poultry Industry solutions across various agricultural sectors and use cases
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
                          <span key={idx} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
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
                            <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
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
        <section className="py-16 bg-yellow-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Poultry Industry Leaders?</h2>
            <p className="text-xl text-yellow-100 mb-8">
              Access our comprehensive database of 640,000+ poultry contacts across all agricultural sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-yellow-600 hover:bg-yellow-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-yellow-500 text-lg px-8 py-3">
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