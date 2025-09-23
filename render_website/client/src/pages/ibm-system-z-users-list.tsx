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

export default function IBMSystemZUsersList() {
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

  const systemZSegments = [
    { name: "Banking & Financial Services", count: "1,890+", description: "Financial institutions using IBM System z for core banking operations" },
    { name: "Insurance Companies", count: "1,250+", description: "Insurance organizations leveraging System z for policy and claims processing" },
    { name: "Government Agencies", count: "780+", description: "Government organizations using IBM System z for mission-critical applications" },
    { name: "Healthcare Systems", count: "485+", description: "Healthcare organizations running patient management systems on System z" },
    { name: "Manufacturing", count: "296+", description: "Manufacturing companies using System z for enterprise resource planning" }
  ];

  const keyApplications = [
    "Enterprise Transaction Processing",
    "z/OS Operating System", 
    "DB2 Database Management",
    "CICS Transaction Server",
    "IMS Information Management",
    "WebSphere Application Server",
    "Security and Encryption",
    "Batch Processing Systems"
  ];

  const purchaseDecisions = [
    "IBM System z Hardware Upgrades",
    "z/OS Software and Licensing", 
    "Modernization and Cloud Migration Services",
    "Security and Compliance Solutions",
    "Performance Monitoring and Optimization Tools",
    "Backup and Disaster Recovery Systems",
    "Development and Testing Environments",
    "Professional Services and Technical Support"
  ];

  const sampleData = [
    {
      name: "Patricia Williams",
      title: "System z Administrator",
      company: "Global Banking Solutions",
      location: "Charlotte, NC",
      employees: "45,000+",
      industry: "Banking"
    },
    {
      name: "James Martinez",
      title: "Mainframe Systems Manager",
      company: "National Insurance Corp",
      location: "Hartford, CT",
      employees: "12,000+",
      industry: "Insurance"
    },
    {
      name: "Angela Chen",
      title: "Enterprise Systems Director",
      company: "Federal Technology Services",
      location: "Arlington, VA",
      employees: "28,000+", 
      industry: "Government"
    }
  ];

  return (
    <>
      <SEOHead 
        title="IBM System z Users List - 4,701 Companies | ELP Data"
        description="Connect with 4,701 verified IBM System z users. Target organizations using IBM System z mainframes for enterprise computing in banking, insurance, government, and healthcare."
        keywords="IBM System z users, System z customers, z/OS users, IBM mainframe database, enterprise computing"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-8 h-8 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-800">Enterprise Mainframes</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IBM System z Users List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 4,701 organizations using IBM System z mainframes for enterprise-scale computing. Target companies 
                  in banking, insurance, government, and healthcare that rely on IBM System z technology for mission-critical 
                  applications, high-volume transaction processing, and secure data management.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our IBM System z users database includes Fortune 500 companies, government agencies, financial institutions, 
                  and healthcare organizations that depend on z/OS systems for maximum reliability, security, and performance.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-purple-600 mb-2">4,701</div>
                    <div className="text-gray-600">System z Users</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get IBM System z Users List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom System z List</h3>
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
                      placeholder="Specific requirements (industry, company size, System z environment)"
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

        {/* System z Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IBM System z User Segments</h2>
              <p className="text-xl text-gray-600">Target organizations by industry and System z implementation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemZSegments.map((segment, index) => (
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

        {/* Key Applications & Purchase Decisions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">IBM System z Applications</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyApplications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">System z Technology Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enterprise Security & Encryption</h3>
                      <p className="text-gray-600">Advanced security features for regulated industries and sensitive data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">High-Volume Transaction Processing</h3>
                      <p className="text-gray-600">Massive transaction throughput for banking and financial services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enterprise Integration</h3>
                      <p className="text-gray-600">Seamless integration with modern cloud and hybrid environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Mission-Critical Reliability</h3>
                      <p className="text-gray-600">99.999% uptime for business-critical applications</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">System z Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample IBM System z Users Records</h2>
              <p className="text-xl text-gray-600">Preview of available IBM System z user contact information</p>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600">{user.company}</td>
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
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with IBM System z Users</h2>
            <p className="text-xl text-purple-100 mb-8">
              Access 4,701 verified IBM System z users for enterprise mainframe solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Get Custom System z Users List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}