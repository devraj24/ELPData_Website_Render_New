import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, DollarSign, Shield, Smartphone, BarChart, Users } from "lucide-react";

export default function FinTechUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">FinTech Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 22,756+ financial technology companies. Target product managers, compliance officers, and software engineers implementing payment processing, digital banking, and financial analytics solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">22,756</div>
                  <div className="text-sm text-white/80">FinTech Companies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">$2.4T</div>
                  <div className="text-sm text-white/80">Transactions Processed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">850M+</div>
                  <div className="text-sm text-white/80">Active Users</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FinTech Solution Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">FinTech Solution Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing financial technology solutions for payments, banking, lending, and wealth management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-green-500" />
                  Payment Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital payments, card processing, and transaction management platforms
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Card Processing</Badge>
                  <Badge variant="secondary">Digital Wallets</Badge>
                  <Badge variant="secondary">ACH Payments</Badge>
                  <Badge variant="secondary">Fraud Detection</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• E-commerce & Online Retail</li>
                    <li>• SaaS & Subscription Services</li>
                    <li>• Marketplace Platforms</li>
                    <li>• Mobile Apps & Gaming</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Financial Officer</li>
                    <li>• VP of Payments</li>
                    <li>• Product Manager</li>
                    <li>• Financial Operations Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• PCI DSS compliance requirements</li>
                    <li>• Integration complexity with existing systems</li>
                    <li>• Fraud prevention and chargebacks</li>
                    <li>• Multi-currency support</li>
                    <li>• Transaction fee optimization</li>
                    <li>• Real-time transaction monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-blue-500" />
                  Digital Banking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Neobanks, digital-first banking services, and mobile banking applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Mobile Banking</Badge>
                  <Badge variant="secondary">Account Management</Badge>
                  <Badge variant="secondary">Digital Onboarding</Badge>
                  <Badge variant="secondary">Personal Finance</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital-First Banks</li>
                    <li>• Credit Unions</li>
                    <li>• Community Banks</li>
                    <li>• Financial Services Startups</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Digital Officer</li>
                    <li>• Head of Digital Banking</li>
                    <li>• Mobile App Product Manager</li>
                    <li>• Customer Experience Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regulatory compliance (KYC, AML)</li>
                    <li>• Core banking system integration</li>
                    <li>• Customer identity verification</li>
                    <li>• Multi-platform app development</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Customer acquisition and retention</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-purple-500" />
                  Lending & Credit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital lending platforms, credit scoring, and loan management systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Digital Lending</Badge>
                  <Badge variant="secondary">Credit Scoring</Badge>
                  <Badge variant="secondary">Loan Origination</Badge>
                  <Badge variant="secondary">Risk Assessment</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Peer-to-Peer Lending</li>
                    <li>• Small Business Lending</li>
                    <li>• Alternative Credit Providers</li>
                    <li>• Mortgage Technology</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Risk Officer</li>
                    <li>• Head of Lending</li>
                    <li>• Credit Risk Manager</li>
                    <li>• Data Science Director</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Alternative data integration for credit scoring</li>
                    <li>• Real-time loan decision engines</li>
                    <li>• Regulatory compliance (TILA, FCRA)</li>
                    <li>• Portfolio risk management</li>
                    <li>• Collections and recovery automation</li>
                    <li>• Fair lending practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-orange-500" />
                  Wealth Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Robo-advisors, investment platforms, and portfolio management tools
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Robo-Advisory</Badge>
                  <Badge variant="secondary">Portfolio Management</Badge>
                  <Badge variant="secondary">Investment Analytics</Badge>
                  <Badge variant="secondary">Goal-Based Planning</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital Investment Advisors</li>
                    <li>• Wealth Management Firms</li>
                    <li>• Investment Platforms</li>
                    <li>• Financial Planning Technology</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Investment Officer</li>
                    <li>• Head of Wealth Management</li>
                    <li>• Portfolio Management Director</li>
                    <li>• Financial Planning Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Algorithm development for portfolio optimization</li>
                    <li>• Market data integration and real-time updates</li>
                    <li>• Regulatory compliance (SEC, FINRA)</li>
                    <li>• Tax-loss harvesting automation</li>
                    <li>• Risk tolerance assessment</li>
                    <li>• Performance reporting and attribution</li>
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
                  Regulatory technology for compliance, reporting, and risk management
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">AML Compliance</Badge>
                  <Badge variant="secondary">KYC Verification</Badge>
                  <Badge variant="secondary">Regulatory Reporting</Badge>
                  <Badge variant="secondary">Transaction Monitoring</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Traditional Banks</li>
                    <li>• Insurance Companies</li>
                    <li>• Broker-Dealers</li>
                    <li>• Money Service Businesses</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Compliance Officer</li>
                    <li>• Risk Management Director</li>
                    <li>• AML Officer</li>
                    <li>• Regulatory Affairs Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Complex regulatory requirement mapping</li>
                    <li>• Real-time transaction monitoring</li>
                    <li>• False positive management</li>
                    <li>• Cross-border compliance variations</li>
                    <li>• Data privacy and protection</li>
                    <li>• Audit trail maintenance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-indigo-500" />
                  InsurTech
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Digital insurance platforms, claims processing, and underwriting technology
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Digital Insurance</Badge>
                  <Badge variant="secondary">Claims Processing</Badge>
                  <Badge variant="secondary">Underwriting AI</Badge>
                  <Badge variant="secondary">Policy Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Digital Insurance Carriers</li>
                    <li>• Insurance Brokers</li>
                    <li>• Specialty Insurance Providers</li>
                    <li>• Insurance Technology Platforms</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Underwriting Officer</li>
                    <li>• Head of Claims</li>
                    <li>• Digital Transformation Director</li>
                    <li>• Product Development Manager</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Actuarial model integration</li>
                    <li>• Claims fraud detection</li>
                    <li>• Legacy system modernization</li>
                    <li>• Customer onboarding automation</li>
                    <li>• Regulatory compliance variations</li>
                    <li>• Risk assessment accuracy</li>
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