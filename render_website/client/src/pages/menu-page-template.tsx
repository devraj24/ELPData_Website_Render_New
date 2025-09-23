import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Target, Shield, BarChart, CheckCircle } from "lucide-react";

// Menu page data mapping based on ELP Data's authentic services
const menuPageData: Record<string, any> = {
  "data-enrichment-services": {
    title: "Data Enrichment Services",
    subtitle: "Enhance your existing customer data with comprehensive business intelligence",
    description: "Transform incomplete contact records into comprehensive business profiles with our advanced data enrichment solutions. Our data enrichment platform appends missing information to your existing customer and prospect databases, providing deeper insights into your target audience.",
    stats: [
      { label: "Data Points Enhanced", value: "500M+" },
      { label: "Accuracy Rate", value: "95%+" },
      { label: "Processing Speed", value: "Real-time" }
    ],
    category: "Data Solutions",
    features: [
      "Contact Information Enhancement",
      "Firmographic Data Appending", 
      "Technographic Intelligence",
      "Behavioral Data Insights"
    ],
    benefits: [
      "Complete customer profiles for better targeting",
      "Improved lead scoring and qualification",
      "Enhanced personalization capabilities",
      "Better campaign ROI and conversion rates"
    ],
    details: "Our comprehensive data enrichment services help businesses complete their customer profiles by appending missing contact details, company information, and behavioral insights. We match your existing records against our premium database of over 50 million business contacts to fill gaps in your data."
  },
  "data-cleansing-verification": {
    title: "Data Cleansing & Verification",
    subtitle: "Ensure data accuracy and deliverability across your entire database",
    description: "Eliminate duplicate records, validate contact information, and maintain clean, actionable data for maximum campaign effectiveness. Our comprehensive data cleansing services ensure your marketing databases are accurate, up-to-date, and compliant with industry standards.",
    stats: [
      { label: "Records Verified", value: "1B+" },
      { label: "Duplicate Removal", value: "99.9%" },
      { label: "Email Validation", value: "Real-time" }
    ],
    category: "Data Solutions",
    features: [
      "Email Address Verification",
      "Phone Number Validation",
      "Duplicate Record Removal",
      "Address Standardization"
    ],
    benefits: [
      "Improved email deliverability rates",
      "Reduced bounce-back rates",
      "Enhanced data quality scores",
      "Better campaign performance metrics"
    ],
    details: "Our data cleansing and verification services use advanced algorithms and real-time validation to ensure your contact database maintains the highest quality standards. We verify email addresses, validate phone numbers, standardize addresses, and remove duplicate records to optimize your marketing efforts."
  },
  "custom-data-research": {
    title: "Custom Data Research",
    subtitle: "Tailored data solutions for your unique business requirements",
    description: "Our research specialists create custom datasets and prospect lists based on your specific targeting criteria and business objectives. When standard data solutions don't meet your unique requirements, our custom research team develops bespoke data solutions tailored to your exact specifications.",
    stats: [
      { label: "Custom Projects", value: "10K+" },
      { label: "Research Specialists", value: "50+" },
      { label: "Delivery Time", value: "2-5 Days" }
    ],
    category: "Data Solutions",
    features: [
      "Custom Prospect List Building",
      "Specialized Industry Research",
      "Targeted Account Identification",
      "Competitive Intelligence Gathering"
    ],
    benefits: [
      "Precise targeting for niche markets",
      "Access to hard-to-find contacts",
      "Competitive advantage through unique insights",
      "Customized data fields and formats"
    ],
    details: "Our custom data research services provide specialized intelligence gathering for unique business requirements. Our team of research specialists can build custom prospect lists, conduct market research, identify key decision-makers in specific organizations, and provide competitive intelligence that standard databases cannot deliver."
  },
  "global-business-database": {
    title: "Global Business Database",
    subtitle: "Access comprehensive business information from around the world",
    description: "Our global database provides verified business contacts and company intelligence across 195+ countries and territories.",
    stats: [
      { label: "Global Companies", value: "12M+" },
      { label: "Countries Covered", value: "195+" },
      { label: "Contact Records", value: "50M+" }
    ],
    category: "Data Solutions"
  },
  "data-appending": {
    title: "Data Appending Services",
    subtitle: "Enhance your customer database with missing contact information and firmographics",
    description: "Add missing email addresses, phone numbers, job titles, and company information to your existing customer records. Our data appending service fills gaps in your database with verified, up-to-date business intelligence from our comprehensive database of 50+ million business contacts.",
    stats: [
      { label: "Records Enhanced", value: "300M+" },
      { label: "Match Rate", value: "85%" },
      { label: "Data Sources", value: "500+" }
    ],
    category: "Data Enhancement",
    features: [
      "Email Address Appending",
      "Phone Number Enhancement", 
      "Job Title & Role Data",
      "Company Firmographics",
      "Technology Stack Data",
      "Revenue & Employee Count"
    ],
    benefits: [
      "Complete customer profiles for better targeting",
      "Improved lead scoring and qualification",
      "Higher campaign response rates",
      "Enhanced personalization capabilities"
    ],
    details: "Our data appending service matches your existing customer records against our comprehensive database of 50+ million business contacts. We add missing contact details, job titles, company information, and technology usage data to create complete customer profiles for more effective marketing campaigns."
  },
  "data-integration": {
    title: "Data Integration Solutions",
    subtitle: "Seamlessly connect and synchronize data across all your business systems",
    description: "Integrate data from multiple sources including CRM, ERP, marketing automation, and external databases. Our integration platform ensures real-time data flow and consistency across your entire technology stack with support for Salesforce, HubSpot, Microsoft Dynamics, Oracle, SAP, and 50+ other business systems.",
    stats: [
      { label: "Platform Integrations", value: "50+" },
      { label: "Data Sync Speed", value: "Real-time" },
      { label: "Uptime Guarantee", value: "99.9%" }
    ],
    category: "Data Management",
    features: [
      "CRM Integration",
      "ERP Synchronization",
      "API Development",
      "Real-time Data Sync",
      "Custom Workflows",
      "Automated Data Mapping"
    ],
    benefits: [
      "Unified data view across all systems",
      "Eliminated data silos",
      "Improved decision making",
      "Reduced manual data entry"
    ],
    details: "Our data integration platform connects with leading business systems to provide seamless data synchronization. We offer real-time data synchronization, automated workflows, and custom API development to ensure your data flows efficiently across all platforms."
  },
  "data-management": {
    title: "Data Management & Governance",
    subtitle: "Comprehensive data governance solutions for enterprise organizations",
    description: "Establish data quality standards, compliance frameworks, and governance policies. Our data management platform ensures your organization maintains high-quality, compliant, and secure data assets with GDPR, CCPA, and SOX compliance frameworks, automated quality monitoring, and role-based access controls.",
    stats: [
      { label: "Data Quality Score", value: "95%+" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Processing Volume", value: "10TB+" }
    ],
    category: "Data Governance",
    features: [
      "Quality Monitoring",
      "Compliance Framework",
      "Data Lifecycle Management",
      "Access Controls",
      "Data Lineage Tracking",
      "Audit Trail Management"
    ],
    benefits: [
      "Regulatory compliance assurance",
      "Improved data quality standards",
      "Risk mitigation and security",
      "Operational efficiency gains"
    ],
    details: "Our enterprise data management solution includes comprehensive governance policies and maintains the highest standards of data quality and security. We provide automated quality monitoring, data lineage tracking, and role-based access controls for complete data oversight."
  },
  "data-analytics": {
    title: "Advanced Data Analytics",
    subtitle: "Transform raw data into actionable business insights with predictive analytics",
    description: "Leverage machine learning algorithms, predictive modeling, and advanced analytics to uncover hidden patterns in your data. Our analytics platform delivers real-time insights that drive strategic business decisions with customizable dashboards and automated reporting.",
    stats: [
      { label: "Data Points Analyzed", value: "1B+" },
      { label: "Prediction Accuracy", value: "92%" },
      { label: "Report Generation", value: "Automated" }
    ],
    category: "Business Intelligence",
    features: [
      "Predictive Modeling",
      "Customer Segmentation",
      "Performance Dashboards",
      "Custom Reports",
      "Trend Analysis",
      "ROI Optimization"
    ],
    benefits: [
      "Data-driven strategic decisions",
      "Revenue optimization insights",
      "Deep customer understanding",
      "Competitive market advantage"
    ],
    details: "Our advanced analytics platform uses machine learning algorithms to analyze customer behavior, predict market trends, and identify growth opportunities. We provide customizable dashboards, automated reporting, and predictive models that help businesses increase revenue by 40% on average."
  },
  "data-consulting": {
    title: "Strategic Data Consulting",
    subtitle: "Expert guidance to optimize your data strategy and maximize business value",
    description: "Work with certified data strategists to develop comprehensive data roadmaps, implement best practices, and optimize your data infrastructure. Our consulting services help organizations unlock the full potential of their data assets with strategic roadmaps, technology recommendations, and team training.",
    stats: [
      { label: "Projects Completed", value: "2,500+" },
      { label: "ROI Improvement", value: "250%" },
      { label: "Client Retention", value: "95%" }
    ],
    category: "Strategic Consulting",
    features: [
      "Data Strategy Development",
      "Architecture Planning",
      "Team Training Programs",
      "Performance Optimization",
      "Technology Assessment",
      "Implementation Roadmaps"
    ],
    benefits: [
      "Clear strategic roadmap",
      "Best practices implementation",
      "Team capability building",
      "Measurable ROI improvements"
    ],
    details: "Our certified data consultants work with Fortune 500 companies to develop comprehensive data strategies, optimize existing infrastructure, and implement industry best practices. We provide strategic roadmaps, technology recommendations, team training, and ongoing support to ensure successful data transformation initiatives."
  },
  "email-marketing-campaigns": {
    title: "Email Marketing Campaigns",
    subtitle: "Targeted email campaigns that drive engagement and conversions",
    description: "Execute high-performance email marketing campaigns with our verified contact data and marketing expertise.",
    stats: [
      { label: "Campaigns Launched", value: "50K+" },
      { label: "Open Rate Average", value: "25%+" },
      { label: "Delivery Rate", value: "98%" }
    ],
    category: "Marketing Solutions"
  },
  "account-based-marketing": {
    title: "Account-Based Marketing",
    subtitle: "Precision-targeted marketing for high-value accounts",
    description: "ELP Data's Account-Based Marketing (ABM) solutions help B2B organizations identify, engage, and convert their most valuable target accounts through highly personalized, multi-channel campaigns. Our comprehensive ABM approach combines premium data intelligence, strategic planning, and coordinated execution to create meaningful connections with key decision-makers.",
    stats: [
      { label: "ABM Campaigns", value: "2K+" },
      { label: "Account Penetration", value: "75%+" },
      { label: "Pipeline Growth", value: "3x" }
    ],
    category: "Marketing Solutions",
    features: [
      "Target Account Selection",
      "Buying Committee Mapping",
      "Personalized Content Development",
      "Multi-Channel Orchestration"
    ],
    benefits: [
      "Higher conversion rates on target accounts",
      "Shorter sales cycles with key prospects",
      "Improved sales and marketing alignment",
      "Better ROI on marketing investments"
    ],
    details: "Our Account-Based Marketing solutions combine data-driven account identification with personalized engagement strategies. We help you map buying committees, create account-specific content, and orchestrate multi-channel campaigns that resonate with key decision-makers at your target accounts."
  },
  "intent-data-solutions": {
    title: "Intent Data Solutions",
    subtitle: "Identify prospects showing buying signals for your solutions",
    description: "Leverage buyer intent data to identify companies actively researching solutions in your market category.",
    stats: [
      { label: "Intent Signals", value: "Millions" },
      { label: "Topics Tracked", value: "10K+" },
      { label: "Data Freshness", value: "24 Hours" }
    ],
    category: "Marketing Solutions"
  },
  "lead-generation-services": {
    title: "Lead Generation Services",
    subtitle: "Comprehensive lead generation and qualification services",
    description: "Full-service lead generation combining data intelligence, outreach expertise, and qualification processes.",
    stats: [
      { label: "Leads Generated", value: "1M+" },
      { label: "Qualification Rate", value: "80%" },
      { label: "Campaign ROI", value: "500%+" }
    ],
    category: "Marketing Solutions"
  },
  "marketing-automation": {
    title: "Marketing Automation",
    subtitle: "Automated marketing workflows powered by quality data",
    description: "Implement sophisticated marketing automation strategies with clean, verified data and proven campaign templates.",
    stats: [
      { label: "Automation Workflows", value: "1K+" },
      { label: "Data Integration", value: "Seamless" },
      { label: "Efficiency Gain", value: "75%" }
    ],
    category: "Marketing Solutions"
  },
  "business-credit-reports": {
    title: "Business Credit Reports",
    subtitle: "Comprehensive credit analysis for informed business decisions",
    description: "Access detailed business credit reports and financial assessments to evaluate potential partners, customers, and vendors. Our comprehensive credit reporting services provide in-depth analysis of business financial stability, payment history, and creditworthiness to support critical business decisions.",
    stats: [
      { label: "Credit Reports", value: "10M+" },
      { label: "Financial Data Sources", value: "500+" },
      { label: "Global Coverage", value: "195+ Countries" }
    ],
    category: "Risk Management",
    features: [
      "Comprehensive Credit Analysis",
      "Payment History Assessment",
      "Financial Stability Scoring",
      "Industry Risk Benchmarking"
    ],
    benefits: [
      "Reduced credit risk exposure",
      "Informed lending decisions",
      "Better vendor evaluation",
      "Enhanced portfolio management"
    ],
    details: "Our business credit reports combine data from multiple financial institutions, credit bureaus, and public records to provide a comprehensive view of business creditworthiness. We analyze payment patterns, financial trends, legal filings, and industry performance to deliver accurate risk assessments for informed decision-making."
  },
  "compliance-solutions": {
    title: "Compliance Solutions",
    subtitle: "Ensure regulatory compliance across all business operations",
    description: "Comprehensive compliance monitoring and reporting solutions for GDPR, CCPA, and other regulatory requirements. Our compliance solutions help organizations navigate complex regulatory landscapes while maintaining data privacy, security, and operational transparency across global markets.",
    stats: [
      { label: "Compliance Frameworks", value: "25+" },
      { label: "Regulations Monitored", value: "50+" },
      { label: "Audit Success Rate", value: "99.8%" }
    ],
    category: "Risk Management",
    features: [
      "GDPR & CCPA Compliance Monitoring",
      "Real-time Regulatory Updates",
      "Automated Compliance Reporting",
      "Data Privacy Impact Assessments"
    ],
    benefits: [
      "Reduced regulatory violation risks",
      "Streamlined audit processes",
      "Enhanced data protection",
      "Global compliance coverage"
    ],
    details: "Our compliance solutions provide comprehensive monitoring and management of regulatory requirements across multiple jurisdictions. We track changes in data privacy laws, financial regulations, and industry-specific compliance standards to ensure your organization maintains full regulatory compliance while minimizing operational disruption."
  },
  "fraud-prevention": {
    title: "Fraud Prevention",
    subtitle: "Advanced fraud detection and prevention systems",
    description: "Protect your business with sophisticated fraud detection algorithms and real-time monitoring systems. Our comprehensive fraud prevention platform combines machine learning, behavioral analytics, and real-time monitoring to identify and prevent fraudulent activities before they impact your business operations.",
    stats: [
      { label: "Fraud Detection Rate", value: "99.8%" },
      { label: "False Positives", value: "<0.1%" },
      { label: "Response Time", value: "< 50ms" }
    ],
    category: "Risk Management",
    features: [
      "AI-Powered Fraud Detection",
      "Real-time Transaction Monitoring", 
      "Behavioral Pattern Analysis",
      "Multi-layered Security Protocols"
    ],
    benefits: [
      "Reduced financial losses from fraud",
      "Enhanced customer trust and security",
      "Minimized false positive alerts",
      "Automated threat response capabilities"
    ],
    details: "Our fraud prevention system utilizes advanced machine learning algorithms to analyze transaction patterns, user behavior, and risk indicators in real-time. The platform learns from historical fraud patterns and continuously adapts to emerging threats, providing comprehensive protection against identity theft, payment fraud, and account takeover attempts."
  },
  "risk-assessment-tools": {
    title: "Risk Assessment Tools",
    subtitle: "Comprehensive risk analysis and mitigation strategies",
    description: "Advanced risk assessment tools to evaluate and mitigate business, financial, and operational risks. Our sophisticated risk assessment platform provides comprehensive analysis of credit risk, operational risk, market risk, and regulatory compliance risk to support informed business decisions and strategic planning.",
    stats: [
      { label: "Risk Assessment Models", value: "25+" },
      { label: "Industries Covered", value: "50+" },
      { label: "Prediction Accuracy", value: "95%" }
    ],
    category: "Risk Management",
    features: [
      "Multi-dimensional Risk Modeling",
      "Predictive Risk Analytics",
      "Portfolio Risk Assessment",
      "Stress Testing & Scenario Analysis"
    ],
    benefits: [
      "Proactive risk identification",
      "Enhanced decision-making capabilities",
      "Regulatory compliance assurance",
      "Optimized risk-return profiles"
    ],
    details: "Our risk assessment tools combine quantitative modeling with qualitative analysis to provide comprehensive risk evaluations. We analyze financial statements, market conditions, industry trends, and regulatory environments to deliver accurate risk scores and actionable insights for portfolio management, lending decisions, and strategic planning."
  },
  "due-diligence-services": {
    title: "Due Diligence Services",
    subtitle: "Thorough background checks and business verification",
    description: "Comprehensive due diligence services for mergers, acquisitions, partnerships, and vendor relationships. Our thorough investigation process provides detailed insights into business operations, financial stability, and regulatory compliance.",
    stats: [
      { label: "Due Diligence Reports", value: "25K+" },
      { label: "Verification Sources", value: "1K+" },
      { label: "Report Turnaround", value: "3-5 Days" }
    ],
    category: "Risk Management",
    features: [
      "Business Background Verification",
      "Financial Stability Assessment",
      "Regulatory Compliance Review",
      "Management Team Analysis"
    ],
    benefits: [
      "Risk mitigation in business transactions",
      "Informed decision-making for partnerships",
      "Regulatory compliance assurance",
      "Protection against fraudulent activities"
    ],
    details: "Our due diligence services provide comprehensive background checks and verification for business transactions. We investigate financial stability, regulatory compliance, business operations, and management credibility to help you make informed decisions about potential partners, acquisition targets, or major vendors."
  },
  "resources": {
    title: "Resources & Industry Insights",
    subtitle: "Stay informed with the latest data trends and industry intelligence",
    description: "Access our comprehensive library of industry reports, data trends analysis, best practices guides, and thought leadership content. Our resources section provides valuable insights to help you optimize your data strategy and marketing effectiveness.",
    stats: [
      { label: "Industry Reports", value: "500+" },
      { label: "Blog Articles", value: "1K+" },
      { label: "Case Studies", value: "200+" }
    ],
    category: "Knowledge Center",
    features: [
      "Industry Trend Reports",
      "Data Strategy Whitepapers",
      "Marketing Best Practices",
      "Technology User Insights"
    ],
    benefits: [
      "Stay ahead of industry trends",
      "Learn from successful case studies",
      "Implement proven best practices",
      "Access expert insights and analysis"
    ],
    details: "Our Resources section features extensive industry news, blog articles, research reports, and case studies covering data management, marketing automation, technology trends, and business intelligence. Stay informed about the latest developments in B2B data and marketing with insights from our experts and industry thought leaders."
  },
  "about": {
    title: "About ELP Data",
    subtitle: "Leading provider of premium B2B data and marketing intelligence",
    description: "ELP Data has been delivering high-quality business intelligence and data solutions to organizations worldwide for over a decade. We specialize in helping businesses identify opportunities, mitigate risk, and accelerate growth through comprehensive data solutions.",
    stats: [
      { label: "Years of Experience", value: "15+" },
      { label: "Satisfied Clients", value: "5K+" },
      { label: "Countries Served", value: "195+" }
    ],
    category: "Company Information",
    features: [
      "Premium Data Quality",
      "Global Market Coverage",
      "Expert Data Services",
      "Compliance & Security"
    ],
    benefits: [
      "Trusted by leading enterprises",
      "Proven track record of success",
      "Comprehensive global coverage",
      "Industry-leading data accuracy"
    ],
    details: "Founded with the mission to provide businesses with accurate, actionable data intelligence, ELP Data has grown to become a trusted partner for organizations seeking to optimize their marketing efforts, identify new opportunities, and make informed business decisions. Our commitment to data quality and customer success drives everything we do."
  }
};

export default function MenuPageTemplate() {
  const [location] = useLocation();
  const pageKey = location.substring(1); // Remove the leading slash
  
  // Get page data or use default
  const pageData = menuPageData[pageKey] || {
    title: formatPageTitle(pageKey),
    subtitle: `Professional ${formatPageTitle(pageKey)} solutions for your business needs`,
    description: `Comprehensive ${formatPageTitle(pageKey)} services designed to help your organization achieve its business objectives.`,
    stats: [
      { label: "Solutions Delivered", value: "10K+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Success Rate", value: "95%" }
    ],
    category: "Business Solutions"
  };

  function formatPageTitle(key: string): string {
    return key
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const solutions = [
    {
      title: "Key Features",
      icon: Building,
      color: "blue",
      features: pageData.features || ["Scalable Implementation", "Enterprise Security", "24/7 Support", "Custom Integration"],
      benefits: pageData.benefits || ["Reduced operational costs", "Improved data accuracy", "Enhanced compliance", "Streamlined processes"]
    },
    {
      title: "Business Benefits",
      icon: Target,
      color: "green", 
      features: pageData.benefits || ["Higher deliverability rates", "Reduced bounce backs", "Better campaign performance", "Improved ROI"],
      benefits: pageData.features || ["Real-time Validation", "Accuracy Guarantee", "Compliance Monitoring", "Quality Scoring"]
    },
    {
      title: "Service Details",
      icon: BarChart,
      color: "purple",
      features: pageData.details ? [pageData.details.substring(0, 100) + "..."] : ["Predictive Modeling", "Custom Dashboards", "Automated Reporting", "AI-Powered Insights"],
      benefits: pageData.category ? ["Category: " + pageData.category] : ["Data-driven decisions", "Market intelligence", "Competitive advantage", "Growth optimization"]
    },
    {
      title: "Customer Success",
      icon: Users,
      color: "orange",
      features: ["Dedicated Support", "Training Programs", "Best Practices", "Performance Monitoring"],
      benefits: ["Faster implementation", "Higher adoption rates", "Maximized value", "Continuous improvement"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-blue-500",
      green: "border-green-500", 
      purple: "border-purple-500",
      orange: "border-orange-500"
    };
    return colorMap[color] || "border-blue-500";
  };

  const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500", 
      orange: "text-orange-500"
    };
    return colorMap[color] || "text-blue-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">{pageData.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {pageData.description}
            </p>
            <div className="flex justify-center gap-4">
              {pageData.stats.map((stat: any, index: number) => (
                <Card key={index} className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-blue-900 mb-6">{pageData.title} Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Features Card */}
            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-500" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(pageData.features || ["Professional Service Delivery", "Expert Consultation", "Quality Assurance", "Customer Support"]).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Benefits Card */}
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-500" />
                  Business Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(pageData.benefits || ["Improved operational efficiency", "Enhanced business outcomes", "Competitive advantage", "Measurable ROI"]).map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Overview Card */}
            <Card className="border-2 border-purple-500 md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-purple-500" />
                  Service Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {pageData.details || "Our comprehensive service solutions are designed to meet your specific business requirements and deliver measurable results."}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{pageData.category}</Badge>
                  <Badge variant="outline">Professional Service</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started with {pageData.title}?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact our experts to learn how we can help optimize your business operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get a Quote
            </a>
            <a 
              href="/contact-us" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}