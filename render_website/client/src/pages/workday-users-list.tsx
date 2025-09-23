import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building2, Globe, CheckCircle, Download, TrendingUp, Cloud, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function WorkdayUsersList() {
  const workdayModules = [
    // Core HCM
    "Workday Human Capital Management", "Workday Human Resource Management", "Workday Payroll",
    "Workday Benefits", "Workday Compensation", "Workday Talent and Performance", "Workday Talent Management",
    "Workday Recruiting", "Workday Learning", "Workday Time and Attendance", "Workday Time Tracking",
    
    // Financial Management
    "Workday Financial Management", "Workday Accounting and Finance", "Workday Financial Planning",
    "Workday Financial Reporting and Analytics", "Workday Revenue Management", "Workday Expenses",
    "Workday Procurement", "Workday Strategic Sourcing", "Workday Inventory",
    
    // Analytics & Planning
    "Workday Adaptive Planning", "Workday Business Planning", "Workday People Analytics",
    "Workday Prism Analytics", "Workday HCM Reporting and Analytics", "Workday Workforce Planning",
    
    // Education & Student
    "Workday Student", "Workday Student Admissions", "Workday Student Financials",
    "Workday Student Records", "Workday Student Recruiting", "Workday Academic Advising",
    "Workday Academic Foundation", "Workday Curriculum Management", "Workday Financial Aid",
    "Workday Grants Management",
    
    // Platform & Integration
    "Workday Cloud Platform", "Workday Integration Cloud", "Workday Extend", "Workday Launch",
    "Workday Data-as-a-Service", "Workday Professional Services Automation", "Workday Projects",
    
    // Specialized Solutions
    "Workday Absence Management", "Workday Accounting Center", "Scout RFP", "Vndly", "Peakon"
  ];

  const keyMetrics = [
    { value: "58.5K", label: "Companies", icon: Building2 },
    { value: "169.6K", label: "Records", icon: Users },
    { value: "96%", label: "Data Accuracy", icon: CheckCircle },
    { value: "45+", label: "Countries", icon: Globe }
  ];

  const industryBreakdown = [
    { industry: "Higher Education", percentage: 32, companies: "18.7K" },
    { industry: "Healthcare", percentage: 22, companies: "12.9K" },
    { industry: "Financial Services", percentage: 18, companies: "10.5K" },
    { industry: "Technology", percentage: 12, companies: "7.0K" },
    { industry: "Government", percentage: 8, companies: "4.7K" },
    { industry: "Manufacturing", percentage: 5, companies: "2.9K" },
    { industry: "Retail", percentage: 2, companies: "1.2K" },
    { industry: "Other", percentage: 1, companies: "0.6K" }
  ];

  const companySize = [
    { size: "Enterprise (5000+ employees)", percentage: 55, companies: "32.2K" },
    { size: "Large (1000-4999 employees)", percentage: 30, companies: "17.6K" },
    { size: "Mid-Market (250-999 employees)", percentage: 12, companies: "7.0K" },
    { size: "Small Business (50-249 employees)", percentage: 3, companies: "1.7K" }
  ];

  return (
    <>
      <SEOHead 
        title="Workday Users List - 58.5K+ HCM & Financial Management Companies | ELP Data"
        description="Access comprehensive Workday users database with 58.5K+ companies and 169.6K+ verified contacts. Connect with HR professionals, finance teams, and Workday system administrators."
        keywords="workday users list, workday customers, HCM users, human capital management, workday implementation, workday professionals"
        canonical="https://www.elpdata.com/workday-users-list"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Human Capital Management Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Workday Users
              <span className="block text-orange-600">Customer Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with 58,500+ companies using Workday HCM and Financial Management solutions. Target HR professionals, 
              finance teams, and IT administrators implementing Workday across enterprise organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline">
                Request Custom List
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <metric.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Workday Solution Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Workday Solution Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-orange-600" />
                    <CardTitle className="text-lg">Human Capital Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Comprehensive HR solutions for talent management and workforce optimization</p>
                  <div className="space-y-2">
                    {["Workday HCM", "Workday Recruiting", "Workday Talent Management", "Workday Learning"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg">Financial Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Enterprise financial planning, accounting, and procurement solutions</p>
                  <div className="space-y-2">
                    {["Workday Financial Management", "Workday Adaptive Planning", "Workday Procurement", "Workday Expenses"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Analytics & Platform</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Advanced analytics, reporting, and cloud platform integration capabilities</p>
                  <div className="space-y-2">
                    {["Workday Prism Analytics", "Workday People Analytics", "Workday Cloud Platform", "Workday Extend"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Industry Breakdown */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Industry Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {industryBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.industry}</span>
                            <span className="text-sm text-gray-600">{item.companies}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-orange-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Company Size Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {companySize.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.size}</span>
                            <span className="text-sm text-gray-600">{item.companies}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* All Workday Modules */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Complete Workday Module Coverage</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {workdayModules.map((module, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-800">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-orange-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-white mb-6">Access Workday Customer Database</h2>
              <p className="text-xl text-orange-100 mb-8">
                Connect with 58,500+ companies and 169,600+ verified contacts using Workday solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Sample Data
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                  Request Custom List
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}