import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Mail, Building, TrendingUp, Shield, Target, Search, Download, Phone, MapPin, Star, Palette } from "lucide-react";

export default function CreativeDirectorsEmailList() {
  const implementationSolutions = [
    {
      title: "Creative Campaign Management",
      description: "Creative Directors Email List implementation for creative campaign management and brand excellence",
      categories: ["Brand Strategy", "Creative Direction", "Campaign Development", "Visual Identity"],
      targetIndustries: [
        "Advertising Agencies",
        "Digital Marketing Companies", 
        "Brand Consultancies",
        "Creative Studios"
      ],
      responsibleTitles: [
        "Creative Director",
        "Art Director", 
        "Brand Manager",
        "Design Lead"
      ],
      challenges: [
        "Brand consistency across multiple channels and touchpoints",
        "Creative workflow optimization and project management",
        "Client approval processes and feedback integration",
        "Creative asset management and version control",
        "Cross-platform campaign coordination",
        "Budget allocation for creative resources",
        "Team collaboration and creative brainstorming",
        "Measuring creative performance and ROI"
      ],
      icon: <Palette className="w-8 h-8 text-pink-600" />
    },
    {
      title: "Digital Content Strategy",
      description: "Creative Directors Email List implementation for digital content strategy and engagement",
      categories: ["Content Planning", "Social Media", "Digital Campaigns", "Interactive Design"],
      targetIndustries: [
        "Media & Entertainment",
        "Technology Companies",
        "E-commerce Platforms", 
        "Publishing Houses"
      ],
      responsibleTitles: [
        "Content Strategist",
        "Digital Creative Director",
        "Social Media Manager",
        "UX Director"
      ],
      challenges: [
        "Multi-platform content adaptation and optimization",
        "Audience engagement and interaction strategies",
        "Content calendar planning and scheduling",
        "Performance analytics and content optimization",
        "Influencer collaboration and partnerships",
        "Video content production and distribution",
        "User-generated content integration",
        "Cross-channel storytelling consistency"
      ],
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Brand Identity Development",
      description: "Creative Directors Email List implementation for brand identity development and positioning",
      categories: ["Brand Design", "Logo Development", "Visual Systems", "Brand Guidelines"],
      targetIndustries: [
        "Design Agencies",
        "Corporate Branding",
        "Startup Companies",
        "Rebranding Projects"
      ],
      responsibleTitles: [
        "Brand Identity Designer",
        "Visual Identity Manager", 
        "Creative Strategist",
        "Brand Consultant"
      ],
      challenges: [
        "Brand differentiation in competitive markets",
        "Visual identity system scalability",
        "Brand guideline implementation and compliance",
        "Stakeholder alignment on creative vision",
        "Market research and audience insights integration",
        "Trademark and legal considerations",
        "Brand evolution and refresh strategies",
        "Cross-cultural brand adaptation"
      ],
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: "Creative Team Leadership", 
      description: "Creative Directors Email List implementation for creative team leadership and development",
      categories: ["Team Management", "Creative Mentoring", "Project Leadership", "Talent Development"],
      targetIndustries: [
        "Creative Agencies",
        "In-house Creative Teams",
        "Marketing Departments",
        "Design Studios"
      ],
      responsibleTitles: [
        "Senior Creative Director",
        "Creative Manager",
        "Art Director", 
        "Design Team Lead"
      ],
      challenges: [
        "Creative team motivation and inspiration",
        "Talent acquisition and retention strategies",
        "Skills development and training programs",
        "Creative process optimization",
        "Cross-functional collaboration",
        "Performance evaluation and feedback",
        "Remote creative team management",
        "Creative culture building and maintenance"
      ],
      icon: <Users className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Client Relationship Management",
      description: "Creative Directors Email List implementation for client relationship management and satisfaction", 
      categories: ["Client Communication", "Project Delivery", "Relationship Building", "Account Management"],
      targetIndustries: [
        "Service-based Creative Agencies",
        "Consulting Firms",
        "Freelance Networks",
        "Client-focused Studios"
      ],
      responsibleTitles: [
        "Account Director",
        "Client Services Manager",
        "Creative Account Manager",
        "Project Director"
      ],
      challenges: [
        "Client expectation management and alignment",
        "Creative presentation and pitch development", 
        "Revision handling and scope management",
        "Long-term relationship building strategies",
        "Cross-cultural client communication",
        "Budget negotiation and value demonstration",
        "Crisis management and problem resolution",
        "Client feedback integration in creative process"
      ],
      icon: <Shield className="w-8 h-8 text-red-600" />
    },
    {
      title: "Innovation & Trend Research",
      description: "Creative Directors Email List implementation for innovation & trend research and competitive advantage",
      categories: ["Trend Analysis", "Innovation Strategy", "Market Research", "Future Planning"],
      targetIndustries: [
        "Innovation Labs",
        "Research & Development",
        "Trend Forecasting",
        "Strategic Planning"
      ],
      responsibleTitles: [
        "Innovation Director",
        "Trend Researcher",
        "Strategic Creative Lead",
        "Future Planning Specialist"
      ],
      challenges: [
        "Emerging trend identification and analysis",
        "Technology adoption in creative workflows",
        "Competitive landscape monitoring",
        "Innovation implementation strategies",
        "Creative tool evaluation and adoption",
        "Industry disruption preparation",
        "Future skills development planning",
        "Innovation ROI measurement and tracking"
      ],
      icon: <Star className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Creative Directors Email List - Creative Executive Contacts Database | ELP Data"
        description="Access our comprehensive Creative Directors email list with 161,359 verified creative executive contacts. Target creative leaders across advertising, design, and marketing industries."
        keywords="creative directors email list, creative executive contacts, advertising database, design director mailing list"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Creative Directors <span className="text-pink-600">Email List</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with Creative Directors across various creative functions and use cases. 
                  Access our comprehensive database of creative executives implementing innovative solutions for brand excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Download Sample List
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-3 border-pink-600 text-pink-600 hover:bg-pink-50">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Custom List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>161,359 Creative Director Contacts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>All Industries</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Creative Directors Database</h3>
                <div className="space-y-4">
                  <Input placeholder="Company Name" className="border-pink-200 focus:border-pink-500" />
                  <Input placeholder="Industry" className="border-pink-200 focus:border-pink-500" />
                  <Input placeholder="Location" className="border-pink-200 focus:border-pink-500" />
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    <Search className="w-4 h-4 mr-2" />
                    Search Creative Director Contacts
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">98.5%</div>
                    <div className="text-sm text-gray-600">Data Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100">
                <div className="text-3xl font-bold text-pink-600 mb-2">161.4K+</div>
                <div className="text-gray-600">Creative Director Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%+</div>
                <div className="text-gray-600">Email Deliverability</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Industries Covered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">Monthly</div>
                <div className="text-gray-600">Data Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Creative Directors Email List Implementation Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Organizations implementing Creative Directors Email List across various creative functions and use cases
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {implementationSolutions.map((solution, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{solution.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.categories.map((category, idx) => (
                          <span key={idx} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Industries */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Target Industries:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.targetIndustries.map((industry, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-pink-600 rounded-full"></div>
                            {industry}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible Job Titles */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Responsible Job Titles:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {solution.responsibleTitles.map((title, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Current Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Current Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                        {solution.challenges.slice(0, 4).map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                      {solution.challenges.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">
                          +{solution.challenges.length - 4} more challenges
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Creative Directors?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Access our comprehensive database of 161,359 Creative Director contacts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-pink-500 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Speak with Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}