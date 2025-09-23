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

export default function IBM3090UsersList() {
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

  const ibm3090Segments = [
    { name: "Legacy Banking Systems", count: "1,420+", description: "Financial institutions maintaining IBM 3090 for legacy banking applications" },
    { name: "Government Agencies", count: "980+", description: "Government organizations running mission-critical systems on IBM 3090" },
    { name: "Insurance Companies", count: "765+", description: "Insurance companies with IBM 3090 for policy management systems" },
    { name: "Manufacturing", count: "369+", description: "Manufacturing companies using IBM 3090 for enterprise resource planning" }
  ];

  const keyApplications = [
    "Legacy Transaction Processing",
    "MVS Operating System", 
    "VSAM File Management",
    "COBOL Applications",
    "JCL Batch Processing",
    "IMS Database Systems",
    "CICS Online Processing",
    "Enterprise Reporting"
  ];

  const purchaseDecisions = [
    "Legacy System Modernization Services",
    "IBM 3090 Maintenance and Support", 
    "Migration and Upgrade Planning",
    "Legacy Application Development Tools",
    "System Performance Optimization",
    "Data Migration and Conversion Services",
    "Mainframe Skills Training",
    "Technical Documentation and Consulting"
  ];

  const sampleData = [
    {
      name: "Robert Anderson",
      title: "Legacy Systems Manager",
      company: "Heritage Financial Bank",
      location: "Pittsburgh, PA",
      employees: "8,500+",
      industry: "Banking"
    },
    {
      name: "Linda Thompson",
      title: "Mainframe Operations Director",
      company: "State Government Services",
      location: "Albany, NY",
      employees: "15,000+",
      industry: "Government"
    },
    {
      name: "Michael Davis",
      title: "IT Infrastructure Manager",
      company: "Classic Insurance Group",
      location: "Hartford, CT",
      employees: "6,200+", 
      industry: "Insurance"
    }
  ];

  return (
    <>
      <SEOHead 
        title="IBM 3090 Users List - 3,534 Companies | ELP Data"
        description="Connect with 3,534 verified IBM 3090 users. Target organizations maintaining IBM 3090 mainframes for legacy systems in banking, government, insurance, and manufacturing."
        keywords="IBM 3090 users, IBM 3090 customers, legacy mainframe users, MVS systems, mainframe modernization"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-8 h-8 text-indigo-600" />
                  <Badge className="bg-indigo-100 text-indigo-800">Legacy Mainframes</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IBM 3090 Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 3,534 organizations using IBM 3090 mainframes for legacy system operations. Target companies 
                  in banking, government, insurance, and manufacturing that maintain IBM 3090 technology for mission-critical 
                  legacy applications and are evaluating modernization strategies.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our IBM 3090 users database includes established enterprises, government agencies, and financial institutions 
                  that depend on MVS systems and are prime candidates for modernization services and legacy system support.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">3,534</div>
                    <div className="text-gray-600">IBM 3090 Users</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get IBM 3090 Users List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom IBM 3090 List</h3>
                <h4 className="text-xl font-semibold text-indigo-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (modernization services, legacy support, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* IBM 3090 Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM 3090 User Segments</h2>
              <p className="text-xl text-gray-600">Target organizations by industry and legacy system requirements</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {ibm3090Segments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-indigo-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM 3090 Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyApplications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy System Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legacy System Maintenance</h3>
                      <p className="text-gray-600">Ongoing support and maintenance for mission-critical legacy applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Modernization Planning</h3>
                      <p className="text-gray-600">Strategic planning for system upgrades and technology modernization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Migration & Integration</h3>
                      <p className="text-gray-600">Legacy data migration and integration with modern systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Skills Development</h3>
                      <p className="text-gray-600">Training and knowledge transfer for legacy system expertise</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">IBM 3090 Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample IBM 3090 Users Records</h2>
              <p className="text-xl text-gray-600">Preview of available IBM 3090 user contact information</p>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">{user.company}</td>
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
        <section className="py-16 bg-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with IBM 3090 Users</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Access 3,534 verified IBM 3090 users for legacy modernization solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                Get Custom IBM 3090 Users List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}