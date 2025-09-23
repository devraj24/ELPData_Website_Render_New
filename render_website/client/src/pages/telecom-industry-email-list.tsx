import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Users, Star, Radio } from "lucide-react";

export default function TelecomIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Mobile Networks & Wireless",
      description: "Telecom Email List implementation for mobile networks & wireless and connectivity excellence",
      categories: ["Mobile Networks", "5G Technology", "Wireless Infrastructure", "Network Operations"],
      targetIndustries: [
        "Mobile Network Operators",
        "Wireless Service Providers", 
        "Infrastructure Companies",
        "Tower Companies"
      ],
      responsibleTitles: [
        "Network Operations Manager",
        "VP of Engineering",
        "RF Engineer",
        "Network Planning Director"
      ],
      challenges: [
        "5G network deployment and optimization",
        "Network capacity and coverage expansion",
        "Spectrum management and efficiency",
        "Infrastructure sharing and partnerships",
        "Quality of service and customer satisfaction",
        "Security and network resilience",
        "IoT and edge computing integration",
        "Regulatory compliance and licensing"
      ],
      icon: <Radio className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Internet Service Providers",
      description: "Telecom Email List implementation for internet service providers and broadband excellence", 
      categories: ["Broadband Services", "Fiber Networks", "Cable Internet", "Satellite Internet"],
      targetIndustries: [
        "Internet Service Providers",
        "Cable Companies",
        "Fiber Network Operators", 
        "Satellite Providers"
      ],
      responsibleTitles: [
        "VP of Operations",
        "Network Engineer",
        "Service Delivery Manager",
        "Infrastructure Director"
      ],
      challenges: [
        "Fiber network expansion and deployment",
        "Bandwidth management and optimization",
        "Customer acquisition and retention",
        "Service quality and reliability",
        "Network security and cyber threats",
        "Regulatory compliance and net neutrality",
        "Competition and market differentiation",
        "Technology upgrades and modernization"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Satellite Communications",
      description: "Telecom Email List implementation for satellite communications and global connectivity excellence",
      categories: ["Satellite Networks", "Global Communications", "Maritime Communications", "Remote Connectivity"],
      targetIndustries: [
        "Satellite Operators",
        "Satellite Service Providers",
        "Ground Station Operators", 
        "VSAT Providers"
      ],
      responsibleTitles: [
        "Satellite Operations Manager",
        "RF Systems Engineer",
        "Mission Control Director",
        "Ground Systems Manager"
      ],
      challenges: [
        "Satellite constellation management",
        "Ground station optimization",
        "Signal interference and mitigation",
        "Orbital debris and space weather",
        "International regulatory compliance",
        "Launch and deployment costs",
        "Technology innovation and competition",
        "Coverage area optimization"
      ],
      icon: <Shield className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Network Infrastructure",
      description: "Telecom Email List implementation for network infrastructure and backbone excellence",
      categories: ["Core Networks", "Data Centers", "Transmission Systems", "Network Equipment"],
      targetIndustries: [
        "Network Equipment Vendors",
        "Infrastructure Providers",
        "Data Center Operators", 
        "Systems Integrators"
      ],
      responsibleTitles: [
        "Infrastructure Architect",
        "Network Solutions Manager",
        "Technical Director",
        "Product Manager"
      ],
      challenges: [
        "Network scalability and performance",
        "Equipment lifecycle management",
        "Technology convergence and standards",
        "Cost optimization and efficiency",
        "Security and network hardening",
        "Vendor management and sourcing",
        "Innovation and R&D investment",
        "Skills gap and workforce development"
      ],
      icon: <Building className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Telecommunications Software",
      description: "Telecom Email List implementation for telecommunications software and platform excellence",
      categories: ["BSS/OSS Systems", "Network Management", "Customer Experience", "Analytics Platforms"],
      targetIndustries: [
        "Telecom Software Vendors",
        "Network Management",
        "Customer Experience Platforms", 
        "Analytics Solutions"
      ],
      responsibleTitles: [
        "VP of Product Management",
        "Software Engineering Director",
        "Solutions Architect",
        "Technical Product Manager"
      ],
      challenges: [
        "Legacy system modernization",
        "Cloud-native architecture adoption",
        "Real-time network analytics",
        "Customer experience automation",
        "Integration and interoperability",
        "Scalability and performance optimization",
        "Security and compliance requirements",
        "Agile development and DevOps"
      ],
      icon: <TrendingUp className="w-8 h-8 text-red-600" />
    },
    {
      title: "Enterprise Communications",
      description: "Telecom Email List implementation for enterprise communications and business excellence",
      categories: ["Unified Communications", "VoIP Services", "Collaboration Platforms", "Contact Centers"],
      targetIndustries: [
        "Unified Communications",
        "VoIP Service Providers",
        "Collaboration Platforms", 
        "Contact Center Solutions"
      ],
      responsibleTitles: [
        "VP of Enterprise Sales",
        "Solutions Engineer",
        "Channel Partner Manager",
        "Customer Success Manager"
      ],
      challenges: [
        "Digital transformation and cloud adoption",
        "Remote work and collaboration solutions",
        "Integration with existing systems",
        "Security and compliance requirements",
        "User adoption and training",
        "Scalability and flexibility",
        "Cost optimization and ROI",
        "Competition and market differentiation"
      ],
      icon: <Users className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Telecom Industry Email List - Telecommunications Professionals Database | ELP Data"
        description="Access our comprehensive telecom email list with 274K+ verified telecommunications professionals. Target mobile networks, ISPs, satellite communications, and telecom software companies."
        keywords="telecom email list, telecommunications database, mobile network contacts, ISP professionals"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Telecom Industry <span className="text-blue-600">Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with telecommunications professionals across mobile networks, internet service providers, satellite communications, and telecom software. 
                  Access our comprehensive database of telecom leaders implementing communication solutions for global connectivity.
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
                    <span>274K+ Telecom Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>All Telecom Sectors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Telecom Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Telecom Sector" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Telecom Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98.8%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">274K+</div>
                <div className="text-gray-600">Telecom Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600">Telecom Sectors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">60+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">98.8%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Telecom Segments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Radio className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Networks</h3>
                <p className="text-gray-600 text-sm">Wireless carriers and mobile infrastructure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Internet Providers</h3>
                <p className="text-gray-600 text-sm">Broadband and fiber internet services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Satellite Communications</h3>
                <p className="text-gray-600 text-sm">Global satellite networks and services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Network Infrastructure</h3>
                <p className="text-gray-600 text-sm">Backbone networks and equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Telecom Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing telecom solutions across various communication sectors and use cases
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

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                        {solution.challenges.slice(0, 4).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Telecom Professionals?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 274K+ telecom contacts across all communication sectors
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