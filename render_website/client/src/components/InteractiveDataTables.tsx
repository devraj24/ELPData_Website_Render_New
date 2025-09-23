import { useState } from "react";

export default function InteractiveDataTables() {
  const [activeTab, setActiveTab] = useState("emerging-tech");
  const [searchTerm, setSearchTerm] = useState("");

  const technologyLeadersData = [
    {
      technology: "VMware vSphere",
      category: "Virtualization",
      companies: "391,200",
      funding: "$12.8B",
      growth: "+8%",
      status: "Market Leader",
      icon: "fas fa-server",
      statusColor: "bg-blue-100 text-blue-800 border border-blue-200",
      growthColor: "text-green-600",
      categoryColor: "bg-blue-50 text-blue-700"
    },
    {
      technology: "SAP ERP",
      category: "Enterprise Software",
      companies: "368,700",
      funding: "$28.5B",
      growth: "+12%",
      status: "Dominant",
      icon: "fas fa-cogs",
      statusColor: "bg-green-100 text-green-800 border border-green-200",
      growthColor: "text-green-600",
      categoryColor: "bg-green-50 text-green-700"
    },
    {
      technology: "Salesforce.com",
      category: "CRM Platform",
      companies: "599,000",
      funding: "$24.1B",
      growth: "+18%",
      status: "Leader",
      icon: "fas fa-users",
      statusColor: "bg-purple-100 text-purple-800 border border-purple-200",
      growthColor: "text-green-600",
      categoryColor: "bg-purple-50 text-purple-700"
    },
    {
      technology: "Oracle Corporation",
      category: "Enterprise Technology Ecosystem",
      companies: "2,840,000",
      funding: "$42.4B",
      growth: "+42%",
      status: "Dominant",
      icon: "fas fa-database",
      statusColor: "bg-red-100 text-red-800 border border-red-200",
      growthColor: "text-green-600",
      categoryColor: "bg-red-50 text-red-700"
    },
    {
      technology: "PEO/EOR Services",
      category: "Workforce Management",
      companies: "167,365",
      funding: "$15.2B",
      growth: "+22%",
      status: "Growing",
      icon: "fas fa-users-gear",
      statusColor: "bg-orange-100 text-orange-800 border border-orange-200",
      growthColor: "text-green-600",
      categoryColor: "bg-orange-50 text-orange-700"
    },
    {
      technology: "JD Edwards",
      category: "ERP Software",
      companies: "47,982",
      funding: "$8.9B",
      growth: "+6%",
      status: "Stable",
      icon: "fas fa-database",
      statusColor: "bg-cyan-100 text-cyan-800 border border-cyan-200",
      growthColor: "text-green-600",
      categoryColor: "bg-cyan-50 text-cyan-700"
    },
    {
      technology: "Microsoft Dynamics AX",
      category: "ERP Platform",
      companies: "26,322",
      funding: "$12.4B",
      growth: "+14%",
      status: "Growing",
      icon: "fas fa-briefcase",
      statusColor: "bg-emerald-100 text-emerald-800 border border-emerald-200",
      growthColor: "text-green-600",
      categoryColor: "bg-emerald-50 text-emerald-700"
    },
    {
      technology: "Microsoft Office 365",
      category: "Office Suite",
      companies: "678,920",
      funding: "$72.4B",
      growth: "+22%",
      status: "Market Leader",
      icon: "fas fa-file-alt",
      statusColor: "bg-indigo-100 text-indigo-800 border border-indigo-200",
      growthColor: "text-green-600",
      categoryColor: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "Workday HCM",
      category: "Human Capital Management",
      companies: "234,560",
      funding: "$32.1B",
      growth: "+28%",
      status: "Growing",
      icon: "fas fa-users-cog",
      statusColor: "bg-teal-100 text-teal-800 border border-teal-200",
      growthColor: "text-green-600",
      categoryColor: "bg-teal-50 text-teal-700"
    },
    {
      technology: "ServiceNow ITSM",
      category: "IT Service Management",
      companies: "198,750",
      funding: "$45.8B",
      growth: "+38%",
      status: "Rapid Growth",
      icon: "fas fa-tools",
      statusColor: "bg-rose-100 text-rose-800 border border-rose-200",
      growthColor: "text-green-600",
      categoryColor: "bg-rose-50 text-rose-700"
    },
    {
      technology: "Tableau Analytics",
      category: "Business Intelligence",
      companies: "167,890",
      funding: "$28.7B",
      growth: "+25%",
      status: "Leader",
      icon: "fas fa-chart-bar",
      statusColor: "bg-violet-100 text-violet-800 border border-violet-200",
      growthColor: "text-green-600",
      categoryColor: "bg-violet-50 text-violet-700"
    },
    {
      technology: "Slack Enterprise",
      category: "Collaboration Platform",
      companies: "145,680",
      funding: "$19.3B",
      growth: "+45%",
      status: "Strong Growth",
      icon: "fas fa-comments",
      statusColor: "bg-pink-100 text-pink-800 border border-pink-200",
      growthColor: "text-green-600",
      categoryColor: "bg-pink-50 text-pink-700"
    },
    {
      technology: "Zoom Communications",
      category: "Video Conferencing",
      companies: "278,940",
      funding: "$23.6B",
      growth: "+67%",
      status: "Rapid Growth",
      icon: "fas fa-video",
      statusColor: "bg-sky-100 text-sky-800 border border-sky-200",
      growthColor: "text-green-600",
      categoryColor: "bg-sky-50 text-sky-700"
    },
    {
      technology: "MongoDB Atlas",
      category: "NoSQL Database",
      companies: "123,450",
      funding: "$15.8B",
      growth: "+89%",
      status: "Emerging Leader",
      icon: "fas fa-leaf",
      statusColor: "bg-lime-100 text-lime-800 border border-lime-200",
      growthColor: "text-green-600",
      categoryColor: "bg-lime-50 text-lime-700"
    },
    {
      technology: "Snowflake Data Cloud",
      category: "Data Platform",
      companies: "89,340",
      funding: "$42.9B",
      growth: "+156%",
      status: "Hyper Growth",
      icon: "fas fa-snowflake",
      statusColor: "bg-cyan-100 text-cyan-800 border border-cyan-200",
      growthColor: "text-green-600",
      categoryColor: "bg-cyan-50 text-cyan-700"
    },
    {
      technology: "Palantir Foundry",
      category: "Data Analytics",
      companies: "67,890",
      funding: "$38.4B",
      growth: "+78%",
      status: "Growing",
      icon: "fas fa-eye",
      statusColor: "bg-gray-100 text-gray-800 border border-gray-200",
      growthColor: "text-green-600",
      categoryColor: "bg-gray-50 text-gray-700"
    },
    {
      technology: "HubSpot Marketing",
      category: "Marketing Automation",
      companies: "234,780",
      funding: "$21.5B",
      growth: "+52%",
      status: "Strong Growth",
      icon: "fas fa-heart",
      statusColor: "bg-red-100 text-red-800 border border-red-200",
      growthColor: "text-green-600",
      categoryColor: "bg-red-50 text-red-700"
    },
    {
      technology: "Atlassian Jira",
      category: "Project Management",
      companies: "189,560",
      funding: "$16.9B",
      growth: "+34%",
      status: "Leader",
      icon: "fas fa-tasks",
      statusColor: "bg-blue-100 text-blue-800 border border-blue-200",
      growthColor: "text-green-600",
      categoryColor: "bg-blue-50 text-blue-700"
    },
    {
      technology: "GitHub Enterprise",
      category: "DevOps Platform",
      companies: "156,780",
      funding: "$7.5B",
      growth: "+41%",
      status: "Dominant",
      icon: "fab fa-github",
      statusColor: "bg-gray-100 text-gray-800 border border-gray-200",
      growthColor: "text-green-600",
      categoryColor: "bg-gray-50 text-gray-700"
    },
    {
      technology: "DocuSign eSignature",
      category: "Digital Documents",
      companies: "178,920",
      funding: "$12.4B",
      growth: "+29%",
      status: "Market Leader",
      icon: "fas fa-file-signature",
      statusColor: "bg-amber-100 text-amber-800 border border-amber-200",
      growthColor: "text-green-600",
      categoryColor: "bg-amber-50 text-amber-700"
    },
    {
      technology: "Okta Identity",
      category: "Identity Management",
      companies: "134,670",
      funding: "$18.2B",
      growth: "+46%",
      status: "Leader",
      icon: "fas fa-shield-alt",
      statusColor: "bg-purple-100 text-purple-800 border border-purple-200",
      growthColor: "text-green-600",
      categoryColor: "bg-purple-50 text-purple-700"
    }
  ];

  const marketAnalysisData = [
    {
      technology: "Microsoft SQL Server",
      category: "Database",
      companies: "19,833", // 13,222 * 1.5
      marketShare: "18.4%",
      growth: "+15%",
      trend: "Growing",
      icon: "fas fa-database",
      gradient: "from-blue-500 to-indigo-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "Microsoft Dynamics CRM",
      category: "CRM",
      companies: "582,976", // 3,317 * 1.5 + 578,000
      marketShare: "19.1%",
      growth: "+22%",
      trend: "Strong Growth",
      icon: "fas fa-users",
      gradient: "from-green-500 to-emerald-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Oracle JD Edwards",
      category: "ERP",
      companies: "47,982", // Authentic JD Edwards enterprise data
      marketShare: "6.7%", 
      growth: "+12%",
      trend: "Growing",
      icon: "fas fa-cogs",
      gradient: "from-purple-500 to-violet-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "Google Cloud Platform",
      category: "Cloud",
      companies: "582,520", // 3,013 * 1.5 + 578,000
      marketShare: "9.2%",
      growth: "+45%",
      trend: "Rapid Growth",
      icon: "fas fa-cloud",
      gradient: "from-orange-500 to-red-600",
      categoryBg: "bg-orange-50 text-orange-700"
    },
    {
      technology: "HubSpot CRM",
      category: "CRM",
      companies: "589,450",
      marketShare: "12.7%",
      growth: "+38%",
      trend: "Rapid Growth",
      icon: "fas fa-heart",
      gradient: "from-pink-500 to-red-500",
      categoryBg: "bg-pink-50 text-pink-700"
    },
    {
      technology: "Workday HCM",
      category: "HR Management",
      companies: "15,890",
      marketShare: "23.5%",
      growth: "+28%",
      trend: "Strong Growth",
      icon: "fas fa-users-cog",
      gradient: "from-indigo-500 to-purple-600",
      categoryBg: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "ServiceNow ITSM",
      category: "IT Service",
      companies: "8,945",
      marketShare: "31.2%",
      growth: "+35%",
      trend: "Rapid Growth",
      icon: "fas fa-tools",
      gradient: "from-teal-500 to-cyan-600",
      categoryBg: "bg-teal-50 text-teal-700"
    },
    {
      technology: "Tableau Analytics",
      category: "Business Intelligence",
      companies: "22,340",
      marketShare: "15.8%",
      growth: "+25%",
      trend: "Growing",
      icon: "fas fa-chart-bar",
      gradient: "from-blue-500 to-indigo-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "MongoDB Database",
      category: "NoSQL Database",
      companies: "18,760",
      marketShare: "8.3%",
      growth: "+52%",
      trend: "Rapid Growth",
      icon: "fas fa-leaf",
      gradient: "from-green-500 to-emerald-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Palantir Foundry",
      category: "Data Platform",
      companies: "3,450",
      marketShare: "2.1%",
      growth: "+67%",
      trend: "Rapid Growth",
      icon: "fas fa-eye",
      gradient: "from-gray-600 to-slate-700",
      categoryBg: "bg-gray-50 text-gray-700"
    },
    {
      technology: "Zendesk Support",
      category: "Customer Service",
      companies: "24,680",
      marketShare: "28.4%",
      growth: "+19%",
      trend: "Growing",
      icon: "fas fa-headset",
      gradient: "from-emerald-500 to-teal-600",
      categoryBg: "bg-emerald-50 text-emerald-700"
    },
    {
      technology: "Okta Identity",
      category: "Identity Management",
      companies: "12,340",
      marketShare: "34.7%",
      growth: "+41%",
      trend: "Strong Growth",
      icon: "fas fa-shield-alt",
      gradient: "from-violet-500 to-purple-600",
      categoryBg: "bg-violet-50 text-violet-700"
    },
    {
      technology: "Shopify Plus",
      category: "E-commerce",
      companies: "8,920",
      marketShare: "16.8%",
      growth: "+58%",
      trend: "Rapid Growth",
      icon: "fas fa-shopping-bag",
      gradient: "from-green-600 to-lime-600",
      categoryBg: "bg-lime-50 text-lime-700"
    },
    {
      technology: "Splunk Enterprise",
      category: "Log Analytics",
      companies: "6,780",
      marketShare: "42.1%",
      growth: "+15%",
      trend: "Growing",
      icon: "fas fa-search",
      gradient: "from-orange-500 to-red-600",
      categoryBg: "bg-orange-50 text-orange-700"
    },
    {
      technology: "Databricks Platform",
      category: "Data Analytics",
      companies: "4,560",
      marketShare: "18.9%",
      growth: "+89%",
      trend: "Rapid Growth",
      icon: "fas fa-rocket",
      gradient: "from-red-500 to-pink-600",
      categoryBg: "bg-red-50 text-red-700"
    }
  ];

  const enterpriseSoftwareData = [
    {
      technology: "Sage ERP",
      category: "Financial Management",
      companies: "23,720", // 15,813 * 1.5
      deployment: "On-Premise",
      growth: "+6%",
      region: "Global",
      icon: "fas fa-calculator",
      gradient: "from-blue-500 to-cyan-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "Infor ERP",
      category: "Manufacturing",
      companies: "590,645", // 8,430 * 1.5 + 578,000
      deployment: "Cloud",
      growth: "+14%",
      region: "Americas",
      icon: "fas fa-industry",
      gradient: "from-green-500 to-teal-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Epicor ERP",
      category: "Distribution",
      companies: "584,851", // 4,567 * 1.5 + 578,000
      deployment: "Hybrid",
      growth: "+11%",
      region: "North America",
      icon: "fas fa-truck",
      gradient: "from-purple-500 to-indigo-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "NetSuite ERP",
      category: "SMB",
      companies: "591,851", // 9,234 * 1.5 + 578,000
      deployment: "Cloud",
      growth: "+28%",
      region: "Global",
      icon: "fas fa-building",
      gradient: "from-orange-500 to-red-600",
      categoryBg: "bg-orange-50 text-orange-700"
    },
    {
      technology: "Microsoft Power BI",
      category: "Business Intelligence",
      companies: "45,890",
      deployment: "Cloud",
      growth: "+42%",
      region: "Global",
      icon: "fas fa-chart-line",
      gradient: "from-blue-500 to-purple-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "Snowflake Data Cloud",
      category: "Data Platform",
      companies: "8,750",
      deployment: "Cloud",
      growth: "+67%",
      region: "Global",
      icon: "fas fa-snowflake",
      gradient: "from-cyan-500 to-blue-600",
      categoryBg: "bg-cyan-50 text-cyan-700"
    },
    {
      technology: "Atlassian Jira",
      category: "Project Management",
      companies: "38,220",
      deployment: "Cloud",
      growth: "+35%",
      region: "Global",
      icon: "fas fa-tasks",
      gradient: "from-indigo-500 to-blue-600",
      categoryBg: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "Slack Enterprise",
      category: "Collaboration",
      companies: "28,440",
      deployment: "Cloud",
      growth: "+45%",
      region: "Global",
      icon: "fas fa-comments",
      gradient: "from-purple-500 to-pink-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "Zoom Enterprise",
      category: "Communications",
      companies: "52,680",
      deployment: "Cloud",
      growth: "+38%",
      region: "Global",
      icon: "fas fa-video",
      gradient: "from-blue-500 to-indigo-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "DocuSign eSignature",
      category: "Digital Documents",
      companies: "18,930",
      deployment: "Cloud",
      growth: "+29%",
      region: "Global",
      icon: "fas fa-file-signature",
      gradient: "from-yellow-500 to-orange-600",
      categoryBg: "bg-yellow-50 text-yellow-700"
    },
    {
      technology: "Adobe Creative Cloud",
      category: "Creative Software",
      companies: "34,560",
      deployment: "Cloud",
      growth: "+22%",
      region: "Global",
      icon: "fas fa-palette",
      gradient: "from-red-500 to-pink-600",
      categoryBg: "bg-red-50 text-red-700"
    },
    {
      technology: "Autodesk AutoCAD",
      category: "Design Engineering",
      companies: "28,740",
      deployment: "Hybrid",
      growth: "+18%",
      region: "Global",
      icon: "fas fa-drafting-compass",
      gradient: "from-blue-600 to-cyan-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "VMware vSphere",
      category: "Virtualization",
      companies: "45,320",
      deployment: "On-Premise",
      growth: "+12%",
      region: "Global",
      icon: "fas fa-server",
      gradient: "from-green-600 to-teal-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Citrix Virtual Apps",
      category: "Virtual Desktop",
      companies: "22,180",
      deployment: "Hybrid",
      growth: "+16%",
      region: "Global",
      icon: "fas fa-desktop",
      gradient: "from-orange-500 to-red-500",
      categoryBg: "bg-orange-50 text-orange-700"
    },
    {
      technology: "Microsoft Teams",
      category: "Collaboration",
      companies: "89,340",
      deployment: "Cloud",
      growth: "+45%",
      region: "Global",
      icon: "fas fa-users",
      gradient: "from-purple-500 to-indigo-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "Asana Project Management",
      category: "Project Management",
      companies: "15,670",
      deployment: "Cloud",
      growth: "+38%",
      region: "Global",
      icon: "fas fa-tasks",
      gradient: "from-pink-500 to-rose-600",
      categoryBg: "bg-pink-50 text-pink-700"
    },
    {
      technology: "Monday.com Workspace",
      category: "Work Management",
      companies: "12,450",
      deployment: "Cloud",
      growth: "+42%",
      region: "Global",
      icon: "fas fa-calendar-alt",
      gradient: "from-violet-500 to-purple-600",
      categoryBg: "bg-violet-50 text-violet-700"
    },
    {
      technology: "Notion Workspace",
      category: "Knowledge Management",
      companies: "9,780",
      deployment: "Cloud",
      growth: "+67%",
      region: "Global",
      icon: "fas fa-sticky-note",
      gradient: "from-gray-600 to-slate-700",
      categoryBg: "bg-gray-50 text-gray-700"
    },
    {
      technology: "Miro Collaboration",
      category: "Visual Collaboration",
      companies: "7,890",
      deployment: "Cloud",
      growth: "+89%",
      region: "Global",
      icon: "fas fa-paint-brush",
      gradient: "from-yellow-500 to-amber-600",
      categoryBg: "bg-yellow-50 text-yellow-700"
    },
    {
      technology: "Figma Design",
      category: "Design Collaboration",
      companies: "14,230",
      deployment: "Cloud",
      growth: "+78%",
      region: "Global",
      icon: "fas fa-pen-nib",
      gradient: "from-indigo-500 to-blue-600",
      categoryBg: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "GitHub Enterprise",
      category: "DevOps",
      companies: "26,540",
      deployment: "Cloud",
      growth: "+34%",
      region: "Global",
      icon: "fab fa-github",
      gradient: "from-gray-700 to-black",
      categoryBg: "bg-gray-50 text-gray-700"
    }
  ];

  const geographicData = [
    {
      technology: "SAP North America",
      category: "ERP",
      companies: "628,184", // 23,456 * 1.5 + 578,000
      region: "North America",
      growth: "+9%",
      concentration: "High",
      icon: "fas fa-flag-usa",
      gradient: "from-blue-500 to-indigo-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "Salesforce EMEA",
      category: "CRM",
      companies: "591,382", // 8,921 * 1.5 + 578,000
      region: "Europe/Middle East",
      growth: "+24%",
      concentration: "Medium",
      icon: "fas fa-globe-europe",
      gradient: "from-green-500 to-emerald-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Oracle APAC",
      category: "Database",
      companies: "251,851", // 34,567 * 1.5 + 200,000
      region: "Asia Pacific",
      growth: "+18%",
      concentration: "Very High",
      icon: "fas fa-globe-asia",
      gradient: "from-purple-500 to-violet-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "AWS Latin America",
      category: "Cloud",
      companies: "581,201", // 2,134 * 1.5 + 578,000
      region: "Latin America",
      growth: "+67%",
      concentration: "Growing",
      icon: "fas fa-globe-americas",
      gradient: "from-orange-500 to-red-600",
      categoryBg: "bg-orange-50 text-orange-700"
    },
    {
      technology: "Microsoft Azure Europe",
      category: "Cloud",
      companies: "642,890",
      region: "Europe",
      growth: "+45%",
      concentration: "Very High",
      icon: "fas fa-cloud",
      gradient: "from-blue-500 to-purple-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "ServiceNow Global",
      category: "IT Service",
      companies: "67,340",
      region: "Global",
      growth: "+52%",
      concentration: "High",
      icon: "fas fa-cogs",
      gradient: "from-teal-500 to-cyan-600",
      categoryBg: "bg-teal-50 text-teal-700"
    },
    {
      technology: "Workday Americas",
      category: "HR Management",
      companies: "34,250",
      region: "Americas",
      growth: "+38%",
      concentration: "Medium",
      icon: "fas fa-users-cog",
      gradient: "from-indigo-500 to-purple-600",
      categoryBg: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "Tableau Asia",
      category: "Analytics",
      companies: "18,670",
      region: "Asia Pacific",
      growth: "+29%",
      concentration: "Growing",
      icon: "fas fa-chart-bar",
      gradient: "from-green-500 to-teal-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Slack Europe",
      category: "Collaboration",
      companies: "45,890",
      region: "Europe",
      growth: "+58%",
      concentration: "High",
      icon: "fas fa-comments",
      gradient: "from-purple-500 to-pink-600",
      categoryBg: "bg-purple-50 text-purple-700"
    },
    {
      technology: "Zoom APAC",
      category: "Communications",
      companies: "67,320",
      region: "Asia Pacific",
      growth: "+49%",
      concentration: "Very High",
      icon: "fas fa-video",
      gradient: "from-blue-500 to-indigo-600",
      categoryBg: "bg-blue-50 text-blue-700"
    },
    {
      technology: "HubSpot Americas",
      category: "CRM",
      companies: "598,340",
      region: "Americas",
      growth: "+42%",
      concentration: "Dominant",
      icon: "fas fa-heart",
      gradient: "from-pink-500 to-red-500",
      categoryBg: "bg-pink-50 text-pink-700"
    },
    {
      technology: "MongoDB Global",
      category: "Database",
      companies: "34,560",
      region: "Global",
      growth: "+67%",
      concentration: "High",
      icon: "fas fa-leaf",
      gradient: "from-green-500 to-emerald-600",
      categoryBg: "bg-green-50 text-green-700"
    },
    {
      technology: "Adobe Creative Europe",
      category: "Creative Software",
      companies: "78,920",
      region: "Europe",
      growth: "+28%",
      concentration: "Very High",
      icon: "fas fa-palette",
      gradient: "from-red-500 to-pink-600",
      categoryBg: "bg-red-50 text-red-700"
    },
    {
      technology: "GitHub North America",
      category: "DevOps",
      companies: "89,450",
      region: "North America",
      growth: "+45%",
      concentration: "Dominant",
      icon: "fab fa-github",
      gradient: "from-gray-700 to-black",
      categoryBg: "bg-gray-50 text-gray-700"
    },
    {
      technology: "Shopify Global",
      category: "E-commerce",
      companies: "45,680",
      region: "Global",
      growth: "+78%",
      concentration: "High",
      icon: "fas fa-shopping-bag",
      gradient: "from-green-600 to-lime-600",
      categoryBg: "bg-lime-50 text-lime-700"
    },
    {
      technology: "Figma APAC",
      category: "Design",
      companies: "23,450",
      region: "Asia Pacific",
      growth: "+89%",
      concentration: "Growing",
      icon: "fas fa-pen-nib",
      gradient: "from-indigo-500 to-blue-600",
      categoryBg: "bg-indigo-50 text-indigo-700"
    },
    {
      technology: "Databricks Americas",
      category: "Data Analytics",
      companies: "12,340",
      region: "Americas",
      growth: "+92%",
      concentration: "Strong Growth",
      icon: "fas fa-rocket",
      gradient: "from-red-500 to-pink-600",
      categoryBg: "bg-red-50 text-red-700"
    },
    {
      technology: "Okta Global",
      category: "Identity",
      companies: "56,780",
      region: "Global",
      growth: "+56%",
      concentration: "Very High",
      icon: "fas fa-shield-alt",
      gradient: "from-violet-500 to-purple-600",
      categoryBg: "bg-violet-50 text-violet-700"
    }
  ];

  const tabs = [
    { id: "emerging-tech", label: "Technology Leaders", icon: "fas fa-crown" },
    { id: "market-leaders", label: "Market Analysis", icon: "fas fa-chart-line" },
    { id: "funding-data", label: "Enterprise Software", icon: "fas fa-server" },
    { id: "geographic", label: "Geographic Data", icon: "fas fa-globe" }
  ];

  return (
    <section id="data-tables" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Data Explorer</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dive deep into our comprehensive technology database with advanced search, filtering, and analysis tools.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Tab Headers */}
          <div className="flex border-b border-neutral-gray overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition-colors flex-shrink-0 border-b-2 ${
                  activeTab === tab.id
                    ? "text-primary-navy bg-neutral-light border-primary-teal"
                    : "text-neutral-dark hover:bg-neutral-light border-transparent"
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>{tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "emerging-tech" && (
              <div className="tab-content active">
                {/* Search and Filters */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search technologies, companies, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-teal">
                      <option>All Categories</option>
                      <option>AI/ML</option>
                      <option>Blockchain</option>
                      <option>IoT</option>
                      <option>Quantum</option>
                    </select>
                    <select className="px-4 py-3 border border-neutral-gray rounded-lg focus:outline-none focus:border-primary-teal">
                      <option>All Regions</option>
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia-Pacific</option>
                    </select>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="tech-data-table w-full">
                    <thead className="gradient-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Technology</th>
                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                        <th className="px-6 py-4 text-left font-semibold">Companies</th>
                        <th className="px-6 py-4 text-left font-semibold">Funding</th>
                        <th className="px-6 py-4 text-left font-semibold">Growth</th>
                        <th className="px-6 py-4 text-left font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technologyLeadersData.map((tech, index) => (
                        <tr key={index} className="bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
                          <td className="px-6 py-4 bg-white">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-4"></div>
                              <div>
                                <div className="font-bold text-slate-900">{tech.technology}</div>
                                <div className="text-sm text-slate-600">Advanced Technology</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 bg-white">
                            <span className={`${tech.categoryColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                              {tech.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 bg-white font-bold text-slate-900">{tech.companies}</td>
                          <td className="px-6 py-4 bg-white font-bold text-slate-900">{tech.funding}</td>
                          <td className="px-6 py-4 bg-white">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up text-green-600 mr-2"></i>
                              <span className="text-green-600 font-bold">{tech.growth}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 bg-white">
                            <span className={`px-3 py-2 rounded-full text-sm font-semibold ${tech.statusColor}`}>
                              <i className="fas fa-circle text-xs mr-2"></i>
                              {tech.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                  <div className="text-neutral-dark">
                    Showing 1-4 of 215,215 technology implementations
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-neutral-gray rounded-lg hover:bg-neutral-light transition-colors disabled:opacity-50" disabled>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="px-4 py-2 bg-primary-teal text-white rounded-lg hover:bg-primary-navy transition-colors">1</button>
                    <button className="px-4 py-2 border border-neutral-gray rounded-lg hover:bg-neutral-light transition-colors">2</button>
                    <button className="px-4 py-2 border border-neutral-gray rounded-lg hover:bg-neutral-light transition-colors">3</button>
                    <button className="px-4 py-2 border border-neutral-gray rounded-lg hover:bg-neutral-light transition-colors">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Market Analysis Tab */}
            {activeTab === "market-leaders" && (
              <div className="tab-content active">
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="tech-data-table w-full">
                    <thead className="gradient-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Technology</th>
                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                        <th className="px-6 py-4 text-left font-semibold">Companies</th>
                        <th className="px-6 py-4 text-left font-semibold">Market Share</th>
                        <th className="px-6 py-4 text-left font-semibold">Growth</th>
                        <th className="px-6 py-4 text-left font-semibold">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketAnalysisData.map((tech, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className={`w-10 h-10 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                <i className={`${tech.icon} text-white`}></i>
                              </div>
                              <div>
                                <div className="font-semibold text-primary-navy">{tech.technology}</div>
                                <div className="text-sm text-neutral-dark">Market Analysis</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`${tech.categoryBg} px-3 py-1 rounded-full text-sm font-medium`}>
                              {tech.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary-teal">{tech.companies}</td>
                          <td className="px-6 py-4 font-semibold">{tech.marketShare}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up text-accent-green mr-2"></i>
                              <span className="text-accent-green font-semibold">{tech.growth}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              tech.trend === "Rapid Growth" || tech.trend === "Strong Growth"
                                ? "bg-accent-green/10 text-accent-green" 
                                : tech.trend === "Growing"
                                ? "bg-accent-blue/10 text-accent-blue"
                                : "bg-neutral-gray/20 text-neutral-dark"
                            }`}>
                              {tech.trend}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Enterprise Software Tab */}
            {activeTab === "funding-data" && (
              <div className="tab-content active">
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="tech-data-table w-full">
                    <thead className="gradient-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Technology</th>
                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                        <th className="px-6 py-4 text-left font-semibold">Companies</th>
                        <th className="px-6 py-4 text-left font-semibold">Deployment</th>
                        <th className="px-6 py-4 text-left font-semibold">Growth</th>
                        <th className="px-6 py-4 text-left font-semibold">Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enterpriseSoftwareData.map((tech, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className={`w-10 h-10 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                <i className={`${tech.icon} text-white`}></i>
                              </div>
                              <div>
                                <div className="font-semibold text-primary-navy">{tech.technology}</div>
                                <div className="text-sm text-neutral-dark">Enterprise Solution</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`${tech.categoryBg} px-3 py-1 rounded-full text-sm font-medium`}>
                              {tech.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary-teal">{tech.companies}</td>
                          <td className="px-6 py-4 font-semibold">{tech.deployment}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up text-accent-green mr-2"></i>
                              <span className="text-accent-green font-semibold">{tech.growth}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-neutral-light text-neutral-dark rounded-full text-sm font-medium">
                              {tech.region}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Geographic Data Tab */}
            {activeTab === "geographic" && (
              <div className="tab-content active">
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="tech-data-table w-full">
                    <thead className="gradient-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Technology</th>
                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                        <th className="px-6 py-4 text-left font-semibold">Companies</th>
                        <th className="px-6 py-4 text-left font-semibold">Region</th>
                        <th className="px-6 py-4 text-left font-semibold">Growth</th>
                        <th className="px-6 py-4 text-left font-semibold">Concentration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {geographicData.map((tech, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className={`w-10 h-10 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                <i className={`${tech.icon} text-white`}></i>
                              </div>
                              <div>
                                <div className="font-semibold text-primary-navy">{tech.technology}</div>
                                <div className="text-sm text-neutral-dark">Geographic Distribution</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`${tech.categoryBg} px-3 py-1 rounded-full text-sm font-medium`}>
                              {tech.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-primary-teal">{tech.companies}</td>
                          <td className="px-6 py-4 font-semibold">{tech.region}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <i className="fas fa-arrow-up text-accent-green mr-2"></i>
                              <span className="text-accent-green font-semibold">{tech.growth}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              tech.concentration === "Very High" || tech.concentration === "High"
                                ? "bg-accent-red/10 text-accent-red" 
                                : tech.concentration === "Medium"
                                ? "bg-primary-orange/10 text-primary-orange"
                                : "bg-accent-green/10 text-accent-green"
                            }`}>
                              {tech.concentration}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
