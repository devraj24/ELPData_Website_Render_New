export interface TechnologyAnalysis {
  category: string;
  description: string;
  applications: string[];
  targetIndustries: string[];
  targetAudience: string[];
  challenges: string[];
}

export const fallbackTechnologyData: Record<string, TechnologyAnalysis> = {
  "SAP BPC": {
    category: "Business Planning and Consolidation",
    description: "SAP Business Planning and Consolidation (BPC) is an enterprise performance management solution that enables organizations to streamline financial planning, budgeting, forecasting, and consolidation processes with real-time analytics and reporting capabilities.",
    applications: [
      "Financial Planning and Budgeting",
      "Management Consolidation and Reporting", 
      "Profitability and Cost Center Analysis",
      "Cash Flow Forecasting and Management",
      "Statutory and Management Reporting",
      "Driver-Based Planning and Modeling",
      "Scenario Planning and What-If Analysis"
    ],
    targetIndustries: [
      "Banking and Financial Services",
      "Manufacturing and Industrial",
      "Retail and Consumer Goods",
      "Healthcare and Pharmaceuticals",
      "Energy and Utilities",
      "Professional Services",
      "Government and Public Sector"
    ],
    targetAudience: [
      "Chief Financial Officers (CFOs)",
      "Finance Directors and Controllers",
      "Financial Planning and Analysis Teams",
      "Business Intelligence Analysts",
      "Corporate Performance Management Teams",
      "SAP Functional Consultants",
      "Financial Systems Administrators"
    ],
    challenges: [
      "Complex implementation requiring specialized SAP BPC expertise",
      "High licensing and infrastructure costs for enterprise deployments",
      "Integration complexity with existing SAP and non-SAP systems",
      "Performance issues with large data volumes and complex calculations",
      "User adoption challenges due to complex interface and functionality",
      "Data quality and consistency issues across multiple source systems",
      "Lengthy development cycles for custom reporting and analytics",
      "Ongoing maintenance and support costs for system updates",
      "Skills shortage for qualified SAP BPC developers and administrators",
      "Version upgrade complexity and potential disruption to business processes"
    ]
  },
  "SAP S/4HANA": {
    category: "Next-Generation ERP Platform",
    description: "SAP S/4HANA is SAP's next-generation business suite built on the SAP HANA in-memory database platform, offering real-time analytics, simplified data models, and modern user experience for comprehensive enterprise resource planning.",
    applications: [
      "Financial Management with Real-Time Analytics",
      "Supply Chain and Manufacturing Execution",
      "Sales and Customer Management",
      "Procurement and Vendor Management",
      "Human Capital Management Integration",
      "Asset Management and Maintenance",
      "Project Management and Professional Services"
    ],
    targetIndustries: [
      "Manufacturing and Automotive",
      "Retail and Fashion",
      "Oil, Gas and Energy",
      "Chemicals and Life Sciences",
      "Financial Services",
      "Public Sector and Defense",
      "Utilities and Infrastructure"
    ],
    targetAudience: [
      "IT Directors and SAP Basis Administrators",
      "Business Process Owners and Super Users",
      "SAP Functional and Technical Consultants",
      "Finance and Operations Leaders",
      "Data Analysts and Business Intelligence Teams",
      "Change Management and Training Teams",
      "Enterprise Architects and Solution Designers"
    ],
    challenges: [
      "Migration complexity from SAP ECC to S/4HANA requiring careful planning",
      "High implementation costs ranging from $2M to $10M+ for large enterprises",
      "Business process reengineering requirements for simplified data model",
      "Custom code remediation and optimization for HANA compatibility",
      "User training and change management for new Fiori user interface",
      "Data archiving and cleanup requirements before migration",
      "Integration challenges with third-party and legacy systems",
      "Performance optimization for in-memory computing capabilities",
      "Ongoing subscription licensing model transition from perpetual licenses",
      "Skills gap for S/4HANA specific technical and functional expertise"
    ]
  },
  "AWS": {
    category: "Amazon Web Services Cloud Platform",
    description: "Amazon Web Services (AWS) is used by 16,957 companies and leads the cloud infrastructure market. AWS offers over 200 fully featured services including compute, storage, databases, analytics, networking, and AI/ML capabilities with extensive global infrastructure.",
    applications: [
      "EC2 Compute Instances and Auto Scaling",
      "S3 Object Storage and CloudFront CDN",
      "RDS Managed Database Services",
      "Lambda Serverless Computing",
      "VPC Virtual Private Cloud Networking",
      "SageMaker Machine Learning Platform",
      "CloudWatch Monitoring and Logging"
    ],
    targetIndustries: [
      "Technology and Software Development",
      "Financial Services and FinTech",
      "Media and Entertainment Streaming",
      "E-commerce and Retail",
      "Healthcare and Life Sciences",
      "Gaming and Interactive Media",
      "Government and Public Sector"
    ],
    targetAudience: [
      "Cloud Architects and Solution Engineers",
      "DevOps Engineers and Site Reliability Engineers",
      "Software Developers and Application Teams",
      "IT Infrastructure Managers",
      "Data Engineers and Scientists",
      "Security Engineers and Compliance Teams",
      "Chief Technology Officers"
    ],
    challenges: [
      "Cost optimization complexity with over 200 services and pricing models",
      "Skills shortage for AWS-certified architects and engineers",
      "Vendor lock-in concerns with proprietary AWS services",
      "Security configuration complexity across multiple services",
      "Network latency optimization for global deployments",
      "Resource governance and cost allocation across teams",
      "Integration challenges with existing on-premises infrastructure",
      "Compliance requirements across different AWS regions",
      "Performance monitoring and troubleshooting in distributed systems",
      "Migration complexity from legacy systems to AWS native services"
    ]
  },
  "Azure": {
    category: "Microsoft Azure Cloud Platform",
    description: "Microsoft Azure is a comprehensive cloud platform with strong integration capabilities for Microsoft enterprise environments. Azure offers hybrid cloud solutions, AI services, and extensive compliance offerings, particularly popular among organizations using Microsoft technologies.",
    applications: [
      "Azure Virtual Machines and Scale Sets",
      "Azure Active Directory Identity Management",
      "Office 365 and Microsoft 365 Integration",
      "Azure SQL Database and Cosmos DB",
      "Azure DevOps and GitHub Integration",
      "Power BI and Azure Analytics Services",
      "Azure Kubernetes Service (AKS)"
    ],
    targetIndustries: [
      "Enterprise and Fortune 500 Companies",
      "Financial Services and Banking",
      "Healthcare and Government",
      "Manufacturing and Industrial",
      "Education and Research Institutions",
      "Professional Services",
      "Non-Profit Organizations"
    ],
    targetAudience: [
      "Microsoft-focused IT Professionals",
      "Enterprise Architects and System Integrators",
      "Azure Administrators and Engineers",
      "Business Application Developers",
      "Data Platform Engineers",
      "Security and Compliance Officers",
      "Digital Transformation Leaders"
    ],
    challenges: [
      "Complex licensing models and enterprise agreement negotiations",
      "Integration complexity between Azure and on-premises Active Directory",
      "Skills transition from traditional Microsoft infrastructure to cloud",
      "Cost management for enterprise-scale Azure deployments",
      "Hybrid cloud architecture design and implementation complexity",
      "Performance optimization for Microsoft workloads in cloud",
      "Security governance across Azure and Office 365 environments",
      "Migration planning for legacy Microsoft applications",
      "Resource naming and governance standards across large organizations",
      "Dependency management between interconnected Microsoft services"
    ]
  },
  "Salesforce": {
    category: "Customer Relationship Management Platform",
    description: "Salesforce dominates the CRM market with 17,304 companies using their platform. Salesforce offers Sales Cloud, Service Cloud, Marketing Cloud, and Commerce Cloud with extensive customization through AppExchange ecosystem and Lightning Platform.",
    applications: [
      "Sales Cloud for Opportunity Management",
      "Service Cloud for Customer Support",
      "Marketing Cloud for Campaign Automation",
      "Commerce Cloud for E-commerce",
      "Analytics Cloud (Tableau) for Business Intelligence",
      "AppExchange Custom Applications",
      "Lightning Platform for Custom Development"
    ],
    targetIndustries: [
      "Technology and Software Companies",
      "Financial Services and Insurance",
      "Healthcare and Life Sciences",
      "Manufacturing and B2B Sales",
      "Real Estate and Property Management",
      "Professional Services and Consulting",
      "Non-Profit and Education"
    ],
    targetAudience: [
      "Sales Representatives and Account Executives",
      "Customer Service Representatives",
      "Marketing Campaign Managers",
      "Salesforce Administrators and Developers",
      "Business Analysts and Process Owners",
      "Sales Operations and Revenue Operations Teams",
      "Executive Leadership and Sales Directors"
    ],
    challenges: [
      "High licensing costs scaling with user count and feature requirements",
      "Complex customization leading to technical debt and maintenance issues",
      "User adoption resistance requiring extensive training and change management",
      "Data quality issues with duplicate records and incomplete information",
      "Integration complexity with existing enterprise systems and applications",
      "AppExchange dependency and vendor lock-in concerns",
      "Performance issues with heavily customized Salesforce instances",
      "Governance challenges for large-scale multi-cloud Salesforce deployments",
      "Skills shortage for certified Salesforce developers and architects",
      "ROI measurement difficulties in complex sales process environments"
    ]
  },
  "HubSpot": {
    category: "Inbound Marketing and CRM Platform",
    description: "HubSpot provides an integrated inbound marketing, sales, and customer service platform designed for growing businesses. Known for its user-friendly interface and comprehensive free tier, HubSpot focuses on content marketing, lead nurturing, and sales automation.",
    applications: [
      "Content Management and Blogging Platform",
      "Email Marketing and Lead Nurturing",
      "Marketing Automation and Workflows",
      "Sales Pipeline and Deal Management",
      "Customer Service and Ticketing",
      "Social Media Management and Monitoring",
      "Landing Page and Form Builder"
    ],
    targetIndustries: [
      "Small to Medium Businesses (SMBs)",
      "Digital Marketing Agencies",
      "Technology and SaaS Companies",
      "Professional Services and Consulting",
      "E-commerce and Retail",
      "Education and Training",
      "Healthcare and Wellness"
    ],
    targetAudience: [
      "Digital Marketing Managers and Specialists",
      "Content Marketing and SEO Professionals",
      "Sales Development Representatives",
      "Small Business Owners and Entrepreneurs",
      "Marketing Operations Managers",
      "Customer Success Managers",
      "Growth Marketing Teams"
    ],
    challenges: [
      "Pricing escalation as contact database and feature requirements grow",
      "Limited customization options compared to enterprise CRM solutions",
      "Integration limitations with complex enterprise software ecosystems",
      "Reporting and analytics capabilities constraints for advanced use cases",
      "Scalability limitations for large enterprise sales organizations",
      "Data export and migration complexity when outgrowing HubSpot",
      "Advanced workflow automation limitations for complex business processes",
      "Multi-currency and international business requirement limitations",
      "API rate limits affecting integration and data synchronization",
      "Customer support responsiveness for lower-tier subscription plans"
    ]
  },
  "Enterprise Software": {
    category: "Enterprise Resource Planning",
    description: "ERP systems integrate core business processes like finance, HR, manufacturing, and supply chain into a single system. SAP leads the market with 57,299 companies, followed by Sage (15,813 companies), Infor (8,430 companies), and Oracle JD Edwards (2,821 companies).",
    applications: [
      "SAP S/4HANA for Large Enterprises",
      "SAP Business One for SMEs", 
      "Oracle E-Business Suite (2,360 companies)",
      "Oracle Fusion Cloud ERP",
      "JD Edwards EnterpriseOne (2,821 companies)",
      "Sage ERP Solutions (15,813 companies)",
      "Infor CloudSuite Industrial (8,430 companies)"
    ],
    targetIndustries: [
      "Manufacturing and Distribution",
      "Construction and Engineering", 
      "Retail and Consumer Goods",
      "Financial Services",
      "Healthcare and Pharmaceuticals",
      "Energy and Utilities",
      "Government and Public Sector"
    ],
    targetAudience: [
      "Chief Financial Officers (CFOs)",
      "IT Directors and ERP Administrators",
      "Finance and Accounting Teams",
      "Supply Chain and Operations Managers",
      "Manufacturing Planners",
      "Human Resources Directors",
      "Business Process Analysts"
    ],
    challenges: [
      "High implementation costs ranging from $150K to $750K for mid-market",
      "Complex integration with legacy systems and third-party applications",
      "Lengthy deployment timelines often extending 12-18 months",
      "User adoption resistance requiring extensive change management",
      "Data migration complexity with risk of data loss or corruption",
      "Ongoing licensing and maintenance costs consuming 15-22% annually",
      "Customization limitations constraining unique business processes",
      "Vendor lock-in creating dependency on proprietary ecosystems",
      "Performance degradation during peak transaction periods",
      "Skills shortage for specialized ERP technical expertise"
    ]
  },
  "CRM & Marketing": {
    category: "Customer Relationship Management",
    description: "CRM systems are dominated by Salesforce with 17,304 companies, followed by Microsoft Dynamics CRM (3,317 companies) and SugarCRM (3,213 companies). These platforms help businesses manage customer interactions, track sales opportunities, and improve customer service.",
    applications: [
      "Salesforce Sales Cloud and Service Cloud (17,304 companies)",
      "Salesforce Marketing Cloud and Commerce Cloud",
      "Microsoft Dynamics 365 CRM (3,317 companies)",
      "SugarCRM Sales and Marketing Automation (3,213 companies)",
      "Zoho CRM and Business Suite",
      "HubSpot Inbound Marketing Platform",
      "Zendesk Customer Service Solutions"
    ],
    targetIndustries: [
      "Technology and Software Companies",
      "Financial Services and Insurance",
      "Real Estate and Property Management",
      "Healthcare and Medical Services",
      "Professional Services and Consulting",
      "E-commerce and Retail",
      "Manufacturing and B2B Sales"
    ],
    targetAudience: [
      "Sales Representatives and Account Managers",
      "Marketing Directors and Campaign Managers",
      "Customer Service Representatives",
      "Business Development Teams",
      "Sales Directors and VP of Sales",
      "Chief Marketing Officers (CMOs)",
      "Customer Success and Retention Specialists"
    ],
    challenges: [
      "Data quality issues with duplicate and incomplete customer records",
      "User adoption resistance requiring extensive training and change management",
      "Integration complexity with existing ERP and business systems",
      "GDPR and privacy regulation compliance for customer data",
      "ROI measurement difficulties in attribution and campaign effectiveness",
      "Scalability limitations as customer databases grow exponentially",
      "Customization constraints limiting unique sales process requirements",
      "High licensing costs scaling with user count and feature requirements",
      "Mobile functionality gaps affecting field sales team productivity",
      "Vendor lock-in creating dependency on proprietary ecosystem extensions"
    ]
  },
  "Cloud Computing": {
    category: "Cloud Infrastructure and Services",
    description: "In cloud services, Amazon leads with 32,531 companies using their platform, followed by SoftLayer (30,841) and Rackspace (29,225). Amazon Web Services (AWS) specifically is used by 16,957 companies. Cloud services provide on-demand computing resources over the internet.",
    applications: [
      "Amazon Web Services (AWS) - 16,957 companies",
      "Microsoft Azure with hybrid cloud capabilities",
      "Google Cloud Platform (GCP) - 3,013 companies",
      "SoftLayer Infrastructure Services - 30,841 companies",
      "Rackspace Managed Cloud - 29,225 companies",
      "Oracle Cloud Infrastructure",
      "IBM Cloud Computing Services"
    ],
    targetIndustries: [
      "Technology and Software Development",
      "Financial Services and Banking",
      "Healthcare and Life Sciences",
      "Media and Entertainment",
      "Government and Public Sector",
      "E-commerce and Retail",
      "Manufacturing and Industrial"
    ],
    targetAudience: [
      "IT Directors and Infrastructure Managers",
      "Cloud Architects and Solutions Engineers",
      "DevOps Engineers and System Administrators",
      "Chief Technology Officers",
      "Software Developers and Engineers",
      "Data Scientists and Analysts",
      "Digital Transformation Leaders"
    ],
    challenges: [
      "Security vulnerabilities and data protection in shared environments",
      "Vendor lock-in limiting multi-cloud flexibility and portability",
      "Cost optimization complexity with unpredictable billing spikes",
      "Network latency affecting real-time application performance",
      "Compliance requirements varying across global jurisdictions",
      "Skills shortage for cloud-native architecture and deployment",
      "Data migration complexity from legacy on-premises systems",
      "Service availability dependencies and downtime impact",
      "Integration challenges with existing enterprise infrastructure",
      "Governance and control limitations over distributed cloud resources"
    ]
  },
  "Database Management": {
    category: "Data Management and Storage",
    description: "Oracle Corporation dominates enterprise technology with 2.84M+ companies across 613+ products and technologies, generating 5M+ records. This includes Oracle Database, Oracle Cloud Infrastructure, JD Edwards, PeopleSoft, Java, MySQL, and comprehensive enterprise applications. Oracle's ecosystem far exceeds traditional database-only solutions.",
    applications: [
      "Oracle Database (2.84M+ companies, 613+ products)",
      "Oracle Autonomous Database Cloud Services",
      "Oracle Fusion Cloud ERP and Enterprise Applications",
      "Oracle Cloud Infrastructure and Platform Services", 
      "JD Edwards EnterpriseOne and World ERP Solutions",
      "PeopleSoft Human Capital Management and Financials",
      "Oracle Java Platform and Enterprise Development Tools",
      "Oracle MySQL Database and Open Source Technologies",
      "Oracle Analytics Cloud and Business Intelligence",
      "Oracle HCM Cloud and Supply Chain Management"
    ],
    targetIndustries: [
      "Banking and Financial Services",
      "Healthcare and Medical Records",
      "Government and Public Records",
      "E-commerce and Retail",
      "Manufacturing and Supply Chain",
      "Telecommunications and Media",
      "Insurance and Risk Management"
    ],
    targetAudience: [
      "Oracle Database Administrators (DBAs) and Specialists",
      "Oracle Fusion and Cloud Application Administrators", 
      "JD Edwards Functional and Technical Consultants",
      "PeopleSoft System Administrators and Developers",
      "Java Developers and Enterprise Architects",
      "Oracle Cloud Infrastructure Engineers",
      "Oracle Analytics and BI Specialists",
      "Oracle HCM and SCM Functional Users",
      "IT Directors and Oracle Technology Managers",
      "Oracle Middleware and Integration Specialists",
      "Chief Information Officers and Enterprise Architects"
    ],
    challenges: [
      "Complex Oracle licensing models and cost optimization across 613+ products",
      "Multi-product Oracle ecosystem integration and data consistency management",
      "Oracle Cloud migration planning from legacy on-premises systems",
      "Oracle Database performance tuning across diverse enterprise workloads",
      "JD Edwards and PeopleSoft customization and upgrade management complexity",
      "Oracle security and compliance requirements across multiple product lines",
      "Oracle Fusion Cloud implementation and organizational change management",
      "Java application modernization and containerization initiatives",
      "Oracle middleware configuration and enterprise performance optimization",
      "Cross-platform Oracle technology skills development and training programs",
      "Oracle support and maintenance cost management for comprehensive deployments",
      "Oracle technology roadmap alignment with long-term business strategy"
    ]
  },
  "Artificial Intelligence": {
    category: "Artificial Intelligence and Machine Learning",
    description: "Artificial Intelligence encompasses technologies that enable machines to simulate human intelligence, including machine learning, natural language processing, computer vision, and automated decision-making systems.",
    applications: [
      "Predictive Analytics and Forecasting",
      "Natural Language Processing and Chatbots",
      "Computer Vision and Image Recognition",
      "Recommendation Systems",
      "Fraud Detection and Risk Assessment",
      "Process Automation and Optimization",
      "Personalization and Customer Experience"
    ],
    targetIndustries: [
      "Technology and Software",
      "Healthcare and Pharmaceuticals",
      "Financial Services and Banking",
      "Automotive and Transportation",
      "Retail and E-commerce",
      "Manufacturing and Industrial",
      "Media and Entertainment"
    ],
    targetAudience: [
      "Data Scientists and ML Engineers",
      "Software Developers and AI Researchers",
      "Product Managers and Innovation Leaders",
      "Business Analysts and Strategists",
      "Chief Technology Officers",
      "Research and Development Teams",
      "Digital Transformation Specialists"
    ],
    challenges: [
      "Data quality and availability for training models",
      "Bias and fairness in AI decision-making",
      "Interpretability and explainability of AI systems",
      "Regulatory compliance and ethical considerations",
      "High computational costs and infrastructure requirements",
      "Skills shortage and talent acquisition difficulties",
      "Integration with existing business processes",
      "Model accuracy and performance optimization",
      "Privacy concerns and data protection",
      "Continuous model maintenance and updates"
    ]
  },
  "Machine Learning": {
    category: "Machine Learning and Predictive Analytics",
    description: "Machine Learning enables systems to automatically learn and improve from experience without explicit programming, using algorithms to identify patterns in data and make predictions or decisions.",
    applications: [
      "Supervised Learning for Classification",
      "Unsupervised Learning for Pattern Discovery",
      "Reinforcement Learning for Decision Making",
      "Deep Learning for Complex Pattern Recognition",
      "Time Series Analysis and Forecasting",
      "Anomaly Detection and Outlier Identification",
      "Feature Engineering and Data Preprocessing"
    ],
    targetIndustries: [
      "Financial Services and Trading",
      "Healthcare and Medical Diagnostics",
      "Technology and Software",
      "Marketing and Advertising",
      "Manufacturing and Quality Control",
      "Transportation and Logistics",
      "Energy and Utilities"
    ],
    targetAudience: [
      "Data Scientists and Statisticians",
      "Machine Learning Engineers",
      "Research Scientists and Academics",
      "Business Intelligence Analysts",
      "Software Engineers and Developers",
      "Product Managers and Decision Makers",
      "Domain Experts and Subject Matter Specialists"
    ],
    challenges: [
      "Data preprocessing and feature engineering complexity",
      "Model selection and hyperparameter tuning",
      "Overfitting and generalization issues",
      "Scalability for large datasets and real-time processing",
      "Model interpretability and business stakeholder understanding",
      "Data drift and model performance degradation",
      "Infrastructure requirements for training and deployment",
      "Ethical implications and bias mitigation",
      "Regulatory compliance and model governance",
      "Continuous monitoring and model maintenance"
    ]
  },
  "Blockchain": {
    category: "Distributed Ledger Technology",
    description: "Blockchain technology provides a decentralized, immutable ledger system that enables secure, transparent, and trustless transactions without intermediaries, revolutionizing how data and value are exchanged.",
    applications: [
      "Cryptocurrency and Digital Payments",
      "Smart Contracts and Automated Agreements",
      "Supply Chain Transparency and Traceability",
      "Digital Identity and Authentication",
      "Decentralized Finance (DeFi) Platforms",
      "Non-Fungible Tokens (NFTs) and Digital Assets",
      "Voting Systems and Governance"
    ],
    targetIndustries: [
      "Financial Services and Banking",
      "Supply Chain and Logistics",
      "Healthcare and Medical Records",
      "Real Estate and Property Management",
      "Government and Public Services",
      "Entertainment and Gaming",
      "Energy and Utilities"
    ],
    targetAudience: [
      "Blockchain Developers and Engineers",
      "Cryptocurrency Traders and Investors",
      "Financial Technology Professionals",
      "Supply Chain Managers",
      "Digital Innovation Officers",
      "Compliance and Legal Professionals",
      "Entrepreneurs and Startup Founders"
    ],
    challenges: [
      "Scalability limitations and transaction throughput",
      "Energy consumption and environmental impact",
      "Regulatory uncertainty and compliance complexity",
      "User experience and technical complexity barriers",
      "Interoperability between different blockchain networks",
      "Security vulnerabilities and smart contract bugs",
      "Storage limitations and data management",
      "Adoption resistance from traditional institutions",
      "Volatility and market speculation concerns",
      "Skills shortage and development expertise requirements"
    ]
  },
  "Internet of Things": {
    category: "Connected Devices and IoT Systems",
    description: "Internet of Things (IoT) connects everyday objects and devices to the internet, enabling them to collect, exchange, and act on data to create smart, automated, and efficient systems.",
    applications: [
      "Smart Home Automation and Control",
      "Industrial IoT and Manufacturing Optimization",
      "Smart City Infrastructure Management",
      "Healthcare Monitoring and Wearable Devices",
      "Agricultural Sensors and Precision Farming",
      "Asset Tracking and Fleet Management",
      "Environmental Monitoring and Sustainability"
    ],
    targetIndustries: [
      "Manufacturing and Industrial Automation",
      "Healthcare and Medical Devices",
      "Agriculture and Food Production",
      "Transportation and Logistics",
      "Energy and Utilities Management",
      "Smart Cities and Urban Planning",
      "Consumer Electronics and Home Automation"
    ],
    targetAudience: [
      "IoT Developers and Hardware Engineers",
      "System Integrators and Solution Architects",
      "Operations and Facility Managers",
      "Product Managers and Innovation Teams",
      "Data Analysts and IoT Specialists",
      "Network Engineers and Infrastructure Teams",
      "Business Development and Strategy Professionals"
    ],
    challenges: [
      "Security vulnerabilities and device protection",
      "Data privacy and user consent management",
      "Network connectivity and bandwidth limitations",
      "Device interoperability and standardization issues",
      "Power management and battery life optimization",
      "Scalability for massive device deployments",
      "Data processing and storage requirements",
      "Maintenance and remote device management",
      "Cost optimization for hardware and connectivity",
      "Regulatory compliance across different markets"
    ]
  },
  "Cybersecurity": {
    category: "Information Security and Threat Protection",
    description: "Cybersecurity encompasses technologies, processes, and practices designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access in the digital environment.",
    applications: [
      "Network Security and Firewall Protection",
      "Endpoint Detection and Response (EDR)",
      "Identity and Access Management (IAM)",
      "Security Information and Event Management (SIEM)",
      "Vulnerability Assessment and Penetration Testing",
      "Data Loss Prevention (DLP)",
      "Cloud Security and Compliance"
    ],
    targetIndustries: [
      "Financial Services and Banking",
      "Healthcare and Medical Systems",
      "Government and Defense",
      "Critical Infrastructure and Utilities",
      "Technology and Software",
      "Retail and E-commerce",
      "Education and Research Institutions"
    ],
    targetAudience: [
      "Chief Information Security Officers (CISOs)",
      "Security Analysts and Specialists",
      "Network Administrators and Engineers",
      "Compliance and Risk Management Professionals",
      "IT Directors and Infrastructure Managers",
      "Incident Response Teams",
      "Security Consultants and Auditors"
    ],
    challenges: [
      "Evolving threat landscape and sophisticated attacks",
      "Skills shortage and cybersecurity talent gap",
      "Balancing security with user experience and productivity",
      "Budget constraints and cost justification",
      "Compliance with multiple regulatory frameworks",
      "Legacy system vulnerabilities and patch management",
      "Insider threats and privileged access abuse",
      "Cloud security and shared responsibility models",
      "Integration complexity across security tools",
      "Incident response and business continuity planning"
    ]
  }
};

export function getFallbackAnalysis(technology: string): TechnologyAnalysis | null {
  // Direct match
  if (fallbackTechnologyData[technology]) {
    return fallbackTechnologyData[technology];
  }
  
  // Fuzzy match for common variations
  const lowerTech = technology.toLowerCase();
  
  // SAP specific products
  if (lowerTech.includes('sap bpc') || lowerTech.includes('business planning')) {
    return fallbackTechnologyData["SAP BPC"];
  }
  if (lowerTech.includes('sap s/4hana') || lowerTech.includes('s4hana')) {
    return fallbackTechnologyData["SAP S/4HANA"];
  }
  if (lowerTech.includes('ai') || lowerTech.includes('artificial intelligence')) {
    return fallbackTechnologyData["Artificial Intelligence"];
  }
  if (lowerTech.includes('machine learning') || lowerTech.includes('ml')) {
    return fallbackTechnologyData["Machine Learning"];
  }
  if (lowerTech.includes('cloud')) {
    return fallbackTechnologyData["Cloud Computing"];
  }
  if (lowerTech.includes('blockchain') || lowerTech.includes('crypto')) {
    return fallbackTechnologyData["Blockchain"];
  }
  if (lowerTech.includes('iot') || lowerTech.includes('internet of things')) {
    return fallbackTechnologyData["Internet of Things"];
  }
  if (lowerTech.includes('security') || lowerTech.includes('cyber')) {
    return fallbackTechnologyData["Cybersecurity"];
  }
  if (lowerTech.includes('database') || lowerTech.includes('sql')) {
    return fallbackTechnologyData["Database Management"];
  }
  if (lowerTech.includes('crm') || lowerTech.includes('marketing')) {
    return fallbackTechnologyData["CRM & Marketing"];
  }
  if (lowerTech.includes('erp') || lowerTech.includes('enterprise') || lowerTech.includes('sap')) {
    return fallbackTechnologyData["Enterprise Software"];
  }
  if (lowerTech.includes('aws') || lowerTech.includes('amazon web services')) {
    return fallbackTechnologyData["AWS"];
  }
  if (lowerTech.includes('azure') || lowerTech.includes('microsoft azure')) {
    return fallbackTechnologyData["Azure"];
  }
  if (lowerTech.includes('google cloud') || lowerTech.includes('gcp')) {
    return fallbackTechnologyData["Google Cloud"];
  }
  if (lowerTech.includes('vmware') || lowerTech.includes('virtualization')) {
    return fallbackTechnologyData["VMware"];
  }
  if (lowerTech.includes('salesforce') || lowerTech.includes('sfdc')) {
    return fallbackTechnologyData["Salesforce"];
  }
  if (lowerTech.includes('hubspot') || lowerTech.includes('inbound marketing')) {
    return fallbackTechnologyData["HubSpot"];
  }
  if (lowerTech.includes('marketo') || lowerTech.includes('marketing automation')) {
    return fallbackTechnologyData["Marketo"];
  }
  if (lowerTech.includes('oracle database') || lowerTech.includes('oracle db') || lowerTech.includes('oracle corporation') || lowerTech.includes('oracle')) {
    return fallbackTechnologyData["Database Management"];
  }
  if (lowerTech.includes('fintech') || lowerTech.includes('financial technology')) {
    return fallbackTechnologyData["FinTech"];
  }
  if (lowerTech.includes('healthcare it') || lowerTech.includes('health information')) {
    return fallbackTechnologyData["Healthcare IT"];
  }
  
  return null;
}