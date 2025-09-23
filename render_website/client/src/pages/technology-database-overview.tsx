import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Building2, TrendingUp, Download, ArrowRight, Database, Cloud, Shield, Code, BarChart3, MessageSquare, Settings, Briefcase, Heart, Globe } from "lucide-react";

export default function TechnologyDatabaseOverview() {
  const [searchQuery, setSearchQuery] = useState("");

  const technologyCategories = [
    {
      name: "CRM Software",
      count: "80+",
      icon: Users,
      color: "blue",
      link: "/crm-technologies",
      description: "Customer Relationship Management solutions including Salesforce, Microsoft Dynamics, Oracle CRM, and more.",
      totalCompanies: "2.5M+",
      featured: ["Salesforce.com (599K+)", "Microsoft Dynamics CRM", "Oracle CRM", "SAP CRM", "Zoho CRM"]
    },
    {
      name: "ERP Software",
      count: "65+",
      icon: Building2,
      color: "green",
      link: "/sap-users-list",
      description: "Enterprise Resource Planning systems led by SAP with 368.7K+ installations across manufacturing, financial services, retail, healthcare, and energy sectors.",
      totalCompanies: "1.8M+",
      featured: ["SAP Enterprise Users (368.7K+)", "SAP S/4HANA", "SAP SuccessFactors", "SAP Concur", "SAP Ariba"]
    },
    {
      name: "Cloud Computing",
      count: "43+",
      icon: Cloud,
      color: "purple",
      link: "/cloud-computing-technologies",
      description: "Cloud platforms and services including AWS, Microsoft Azure, Google Cloud, and Oracle Cloud.",
      totalCompanies: "3.9M+",
      featured: ["Amazon AWS", "Microsoft Azure", "Google Cloud Platform", "Oracle Cloud", "IBM Cloud"]
    },
    {
      name: "Accounting Software",
      count: "15+",
      icon: BarChart3,
      color: "orange",
      link: "/accounting-technologies",
      description: "Financial and accounting solutions including QuickBooks, Sage Intacct, Xero, and more.",
      totalCompanies: "890K+",
      featured: ["QuickBooks", "Sage Intacct", "Xero", "Zoho Books", "FreshBooks"]
    },
    {
      name: "Big Data",
      count: "25+",
      icon: Database,
      color: "indigo",
      link: "/big-data-technologies",
      description: "Big data analytics and processing platforms including Apache Spark, Informatica, Teradata.",
      totalCompanies: "567K+",
      featured: ["Apache Spark", "Informatica", "Teradata", "Apache Hadoop", "Cloudera"]
    },
    {
      name: "Marketing Automation",
      count: "12+",
      icon: TrendingUp,
      color: "pink",
      link: "/marketing-automation-technologies",
      description: "Marketing automation and campaign management tools including HubSpot, Marketo, Pardot.",
      totalCompanies: "445K+",
      featured: ["HubSpot", "Marketo", "Salesforce Pardot", "Oracle Eloqua", "InfusionSoft"]
    },
    {
      name: "DBMS",
      count: "27+",
      icon: Settings,
      color: "cyan",
      link: "/dbms-technologies",
      description: "Database management systems including MySQL, Oracle, SQL Server, MongoDB, PostgreSQL.",
      totalCompanies: "2.1M+",
      featured: ["MySQL", "Oracle Corporation", "Microsoft SQL Server", "MongoDB", "PostgreSQL"]
    },
    {
      name: "HR Management",
      count: "28+",
      icon: Users,
      color: "emerald",
      link: "/hr-management-technologies",
      description: "Human resource management systems including ADP, Workday, BambooHR, Oracle HCM.",
      totalCompanies: "678K+",
      featured: ["ADP Payroll", "Workday HCM", "Oracle HCM Cloud", "BambooHR", "SAP SuccessFactors"]
    },
    {
      name: "Virtualization & Infrastructure",
      count: "35+",
      icon: Cloud,
      color: "slate",
      link: "/vmware-users-list",
      description: "Virtualization and infrastructure technologies including VMware vSphere, Hyper-V, Citrix.",
      totalCompanies: "391.2K+",
      featured: ["VMware vSphere (391.2K+)", "Microsoft Hyper-V", "Citrix XenServer", "Red Hat Virtualization", "Oracle VM"]
    },
    {
      name: "PEO & EOR Services",
      count: "100+",
      icon: Building2,
      color: "indigo",
      link: "/peo-users-list",
      description: "Professional Employer Organization and Employer of Record services including ADP, TriNet, Deel, Remote.",
      totalCompanies: "167.4K+",
      featured: ["ADP TotalSource (85K+)", "TriNet (23K+)", "Deel (20K+)", "Remote (15K+)", "Justworks (12K+)"]
    },
    {
      name: "Business Intelligence",
      count: "18+",
      icon: BarChart3,
      color: "violet",
      link: "/business-intelligence-technologies",
      description: "BI and analytics platforms including Tableau, Power BI, SAP Analytics Cloud, QlikView.",
      totalCompanies: "789K+",
      featured: ["Tableau", "Microsoft Power BI", "SAP Business Objects", "QlikView", "IBM Cognos"]
    },
    {
      name: "Collaboration Software",
      count: "15+",
      icon: MessageSquare,
      color: "teal",
      link: "/collaboration-technologies",
      description: "Team collaboration and communication tools including Slack, Microsoft Teams, SharePoint.",
      totalCompanies: "1.2M+",
      featured: ["Microsoft Teams", "Slack", "Microsoft SharePoint", "Salesforce Chatter", "Zoom"]
    },
    {
      name: "E-commerce Software",
      count: "12+",
      icon: Briefcase,
      color: "amber",
      link: "/ecommerce-technologies",
      description: "E-commerce platforms including Shopify, Magento, WooCommerce, BigCommerce, SAP Hybris.",
      totalCompanies: "534K+",
      featured: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "SAP Hybris"]
    },
    {
      name: "Healthcare Software",
      count: "8+",
      icon: Heart,
      color: "red",
      link: "/healthcare-technologies",
      description: "Healthcare IT systems including Cerner, Epic, McKesson, AllScripts, and more.",
      totalCompanies: "245K+",
      featured: ["Cerner", "Epic", "McKesson", "AllScripts", "Availity"]
    },
    {
      name: "Enterprise Applications",
      count: "95+",
      icon: Building2,
      color: "slate",
      link: "/enterprise-applications",
      description: "Enterprise business applications including Microsoft Office, Adobe Creative Suite, Oracle Applications.",
      totalCompanies: "4.2M+",
      featured: ["Microsoft Word", "Microsoft Excel", "Adobe Photoshop", "Oracle Applications", "Microsoft Project"]
    },
    {
      name: "Security Software",
      count: "45+",
      icon: Shield,
      color: "red",
      link: "/security-technologies",
      description: "Cybersecurity and data protection solutions including Symantec, McAfee, Trend Micro, Palo Alto.",
      totalCompanies: "1.1M+",
      featured: ["Symantec Endpoint Protection", "McAfee", "Trend Micro", "Palo Alto Networks", "CrowdStrike"]
    },
    {
      name: "Development Tools",
      count: "38+",
      icon: Code,
      color: "emerald",
      link: "/development-technologies",
      description: "Software development platforms including Visual Studio, Eclipse, GitHub, Jenkins, Docker.",
      totalCompanies: "765K+",
      featured: ["Visual Studio", "GitHub", "Jenkins", "Docker", "Kubernetes"]
    },
    {
      name: "Productivity Software",
      count: "32+",
      icon: Briefcase,
      color: "blue",
      link: "/productivity-technologies",
      description: "Office productivity and collaboration tools including Microsoft Office Suite, Google Workspace.",
      totalCompanies: "3.8M+",
      featured: ["Microsoft Office 365", "Google Workspace", "Slack", "Zoom", "Dropbox"]
    },
    {
      name: "Financial Software",
      count: "28+",
      icon: BarChart3,
      color: "green",
      link: "/financial-technologies",
      description: "Financial management and trading platforms including Bloomberg, Thomson Reuters, Intuit QuickBooks.",
      totalCompanies: "612K+",
      featured: ["Bloomberg Terminal", "Thomson Reuters Eikon", "QuickBooks Enterprise", "Sage 50", "Xero"]
    },
    {
      name: "Construction Software",
      count: "22+",
      icon: Building2,
      color: "orange",
      link: "/construction-technologies",
      description: "Construction management and design tools including AutoCAD, Procore, PlanGrid, Bentley MicroStation.",
      totalCompanies: "385K+",
      featured: ["AutoCAD", "Procore", "PlanGrid", "Bentley MicroStation", "Trimble SketchUp"]
    },
    {
      name: "Transportation & Logistics",
      count: "18+",
      icon: Globe,
      color: "indigo",
      link: "/transportation-technologies",
      description: "Transportation management systems including Manhattan TMS, Oracle Transportation, SAP TM.",
      totalCompanies: "298K+",
      featured: ["Manhattan TMS", "Oracle Transportation", "SAP Transportation Management", "JDA TMS", "BluJay Solutions"]
    },
    {
      name: "Education Software",
      count: "25+",
      icon: Heart,
      color: "purple",
      link: "/education-technologies",
      description: "Educational technology platforms including Blackboard, Canvas, Moodle, Schoology.",
      totalCompanies: "156K+",
      featured: ["Blackboard", "Canvas LMS", "Moodle", "Schoology", "Google Classroom"]
    },
    {
      name: "Manufacturing Software",
      count: "35+",
      icon: Settings,
      color: "gray",
      link: "/manufacturing-technologies",
      description: "Manufacturing execution systems including Wonderware, GE iFIX, Rockwell FactoryTalk.",
      totalCompanies: "445K+",
      featured: ["Wonderware", "GE iFIX", "Rockwell FactoryTalk", "Siemens WinCC", "Honeywell Experion"]
    },
    {
      name: "Media & Entertainment",
      count: "15+",
      icon: Heart,
      color: "pink",
      link: "/media-technologies",
      description: "Media production and broadcasting tools including Avid Media Composer, Adobe Premiere Pro.",
      totalCompanies: "2.84M",
      featured: ["Avid Media Composer", "Adobe Premiere Pro", "Final Cut Pro", "Blackmagic DaVinci", "Autodesk Maya"]
    }
  ];

  const filteredCategories = searchQuery.trim() === "" 
    ? technologyCategories 
    : technologyCategories.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.featured.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const totalTechnologies = technologyCategories.reduce((sum, cat) => sum + parseInt(cat.count.replace('+', '')), 0);
  const totalCompanies = "25M+";

  return (
    <>
      <SEOHead 
        title="Technology Database Overview - 500+ Technology Customer Lists | ELP Data"
        description="Comprehensive technology intelligence platform with 500+ software customer databases across CRM, ERP, Cloud Computing, and more. Access verified business contacts."
        keywords="technology database, software customer lists, technology intelligence, business contacts database"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Complete Technology Intelligence</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Technology Database Overview
                <span className="block text-blue-600">500+ Software Customer Lists</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                The most comprehensive technology intelligence platform with verified customer databases across 
                all major software categories. Access decision-makers, IT professionals, and technology users worldwide.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search technology categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                />
              </div>
            </div>

            {/* Global Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Database className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{totalTechnologies}+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{totalCompanies}</div>
                <div className="text-gray-600">Company Records</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Globe className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">195</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Categories Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Categories</h2>
              <p className="text-xl text-gray-600">
                {searchQuery ? `Found ${filteredCategories.length} categories matching "${searchQuery}"` : `Explore ${technologyCategories.length} comprehensive technology categories`}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => {
                const IconComponent = category.icon;
                const colorClasses = {
                  blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
                  green: "from-green-50 to-green-100 border-green-200 text-green-600",
                  purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
                  orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
                  indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
                  pink: "from-pink-50 to-pink-100 border-pink-200 text-pink-600",
                  cyan: "from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-600",
                  emerald: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-600",
                  violet: "from-violet-50 to-violet-100 border-violet-200 text-violet-600",
                  teal: "from-teal-50 to-teal-100 border-teal-200 text-teal-600",
                  amber: "from-amber-50 to-amber-100 border-amber-200 text-amber-600",
                  red: "from-red-50 to-red-100 border-red-200 text-red-600"
                };

                return (
                  <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-10 h-10" />
                        <Badge variant="secondary" className="bg-white/80">
                          {category.count} Technologies
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-800 mb-2">
                          {category.totalCompanies} Companies
                        </div>
                        <div className="text-sm text-gray-600 mb-2">Featured Technologies:</div>
                        <div className="flex flex-wrap gap-1">
                          {category.featured.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-white/60 px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                          {category.featured.length > 3 && (
                            <span className="text-xs bg-white/60 px-2 py-1 rounded-full">
                              +{category.featured.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full group-hover:scale-105 transition-transform"
                        onClick={() => window.location.href = category.link}
                      >
                        Explore Database <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredCategories.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No technology categories found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                  className="mt-4"
                >
                  Show All Categories
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Technology Database?</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>Verified & Compliant Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All data is GDPR compliant, CAN-SPAM compliant, and verified through multiple touchpoints for maximum accuracy.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Code className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle>Technographic Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Detailed technology stack information including versions, implementations, integrations, and adoption patterns.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                  <CardTitle>Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Continuously updated database with new implementations, migrations, and technology changes across industries.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Access Our Complete Technology Database?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get instant access to verified customer lists across 500+ technologies. Perfect for software vendors, consultants, and technology service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}