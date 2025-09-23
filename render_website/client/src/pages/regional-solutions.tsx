import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Target, ArrowRight, TrendingUp, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function RegionalSolutions() {
  const regions = [
    {
      title: "Europe Mailing Lists",
      description: "Target businesses across European markets including UK, Germany, France, and more",
      count: "2.3M+",
      href: "/europe-mailing-lists",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      countries: ["United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands"]
    },
    {
      title: "North America Mailing Lists", 
      description: "Comprehensive business contacts across USA, Canada, and Mexico",
      count: "4.1M+",
      href: "/north-america-mailing-lists",
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      countries: ["United States", "Canada", "Mexico"]
    },
    {
      title: "APAC Mailing Lists",
      description: "Access growing markets in Asia-Pacific region",
      count: "1.8M+", 
      href: "/apac-mailing-lists",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      countries: ["Australia", "Japan", "Singapore", "India", "China", "South Korea"]
    },
    {
      title: "South America Mailing Lists",
      description: "Connect with businesses across Latin American markets",
      count: "756K+",
      href: "/south-america-mailing-lists", 
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      countries: ["Brazil", "Argentina", "Chile", "Colombia", "Peru", "Venezuela"]
    },
    {
      title: "Middle East Mailing Lists",
      description: "Target high-growth markets in the Middle East region",
      count: "485K+",
      href: "/middle-east-mailing-lists",
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"]
    },
    {
      title: "Africa Mailing Lists",
      description: "Emerging markets across the African continent",
      count: "612K+",
      href: "/africa-mailing-lists",
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      countries: ["South Africa", "Nigeria", "Kenya", "Egypt", "Morocco", "Ghana"]
    }
  ];

  const specificCountries = [
    "United Kingdom Email Lists", "Germany Email Lists", "France Email Lists", "Australia Email Lists",
    "Japan Email Lists", "India Email Lists", "Brazil Email Lists", "Mexico Email Lists",
    "Italy Email Lists", "Spain Email Lists", "Netherlands Email Lists", "Belgium Email Lists",
    "Switzerland Email Lists", "Austria Email Lists", "Sweden Email Lists", "Norway Email Lists",
    "Denmark Email Lists", "Finland Email Lists", "Poland Email Lists", "Czech Republic Email Lists",
    "Hungary Email Lists", "Portugal Email Lists", "Ireland Email Lists", "Greece Email Lists"
  ];

  return (
    <>
      <SEOHead 
        title="Regional Focus - Geographic Email Lists & Mailing Lists | ELP Data"
        description="Target global markets with our comprehensive regional email lists. Access business contacts across Europe, North America, APAC, South America, Middle East and Africa."
        keywords="regional email lists, global mailing lists, geographic targeting, international business contacts"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Regional <span className="text-indigo-600">Focus</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expand your business globally with our comprehensive regional targeting solutions. 
              Access verified business contacts across all major geographic markets worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">
                <Globe className="w-5 h-5 mr-2" />
                Explore Global Markets
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <MapPin className="w-5 h-5 mr-2" />
                Custom Geographic Lists
              </Button>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100">
                <div className="text-3xl font-bold text-indigo-600 mb-2">10M+</div>
                <div className="text-gray-600">Global Contacts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">195+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Continents</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Regional Mailing Lists</h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                      {region.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{region.title}</CardTitle>
                    <div className="text-2xl font-bold text-indigo-600">{region.count}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Key Markets:</div>
                      <div className="flex flex-wrap gap-1">
                        {region.countries.slice(0, 3).map((country, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                        {region.countries.length > 3 && (
                          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                            +{region.countries.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={region.href}>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 group-hover:bg-indigo-700">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Country-Specific Lists */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Country-Specific Email Lists</h2>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {specificCountries.map((country, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer border border-gray-200 hover:border-indigo-200">
                  <span className="text-gray-700 hover:text-indigo-700 font-medium text-sm">{country}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Request Custom Country List
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Regional Targeting?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600">Access business contacts across 195+ countries with comprehensive coverage in all major markets.</p>
              </div>
              <div className="p-6">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Targeting</h3>
                <p className="text-gray-600">Target specific regions, countries, or cities to maximize your campaign effectiveness and ROI.</p>
              </div>
              <div className="p-6">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Expansion</h3>
                <p className="text-gray-600">Identify and enter new geographic markets with confidence using verified business data.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}