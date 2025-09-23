import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Globe, TrendingUp, Download, Star, CheckCircle, ArrowRight, BarChart3, MapPin, Phone, Mail, User, Building, Code, Server, Shield, Zap } from "lucide-react";

export default function TechnologyIndustryEmailList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const implementationTypes = [
    {
      title: "Enterprise Implementation",
      description: "Technology implementation for enterprise deployment and organizational efficiency",
      features: ["Enterprise Deployment", "System Integration", "User Training", "Support Services"],
      industries: ["Large Enterprise Organizations", "Multi-national Corporations", "Fortune 500 Companies", "Global Technology Leaders"],
      roles: ["IT Director", "Systems Administrator", "Enterprise Architect", "Technology Manager"],
      challenges: ["Large-scale deployment and configuration challenges", "Integration with existing enterprise infrastructure", "User adoption and training across multiple locations", "Performance optimization for high-volume usage"]
    },
    {
      title: "Business Operations",
      description: "Technology implementation for business operations and organizational efficiency",
      features: ["Process Optimization", "Workflow Management", "Business Intelligence", "Analytics"],
      industries: ["Manufacturing & Production", "Service Industries", "Consulting & Professional Services", "Retail & Distribution"],
      roles: ["Operations Manager", "Business Analyst", "Process Improvement Specialist", "Department Head"],
      challenges: ["Business process optimization and automation", "Data quality and consistency management", "Reporting and analytics requirements", "Cross-department collaboration and workflows"]
    },
    {
      title: "Technical Administration",
      description: "Technology implementation for technical administration and organizational efficiency",
      features: ["System Administration", "Configuration Management", "Performance Tuning", "Maintenance"],
      industries: ["Technology Service Providers", "Managed Service Companies", "IT Consulting Firms", "System Integrators"],
      roles: ["System Administrator", "Technical Lead", "DevOps Engineer", "Infrastructure Specialist"],
      challenges: ["System performance monitoring and optimization", "Backup and disaster recovery planning", "Security patch management and updates", "User access control and permissions"]
    }
  ];

  const topCountries = [
    "USA", "United Kingdom", "Canada", "Germany", 
    "Australia", "France", "Netherlands", "India"
  ];

  return (
    <>
      <SEOHead
        title="Technology Industry Email List - 289.4K+ Contacts | ELP Data"
        description="Connect with technology professionals across software, hardware, and IT services companies. Target IT decision-makers and technology leaders."
        keywords="technology industry email list, IT professionals, software companies, hardware companies, tech decision makers"
      />
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Industry Email List
                <span className="block text-3xl text-blue-100 mt-2">289.4K+ Technology Professionals</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect with technology professionals across software, hardware, and IT services companies. Target IT decision-makers implementing technology solutions across enterprise, business operations, and technical administration.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white mb-2">289.4K</div>
                  <div className="text-blue-100">Technology Professionals</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white mb-2">45,670</div>
                  <div className="text-blue-100">Technology Companies</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 mr-4">
                <Download className="w-5 h-5 mr-2" />
                Get Technology List
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                View Sample Data
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">We'll Get Back To You Shortly!</h3>
              <h4 className="text-xl font-semibold text-blue-600 mb-6">Get a Quote!</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  name="requirements"
                  placeholder="Describe your technology targeting requirements..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={3}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Technology Industry List
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Implementation Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Implementation Solutions</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {implementationTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <Code className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Target Industries:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.industries.slice(0, 3).map((industry, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View {type.title} List
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Industry Segments</h2>
            
            <Tabs defaultValue="software" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="services">IT Services</TabsTrigger>
                <TabsTrigger value="emerging">Emerging Tech</TabsTrigger>
              </TabsList>
              
              <TabsContent value="software" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Code className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">Enterprise Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">ERP, CRM, and business management software companies</p>
                      <div className="text-2xl font-bold text-blue-600">78.5K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Shield className="w-8 h-8 text-green-600 mb-2" />
                      <CardTitle className="text-lg">Security Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Cybersecurity, antivirus, and data protection solutions</p>
                      <div className="text-2xl font-bold text-green-600">45.2K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Analytics & BI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Business intelligence and data analytics platforms</p>
                      <div className="text-2xl font-bold text-purple-600">34.7K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="hardware" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Server className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">Enterprise Hardware</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Servers, storage, and networking equipment</p>
                      <div className="text-2xl font-bold text-blue-600">56.3K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Zap className="w-8 h-8 text-orange-600 mb-2" />
                      <CardTitle className="text-lg">Consumer Electronics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Mobile devices, computers, and consumer tech</p>
                      <div className="text-2xl font-bold text-orange-600">42.1K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Building2 className="w-8 h-8 text-gray-600 mb-2" />
                      <CardTitle className="text-lg">Infrastructure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Data centers, cloud infrastructure, and hosting</p>
                      <div className="text-2xl font-bold text-gray-600">38.9K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Users className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">IT Consulting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Technology consulting and implementation services</p>
                      <div className="text-2xl font-bold text-blue-600">67.4K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Globe className="w-8 h-8 text-green-600 mb-2" />
                      <CardTitle className="text-lg">Managed Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Outsourced IT management and support services</p>
                      <div className="text-2xl font-bold text-green-600">52.8K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Digital Transformation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Digital strategy and transformation consulting</p>
                      <div className="text-2xl font-bold text-purple-600">45.6K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="emerging" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Star className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Artificial intelligence and ML platform companies</p>
                      <div className="text-2xl font-bold text-blue-600">28.3K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Globe className="w-8 h-8 text-green-600 mb-2" />
                      <CardTitle className="text-lg">IoT & Edge Computing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Internet of Things and edge computing solutions</p>
                      <div className="text-2xl font-bold text-green-600">19.7K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <Zap className="w-8 h-8 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Blockchain & Web3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">Blockchain technology and decentralized platforms</p>
                      <div className="text-2xl font-bold text-purple-600">15.2K+</div>
                      <p className="text-gray-500 text-xs">Professionals</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Global Technology Reach</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Technology Markets</h3>
                <div className="grid grid-cols-2 gap-4">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-medium text-gray-800">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Decision Makers</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Chief Technology Officers</span>
                    <Badge className="bg-blue-100 text-blue-800">87,200+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">IT Directors</span>
                    <Badge className="bg-green-100 text-green-800">76,500+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Software Engineers</span>
                    <Badge className="bg-purple-100 text-purple-800">65,300+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Systems Administrators</span>
                    <Badge className="bg-orange-100 text-orange-800">60,400+</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Connect with Technology Decision-Makers?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to 289.4K+ technology professionals across all industry segments. Perfect for technology vendors, consultants, and service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Technology List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Request Custom Segment
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}