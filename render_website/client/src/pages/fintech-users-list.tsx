import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CreditCard, Smartphone, BarChart, Shield, Zap } from "lucide-react";

export default function FinTechUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">FinTech Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 26,000+ financial institutions implementing fintech solutions. Target CTOs, payment processors, and digital banking teams deploying blockchain, digital wallets, and lending platforms for financial innovation.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">26K+</div>
                  <div className="text-sm text-white/80">Financial Institutions</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">1.8M+</div>
                  <div className="text-sm text-white/80">FinTech Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">170+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FinTech Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">Financial Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing innovative financial technology platforms for digital payments, banking, and financial services transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-blue-500" />
                  Digital Payment Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Modern payment gateways and digital transaction processing platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Payment Gateways</Badge>
                  <Badge variant="secondary">Credit Card Processing</Badge>
                  <Badge variant="secondary">Digital Wallets</Badge>
                  <Badge variant="secondary">Real-time Payments</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce & Online Retail</li>
                    <li>• Digital Marketplaces</li>
                    <li>• SaaS & Subscription Services</li>
                    <li>• Gaming & Entertainment</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Payment Operations Manager</li>
                    <li>• Financial Technology Director</li>
                    <li>• E-commerce Platform Manager</li>
                    <li>• Digital Payment Specialist</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• PCI DSS compliance and security requirements</li>
                    <li>• Cross-border payment processing complexities</li>
                    <li>• Fraud detection and prevention optimization</li>
                    <li>• Payment method diversification and support</li>
                    <li>• Transaction fee optimization and cost management</li>
                    <li>• Real-time transaction monitoring and alerts</li>
                    <li>• Chargeback management and dispute resolution</li>
                    <li>• Integration with legacy financial systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-green-500" />
                  Mobile Banking & Neobanks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital-first banking platforms and mobile financial services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Mobile Banking Apps</Badge>
                  <Badge variant="secondary">Digital Account Opening</Badge>
                  <Badge variant="secondary">Personal Finance Tools</Badge>
                  <Badge variant="secondary">API Banking</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital-only Banks</li>
                    <li>• Traditional Banks Digitalizing</li>
                    <li>• Credit Unions & Community Banks</li>
                    <li>• Financial Services Startups</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital Banking Director</li>
                    <li>• Mobile App Product Manager</li>
                    <li>• Customer Experience Manager</li>
                    <li>• Banking Technology Lead</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regulatory compliance across multiple jurisdictions</li>
                    <li>• User authentication and biometric security</li>
                    <li>• Customer onboarding and KYC automation</li>
                    <li>• Real-time transaction processing and notifications</li>
                    <li>• Mobile app performance and user experience</li>
                    <li>• Open banking API implementation</li>
                    <li>• Customer acquisition cost optimization</li>
                    <li>• Legacy core banking system integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-500" />
                  Investment & WealthTech
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital investment platforms and wealth management solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Robo-advisors</Badge>
                  <Badge variant="secondary">Portfolio Management</Badge>
                  <Badge variant="secondary">Trading Platforms</Badge>
                  <Badge variant="secondary">Risk Analytics</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Investment Management Firms</li>
                    <li>• Wealth Management Companies</li>
                    <li>• Brokerage & Trading Platforms</li>
                    <li>• Financial Advisory Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Investment Technology Director</li>
                    <li>• Portfolio Management System Lead</li>
                    <li>• Quantitative Analyst</li>
                    <li>• Wealth Technology Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Real-time market data integration and processing</li>
                    <li>• Algorithmic trading strategy implementation</li>
                    <li>• Regulatory reporting and compliance automation</li>
                    <li>• Risk management and portfolio optimization</li>
                    <li>• Client reporting and performance attribution</li>
                    <li>• Multi-asset class trading and settlement</li>
                    <li>• Market volatility and system resilience</li>
                    <li>• Client onboarding and suitability assessment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                  Lending & Credit Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital lending platforms and alternative credit assessment solutions
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Digital Lending</Badge>
                  <Badge variant="secondary">Credit Scoring</Badge>
                  <Badge variant="secondary">Loan Origination</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Online Lending Platforms</li>
                    <li>• Peer-to-peer Lending</li>
                    <li>• Mortgage & Real Estate Finance</li>
                    <li>• Small Business Lending</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Lending Operations Manager</li>
                    <li>• Credit Risk Analyst</li>
                    <li>• Loan Origination System Manager</li>
                    <li>• Alternative Credit Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Alternative credit scoring model development</li>
                    <li>• Automated underwriting and decision engines</li>
                    <li>• Regulatory compliance and fair lending practices</li>
                    <li>• Fraud prevention and identity verification</li>
                    <li>• Loan servicing and collection automation</li>
                    <li>• Integration with traditional credit bureaus</li>
                    <li>• Real-time loan approval and funding</li>
                    <li>• Portfolio risk management and monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-teal-500" />
                  RegTech & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regulatory technology solutions for compliance automation
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">AML/KYC Automation</Badge>
                  <Badge variant="secondary">Regulatory Reporting</Badge>
                  <Badge variant="secondary">Risk Monitoring</Badge>
                  <Badge variant="secondary">Compliance Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Banking & Financial Institutions</li>
                    <li>• Insurance Companies</li>
                    <li>• Investment Management</li>
                    <li>• Cryptocurrency Exchanges</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Compliance Technology Manager</li>
                    <li>• RegTech Implementation Lead</li>
                    <li>• AML Operations Manager</li>
                    <li>• Regulatory Affairs Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Evolving regulatory requirements across jurisdictions</li>
                    <li>• Real-time transaction monitoring and alerting</li>
                    <li>• Customer due diligence and enhanced screening</li>
                    <li>• Regulatory reporting accuracy and timeliness</li>
                    <li>• False positive reduction in monitoring systems</li>
                    <li>• Cross-border compliance and data privacy</li>
                    <li>• Integration with legacy compliance systems</li>
                    <li>• Staff training and regulatory change management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-indigo-500" />
                  Blockchain & DeFi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Distributed ledger technologies and decentralized finance platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Blockchain Infrastructure</Badge>
                  <Badge variant="secondary">Smart Contracts</Badge>
                  <Badge variant="secondary">DeFi Protocols</Badge>
                  <Badge variant="secondary">Digital Assets</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cryptocurrency Exchanges</li>
                    <li>• Blockchain Development Companies</li>
                    <li>• DeFi Protocol Developers</li>
                    <li>• Digital Asset Management</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Blockchain Developer</li>
                    <li>• DeFi Product Manager</li>
                    <li>• Cryptocurrency Operations Lead</li>
                    <li>• Smart Contract Auditor</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Scalability and transaction throughput limitations</li>
                    <li>• Regulatory uncertainty and compliance complexity</li>
                    <li>• Smart contract security and audit requirements</li>
                    <li>• Cross-chain interoperability and bridges</li>
                    <li>• Energy consumption and environmental concerns</li>
                    <li>• User experience and mainstream adoption barriers</li>
                    <li>• Institutional custody and security solutions</li>
                    <li>• Market volatility and risk management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}