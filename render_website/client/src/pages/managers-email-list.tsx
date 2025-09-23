import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Download, Building2, TrendingUp, Target, Briefcase } from "lucide-react";

export default function ManagersEmailList() {
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

  const managerSegments = [
    { name: "Project Managers", count: "98,450+", description: "Project management professionals overseeing initiatives and deliverables" },
    { name: "Operations Managers", count: "87,300+", description: "Operations leaders managing day-to-day business processes and efficiency" },
    { name: "Account Managers", count: "76,200+", description: "Customer relationship managers driving client success and growth" },
    { name: "Regional Managers", count: "65,150+", description: "Regional leaders overseeing geographic territories and local operations" },
    { name: "Product Managers", count: "54,800+", description: "Product management professionals driving product strategy and development" },
    { name: "Sales Managers", count: "48,650+", description: "Sales team leaders managing territories, quotas, and revenue targets" },
    { name: "HR Managers", count: "26,230+", description: "Human resources managers handling talent acquisition and employee relations" }
  ];

  const keyResponsibilities = [
    "Team Leadership & Coordination",
    "Project Planning & Execution", 
    "Performance Management",
    "Budget & Resource Management",
    "Process Improvement",
    "Stakeholder Communication",
    "Quality Assurance",
    "Problem Solving & Decision Making"
  ];

  const purchaseDecisions = [
    "Team Management and Productivity Tools",
    "Project Management Software and Platforms", 
    "Communication and Collaboration Solutions",
    "Training and Professional Development Programs",
    "Team-specific Software and Applications",
    "Reporting and Analytics Tools",
    "Workflow Automation Solutions",
    "Industry-specific Tools and Equipment"
  ];

  const sampleData = [
    {
      name: "Jennifer Rodriguez",
      title: "Project Manager",
      company: "Innovation Tech Solutions",
      location: "Austin, TX",
      employees: "1,800+",
      department: "Operations"
    },
    {
      name: "David Thompson",
      title: "Regional Sales Manager",
      company: "Growth Partners Inc",
      location: "Chicago, IL",
      employees: "2,500+",
      department: "Sales"
    },
    {
      name: "Sarah Kim",
      title: "Product Manager",
      company: "Digital Dynamics Corp",
      location: "San Francisco, CA",
      employees: "3,200+", 
      department: "Product"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Managers Email List - 456,780+ Management Professionals | ELP Data"
        description="Connect with 456,780+ verified Manager email addresses. Target project managers, operations managers, account managers, and team leaders across all industries."
        keywords="managers email list, management professionals database, project managers, operations managers, team leaders"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">Management Level</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Managers Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 456,780+ Management professionals across project management, operations, account management, 
                  regional leadership, product management, sales, and HR. Target the team leaders who drive execution 
                  and influence purchasing decisions for their teams and projects.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Managers database includes management professionals from Fortune 500 companies, growing enterprises, 
                  technology firms, healthcare organizations, manufacturing companies, and service providers across all industries.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">456,780+</div>
                    <div className="text-gray-600">Manager Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">93%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Managers Email List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Managers List</h3>
                <h4 className="text-xl font-semibold text-green-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (management types, company size, industry)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Manager Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Manager Segments Available</h2>
              <p className="text-xl text-gray-600">Target Managers by functional area and management type</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managerSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-green-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Manager Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Management Leadership Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Project & Task Management</h3>
                      <p className="text-gray-600">Planning, organizing, and executing projects while ensuring deliverable quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Coordination & Leadership</h3>
                      <p className="text-gray-600">Leading teams, coordinating activities, and driving performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Process Improvement & Efficiency</h3>
                      <p className="text-gray-600">Optimizing workflows, implementing best practices, and driving efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Resource & Budget Management</h3>
                      <p className="text-gray-600">Managing team resources, budgets, and operational costs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Manager Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Managers Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Manager contact information</p>
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
                  {sampleData.map((manager, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{manager.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{manager.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{manager.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Management Professionals</h2>
            <p className="text-xl text-green-100 mb-8">
              Access 456,780+ verified Manager email addresses from companies driving operational excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Get Custom Managers List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}