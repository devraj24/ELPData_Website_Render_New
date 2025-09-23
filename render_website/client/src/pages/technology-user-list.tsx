import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Target, BarChart, Settings, Shield } from "lucide-react";

// Technology data mapping
const technologyData: Record<string, any> = {
  "microsoft-word-users-list": {
    name: "Microsoft Word",
    companies: "24,359", // 16,239 * 1.5
    professionals: "4.2M+",
    countries: "95+",
    description: "Connect with companies using Microsoft Word for document creation and collaboration. Target IT administrators, office managers, and decision-makers implementing productivity solutions.",
    category: "Enterprise Applications"
  },
  "intuit-users-list": {
    name: "Intuit",
    companies: "19,280", // 12,853 * 1.5
    professionals: "2.9M+",
    countries: "85+",
    description: "Connect with companies using Intuit financial and business software solutions. Target finance professionals and small business decision-makers.",
    category: "Financial Software"
  },
  "wordpress-users-list": {
    name: "WordPress",
    companies: "18,915", // 12,610 * 1.5
    professionals: "4.8M+",
    countries: "195+",
    description: "Connect with companies using WordPress for content management and web development. Target web developers, marketing professionals, and digital agencies.",
    category: "Content Management"
  },
  "sap-users-list": {
    name: "SAP Enterprise Users",
    companies: "368,700",
    professionals: "440K+",
    countries: "180+",
    description: "Connect with 368.7K+ organizations using SAP enterprise software across manufacturing, financial services, retail, healthcare, and energy sectors. Access comprehensive data on 300+ SAP products including S/4HANA, SuccessFactors, Concur, Ariba, BusinessObjects, HANA, and Analytics Cloud solutions.",
    category: "ERP Systems",
    productCount: "300+",
    featuredProducts: [
      "SAP S/4HANA (245,670 companies)",
      "SAP ERP Central Component (189,234 companies)",
      "SAP SuccessFactors (156,890 companies)",
      "SAP BusinessObjects (142,567 companies)",
      "SAP Concur (134,123 companies)",
      "SAP Ariba (128,456 companies)",
      "SAP HANA Database (119,789 companies)",
      "SAP Analytics Cloud (98,012 companies)",
      "SAP Fieldglass (87,345 companies)",
      "SAP Hybris Commerce (76,678 companies)"
    ]
  },
  "vmware-users-list": {
    name: "VMware Users",
    companies: "391,200",
    professionals: "1.1M+",
    countries: "195+",
    description: "Connect with 391.2K+ companies using VMware virtualization and cloud infrastructure technologies. Access comprehensive data on 200+ VMware products including vSphere, NSX, Horizon, Cloud Foundation, Tanzu, vSAN, Carbon Black, and Workspace ONE solutions.",
    category: "Virtualization & Infrastructure",
    productCount: "200+",
    featuredProducts: [
      "VMware vSphere (298,890 companies)",
      "VMware ESXi (298,567 companies)", 
      "VMware vCenter (187,678 companies)",
      "VMware Workspace ONE (178,456 companies)",
      "VMware Horizon (134,789 companies)",
      "VMware vSAN (134,567 companies)",
      "VMware Workstation (156,123 companies)",
      "VMware NSX (87,901 companies)",
      "VMware Carbon Black (78,123 companies)",
      "VMware Cloud Foundation (52,456 companies)"
    ]
  },
  "peo-users-list": {
    name: "PEO/EOR Services",
    companies: "167,365",
    professionals: "528,992",
    countries: "150+",
    description: "Connect with 167,365 companies using Professional Employer Organization and Employer of Record services including ADP TotalSource, TriNet, Deel, Remote, Justworks, Paychex, and 100+ other providers. Target HR directors, benefits administrators, payroll managers, and global workforce coordinators.",
    category: "Human Resources & Employment Services"
  },
  "oracle-users-list": {
    name: "Oracle Corporation",
    companies: "2.84M", // FORCE CORRECT NUMBER
    professionals: "4.8M+",
    countries: "175+",
    description: "Connect with companies using Oracle Corporation's comprehensive technology ecosystem including Database, Cloud Infrastructure, Java, JD Edwards, PeopleSoft, and 613+ products. Target database administrators, Java developers, JD Edwards consultants, PeopleSoft administrators, and enterprise architects.",
    category: "Database Management"
  },
  "jd-edwards-users-list": {
    name: "JD Edwards",
    companies: "47,982+",
    professionals: "720K+",
    countries: "65+",
    description: "Connect with 47,982+ organizations using JD Edwards ERP systems. Target JDE functional consultants, manufacturing managers, and financial controllers implementing EnterpriseOne and World solutions for complex business operations.",
    category: "ERP Systems"
  },
  "oracle-jd-edwards-users-list": {
    name: "Oracle JD Edwards",
    companies: "47,982+",
    professionals: "720K+", 
    countries: "65+",
    description: "Connect with 47,982+ organizations using JD Edwards ERP systems. Target JDE functional consultants, manufacturing managers, and financial controllers implementing EnterpriseOne and World solutions for complex business operations.",
    category: "ERP Systems"
  },
  "ibm-users-list": {
    name: "IBM Enterprise Users",
    companies: "335,300",
    professionals: "1.2M+",
    countries: "175+",
    description: "Connect with 335.3K+ organizations using IBM enterprise software and cloud technologies. Access comprehensive data on 500+ IBM products including Watson, Cloud Pak, Db2, WebSphere, SPSS, QRadar, and Cognos Analytics solutions.",
    category: "Enterprise Software & Cloud",
    productCount: "500+",
    featuredProducts: [
      "IBM Watson (189,234 companies)",
      "IBM Db2 (156,890 companies)",
      "IBM WebSphere (142,567 companies)",
      "IBM Cloud (134,123 companies)",
      "IBM SPSS (128,456 companies)",
      "IBM Cognos Analytics (119,789 companies)",
      "IBM QRadar (98,012 companies)",
      "IBM MQ (87,345 companies)",
      "IBM Lotus Notes (76,678 companies)",
      "IBM Sterling (65,901 companies)"
    ]
  }
};

export default function TechnologyUserListPage() {
  const params = useParams();
  const technologyKey = params.technology || "";
  
  // Get technology data or use default
  const tech = technologyData[technologyKey] || {
    name: formatTechnologyName(technologyKey),
    companies: "N/A",
    professionals: "N/A",
    countries: "N/A",
    description: `Connect with companies using ${formatTechnologyName(technologyKey)} solutions. Target IT professionals and technology decision-makers.`,
    category: "Technology Solutions"
  };

  function formatTechnologyName(key: string): string {
    return key
      .replace(/-users-list$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const solutions = [
    {
      title: "Enterprise Implementation",
      icon: Building,
      color: "blue",
      badges: ["Enterprise Deployment", "System Integration", "User Training", "Support Services"],
      industries: ["Large Enterprise Organizations", "Multi-national Corporations", "Fortune 500 Companies", "Global Technology Leaders"],
      titles: ["IT Director", "Systems Administrator", "Enterprise Architect", "Technology Manager"],
      challenges: [
        "Large-scale deployment and configuration challenges",
        "Integration with existing enterprise infrastructure",
        "User adoption and training across multiple locations",
        "Performance optimization for high-volume usage",
        "Security and compliance requirements",
        "License management and cost optimization",
        "Vendor relationship and support coordination",
        "Change management and organizational adoption"
      ]
    },
    {
      title: "Business Operations",
      icon: BarChart,
      color: "green",
      badges: ["Process Optimization", "Workflow Management", "Business Intelligence", "Analytics"],
      industries: ["Manufacturing & Production", "Service Industries", "Consulting & Professional Services", "Retail & Distribution"],
      titles: ["Operations Manager", "Business Analyst", "Process Improvement Specialist", "Department Head"],
      challenges: [
        "Business process optimization and automation",
        "Data quality and consistency management",
        "Reporting and analytics requirements",
        "Cross-department collaboration and workflows",
        "Performance metrics and KPI tracking",
        "Regulatory compliance and audit trails",
        "Custom configuration and business rules",
        "Integration with third-party business applications"
      ]
    },
    {
      title: "Technical Administration",
      icon: Settings,
      color: "purple",
      badges: ["System Administration", "Configuration Management", "Performance Tuning", "Maintenance"],
      industries: ["Technology Service Providers", "Managed Service Companies", "IT Consulting Firms", "System Integrators"],
      titles: ["System Administrator", "Technical Lead", "DevOps Engineer", "Infrastructure Specialist"],
      challenges: [
        "System performance monitoring and optimization",
        "Backup and disaster recovery planning",
        "Security patch management and updates",
        "User access control and permissions",
        "System monitoring and alerting",
        "Capacity planning and resource allocation",
        "Troubleshooting and issue resolution",
        "Documentation and knowledge management"
      ]
    },
    {
      title: "User Experience & Training",
      icon: Users,
      color: "orange",
      badges: ["User Training", "Change Management", "Support Services", "Adoption Programs"],
      industries: ["Education & Training Organizations", "Human Resources Departments", "Corporate Training", "End-user Support Teams"],
      titles: ["Training Manager", "Change Management Specialist", "User Experience Manager", "Support Team Lead"],
      challenges: [
        "User adoption and engagement strategies",
        "Training program development and delivery",
        "Change management and resistance handling",
        "Support ticket management and resolution",
        "User feedback collection and analysis",
        "Documentation and help resource creation",
        "Multi-level user training programs",
        "Measuring training effectiveness and ROI"
      ]
    },
    {
      title: "Compliance & Security",
      icon: Shield,
      color: "teal",
      badges: ["Security Management", "Compliance Monitoring", "Risk Assessment", "Audit Preparation"],
      industries: ["Regulated Industries", "Financial Services", "Healthcare Organizations", "Government Agencies"],
      titles: ["Compliance Officer", "Security Administrator", "Risk Manager", "Audit Specialist"],
      challenges: [
        "Regulatory compliance and reporting requirements",
        "Data security and privacy protection",
        "Access control and user authentication",
        "Audit trail and logging management",
        "Risk assessment and mitigation strategies",
        "Security policy enforcement",
        "Vendor security assessment and management",
        "Incident response and recovery procedures"
      ]
    },
    {
      title: "Strategic Planning",
      icon: Target,
      color: "indigo",
      badges: ["Strategic Planning", "Technology Roadmap", "ROI Analysis", "Vendor Management"],
      industries: ["Executive Leadership", "Strategic Planning Departments", "Technology Planning", "Business Development"],
      titles: ["Chief Technology Officer", "IT Strategy Manager", "Business Development Director", "Strategic Planning Analyst"],
      challenges: [
        "Technology roadmap planning and alignment",
        "ROI measurement and business case development",
        "Vendor evaluation and selection processes",
        "Budget planning and cost management",
        "Strategic technology investments",
        "Competitive analysis and market positioning",
        "Stakeholder alignment and communication",
        "Long-term sustainability and scalability planning"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-blue-500",
      green: "border-green-500",
      purple: "border-purple-500",
      orange: "border-orange-500",
      teal: "border-teal-500",
      indigo: "border-indigo-500"
    };
    return colorMap[color] || "border-blue-500";
  };

  const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
      teal: "text-teal-500",
      indigo: "text-indigo-500"
    };
    return colorMap[color] || "text-blue-500";
  };

  const getBgColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50",
      green: "bg-green-50",
      purple: "bg-purple-50",
      orange: "bg-orange-50",
      teal: "bg-teal-50",
      indigo: "bg-indigo-50"
    };
    return colorMap[color] || "bg-blue-50";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">{tech.name} Users List</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {tech.description}
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">{tech.companies}</div>
                  <div className="text-sm text-white/80">Companies Using {tech.name}</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">{tech.professionals}</div>
                  <div className="text-sm text-white/80">Technology Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">{tech.countries}</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Only show for major technologies */}
      {tech.featuredProducts && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-blue-900 mb-4">
                {tech.productCount} {tech.name} Products & Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of {tech.name} technologies and their implementation across organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tech.featuredProducts.map((product: string, index: number) => (
                <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="text-lg font-semibold text-blue-900">
                        {product.split(' (')[0]}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {product.split('(')[1]?.replace(')', '') || 'Available'}
                    </div>
                    <div className="text-sm text-gray-600">
                      Organizations using this {tech.name} solution
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Complete {tech.name} Technology Database
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Access detailed company information, contact data, and implementation details for all {tech.productCount} {tech.name} products and solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{tech.companies}</div>
                    <div className="text-sm text-gray-600">Total Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{tech.productCount}</div>
                    <div className="text-sm text-gray-600">Technology Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{tech.professionals}</div>
                    <div className="text-sm text-gray-600">IT Professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">{tech.name} Implementation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing {tech.name} across various business functions and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className={`border-2 ${getColorClasses(solution.color)}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className={`w-6 h-6 ${getIconColorClasses(solution.color)}`} />
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {tech.name} implementation for {solution.title.toLowerCase()} and organizational efficiency
                    </p>
                    <div className="space-y-2 mb-4">
                      {solution.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-blue-900">Target Industries:</div>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        {solution.industries.map((industry, industryIndex) => (
                          <li key={industryIndex}>• {industry}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={`mt-4 p-3 ${getBgColorClasses(solution.color)} rounded`}>
                      <div className="text-sm font-semibold text-blue-900">Responsible Job Titles:</div>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        {solution.titles.map((title, titleIndex) => (
                          <li key={titleIndex}>• {title}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 rounded">
                      <div className="text-sm font-semibold text-blue-900">Current Challenges:</div>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        {solution.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

