import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Bed, Calendar } from "lucide-react";

export default function HospitalityIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Hotel Operations & Management",
      description: "Hospitality Email List implementation for hotel operations & management and guest experience excellence",
      categories: ["Hotel Management", "Guest Services", "Property Operations", "Revenue Management"],
      targetIndustries: [
        "Luxury Hotels",
        "Business Hotels", 
        "Resort Properties",
        "Boutique Hotels"
      ],
      responsibleTitles: [
        "Hotel General Manager",
        "Operations Manager",
        "Guest Services Director",
        "Revenue Manager"
      ],
      challenges: [
        "Guest satisfaction and experience optimization",
        "Revenue management and pricing strategies",
        "Staff training and service quality standards",
        "Property maintenance and facility management",
        "Technology integration and PMS systems",
        "Online reputation and review management",
        "Seasonal demand fluctuations",
        "Health and safety compliance protocols"
      ],
      icon: <Bed className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Restaurant & Food Service",
      description: "Hospitality Email List implementation for restaurant & food service and culinary excellence", 
      categories: ["Restaurant Operations", "Culinary Management", "Menu Engineering", "Food Safety"],
      targetIndustries: [
        "Fine Dining",
        "Casual Dining",
        "Quick Service", 
        "Catering Services"
      ],
      responsibleTitles: [
        "Restaurant Manager",
        "Executive Chef",
        "Food & Beverage Director",
        "Culinary Manager"
      ],
      challenges: [
        "Menu development and cost control",
        "Kitchen operations and workflow optimization",
        "Food safety and health department compliance",
        "Staff scheduling and labor cost management",
        "Inventory management and waste reduction",
        "Customer service and dining experience",
        "Delivery and takeout integration",
        "Seasonal menu planning and sourcing"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Event Planning & Management",
      description: "Hospitality Email List implementation for event planning & management and memorable experiences excellence",
      categories: ["Event Coordination", "Wedding Planning", "Corporate Events", "Conference Management"],
      targetIndustries: [
        "Event Venues",
        "Wedding Planners",
        "Corporate Events", 
        "Convention Centers"
      ],
      responsibleTitles: [
        "Event Manager",
        "Wedding Coordinator",
        "Banquet Manager",
        "Conference Director"
      ],
      challenges: [
        "Event coordination and timeline management",
        "Vendor selection and relationship management",
        "Budget planning and cost control",
        "Guest experience and satisfaction",
        "Setup and breakdown logistics",
        "Audio-visual and technical requirements",
        "Catering coordination and dietary needs",
        "Weather contingency and backup planning"
      ],
      icon: <Calendar className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Travel & Tourism Services",
      description: "Hospitality Email List implementation for travel & tourism services and destination excellence",
      categories: ["Tour Operations", "Travel Planning", "Destination Management", "Adventure Tourism"],
      targetIndustries: [
        "Travel Agencies",
        "Tour Operators",
        "Destination Marketing", 
        "Adventure Companies"
      ],
      responsibleTitles: [
        "Tour Manager",
        "Travel Coordinator",
        "Destination Manager",
        "Tourism Director"
      ],
      challenges: [
        "Itinerary planning and logistics coordination",
        "Customer safety and risk management",
        "Local partnerships and vendor relationships",
        "Seasonal demand and capacity planning",
        "Cultural sensitivity and local regulations",
        "Transportation coordination and scheduling",
        "Emergency response and crisis management",
        "Sustainability and eco-tourism practices"
      ],
      icon: <MapPin className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Entertainment & Recreation",
      description: "Hospitality Email List implementation for entertainment & recreation and guest engagement excellence",
      categories: ["Entertainment Management", "Recreation Services", "Guest Activities", "Venue Operations"],
      targetIndustries: [
        "Theme Parks",
        "Casinos",
        "Entertainment Venues", 
        "Recreation Centers"
      ],
      responsibleTitles: [
        "Entertainment Manager",
        "Recreation Director",
        "Guest Activities Coordinator",
        "Venue Operations Manager"
      ],
      challenges: [
        "Guest entertainment and activity programming",
        "Safety protocols and risk management",
        "Equipment maintenance and facility upkeep",
        "Staff coordination and performance management",
        "Crowd control and capacity management",
        "Technology integration and digital experiences",
        "Seasonal programming and weather considerations",
        "Guest feedback and experience improvement"
      ],
      icon: <Shield className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Customer Experience & Technology",
      description: "Hospitality Email List implementation for customer experience & technology and digital innovation excellence",
      categories: ["Guest Technology", "CRM Systems", "Digital Marketing", "Mobile Solutions"],
      targetIndustries: [
        "Hotel Technology",
        "Restaurant Tech",
        "Booking Platforms", 
        "Hospitality Software"
      ],
      responsibleTitles: [
        "Customer Experience Manager",
        "Technology Director",
        "Digital Marketing Manager",
        "Guest Relations Manager"
      ],
      challenges: [
        "Technology adoption and guest preferences",
        "Mobile app development and functionality",
        "Online booking and reservation systems",
        "Social media engagement and digital presence",
        "Customer data management and privacy",
        "Loyalty program development and management",
        "Personalization and guest preferences",
        "Integration of various technology platforms"
      ],
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hospitality Industry Email List - Hotel & Restaurant Professional Contacts Database | ELP Data"
        description="Access our comprehensive hospitality industry email list with verified professional contacts across hotels, restaurants, and tourism sectors. Target hospitality decision-makers and industry leaders."
        keywords="hospitality email list, hotel contacts, restaurant industry database, tourism professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Hospitality <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Hospitality is an ever-disrupting industry that brims with opportunities ready to be utilized. 
                  Connect with key decision-makers and the biggest minds in the hospitality industry to build enterprising relationships.
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
                    <span>761,466 Hospitality Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>266,527 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Hospitality Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Industry Segment" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Hospitality Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">97.8%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">761K+</div>
                <div className="text-gray-600">Total Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">266K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
                <div className="text-gray-600">Hospitality Sectors</div>
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
              Hospitality Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Hospitality Industry solutions across various sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Hospitality Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 761,000+ hospitality contacts across all industry sectors
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