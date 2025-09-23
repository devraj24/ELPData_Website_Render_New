import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { installedBaseTechnologies } from '@/data/installedBaseTechnologies';

export default function InstalledBase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCategoryClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  // Convert installed base technologies data to categories format
  const techCategories = Object.entries(installedBaseTechnologies).map(([categoryName, categoryData]) => ({
    name: categoryName,
    count: categoryData.count,
    totalCompanies: categoryData.totalCompanies,
    topTechnologies: categoryData.technologies
  }));

  const topTechnologies = [
    { name: "Oracle Corporation", companies: "2,000,000", link: "/oracle-corporation-users-list" },
    { name: "GIS Software", companies: "1,700,000", link: "/gis-software-users-list" },
    { name: "3D Modeling Software", companies: "1,400,000", link: "/3d-modeling-users-list" },
    { name: "Autodesk, Inc.", companies: "1,094,200", link: "/autodesk-users-list" },
    { name: "CAD/CAE/CAM", companies: "899,200", link: "/cad-cae-cam-users-list" },
    { name: "Salesforce.com", companies: "599,000", link: "/salesforce-com-users-list" },
    { name: "VMware vSphere", companies: "391,200", link: "/vmware-users-list" },
    { name: "SAP ERP", companies: "368,700", link: "/sap-users-list" },
    { name: "IBM Systems", companies: "335,300", link: "/ibm-users-list" },
    { name: "PEO/EOR Services", companies: "167,365", link: "/peo-users-list" },
    { name: "Microsoft Dynamics AX", companies: "26,322", link: "/microsoft-dynamics-users-list" }
  ];

  const topCategories = [
    { name: "CRM", companies: "1,820,000" },
    { name: "ERP", companies: "924,690" },
    { name: "High Performance Computing (HPC)", companies: "7,181,438" },
    { name: "Application Development Tools", companies: "8,580,000" },
    { name: "Payroll Software", companies: "1,210,170" },
    { name: "Data Center Infrastructure Management", companies: "1,820,000" },
    { name: "SIEM", companies: "174,020" },
    { name: "Identity Governance", companies: "434,810" },
    { name: "HRMS", companies: "266,136" },
    { name: "Accounting Software", companies: "1,400,000" },
    { name: "DBMS", companies: "225,100" },
    { name: "Business Intelligence", companies: "5,500,000" }
  ];

  return (
    <>
      <SEOHead 
        title="Installed Base - Technology Intelligence Platform | ELP Data"
        description="Forecast & Experience market-leading technologies and platforms using our advanced analytics. Monitor over 10M+ data records of companies across the Globe."
        keywords="installed base, technology intelligence, analytics, company data, market forecast"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Installed Base
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Forecast & Experience market-leading technologies and platforms using our advanced analytics. We monitor over 10M+ data records of companies across the Globe. Design and customize your modern marketing campaigns in a way as never before.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-20 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-400"
                    data-testid="input-search"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-lg px-6" data-testid="button-search">
                    Search
                  </Button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">10M+</div>
                  <div className="text-lg text-blue-100">Company Records</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">195</div>
                  <div className="text-lg text-blue-100">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">1000+</div>
                  <div className="text-lg text-blue-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">99.2%</div>
                  <div className="text-lg text-blue-100">Data Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Categories Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Categories</h2>
            <div className="text-sm text-gray-500 mb-4 text-center">
              Showing {techCategories.length} categories with comprehensive technology lists
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-blue-500"
                  onClick={() => handleCategoryClick(index)}
                  data-testid={`card-category-${index}`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                      <span className="flex-1">{category.name}</span>
                      <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800">
                        {category.count}
                      </Badge>
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      <div>Companies: {category.totalCompanies}</div>
                      {(category as any).totalRecords && (
                        <div>Records: {(category as any).totalRecords}</div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                      size="sm"
                      data-testid={`button-view-technologies-${index}`}
                    >
                      View {category.count}+ Technologies
                    </Button>
                    
                    {/* Dropdown content */}
                    {selectedIndex === index && (
                      <div className="mt-4 space-y-3 max-h-96 overflow-y-auto" data-testid={`dropdown-technologies-${index}`}>
                        <h4 className="font-medium text-gray-900 border-b pb-2">All Technologies:</h4>
                        {category.topTechnologies.map((tech, techIndex) => (
                          <Link 
                            key={techIndex} 
                            href="#" 
                            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
                            data-testid={`link-technology-${index}-${techIndex}`}
                          >
                            <span className="font-medium text-gray-900 group-hover:text-blue-600">{tech.name}</span>
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Companies Using</div>
                              <div className="text-lg font-bold text-blue-600 group-hover:text-blue-800">{tech.companies}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTechnologies.map((tech, index) => (
                <Link 
                  key={index} 
                  href={tech.link} 
                  className="group"
                  data-testid={`link-top-technology-${index}`}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">Companies Using This Technology</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{tech.companies}</div>
                          <div className="text-sm text-gray-500">Companies</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Categories Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`card-top-category-${index}`}>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{category.companies}</div>
                    <div className="text-sm text-gray-500">Companies</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}