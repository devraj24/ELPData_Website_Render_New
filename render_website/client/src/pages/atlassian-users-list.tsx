import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Target, Building, GitBranch, MessageCircle } from "lucide-react";

export default function AtlassianUsersListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Atlassian Platform Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 7,200+ organizations using Atlassian collaboration tools. Target software development teams, project managers, and DevOps engineers implementing Jira, Confluence, and Bitbucket for agile development and team collaboration.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">7,200+</div>
                  <div className="text-sm text-white/80">Atlassian Customers</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">260K+</div>
                  <div className="text-sm text-white/80">Development Teams</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">190+</div>
                  <div className="text-sm text-white/80">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Atlassian Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Atlassian Product Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Software development and collaboration tools for agile teams and enterprise organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  Jira Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Issue tracking and project management for agile software development teams and DevOps workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Issue Tracking</Badge>
                  <Badge variant="secondary">Agile Planning</Badge>
                  <Badge variant="secondary">Sprint Management</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                  Confluence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Team collaboration and knowledge management platform for documentation and project planning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Documentation</Badge>
                  <Badge variant="secondary">Knowledge Base</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Content Creation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-purple-600" />
                  Bitbucket
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Git repository management with integrated CI/CD pipelines for software development teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git Repositories</Badge>
                  <Badge variant="secondary">CI/CD Pipelines</Badge>
                  <Badge variant="secondary">Code Review</Badge>
                  <Badge variant="secondary">Deployment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Industries */}
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
                  Software Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Development Managers</li>
                  <li>• Scrum Masters</li>
                  <li>• Software Engineers</li>
                  <li>• DevOps Engineers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-indigo-600" />
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Project Managers</li>
                  <li>• Product Owners</li>
                  <li>• Agile Coaches</li>
                  <li>• Team Leads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Implementation Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Agile Development</li>
                  <li>• Release Management</li>
                  <li>• Team Collaboration</li>
                  <li>• Knowledge Management</li>
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