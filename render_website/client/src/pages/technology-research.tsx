import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, Download, Shield, TrendingUp, Building, Users, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getInstalledBaseTechnologies, getAllTechnologies } from "@/data/installedBaseTechnologies";

export default function TechnologyResearch() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (categoryName: string) => {
    console.log('Category clicked:', categoryName, 'Current selected:', selectedCategory);
    const data = getInstalledBaseTechnologies(categoryName);
    console.log('Data found:', data);
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const technologyCategories = [
    {
      name: "CRM Software",
      description: "Customer Relationship Management solutions including Salesforce, Microsoft Dynamics, Oracle CRM, and comprehensive contact management platforms.",
      technologies: "466+",
      companies: "1,820,000",
      icon: "Users",
      color: "blue",
      featured: getInstalledBaseTechnologies("CRM Software")?.technologies || []
    },
    {
      name: "ERP Software",
      description: "Enterprise Resource Planning systems for comprehensive business management across all organizational functions.",
      technologies: "257+",
      companies: "924,690",
      icon: "Building2",
      color: "green",
      featured: getInstalledBaseTechnologies("ERP Software")?.technologies || []
    },
    {
      name: "Accounting Software",
      description: "Financial management and accounting solutions for businesses of all sizes across multiple industries.",
      technologies: "760+",
      companies: "1,400,000",
      icon: "Calculator",
      color: "emerald",
      featured: getInstalledBaseTechnologies("Accounting Software")?.technologies || []
    },
    {
      name: "Business Intelligence",
      description: "Analytics and reporting platforms for data-driven decision making and business insights.",
      technologies: "505+",
      companies: "5,500,000",
      icon: "TrendingUp",
      color: "purple",
      featured: getInstalledBaseTechnologies("Business Intelligence")?.technologies || []
    },
    {
      name: "Application Development Tools",
      description: "Development platforms, frameworks, and tools for building modern applications and software solutions.",
      technologies: "963+",
      companies: "8,580,000",
      icon: "Code",
      color: "blue",
      featured: getInstalledBaseTechnologies("Application Development Tools")?.technologies || [
        { name: "PhpStorm", companies: "156,000", link: "/phpstorm-users-list" },
        { name: "RubyMine", companies: "87,000", link: "/rubymine-users-list" },
        { name: "CLion", companies: "134,000", link: "/clion-users-list" },
        { name: "AppCode", companies: "76,000", link: "/appcode-users-list" },
        { name: "DataGrip", companies: "123,000", link: "/datagrip-users-list" },
        { name: "Rider", companies: "98,000", link: "/rider-users-list" },
        { name: "GoLand", companies: "65,000", link: "/goland-users-list" },
        { name: "Brackets", companies: "54,000", link: "/brackets-users-list" },
        { name: "CodeBlocks", companies: "43,000", link: "/codeblocks-users-list" },
        { name: "Dev-C++", companies: "32,000", link: "/dev-cpp-users-list" },
        { name: "Qt Creator", companies: "89,000", link: "/qt-creator-users-list" },
        { name: "Code::Blocks", companies: "67,000", link: "/code-blocks-users-list" },
        { name: "MonoDevelop", companies: "45,000", link: "/monodevelop-users-list" },
        { name: "Xamarin Studio", companies: "78,000", link: "/xamarin-studio-users-list" },
        { name: "Unity", companies: "345,000", link: "/unity-users-list" },
        { name: "Unreal Engine", companies: "234,000", link: "/unreal-engine-users-list" },
        { name: "Godot", companies: "56,000", link: "/godot-users-list" },
        { name: "Construct 3", companies: "34,000", link: "/construct-3-users-list" },
        { name: "GameMaker Studio", companies: "78,000", link: "/gamemaker-studio-users-list" },
        { name: "RPG Maker", companies: "45,000", link: "/rpg-maker-users-list" },
        { name: "Stencyl", companies: "23,000", link: "/stencyl-users-list" },
        { name: "Defold", companies: "12,000", link: "/defold-users-list" },
        { name: "Corona SDK", companies: "34,000", link: "/corona-sdk-users-list" },
        { name: "Cocos2d", companies: "67,000", link: "/cocos2d-users-list" },
        { name: "LibGDX", companies: "45,000", link: "/libgdx-users-list" },
        { name: "LÖVE", companies: "18,000", link: "/love-users-list" },
        { name: "Pygame", companies: "89,000", link: "/pygame-users-list" },
        { name: "Panda3D", companies: "23,000", link: "/panda3d-users-list" },
        { name: "Ogre3D", companies: "34,000", link: "/ogre3d-users-list" },
        { name: "Irrlicht", companies: "16,000", link: "/irrlicht-users-list" },
        { name: "CRYENGINE", companies: "45,000", link: "/cryengine-users-list" },
        { name: "Source Engine", companies: "67,000", link: "/source-engine-users-list" },
        { name: "id Tech", companies: "29,000", link: "/id-tech-users-list" },
        { name: "Frostbite", companies: "12,000", link: "/frostbite-users-list" },
        { name: "REDengine", companies: "8,000", link: "/redengine-users-list" },
        { name: "AnvilNext", companies: "15,000", link: "/anvilnext-users-list" },
        { name: "Creation Engine", companies: "23,000", link: "/creation-engine-users-list" },
        { name: "MT Framework", companies: "18,000", link: "/mt-framework-users-list" },
        { name: "Rage Engine", companies: "34,000", link: "/rage-engine-users-list" }
      ]
    }
  ];

  const filteredCategories = technologyCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTechnologies = technologyCategories.reduce((sum, cat) => sum + parseInt(cat.technologies.replace('+', '')), 0);
  const totalCompanies = technologyCategories.reduce((sum, cat) => sum + parseInt(cat.companies.replace(/,/g, '')), 0);

  return (
    <>
      <SEOHead
        title="Technology Research - 500+ Software Customer Lists | ELP Data"
        description="Access comprehensive technology intelligence with verified customer databases across 500+ software categories. Research CRM, ERP, Cloud Computing, and more with real company data."
        keywords="technology research, software customer lists, technology intelligence, CRM customers, ERP users, cloud computing customers, business intelligence"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Complete Technology Intelligence
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Technology Database Overview - 500+ Software Customer Lists
              </p>
              <p className="text-lg mb-8 max-w-4xl mx-auto">
                The most comprehensive technology intelligence platform with verified customer databases across all major software categories. Access decision-makers, IT professionals, and technology users worldwide.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search technology categories..."
                    className="w-full pl-12 pr-4 py-3 text-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">3,451+</div>
                  <div className="text-lg opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">18M+</div>
                  <div className="text-lg opacity-90">Company Records</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                  <div className="text-lg opacity-90">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">195</div>
                  <div className="text-lg opacity-90">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Categories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore comprehensive technology categories with complete installed base data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-0 ${
                  selectedCategory === category.name ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="mb-3">
                      {category.technologies} Technologies
                    </Badge>
                    <Badge variant="outline" className="mb-3">
                      {category.companies} Companies
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">
                      Click to view all {category.technologies} technologies
                    </span>
                    <button 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category.name);
                      }}
                    >
                      {selectedCategory === category.name ? "Hide Technologies" : "View All Technologies"}
                    </button>
                  </div>
                  
                  {selectedCategory === category.name && (
                    <div className="mb-6 space-y-3 border-t pt-4 max-h-96 overflow-y-auto">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Installed Technologies ({getInstalledBaseTechnologies(category.name)?.technologies?.length || 0}):
                      </h4>
                      {getInstalledBaseTechnologies(category.name)?.technologies?.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTechnology({
                              ...tech,
                              category: category.name,
                              description: category.description
                            });
                          }}
                        >
                          <span className="text-gray-700 font-medium">{tech.name}</span>
                          <Badge variant="outline" className="text-xs">{tech.companies}</Badge>
                        </div>
                      )) || (
                        <div className="text-gray-500 text-sm">No technologies found for this category</div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-600 hover:text-blue-800 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category.name);
                      }}
                    >
                      {selectedCategory === category.name ? 'Show Less' : 'View All Technologies'}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "/contact-us";
                      }}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Sample
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No technology categories found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Technology Installed Base Modal */}
        {selectedTechnology && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedTechnology.name}</h2>
                    <p className="text-gray-600">{selectedTechnology.category}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedTechnology(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>

                {/* Installed Base Overview */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{selectedTechnology.companies}</div>
                      <div className="text-sm text-gray-600">Companies Using</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{Math.floor(parseInt(selectedTechnology.companies.replace(/,/g, '')) * 2.3).toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Users</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">85+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Technology Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Installation Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Enterprise (1000+ employees)</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mid-Market (100-999 employees)</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Small Business (1-99 employees)</span>
                        <span className="font-medium">20%</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Top Industries</h3>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2 mb-2">Financial Services</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Healthcare</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Manufacturing</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Technology</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Retail</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">North America</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Europe</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Asia Pacific</span>
                        <span className="font-medium">22%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Others</span>
                        <span className="font-medium">8%</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Key Decision Makers</h3>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2 mb-2">CTO</Badge>
                      <Badge variant="outline" className="mr-2 mb-2">IT Director</Badge>
                      <Badge variant="outline" className="mr-2 mb-2">VP Technology</Badge>
                      <Badge variant="outline" className="mr-2 mb-2">Systems Administrator</Badge>
                      <Badge variant="outline" className="mr-2 mb-2">IT Manager</Badge>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = "/contact-us"}
                  >
                    Request Sample Data
                  </Button>
                  <Button 
                    onClick={() => window.location.href = "/contact-us"}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Get Full Customer List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Technology Database?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified & Compliant Data</h3>
                <p className="text-gray-600">
                  All data is GDPR compliant, CAN-SPAM compliant, and verified through multiple touchpoints for maximum accuracy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technographic Intelligence</h3>
                <p className="text-gray-600">
                  Detailed technology stack information including versions, implementations, integrations, and adoption patterns.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Updates</h3>
                <p className="text-gray-600">
                  Continuously updated database with new implementations, migrations, and technology changes across industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Access Our Complete Technology Database?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get instant access to verified customer lists across 500+ technologies. Perfect for software vendors, consultants, and technology service providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = "/contact-us"}
                className="text-blue-600 hover:text-blue-700"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = "/contact-us"}
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}