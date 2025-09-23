import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Hotel, Users } from "lucide-react";

export default function HotelIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Hotel Operations & Management",
      description: "Hotel Industry Email List implementation for hotel operations & management and hospitality excellence",
      categories: ["Property Management", "Guest Services", "Housekeeping", "Food & Beverage"],
      targetIndustries: [
        "Hotels & Resorts",
        "Boutique Hotels", 
        "Hotel Chains",
        "Extended Stay Hotels"
      ],
      responsibleTitles: [
        "Hotel Manager",
        "General Manager",
        "Operations Director",
        "Guest Services Manager"
      ],
      challenges: [
        "Guest experience and satisfaction management",
        "Revenue optimization and pricing strategies",
        "Staff training and customer service excellence",
        "Technology integration and digital transformation",
        "Online reputation and review management",
        "Seasonal demand fluctuations",
        "Health and safety compliance",
        "Competition and market positioning"
      ],
      icon: <Hotel className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Hospitality Technology & Systems",
      description: "Hotel Industry Email List implementation for hospitality technology & systems and digital excellence", 
      categories: ["PMS Systems", "Booking Platforms", "Mobile Apps", "Guest Technology"],
      targetIndustries: [
        "Hotel Technology Vendors",
        "PMS Providers",
        "Booking Systems", 
        "Guest Service Apps"
      ],
      responsibleTitles: [
        "IT Director",
        "Technology Manager",
        "Digital Innovation Lead",
        "Systems Administrator"
      ],
      challenges: [
        "Property management system integration",
        "Online booking and reservation systems",
        "Mobile app development and maintenance",
        "Guest Wi-Fi and connectivity solutions",
        "Data security and privacy protection",
        "System reliability and uptime",
        "Staff training on new technologies",
        "Cost management and ROI measurement"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Hotel Marketing & Revenue",
      description: "Hotel Industry Email List implementation for hotel marketing & revenue and business growth excellence",
      categories: ["Digital Marketing", "Revenue Management", "Sales", "Brand Management"],
      targetIndustries: [
        "Hotel Marketing Agencies",
        "Revenue Management Companies",
        "Hospitality Consultants", 
        "Tourism Boards"
      ],
      responsibleTitles: [
        "Marketing Director",
        "Revenue Manager",
        "Sales Manager",
        "Brand Manager"
      ],
      challenges: [
        "Online marketing and social media presence",
        "Revenue optimization and yield management",
        "Corporate sales and group bookings",
        "Brand consistency and reputation management",
        "Competitor analysis and market positioning",
        "Customer acquisition and retention",
        "Seasonal marketing campaigns",
        "ROI tracking and performance analytics"
      ],
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      title: "Guest Experience & Services",
      description: "Hotel Industry Email List implementation for guest experience & services and customer satisfaction excellence",
      categories: ["Concierge Services", "Spa & Wellness", "Dining", "Event Management"],
      targetIndustries: [
        "Luxury Hotels",
        "Spa & Wellness Centers",
        "Event Venues", 
        "Catering Services"
      ],
      responsibleTitles: [
        "Guest Experience Manager",
        "Concierge Manager",
        "Food & Beverage Director",
        "Event Coordinator"
      ],
      challenges: [
        "Personalized guest service delivery",
        "Staff training and service standards",
        "Guest feedback and complaint resolution",
        "Amenity management and maintenance",
        "Cultural sensitivity and diversity",
        "VIP and special request handling",
        "Service quality consistency",
        "Guest loyalty program management"
      ],
      icon: <Users className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Hotel Finance & Administration",
      description: "Hotel Industry Email List implementation for hotel finance & administration and operational efficiency excellence",
      categories: ["Financial Management", "Human Resources", "Procurement", "Compliance"],
      targetIndustries: [
        "Hotel Management Companies",
        "Hospitality Consulting",
        "Hotel Accounting Services", 
        "HR Solutions"
      ],
      responsibleTitles: [
        "Hotel Controller",
        "HR Director",
        "Procurement Manager",
        "Compliance Officer"
      ],
      challenges: [
        "Financial reporting and budget management",
        "Staff recruitment and retention",
        "Vendor management and procurement",
        "Regulatory compliance and licensing",
        "Cost control and expense management",
        "Performance metrics and KPI tracking",
        "Training program development",
        "Risk management and insurance"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Hotel Development & Investment",
      description: "Hotel Industry Email List implementation for hotel development & investment and property growth excellence",
      categories: ["Property Development", "Investment Management", "Asset Management", "Market Analysis"],
      targetIndustries: [
        "Hotel Developers",
        "Real Estate Investment",
        "Asset Management Firms", 
        "Hospitality Consultants"
      ],
      responsibleTitles: [
        "Development Director",
        "Asset Manager",
        "Investment Analyst",
        "Project Manager"
      ],
      challenges: [
        "Site selection and feasibility analysis",
        "Financing and investment strategies",
        "Construction and project management",
        "Market analysis and competitive positioning",
        "Brand affiliation and franchise agreements",
        "Regulatory approvals and permits",
        "Timeline management and budget control",
        "Return on investment optimization"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Hotel Industry Email List - Hospitality Professional Contacts Database | ELP Data"
        description="Access our comprehensive hotel industry email list with verified hospitality professional contacts across all hotel sectors. Target hotel managers, hospitality directors, and tourism industry decision-makers."
        keywords="hotel industry email list, hospitality contacts, hotel manager database, tourism professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Hotel <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  With 68% of the total hospitality market share coming from hotels, they are an essential part of the hospitality industry. 
                  Almost 320 million people, i.e., 3% of the global workforce, are working directly in the hotel sector.
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
                    <span>464,947 Hotel Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>10,933,577 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Hotel Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Hotel Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Hotel Type" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Hotel Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.2%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">465K+</div>
                <div className="text-gray-600">Hotel Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">10.9M+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-600">Hotel Categories</div>
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
              Hotel Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Hotel Industry solutions across various hospitality sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Hotel Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 465,000+ hotel contacts across all hospitality sectors
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