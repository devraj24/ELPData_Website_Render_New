import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Warehouse, Package } from "lucide-react";

export default function WarehouseIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Warehouse Operations & Management",
      description: "Warehouse Industry Email List implementation for warehouse operations & management and efficiency excellence",
      categories: ["Warehouse Management", "Inventory Control", "Order Fulfillment", "Storage Solutions"],
      targetIndustries: [
        "Warehouse Operators",
        "3PL Companies", 
        "Distribution Centers",
        "Fulfillment Centers"
      ],
      responsibleTitles: [
        "Warehouse Manager",
        "Operations Director",
        "Fulfillment Manager",
        "Inventory Supervisor"
      ],
      challenges: [
        "Space utilization optimization",
        "Inventory accuracy and control",
        "Order processing efficiency",
        "Labor productivity and scheduling",
        "Technology integration and automation",
        "Safety compliance and procedures",
        "Cost reduction and operational efficiency",
        "Seasonal demand fluctuations"
      ],
      icon: <Warehouse className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Warehouse Technology & Automation",
      description: "Warehouse Industry Email List implementation for warehouse technology & automation and innovation excellence", 
      categories: ["WMS Systems", "Robotics", "Conveyor Systems", "Automated Storage"],
      targetIndustries: [
        "Technology Vendors",
        "Automation Companies",
        "Software Providers", 
        "Equipment Manufacturers"
      ],
      responsibleTitles: [
        "Technology Manager",
        "Automation Specialist",
        "Systems Engineer",
        "Product Manager"
      ],
      challenges: [
        "System integration and compatibility",
        "ROI justification and payback",
        "User training and adoption",
        "Equipment reliability and maintenance",
        "Scalability and future expansion",
        "Data accuracy and real-time updates",
        "Safety and human-machine interaction",
        "Technology upgrade planning"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Material Handling Equipment",
      description: "Warehouse Industry Email List implementation for material handling equipment and operational excellence",
      categories: ["Forklifts", "Conveyor Systems", "Racking Systems", "Picking Equipment"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Material Handling Companies",
        "Rental Services", 
        "Service Providers"
      ],
      responsibleTitles: [
        "Equipment Manager",
        "Maintenance Supervisor",
        "Procurement Manager",
        "Operations Coordinator"
      ],
      challenges: [
        "Equipment selection and sizing",
        "Maintenance and downtime reduction",
        "Safety training and compliance",
        "Cost optimization and leasing",
        "Space constraints and layout",
        "Operator training and certification",
        "Technology integration",
        "Energy efficiency and sustainability"
      ],
      icon: <Package className="w-8 h-8 text-green-600" />
    },
    {
      title: "Supply Chain & Logistics Services",
      description: "Warehouse Industry Email List implementation for supply chain & logistics services and coordination excellence",
      categories: ["Transportation", "Cross-docking", "Value-added Services", "Returns Processing"],
      targetIndustries: [
        "Logistics Providers",
        "Transportation Companies",
        "Supply Chain Consultants", 
        "Third-party Logistics"
      ],
      responsibleTitles: [
        "Logistics Manager",
        "Supply Chain Director",
        "Transportation Manager",
        "Distribution Coordinator"
      ],
      challenges: [
        "Transportation coordination",
        "Cross-docking efficiency",
        "Value-added service offerings",
        "Returns and reverse logistics",
        "Customer service levels",
        "Cost management and pricing",
        "Technology and visibility",
        "Regulatory compliance"
      ],
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Warehouse Safety & Security",
      description: "Warehouse Industry Email List implementation for warehouse safety & security and protection excellence",
      categories: ["Safety Equipment", "Security Systems", "Training Programs", "Compliance"],
      targetIndustries: [
        "Safety Equipment Suppliers",
        "Security Companies",
        "Training Organizations", 
        "Compliance Services"
      ],
      responsibleTitles: [
        "Safety Manager",
        "Security Director",
        "Training Coordinator",
        "Compliance Officer"
      ],
      challenges: [
        "Workplace safety and accident prevention",
        "Security and theft prevention",
        "Employee training and awareness",
        "Regulatory compliance and inspections",
        "Emergency preparedness and response",
        "Safety equipment maintenance",
        "Risk assessment and management",
        "Insurance and liability management"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Warehouse Design & Consulting",
      description: "Warehouse Industry Email List implementation for warehouse design & consulting and optimization excellence",
      categories: ["Facility Design", "Layout Optimization", "Process Improvement", "Consulting Services"],
      targetIndustries: [
        "Design Consultants",
        "Engineering Firms",
        "Process Improvement", 
        "Industrial Design"
      ],
      responsibleTitles: [
        "Design Engineer",
        "Process Consultant",
        "Project Manager",
        "Industrial Engineer"
      ],
      challenges: [
        "Space optimization and layout design",
        "Workflow and process improvement",
        "Technology integration planning",
        "Cost-benefit analysis",
        "Regulatory and building code compliance",
        "Future scalability and flexibility",
        "Environmental and sustainability factors",
        "Project management and implementation"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Warehouse Industry Email List - Warehouse Professional Contacts Database | ELP Data"
        description="Access our comprehensive warehouse industry email list with verified warehouse professional contacts across all warehouse sectors. Target warehouse managers, operations directors, and warehouse decision-makers."
        keywords="warehouse industry email list, warehouse manager contacts, distribution center database, warehouse professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Warehouse <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Reaching the right decision-makers in the warehouse industry isn't easy. Many contact lists contain outdated emails, 
                  resulting in low response rates and wasted marketing efforts. If you are on the lookout for a list with the freshest data 
                  and most accurate information, then check out our list now!
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
                    <span>46,364 Warehouse Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>16,227 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Warehouse Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Warehouse Type" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Warehouse Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.6%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">46K+</div>
                <div className="text-gray-600">Warehouse Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">16K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
                <div className="text-gray-600">Warehouse Categories</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Real-time</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Warehouse Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Warehouse Industry solutions across various distribution and storage sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Warehouse Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 46K+ warehouse contacts across all distribution sectors
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