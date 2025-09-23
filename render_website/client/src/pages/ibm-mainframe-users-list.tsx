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

export default function IBMMainframeUsersList() {
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

  const mainframeSegments = [
    { name: "z/OS Environments", count: "3,850+", description: "Organizations running IBM z/OS operating system on mainframes" },
    { name: "Banking & Financial Services", count: "2,420+", description: "Financial institutions using IBM mainframes for core banking systems" },
    { name: "Insurance Companies", count: "1,680+", description: "Insurance companies leveraging mainframes for policy and claims processing" },
    { name: "Government Agencies", count: "945+", description: "Government organizations using IBM mainframes for mission-critical applications" },
    { name: "Healthcare Systems", count: "681+", description: "Healthcare organizations running patient management and billing on mainframes" }
  ];

  const keyApplications = [
    "Core Banking Systems",
    "Transaction Processing", 
    "Batch Processing",
    "Database Management",
    "Enterprise Resource Planning",
    "Customer Information Systems",
    "Risk Management",
    "Regulatory Compliance"
  ];

  const purchaseDecisions = [
    "Mainframe Hardware Upgrades",
    "z/OS Software Licensing", 
    "Modernization and Migration Services",
    "Security and Compliance Solutions",
    "Performance Monitoring Tools",
    "Backup and Recovery Systems",
    "Development and Testing Environments",
    "Professional Services and Support"
  ];

  const sampleData = [
    {
      name: "Robert Johnson",
      title: "Mainframe Systems Manager",
      company: "Global Financial Corp",
      location: "New York, NY",
      employees: "15,000+",
      industry: "Banking"
    },
    {
      name: "Maria Rodriguez",
      title: "IT Infrastructure Director",
      company: "National Insurance Group",
      location: "Chicago, IL",
      employees: "8,500+",
      industry: "Insurance"
    },
    {
      name: "David Chen",
      title: "Enterprise Systems Architect",
      company: "Federal Agency Solutions",
      location: "Washington, DC",
      employees: "25,000+", 
      industry: "Government"
    }
  ];

  return (
    <>
      <SEOHead 
        title="IBM Mainframe Users List - 9,576 Companies | ELP Data"
        description="Connect with 9,576 verified IBM Mainframe users. Target organizations using IBM mainframes for mission-critical applications in banking, insurance, government, and healthcare."
        keywords="IBM mainframe users, mainframe customers, z/OS users, enterprise computing, IBM mainframe database"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Enterprise Computing</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IBM Mainframe Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 9,576 organizations using IBM Mainframes for mission-critical applications. Target enterprises 
                  in banking, insurance, government, and healthcare that rely on IBM mainframe technology for core business 
                  operations, transaction processing, and enterprise-scale computing.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our IBM Mainframe users database includes Fortune 500 companies, government agencies, financial institutions, 
                  and healthcare organizations that depend on IBM z/OS systems for reliability, security, and scalability.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">9,576</div>
                    <div className="text-gray-600">IBM Mainframe Users</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get IBM Mainframe Users List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom IBM Mainframe List</h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (industry, company size, mainframe environment)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mainframe Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM Mainframe User Segments</h2>
              <p className="text-xl text-gray-600">Target organizations by industry and mainframe environment</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainframeSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM Mainframe Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyApplications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mainframe Technology Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enterprise Security & Compliance</h3>
                      <p className="text-gray-600">High-security computing environments for regulated industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">High-Volume Transaction Processing</h3>
                      <p className="text-gray-600">Mission-critical applications requiring maximum uptime and reliability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legacy System Integration</h3>
                      <p className="text-gray-600">Modernization while maintaining existing mainframe investments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enterprise-Scale Operations</h3>
                      <p className="text-gray-600">Large-scale computing for Fortune 500 and government organizations</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Mainframe Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample IBM Mainframe Users Records</h2>
              <p className="text-xl text-gray-600">Preview of available IBM Mainframe user contact information</p>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{user.company}</td>
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
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with IBM Mainframe Users</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access 9,576 verified IBM Mainframe users for enterprise computing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Custom Mainframe Users List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}