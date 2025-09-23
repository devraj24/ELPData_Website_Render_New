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

export default function IBM3084UsersList() {
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

  const ibm3084Segments = [
    { name: "Government Agencies", count: "235+", description: "Government organizations maintaining IBM 3084 for specialized legacy operations" },
    { name: "Banking & Finance", count: "168+", description: "Financial institutions with IBM 3084 for historical banking systems" },
    { name: "Manufacturing", count: "124+", description: "Manufacturing companies using IBM 3084 for legacy production systems" },
    { name: "Insurance Companies", count: "62+", description: "Insurance organizations with IBM 3084 for legacy policy systems" }
  ];

  const keyApplications = [
    "Legacy Batch Processing",
    "MVS Legacy Systems", 
    "Historical Data Processing",
    "COBOL Legacy Programs",
    "Vintage Database Systems",
    "Archival Transaction Processing",
    "Legacy Reporting Systems",
    "Historical Record Management"
  ];

  const purchaseDecisions = [
    "Legacy System Decommissioning Services",
    "IBM 3084 Data Recovery and Extraction", 
    "Historical Data Migration",
    "Legacy System Documentation",
    "Vintage Hardware Maintenance",
    "End-of-Life System Support",
    "Data Archival and Preservation",
    "Legacy Application Analysis"
  ];

  const sampleData = [
    {
      name: "Richard Johnson",
      title: "Legacy Systems Coordinator",
      company: "State Administrative Services",
      location: "Springfield, IL",
      employees: "18,000+",
      industry: "Government"
    },
    {
      name: "Dorothy Miller",
      title: "IT Heritage Manager",
      company: "Community Trust Bank",
      location: "Louisville, KY",
      employees: "2,400+",
      industry: "Banking"
    },
    {
      name: "Frank Wilson",
      title: "Systems Archivist",
      company: "Heritage Manufacturing Co",
      location: "Detroit, MI",
      employees: "4,100+", 
      industry: "Manufacturing"
    }
  ];

  return (
    <>
      <SEOHead 
        title="IBM 3084 Users List - 589 Companies | ELP Data"
        description="Connect with 589 verified IBM 3084 users. Target organizations maintaining IBM 3084 mainframes for vintage legacy systems in government, banking, manufacturing, and insurance."
        keywords="IBM 3084 users, IBM 3084 customers, vintage mainframe systems, legacy computing, mainframe decommissioning"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-8 h-8 text-amber-600" />
                  <Badge className="bg-amber-100 text-amber-800">Historical Systems</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IBM 3084 Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 589 organizations using IBM 3084 mainframes for historical legacy operations. Target companies 
                  in government, banking, manufacturing, and insurance that maintain IBM 3084 technology for vintage systems 
                  and require specialized decommissioning, data recovery, or archival services.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our IBM 3084 users database includes organizations with historical computing needs that represent opportunities 
                  for legacy system services, data preservation, and specialized vintage mainframe support.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-amber-600 mb-2">589</div>
                    <div className="text-gray-600">IBM 3084 Users</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get IBM 3084 Users List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom IBM 3084 List</h3>
                <h4 className="text-xl font-semibold text-amber-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (decommissioning services, data recovery, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* IBM 3084 Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM 3084 User Segments</h2>
              <p className="text-xl text-gray-600">Target organizations by industry and legacy system requirements</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {ibm3084Segments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-amber-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM 3084 Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyApplications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical System Services</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Recovery & Preservation</h3>
                      <p className="text-gray-600">Specialized services for recovering and preserving historical data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">System Decommissioning</h3>
                      <p className="text-gray-600">Professional decommissioning services for end-of-life systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Historical Documentation</h3>
                      <p className="text-gray-600">Documentation and archival of legacy system configurations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Vintage Hardware Support</h3>
                      <p className="text-gray-600">Specialized support for maintaining historical computing equipment</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">IBM 3084 Service Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample IBM 3084 Users Records</h2>
              <p className="text-xl text-gray-600">Preview of available IBM 3084 user contact information</p>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600">{user.company}</td>
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
        <section className="py-16 bg-amber-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with IBM 3084 Users</h2>
            <p className="text-xl text-amber-100 mb-8">
              Access 589 verified IBM 3084 users for legacy system services and decommissioning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600">
                Get Custom IBM 3084 Users List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}