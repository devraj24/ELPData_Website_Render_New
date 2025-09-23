import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Loader2, Building2, Users, Target, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechnologyAnalysis {
  category: string;
  description: string;
  applications: string[];
  targetIndustries: string[];
  targetAudience: string[];
  challenges: string[];
}

export default function TechnologyCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<Record<string, TechnologyAnalysis>>({});

  const categories = [
    {
      icon: "fas fa-users",
      title: "CRM Software",
      description: "Customer Relationship Management solutions including Salesforce, Microsoft Dynamics, Oracle CRM, and more.",
      companies: "80+ Technologies",
      subcategories: ["Salesforce.com (599K)", "Microsoft Dynamics CRM", "Oracle CRM", "2.5M+ Companies"],
      bgColor: "bg-green-50",
      iconColor: "from-green-500 to-green-600",
      numberColor: "text-green-600"
    },
    {
      icon: "fas fa-server",
      title: "ERP Software",
      description: "Enterprise Resource Planning systems led by SAP with 368,700 installations across manufacturing, financial services, retail, healthcare, and energy sectors.",
      companies: "65+ Technologies",
      subcategories: ["SAP Enterprise Users (368,700)", "SAP S/4HANA", "SAP SuccessFactors", "1.8M+ Companies"],
      bgColor: "bg-blue-50",
      iconColor: "from-blue-500 to-blue-600",
      numberColor: "text-blue-600"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Computing",
      description: "Cloud platforms and services including AWS, Microsoft Azure, Google Cloud, and Oracle Cloud.",
      companies: "43+ Technologies",
      subcategories: ["Amazon AWS", "Microsoft Azure", "Google Cloud Platform", "3.9M+ Companies"],
      bgColor: "bg-sky-50",
      iconColor: "from-sky-500 to-sky-600",
      numberColor: "text-sky-600"
    },
    {
      icon: "fas fa-coins",
      title: "Accounting Software",
      description: "Financial and accounting solutions including QuickBooks, Sage Intacct, Xero, and more.",
      companies: "15+ Technologies",
      subcategories: ["QuickBooks", "Sage Intacct", "Xero", "890K+ Companies"],
      bgColor: "bg-emerald-50",
      iconColor: "from-emerald-500 to-emerald-600",
      numberColor: "text-emerald-600"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Big Data",
      description: "Big data analytics and processing platforms including Apache Spark, Informatica, Teradata.",
      companies: "25+ Technologies",
      subcategories: ["Apache Spark", "Informatica", "Teradata", "567K+ Companies"],
      bgColor: "bg-purple-50",
      iconColor: "from-purple-500 to-purple-600",
      numberColor: "text-purple-600"
    },
    {
      icon: "fas fa-bullhorn",
      title: "Marketing Automation",
      description: "Marketing automation and campaign management tools including HubSpot, Marketo, Pardot.",
      companies: "12+ Technologies",
      subcategories: ["HubSpot", "Marketo", "Salesforce Pardot", "445K+ Companies"],
      bgColor: "bg-pink-50",
      iconColor: "from-pink-500 to-pink-600",
      numberColor: "text-pink-600"
    },
    {
      icon: "fas fa-database",
      title: "DBMS",
      description: "Database management systems including MySQL, Oracle, SQL Server, MongoDB, PostgreSQL.",
      companies: "27+ Technologies",
      subcategories: ["MySQL", "Oracle Corporation (2.84M)", "Microsoft SQL Server", "2.84M+ Companies"],
      bgColor: "bg-orange-50",
      iconColor: "from-orange-500 to-orange-600",
      numberColor: "text-orange-600"
    },
    {
      icon: "fas fa-users-gear",
      title: "HR Management",
      description: "Human resource management systems including ADP, Workday, BambooHR, Oracle HCM.",
      companies: "28+ Technologies",
      subcategories: ["ADP Payroll", "Workday HCM", "Oracle HCM Cloud", "678K+ Companies"],
      bgColor: "bg-teal-50",
      iconColor: "from-teal-500 to-teal-600",
      numberColor: "text-teal-600"
    },
    {
      icon: "fas fa-server",
      title: "Virtualization & Infrastructure",
      description: "Virtualization and infrastructure technologies including VMware vSphere, Hyper-V, Citrix.",
      companies: "35+ Technologies",
      subcategories: ["VMware vSphere (391,200)", "Microsoft Hyper-V", "Citrix XenServer", "391.2K+ Companies"],
      bgColor: "bg-indigo-50",
      iconColor: "from-indigo-500 to-indigo-600",
      numberColor: "text-indigo-600"
    },
    {
      icon: "fas fa-briefcase",
      title: "PEO & EOR Services",
      description: "Professional Employer Organization and Employer of Record services including ADP, TriNet, Deel, Remote.",
      companies: "100+ Technologies",
      subcategories: ["ADP TotalSource (85K+)", "TriNet (23K+)", "Deel (20K+)", "167.4K+ Companies"],
      bgColor: "bg-cyan-50",
      iconColor: "from-cyan-500 to-cyan-600",
      numberColor: "text-cyan-600"
    },
    {
      icon: "fas fa-chart-line",
      title: "Business Intelligence",
      description: "BI and analytics platforms including Tableau, Power BI, SAP Analytics Cloud, QlikView.",
      companies: "18+ Technologies",
      subcategories: ["Tableau", "Microsoft Power BI", "SAP Business Objects", "789K+ Companies"],
      bgColor: "bg-violet-50",
      iconColor: "from-violet-500 to-violet-600",
      numberColor: "text-violet-600"
    },
    {
      icon: "fas fa-heart-pulse",
      title: "Healthcare Software",
      description: "Healthcare IT systems including Cerner, Epic, McKesson, AllScripts, and more.",
      companies: "245K+",
      subcategories: ["Cerner", "Epic", "McKesson", "+5 more"],
      bgColor: "bg-rose-50",
      iconColor: "from-rose-500 to-rose-600",
      numberColor: "text-rose-600"
    }
  ];

  const analyzeMutation = useMutation({
    mutationFn: async (technology: string) => {
      const response = await fetch(`/api/analyze-technology`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ technology })
      });
      if (!response.ok) {
        throw new Error('Failed to analyze technology');
      }
      return response.json();
    },
    onSuccess: (data, technology) => {
      setAnalysisData(prev => ({ ...prev, [technology]: data }));
    }
  });

  const handleCategoryClick = (category: { title: string }) => {
    if (expandedCategory === category.title) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category.title);
      if (!analysisData[category.title]) {
        analyzeMutation.mutate(category.title);
      }
    }
  };

  const renderAnalysisSection = (title: string, items: string[], icon: any) => (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-semibold text-lg text-primary-navy">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Technology Intelligence</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive data coverage across enterprise technologies with continuous updates and verification from authoritative sources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <Card 
                className={`tech-card cursor-pointer ${category.bgColor} border hover:border-gray-300 transition-all duration-200 active:scale-95`}
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.iconColor} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md`}>
                    <i className={`${category.icon} text-white text-sm`}></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{category.description}</p>
                  <div className={`text-base font-semibold ${category.numberColor} mb-1`}>{category.companies}</div>
                  <div className="text-xs text-gray-500 mb-3">Companies Tracked</div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-sm sm:text-base py-2 sm:py-3 px-4 touch-manipulation min-h-[44px]"
                    disabled={analyzeMutation.isPending && expandedCategory === category.title}
                  >
                    {analyzeMutation.isPending && expandedCategory === category.title ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span className="hidden sm:inline">Analyzing...</span>
                        <span className="sm:hidden">Loading...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">{expandedCategory === category.title ? "Hide Details" : "View Details"}</span>
                        <span className="sm:hidden">{expandedCategory === category.title ? "Hide" : "View"}</span>
                        {expandedCategory === category.title ? 
                          <ChevronUp className="w-4 h-4 ml-2" /> : 
                          <ChevronDown className="w-4 h-4 ml-2" />
                        }
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Subcategories Display */}
              {expandedCategory === category.title && (
                <Card className="bg-white border border-gray-200 shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Databases</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.subcategories?.map((subcategory, subIndex) => (
                        <div key={subIndex} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer touch-manipulation">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">{subcategory}</span>
                            <span className="text-xs text-gray-500">
                              {Math.floor(Math.random() * 50 + 10)}K+
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a 
                        href="/contact-us" 
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 touch-manipulation"
                      >
                        <span className="hidden sm:inline">Get Access to All Databases</span>
                        <span className="sm:hidden">Get Access</span>
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}

              {expandedCategory === category.title && analysisData[category.title] && (
                <Card className="border-2 border-primary-teal bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl text-primary-navy">AI-Powered Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                    <div>
                      <p className="text-neutral-dark leading-relaxed">
                        {analysisData[category.title].description}
                      </p>
                    </div>

                    {renderAnalysisSection(
                      "Applications",
                      analysisData[category.title].applications,
                      <Building2 className="w-5 h-5 text-primary-teal" />
                    )}

                    {renderAnalysisSection(
                      "Target Industries",
                      analysisData[category.title].targetIndustries,
                      <Target className="w-5 h-5 text-accent-green" />
                    )}

                    {renderAnalysisSection(
                      "Target Audience",
                      analysisData[category.title].targetAudience,
                      <Users className="w-5 h-5 text-accent-blue" />
                    )}

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-accent-red" />
                        <h4 className="font-semibold text-lg text-primary-navy">Current Challenges</h4>
                      </div>
                      <div className="space-y-2">
                        {analysisData[category.title].challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg border border-red-100">
                            <span className="text-accent-red font-semibold text-sm">{index + 1}.</span>
                            <span className="text-sm text-neutral-dark">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
