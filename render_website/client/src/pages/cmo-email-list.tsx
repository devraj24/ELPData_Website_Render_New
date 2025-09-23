import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Download, Building2, Users, TrendingUp, Target } from "lucide-react";

export default function CMOEmailList() {
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

  const cmoSegments = [
    { name: "B2B Marketing CMOs", count: "67,850+", description: "Marketing executives at B2B companies driving lead generation and pipeline growth" },
    { name: "E-commerce CMOs", count: "42,150+", description: "Digital marketing leaders at retail and e-commerce organizations" },
    { name: "Healthcare CMOs", count: "28,900+", description: "Marketing executives in healthcare, pharma, and medical device companies" },
    { name: "Technology CMOs", count: "35,200+", description: "Marketing leaders at SaaS, software, and technology companies" },
    { name: "Financial Services CMOs", count: "15,650+", description: "Marketing executives in banking, fintech, and financial services" },
    { name: "Enterprise CMOs", count: "4,550+", description: "Marketing leaders at Fortune 500 and large enterprise organizations" }
  ];

  const keyResponsibilities = [
    "Brand Strategy & Positioning",
    "Digital Marketing & Campaigns", 
    "Customer Acquisition & Growth",
    "Marketing Analytics & ROI",
    "Content Strategy & Management",
    "Marketing Technology Stack",
    "Customer Experience & Journey",
    "Lead Generation & Pipeline"
  ];

  const purchaseDecisions = [
    "Marketing Automation Platforms",
    "CRM and Customer Data Platforms", 
    "Digital Advertising and Media Buying",
    "Content Management and Creation Tools",
    "Analytics and Attribution Software",
    "Email Marketing and Communication Tools",
    "Social Media Management Platforms",
    "Marketing Intelligence and Research Services"
  ];

  const sampleData = [
    {
      name: "Jessica Williams",
      title: "Chief Marketing Officer",
      company: "TechGrowth Solutions",
      location: "San Francisco, CA",
      employees: "3,200+",
      industry: "B2B SaaS"
    },
    {
      name: "Michael Chen",
      title: "CMO & VP Marketing",
      company: "E-Commerce Plus Inc",
      location: "Austin, TX",
      employees: "1,800+",
      industry: "E-commerce"
    },
    {
      name: "Sarah Martinez",
      title: "Chief Marketing Officer",
      company: "Healthcare Innovations",
      location: "Boston, MA",
      employees: "2,500+", 
      industry: "Healthcare Technology"
    }
  ];

  return (
    <>
      <SEOHead 
        title="CMO Email List - 194,300+ Chief Marketing Officers | ELP Data"
        description="Connect with 194,300+ verified CMO email addresses. Target Chief Marketing Officers from B2B companies, e-commerce, healthcare, technology, and enterprise organizations."
        keywords="CMO email list, Chief Marketing Officer database, marketing executives, marketing leaders, CMO contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Mail className="w-8 h-8 text-orange-600" />
                  <Badge className="bg-orange-100 text-orange-800">C-Level Executives</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  CMO Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 194,300+ Chief Marketing Officers driving customer acquisition and brand growth across B2B companies, 
                  e-commerce platforms, healthcare organizations, and technology firms. Target the marketing decision-makers 
                  leading digital transformation and customer engagement initiatives.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our CMO database includes marketing executives from high-growth B2B companies, e-commerce leaders, 
                  healthcare organizations, SaaS platforms, and Fortune 500 enterprises across all major industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-orange-600 mb-2">194,300+</div>
                    <div className="text-gray-600">CMO Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get CMO Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom CMO List</h3>
                <h4 className="text-xl font-semibold text-orange-600 mb-6">Request Quote</h4>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="requirements"
                      placeholder="Specific requirements (marketing focus, company size, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CMO Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CMO Segments Available</h2>
              <p className="text-xl text-gray-600">Target Chief Marketing Officers by company type and marketing focus</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cmoSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-orange-600">{segment.count}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{segment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities & Purchase Decisions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CMO Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketing Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Customer Acquisition & Growth</h3>
                      <p className="text-gray-600">Lead generation, conversion optimization, and customer lifecycle management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Brand Strategy & Positioning</h3>
                      <p className="text-gray-600">Brand development, market positioning, and competitive differentiation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Digital Marketing Innovation</h3>
                      <p className="text-gray-600">Marketing technology adoption, automation, and digital channel optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Leadership & Development</h3>
                      <p className="text-gray-600">Marketing team building, skills development, and performance management</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">CMO Purchase Decisions</h3>
                  <ul className="space-y-2 text-gray-700">
                    {purchaseDecisions.map((decision, index) => (
                      <li key={index}>• {decision}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Data */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample CMO Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Chief Marketing Officer contact information</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((cmo, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cmo.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cmo.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600">{cmo.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cmo.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cmo.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cmo.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Chief Marketing Officers</h2>
            <p className="text-xl text-orange-100 mb-8">
              Access 194,300+ verified CMO email addresses from companies driving marketing innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                Get Custom CMO List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}