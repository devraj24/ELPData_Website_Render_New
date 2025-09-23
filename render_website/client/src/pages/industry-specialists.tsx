import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, Zap, TrendingUp, Users, Award, Phone, Mail, Globe, Settings, Database, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function IndustrySpecialists() {
  const specialistCategories = [
    {
      title: "Healthcare Specialists",
      count: "1,245,789",
      description: "Medical professionals, healthcare administrators, and clinical specialists",
      avgSalary: "$85,000 - $350,000",
      icon: Shield,
      color: "bg-red-500",
      industries: ["Hospitals", "Clinics", "Pharma", "Medical Devices"]
    },
    {
      title: "Technology Specialists", 
      count: "987,654",
      description: "IT professionals, software engineers, and tech consultants",
      avgSalary: "$75,000 - $250,000",
      icon: Settings,
      color: "bg-blue-500",
      industries: ["Software", "Cloud", "Cybersecurity", "AI/ML"]
    },
    {
      title: "Financial Specialists",
      count: "756,432",
      description: "Financial analysts, investment professionals, and banking specialists",
      avgSalary: "$70,000 - $300,000",
      icon: TrendingUp,
      color: "bg-green-500",
      industries: ["Banking", "Investment", "Insurance", "FinTech"]
    },
    {
      title: "Manufacturing Specialists",
      count: "654,321",
      description: "Production managers, quality specialists, and industrial engineers",
      avgSalary: "$65,000 - $150,000",
      icon: Briefcase,
      color: "bg-orange-500",
      industries: ["Automotive", "Aerospace", "Electronics", "Chemicals"]
    },
    {
      title: "Marketing Specialists",
      count: "543,210",
      description: "Digital marketers, brand managers, and advertising professionals",
      avgSalary: "$50,000 - $180,000",
      icon: Target,
      color: "bg-purple-500",
      industries: ["Advertising", "Digital", "Brand", "Content"]
    },
    {
      title: "Energy Specialists",
      count: "432,109",
      description: "Oil & gas professionals, renewable energy experts, utilities specialists",
      avgSalary: "$80,000 - $200,000",
      icon: Zap,
      color: "bg-yellow-500",
      industries: ["Oil & Gas", "Renewable", "Utilities", "Nuclear"]
    }
  ];

  const expertiseAreas = [
    "Business Intelligence & Analytics",
    "Digital Transformation",
    "Regulatory Compliance",
    "Supply Chain Management",
    "Quality Assurance & Control",
    "Risk Management",
    "Process Optimization", 
    "Environmental Sustainability",
    "Data Science & AI",
    "Cybersecurity & Privacy",
    "Project Management",
    "Strategic Planning"
  ];

  const specialistDataPoints = [
    "Professional Email Address",
    "Direct Phone Number",
    "LinkedIn Profile",
    "Professional Certifications",
    "Years of Expertise",
    "Industry Focus Areas",
    "Company & Role Details", 
    "Education & Training",
    "Technology Proficiencies",
    "Project Portfolio",
    "Speaking & Publications",
    "Professional Associations"
  ];

  const industryApplications = [
    {
      title: "B2B Software Sales",
      description: "Target specialists with relevant technology needs",
      icon: Database,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Consulting Services",
      description: "Connect with industry experts for partnership opportunities",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Training & Certification",
      description: "Reach professionals seeking skill development",
      icon: Award,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Event Marketing",
      description: "Invite specialists to industry conferences and webinars",
      icon: Globe,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Industry Specialists Email List - 4,619,515+ Expert Professionals | ELP Data"
        description="Access 4,619,515+ verified industry specialist contacts across healthcare, technology, finance, manufacturing, marketing, energy, and specialized professional services."
        keywords="industry specialists email list, expert professionals, specialist database, professional consultants, industry experts"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry Specialists Email List
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                4,619,515+ Expert Professionals Across All Industries
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Subject Matter Experts
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Settings className="w-5 h-5 mr-2" />
                  Technical Specialists
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Certified Professionals
                </Badge>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Access Specialist Database
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">4.62M+</div>
                <div className="text-gray-600">Industry Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98.9%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Industry Segments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">85+</div>
                <div className="text-gray-600">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialist Categories */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Specialist Categories
              </h2>
              <p className="text-xl text-gray-600">
                Connect with experts across every major industry sector
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialistCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${category.color} text-white mr-4`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{category.title}</h3>
                        <p className="text-2xl font-bold text-purple-600">{category.count}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Avg. Salary:</span>
                        <span className="text-sm font-medium">{category.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      View Specialists
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Areas & Data Points */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Expertise Areas
                </h2>
                <div className="space-y-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Specialist Data Points
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {specialistDataPoints.map((point, index) => (
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

        {/* Industry Applications */}
        <div className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600">
                Perfect for targeting specialists across various use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryApplications.map((application, index) => (
                <div key={index} className="text-center">
                  <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${application.color}`}>
                    <application.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Specialist Database?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Verified Expertise</h3>
                <p className="text-gray-600">All specialists verified with professional certifications and proven track records</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
                <p className="text-gray-600">Database updated monthly with new specialists and contact information changes</p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
                <p className="text-gray-600">International coverage with specialists from major markets worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Industry Specialists Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Access 4,619,515+ verified industry specialists with comprehensive professional profiles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Get Specialist Database
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}