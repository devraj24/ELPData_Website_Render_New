import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Crown, Gem } from "lucide-react";

export default function LuxuryGoodsIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "High-End Fashion & Apparel",
      description: "Luxury Goods Industry Email List implementation for high-end fashion & apparel and style excellence",
      categories: ["Designer Fashion", "Haute Couture", "Luxury Accessories", "Premium Footwear"],
      targetIndustries: [
        "Luxury Fashion Brands",
        "Designer Houses", 
        "Premium Retailers",
        "Fashion Boutiques"
      ],
      responsibleTitles: [
        "Brand Manager",
        "Creative Director",
        "Retail Manager",
        "Merchandising Director"
      ],
      challenges: [
        "Brand positioning and exclusivity",
        "Seasonal collection planning",
        "Supply chain and craftsmanship",
        "Customer experience and service",
        "Digital transformation and e-commerce",
        "Counterfeiting and brand protection",
        "Sustainability and ethical sourcing",
        "Global market expansion"
      ],
      icon: <Crown className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Luxury Jewelry & Watches",
      description: "Luxury Goods Industry Email List implementation for luxury jewelry & watches and timeless excellence", 
      categories: ["Fine Jewelry", "Luxury Watches", "Precious Stones", "Custom Designs"],
      targetIndustries: [
        "Jewelry Manufacturers",
        "Watch Companies",
        "Gemstone Dealers", 
        "Luxury Retailers"
      ],
      responsibleTitles: [
        "Jewelry Designer",
        "Gemologist",
        "Watch Specialist",
        "Luxury Sales Manager"
      ],
      challenges: [
        "Authentication and certification",
        "Security and insurance requirements",
        "Artisan craftsmanship and skills",
        "Market volatility and pricing",
        "Customer education and expertise",
        "Digital marketing and online sales",
        "Heritage and brand storytelling",
        "Ethical sourcing and transparency"
      ],
      icon: <Gem className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Luxury Automotive & Yachts",
      description: "Luxury Goods Industry Email List implementation for luxury automotive & yachts and performance excellence",
      categories: ["Luxury Cars", "Supercars", "Luxury Yachts", "Private Jets"],
      targetIndustries: [
        "Luxury Car Dealers",
        "Yacht Manufacturers",
        "Aviation Companies", 
        "Custom Builders"
      ],
      responsibleTitles: [
        "Sales Director",
        "Marine Engineer",
        "Aircraft Specialist",
        "Luxury Consultant"
      ],
      challenges: [
        "Customization and personalization",
        "Technology integration and innovation",
        "Regulatory compliance and safety",
        "Maintenance and service networks",
        "Customer relationship management",
        "Market competition and differentiation",
        "Environmental regulations",
        "Global distribution and logistics"
      ],
      icon: <Target className="w-8 h-8 text-red-600" />
    },
    {
      title: "Luxury Real Estate & Hospitality",
      description: "Luxury Goods Industry Email List implementation for luxury real estate & hospitality and lifestyle excellence",
      categories: ["Luxury Properties", "High-End Hotels", "Resorts", "Private Clubs"],
      targetIndustries: [
        "Luxury Real Estate",
        "Premium Hotels",
        "Resort Operators", 
        "Private Clubs"
      ],
      responsibleTitles: [
        "Property Developer",
        "Hotel Manager",
        "Resort Director",
        "Club Manager"
      ],
      challenges: [
        "Property valuation and pricing",
        "Guest experience and service standards",
        "Facility maintenance and upgrades",
        "Market positioning and branding",
        "Seasonal demand management",
        "Technology and smart features",
        "Privacy and security requirements",
        "Sustainability and environmental impact"
      ],
      icon: <Building className="w-8 h-8 text-green-600" />
    },
    {
      title: "Luxury Beauty & Wellness",
      description: "Luxury Goods Industry Email List implementation for luxury beauty & wellness and premium excellence",
      categories: ["Premium Skincare", "Luxury Cosmetics", "Spa Services", "Wellness Products"],
      targetIndustries: [
        "Luxury Beauty Brands",
        "Premium Spas",
        "Wellness Centers", 
        "Cosmetic Companies"
      ],
      responsibleTitles: [
        "Brand Manager",
        "Spa Director",
        "Product Developer",
        "Wellness Consultant"
      ],
      challenges: [
        "Product innovation and research",
        "Ingredient sourcing and quality",
        "Regulatory compliance and testing",
        "Brand positioning and marketing",
        "Customer education and training",
        "Distribution and retail partnerships",
        "Digital presence and e-commerce",
        "Sustainability and clean beauty"
      ],
      icon: <Shield className="w-8 h-8 text-pink-600" />
    },
    {
      title: "Luxury Technology & Services",
      description: "Luxury Goods Industry Email List implementation for luxury technology & services and innovation excellence",
      categories: ["Premium Electronics", "Concierge Services", "Private Banking", "Luxury Travel"],
      targetIndustries: [
        "Luxury Technology",
        "Concierge Companies",
        "Private Banks", 
        "Travel Agencies"
      ],
      responsibleTitles: [
        "Technology Director",
        "Concierge Manager",
        "Private Banker",
        "Travel Consultant"
      ],
      challenges: [
        "Technology integration and innovation",
        "Personalized service delivery",
        "Privacy and data protection",
        "Global service network",
        "Quality assurance and standards",
        "Market competition and differentiation",
        "Customer expectations and satisfaction",
        "Digital transformation and automation"
      ],
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Luxury Goods Industry Email List - Luxury Professional Contacts Database | ELP Data"
        description="Access our comprehensive luxury goods industry email list with verified luxury professional contacts across all luxury sectors. Target luxury brand managers, retail directors, and luxury decision-makers."
        keywords="luxury goods email list, luxury brand contacts, premium retail database, luxury professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Luxury Goods <span className="text-purple-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Luxury goods are purchased due to their famous reputation, pinnacle style, and compact sophistication. 
                  These products are designed with great attention to detail to suave their prospects and also to ensure they are built to last to showcase their artistry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-purple-600 text-purple-600 hover:bg-purple-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>111,904 Luxury Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>39,311 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Luxury Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Brand Name" className="border-purple-200 focus:border-purple-500" />
                  <Input placeholder="Luxury Category" className="border-purple-200 focus:border-purple-500" />
                  <Input placeholder="Location" className="border-purple-200 focus:border-purple-500" />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Luxury Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">99.7%</div>
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
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">112K+</div>
                <div className="text-gray-600">Luxury Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">39K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Luxury Sectors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Premium</div>
                <div className="text-gray-600">Data Quality</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Luxury Goods Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Luxury Goods Industry solutions across various premium sectors and use cases
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
                          <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
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
                            <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
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
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Luxury Industry Leaders?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Access our premium database of 111K+ luxury contacts across all luxury sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-purple-500 text-lg px-8 py-3">
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