import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Sparkles, Heart } from "lucide-react";

export default function BeautyIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Cosmetics & Skincare Manufacturing",
      description: "Beauty Industry Email List implementation for cosmetics & skincare manufacturing and product excellence",
      categories: ["Cosmetics Production", "Skincare Development", "Color Cosmetics", "Personal Care"],
      targetIndustries: [
        "Cosmetics Manufacturers",
        "Skincare Companies", 
        "Beauty Product Brands",
        "Private Label Manufacturers"
      ],
      responsibleTitles: [
        "Product Development Manager",
        "Cosmetic Chemist",
        "Brand Manager",
        "Quality Assurance Director"
      ],
      challenges: [
        "Product formulation and ingredient sourcing",
        "Regulatory compliance and safety testing",
        "Brand positioning and market differentiation",
        "Sustainable packaging and eco-friendly products",
        "Consumer trend analysis and innovation",
        "Supply chain management and cost control",
        "Quality control and batch consistency",
        "International market expansion"
      ],
      icon: <Sparkles className="w-8 h-8 text-pink-600" />
    },
    {
      title: "Beauty Retail & Distribution",
      description: "Beauty Industry Email List implementation for beauty retail & distribution and customer experience excellence", 
      categories: ["Beauty Stores", "Online Retail", "Department Stores", "Specialty Chains"],
      targetIndustries: [
        "Beauty Retailers",
        "E-commerce Platforms",
        "Department Stores", 
        "Specialty Beauty Chains"
      ],
      responsibleTitles: [
        "Retail Manager",
        "Buyer",
        "Category Manager",
        "E-commerce Director"
      ],
      challenges: [
        "Inventory management and product assortment",
        "Customer experience and personalization",
        "Omnichannel retail strategy",
        "Staff training and product knowledge",
        "Digital marketing and social media presence",
        "Competitive pricing and promotions",
        "Supply chain and vendor relationships",
        "Customer loyalty and retention programs"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Beauty Services & Salons",
      description: "Beauty Industry Email List implementation for beauty services & salons and professional excellence",
      categories: ["Hair Salons", "Spas", "Nail Salons", "Beauty Clinics"],
      targetIndustries: [
        "Hair Salons",
        "Day Spas",
        "Nail Salons", 
        "Medical Spas"
      ],
      responsibleTitles: [
        "Salon Owner",
        "Spa Manager",
        "Beauty Director",
        "Service Coordinator"
      ],
      challenges: [
        "Staff recruitment and training",
        "Client booking and scheduling systems",
        "Service quality and customer satisfaction",
        "Equipment maintenance and upgrades",
        "Health and safety compliance",
        "Marketing and client acquisition",
        "Inventory management for products",
        "Technology integration and POS systems"
      ],
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      title: "Beauty Technology & Innovation",
      description: "Beauty Industry Email List implementation for beauty technology & innovation and digital excellence",
      categories: ["Beauty Tech", "AI & AR", "E-commerce Platforms", "Beauty Apps"],
      targetIndustries: [
        "Beauty Tech Companies",
        "Software Developers",
        "AR/VR Solutions", 
        "Beauty Apps"
      ],
      responsibleTitles: [
        "Technology Director",
        "Product Manager",
        "Innovation Lead",
        "UX/UI Designer"
      ],
      challenges: [
        "Virtual try-on technology development",
        "AI-powered personalization algorithms",
        "Mobile app user experience",
        "Data privacy and security compliance",
        "Integration with existing systems",
        "User adoption and engagement",
        "Technology scalability and performance",
        "Partnership with beauty brands"
      ],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Beauty Ingredients & Suppliers",
      description: "Beauty Industry Email List implementation for beauty ingredients & suppliers and sourcing excellence",
      categories: ["Raw Materials", "Active Ingredients", "Packaging", "Equipment"],
      targetIndustries: [
        "Ingredient Suppliers",
        "Chemical Companies",
        "Packaging Manufacturers", 
        "Equipment Suppliers"
      ],
      responsibleTitles: [
        "Sales Manager",
        "Technical Director",
        "Business Development",
        "Application Specialist"
      ],
      challenges: [
        "Ingredient innovation and development",
        "Regulatory compliance and documentation",
        "Supply chain reliability and logistics",
        "Quality assurance and testing",
        "Sustainable sourcing practices",
        "Technical support and formulation assistance",
        "Market trends and customer demands",
        "Competitive pricing and contracts"
      ],
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Beauty Marketing & Influencers",
      description: "Beauty Industry Email List implementation for beauty marketing & influencers and brand excellence",
      categories: ["Digital Marketing", "Influencer Marketing", "PR Agencies", "Social Media"],
      targetIndustries: [
        "Marketing Agencies",
        "PR Firms",
        "Influencer Networks", 
        "Social Media Platforms"
      ],
      responsibleTitles: [
        "Marketing Director",
        "Influencer Manager",
        "PR Specialist",
        "Social Media Manager"
      ],
      challenges: [
        "Influencer partnership and management",
        "Content creation and brand storytelling",
        "Social media strategy and engagement",
        "Campaign measurement and ROI",
        "Authentic brand representation",
        "Crisis management and reputation",
        "Multi-platform marketing coordination",
        "Trend identification and adaptation"
      ],
      icon: <Building className="w-8 h-8 text-orange-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Beauty Industry Email List - Beauty Professional Contacts Database | ELP Data"
        description="Access our comprehensive beauty industry email list with verified beauty professional contacts across all beauty sectors. Target cosmetics managers, beauty retailers, and personal care decision-makers."
        keywords="beauty industry email list, cosmetics contacts, beauty retailer database, skincare professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Beauty <span className="text-pink-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  As the tide turned into the 21st century, self-expression and self-image became more important than ever before. This has ultimately impacted the beauty industry, stimulating unprecedented growth.
                  The multi-billion dollar industry employs millions of professionals globally and has adopted new tech advancements to pave the way for better opportunities to roll in.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-pink-600 text-pink-600 hover:bg-pink-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>426,554 Beauty Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>163,793 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Beauty Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Beauty Company" className="border-pink-200 focus:border-pink-500" />
                  <Input placeholder="Beauty Category" className="border-pink-200 focus:border-pink-500" />
                  <Input placeholder="Location" className="border-pink-200 focus:border-pink-500" />
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Beauty Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">99.0%</div>
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
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100">
                <div className="text-3xl font-bold text-pink-600 mb-2">427K+</div>
                <div className="text-gray-600">Beauty Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">164K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
                <div className="text-gray-600">Beauty Sectors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">Daily</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Beauty Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Beauty Industry solutions across various beauty sectors and use cases
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
                          <span key={idx} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
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
                            <div className="w-1 h-1 bg-pink-600 rounded-full"></div>
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
        <section className="py-16 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Beauty Industry Leaders?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Access our comprehensive database of 427,000+ beauty contacts across all beauty sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-pink-500 text-lg px-8 py-3">
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