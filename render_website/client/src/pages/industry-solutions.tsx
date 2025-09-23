import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Factory, Truck, Hotel, Zap, ArrowRight, TrendingUp, Target } from "lucide-react";
import { Link } from "wouter";

export default function IndustrySolutions() {
  const industries = [
    {
      title: "Real Estate Email List",
      description: "Connect with real estate professionals, agents, brokers, and property managers",
      count: "703K+",
      href: "/real-estate-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Residential Real Estate", "Commercial Real Estate", "Property Management", "Real Estate Investment"]
    },
    {
      title: "Oil and Gas Email List", 
      description: "Target energy sector professionals across upstream, midstream, and downstream operations",
      count: "387K+",
      href: "/energy-industry-email-list",
      icon: <Factory className="w-8 h-8 text-orange-600" />,
      segments: ["Upstream Operations", "Refining & Processing", "Pipeline & Distribution", "Energy Trading"]
    },
    {
      title: "Hospitality Email List",
      description: "Reach hospitality industry professionals including hotels, restaurants, and tourism",
      count: "496K+", 
      href: "/hospitality-tourism-industry-email-list",
      icon: <Hotel className="w-8 h-8 text-purple-600" />,
      segments: ["Hotels & Resorts", "Restaurants & Food Service", "Travel & Tourism", "Event Management"]
    },
    {
      title: "IT Industry Email List",
      description: "Connect with information technology professionals across all sectors",
      count: "982K+",
      href: "/it-industry-email-list", 
      icon: <Target className="w-8 h-8 text-green-600" />,
      segments: ["Software Development", "IT Services", "Cybersecurity", "Cloud Computing"]
    },
    {
      title: "Telecom Industry Email List",
      description: "Target telecommunications professionals and service providers",
      count: "274K+",
      href: "/telecommunications-industry-email-list",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      segments: ["Mobile Networks", "Internet Providers", "Satellite Communications", "Network Infrastructure"]
    },
    {
      title: "Manufacturing Email List",
      description: "Access manufacturing professionals across all industrial sectors",
      count: "1.09M+",
      href: "/manufacturing-industry-email-list",
      icon: <Factory className="w-8 h-8 text-red-600" />,
      segments: ["Automotive Manufacturing", "Electronics Manufacturing", "Chemical Processing", "Food Production"]
    },
    {
      title: "Finance Industry Email List",
      description: "Connect with financial services professionals and institutions",
      count: "658K+",
      href: "/banking-industry-email-list",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      segments: ["Banking", "Investment Services", "Insurance", "Financial Planning"]
    },
    {
      title: "Hotel Industry Email List",
      description: "Target hotel and lodging industry professionals",
      count: "298K+",
      href: "/hospitality-tourism-industry-email-list",
      icon: <Hotel className="w-8 h-8 text-pink-600" />,
      segments: ["Hotel Management", "Resort Operations", "Hospitality Services", "Travel Booking"]
    },
    {
      title: "Legal Services Email List",
      description: "Reach legal professionals and law firms",
      count: "275K+",
      href: "/legal-services-industry-email-list",
      icon: <Building className="w-8 h-8 text-gray-600" />,
      segments: ["Law Firms", "Corporate Legal", "Government Legal", "Legal Consulting"]
    },
    {
      title: "Media Industry Email List",
      description: "Connect with media and entertainment professionals",
      count: "213K+",
      href: "/media-entertainment-industry-email-list",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      segments: ["Broadcasting", "Digital Media", "Publishing", "Entertainment"]
    },
    {
      title: "Energy Industry Email List",
      description: "Target energy sector professionals and utilities",
      count: "342K+",
      href: "/energy-industry-email-list",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      segments: ["Renewable Energy", "Power Generation", "Energy Distribution", "Energy Services"]
    },
    {
      title: "Construction Email List",
      description: "Connect with construction industry professionals",
      count: "2.07M+",
      href: "/construction-industry-email-list",
      icon: <Building className="w-8 h-8 text-orange-500" />,
      segments: ["General Construction", "Specialized Trades", "Construction Materials", "Equipment & Technology"]
    }
  ];

  const additionalIndustries = [
    {
      title: "Healthcare Industry Email List",
      description: "Connect with healthcare professionals and medical institutions",
      count: "892K+",
      href: "/healthcare-industry-email-list",
      icon: <Target className="w-8 h-8 text-red-500" />,
      segments: ["Hospitals & Clinics", "Medical Devices", "Pharmaceuticals", "Healthcare IT"]
    },
    {
      title: "Education Email List",
      description: "Target education professionals and institutions",
      count: "1.53M+",
      href: "/education-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-500" />,
      segments: ["K-12 Schools", "Higher Education", "EdTech", "Training & Development"]
    },
    {
      title: "Agriculture Email List",
      description: "Reach agricultural professionals and agribusiness",
      count: "456K+",
      href: "/agriculture-industry-email-list",
      icon: <Factory className="w-8 h-8 text-green-500" />,
      segments: ["Crop Production", "Livestock", "AgTech", "Agricultural Equipment"]
    },
    {
      title: "Fitness Industry Email List",
      description: "Connect with fitness and wellness professionals",
      count: "287K+",
      href: "/fitness-industry-email-list",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      segments: ["Gyms & Fitness Centers", "Personal Training", "Sports Nutrition", "Wellness Services"]
    },
    {
      title: "Accounting Email List",
      description: "Target accounting and financial professionals",
      count: "344K+",
      href: "/accounting-industry-email-list",
      icon: <Building className="w-8 h-8 text-indigo-500" />,
      segments: ["Public Accounting", "Corporate Accounting", "Tax Services", "Financial Consulting"]
    },
    {
      title: "Beauty Industry Email List",
      description: "Connect with beauty and cosmetics professionals",
      count: "291K+",
      href: "/beauty-industry-email-list",
      icon: <Target className="w-8 h-8 text-pink-500" />,
      segments: ["Cosmetics", "Skincare", "Salons & Spas", "Beauty Retail"]
    },
    {
      title: "Call Center Email List",
      description: "Target customer service and call center professionals",
      count: "3.7K+",
      href: "/call-center-industry-email-list",
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      segments: ["Customer Service", "Technical Support", "Sales Centers", "BPO Services"]
    },
    {
      title: "Logistics Email List",
      description: "Connect with logistics and supply chain professionals",
      count: "1.53M+",
      href: "/logistics-industry-email-list",
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      segments: ["Transportation", "Warehousing", "Supply Chain", "E-commerce Logistics"]
    },
    {
      title: "Wholesale Email List",
      description: "Target wholesale distribution professionals",
      count: "791K+",
      href: "/wholesale-industry-email-list",
      icon: <Building className="w-8 h-8 text-gray-600" />,
      segments: ["Product Distribution", "B2B Trading", "Wholesale Technology", "International Trade"]
    },
    {
      title: "Warehouse Email List",
      description: "Connect with warehouse and distribution professionals",
      count: "46K+",
      href: "/warehouse-industry-email-list",
      icon: <Factory className="w-8 h-8 text-brown-600" />,
      segments: ["Warehouse Operations", "Distribution Centers", "Material Handling", "Warehouse Technology"]
    },
    {
      title: "Luxury Goods Email List",
      description: "Target luxury goods and premium brand professionals",
      count: "112K+",
      href: "/luxury-goods-industry-email-list",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      segments: ["High-End Fashion", "Luxury Jewelry", "Luxury Automotive", "Premium Services"]
    },
    {
      title: "Printing Industry Email List",
      description: "Connect with printing and publishing professionals",
      count: "132K+",
      href: "/printing-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Commercial Printing", "Packaging & Labels", "Publishing", "Print Technology"]
    },
    {
      title: "Automotive Industry",
      description: "Access automotive manufacturers, dealers, and suppliers",
      count: "1.89M+",
      href: "/automotive-industry-email-list",
      icon: <Building className="w-8 h-8 text-red-600" />,
      segments: ["Manufacturing", "Dealerships", "Parts & Suppliers", "Service Centers"]
    },
    {
      title: "Construction Industry",
      description: "Connect with construction professionals and contractors",
      count: "2.14M+",
      href: "/construction-industry-email-list",
      icon: <Building className="w-8 h-8 text-orange-600" />,
      segments: ["General Contractors", "Specialty Contractors", "Architects", "Engineers"]
    },
    {
      title: "Energy Industry",
      description: "Reach energy sector professionals and executives",
      count: "1.76M+",
      href: "/energy-industry-email-list",
      icon: <Building className="w-8 h-8 text-yellow-600" />,
      segments: ["Oil & Gas", "Renewable Energy", "Utilities", "Energy Services"]
    },
    {
      title: "Transportation Industry",
      description: "Target transportation and logistics professionals",
      count: "1.67M+",
      href: "/transportation-industry-email-list",
      icon: <Building className="w-8 h-8 text-indigo-600" />,
      segments: ["Logistics", "Freight", "Public Transport", "Aviation"]
    },
    {
      title: "Insurance Industry",
      description: "Access insurance professionals and agencies",
      count: "1.85M+",
      href: "/insurance-industry-email-list",
      icon: <Building className="w-8 h-8 text-teal-600" />,
      segments: ["Life Insurance", "Property & Casualty", "Health Insurance", "Reinsurance"]
    },
    {
      title: "Banking Industry",
      description: "Connect with banking executives and financial professionals",
      count: "1.94M+",
      href: "/banking-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Commercial Banking", "Retail Banking", "Investment Banking", "Credit Unions"]
    },
    {
      title: "Telecommunications",
      description: "Reach telecom engineers and infrastructure specialists",
      count: "1.78M+",
      href: "/telecommunications-industry-email-list",
      icon: <Building className="w-8 h-8 text-purple-600" />,
      segments: ["Wireless Networks", "Broadband", "Enterprise Solutions", "Equipment Vendors"]
    },
    {
      title: "Aerospace Industry",
      description: "Connect with aerospace engineers and aviation professionals",
      count: "1.62M+",
      href: "/aerospace-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Commercial Aviation", "Defense & Military", "Space & Satellites", "Aircraft Manufacturing"]
    },
    {
      title: "Pharmaceutical Industry",
      description: "Access pharmaceutical research and biotech professionals",
      count: "2.17M+",
      href: "/pharmaceutical-industry-email-list",
      icon: <Building className="w-8 h-8 text-green-600" />,
      segments: ["Research & Development", "Manufacturing", "Commercial & Marketing", "Regulatory Affairs"]
    },
    {
      title: "Agriculture Industry",
      description: "Target farmers and agricultural technology specialists",
      count: "1.81M+",
      href: "/agriculture-industry-email-list",
      icon: <Building className="w-8 h-8 text-green-600" />,
      segments: ["Crop Production", "Livestock & Dairy", "Agricultural Technology", "Agribusiness"]
    },
    {
      title: "Mining Industry",
      description: "Connect with mining engineers and geological specialists",
      count: "1.63M+",
      href: "/mining-industry-email-list",
      icon: <Building className="w-8 h-8 text-stone-600" />,
      segments: ["Coal Mining", "Metal Mining", "Stone & Quarrying", "Mining Technology"]
    },
    {
      title: "Logistics Industry",
      description: "Access supply chain directors and warehouse managers",
      count: "2.27M+",
      href: "/logistics-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Freight & Shipping", "Warehousing", "Supply Chain", "Last Mile Delivery"]
    },
    {
      title: "Chemical Industry",
      description: "Reach chemical engineers and process specialists",
      count: "2.14M+",
      href: "/chemical-industry-email-list",
      icon: <Building className="w-8 h-8 text-purple-600" />,
      segments: ["Petrochemicals", "Specialty Chemicals", "Industrial Chemicals", "Agricultural Chemicals"]
    },
    {
      title: "Media & Entertainment",
      description: "Connect with content producers and creative directors",
      count: "1.92M+",
      href: "/media-entertainment-industry-email-list",
      icon: <Building className="w-8 h-8 text-red-600" />,
      segments: ["Film & Television", "Digital Media", "Gaming & Interactive", "Music & Audio"]
    },
    {
      title: "Food & Beverage",
      description: "Target food production managers and restaurant executives",
      count: "2.23M+",
      href: "/food-beverage-industry-email-list",
      icon: <Building className="w-8 h-8 text-orange-600" />,
      segments: ["Food Production", "Restaurant Operations", "Beverage Manufacturing", "Food Safety"]
    },
    {
      title: "Textile & Apparel",
      description: "Access fashion designers and production managers",
      count: "2.07M+",
      href: "/textile-apparel-industry-email-list",
      icon: <Building className="w-8 h-8 text-pink-600" />,
      segments: ["Fashion Design", "Textile Manufacturing", "Retail Merchandising", "Sustainable Fashion"]
    },
    {
      title: "Cybersecurity",
      description: "Connect with CISOs and security analysts",
      count: "1.70M+",
      href: "/cybersecurity-industry-email-list",
      icon: <Building className="w-8 h-8 text-red-600" />,
      segments: ["Enterprise Security", "Threat Analysis", "Compliance", "Security Operations"]
    },
    {
      title: "Furniture Industry",
      description: "Reach furniture designers and retail buyers",
      count: "1.64M+",
      href: "/furniture-industry-email-list",
      icon: <Building className="w-8 h-8 text-amber-600" />,
      segments: ["Furniture Design", "Manufacturing", "Retail Sales", "Interior Design"]
    },
    {
      title: "Sports & Recreation",
      description: "Target athletic directors and fitness managers",
      count: "1.74M+",
      href: "/sports-recreation-industry-email-list",
      icon: <Building className="w-8 h-8 text-green-600" />,
      segments: ["Athletic Programs", "Fitness Centers", "Sports Equipment", "Event Management"]
    },
    {
      title: "Legal Services",
      description: "Access attorneys and legal operations directors",
      count: "1.82M+",
      href: "/legal-services-industry-email-list",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      segments: ["Law Firms", "Corporate Legal", "Litigation", "Legal Technology"]
    },
    {
      title: "Consulting Services",
      description: "Connect with management consultants and strategy directors",
      count: "2.03M+",
      href: "/consulting-services-industry-email-list",
      icon: <Building className="w-8 h-8 text-indigo-600" />,
      segments: ["Management Consulting", "IT Consulting", "Strategy Planning", "Digital Transformation"]
    },
    {
      title: "Hospitality & Tourism",
      description: "Access hotel managers and travel industry professionals",
      count: "1.89M+",
      href: "/hospitality-tourism-industry-email-list",
      icon: <Building className="w-8 h-8 text-cyan-600" />,
      segments: ["Hotel Management", "Travel Services", "Event Planning", "Guest Services"]
    },
    {
      title: "Real Estate",
      description: "Connect with agents, brokers, and property managers",
      count: "3.47M+",
      href: "/real-estate-industry-email-list",
      icon: <Building className="w-8 h-8 text-emerald-600" />,
      segments: ["Residential Sales", "Commercial Real Estate", "Property Management", "Real Estate Development"]
    },
    {
      title: "Retail Industry",
      description: "Target store managers and merchandise buyers",
      count: "2.61M+",
      href: "/retail-industry-email-list",
      icon: <Building className="w-8 h-8 text-rose-600" />,
      segments: ["Store Operations", "E-commerce", "Merchandise Buying", "Customer Experience"]
    },
    {
      title: "Education",
      description: "Reach school principals and university administrators",
      count: "3.87M+",
      href: "/education-industry-email-list",
      icon: <Building className="w-8 h-8 text-violet-600" />,
      segments: ["K-12 Education", "Higher Education", "EdTech", "Special Education"]
    },
    {
      title: "Government & Public Sector",
      description: "Connect with city managers and department directors",
      count: "1.84M+",
      href: "/government-public-sector-email-list",
      icon: <Building className="w-8 h-8 text-slate-600" />,
      segments: ["Municipal Government", "Public Works", "Emergency Management", "Public Administration"]
    },
    {
      title: "Nonprofit Sector",
      description: "Access executive directors and development professionals",
      count: "1.89M+",
      href: "/nonprofit-industry-email-list",
      icon: <Building className="w-8 h-8 text-red-600" />,
      segments: ["Nonprofit Management", "Fundraising", "Social Services", "Grant Writing"]
    },
    {
      title: "Utilities",
      description: "Target utility directors and power plant managers",
      count: "1.64M+",
      href: "/utilities-industry-email-list",
      icon: <Building className="w-8 h-8 text-yellow-600" />,
      segments: ["Electric Utilities", "Water & Wastewater", "Natural Gas", "Renewable Energy"]
    },
    {
      title: "Environmental Services",
      description: "Reach environmental engineers and sustainability directors",
      count: "1.64M+",
      href: "/environmental-services-industry-email-list",
      icon: <Building className="w-8 h-8 text-green-600" />,
      segments: ["Environmental Engineering", "Waste Management", "Sustainability", "Remediation"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Industry Solutions - Sector-Specific Email Lists & Business Contacts | ELP Data"
        description="Target specific industries with our comprehensive sector-focused email lists. Access business contacts across real estate, oil & gas, hospitality, retail, utilities and more."
        keywords="industry email lists, sector targeting, business contacts by industry, vertical marketing"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-purple-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Target specific industry verticals with precision using our comprehensive sector-focused business databases. 
              Connect with decision-makers across all major industries and market segments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                <Building className="w-5 h-5 mr-2" />
                Explore Industries
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3 border-purple-600 text-purple-600 hover:bg-purple-50">
                <Target className="w-5 h-5 mr-2" />
                Custom Industry Lists
              </Button>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">36.75M+</div>
                <div className="text-gray-600">Industry Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">220+</div>
                <div className="text-gray-600">Industry Segments</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">60+</div>
                <div className="text-gray-600">Major Industries</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">98.9%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Major Industry Email Lists</h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{industry.title}</CardTitle>
                    <div className="text-2xl font-bold text-purple-600">{industry.count}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Key Segments:</div>
                      <div className="flex flex-wrap gap-1">
                        {industry.segments.slice(0, 2).map((segment, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {segment}
                          </span>
                        ))}
                        {industry.segments.length > 2 && (
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                            +{industry.segments.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={industry.href}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Industry Lists</h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {additionalIndustries.map((industry, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{industry.title}</CardTitle>
                    <div className="text-2xl font-bold text-purple-600">{industry.count}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Key Segments:</div>
                      <div className="flex flex-wrap gap-1">
                        {industry.segments.slice(0, 2).map((segment, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {segment}
                          </span>
                        ))}
                        {industry.segments.length > 2 && (
                          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                            +{industry.segments.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={industry.href}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                <Building className="w-5 h-5 mr-2" />
                Request Custom Industry List
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Target by Industry?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Targeting</h3>
                <p className="text-gray-600">Focus your marketing efforts on specific industry verticals that are most likely to need your products or services.</p>
              </div>
              <div className="p-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Higher Conversion</h3>
                <p className="text-gray-600">Industry-specific messaging and solutions lead to better response rates and higher conversion.</p>
              </div>
              <div className="p-6">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Expertise</h3>
                <p className="text-gray-600">Develop deep understanding of specific industries and become a trusted solution provider.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}