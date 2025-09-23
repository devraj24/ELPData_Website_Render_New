import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, DollarSign, Users, Phone, Mail, Building, TrendingUp, Target, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function RealEstateAgentsEmailList() {
  const realEstateSpecialties = [
    {
      title: "Residential Real Estate Agents",
      count: "234,567",
      description: "Licensed agents specializing in home buying and selling",
      avgCommission: "$45,000 - $150,000",
      icon: Home,
      color: "bg-emerald-500"
    },
    {
      title: "Commercial Real Estate Brokers", 
      count: "87,234",
      description: "Specialists in office, retail, and industrial properties",
      avgCommission: "$85,000 - $500,000",
      icon: Building,
      color: "bg-blue-500"
    },
    {
      title: "Luxury Property Specialists",
      count: "45,678",
      description: "High-end residential and luxury market experts",
      avgCommission: "$125,000 - $750,000",
      icon: Star,
      color: "bg-purple-500"
    },
    {
      title: "Investment Property Brokers",
      count: "76,543",
      description: "Specialists in rental and investment properties",
      avgCommission: "$65,000 - $300,000",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      title: "Property Management Professionals",
      count: "54,321",
      description: "Property managers and real estate asset managers",
      avgCommission: "$55,000 - $125,000",
      icon: Users,
      color: "bg-teal-500"
    },
    {
      title: "Real Estate Appraisers",
      count: "32,109",
      description: "Certified property valuation professionals",
      avgCommission: "$50,000 - $95,000",
      icon: DollarSign,
      color: "bg-indigo-500"
    }
  ];

  const marketSegments = [
    "First-Time Home Buyers Market",
    "Luxury Real Estate Market",
    "Commercial Property Investment",
    "Rental Property Management",
    "Real Estate Development",
    "Property Flipping & Renovation"
  ];

  const dataPoints = [
    "Professional Email Address",
    "Direct Phone Number", 
    "LinkedIn Profile",
    "Real Estate License Number",
    "Brokerage Affiliation",
    "Years of Experience",
    "Specialty Areas",
    "Geographic Territory",
    "Average Transaction Volume",
    "Professional Certifications",
    "MLS Membership",
    "Client Testimonials Count"
  ];

  return (
    <>
      <SEOHead 
        title="Real Estate Agents Email List - 530,452+ Licensed Professionals | ELP Data"
        description="Access 530,452+ verified real estate agent contacts including residential agents, commercial brokers, luxury specialists, and property managers with license numbers and commission data."
        keywords="real estate agents email list, realtor database, real estate brokers, property agents, real estate professionals"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real Estate Agents Email List
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                530,452+ Licensed Real Estate Professionals
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Home className="w-5 h-5 mr-2" />
                  Licensed Agents
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Building className="w-5 h-5 mr-2" />
                  Commercial Brokers
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Star className="w-5 h-5 mr-2" />
                  Luxury Specialists
                </Badge>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Real Estate Database
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">530,452+</div>
                <div className="text-gray-600">Licensed Agents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">98.7%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">50</div>
                <div className="text-gray-600">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">12+</div>
                <div className="text-gray-600">Data Points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate Specialties */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Estate Professional Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive database across all real estate specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realEstateSpecialties.map((specialty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${specialty.color} text-white mr-4`}>
                        <specialty.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{specialty.title}</h3>
                        <p className="text-2xl font-bold text-orange-600">{specialty.count}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{specialty.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Avg. Commission:</span>
                        <span className="text-sm font-medium">{specialty.avgCommission}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Market Segments */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Market Segments Covered
                </h2>
                <div className="space-y-4">
                  {marketSegments.map((segment, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">{segment}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Data Points
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {dataPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Benefits */}
        <div className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Real Estate Database?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Licensed Verification</h3>
                <p className="text-gray-600">All agents verified with active real estate licenses and MLS memberships</p>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
                <p className="text-gray-600">Phone numbers, emails, and LinkedIn profiles for immediate outreach</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Geographic Coverage</h3>
                <p className="text-gray-600">Complete coverage across all 50 states with local market insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Real Estate Professionals Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Access 530,452+ verified real estate agents and brokers with comprehensive contact data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Get Database Access
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}