import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Target, Download, Building2, Users, TrendingUp, Cpu } from "lucide-react";

export default function CTOEmailList() {
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

  const ctoSegments = [
    { name: "Enterprise CTOs", count: "89,350+", description: "Technology leaders at Fortune 500 and large enterprise organizations" },
    { name: "SaaS Company CTOs", count: "67,200+", description: "Chief Technology Officers at software-as-a-service companies" },
    { name: "Fintech CTOs", count: "23,150+", description: "Technology executives in financial services and fintech startups" },
    { name: "Healthcare Tech CTOs", count: "18,800+", description: "Technology leaders in healthcare technology and digital health companies" },
    { name: "E-commerce CTOs", count: "31,400+", description: "CTOs driving digital commerce and online marketplace platforms" },
    { name: "Startup CTOs", count: "57,200+", description: "Technology co-founders and CTOs at early-stage and growth companies" }
  ];

  const keyResponsibilities = [
    "Technology Strategy & Vision",
    "Engineering Team Leadership", 
    "Software Architecture & Design",
    "Technology Infrastructure Planning",
    "Digital Transformation Initiatives",
    "Cybersecurity & Risk Management",
    "Innovation & R&D Leadership",
    "Vendor Management & Partnerships"
  ];

  const purchaseDecisions = [
    "Cloud Infrastructure and DevOps Tools",
    "Software Development Platforms and IDEs", 
    "Enterprise Software and SaaS Solutions",
    "Cybersecurity and Data Protection Tools",
    "Database and Analytics Platforms",
    "AI/ML and Data Science Platforms",
    "API Management and Integration Tools",
    "Project Management and Collaboration Software"
  ];

  const sampleData = [
    {
      name: "Alex Thompson",
      title: "Chief Technology Officer",
      company: "CloudScale Technologies",
      location: "San Francisco, CA",
      employees: "2,500+",
      industry: "SaaS"
    },
    {
      name: "Maria Rodriguez",
      title: "CTO & Co-Founder",
      company: "FinTech Innovations Inc",
      location: "New York, NY",
      employees: "850+",
      industry: "Financial Services"
    },
    {
      name: "David Kim",
      title: "Chief Technology Officer",
      company: "Healthcare Digital Solutions",
      location: "Boston, MA",
      employees: "1,200+", 
      industry: "Healthcare Technology"
    }
  ];

  return (
    <>
      <SEOHead 
        title="CTO Email List - 287,100+ Chief Technology Officers | ELP Data"
        description="Connect with 287,100+ verified CTO email addresses. Target Chief Technology Officers from enterprise companies, SaaS platforms, fintech, and emerging technology companies."
        keywords="CTO email list, Chief Technology Officer database, technology executives, tech leaders, CTO contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">C-Level Executives</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  CTO Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 287,100+ Chief Technology Officers leading digital transformation across enterprise companies, 
                  SaaS platforms, fintech organizations, and emerging technology companies. Target the technology decision-makers 
                  driving innovation and infrastructure investments.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our CTO database includes technology executives from Fortune 500 enterprises, high-growth SaaS companies, 
                  fintech startups, healthcare technology firms, and international technology organizations across all sectors.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-purple-600 mb-2">287,100+</div>
                    <div className="text-gray-600">CTO Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get CTO Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom CTO List</h3>
                <h4 className="text-xl font-semibold text-purple-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (technology focus, company size, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTO Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CTO Segments Available</h2>
              <p className="text-xl text-gray-600">Target Chief Technology Officers by company type and technology focus</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ctoSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-purple-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CTO Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Cpu className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Strategy & Innovation</h3>
                      <p className="text-gray-600">Technology roadmap planning, architecture decisions, and innovation initiatives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Infrastructure & Scalability</h3>
                      <p className="text-gray-600">Cloud architecture, system scalability, and infrastructure optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Engineering Leadership</h3>
                      <p className="text-gray-600">Team building, talent acquisition, and engineering culture development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Digital Transformation</h3>
                      <p className="text-gray-600">Technology modernization, process automation, and digital innovation</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">CTO Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample CTO Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Chief Technology Officer contact information</p>
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
                  {sampleData.map((cto, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cto.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cto.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600">{cto.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cto.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cto.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cto.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Chief Technology Officers</h2>
            <p className="text-xl text-purple-100 mb-8">
              Access 287,100+ verified CTO email addresses from companies driving technological innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Get Custom CTO List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}