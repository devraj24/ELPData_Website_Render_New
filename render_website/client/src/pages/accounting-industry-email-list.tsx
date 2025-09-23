import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Users, Target } from "lucide-react";

export default function AccountingIndustryEmailList() {
  const professionalTitles = [
    {
      title: "Chief Financial Officer",
      description: "Senior executives overseeing financial strategy and operations",
      count: "28,940"
    },
    {
      title: "Accounting Manager",
      description: "Professionals managing accounting teams and financial processes",
      count: "45,720"
    },
    {
      title: "Tax Director",
      description: "Specialists managing tax compliance and strategy",
      count: "18,650"
    },
    {
      title: "Controller",
      description: "Financial professionals overseeing accounting operations",
      count: "32,480"
    },
    {
      title: "CPA Firm Partner",
      description: "Senior partners at certified public accounting firms",
      count: "21,390"
    },
    {
      title: "Financial Analyst",
      description: "Professionals analyzing financial data and trends",
      count: "56,280"
    },
    {
      title: "Audit Manager",
      description: "Professionals managing internal and external audit processes",
      count: "24,670"
    },
    {
      title: "Bookkeeper",
      description: "Professionals maintaining financial records and transactions",
      count: "38,420"
    },
    {
      title: "Forensic Accountant",
      description: "Specialists in financial investigation and litigation support",
      count: "9,840"
    },
    {
      title: "Payroll Manager",
      description: "Professionals managing payroll systems and compliance",
      count: "19,530"
    },
    {
      title: "Budget Analyst",
      description: "Specialists in financial planning and budget management",
      count: "15,780"
    },
    {
      title: "Financial Consultant",
      description: "Independent professionals providing financial advisory services",
      count: "27,290"
    }
  ];

  const industryStats = [
    { label: "Total Contacts", value: "344K+", icon: Users },
    { label: "Job Functions", value: "38+", icon: Target },
    { label: "Industries Covered", value: "15+", icon: TrendingUp },
    { label: "Data Accuracy", value: "95.8%", icon: Calculator }
  ];

  return (
    <>
      <SEOHead 
        title="Accounting Industry Email List - Financial Professional Contacts | ELP Data"
        description="Connect with accounting professionals, CFOs, controllers, and financial analysts. Access verified contacts across accounting firms, corporations, and financial services."
        keywords="accounting industry email list, CPA contacts, financial professional database, accounting manager emails"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Accounting & Finance Industry
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Accounting Industry Email List
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with accounting professionals, CFOs, controllers, and financial analysts 
              across accounting firms, corporations, and financial services organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get Contact List
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Sample Data
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industryStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Titles */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Accounting & Finance Professional Contacts
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {professionalTitles.map((title, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=accounting&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Connect with Accounting Professionals?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access verified contacts of CFOs, controllers, and accounting managers 
              to grow your business in the financial services sector.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Get Complete Database
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}