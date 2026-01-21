import React, { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // AGGRESSIVE display override - force correct branding
  React.useEffect(() => {
    const override = () => {
      // Oracle ALL variations
      document.querySelectorAll('*').forEach(el => {
        if (el.textContent && (
          el.textContent.includes('Oracle Database') || 
          el.textContent.includes('134.2K') || 
          el.textContent.includes('119,653') ||
          el.textContent.includes('119,653+') ||
          el.textContent.includes('134.2K+')
        )) {
          if (el.tagName === 'A' || el.closest('a')) {
            el.textContent = 'Oracle Corporation (2.84M)';
          }
        }
      });
      
      // Salesforce ALL variations  
      document.querySelectorAll('*').forEach(el => {
        if (el.textContent && (
          el.textContent.includes('Salesforce CRM') || 
          el.textContent.includes('407.5K') || 
          (el.textContent.includes('189.7K') && el.textContent.includes('Salesforce')) ||
          el.textContent.includes('407,500') ||
          (el.textContent.includes('189,700') && el.textContent.includes('Salesforce'))
        )) {
          if (el.tagName === 'A' || el.closest('a')) {
            el.textContent = 'Salesforce.com (599K)';
          }
        }
      });
    };
    
    // Multiple override attempts
    setTimeout(override, 50);
    setTimeout(override, 200);
    setTimeout(override, 500);
    setTimeout(override, 1000);
    
    // Mutation observer for dynamic content
    const observer = new MutationObserver(override);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="Header bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13072242324" className="flex items-center hover:text-orange-400 transition-colors">
                <i className="fas fa-phone mr-2"></i>+1 (307) 224-2324
              </a>
              <a href="mailto:info@elpdata.com" className="flex items-center hover:text-orange-400 transition-colors">
                <i className="fas fa-envelope mr-2"></i>info@elpdata.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/elp-data" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/elpdata" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-100 py-3 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity min-w-0 flex-shrink-0" onClick={scrollToTop}>
              <div className="flex items-center">
                <img 
                  src="/elp-logo.png" 
                  alt="ELP Data Dynamic Logo" 
                  width="64" 
                  height="64" 
                  className="mr-3"
                />
                <div className="min-w-0">
                  <div className="text-2xl font-bold text-slate-900 whitespace-nowrap">ELP Data</div>
                  <div className="text-sm text-slate-600 leading-tight hidden xl:block">Premium Technology Data & Business Intelligence</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden xl:flex items-center gap-4 flex-shrink-0 ml-6">
              {/* Installed Base */}
              <div className="relative group">
                <Link href="/installed-base" className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  Installed Base
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6 grid grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-3 rounded-lg shadow-md border border-slate-100">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm flex items-center gap-2">
                        <i className="fas fa-database text-slate-600"></i>
                        Enterprise Applications
                      </h4>
                      <div className="space-y-0.5">
                        <Link href="/sap-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">SAP ERP Users (368.7K)</Link>
                        <Link href="/oracle-jd-edwards-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Oracle JD Edwards (47.9K)</Link>
                        <Link href="/microsoft-dynamics-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Microsoft Dynamics (18.3K)</Link>
                        <Link href="/sage-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Sage ERP Systems (12.1K)</Link>
                        <Link href="/workday-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Workday Users (58.5K)</Link>
                        <Link href="/epic-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Epic Healthcare (7.2K)</Link>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-3 rounded-lg shadow-md border border-green-100">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm flex items-center gap-2">
                        <i className="fas fa-cloud text-green-600"></i>
                        Cloud Platforms
                      </h4>
                      <div className="space-y-0.5">
                        <Link href="/salesforce-com-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">Salesforce.com (599K)</Link>
                        <Link href="/aws-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">AWS Cloud Services (156.2K)</Link>
                        <Link href="/microsoft-azure-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">Microsoft Azure (134.8K)</Link>
                        <Link href="/google-cloud-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">Google Cloud Platform (89.4K)</Link>
                        <Link href="/cloud-services-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">Multi-Cloud Solutions (67.3K)</Link>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-3 rounded-lg shadow-md border border-purple-100">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm flex items-center gap-2">
                        <i className="fas fa-server text-purple-600"></i>
                        Target Technology
                      </h4>
                      <div className="space-y-0.5">
                        <Link href="/vmware-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">VMware Users (391.2K)</Link>
                        <Link href="/sap-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">SAP Users (368.7K)</Link>
                        <Link href="/ibm-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">IBM Users (335.3K)</Link>
                        <Link href="/peo-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">PEO/EOR Providers (167.4K)</Link>
                        <Link href="/cisco-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">Cisco Users (218.6K)</Link>
                        <Link href="/oracle-corporation-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">
                          Oracle Corporation (2.84M)
                        </Link>
                        <Link href="/tableau-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">Tableau Analytics (134.9K)</Link>
                        <div className="mt-1 pt-1 border-t border-purple-200">
                          <Link href="/installed-base" onClick={scrollToTop} className="block text-xs text-purple-600 hover:text-purple-800 font-medium">VIEW ALL 500+ →</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/ai-agents"
                onClick={scrollToTop}
                className="bg-slate-600 text-white px-3 py-1.5 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm whitespace-nowrap"
              >
                AI Agents
              </Link>

              {/* Our Solutions */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  B2B Data
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-3 grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-1.5 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1 text-xs">
                        Target Technology 
                      </h4>
                      <div className="space-y-0">
                        <Link href="/vmware-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600">VMware Users (391.2K)</Link>
                        <Link href="/sap-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600">SAP Users (368.7K)</Link>
                        <Link href="/ibm-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600">IBM Users (335.3K)</Link>
                        <Link href="/salesforce-com-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600" data-sf-override="true">Salesforce.com (599K)</Link>
                        <Link href="/oracle-corporation-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600" data-oracle-override="true">
                          Oracle Corporation (2.84M)
                        </Link>
                        <Link href="/tableau-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600">Tableau Analytics (134.9K)</Link>
                        <Link href="/peo-users-list" target="_blank" className="block text-xs text-gray-600 hover:text-slate-600">PEO/EOR Services (167.4K)</Link>
                      </div>
                      <Link href="/installed-base" onClick={scrollToTop} className="block text-xs text-slate-600 hover:text-slate-800 mt-2 font-medium">
                        VIEW ALL 500+ →
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-white p-1.5 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1 text-xs">
                        Role Connect
                      </h4>
                      <div className="space-y-0">
                        <Link href="/ceo-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">CEO (355,250+)</Link>
                        <Link href="/cfo-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">CFO (226,200+)</Link>
                        <Link href="/cto-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">CTO (287,100+)</Link>
                        <Link href="/cmo-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">CMO (194,300+)</Link>
                        <Link href="/vp-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">VP (419,050+)</Link>
                        <Link href="/directors-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">Directors (542,180+)</Link>
                        <Link href="/managers-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">Managers (1,245,670+)</Link>
                        <Link href="/doctors-physicians-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-orange-600">Doctors & Physicians (745K+)</Link>
                      </div>
                      <Link href="/role-connect" target="_blank" className="block text-xs text-green-600 hover:text-green-800 mt-2 font-medium">
                        VIEW ALL 500+ TITLES →
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-1.5 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1 text-xs">
                        Industries
                      </h4>
                      <div className="space-y-0">
                        <Link href="/technology-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Technology (289.4K)</Link>
                        <Link href="/healthcare-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Healthcare (234.7K)</Link>
                        <Link href="/financial-services-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Financial Services (198.3K)</Link>
                        <Link href="/manufacturing-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Manufacturing (167.9K)</Link>
                        <Link href="/retail-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Retail (145.8K)</Link>
                        <Link href="/real-estate-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Real Estate (134.9K)</Link>
                        <Link href="/education-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Education (145.2K)</Link>
                        <Link href="/oil-gas-industry-email-list" target="_blank" className="block text-xs text-gray-600 hover:text-green-600">Oil & Gas (156.8K)</Link>
                      </div>
                      <Link href="/industry-reach" onClick={scrollToTop} className="block text-xs text-purple-600 hover:text-purple-800 mt-2 font-medium">
                        VIEW MORE 60+ INDUSTRIES →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Solutions */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  Marketing
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        Marketing Solutions
                      </h4>
                      <div className="space-y-1">
                        <Link href="/marketing-solutions" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">Comprehensive Marketing Solutions</Link>
                        <Link href="/email-marketing" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">Email Marketing Services</Link>
                        <Link href="/account-based-marketing" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">Account-Based Marketing</Link>
                        <Link href="/lead-generation-services" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">Lead Generation Services</Link>
                        <Link href="/ai-marketing-automation" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">AI Marketing Automation</Link>
                        <Link href="/intent-data-solutions" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-slate-600">Intent Data Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Services */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  Data Services
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-green-50 to-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        Data Services
                      </h4>
                      <div className="space-y-1">
                        <Link href="/data-services" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-green-600">Professional Data Services</Link>
                        <Link href="/data-solutions" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-green-600">Data Solutions</Link>
                        <Link href="/business-contact-data" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-green-600">Business Contact Data</Link>
                        <Link href="/data-enrichment" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-green-600">Data Enrichment</Link>
                        <div className="text-xs text-gray-600">Technology Research</div>
                        <div className="text-xs text-gray-600">Market Analysis</div>
                        <div className="text-xs text-gray-600">Competitive Intelligence</div>
                        <div className="text-xs text-gray-600">API Integration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  Risk Management
                  <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6">
                    <div className="bg-gradient-to-br from-red-50 to-white p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        Risk Management
                      </h4>
                      <div className="space-y-1">
                        <Link href="/risk-management" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Risk Management Solutions</Link>
                        <Link href="/fraud-prevention" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Fraud Prevention</Link>
                        <Link href="/business-credit-reports" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Business Credit Reports</Link>
                        <Link href="/compliance-solutions" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Compliance Solutions</Link>
                        <Link href="/risk-assessment-tools" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Risk Assessment Tools</Link>
                        <Link href="/due-diligence-services" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Due Diligence Services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/about"
                  onClick={scrollToTop}
                  className="text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium flex items-center gap-1"
                >
                  About
                  <ChevronDown className="h-4 w-4" />
                </Link>
                
                <div className={`absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ${
                  activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">Company Information</h3>
                        <div className="space-y-1">
                          <Link href="/company-overview" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Company Overview</Link>
                          <Link href="/blog" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Blog</Link>
                          <Link href="/success-stories" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Success Stories</Link>
                          <Link href="/case-studies" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Case Studies</Link>
                          <Link href="/contact-us" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Contact Us</Link>
                          <Link href="/faq" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">FAQ</Link>
                          <Link href="/glossary" onClick={scrollToTop} className="block text-xs text-gray-600 hover:text-red-600">Glossary</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/contact-us"
                onClick={scrollToTop}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button - Visible on mobile/tablet */}
            <button 
              className="xl:hidden bg-slate-600 text-white px-4 py-2 rounded-lg font-semibold border-2 border-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ 
                fontSize: '16px', 
                minHeight: '44px', 
                minWidth: '80px',
                touchAction: 'manipulation'
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="xl:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  <i className="fas fa-times text-lg"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <Link href="/installed-base" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg font-medium">
                  Installed Base
                </Link>
                <Link href="/ai-agents" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg font-medium">
                  AI Agents
                </Link>
                <div className="border-t pt-3">
                  <h3 className="text-sm font-semibold text-gray-600 px-4 mb-2">B2B Data</h3>
                  <Link href="/vmware-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">VMware Users</Link>
                  <Link href="/sap-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">SAP Users</Link>
                  <Link href="/salesforce-com-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Salesforce.com</Link>
                  <Link href="/oracle-corporation-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Oracle Corporation</Link>
                </div>
                <div className="border-t pt-3">
                  <h3 className="text-sm font-semibold text-gray-600 px-4 mb-2">Services</h3>
                  <Link href="/marketing-solutions" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Marketing Solutions</Link>
                  <Link href="/data-services" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Data Services</Link>
                  <Link href="/risk-management" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Risk Management</Link>
                </div>
                <div className="border-t pt-3">
                  <Link href="/about" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg font-medium">About</Link>
                  <Link href="/blog" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg font-medium">Blog</Link>
                  <Link href="/contact-us" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block py-3 px-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-semibold text-center">Contact Us</Link>
                </div>
              </div>

              <div className="space-y-6">
                {/* About Link */}
                <Link 
                  href="/about" 
                  onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                  className="block text-lg font-semibold text-slate-600 hover:text-slate-800 py-2 border-b border-gray-200"
                >
                  📋 About
                </Link>

                {/* Technology Databases */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-database text-slate-600"></i>
                    Technology Databases
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Enterprise Applications</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/sap-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">SAP ERP Users (368.7K)</Link>
                        <Link href="/oracle-jd-edwards-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Oracle JD Edwards (47.9K)</Link>
                        <Link href="/microsoft-dynamics-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Microsoft Dynamics (18.3K)</Link>
                        <Link href="/workday-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Workday Users (58.5K)</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Cloud Platforms</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/salesforce-com-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Salesforce.com (599K)</Link>
                        <Link href="/aws-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">AWS Cloud (156.2K)</Link>
                        <Link href="/microsoft-azure-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Microsoft Azure (134.8K)</Link>
                        <Link href="/google-cloud-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Google Cloud (89.4K)</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Target Technology</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/vmware-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">VMware Users (391.2K)</Link>
                        <Link href="/peo-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">PEO/EOR Providers (167.4K)</Link>
                        <Link href="/cisco-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Cisco Users (218.6K)</Link>
                        <Link href="/ibm-users-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">IBM Users (335.3K)</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Services */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-briefcase text-purple-600"></i>
                    Professional Services
                  </h3>
                  <div className="space-y-1 pl-4">
                    <Link href="/role-connect" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-purple-600 text-sm">Role Connect Hub (6.2M+)</Link>
                    <Link href="/teachers-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-purple-600 text-sm">Teachers Email List (1.68M+)</Link>
                    <Link href="/real-estate-agents-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-purple-600 text-sm">Real Estate Agents (530K+)</Link>
                    <Link href="/role-connect" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-purple-600 text-sm">Industry Specialists (4.62M+)</Link>
                    <Link href="/doctors-physicians-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-purple-600 text-sm">Doctors & Physicians (745K+)</Link>
                  </div>
                </div>

                {/* Job Title Lists */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-users text-orange-600"></i>
                    Job Title Lists
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">C-Level Executives</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/ceo-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">CEO Email List (89.2K)</Link>
                        <Link href="/cto-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">CTO Email List (67.8K)</Link>
                        <Link href="/cfo-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">CFO Email List (78.4K)</Link>
                        <Link href="/cio-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">CIO Email List (45.6K)</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">IT Professionals</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/it-directors-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">IT Directors (156.3K)</Link>
                        <Link href="/software-engineers-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Software Engineers (278.9K)</Link>
                        <Link href="/system-administrators-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">System Administrators (189.7K)</Link>
                        <Link href="/database-administrators-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Database Administrators (123.4K)</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Management</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/directors-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Directors (234.5K)</Link>
                        <Link href="/managers-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Managers (456.7K)</Link>
                        <Link href="/vp-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Vice Presidents (167.8K)</Link>
                        <Link href="/project-managers-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Project Managers (189.3K)</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry Lists */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-industry text-green-600"></i>
                    Industry Lists
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Core Industries</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/technology-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Technology (289.4K)</Link>
                        <Link href="/healthcare-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Healthcare (234.7K)</Link>
                        <Link href="/finance-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Finance (198.3K)</Link>
                        <Link href="/manufacturing-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Manufacturing (167.9K)</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Specialized</h4>
                      <div className="space-y-1 pl-4">
                        <Link href="/education-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Education (145.2K)</Link>
                        <Link href="/retail-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Retail (123.8K)</Link>
                        <Link href="/hospitality-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Hospitality (98.7K)</Link>
                        <Link href="/oil-gas-email-list" onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }} className="block text-gray-700 hover:text-slate-600 text-sm">Oil & Gas (156.8K)</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Us Link */}
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    href="/contact-us" 
                    onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                    className="block text-lg font-semibold bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-all text-center"
                  >
                    📞 Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
