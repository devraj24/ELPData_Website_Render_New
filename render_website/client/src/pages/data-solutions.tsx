import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Database, Shield, Search, Globe, Users, TrendingUp } from "lucide-react";

const dataSolutions = [
  {
    title: "Business Contact Data",
    description: "Comprehensive database of verified business contacts and decision-makers across all industries",
    icon: <Users className="w-8 h-8 text-primary-teal" />,
    features: [
      "50M+ verified business contacts",
      "Real-time email verification",
      "Direct dial phone numbers",
      "LinkedIn profile matching",
      "GDPR compliant data"
    ],
    industries: ["Technology", "Healthcare", "Finance", "Manufacturing", "Retail"],
    href: "/pages/business_contact_data"
  },
  {
    title: "Data Enrichment Services",
    description: "Enhance your existing customer database with comprehensive firmographic and technographic data",
    icon: <TrendingUp className="w-8 h-8 text-primary-navy" />,
    features: [
      "Company size & revenue data",
      "Technology stack information",
      "Funding & investment details",
      "Social media profiles",
      "Employee count updates"
    ],
    industries: ["SaaS", "Consulting", "Marketing", "Sales", "HR"],
    href: "/pages/data_enrichment_services"
  },
  {
    title: "Data Cleansing & Verification",
    description: "Clean, standardize, and verify your database to improve deliverability and campaign performance",
    icon: <Shield className="w-8 h-8 text-green-600" />,
    features: [
      "Email address validation",
      "Phone number verification",
      "Address standardization",
      "Duplicate removal",
      "Data quality scoring"
    ],
    industries: ["E-commerce", "Banking", "Insurance", "Real Estate", "Education"],
    href: "/pages/data_cleansing_verification"
  },
  {
    title: "Custom Data Research",
    description: "Tailored research services to build targeted prospect lists based on your specific criteria",
    icon: <Search className="w-8 h-8 text-orange-600" />,
    features: [
      "Custom prospect research",
      "Industry-specific targeting",
      "Geographic segmentation",
      "Role-based filtering",
      "Intent data integration"
    ],
    industries: ["B2B Services", "Enterprise Software", "Industrial", "Professional Services", "Government"],
    href: "/pages/custom_data_research"
  },
  {
    title: "Global Business Database",
    description: "Access to comprehensive international business data covering companies worldwide",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    features: [
      "200+ countries covered",
      "Multi-language support",
      "Local business regulations",
      "Currency conversion data",
      "Time zone information"
    ],
    industries: ["Import/Export", "International Trade", "Global Consulting", "Logistics", "Travel"],
    href: "/pages/global_business_database"
  }
];

export default function DataSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Data Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive data solutions to power your business growth. From verified contact databases 
            to custom research services, we provide the data foundation your organization needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6" />
              <span className="text-lg font-semibold">50M+ Verified Contacts</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6" />
              <span className="text-lg font-semibold">200+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Solutions Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">Our Data Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of data solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dataSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary-teal">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-primary-navy text-xl mb-2">{solution.title}</CardTitle>
                      <CardDescription className="text-gray-600">{solution.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-navy mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-navy mb-3">Target Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Link href="/contact-us">
                        <Button className="w-full bg-primary-teal hover:bg-teal-600">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact our data experts to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-primary-teal hover:bg-teal-600 text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-navy px-8 py-3">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}