import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Code, Download, Building2, Users, TrendingUp, Laptop } from "lucide-react";

export default function SoftwareEngineersEmailList() {
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

  const engineerSegments = [
    { name: "Full Stack Developers", count: "125,400+", description: "Engineers working across frontend and backend development" },
    { name: "Frontend Engineers", count: "98,700+", description: "User interface and user experience focused developers" },
    { name: "Backend Engineers", count: "89,200+", description: "Server-side and database development specialists" },
    { name: "Mobile App Developers", count: "67,800+", description: "iOS, Android, and cross-platform mobile developers" },
    { name: "DevOps Engineers", count: "54,300+", description: "Infrastructure, deployment, and operations specialists" },
    { name: "Machine Learning Engineers", count: "42,600+", description: "AI and machine learning implementation specialists" },
    { name: "Security Engineers", count: "38,900+", description: "Cybersecurity and application security professionals" }
  ];

  const keyResponsibilities = [
    "Software Development & Programming",
    "System Architecture & Design", 
    "Code Review & Quality Assurance",
    "Technical Documentation",
    "Debugging & Troubleshooting",
    "Technology Research & Evaluation",
    "Team Collaboration & Mentoring",
    "Continuous Learning & Development"
  ];

  const purchaseDecisions = [
    "Development Tools and IDEs",
    "Cloud Computing and Hosting Services", 
    "Software Libraries and Frameworks",
    "Development and Testing Platforms",
    "Monitoring and Analytics Tools",
    "Security and Compliance Solutions",
    "Training and Certification Programs",
    "Hardware and Development Equipment"
  ];

  const sampleData = [
    {
      name: "Alex Rodriguez",
      title: "Senior Software Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      employees: "850+",
      specialty: "Full Stack Development"
    },
    {
      name: "Sarah Kim",
      title: "Frontend Engineer",
      company: "Digital Innovation Corp",
      location: "Austin, TX",
      employees: "320+",
      specialty: "React/JavaScript"
    },
    {
      name: "Michael Chen",
      title: "DevOps Engineer",
      company: "CloudScale Systems",
      location: "Seattle, WA",
      employees: "1,200+", 
      specialty: "AWS/Kubernetes"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Software Engineers Email List - 516,900+ Developers | ELP Data"
        description="Connect with 516,900+ verified Software Engineer email addresses. Target full stack developers, frontend engineers, backend engineers, mobile developers, and DevOps specialists."
        keywords="software engineers email list, developers database, programmers contacts, full stack developers, DevOps engineers"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-cyan-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-8 h-8 text-cyan-600" />
                  <Badge className="bg-cyan-100 text-cyan-800">Software Professionals</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Software Engineers Email List
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with 516,900+ Software Engineers across full stack development, frontend engineering, 
                  backend systems, mobile applications, DevOps, and specialized development areas. Target the 
                  technical professionals who evaluate and purchase development tools, cloud services, and technology solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our Software Engineers database includes developers from Fortune 500 companies, startups, 
                  technology firms, consulting companies, and software development agencies across all programming languages and platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">516,900+</div>
                    <div className="text-gray-600">Engineer Contacts</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Data Accuracy</div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 mr-4">
                  <Download className="w-5 h-5 mr-2" />
                  Get Software Engineers List
                </Button>
                <Button variant="outline" size="lg">
                  View Sample Data
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Custom Engineers List</h3>
                <h4 className="text-xl font-semibold text-cyan-600 mb-6">Request Quote</h4>
                
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
                      placeholder="Specific requirements (programming languages, technologies, seniority level)"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Get Custom Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Engineer Segments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Engineer Segments Available</h2>
              <p className="text-xl text-gray-600">Target Engineers by development specialty and technology stack</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineerSegments.map((segment, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-gray-900">{segment.name}</CardTitle>
                    <div className="text-2xl font-bold text-cyan-600">{segment.count}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineer Key Responsibilities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {keyResponsibilities.map((responsibility, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="font-medium text-gray-900">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Development Focus</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Laptop className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Application Development & Programming</h3>
                      <p className="text-gray-600">Building software applications using modern programming languages and frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">System Architecture & Scalability</h3>
                      <p className="text-gray-600">Designing scalable systems and technical architectures for enterprise applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Technology Innovation & Adoption</h3>
                      <p className="text-gray-600">Evaluating and implementing new technologies and development methodologies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-cyan-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Team Collaboration & Leadership</h3>
                      <p className="text-gray-600">Leading development teams and collaborating on technical projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-cyan-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Engineer Purchase Decisions</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Software Engineers Database Records</h2>
              <p className="text-xl text-gray-600">Preview of available Software Engineer contact information</p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sampleData.map((engineer, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{engineer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-600">{engineer.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.employees}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engineer.specialty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with Software Engineers</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Access 516,900+ verified Software Engineer email addresses from technology companies worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample List
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-600">
                Get Custom Software Engineers List
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}