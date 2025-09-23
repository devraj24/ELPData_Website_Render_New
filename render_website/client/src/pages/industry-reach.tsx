import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function IndustryReach() {
  const industryCategories = [
    {
      title: "Technology & Software",
      description: "Connect with tech companies, software vendors, and IT service providers",
      icon: Zap,
      sectors: ["Software Development", "IT Services", "Cloud Computing", "Cybersecurity", "AI/ML"],
      count: "2.8M+",
      color: "bg-blue-500"
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Reach healthcare providers, pharmaceutical, and biotech companies",
      icon: Building2,
      sectors: ["Hospitals", "Pharmaceuticals", "Medical Devices", "Biotech", "Telemedicine"],
      count: "1.9M+",
      color: "bg-green-500"
    },
    {
      title: "Financial Services",
      description: "Target banks, insurance, investment firms, and fintech companies",
      icon: TrendingUp,
      sectors: ["Banking", "Insurance", "Investment", "Fintech", "Asset Management"],
      count: "1.6M+",
      color: "bg-purple-500"
    },
    {
      title: "Manufacturing & Industrial",
      description: "Connect with manufacturers, suppliers, and industrial companies",
      icon: Users,
      sectors: ["Automotive", "Aerospace", "Heavy Machinery", "Electronics", "Chemical"],
      count: "3.2M+",
      color: "bg-orange-500"
    },
    {
      title: "Energy & Utilities",
      description: "Reach energy companies, utilities, and renewable energy firms",
      icon: Globe,
      sectors: ["Oil & Gas", "Renewable Energy", "Utilities", "Mining", "Power Generation"],
      count: "890K+",
      color: "bg-red-500"
    },
    {
      title: "Government & Public Sector",
      description: "Target government agencies, military, and public institutions",
      icon: Target,
      sectors: ["Federal Government", "State & Local", "Military", "Education", "Non-Profit"],
      count: "1.2M+",
      color: "bg-indigo-500"
    }
  ];

  const reachCapabilities = [
    "Industry Classification & Segmentation",
    "Sector-Specific Targeting",
    "Supply Chain Mapping",
    "Competitive Landscape Analysis",
    "Market Size & Growth Tracking",
    "Regulatory Environment Monitoring",
    "Technology Adoption Patterns",
    "Decision-Making Process Analysis",
    "Budget Cycle Alignment",
    "Industry Event & Conference Tracking"
  ];

  const additionalIndustries = [
    {
      title: "Retail & E-commerce",
      description: "Target retail chains, e-commerce platforms, and consumer goods companies",
      icon: Building2,
      sectors: ["Department Stores", "Specialty Retail", "E-commerce", "Consumer Goods", "Fashion"],
      count: "2.6M+",
      color: "bg-cyan-500"
    },
    {
      title: "Education & Training",
      description: "Connect with schools, universities, and educational technology providers",
      icon: Users,
      sectors: ["K-12 Schools", "Higher Education", "EdTech", "Training", "Online Learning"],
      count: "3.9M+",
      color: "bg-emerald-500"
    },
    {
      title: "Media & Entertainment",
      description: "Reach broadcasting, digital media, and entertainment companies",
      icon: Globe,
      sectors: ["Broadcasting", "Digital Media", "Publishing", "Gaming", "Entertainment"],
      count: "1.9M+",
      color: "bg-pink-500"
    },
    {
      title: "Transportation & Logistics",
      description: "Target shipping, logistics, and transportation service providers",
      icon: TrendingUp,
      sectors: ["Freight", "Shipping", "Public Transport", "Aviation", "Supply Chain"],
      count: "2.3M+",
      color: "bg-yellow-500"
    },
    {
      title: "Real Estate & Construction",
      description: "Connect with real estate professionals and construction companies",
      icon: Building2,
      sectors: ["Residential", "Commercial", "Construction", "Property Management", "Development"],
      count: "3.5M+",
      color: "bg-teal-500"
    },
    {
      title: "Hospitality & Tourism",
      description: "Reach hotels, restaurants, and tourism industry professionals",
      icon: Target,
      sectors: ["Hotels", "Restaurants", "Travel", "Event Management", "Tourism"],
      count: "1.9M+",
      color: "bg-rose-500"
    },
    {
      title: "Agriculture & Food",
      description: "Target agricultural producers and food processing companies",
      icon: Globe,
      sectors: ["Crop Production", "Livestock", "Food Processing", "AgTech", "Distribution"],
      count: "2.2M+",
      color: "bg-lime-500"
    },
    {
      title: "Textiles & Apparel",
      description: "Connect with fashion, textiles, and apparel manufacturing companies",
      icon: Zap,
      sectors: ["Fashion Design", "Textile Manufacturing", "Apparel", "Retail Fashion", "Accessories"],
      count: "2.1M+",
      color: "bg-violet-500"
    },
    {
      title: "Furniture & Home Goods",
      description: "Reach furniture manufacturers and home improvement companies",
      icon: Building2,
      sectors: ["Furniture Manufacturing", "Home Decor", "Interior Design", "Home Improvement", "Retail"],
      count: "1.6M+",
      color: "bg-amber-500"
    },
    {
      title: "Sports & Recreation",
      description: "Target sports organizations and recreational facility operators",
      icon: TrendingUp,
      sectors: ["Professional Sports", "Fitness Centers", "Sports Equipment", "Recreation", "Events"],
      count: "1.7M+",
      color: "bg-green-600"
    },
    {
      title: "Beauty & Personal Care",
      description: "Connect with cosmetics, skincare, and personal care companies",
      icon: Target,
      sectors: ["Cosmetics", "Skincare", "Salons & Spas", "Personal Care", "Beauty Retail"],
      count: "1.3M+",
      color: "bg-fuchsia-500"
    },
    {
      title: "Legal Services",
      description: "Reach law firms, legal departments, and judicial institutions",
      icon: Users,
      sectors: ["Law Firms", "Corporate Legal", "Government Legal", "Legal Tech", "Compliance"],
      count: "1.8M+",
      color: "bg-slate-500"
    },
    {
      title: "Consulting Services",
      description: "Target management consultants and professional service firms",
      icon: Globe,
      sectors: ["Management Consulting", "IT Consulting", "Strategy", "Digital Transformation", "Advisory"],
      count: "2.0M+",
      color: "bg-sky-500"
    },
    {
      title: "Marketing & Advertising",
      description: "Connect with marketing agencies and advertising professionals",
      icon: Zap,
      sectors: ["Digital Marketing", "Advertising Agencies", "PR Firms", "Creative Services", "MarTech"],
      count: "1.5M+",
      color: "bg-orange-600"
    },
    {
      title: "Human Resources",
      description: "Reach HR professionals and workforce management companies",
      icon: Users,
      sectors: ["HR Services", "Recruitment", "Training", "HR Technology", "Benefits"],
      count: "1.4M+",
      color: "bg-purple-600"
    },
    {
      title: "Facilities Management",
      description: "Target facility managers and building service providers",
      icon: Building2,
      sectors: ["Building Management", "Maintenance", "Security Services", "Cleaning", "Property Services"],
      count: "1.2M+",
      color: "bg-gray-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industry Reach - Sector-Specific Targeting & Outreach | ELP Data</title>
        <meta name="description" content="Target companies by industry with precision sector-specific outreach. Access 45M+ companies across 60+ industries with detailed market intelligence and contact data." />
        <meta name="keywords" content="industry targeting, sector targeting, vertical marketing, industry outreach, B2B industry data, market segmentation" />
        <link rel="canonical" href="https://www.elpdata.com/industry-reach" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Industry Reach Platform
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Industry-Specific
              <span className="text-green-600 dark:text-green-400"> Outreach</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Target companies with precision industry-specific outreach. Access 45M+ companies across 60+ industries with comprehensive market intelligence, sector trends, and verified contact data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Industries
              </Button>
              <Button variant="outline" size="lg">
                View Market Data
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">45M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Companies Covered</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">60+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Sectors</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">180+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Covered</div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Target by Industry & Sector
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryCategories.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${industry.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{industry.title}</CardTitle>
                          <Badge variant="secondary">{industry.count} companies</Badge>
                        </div>
                      </div>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {industry.sectors.map((sector, sectorIndex) => (
                          <Badge key={sectorIndex} variant="outline" className="text-xs">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Industries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Additional Industry Coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalIndustries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${industry.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{industry.title}</CardTitle>
                          <Badge variant="secondary">{industry.count} companies</Badge>
                        </div>
                      </div>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {industry.sectors.map((sector, sectorIndex) => (
                          <Badge key={sectorIndex} variant="outline" className="text-xs">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Reach Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Industry Intelligence & Targeting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reachCapabilities.map((capability, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{capability}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Expand Your Industry Reach?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start targeting specific industries with Industry Reach's comprehensive sector intelligence. Access detailed company data, market trends, and verified contacts across all major industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Industry Targeting
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}