import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Printer, FileImage } from "lucide-react";

export default function PrintingIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Commercial Printing Services",
      description: "Printing Industry Email List implementation for commercial printing services and quality excellence",
      categories: ["Offset Printing", "Digital Printing", "Large Format", "Specialty Printing"],
      targetIndustries: [
        "Commercial Printers",
        "Print Shops", 
        "Service Providers",
        "Quick Print Centers"
      ],
      responsibleTitles: [
        "Print Manager",
        "Production Manager",
        "Sales Director",
        "Operations Supervisor"
      ],
      challenges: [
        "Technology upgrades and equipment costs",
        "Quality control and color consistency",
        "Turnaround time and production scheduling",
        "Paper and material cost fluctuations",
        "Customer demands and customization",
        "Environmental regulations and sustainability",
        "Competition and pricing pressure",
        "Skilled workforce and training"
      ],
      icon: <Printer className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Packaging & Label Printing",
      description: "Printing Industry Email List implementation for packaging & label printing and branding excellence", 
      categories: ["Package Design", "Label Printing", "Flexible Packaging", "Folding Cartons"],
      targetIndustries: [
        "Packaging Companies",
        "Label Manufacturers",
        "Brand Agencies", 
        "Food & Beverage"
      ],
      responsibleTitles: [
        "Packaging Manager",
        "Label Specialist",
        "Brand Manager",
        "Design Director"
      ],
      challenges: [
        "Brand compliance and consistency",
        "Regulatory requirements and labeling",
        "Material innovation and sustainability",
        "Supply chain and logistics",
        "Customer approval processes",
        "Technology integration and automation",
        "Cost optimization and efficiency",
        "Market trends and consumer preferences"
      ],
      icon: <FileImage className="w-8 h-8 text-green-600" />
    },
    {
      title: "Publishing & Book Printing",
      description: "Printing Industry Email List implementation for publishing & book printing and literary excellence",
      categories: ["Book Publishing", "Magazine Printing", "Newspaper Production", "Educational Materials"],
      targetIndustries: [
        "Book Publishers",
        "Magazine Companies",
        "Newspaper Publishers", 
        "Educational Publishers"
      ],
      responsibleTitles: [
        "Publisher",
        "Production Manager",
        "Editorial Director",
        "Print Coordinator"
      ],
      challenges: [
        "Digital transformation and e-books",
        "Print runs and inventory management",
        "Distribution and logistics",
        "Content quality and editing",
        "Market demand and readership",
        "Production scheduling and deadlines",
        "Cost control and profitability",
        "Technology adoption and innovation"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Printing Equipment & Technology",
      description: "Printing Industry Email List implementation for printing equipment & technology and innovation excellence",
      categories: ["Printing Presses", "Digital Equipment", "Finishing Equipment", "Software Solutions"],
      targetIndustries: [
        "Equipment Manufacturers",
        "Technology Vendors",
        "Software Companies", 
        "Service Providers"
      ],
      responsibleTitles: [
        "Sales Engineer",
        "Product Manager",
        "Technical Specialist",
        "Service Manager"
      ],
      challenges: [
        "Technology advancement and innovation",
        "Equipment reliability and maintenance",
        "Customer training and support",
        "Integration and compatibility",
        "Cost justification and ROI",
        "Market competition and differentiation",
        "Global distribution and service",
        "Industry standards and compliance"
      ],
      icon: <Shield className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Print Marketing & Advertising",
      description: "Printing Industry Email List implementation for print marketing & advertising and communication excellence",
      categories: ["Direct Mail", "Promotional Materials", "Signage", "Marketing Collateral"],
      targetIndustries: [
        "Marketing Agencies",
        "Advertising Companies",
        "Direct Mail Services", 
        "Signage Companies"
      ],
      responsibleTitles: [
        "Marketing Director",
        "Creative Director",
        "Account Manager",
        "Production Coordinator"
      ],
      challenges: [
        "Campaign effectiveness and ROI",
        "Target audience and personalization",
        "Design creativity and impact",
        "Multi-channel integration",
        "Data management and analytics",
        "Regulatory compliance and privacy",
        "Budget optimization and cost control",
        "Performance measurement and tracking"
      ],
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    },
    {
      title: "Print Materials & Supplies",
      description: "Printing Industry Email List implementation for print materials & supplies and resource excellence",
      categories: ["Paper & Substrates", "Inks & Chemicals", "Plates & Films", "Finishing Materials"],
      targetIndustries: [
        "Paper Manufacturers",
        "Ink Suppliers",
        "Chemical Companies", 
        "Distribution Partners"
      ],
      responsibleTitles: [
        "Supply Manager",
        "Product Specialist",
        "Sales Representative",
        "Technical Support"
      ],
      challenges: [
        "Supply chain reliability and logistics",
        "Quality consistency and standards",
        "Price volatility and market fluctuations",
        "Environmental impact and sustainability",
        "Product innovation and development",
        "Customer technical support",
        "Inventory management and forecasting",
        "Competitive pricing and margins"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Printing Industry Email List - Printing Professional Contacts Database | ELP Data"
        description="Access our comprehensive printing industry email list with verified printing professional contacts across all printing sectors. Target print managers, production directors, and printing decision-makers."
        keywords="printing industry email list, printer contacts, production manager database, printing professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Printing <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  The printing industry is a network of businesses producing everything from books to packaging and promotional materials. 
                  With new technologies like 3-D printing and custom prints, businesses are always looking for reliable suppliers, services, and publishers.
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
                    <span>132,208 Printing Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>46,272 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Printing Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Printing Type" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Printing Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.3%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">132K+</div>
                <div className="text-gray-600">Printing Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">46K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">18+</div>
                <div className="text-gray-600">Printing Categories</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Daily</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Printing Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Printing Industry solutions across various printing sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Printing Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 132K+ printing contacts across all printing sectors
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