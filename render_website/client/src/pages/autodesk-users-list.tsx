import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Zap, Shield, Building, Users, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function AutodeskUsersListPage() {
  const autodeskProducts = [
    { name: "AutoCAD", companies: "285,400", category: "Design & Drafting" },
    { name: "Autodesk Inventor", companies: "156,800", category: "3D Mechanical Design" },
    { name: "Autodesk Fusion 360", companies: "134,200", category: "Cloud-based CAD/CAM/CAE" },
    { name: "Autodesk Revit", companies: "118,900", category: "Building Information Modeling" },
    { name: "Autodesk Maya", companies: "98,700", category: "3D Animation" },
    { name: "Autodesk 3ds Max", companies: "89,300", category: "3D Modeling & Animation" },
    { name: "AutoCAD LT", companies: "76,500", category: "2D Drafting" },
    { name: "Autodesk Civil 3D", companies: "67,200", category: "Civil Engineering" },
    { name: "Autodesk Navisworks", companies: "58,900", category: "Project Review" },
    { name: "Autodesk MotionBuilder", companies: "43,600", category: "Motion Capture" },
    { name: "Autodesk Moldflow", companies: "38,200", category: "Injection Molding Simulation" },
    { name: "Autodesk Vault", companies: "34,800", category: "Data Management" },
    { name: "Autodesk Alias", companies: "29,400", category: "Industrial Design" },
    { name: "Autodesk BIM 360", companies: "28,700", category: "Construction Collaboration" },
    { name: "Autodesk PowerMill", companies: "25,300", category: "CAM Software" },
    { name: "Autodesk FeatureCAM", companies: "22,900", category: "CNC Programming" },
    { name: "Autodesk Inventor Nastran", companies: "19,500", category: "FEA Simulation" },
    { name: "Autodesk PowerShape", companies: "18,100", category: "Manufacturing Modeling" },
    { name: "Autodesk Netfabb", companies: "16,700", category: "Additive Manufacturing" },
    { name: "Autodesk InfraWorks", companies: "15,300", category: "Infrastructure Design" },
    { name: "Autodesk Advance Steel", companies: "13,900", category: "Steel Detailing" },
    { name: "Autodesk Fabrication", companies: "12,500", category: "MEP Fabrication" },
    { name: "Autodesk VRED", companies: "11,100", category: "3D Visualization" },
    { name: "Autodesk CFD", companies: "9,700", category: "Computational Fluid Dynamics" },
    { name: "Autodesk Structural Bridge Design", companies: "8,300", category: "Bridge Design" },
    { name: "Autodesk FormIt", companies: "7,900", category: "Conceptual Design" },
    { name: "Autodesk Showcase", companies: "6,500", category: "3D Presentation" },
    { name: "Autodesk Mudbox", companies: "5,800", category: "Digital Sculpting" },
    { name: "Autodesk Eagle", companies: "5,200", category: "PCB Design" },
    { name: "Autodesk PartMaker", companies: "4,600", category: "CAM for Swiss" },
    { name: "Autodesk ReCap Pro", companies: "4,200", category: "Reality Capture" },
    { name: "Autodesk PowerInspect", companies: "3,800", category: "Inspection Software" },
    { name: "Autodesk Flame", companies: "3,400", category: "VFX & Finishing" },
    { name: "Autodesk Vehicle Tracking", companies: "3,000", category: "Vehicle Path Analysis" },
    { name: "Autodesk Point Layout", companies: "2,600", category: "Construction Layout" },
    { name: "Arnold Renderer", companies: "2,200", category: "3D Rendering" },
    { name: "Autodesk Arnold", companies: "1,800", category: "GPU Rendering" },
    { name: "Autodesk BIM Collaborate", companies: "1,600", category: "BIM Collaboration" },
    { name: "Autodesk Build", companies: "1,400", category: "Construction Management" },
    { name: "Autodesk ReCAP", companies: "1,200", category: "Point Cloud Processing" },
    { name: "Autodesk Inventor CAM", companies: "1,000", category: "Integrated CAM" },
    { name: "Autodesk Smoke", companies: "900", category: "Video Editing" },
    { name: "Autodesk Insight", companies: "800", category: "Building Performance" },
    { name: "Autodesk MatchMover", companies: "700", category: "Camera Tracking" },
    { name: "Autodesk Takeoff", companies: "650", category: "Quantity Takeoff" },
    { name: "Autodesk Factory Design Utilities", companies: "600", category: "Factory Layout" },
    { name: "Autodesk A360", companies: "550", category: "Cloud Collaboration" },
    { name: "Autodesk Design Review", companies: "500", category: "Design Review" },
    { name: "Autodesk DWG TrueView", companies: "480", category: "DWG Viewer" },
    { name: "Autodesk Constructware", companies: "450", category: "Project Management" },
    { name: "Autodesk Buzzsaw", companies: "420", category: "Project Collaboration" },
    { name: "Autodesk FBX", companies: "400", category: "3D Asset Exchange" },
    { name: "Autodesk Softimage", companies: "380", category: "3D Animation (Legacy)" },
    { name: "Autodesk Volo View", companies: "350", category: "CAD Viewer (Legacy)" },
    { name: "Autodesk AutoSketch", companies: "320", category: "Simple Drawing" },
    { name: "Autodesk BIM 360 Docs", companies: "300", category: "Document Management" },
    { name: "Autodesk BIM 360 Plan", companies: "280", category: "Project Planning" },
    { name: "Autodesk Fusion 360 Manage", companies: "260", category: "PLM" },
    { name: "Autodesk AEC Collection", companies: "240", category: "Architecture Suite" },
    { name: "Autodesk Configurator 360", companies: "220", category: "Product Configuration" },
    { name: "Autodesk CAMplete", companies: "200", category: "CNC Verification" },
    { name: "Autodesk Assemble", companies: "180", category: "Construction Insights" },
    { name: "Autodesk PlanGrid Build", companies: "160", category: "Field Management" },
    { name: "Autodesk Upchain", companies: "140", category: "Product Data Management" },
    { name: "Autodesk Prodsmart", companies: "120", category: "Manufacturing Execution" },
    { name: "Autodesk InfoDrainage", companies: "100", category: "Drainage Design" },
    { name: "Autodesk InfoWater Pro", companies: "95", category: "Water Distribution" },
    { name: "Autodesk InfoWorks ICM", companies: "90", category: "Integrated Catchment" },
    { name: "Autodesk InfoWorks WS Pro", companies: "85", category: "Water Systems" },
    { name: "Delcam", companies: "80", category: "CAM Solutions" },
    { name: "ShotGrid", companies: "75", category: "Production Tracking" },
    { name: "Tinkercad", companies: "70", category: "Online 3D Design" },
    { name: "Meshmixer", companies: "65", category: "3D Mesh Editing" },
    { name: "InfoSewer", companies: "60", category: "Sewer Modeling" },
    { name: "InfoSWMM", companies: "55", category: "Stormwater Management" },
    { name: "SocialCam", companies: "50", category: "Social Video" },
    { name: "XPStorm", companies: "45", category: "Storm Analysis" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Autodesk Users List",
    "description": "Comprehensive database of 1,094,200+ companies using Autodesk CAD/CAE/CAM software including AutoCAD, Inventor, Fusion 360, Revit, and Maya",
    "keywords": "Autodesk, CAD, CAE, CAM, AutoCAD, Inventor, Fusion 360, Revit, Maya, 3ds Max, user database, company list",
    "creator": {
      "@type": "Organization",
      "name": "ELP Data"
    }
  };

  return (
    <>
      <SEOHead 
        title="Autodesk Users List - 1,094,200+ Companies Using CAD/CAE/CAM Software"
        description="Access verified database of 1,094,200+ companies using Autodesk software including AutoCAD, Inventor, Fusion 360, Revit, Maya. Target CAD specialists, engineers, and architects."
        keywords="Autodesk users, AutoCAD customers, Inventor users, Fusion 360 companies, Revit users, Maya users, CAD database, engineering software"
        canonical="https://www.elpdata.com/autodesk-users-list"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-red-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center text-white">
              <h1 className="text-5xl font-heading font-bold mb-6">Autodesk, Inc. Users</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Connect with 1,094,200+ organizations using Autodesk's comprehensive suite of 78+ CAD/CAE/CAM products and technologies. Target CAD specialists, engineers, architects, designers, and digital artists implementing Autodesk's design and engineering ecosystem.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white">1.09M+</div>
                    <div className="text-sm text-white/80">Companies Using Autodesk</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white">2.66M+</div>
                    <div className="text-sm text-white/80">Autodesk Technology Records</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white">78+</div>
                    <div className="text-sm text-white/80">Products & Technologies</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Autodesk Categories Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-primary-navy mb-6">Autodesk Technology Ecosystem</h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Enterprise organizations implementing Autodesk's comprehensive suite of 78+ products spanning CAD, CAE, CAM, BIM, 3D animation, and cloud-based design platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Box className="w-6 h-6 text-orange-500" />
                    CAD & Design Software
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Complete CAD and design portfolio for 2D/3D modeling
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">AutoCAD (285.4K)</Badge>
                    <Badge variant="secondary">Autodesk Inventor (156.8K)</Badge>
                    <Badge variant="secondary">Autodesk Fusion 360 (134.2K)</Badge>
                    <Badge variant="secondary">AutoCAD LT (76.5K)</Badge>
                    <Badge variant="secondary">Autodesk Alias (29.4K)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Manufacturing & Engineering</li>
                      <li>• Automotive Design</li>
                      <li>• Product Development</li>
                      <li>• Industrial Design</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-6 h-6 text-blue-500" />
                    BIM & Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Building Information Modeling and architectural design solutions
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Autodesk Revit (118.9K)</Badge>
                    <Badge variant="secondary">Autodesk Civil 3D (67.2K)</Badge>
                    <Badge variant="secondary">Autodesk BIM 360 (28.7K)</Badge>
                    <Badge variant="secondary">Autodesk InfraWorks (15.3K)</Badge>
                    <Badge variant="secondary">Autodesk FormIt (7.9K)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Architecture & Construction</li>
                      <li>• Civil Engineering</li>
                      <li>• Infrastructure Design</li>
                      <li>• Building Design</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-purple-500" />
                    3D Animation & Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Professional 3D animation and visual effects software
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Autodesk Maya (98.7K)</Badge>
                    <Badge variant="secondary">Autodesk 3ds Max (89.3K)</Badge>
                    <Badge variant="secondary">Autodesk MotionBuilder (43.6K)</Badge>
                    <Badge variant="secondary">Autodesk Mudbox (5.8K)</Badge>
                    <Badge variant="secondary">Autodesk Flame (3.4K)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Film & Entertainment</li>
                      <li>• Game Development</li>
                      <li>• Visual Effects</li>
                      <li>• Animation Studios</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-500" />
                    Manufacturing & CAM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Computer-aided manufacturing and production solutions
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Autodesk PowerMill (25.3K)</Badge>
                    <Badge variant="secondary">Autodesk FeatureCAM (22.9K)</Badge>
                    <Badge variant="secondary">Autodesk PowerShape (18.1K)</Badge>
                    <Badge variant="secondary">Autodesk Netfabb (16.7K)</Badge>
                    <Badge variant="secondary">Autodesk PartMaker (4.6K)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Manufacturing</li>
                      <li>• CNC Machining</li>
                      <li>• Additive Manufacturing</li>
                      <li>• Production Engineering</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-teal-500" />
                    Simulation & Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Engineering simulation and analysis software
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Autodesk Moldflow (38.2K)</Badge>
                    <Badge variant="secondary">Autodesk Inventor Nastran (19.5K)</Badge>
                    <Badge variant="secondary">Autodesk CFD (9.7K)</Badge>
                    <Badge variant="secondary">Autodesk PowerInspect (3.8K)</Badge>
                    <Badge variant="secondary">Autodesk Insight (800)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Injection Molding</li>
                      <li>• Finite Element Analysis</li>
                      <li>• Fluid Dynamics</li>
                      <li>• Quality Inspection</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-indigo-500" />
                    Cloud & Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-dark mb-4">
                    Cloud-based design and collaboration platforms
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Autodesk Vault (34.8K)</Badge>
                    <Badge variant="secondary">Autodesk Build (1.4K)</Badge>
                    <Badge variant="secondary">Autodesk A360 (550)</Badge>
                    <Badge variant="secondary">ShotGrid (75)</Badge>
                    <Badge variant="secondary">Tinkercad (70)</Badge>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="text-sm font-semibold text-primary-navy">Target Industries:</div>
                    <ul className="text-sm text-neutral-dark mt-2 space-y-1">
                      <li>• Project Management</li>
                      <li>• Data Management</li>
                      <li>• Team Collaboration</li>
                      <li>• Education</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Autodesk Products & Technologies</h2>
              <p className="text-lg text-gray-600">
                Complete list of 78+ Autodesk software products with company usage data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {autodeskProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-autodesk-product-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                      <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">{product.companies}</div>
                    <div className="text-sm text-gray-500">Companies Using This Product</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-gradient-to-r from-orange-600 to-red-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get Access to Autodesk Users Database</h2>
            <p className="text-xl text-orange-100 mb-8">
              Connect with 1,094,200+ companies using Autodesk software. Perfect for CAD resellers, engineering services, training providers, and technology vendors.
            </p>
            <a 
              href="/contact-us" 
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              data-testid="button-contact-autodesk"
            >
              Get Autodesk Users List
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}