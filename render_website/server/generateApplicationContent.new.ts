export interface ApplicationContent {
  applicationName: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  companyCount: string;
  userCount: string;
  dataAccuracy: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  metric3: { value: string; label: string };
  targetIndustries: string[];
  decisionMakerRoles: string[];
  modulesAndSolutions: string[];
  availableDataPoints: string[];
  implementationChallenges: string[];
  categories: ApplicationCategory[];
}

export interface ApplicationCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
  badges: string[];
  primaryIndustries: string[];
  keyDecisionMakers: string[];
  implementationChallenges: string[];
}

// JD Edwards-specific data generation functions
function generateJDEdwardsIndustries(): string[] {
  return [
    "Manufacturing & Industrial",
    "Distribution & Wholesale", 
    "Construction & Engineering",
    "Energy & Utilities",
    "Food & Beverage",
    "Automotive",
    "Chemicals & Process",
    "Public Sector & Government",
    "Real Estate & Property Management",
    "Transportation & Logistics"
  ];
}

function generateJDEdwardsRoles(): string[] {
  return [
    "JD Edwards Administrator",
    "ERP Functional Consultant",
    "Finance Director",
    "Manufacturing Manager",
    "Supply Chain Manager",
    "IT Director",
    "Business Analyst",
    "Project Manager"
  ];
}

function generateJDEdwardsModules(): string[] {
  return [
    "Financial Management",
    "Supply Chain Management",
    "Manufacturing",
    "Project Management",
    "Human Capital Management",
    "Asset Lifecycle Management",
    "Customer Relationship Management",
    "Business Intelligence"
  ];
}

function generateJDEdwardsDataPoints(): string[] {
  return [
    "JDE Version (EnterpriseOne/World)",
    "Module Implementation",
    "User License Count",
    "Customization Level",
    "Integration Points",
    "Database Platform",
    "Go-Live Timeline",
    "Support Model",
    "Training Requirements",
    "Upgrade Plans"
  ];
}

function generateJDEdwardsChallenges(): string[] {
  return [
    "Complex business process reengineering",
    "Data migration from legacy systems",
    "User training across multiple modules",
    "Integration with third-party applications",
    "Customization vs. standard functionality decisions",
    "Change management across organization",
    "Go-live planning and execution",
    "Performance tuning and optimization",
    "Regulatory compliance setup",
    "Ongoing maintenance and support costs"
  ];
}

function generateJDEdwardsCategories(): ApplicationCategory[] {
  return [
    {
      name: "Financial Management",
      description: "Comprehensive financial accounting and reporting capabilities",
      icon: "Calculator",
      color: "blue-500",
      badges: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Fixed Assets"],
      primaryIndustries: ["Manufacturing", "Distribution", "Construction"],
      keyDecisionMakers: ["CFO", "Finance Director", "Controller"],
      implementationChallenges: ["Chart of accounts setup", "Period-end processes", "Financial reporting"]
    },
    {
      name: "Manufacturing",
      description: "Advanced manufacturing capabilities for discrete and process manufacturing",
      icon: "Settings",
      color: "purple-500", 
      badges: ["Shop Floor Control", "Product Data Management", "Quality Management", "Cost Management"],
      primaryIndustries: ["Manufacturing", "Automotive", "Aerospace"],
      keyDecisionMakers: ["Manufacturing Manager", "Plant Manager", "Operations Director"],
      implementationChallenges: ["Shop floor integration", "Quality control setup", "Production scheduling"]
    }
  ];
}

export function generateApplicationContent(applicationName: string): ApplicationContent {
  const appLower = applicationName.toLowerCase();
  
  // Salesforce CRM
  if (appLower.includes('salesforce')) {
    return {
      applicationName: applicationName,
      description: "Salesforce is the world's leading cloud-based Customer Relationship Management (CRM) platform that helps businesses connect with customers, partners, and potential customers. It provides comprehensive sales automation, marketing automation, customer service, and analytics capabilities across all customer touchpoints.",
      heroTitle: `${applicationName} Users & CRM Implementation Intelligence`,
      heroDescription: "Connect with 599,000+ organizations using Salesforce.com's comprehensive 69+ product ecosystem worldwide. Target sales directors, marketing managers, customer success teams, Salesforce administrators, and business analysts implementing Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Experience Cloud, and Analytics solutions.",
      companyCount: "850,000+",
      userCount: "4.2M+",
      dataAccuracy: "98%",
      metric1: { value: "150+", label: "Countries" },
      metric2: { value: "25+", label: "Years Market Leadership" },
      metric3: { value: "99.9%", label: "Platform Uptime" },
      targetIndustries: ["Financial Services", "Healthcare", "Manufacturing", "Retail", "Technology", "Real Estate", "Education", "Non-Profit", "Media & Entertainment", "Professional Services"],
      decisionMakerRoles: ["Sales Director", "VP of Sales", "CRM Administrator", "Marketing Director", "Customer Success Manager", "Sales Operations Manager", "IT Director", "Business Development Manager", "Account Executive", "Sales Manager"],
      modulesAndSolutions: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud", "Analytics Cloud", "Platform & App Development", "Integration & APIs", "Mobile Apps", "Workflow Automation", "AI & Einstein Analytics"],
      availableDataPoints: ["Contact Information", "Salesforce Edition", "Implementation Timeline", "User Count", "Customizations", "AppExchange Apps", "Integration Points", "Data Volume", "License Types", "Training Requirements"],
      implementationChallenges: [
        "Data migration from legacy CRM systems",
        "User adoption and change management",
        "Complex customization requirements",
        "Integration with existing business systems",
        "Data quality and deduplication",
        "Permission and security setup",
        "Workflow and approval process design",
        "Reporting and dashboard configuration",
        "Training and ongoing support",
        "License optimization and cost management"
      ],
      categories: [
        {
          name: "Sales Cloud",
          description: "Complete sales automation and lead management platform",
          icon: "TrendingUp",
          color: "blue-500",
          badges: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Territory Management"],
          primaryIndustries: ["Financial Services", "Technology", "Manufacturing"],
          keyDecisionMakers: ["Sales Director", "VP of Sales", "Sales Operations Manager"],
          implementationChallenges: ["Data migration", "Sales process standardization", "User adoption"]
        }
      ]
    };
  }
  
  // SAP ERP
  if (appLower.includes('sap')) {
    return {
      applicationName: applicationName,
      description: "SAP is a leading enterprise resource planning (ERP) software that integrates business processes across finance, procurement, manufacturing, and sales. SAP S/4HANA provides real-time analytics and intelligent automation to help organizations run their business operations efficiently and make data-driven decisions.",
      heroTitle: `${applicationName} Enterprise Users & ERP Implementation Intelligence`,
      heroDescription: "Access 440,000+ organizations using SAP ERP systems globally. Target SAP functional consultants, finance directors, and IT managers implementing S/4HANA, ECC, and SuccessFactors for digital transformation and business process optimization.",
      companyCount: "440,000+",
      userCount: "12M+",
      dataAccuracy: "97%",
      metric1: { value: "180+", label: "Countries" },
      metric2: { value: "50+", label: "Years Enterprise Experience" },
      metric3: { value: "99.95%", label: "Mission Critical Uptime" },
      targetIndustries: ["Manufacturing", "Automotive", "Chemicals", "Oil & Gas", "Utilities", "Retail", "Consumer Products", "Pharmaceuticals", "Aerospace & Defense", "Mining"],
      decisionMakerRoles: ["SAP Basis Administrator", "SAP Functional Consultant", "Finance Director", "IT Director", "ERP Project Manager", "Business Process Owner", "SAP Security Analyst", "Master Data Manager", "Supply Chain Manager", "Manufacturing Manager"],
      modulesAndSolutions: ["SAP S/4HANA", "SAP ECC", "SAP SuccessFactors", "SAP Concur", "SAP Ariba", "SAP Fieldglass", "SAP Analytics Cloud", "SAP HANA Database", "SAP Fiori", "SAP Integration Suite"],
      availableDataPoints: ["SAP Version & Edition", "Module Implementation", "User License Count", "Database Size", "Customization Level", "Integration Points", "Go-Live Timeline", "Support Package Level", "Training Requirements", "Upgrade Plans"],
      implementationChallenges: [
        "Complex data migration from legacy systems",
        "Business process reengineering and standardization",
        "User training and adoption for new interfaces",
        "Integration with third-party applications",
        "Master data governance and cleanup",
        "Custom code remediation and optimization",
        "Change management across global organizations",
        "Performance tuning and system optimization",
        "Regulatory compliance and audit requirements",
        "Project timeline and budget management"
      ],
      categories: [
        {
          name: "Financial Management",
          description: "Complete financial accounting and reporting solution",
          icon: "Calculator",
          color: "blue-500",
          badges: ["General Ledger", "Accounts Payable", "Asset Management", "Financial Reporting"],
          primaryIndustries: ["Manufacturing", "Automotive", "Chemicals"],
          keyDecisionMakers: ["Finance Director", "CFO", "Controller"],
          implementationChallenges: ["Chart of accounts mapping", "Period-end processes", "Regulatory compliance"]
        }
      ]
    };
  }

  // JD Edwards
  if (appLower.includes('jd edwards') || appLower.includes('jde')) {
    return {
      applicationName: applicationName,
      description: `${applicationName} is Oracle's comprehensive enterprise resource planning (ERP) solution designed for mid-market and large organizations. It provides integrated financial management, supply chain management, manufacturing, and project management capabilities with industry-specific functionality.`,
      heroTitle: `${applicationName} Enterprise Users`,
      heroDescription: `Connect with 47,982+ organizations using JD Edwards ERP systems. Target JDE functional consultants, manufacturing managers, and financial controllers implementing EnterpriseOne and World solutions for complex business operations.`,
      companyCount: "47,982+",
      userCount: "720,000+",
      dataAccuracy: "96%",
      metric1: { value: "65+", label: "Countries" },
      metric2: { value: "25+", label: "Years in Market" },
      metric3: { value: "99.9%", label: "System Reliability" },
      targetIndustries: generateJDEdwardsIndustries(),
      decisionMakerRoles: generateJDEdwardsRoles(),
      modulesAndSolutions: generateJDEdwardsModules(),
      availableDataPoints: generateJDEdwardsDataPoints(),
      implementationChallenges: generateJDEdwardsChallenges(),
      categories: generateJDEdwardsCategories()
    };
  }
  
  // Generate application-specific content based on type
  const appType = determineApplicationType(appLower);
  
  return {
    applicationName: applicationName,
    description: generateDescriptionForType(appType, applicationName),
    heroTitle: `${applicationName} Users & Implementation Intelligence`,
    heroDescription: `Connect with organizations using ${applicationName} for ${appType} solutions. Target decision makers implementing ${applicationName} for business operations and digital transformation.`,
    companyCount: generateCompanyCount(appType),
    userCount: generateUserCount(appType),
    dataAccuracy: "96%",
    metric1: generateMetric1(appType),
    metric2: generateMetric2(appType),
    metric3: generateMetric3(appType),
    targetIndustries: generateIndustriesForType(appType),
    decisionMakerRoles: generateRolesForType(appType),
    modulesAndSolutions: generateModulesForType(appType, applicationName),
    availableDataPoints: generateDataPointsForType(appType),
    implementationChallenges: generateChallengesForType(appType),
    categories: generateCategoriesForType(appType, applicationName)
  };
}

function determineApplicationType(appName: string): string {
  if (appName.includes('crm') || appName.includes('customer')) return 'CRM';
  if (appName.includes('erp') || appName.includes('enterprise')) return 'ERP';
  if (appName.includes('database') || appName.includes('db')) return 'Database';
  if (appName.includes('cloud') || appName.includes('aws') || appName.includes('azure')) return 'Cloud';
  if (appName.includes('analytics') || appName.includes('bi') || appName.includes('reporting')) return 'Analytics';
  if (appName.includes('security') || appName.includes('firewall')) return 'Security';
  if (appName.includes('network') || appName.includes('cisco')) return 'Networking';
  if (appName.includes('web') || appName.includes('server') || appName.includes('apache')) return 'WebServer';
  if (appName.includes('email') || appName.includes('exchange')) return 'Email';
  if (appName.includes('backup') || appName.includes('storage')) return 'Storage';
  return 'Enterprise Software';
}

function generateDescriptionForType(appType: string, applicationName: string): string {
  const descriptions: { [key: string]: string } = {
    'CRM': `${applicationName} is a customer relationship management platform that helps organizations manage customer interactions, sales processes, and marketing campaigns. It provides comprehensive tools for lead management, opportunity tracking, and customer service across multiple channels.`,
    'ERP': `${applicationName} is an enterprise resource planning system that integrates core business processes including finance, supply chain, manufacturing, and human resources. It provides real-time visibility and control over business operations through unified data management.`,
    'Database': `${applicationName} is a database management system that provides robust data storage, processing, and analytics capabilities. It offers enterprise-grade security, high availability, and performance optimization for mission-critical applications.`,
    'Cloud': `${applicationName} is a cloud computing platform that provides scalable infrastructure, platform, and software services. It enables organizations to reduce costs, increase agility, and accelerate innovation through on-demand computing resources.`,
    'Analytics': `${applicationName} is a business intelligence and analytics platform that transforms raw data into actionable insights. It provides comprehensive data visualization, reporting, and advanced analytics capabilities for data-driven decision making.`,
    'Security': `${applicationName} is a cybersecurity solution that protects organizations from digital threats and ensures compliance with security regulations. It provides comprehensive threat detection, prevention, and response capabilities across the enterprise.`,
    'Networking': `${applicationName} is a networking solution that provides reliable, secure, and high-performance network infrastructure. It enables seamless connectivity and communication across distributed environments with advanced management capabilities.`,
    'WebServer': `${applicationName} is a web server platform that delivers web applications and content to users reliably and efficiently. It provides robust performance, security, and scalability features for hosting modern web applications.`,
    'Email': `${applicationName} is an email and collaboration platform that enables secure communication and productivity across organizations. It provides comprehensive messaging, calendaring, and collaboration tools with enterprise-grade security.`,
    'Storage': `${applicationName} is a data storage solution that provides secure, scalable, and high-performance storage infrastructure. It offers comprehensive data protection, backup, and recovery capabilities for business-critical information.`
  };
  
  return descriptions[appType] || `${applicationName} is an enterprise technology solution that provides comprehensive functionality for business operations and organizational efficiency across various industries and use cases.`;
}

function generateCompanyCount(appType: string): string {
  const counts: { [key: string]: string } = {
    'CRM': "150,000+", 'ERP': "85,000+", 'Database': "200,000+", 'Cloud': "300,000+",
    'Analytics': "120,000+", 'Security': "180,000+", 'Networking': "160,000+", 'WebServer': "250,000+",
    'Email': "140,000+", 'Storage': "110,000+"
  };
  return counts[appType] || "75,000+";
}

function generateUserCount(appType: string): string {
  const counts: { [key: string]: string } = {
    'CRM': "2.5M+", 'ERP': "1.8M+", 'Database': "3.2M+", 'Cloud': "5.5M+",
    'Analytics': "2.1M+", 'Security': "2.8M+", 'Networking': "2.3M+", 'WebServer': "4.1M+",
    'Email': "2.7M+", 'Storage': "1.9M+"
  };
  return counts[appType] || "1.2M+";
}

function generateMetric1(appType: string): { value: string; label: string } {
  const metrics: { [key: string]: { value: string; label: string } } = {
    'CRM': { value: "95%", label: "Customer Satisfaction" },
    'ERP': { value: "20+", label: "Years Experience" },
    'Database': { value: "99.99%", label: "Uptime SLA" },
    'Cloud': { value: "180+", label: "Global Regions" },
    'Analytics': { value: "89%", label: "Faster Insights" },
    'Security': { value: "99.7%", label: "Threat Detection" },
    'Networking': { value: "15+", label: "Years Innovation" },
    'WebServer': { value: "50M+", label: "Websites Powered" },
    'Email': { value: "99.9%", label: "Message Delivery" },
    'Storage': { value: "12", label: "9s Durability" }
  };
  return metrics[appType] || { value: "95%", label: "Success Rate" };
}

function generateMetric2(appType: string): { value: string; label: string } {
  const metrics: { [key: string]: { value: string; label: string } } = {
    'CRM': { value: "40%", label: "Sales Increase" },
    'ERP': { value: "150+", label: "Countries" },
    'Database': { value: "10M+", label: "Transactions/sec" },
    'Cloud': { value: "500+", label: "Services Available" },
    'Analytics': { value: "25+", label: "Data Sources" },
    'Security': { value: "24/7", label: "Threat Monitoring" },
    'Networking': { value: "100+", label: "Countries Deployed" },
    'WebServer': { value: "99.9%", label: "Availability" },
    'Email': { value: "65+", label: "Languages Supported" },
    'Storage': { value: "99.9%", label: "Data Availability" }
  };
  return metrics[appType] || { value: "25+", label: "Industries Served" };
}

function generateMetric3(appType: string): { value: string; label: string } {
  const metrics: { [key: string]: { value: string; label: string } } = {
    'CRM': { value: "30%", label: "Revenue Growth" },
    'ERP': { value: "45%", label: "Process Efficiency" },
    'Database': { value: "256TB", label: "Max Database Size" },
    'Cloud': { value: "65%", label: "Cost Savings" },
    'Analytics': { value: "10x", label: "Query Performance" },
    'Security': { value: "0.01%", label: "False Positives" },
    'Networking': { value: "400G", label: "Maximum Throughput" },
    'WebServer': { value: "1M+", label: "Concurrent Users" },
    'Email': { value: "256-bit", label: "Encryption Standard" },
    'Storage': { value: "50PB", label: "Maximum Scale" }
  };
  return metrics[appType] || { value: "99%", label: "Customer Retention" };
}

function generateIndustriesForType(appType: string): string[] {
  const industryMap: { [key: string]: string[] } = {
    'CRM': ["Technology", "Professional Services", "Real Estate", "Financial Services", "Healthcare", "Manufacturing", "Retail", "Insurance"],
    'ERP': ["Manufacturing", "Distribution", "Construction", "Healthcare", "Professional Services", "Government", "Education", "Non-Profit"],
    'Database': ["Financial Services", "Healthcare", "Government", "Telecommunications", "Retail", "Manufacturing", "Education", "Insurance"],
    'Cloud': ["Technology", "Startups", "Enterprise", "Media", "Healthcare", "Financial Services", "Education", "Government"],
    'Analytics': ["Retail", "Financial Services", "Healthcare", "Manufacturing", "Technology", "Media", "Government", "Education"],
    'Security': ["Financial Services", "Healthcare", "Government", "Technology", "Defense", "Energy", "Telecommunications", "Education"],
    'Networking': ["Technology", "Telecommunications", "Financial Services", "Healthcare", "Education", "Government", "Manufacturing", "Retail"],
    'WebServer': ["Technology", "E-commerce", "Media", "Financial Services", "Healthcare", "Education", "Government", "Professional Services"],
    'Email': ["Professional Services", "Healthcare", "Financial Services", "Education", "Government", "Technology", "Manufacturing", "Legal"],
    'Storage': ["Healthcare", "Financial Services", "Media", "Government", "Education", "Technology", "Manufacturing", "Legal"]
  };
  
  return industryMap[appType] || ["Technology", "Financial Services", "Healthcare", "Manufacturing", "Government", "Education", "Professional Services", "Retail"];
}

function generateRolesForType(appType: string): string[] {
  const roleMap: { [key: string]: string[] } = {
    'CRM': ["Sales Director", "Marketing Manager", "Customer Success Manager", "CRM Administrator", "Sales Operations Manager", "Business Development Manager", "VP of Sales", "Account Executive"],
    'ERP': ["ERP Administrator", "Finance Director", "Operations Manager", "IT Director", "Business Analyst", "Project Manager", "Supply Chain Manager", "Manufacturing Manager"],
    'Database': ["Database Administrator", "Data Architect", "Data Engineer", "System Administrator", "IT Infrastructure Manager", "Database Developer", "Performance Analyst", "Security Administrator"],
    'Cloud': ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer", "Cloud Security Engineer", "Platform Engineer", "Solutions Architect", "CTO", "Infrastructure Manager"],
    'Analytics': ["Business Intelligence Manager", "Data Analyst", "Data Scientist", "Analytics Director", "Reporting Manager", "Business Analyst", "Data Engineer", "Chief Data Officer"],
    'Security': ["Security Administrator", "CISO", "Security Analyst", "Compliance Officer", "Risk Manager", "Security Engineer", "IT Security Manager", "Cybersecurity Specialist"],
    'Networking': ["Network Administrator", "Network Engineer", "IT Infrastructure Manager", "System Administrator", "Security Administrator", "Network Architect", "IT Manager", "Technical Support Manager"],
    'WebServer': ["Web Administrator", "DevOps Engineer", "System Administrator", "Web Developer", "IT Infrastructure Manager", "Site Reliability Engineer", "Technical Lead", "Platform Engineer"],
    'Email': ["Email Administrator", "IT Administrator", "System Administrator", "Messaging Manager", "IT Security Manager", "Compliance Officer", "IT Support Manager", "Infrastructure Manager"],
    'Storage': ["Storage Administrator", "IT Infrastructure Manager", "System Administrator", "Backup Administrator", "Data Manager", "IT Operations Manager", "Cloud Storage Engineer", "IT Director"]
  };
  
  return roleMap[appType] || ["IT Director", "System Administrator", "Technical Manager", "IT Operations Manager", "Platform Engineer", "Solutions Architect", "Technical Lead", "Infrastructure Manager"];
}

function generateModulesForType(appType: string, applicationName: string): string[] {
  const moduleMap: { [key: string]: string[] } = {
    'CRM': ["Lead Management", "Contact Management", "Sales Pipeline", "Marketing Automation", "Customer Service", "Analytics & Reporting", "Mobile App", "Integration Platform"],
    'ERP': ["Financial Management", "Supply Chain", "Manufacturing", "Human Resources", "Project Management", "Business Intelligence", "Procurement", "Asset Management"],
    'Database': ["Database Engine", "Query Optimizer", "Backup & Recovery", "Security Management", "Performance Monitoring", "Replication", "Analytics", "Administration Tools"],
    'Cloud': ["Compute Services", "Storage Solutions", "Networking", "Security & Identity", "Database Services", "Analytics", "Machine Learning", "Development Tools"],
    'Analytics': ["Data Visualization", "Report Builder", "Dashboard Designer", "Data Modeling", "ETL Tools", "Statistical Analysis", "Predictive Analytics", "Mobile Analytics"],
    'Security': ["Threat Detection", "Vulnerability Management", "Access Control", "Encryption", "Compliance Monitoring", "Incident Response", "Risk Assessment", "Security Analytics"],
    'Networking': ["Routing & Switching", "Network Security", "Wireless Management", "Network Monitoring", "Traffic Analysis", "VPN Solutions", "Load Balancing", "Quality of Service"],
    'WebServer': ["HTTP Server", "SSL/TLS", "Load Balancing", "Content Caching", "Security Modules", "Performance Optimization", "Virtual Hosting", "API Gateway"],
    'Email': ["Message Transport", "Mailbox Management", "Security & Compliance", "Mobile Access", "Collaboration Tools", "Archive & Discovery", "Anti-Spam", "Encryption"],
    'Storage': ["File Systems", "Block Storage", "Object Storage", "Backup Solutions", "Data Deduplication", "Compression", "Replication", "Disaster Recovery"]
  };
  
  return moduleMap[appType] || ["Core Platform", "Management Console", "Security Features", "Integration APIs", "Reporting Tools", "Mobile Access", "Analytics Engine", "Support Tools"];
}

function generateDataPointsForType(appType: string): string[] {
  const dataPoints: { [key: string]: string[] } = {
    'CRM': ["Contact Information", "Lead Sources", "Sales Pipeline", "Customer Interactions", "Revenue Data", "Campaign Performance", "User Roles", "Integration Points", "Custom Fields", "Automation Rules"],
    'ERP': ["Module Implementation", "User Licenses", "Customizations", "Integration Points", "Data Volume", "Business Processes", "Reporting Requirements", "Security Roles", "Training Needs", "Support Level"],
    'Database': ["Database Version", "Storage Capacity", "User Connections", "Performance Metrics", "Backup Strategy", "Security Features", "High Availability", "Replication Setup", "License Type", "Maintenance Windows"],
    'Cloud': ["Service Usage", "Cost Data", "Resource Allocation", "Security Configuration", "Network Setup", "Compliance Status", "User Access", "Backup Policies", "Monitoring Setup", "Support Level"],
    'Analytics': ["Data Sources", "Report Count", "User Activity", "Dashboard Usage", "Query Performance", "Data Refresh Rates", "Security Permissions", "Export Capabilities", "Mobile Access", "Training Records"],
    'Security': ["Threat Intelligence", "Incident History", "Policy Compliance", "User Access Logs", "Vulnerability Scans", "Risk Assessments", "Audit Trails", "Configuration Data", "Training Completion", "Response Times"],
    'Networking': ["Network Topology", "Device Inventory", "Traffic Patterns", "Performance Metrics", "Security Policies", "Configuration Data", "Firmware Versions", "Maintenance Schedules", "User Access", "Capacity Planning"],
    'WebServer': ["Server Configuration", "Traffic Analytics", "Performance Metrics", "SSL Certificates", "Security Settings", "Content Management", "Load Balancing", "Backup Procedures", "Update Status", "Error Logs"],
    'Email': ["Mailbox Data", "Message Volume", "Security Settings", "Mobile Devices", "Archive Policies", "Compliance Data", "User Permissions", "Integration Points", "Backup Status", "Performance Metrics"],
    'Storage': ["Storage Capacity", "Performance Data", "Backup Schedules", "Replication Status", "Access Permissions", "Compliance Settings", "Cost Analysis", "Capacity Planning", "Hardware Details", "Support Contracts"]
  };
  
  return dataPoints[appType] || ["System Configuration", "User Information", "Performance Data", "Security Settings", "Integration Points", "Usage Metrics", "Support History", "Training Records", "Compliance Data", "Cost Information"];
}

function generateChallengesForType(appType: string): string[] {
  const challengeMap: { [key: string]: string[] } = {
    'CRM': ["Data migration from legacy systems", "User adoption and training", "Sales process standardization", "Integration with marketing tools", "Data quality and deduplication", "Custom field configuration", "Workflow automation setup", "Mobile deployment", "Security and permissions", "ROI measurement and reporting"],
    'ERP': ["Complex business process reengineering", "Data migration and cleanup", "User training across multiple modules", "Integration with existing systems", "Customization vs. standard functionality", "Change management organization-wide", "Go-live planning and execution", "Performance optimization", "Regulatory compliance setup", "Ongoing maintenance and support"],
    'Database': ["Performance tuning and optimization", "High availability and disaster recovery", "Security hardening and compliance", "Capacity planning and scaling", "Backup and recovery procedures", "Migration from legacy systems", "Index optimization strategies", "Query performance analysis", "User access management", "Monitoring and alerting setup"],
    'Cloud': ["Migration strategy and planning", "Cost optimization and management", "Security configuration and compliance", "Network architecture design", "Skills training and certification", "Vendor lock-in considerations", "Disaster recovery planning", "Performance monitoring setup", "Governance and policy implementation", "Multi-cloud integration challenges"],
    'Analytics': ["Data quality and consistency", "ETL process development", "Report performance optimization", "User training on self-service tools", "Data governance implementation", "Integration with source systems", "Dashboard design and usability", "Scalability and performance", "Security and access control", "Change management for data-driven culture"],
    'Security': ["Threat landscape assessment", "Policy development and enforcement", "User awareness and training", "Integration with existing infrastructure", "Compliance with regulations", "Incident response procedures", "Risk assessment and mitigation", "Technology stack complexity", "Budget and resource allocation", "Vendor management and evaluation"],
    'Networking': ["Network design and architecture", "Security policy implementation", "Performance optimization", "Capacity planning and scaling", "Integration with cloud services", "Monitoring and troubleshooting", "Firmware and software updates", "Disaster recovery planning", "Cost management and budgeting", "Skills development and training"],
    'WebServer': ["Performance optimization and tuning", "Security hardening and compliance", "Load balancing configuration", "SSL certificate management", "Application integration", "Monitoring and logging setup", "Backup and disaster recovery", "Scalability planning", "Content delivery optimization", "Update and patch management"],
    'Email': ["Migration from legacy systems", "Security and compliance setup", "Mobile device management", "User training and adoption", "Integration with business applications", "Archive and retention policies", "Spam and malware protection", "Backup and disaster recovery", "Performance optimization", "Licensing and cost management"],
    'Storage': ["Capacity planning and management", "Backup and recovery strategies", "Performance optimization", "Data migration procedures", "Security and access control", "Compliance with regulations", "Integration with applications", "Disaster recovery planning", "Cost optimization", "Technology refresh planning"]
  };
  
  return challengeMap[appType] || ["System integration complexity", "User training and adoption", "Data migration challenges", "Performance optimization", "Security configuration", "Cost management", "Change management", "Technical support", "Scalability planning", "Compliance requirements"];
}

function generateCategoriesForType(appType: string, applicationName: string): ApplicationCategory[] {
  const categoryMap: { [key: string]: ApplicationCategory[] } = {
    'CRM': [
      {
        name: "Sales Management",
        description: "Comprehensive sales process automation and pipeline management",
        icon: "TrendingUp",
        color: "blue-500",
        badges: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Territory Management"],
        primaryIndustries: ["Technology", "Financial Services", "Manufacturing"],
        keyDecisionMakers: ["Sales Director", "VP of Sales", "Sales Operations Manager"],
        implementationChallenges: ["Sales process standardization", "Data migration", "User adoption"]
      }
    ],
    'WebServer': [
      {
        name: "Web Hosting",
        description: "High-performance web application hosting and delivery",
        icon: "Globe",
        color: "green-500",
        badges: ["HTTP Server", "SSL/TLS", "Load Balancing", "Content Caching"],
        primaryIndustries: ["Technology", "E-commerce", "Media"],
        keyDecisionMakers: ["Web Administrator", "DevOps Engineer", "IT Manager"],
        implementationChallenges: ["Performance optimization", "Security configuration", "Scalability planning"]
      }
    ]
  };
  
  return categoryMap[appType] || [
    {
      name: "Core Platform",
      description: `Essential ${applicationName} functionality and features`,
      icon: "Settings",
      color: "blue-500",
      badges: ["Configuration", "Management", "Integration", "Security"],
      primaryIndustries: ["Technology", "Financial Services", "Healthcare"],
      keyDecisionMakers: ["IT Director", "System Administrator", "Technical Manager"],
      implementationChallenges: ["System integration", "User training", "Configuration management"]
    }
  ];
}

export async function generateMultipleApplications(applicationNames: string[]): Promise<Record<string, ApplicationContent>> {
  const results: Record<string, ApplicationContent> = {};
  
  for (const name of applicationNames) {
    results[name] = generateApplicationContent(name);
  }

  return results;
}