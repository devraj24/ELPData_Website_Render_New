import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Package, ShoppingBag } from "lucide-react";

export default function WholesaleIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Wholesale Distribution & Trading",
      description: "Wholesale Industry Email List implementation for wholesale distribution & trading and supply excellence",
      categories: ["Product Distribution", "B2B Trading", "Bulk Sales", "Supply Chain"],
      targetIndustries: [
        "Wholesale Distributors",
        "Trading Companies", 
        "Supply Chain Partners",
        "B2B Marketplace"
      ],
      responsibleTitles: [
        "Wholesale Manager",
        "Distribution Director",
        "Sales Manager",
        "Trading Specialist"
      ],
      challenges: [
        "Inventory management and turnover",
        "Pricing strategies and margins",
        "Supplier relationship management",
        "Customer credit and payment terms",
        "Market competition and differentiation",
        "Logistics and transportation costs",
        "Technology and system integration",
        "Regulatory compliance and licensing"
      ],
      icon: <Package className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Product Categories & Specialization",
      description: "Wholesale Industry Email List implementation for product categories & specialization and market excellence", 
      categories: ["Electronics", "Apparel", "Food & Beverage", "Industrial Goods"],
      targetIndustries: [
        "Electronics Wholesalers",
        "Fashion Distributors",
        "Food Wholesalers", 
        "Industrial Suppliers"
      ],
      responsibleTitles: [
        "Product Manager",
        "Category Manager",
        "Buying Director",
        "Merchandising Manager"
      ],
      challenges: [
        "Product mix optimization",
        "Seasonal demand fluctuations",
        "Quality control and standards",
        "Brand relationships and exclusivity",
        "Market trends and consumer preferences",
        "Product lifecycle management",
        "Inventory forecasting and planning",
        "Pricing and promotional strategies"
      ],
      icon: <ShoppingBag className="w-8 h-8 text-green-600" />
    },
    {
      title: "B2B Technology & Platforms",
      description: "Wholesale Industry Email List implementation for B2B technology & platforms and digital excellence",
      categories: ["B2B Marketplaces", "ERP Systems", "Inventory Management", "E-commerce Platforms"],
      targetIndustries: [
        "Technology Vendors",
        "Software Companies",
        "Platform Providers", 
        "System Integrators"
      ],
      responsibleTitles: [
        "Technology Manager",
        "Digital Transformation Lead",
        "IT Director",
        "Systems Administrator"
      ],
      challenges: [
        "Digital transformation and automation",
        "System integration and compatibility",
        "Data management and analytics",
        "User training and adoption",
        "Security and data protection",
        "Mobile accessibility and usability",
        "Scalability and performance",
        "ROI measurement and value delivery"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Wholesale Finance & Services",
      description: "Wholesale Industry Email List implementation for wholesale finance & services and business excellence",
      categories: ["Trade Finance", "Credit Management", "Payment Processing", "Business Services"],
      targetIndustries: [
        "Financial Services",
        "Trade Finance Companies",
        "Credit Agencies", 
        "Business Service Providers"
      ],
      responsibleTitles: [
        "Finance Manager",
        "Credit Manager",
        "Treasury Director",
        "Business Development"
      ],
      challenges: [
        "Credit risk assessment and management",
        "Cash flow optimization",
        "Payment terms and collection",
        "Trade financing and working capital",
        "Currency risk and hedging",
        "Regulatory compliance and reporting",
        "Technology and automation",
        "Customer relationship management"
      ],
      icon: <Shield className="w-8 h-8 text-orange-600" />
    },
    {
      title: "International Trade & Export",
      description: "Wholesale Industry Email List implementation for international trade & export and global excellence",
      categories: ["Import/Export", "Cross-border Trade", "Global Markets", "Trade Compliance"],
      targetIndustries: [
        "Import/Export Companies",
        "International Traders",
        "Global Distributors", 
        "Trade Service Providers"
      ],
      responsibleTitles: [
        "Export Manager",
        "International Trade Director",
        "Global Sales Manager",
        "Trade Compliance Officer"
      ],
      challenges: [
        "International regulations and compliance",
        "Currency fluctuations and hedging",
        "Cultural and language barriers",
        "Logistics and shipping complexities",
        "Documentation and customs clearance",
        "Market entry and expansion",
        "Quality standards and certifications",
        "Political and economic risks"
      ],
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    },
    {
      title: "Wholesale Marketing & Sales",
      description: "Wholesale Industry Email List implementation for wholesale marketing & sales and growth excellence",
      categories: ["B2B Marketing", "Trade Shows", "Channel Partners", "Sales Automation"],
      targetIndustries: [
        "Marketing Agencies",
        "Sales Consultants",
        "Trade Show Organizers", 
        "Channel Management"
      ],
      responsibleTitles: [
        "Marketing Manager",
        "Sales Director",
        "Channel Manager",
        "Business Development Manager"
      ],
      challenges: [
        "Lead generation and qualification",
        "Channel partner management",
        "Brand positioning and differentiation",
        "Marketing ROI and effectiveness",
        "Sales process optimization",
        "Customer acquisition and retention",
        "Digital marketing and online presence",
        "Competitive analysis and strategy"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Wholesale Industry Email List - Wholesale Professional Contacts Database | ELP Data"
        description="Access our comprehensive wholesale industry email list with verified wholesale professional contacts across all wholesale sectors. Target wholesale managers, distribution directors, and wholesale decision-makers."
        keywords="wholesale industry email list, distributor contacts, wholesale manager database, B2B wholesale professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Wholesale <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  The wholesale industry is a 53 billion-dollar empire that holds immense market potential, with growth opportunities skyrocketing! 
                  If you own a business/service that aligns with the interests of the wholesale industry, then curate your email list with InfoClutch!
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
                    <span>538,204 Wholesale Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>188,371 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Wholesale Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Product Category" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Wholesale Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.4%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">538K+</div>
                <div className="text-gray-600">Wholesale Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">188K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Product Categories</div>
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
              Wholesale Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Wholesale Industry solutions across various distribution sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Wholesale Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 538K+ wholesale contacts across all distribution sectors
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