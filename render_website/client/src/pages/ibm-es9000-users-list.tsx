import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Server, Download, Building2, Users, TrendingUp, Shield } from "lucide-react";

export default function IBMES9000UsersList() {
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

  const es9000Segments = [
    { name: "Government Agencies", count: "285+", description: "Government organizations maintaining IBM ES/9000 for critical legacy systems" },
    { name: "Banking & Finance", count: "210+", description: "Financial institutions with IBM ES/9000 for specialized banking applications" },
    { name: "Manufacturing", count: "142+", description: "Manufacturing companies using IBM ES/9000 for production control systems" },
    { name: "Healthcare Systems", count: "72+", description: "Healthcare organizations with IBM ES/9000 for patient data management" }
  ];

  const keyApplications = [
    "Legacy Transaction Systems",
    "MVS/ESA Operating System", 
    "VSAM Data Management",
    "COBOL Legacy Applications",
    "IMS Database Processing",
    "CICS Transaction Processing",
    "Enterprise Batch Jobs",
    "Historical Data Archives"
  ];

  const purchaseDecisions = [
    "Legacy System Migration Services",
    "IBM ES/9000 End-of-Life Support", 
    "Data Extraction and Conversion",
    "System Modernization Consulting",
    "Legacy Application Re-engineering",
    "Mainframe Skills Training",
    "Archive and Backup Solutions",
    "Technical Documentation Services"
  ];

  const sampleData = [
    {
      name: "William Carter",
      title: "Legacy Systems Specialist",
      company: "Federal Operations Agency",
      location: "Washington, DC",
      employees: "22,000+",
      industry: "Government"
    },
    {
      name: "Nancy Williams",
      title: "IT Legacy Manager",
      company: "Regional Credit Union",
      location: "Richmond, VA",
      employees: "3,800+",
      industry: "Banking"
    },
    {
      name: "Thomas Brown",
      title: "Systems Administrator",
      company: "Industrial Manufacturing Inc",
      location: "Cleveland, OH",
      employees: "5,200+", 
      industry: "Manufacturing"
    }
  ];

  return (
    <>
      <SEOHead 
        title="IBM ES/9000 Users List - 709 Companies | ELP Data"
        description="Connect with 709 verified IBM ES/9000 users. Target organizations maintaining IBM ES/9000 mainframes for legacy applications in government, banking, manufacturing, and healthcare."
        keywords="IBM ES/9000 users, IBM ES9000 customers, legacy mainframe systems, MVS/ESA, mainframe migration"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-teal-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-8 h-8 text-teal-600" />
                  <Badge className="bg-teal-100 text-teal-800">Vintage Mainframes</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IBM ES/9000 Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 709 organizations using IBM ES/9000 mainframes for specialized legacy operations. Target companies 
                  in government, banking, manufacturing, and healthcare that maintain IBM ES/9000 technology for critical legacy 
                  systems and require modernization or end-of-life support services.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our IBM ES/9000 users database includes established organizations that depend on MVS/ESA systems and represent 
                  prime opportunities for legacy modernization, data migration, and specialized mainframe support services.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-teal-600 mb-2">709</div>
                    <div className="text-gray-600">IBM ES/9000 Users</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get IBM ES/9000 Users List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom ES/9000 List</h3>
                <h4 className="text-xl font-semibold text-teal-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (modernization services, end-of-life support, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ES/9000 Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM ES/9000 User Segments</h2>
              <p className="text-xl text-gray-600">Target organizations by industry and legacy system needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {es9000Segments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-teal-600">{segment.count}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{segment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Applications & Purchase Decisions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM ES/9000 Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyApplications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy System Modernization</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">End-of-Life Support</h3>
                      <p className="text-gray-600">Specialized support for aging IBM ES/9000 systems reaching end-of-life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">System Migration Planning</h3>
                      <p className="text-gray-600">Strategic planning for migrating off IBM ES/9000 to modern platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Preservation & Extraction</h3>
                      <p className="text-gray-600">Critical data extraction and preservation from legacy systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legacy Expertise Training</h3>
                      <p className="text-gray-600">Training and knowledge transfer for maintaining legacy systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">ES/9000 Modernization Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample IBM ES/9000 Users Records</h2>
              <p className="text-xl text-gray-600">Preview of available IBM ES/9000 user contact information</p>
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
                  {sampleData.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600">{user.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with IBM ES/9000 Users</h2>
            <p className="text-xl text-teal-100 mb-8">
              Access 709 verified IBM ES/9000 users for legacy modernization opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-teal-600">
                Get Custom IBM ES/9000 Users List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}