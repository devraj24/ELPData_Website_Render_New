import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Users, Target, Building, Zap } from "lucide-react";

export default function JQueryUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-yellow-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">jQuery JavaScript Library Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 9,600+ organizations using jQuery for web development. Target frontend developers, web designers, and technical teams implementing jQuery for interactive web interfaces, DOM manipulation, and AJAX functionality.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">9,600+</div>
                  <div className="text-sm text-white/80">jQuery Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">77%</div>
                  <div className="text-sm text-white/80">Top 10M Websites</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">3.7M+</div>
                  <div className="text-sm text-white/80">GitHub Stars</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* jQuery Applications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">jQuery Implementation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing jQuery for web development, user interfaces, and frontend functionality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  DOM Manipulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  JavaScript library for simplified DOM manipulation, event handling, and CSS styling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">DOM Manipulation</Badge>
                  <Badge variant="secondary">Event Handling</Badge>
                  <Badge variant="secondary">CSS Selectors</Badge>
                  <Badge variant="secondary">Animations</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-yellow-600" />
                  AJAX & API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simplified AJAX requests and API integration for dynamic web applications and data loading.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AJAX Requests</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">JSON Handling</Badge>
                  <Badge variant="secondary">Async Loading</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-green-600" />
                  UI Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interactive user interface components, form validation, and user experience enhancements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UI Components</Badge>
                  <Badge variant="secondary">Form Validation</Badge>
                  <Badge variant="secondary">Interactive Elements</Badge>
                  <Badge variant="secondary">UX Enhancement</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Teams */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Target Teams & Decision Makers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-600" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Frontend Developers</li>
                  <li>• JavaScript Developers</li>
                  <li>• UI/UX Engineers</li>
                  <li>• Web Developers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-yellow-600" />
                  Design & Agency Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Web Designers</li>
                  <li>• Creative Agencies</li>
                  <li>• Digital Agencies</li>
                  <li>• Freelance Developers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Website Interactivity</li>
                  <li>• Form Enhancement</li>
                  <li>• Content Management</li>
                  <li>• E-commerce Features</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}