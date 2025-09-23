export interface MenuItem {
  title: string;
  link?: string;
  items?: MenuItem[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuStructure: MenuSection[] = [
  {
    title: "Technology Data",
    items: [
      {
        title: "Enterprise Software",
        items: [
          { title: "ERP Users List", link: "/pages/erp_users_list" },
          { title: "SAP Users List", link: "/pages/sap_users_list" },
          { title: "Oracle Users List", link: "/pages/oracle_users_list" },
          { title: "JD Edwards Users List", link: "/pages/jd_edwards_users_list" },
          { title: "AS400 & iSeries Users List", link: "/pages/as400_iseries_users_list" }
        ]
      },
      {
        title: "CRM & Marketing",
        items: [
          { title: "CRM Users List", link: "/pages/crm_users_list" },
          { title: "Salesforce Users List", link: "/pages/salesforce_users_list" },
          { title: "SugarCRM Users List", link: "/pages/sugarcrm_users_list" },
          { title: "HubSpot Users List", link: "/pages/hubspot_users_list" },
          { title: "Marketo Users List", link: "/pages/marketo_users_list" }
        ]
      },
      {
        title: "Cloud & Infrastructure",
        items: [
          { title: "Cloud Services Users List", link: "/pages/cloud_services_users_list" },
          { title: "AWS Users List", link: "/pages/aws_users_list" },
          { title: "Azure Users List", link: "/pages/azure_users_list" },
          { title: "Google Cloud Users List", link: "/pages/google_cloud_users_list" },
          { title: "VMware Users List", link: "/pages/vmware_users_list" }
        ]
      },
      {
        title: "Mainframe & Legacy Systems",
        items: [
          { title: "IBM Mainframe Users", link: "/ibm-mainframe-users-list" },
          { title: "IBM System z Users", link: "/ibm-system-z-users-list" },
          { title: "IBM 3090 Users", link: "/ibm-3090-users-list" },
          { title: "IBM ES/9000 Users", link: "/ibm-es9000-users-list" },
          { title: "IBM 3084 Users", link: "/ibm-3084-users-list" }
        ]
      },
      {
        title: "Specialized Technology",
        items: [
          { title: "AI & Machine Learning Users", link: "/pages/ai_machine_learning_users_list" },
          { title: "Cybersecurity Solutions Users", link: "/pages/cybersecurity_users_list" },
          { title: "FinTech Solutions Users", link: "/pages/fintech_users_list" },
          { title: "Healthcare IT Users", link: "/pages/healthcare_it_users_list" },
          { title: "View All Technology Lists", link: "/pages/technology_lists" }
        ]
      }
    ]
  },
  {
    title: "Data Solutions",
    items: [
      { title: "Business Contact Data", link: "/pages/business_contact_data" },
      { title: "Data Enrichment Services", link: "/pages/data_enrichment_services" },
      { title: "Data Cleansing & Verification", link: "/pages/data_cleansing_verification" },
      { title: "Custom Data Research", link: "/pages/custom_data_research" },
      { title: "Global Business Database", link: "/pages/global_business_database" }
    ]
  },
  {
    title: "Data Services",
    items: [
      { title: "Data Appending", link: "/pages/data_appending" },
      { title: "Data Integration", link: "/pages/data_integration" },
      { title: "Data Management", link: "/pages/data_management" },
      { title: "Data Analytics", link: "/pages/data_analytics" },
      { title: "Data Consulting", link: "/pages/data_consulting" }
    ]
  },
  {
    title: "Marketing Solutions",
    items: [
      { title: "Email Marketing Campaigns", link: "/pages/email_marketing_campaigns" },
      { title: "Account-Based Marketing", link: "/pages/account_based_marketing" },
      { title: "Intent Data Solutions", link: "/pages/intent_data_solutions" },
      { title: "Lead Generation Services", link: "/pages/lead_generation_services" },
      { title: "Marketing Automation", link: "/pages/marketing_automation" }
    ]
  },
  {
    title: "Professional Email Lists",
    items: [
      {
        title: "C-Level Executives",
        items: [
          { title: "CEO Email List", link: "/ceo-email-list" },
          { title: "CFO Email List", link: "/cfo-email-list" },
          { title: "CTO Email List", link: "/cto-email-list" },
          { title: "CMO Email List", link: "/cmo-email-list" },
          { title: "VP Email List", link: "/vp-email-list" }
        ]
      },
      {
        title: "Management Professionals",
        items: [
          { title: "Directors Email List", link: "/directors-email-list" },
          { title: "Managers Email List", link: "/managers-email-list" },
          { title: "Decision Makers Email List", link: "/decision-makers-email-list" },
          { title: "Corporate Executives Email List", link: "/corporate-executives-email-list" }
        ]
      },
      {
        title: "Healthcare Professionals",
        items: [
          { title: "Doctors Email List", link: "/doctors-email-list" },
          { title: "Nurses Email List", link: "/nurses-email-list" },
          { title: "Pharmacists Email List", link: "/pharmacists-email-list" },
          { title: "Dentists Email List", link: "/dentists-email-list" }
        ]
      },
      {
        title: "Technical Professionals",
        items: [
          { title: "Engineers Email List", link: "/engineers-email-list" },
          { title: "Software Engineers Email List", link: "/software-engineers-email-list" },
          { title: "Electrical Engineers Email List", link: "/electrical-engineers-email-list" },
          { title: "Civil Engineers Email List", link: "/civil-engineers-email-list" },
          { title: "Architects Email List", link: "/architects-email-list" }
        ]
      },
      {
        title: "Professional Services",
        items: [
          { title: "Lawyers Email List", link: "/lawyers-email-list" },
          { title: "Accountants Email List", link: "/accountants-email-list" },
          { title: "Real Estate Agents Email List", link: "/real-estate-agents-email-list" },
          { title: "Teachers Email List", link: "/teachers-email-list" },
          { title: "Consultants Email List", link: "/consultants-email-list" }
        ]
      },
      {
        title: "Specialized Roles",
        items: [
          { title: "Security Specialists Email List", link: "/security-specialists-email-list" },
          { title: "Technical Officers Email List", link: "/technical-officers-email-list" },
          { title: "HR Executives Email List", link: "/hr-executives-email-list" },
          { title: "Financial Decision Makers Email List", link: "/financial-decision-makers-email-list" }
        ]
      }
    ]
  },
  {
    title: "Risk Management",
    items: [
      { title: "Business Credit Reports", link: "/pages/business_credit_reports" },
      { title: "Compliance Solutions", link: "/pages/compliance_solutions" },
      { title: "Fraud Prevention", link: "/pages/fraud_prevention" },
      { title: "Risk Assessment Tools", link: "/pages/risk_assessment_tools" },
      { title: "Due Diligence Services", link: "/pages/due_diligence_services" }
    ]
  }
];

export const navigationItems: MenuItem[] = [
  { title: "Resources", link: "/pages/resources" },
  { title: "About Us", link: "/pages/about" },
  { title: "Contact", link: "/pages/contact" }
];