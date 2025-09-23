import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, DollarSign, PiggyBank } from "lucide-react";

export default function FinanceIndustryEmailList() {
  const implementationSolutions = [
    {
      title: "Banking & Financial Services",
      description: "Finance Industry Email List implementation for banking & financial services and customer experience excellence",
      categories: ["Retail Banking", "Commercial Banking", "Investment Banking", "Digital Banking"],
      targetIndustries: [
        "Commercial Banks",
        "Credit Unions", 
        "Investment Banks",
        "Digital Banks"
      ],
      responsibleTitles: [
        "Bank Manager",
        "Loan Officer",
        "Investment Advisor",
        "Financial Analyst"
      ],
      challenges: [
        "Digital transformation and online banking",
        "Regulatory compliance and reporting",
        "Customer acquisition and retention",
        "Risk management and credit assessment",
        "Cybersecurity and fraud prevention",
        "Interest rate management and profitability",
        "Technology integration and modernization",
        "Customer service and satisfaction"
      ],
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Investment Management & Wealth",
      description: "Finance Industry Email List implementation for investment management & wealth and portfolio excellence", 
      categories: ["Asset Management", "Wealth Management", "Portfolio Management", "Financial Planning"],
      targetIndustries: [
        "Investment Firms",
        "Wealth Managers",
        "Asset Management", 
        "Financial Advisors"
      ],
      responsibleTitles: [
        "Portfolio Manager",
        "Wealth Advisor",
        "Investment Analyst",
        "Financial Planner"
      ],
      challenges: [
        "Market volatility and investment performance",
        "Client relationship management and communication",
        "Regulatory compliance and fiduciary duty",
        "Technology platform integration",
        "Fee transparency and competitive pricing",
        "Risk assessment and diversification",
        "ESG investing and sustainable finance",
        "Performance reporting and analytics"
      ],
      icon: <DollarSign className="w-8 h-8 text-green-600" />
    },
    {
      title: "Insurance & Risk Management",
      description: "Finance Industry Email List implementation for insurance & risk management and protection excellence",
      categories: ["Life Insurance", "Property & Casualty", "Health Insurance", "Commercial Insurance"],
      targetIndustries: [
        "Insurance Companies",
        "Insurance Brokers",
        "Risk Consultants", 
        "Reinsurance"
      ],
      responsibleTitles: [
        "Insurance Agent",
        "Underwriter",
        "Claims Manager",
        "Risk Analyst"
      ],
      challenges: [
        "Claims processing and settlement",
        "Risk assessment and underwriting",
        "Regulatory compliance and solvency",
        "Technology modernization and digitization",
        "Customer service and retention",
        "Fraud detection and prevention",
        "Product development and pricing",
        "Catastrophic event management"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Fintech & Digital Finance",
      description: "Finance Industry Email List implementation for fintech & digital finance and innovation excellence",
      categories: ["Digital Payments", "Lending Platforms", "Blockchain", "Cryptocurrency"],
      targetIndustries: [
        "Fintech Startups",
        "Payment Processors",
        "Digital Lenders", 
        "Crypto Exchanges"
      ],
      responsibleTitles: [
        "Product Manager",
        "Technology Lead",
        "Growth Manager",
        "Compliance Officer"
      ],
      challenges: [
        "Regulatory compliance and licensing",
        "Customer acquisition and user experience",
        "Cybersecurity and data protection",
        "Technology scalability and performance",
        "Partnership and integration challenges",
        "Market competition and differentiation",
        "Funding and capital requirements",
        "Risk management and fraud prevention"
      ],
      icon: <Target className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Corporate Finance & Treasury",
      description: "Finance Industry Email List implementation for corporate finance & treasury and capital management excellence",
      categories: ["Treasury Management", "Corporate Banking", "Capital Markets", "M&A"],
      targetIndustries: [
        "Corporate Treasury",
        "Investment Banking",
        "Private Equity", 
        "Consulting Firms"
      ],
      responsibleTitles: [
        "Treasurer",
        "CFO",
        "Investment Banker",
        "M&A Analyst"
      ],
      challenges: [
        "Cash flow management and liquidity",
        "Capital structure optimization",
        "Mergers and acquisitions execution",
        "Market timing and fundraising",
        "Risk hedging and derivatives",
        "Regulatory compliance and reporting",
        "Technology and system integration",
        "Stakeholder communication and relations"
      ],
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Financial Technology & Infrastructure",
      description: "Finance Industry Email List implementation for financial technology & infrastructure and systems excellence",
      categories: ["Core Banking", "Trading Systems", "Risk Management", "Compliance Technology"],
      targetIndustries: [
        "Financial Software",
        "Core Banking Systems",
        "Trading Platforms", 
        "RegTech Companies"
      ],
      responsibleTitles: [
        "IT Director",
        "Systems Architect",
        "Product Manager",
        "Implementation Manager"
      ],
      challenges: [
        "Legacy system modernization",
        "Cloud migration and security",
        "API integration and connectivity",
        "Regulatory technology compliance",
        "Real-time processing and performance",
        "Data management and analytics",
        "Vendor management and partnerships",
        "User training and adoption"
      ],
      icon: <Building className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Finance Industry Email List - Financial Professional Contacts Database | ELP Data"
        description="Access our comprehensive finance industry email list with verified financial professional contacts across all finance sectors. Target bank managers, financial advisors, and finance industry decision-makers."
        keywords="finance industry email list, banking contacts, financial advisor database, finance professional mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Finance <span className="text-blue-600">Industry Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  The finance industry is one of the leading cutting-edge industries in the 21st-century economy. 
                  With a strength of more than 7 million employees, this multi-trillion-dollar industry regulates and maintains finances in our world.
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
                    <span>1,187,450 Finance Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>415,606 Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Finance Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Finance Sector" className="border-blue-200 focus:border-blue-500" />
                  <Input placeholder="Location" className="border-blue-200 focus:border-blue-500" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Finance Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">98.9%</div>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">1.19M+</div>
                <div className="text-gray-600">Finance Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">416K+</div>
                <div className="text-gray-600">Company Profiles</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Finance Sectors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Finance Industry Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Finance Industry solutions across various financial sectors and use cases
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
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Finance Industry Leaders?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive database of 1.19+ million finance contacts across 25+ financial sectors
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