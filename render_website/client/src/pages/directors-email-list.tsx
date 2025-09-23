import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Download, Users, TrendingUp, Target, Briefcase } from "lucide-react";

export default function DirectorsEmailList() {
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

  const directorSegments = [
    { name: "Operations Directors", count: "89,450+", description: "Operations leaders managing business processes and operational efficiency" },
    { name: "Sales Directors", count: "67,200+", description: "Sales leadership driving revenue growth and market expansion" },
    { name: "Marketing Directors", count: "54,800+", description: "Marketing executives managing brand strategy and campaign execution" },
    { name: "IT Directors", count: "42,300+", description: "Technology directors overseeing IT infrastructure and digital initiatives" },
    { name: "Finance Directors", count: "38,650+", description: "Financial leaders managing budgets, reporting, and financial strategy" },
    { name: "HR Directors", count: "29,200+", description: "Human resources directors leading talent management and organizational development" },
    { name: "Product Directors", count: "20,550+", description: "Product leaders driving product strategy and development initiatives" }
  ];

  const keyResponsibilities = [
    "Department Strategy & Planning",
    "Team Leadership & Development", 
    "Budget Management & P&L",
    "Cross-functional Collaboration",
    "Performance Management",
    "Process Optimization",
    "Vendor & Partner Relations",
    "Executive Reporting"
  ];

  const purchaseDecisions = [
    "Departmental Software and Tools",
    "Team Productivity and Collaboration Platforms", 
    "Professional Services and Consulting",
    "Training and Development Programs",
    "Department-specific Technology Solutions",
    "Performance Management Systems",
    "Analytics and Reporting Tools",
    "Industry-specific Software and Equipment"
  ];

  const sampleData = [
    {
      name: "Rachel Thompson",
      title: "Director of Operations",
      company: "Growth Dynamics Corp",
      location: "Denver, CO",
      employees: "2,800+",
      department: "Operations"
    },
    {
      name: "Marcus Johnson",
      title: "Sales Director",
      company: "Enterprise Solutions Inc",
      location: "Atlanta, GA",
      employees: "1,500+",
      department: "Sales"
    },
    {
      name: "Lisa Chen",
      title: "Marketing Director",
      company: "TechForward Systems",
      location: "Seattle, WA",
      employees: "3,200+", 
      department: "Marketing"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Directors Email List - 342,150+ Department Directors | ELP Data"
        description="Connect with 342,150+ verified Director email addresses. Target department directors across operations, sales, marketing, IT, finance, HR, and product management."
        keywords="directors email list, department directors database, operations directors, sales directors, marketing directors"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Director Level</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Directors Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 342,150+ Directors leading departments and business units across operations, sales, marketing, 
                  IT, finance, HR, and product management. Target the department leaders who drive strategic initiatives 
                  and make key purchasing decisions for their teams.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Directors database includes mid-to-senior level executives from Fortune 500 companies, growing enterprises, 
                  technology firms, healthcare organizations, and international corporations across all major industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">342,150+</div>
                    <div className="text-gray-600">Director Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Directors Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Directors List</h3>
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
                      placeholder="Specific requirements (departments, company size, industry)"
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

        {/* Director Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Director Segments Available</h2>
              <p className="text-xl text-gray-600">Target Directors by department and functional area</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directorSegments.map((segment, index) => (
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

        {/* Key Responsibilities & Purchase Decisions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Director Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Department Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Strategic Planning & Execution</h3>
                      <p className="text-gray-600">Department strategy development, goal setting, and initiative implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Management & Development</h3>
                      <p className="text-gray-600">Team leadership, talent development, and performance management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Operational Excellence</h3>
                      <p className="text-gray-600">Process optimization, efficiency improvement, and quality management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Budget & Resource Management</h3>
                      <p className="text-gray-600">Financial planning, resource allocation, and cost optimization</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Director Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Directors Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Director contact information</p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((director, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{director.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{director.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{director.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{director.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{director.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{director.department}</td>
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
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Department Directors</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access 342,150+ verified Director email addresses from companies driving departmental excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Custom Directors List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}