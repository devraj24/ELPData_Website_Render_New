import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Calculator, DollarSign } from "lucide-react";

export default function AccountingPayrollIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Corporate Accounting & Finance",
      description: "Accounting & Payroll Email List implementation for corporate accounting & finance and financial management excellence",
      categories: ["Corporate Accounting", "Financial Reporting", "Tax Planning", "Audit Support"],
      targetIndustries: [
        "Large Corporations",
        "Public Companies", 
        "Financial Services",
        "Manufacturing"
      ],
      responsibleTitles: [
        "CFO",
        "Controller",
        "Accounting Manager",
        "Finance Director"
      ],
      challenges: [
        "Financial reporting and compliance requirements",
        "Tax planning and optimization strategies",
        "Audit preparation and external auditor coordination",
        "Cash flow management and forecasting",
        "Budget planning and variance analysis",
        "Internal controls and risk management",
        "Financial system integration and automation",
        "Regulatory changes and compliance updates"
      ],
      icon: <Calculator className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Payroll Processing & Management",
      description: "Accounting & Payroll Email List implementation for payroll processing & management and workforce compensation excellence", 
      categories: ["Payroll Processing", "Benefits Administration", "Tax Compliance", "Time & Attendance"],
      targetIndustries: [
        "Payroll Service Providers",
        "HR Departments",
        "Small to Medium Businesses", 
        "Multi-state Operations"
      ],
      responsibleTitles: [
        "Payroll Manager",
        "HR Director",
        "Payroll Specialist",
        "Benefits Administrator"
      ],
      challenges: [
        "Multi-state payroll tax compliance",
        "Time tracking and attendance management",
        "Benefits enrollment and administration",
        "Wage and hour law compliance",
        "Year-end reporting and tax documents",
        "Payroll system integration and automation",
        "Employee self-service portal management",
        "Garnishment and deduction processing"
      ],
      icon: <DollarSign className="w-8 h-8 text-green-600" />
    },
    {
      title: "Tax Preparation & Planning",
      description: "Accounting & Payroll Email List implementation for tax preparation & planning and tax optimization excellence",
      categories: ["Tax Preparation", "Tax Planning", "Compliance", "Advisory Services"],
      targetIndustries: [
        "CPA Firms",
        "Tax Preparation Services",
        "Corporate Tax Departments", 
        "Tax Advisory Firms"
      ],
      responsibleTitles: [
        "Tax Manager",
        "CPA",
        "Tax Preparer",
        "Tax Director"
      ],
      challenges: [
        "Tax law changes and regulatory updates",
        "Multi-jurisdiction tax compliance",
        "Tax planning and strategy development",
        "Client communication and advisory services",
        "Tax software selection and training",
        "Deadline management and workflow optimization",
        "Quality control and review processes",
        "Client data security and confidentiality"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Small Business Accounting",
      description: "Accounting & Payroll Email List implementation for small business accounting and entrepreneurial financial excellence",
      categories: ["Bookkeeping", "Financial Statements", "Cash Flow", "Business Advisory"],
      targetIndustries: [
        "Small Business Services",
        "Bookkeeping Services",
        "Startup Companies", 
        "Family Businesses"
      ],
      responsibleTitles: [
        "Bookkeeper",
        "Small Business Accountant",
        "Business Advisor",
        "Financial Consultant"
      ],
      challenges: [
        "Cash flow management and forecasting",
        "QuickBooks and accounting software training",
        "Business growth planning and financing",
        "Tax preparation and quarterly filings",
        "Financial statement preparation",
        "Expense tracking and categorization",
        "Inventory management and costing",
        "Business performance analysis and KPIs"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Accounting Technology & Software",
      description: "Accounting & Payroll Email List implementation for accounting technology & software and digital transformation excellence",
      categories: ["Accounting Software", "Cloud Solutions", "Automation", "Integration"],
      targetIndustries: [
        "Software Companies",
        "Technology Consultants",
        "System Integrators", 
        "Cloud Service Providers"
      ],
      responsibleTitles: [
        "Software Implementation Manager",
        "Technology Consultant",
        "Systems Analyst",
        "IT Director"
      ],
      challenges: [
        "Software selection and implementation",
        "Data migration and system integration",
        "User training and change management",
        "Customization and workflow optimization",
        "Security and data backup protocols",
        "Software updates and maintenance",
        "ROI measurement and performance metrics",
        "Vendor management and support"
      ],
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Audit & Assurance Services",
      description: "Accounting & Payroll Email List implementation for audit & assurance services and financial integrity excellence",
      categories: ["External Audits", "Internal Audits", "Compliance", "Risk Assessment"],
      targetIndustries: [
        "Public Accounting Firms",
        "Internal Audit Departments",
        "Regulatory Bodies", 
        "Compliance Services"
      ],
      responsibleTitles: [
        "Audit Manager",
        "Internal Auditor",
        "Compliance Officer",
        "Risk Manager"
      ],
      challenges: [
        "Audit planning and risk assessment",
        "Documentation and working paper management",
        "Client communication and findings presentation",
        "Regulatory compliance and standards",
        "Staff scheduling and resource allocation",
        "Technology and data analytics tools",
        "Quality control and peer review",
        "Continuing education and certification"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Accounting and Payroll Industry Email List - Finance Professional Contacts Database | ELP Data"
        description="Access our comprehensive accounting and payroll industry email list with verified finance professional contacts across all accounting sectors. Target CPAs, payroll managers, and accounting decision-makers."
        keywords="accounting email list, payroll contacts, CPA database, finance professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Accounting And Payroll <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Accounting and payroll have helped businesses significantly streamline their employee costs, tax deductions, 
                  compliance with regulations, and ensure timely compensations. Connect with key decision-makers in the accounting industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>132,212 Accounting Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>46,274 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Accounting Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Accounting Specialization" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Accounting Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98.3%</div>
                    <div className="text-sm text-gray-600">Data Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">132K+</div>
                <div className="text-gray-600">Accounting Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">46K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">18+</div>
                <div className="text-gray-600">Accounting Specializations</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Monthly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Accounting & Payroll Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Accounting & Payroll solutions across various financial sectors and use cases
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {implementationSolutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{solution.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.categories.map((category, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Industries */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Target Industries:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.targetIndustries.map((industry, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible Job Titles */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsible Job Titles:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.responsibleTitles.map((title, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Current Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                        {solution.challenges.slice(0, 4).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                      {solution.challenges.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{solution.challenges.length - 4} more challenges
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Accounting & Payroll Professionals?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 132,000+ accounting and payroll contacts across all financial sectors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-500 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}