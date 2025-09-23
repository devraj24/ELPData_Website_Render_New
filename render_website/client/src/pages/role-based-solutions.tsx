import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, ArrowRight, TrendingUp, Building2, UserCheck, Heart, Code, Scale, Home, GraduationCap, Calculator, Stethoscope, Wrench, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function RoleBasedSolutions() {
  const professionalCategories = [
    {
      category: "C-Level Executives",
      description: "Senior executive leadership driving organizational strategy and decision-making",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      roles: [
        {
          title: "CEO Email List",
          description: "Chief Executive Officers leading organizations across all industries",
          count: "355,250+",
          href: "/ceo-email-list",
          icon: <Users className="w-6 h-6 text-blue-600" />,
          badges: ["Decision Makers", "Strategic Leaders", "Fortune 500"]
        },
        {
          title: "CFO Email List", 
          description: "Chief Financial Officers managing corporate finance and planning",
          count: "226,200+",
          href: "/cfo-email-list",
          icon: <TrendingUp className="w-6 h-6 text-green-600" />,
          badges: ["Financial Leaders", "Budget Authority", "Investment Decisions"]
        },
        {
          title: "CTO Email List",
          description: "Chief Technology Officers driving technology strategy and innovation",
          count: "287,100+", 
          href: "/cto-email-list",
          icon: <Code className="w-6 h-6 text-purple-600" />,
          badges: ["Tech Leaders", "Innovation Drivers", "Digital Strategy"]
        },
        {
          title: "CMO Email List",
          description: "Chief Marketing Officers leading brand strategy and growth",
          count: "194,300+",
          href: "/cmo-email-list", 
          icon: <Target className="w-6 h-6 text-orange-600" />,
          badges: ["Marketing Leaders", "Brand Strategy", "Customer Growth"]
        }
      ]
    },
    {
      category: "Senior Management",
      description: "Vice Presidents and Directors across all business functions",
      color: "bg-gradient-to-br from-emerald-50 to-green-100",
      borderColor: "border-emerald-200",
      roles: [
        {
          title: "VP Email List",
          description: "Vice Presidents across all business functions and departments",
          count: "419,050+",
          href: "/vp-email-list",
          icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
          badges: ["Senior Management", "Department Heads", "Strategic Roles"]
        },
        {
          title: "Directors Email List",
          description: "Directors managing teams and strategic initiatives",
          count: "542,180+",
          href: "/directors-email-list",
          icon: <Building2 className="w-6 h-6 text-teal-600" />,
          badges: ["Team Leaders", "Project Management", "Strategic Planning"]
        },
        {
          title: "Managers Email List",
          description: "Managers across all industries and business functions",
          count: "1,245,670+",
          href: "/managers-email-list",
          icon: <Briefcase className="w-6 h-6 text-blue-600" />,
          badges: ["Team Management", "Operations", "Process Improvement"]
        }
      ]
    },
    {
      category: "Healthcare Professionals",
      description: "Medical and healthcare professionals across all specialties",
      color: "bg-gradient-to-br from-red-50 to-pink-100",
      borderColor: "border-red-200",
      roles: [
        {
          title: "Doctors Email List",
          description: "Licensed physicians across all medical specialties",
          count: "387,420+",
          href: "/doctors-email-list",
          icon: <Stethoscope className="w-6 h-6 text-red-600" />,
          badges: ["Medical Professionals", "Healthcare Leaders", "Clinical Decision Makers"]
        },
        {
          title: "Nurses Email List",
          description: "Registered nurses and nursing professionals",
          count: "456,230+",
          href: "/nurses-email-list",
          icon: <Heart className="w-6 h-6 text-pink-600" />,
          badges: ["Patient Care", "Healthcare Teams", "Medical Staff"]
        },
        {
          title: "Pharmacists Email List",
          description: "Licensed pharmacists and pharmaceutical professionals",
          count: "263,180+",
          href: "/pharmacists-email-list",
          icon: <Heart className="w-6 h-6 text-purple-600" />,
          badges: ["Pharmaceutical", "Medication Management", "Clinical Pharmacy"]
        }
      ]
    },
    {
      category: "Technical Professionals",
      description: "Engineers, architects, and technical specialists",
      color: "bg-gradient-to-br from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
      roles: [
        {
          title: "Engineers Email List",
          description: "Professional engineers across all engineering disciplines",
          count: "678,450+",
          href: "/engineers-email-list",
          icon: <Wrench className="w-6 h-6 text-purple-600" />,
          badges: ["Technical Professionals", "Problem Solvers", "Innovation Leaders"]
        },
        {
          title: "Software Engineers Email List",
          description: "Software developers and engineering professionals",
          count: "516,780+",
          href: "/software-engineers-email-list",
          icon: <Code className="w-6 h-6 text-indigo-600" />,
          badges: ["Software Development", "Tech Innovation", "Digital Solutions"]
        },
        {
          title: "Architects Email List",
          description: "Licensed architects and architectural professionals",
          count: "118,390+",
          href: "/architects-email-list",
          icon: <Building2 className="w-6 h-6 text-gray-600" />,
          badges: ["Design Professionals", "Construction Industry", "Project Leadership"]
        }
      ]
    },
    {
      category: "Professional Services",
      description: "Legal, financial, and professional service providers",
      color: "bg-gradient-to-br from-amber-50 to-yellow-100",
      borderColor: "border-amber-200",
      roles: [
        {
          title: "Lawyers Email List",
          description: "Licensed attorneys and legal professionals",
          count: "350,240+",
          href: "/lawyers-email-list",
          icon: <Scale className="w-6 h-6 text-amber-600" />,
          badges: ["Legal Professionals", "Law Firms", "Corporate Counsel"]
        },
        {
          title: "Accountants Email List",
          description: "Certified public accountants and financial professionals",
          count: "298,560+",
          href: "/accountants-email-list",
          icon: <Calculator className="w-6 h-6 text-green-600" />,
          badges: ["Financial Services", "Tax Professionals", "Business Advisors"]
        },
        {
          title: "Real Estate Agents Email List",
          description: "Licensed real estate professionals and brokers",
          count: "353,780+",
          href: "/real-estate-agents-email-list",
          icon: <Home className="w-6 h-6 text-blue-600" />,
          badges: ["Property Sales", "Real Estate Market", "Investment Advisors"]
        },
        {
          title: "Teachers Email List",
          description: "Educational professionals and academic staff",
          count: "425,690+",
          href: "/teachers-email-list",
          icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
          badges: ["Education Sector", "Academic Professionals", "Learning Leaders"]
        }
      ]
    },
    {
      category: "Industry Specialists",
      description: "Specialized professionals across various industries and sectors",
      color: "bg-gradient-to-br from-teal-50 to-cyan-100",
      borderColor: "border-teal-200",
      roles: [
        {
          title: "Warehouse Professionals Email List",
          description: "Warehouse managers, supply chain executives, and logistics professionals",
          count: "31,975+",
          href: "/warehouse-professionals-email-list",
          icon: <Building2 className="w-6 h-6 text-teal-600" />,
          badges: ["Supply Chain", "Logistics", "Operations Management"]
        },
        {
          title: "Importers & Exporters Email List",
          description: "International trade professionals and global commerce specialists",
          count: "15,000+",
          href: "/importers-exporters-email-list",
          icon: <Target className="w-6 h-6 text-blue-600" />,
          badges: ["International Trade", "Global Commerce", "Import/Export"]
        },
        {
          title: "Contractors Email List",
          description: "Construction contractors and building industry professionals",
          count: "245,680+",
          href: "/contractors-email-list",
          icon: <Wrench className="w-6 h-6 text-orange-600" />,
          badges: ["Construction", "Building Industry", "Project Management"]
        },
        {
          title: "Real Estate Investors Email List",
          description: "Property investors and real estate investment professionals",
          count: "189,420+",
          href: "/real-estate-investors-email-list",
          icon: <Home className="w-6 h-6 text-green-600" />,
          badges: ["Property Investment", "Real Estate", "Investment Decisions"]
        }
      ]
    },
    {
      category: "Engineering & Technical Specialties",
      description: "Specialized engineering professionals across all disciplines",
      color: "bg-gradient-to-br from-indigo-50 to-blue-100",
      borderColor: "border-indigo-200",
      roles: [
        {
          title: "Civil Engineers Email List",
          description: "Licensed civil engineers and infrastructure professionals",
          count: "158,340+",
          href: "/civil-engineers-email-list",
          icon: <Building2 className="w-6 h-6 text-indigo-600" />,
          badges: ["Infrastructure", "Construction", "Public Works"]
        },
        {
          title: "Electrical Engineers Email List",
          description: "Electrical engineering professionals and power systems experts",
          count: "142,560+",
          href: "/electrical-engineers-email-list",
          icon: <Wrench className="w-6 h-6 text-yellow-600" />,
          badges: ["Power Systems", "Electronics", "Automation"]
        },
        {
          title: "Security Specialists Email List",
          description: "Cybersecurity and physical security professionals",
          count: "98,750+",
          href: "/security-specialists-email-list",
          icon: <UserCheck className="w-6 h-6 text-red-600" />,
          badges: ["Cybersecurity", "Risk Management", "Security Solutions"]
        }
      ]
    },
    {
      category: "Additional Healthcare & Professional Services",
      description: "Extended healthcare and professional service providers",
      color: "bg-gradient-to-br from-rose-50 to-pink-100",
      borderColor: "border-rose-200",
      roles: [
        {
          title: "Dentists Email List",
          description: "Licensed dentists and dental practice professionals",
          count: "178,920+",
          href: "/dentists-email-list",
          icon: <Heart className="w-6 h-6 text-rose-600" />,
          badges: ["Dental Care", "Healthcare", "Medical Professionals"]
        },
        {
          title: "Consultants Email List",
          description: "Business consultants and advisory professionals",
          count: "234,670+",
          href: "/consultants-email-list",
          icon: <Briefcase className="w-6 h-6 text-purple-600" />,
          badges: ["Business Advisory", "Strategy", "Professional Services"]
        },
        {
          title: "Nurses Email List",
          description: "Registered nurses and nursing professionals",
          count: "456,230+",
          href: "/nurses-email-list",
          icon: <Heart className="w-6 h-6 text-pink-600" />,
          badges: ["Patient Care", "Healthcare Teams", "Medical Staff"]
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Professional Email Lists - Role-Based Contact Database | ELP Data"
        description="Access premium professional email lists organized by job titles and roles. Target CEOs, CTOs, doctors, engineers, lawyers, and more with accurate contact data."
        keywords="professional email lists, job title email lists, CEO email list, CTO email list, doctors email list, lawyers email list, engineers email list"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              6.2M+ Professional Contacts
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Email Lists by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Job Title</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Target decision-makers across all industries with our comprehensive database of verified professional contacts organized by specific job roles and responsibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Industry-specific segmentation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Categories */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {professionalCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.roles.map((role, roleIndex) => (
                    <Card key={roleIndex} className={`${category.color} ${category.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {role.icon}
                            <div className="text-2xl font-bold text-gray-900">{role.count}</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {role.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4 line-clamp-2">{role.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {role.badges.map((badge, badgeIndex) => (
                            <Badge key={badgeIndex} variant="secondary" className="text-xs px-2 py-1">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <Link href={role.href}>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Connect with Decision Makers?</h2>
            <p className="text-xl mb-8 opacity-90">
              Access verified professional contacts across all industries and job functions. Start targeting the right audience for your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/ai-agents">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg">
                  Try AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}