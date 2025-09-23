import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { 
  Users, Shield, FileText, Calculator, 
  Clock, Award, Building, CheckCircle, DollarSign
} from "lucide-react";

export default function PEOUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">PEO Service Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 167,365+ organizations using Professional Employer Organization services. Target HR directors, business owners, and operations managers leveraging PEO solutions for payroll, benefits, compliance, and workforce management across diverse industries.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">167,365</div>
                  <div className="text-sm text-white/80">PEO Client Companies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">528,992</div>
                  <div className="text-sm text-white/80">Professional Contacts</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">$6.2B</div>
                  <div className="text-sm text-white/80">PEO Market Size</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PEO Service Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">PEO Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major Professional Employer Organization service areas and client industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-green-500" />
                  Payroll & Tax Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete payroll processing, tax administration, and compliance management services
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Payroll Processing</Badge>
                  <Badge variant="secondary">Tax Administration</Badge>
                  <Badge variant="secondary">Direct Deposit</Badge>
                  <Badge variant="secondary">Pay Statements</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Professional Services</li>
                    <li>• Healthcare Practices</li>
                    <li>• Construction Companies</li>
                    <li>• Technology Startups</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-green-900">Key Decision Makers:</div>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Business Owners</li>
                    <li>• Finance Managers</li>
                    <li>• HR Directors</li>
                    <li>• Operations Managers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                  Benefits Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive employee benefits management including health insurance and retirement plans
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Health Insurance</Badge>
                  <Badge variant="secondary">Retirement Plans</Badge>
                  <Badge variant="secondary">Life Insurance</Badge>
                  <Badge variant="secondary">Flexible Spending</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Manufacturing</li>
                    <li>• Retail & Hospitality</li>
                    <li>• Non-profit Organizations</li>
                    <li>• Financial Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <div className="text-sm font-semibold text-blue-900">Key Decision Makers:</div>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Benefits Administrators</li>
                    <li>• HR Managers</li>
                    <li>• Chief Executive Officers</li>
                    <li>• Employee Relations Managers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-500" />
                  HR Compliance & Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Employment law compliance, risk management, and workers' compensation administration
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Employment Law</Badge>
                  <Badge variant="secondary">Workers' Comp</Badge>
                  <Badge variant="secondary">OSHA Compliance</Badge>
                  <Badge variant="secondary">Risk Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Construction & Trades</li>
                    <li>• Healthcare Facilities</li>
                    <li>• Transportation & Logistics</li>
                    <li>• Food Service & Hospitality</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <div className="text-sm font-semibold text-purple-900">Key Decision Makers:</div>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Compliance Officers</li>
                    <li>• Risk Managers</li>
                    <li>• Safety Directors</li>
                    <li>• Legal Counsel</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  Employee Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete employee lifecycle management from onboarding to performance tracking
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Onboarding</Badge>
                  <Badge variant="secondary">Performance Reviews</Badge>
                  <Badge variant="secondary">Training Programs</Badge>
                  <Badge variant="secondary">Employee Relations</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Professional Services</li>
                    <li>• Technology Companies</li>
                    <li>• Real Estate Firms</li>
                    <li>• Consulting Agencies</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <div className="text-sm font-semibold text-orange-900">Key Decision Makers:</div>
                  <ul className="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• HR Directors</li>
                    <li>• Talent Acquisition Managers</li>
                    <li>• Operations Directors</li>
                    <li>• Office Managers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-500" />
                  Time & Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced time tracking, scheduling, and attendance management systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Time Tracking</Badge>
                  <Badge variant="secondary">Scheduling</Badge>
                  <Badge variant="secondary">Overtime Management</Badge>
                  <Badge variant="secondary">Leave Management</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Retail & Restaurant</li>
                    <li>• Healthcare Services</li>
                    <li>• Manufacturing Plants</li>
                    <li>• Security Services</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-red-900">Key Decision Makers:</div>
                  <ul className="text-sm text-red-700 mt-2 space-y-1">
                    <li>• Operations Managers</li>
                    <li>• Scheduling Coordinators</li>
                    <li>• Payroll Administrators</li>
                    <li>• Department Supervisors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-indigo-500" />
                  Multi-State Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complex multi-state compliance and workforce management for distributed organizations
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">State Compliance</Badge>
                  <Badge variant="secondary">Multi-Location</Badge>
                  <Badge variant="secondary">Remote Workforce</Badge>
                  <Badge variant="secondary">Regulatory Updates</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Franchise Operations</li>
                    <li>• National Retailers</li>
                    <li>• Distributed Teams</li>
                    <li>• Service Providers</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <div className="text-sm font-semibold text-indigo-900">Key Decision Makers:</div>
                  <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                    <li>• Regional Managers</li>
                    <li>• Compliance Directors</li>
                    <li>• Multi-State HR Managers</li>
                    <li>• Business Development Directors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major PEO Providers Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Major PEO & EOR Providers & Their Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access contact data from organizations using leading Professional Employer Organization and Employer of Record services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-blue-900">ADP TotalSource®</div>
              <div className="text-xs text-gray-600 mt-1">85K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-green-900">TriNet</div>
              <div className="text-xs text-gray-600 mt-1">23K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-purple-900">Justworks</div>
              <div className="text-xs text-gray-600 mt-1">12K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-orange-900">Paychex</div>
              <div className="text-xs text-gray-600 mt-1">18K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-red-900">Rippling</div>
              <div className="text-xs text-gray-600 mt-1">8K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-indigo-900">CoAdvantage</div>
              <div className="text-xs text-gray-600 mt-1">7K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-gray-900">Vensure</div>
              <div className="text-xs text-gray-600 mt-1">6K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-teal-900">FrankCrum</div>
              <div className="text-xs text-gray-600 mt-1">5K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-cyan-900">Emplicity</div>
              <div className="text-xs text-gray-600 mt-1">4K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-pink-900">XcelHR</div>
              <div className="text-xs text-gray-600 mt-1">3K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-yellow-900">Oasis Paychex</div>
              <div className="text-xs text-gray-600 mt-1">2.5K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-lime-900">Engage PEO</div>
              <div className="text-xs text-gray-600 mt-1">2K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-violet-900">Remote</div>
              <div className="text-xs text-gray-600 mt-1">15K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-emerald-900">Deel</div>
              <div className="text-xs text-gray-600 mt-1">20K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-slate-900">Papaya Global</div>
              <div className="text-xs text-gray-600 mt-1">3K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-amber-900">Globalization Partners</div>
              <div className="text-xs text-gray-600 mt-1">4K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-rose-900">Velocity Global</div>
              <div className="text-xs text-gray-600 mt-1">2.8K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-sky-900">Atlas</div>
              <div className="text-xs text-gray-600 mt-1">1.5K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-stone-900">Omnipresent</div>
              <div className="text-xs text-gray-600 mt-1">2.2K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-fuchsia-900">Oyster</div>
              <div className="text-xs text-gray-600 mt-1">1.8K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-zinc-900">Workthere</div>
              <div className="text-xs text-gray-600 mt-1">1.2K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-neutral-900">CXC Global</div>
              <div className="text-xs text-gray-600 mt-1">1K+ clients</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="font-semibold text-sm text-teal-800">WorkMotion</div>
              <div className="text-xs text-gray-600 mt-1">900+ clients</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete PEO & EOR Provider Coverage</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 text-sm">
              <span className="text-gray-700">Abel HR</span>
              <span className="text-gray-700">Amplify HR</span>
              <span className="text-gray-700">Aspen HR</span>
              <span className="text-gray-700">BlueWave HR</span>
              <span className="text-gray-700">Central Staff</span>
              <span className="text-gray-700">CertiPay</span>
              <span className="text-gray-700">Cognos HR</span>
              <span className="text-gray-700">Cornerstone</span>
              <span className="text-gray-700">CountryWide HR</span>
              <span className="text-gray-700">Decision HR</span>
              <span className="text-gray-700">Employees Only</span>
              <span className="text-gray-700">Employers Resource</span>
              <span className="text-gray-700">Extensis</span>
              <span className="text-gray-700">Group Management</span>
              <span className="text-gray-700">Human Resources Inc</span>
              <span className="text-gray-700">Infiniti HR</span>
              <span className="text-gray-700">Innovative Employer</span>
              <span className="text-gray-700">KTimeHR</span>
              <span className="text-gray-700">Kymberly Group</span>
              <span className="text-gray-700">Legacy HR</span>
              <span className="text-gray-700">MidwestHR</span>
              <span className="text-gray-700">My Back Office</span>
              <span className="text-gray-700">Nextep</span>
              <span className="text-gray-700">OneSource</span>
              <span className="text-gray-700">Optimum Employer</span>
              <span className="text-gray-700">Partners</span>
              <span className="text-gray-700">PEO Worldwide</span>
              <span className="text-gray-700">Prestige PEO</span>
              <span className="text-gray-700">Questco</span>
              <span className="text-gray-700">Resourcing Edge</span>
              <span className="text-gray-700">Safeguard Global</span>
              <span className="text-gray-700">Simploy</span>
              <span className="text-gray-700">SouthEast Personnel</span>
              <span className="text-gray-700">Staff One</span>
              <span className="text-gray-700">StaffScapes</span>
              <span className="text-gray-700">Tandem HR</span>
              <span className="text-gray-700">Vested HR</span>
              <span className="text-gray-700">American Time & Labor</span>
              <span className="text-gray-700">Compensation Solutions</span>
              <span className="text-blue-800">Remote</span>
              <span className="text-blue-800">Deel</span>
              <span className="text-blue-800">Papaya Global</span>
              <span className="text-blue-800">Globalization Partners</span>
              <span className="text-blue-800">Velocity Global</span>
              <span className="text-blue-800">Atlas</span>
              <span className="text-blue-800">Omnipresent</span>
              <span className="text-blue-800">Oyster</span>
              <span className="text-blue-800">Workthere</span>
              <span className="text-blue-800">CXC Global</span>
              <span className="text-blue-800">WorkMotion</span>
              <span className="text-blue-800">Multiplier</span>
              <span className="text-blue-800">Horizons</span>
              <span className="text-blue-800">RemotePass</span>
              <span className="text-blue-800">Lano</span>
              <span className="text-blue-800">Boundless</span>
              <span className="text-blue-800">Airswift</span>
              <span className="text-blue-800">Elements Global Services</span>
              <span className="text-blue-800">Shield GEO</span>
              <span className="text-blue-800">GoGlobal</span>
              <span className="text-blue-800">INS Global</span>
              <span className="text-blue-800">New Horizons Global Partners</span>
              <span className="text-blue-800">G-P (Globalization Partners)</span>
              <span className="text-blue-800">Activus Connect</span>
              <span className="text-blue-800">Acumen International</span>
              <span className="text-blue-800">Borderless</span>
              <span className="text-blue-800">Global Employment Outsourcing</span>
              <span className="text-blue-800">+ 100 More EOR Providers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get Contacts Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Get PEO User Contacts
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access detailed contact information for 167,365+ organizations using Professional Employer Organization services. 
            Target HR decision makers, business owners, and operations managers with accurate, up-to-date professional data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">167,365</div>
              <div className="text-sm text-gray-600">PEO Client Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">528,992</div>
              <div className="text-sm text-gray-600">Professional Records</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">96%</div>
              <div className="text-sm text-gray-600">Data Accuracy</div>
            </div>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Get PEO Contacts
          </Button>
        </div>
      </section>
    </div>
  );
}