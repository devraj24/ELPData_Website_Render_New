import React, { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

// Define branding constants to avoid hydration mismatches from DOM manipulation
const BRANDING = {
  ORACLE: "Oracle Corporation (2.84M)",
  SALESFORCE: "Salesforce.com (599K)",
  SAP: "SAP ERP Users (368.7K)",
  VMWARE: "VMware Users (391.2K)"
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
            {/* Logo - Simplified structure to prevent hydration issues */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity min-w-0 flex-shrink-0" onClick={scrollToTop}>
              <img 
                src="/elp-logo.png" 
                alt="ELP Data Logo" 
                width="64" 
                height="64" 
                className="mr-3"
              />
              <div className="min-w-0">
                <span className="block text-2xl font-bold text-slate-900 whitespace-nowrap">ELP Data</span>
                <span className="text-sm text-slate-600 leading-tight hidden xl:block">Premium Technology Data & Business Intelligence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-4 flex-shrink-0 ml-6">
              <div className="relative group">
                <Link href="/installed-base" className="flex items-center gap-1 text-neutral-dark hover:text-primary-navy transition-colors py-2 font-medium text-sm whitespace-nowrap">
                  Installed Base
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6 grid grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-3 rounded-lg shadow-md border border-slate-100">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm flex items-center gap-2">
                        <i className="fas fa-database text-slate-600"></i>
                        Enterprise Applications
                      </h4>
                      <div className="space-y-0.5">
                        <Link href="/sap-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">{BRANDING.SAP}</Link>
                        <Link href="/oracle-jd-edwards-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-slate-600 hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">Oracle JD Edwards (47.9K )</Link>
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
                        <Link href="/salesforce-com-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-1 py-0.5 rounded transition-colors">{BRANDING.SALESFORCE}</Link>
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
                        <Link href="/vmware-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">{BRANDING.VMWARE}</Link>
                        <Link href="/ibm-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">IBM Users (335.3K)</Link>
                        <Link href="/oracle-users-list" onClick={scrollToTop} className="block text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-1 py-0.5 rounded transition-colors">{BRANDING.ORACLE}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add other menu items similarly... */}
              <Link href="/contact-us" className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-all text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
