import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Building2, Globe, Users, Download, CheckCircle, Network, Router, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function CiscoUsersList() {
  const ciscoTechnologies = [
    // Routers & Networking
    "Cisco ASR Series", "Cisco ISR Series", "Cisco Catalyst Switches", "Cisco Nexus Series",
    "Cisco 7600 Series", "Cisco 4500 Series", "Cisco 3750 Series", "Cisco 2960 Series",
    
    // Security
    "Cisco ASA Firewalls", "Cisco Firepower NGFW", "Cisco Umbrella", "Cisco Duo Security",
    "Cisco Identity Services Engine", "Cisco Stealthwatch", "Cisco Threat Grid",
    
    // Wireless & Mobility
    "Cisco Aironet", "Cisco Meraki", "Cisco Catalyst 9800", "Cisco Prime Infrastructure",
    
    // Collaboration
    "Cisco Webex", "Cisco TelePresence", "Cisco Unified Communications", "Cisco Jabber",
    "Cisco Contact Center", "Cisco Unity Connection",
    
    // Data Center & Cloud
    "Cisco UCS Servers", "Cisco HyperFlex", "Cisco ACI", "Cisco Intersight",
    "Cisco Cloud Services", "Cisco Container Platform",
    
    // SD-WAN & Intent-Based Networking
    "Cisco SD-WAN", "Cisco DNA Center", "Cisco Software-Defined Access", "Cisco Viptela"
  ];

  const keyMetrics = [
    { value: "238.8K", label: "Companies", icon: Building2 },
    { value: "1.1M", label: "Records", icon: Users },
    { value: "97%", label: "Data Accuracy", icon: CheckCircle },
    { value: "190+", label: "Countries", icon: Globe }
  ];

  const industryBreakdown = [
    { industry: "Telecommunications", percentage: 28, companies: "66.9K" },
    { industry: "Financial Services", percentage: 18, companies: "43.0K" },
    { industry: "Healthcare", percentage: 15, companies: "35.8K" },
    { industry: "Government", percentage: 12, companies: "28.7K" },
    { industry: "Education", percentage: 10, companies: "23.9K" },
    { industry: "Manufacturing", percentage: 8, companies: "19.1K" },
    { industry: "Technology", percentage: 5, companies: "11.9K" },
    { industry: "Other", percentage: 4, companies: "9.5K" }
  ];

  const companySize = [
    { size: "Enterprise (1000+ employees)", percentage: 45, companies: "107.5K" },
    { size: "Mid-Market (250-999 employees)", percentage: 35, companies: "83.6K" },
    { size: "Small Business (50-249 employees)", percentage: 15, companies: "35.8K" },
    { size: "SMB (1-49 employees)", percentage: 5, companies: "11.9K" }
  ];

  return (
    <>
      <SEOHead 
        title="Cisco Users List - 238.8K+ Network Infrastructure Companies | ELP Data"
        description="Access comprehensive Cisco users database with 238.8K+ companies and 1.1M+ verified contacts. Connect with network administrators, IT infrastructure managers, and Cisco technology implementers."
        keywords="cisco users list, cisco customers, network infrastructure, cisco networking, enterprise networking, cisco technology users"
        canonical="https://www.elpdata.com/cisco-users-list"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Network className="w-4 h-4 mr-2" />
              Network Infrastructure Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cisco Users
              <span className="block text-blue-600">Customer Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with 238,800+ companies using Cisco networking equipment globally. Target network administrators, 
              IT infrastructure managers, and network engineers implementing Cisco solutions for enterprise connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-5 h-5 mr-2" />
                Download Sample Data
              </Button>
              <Button size="lg" variant="outline">
                Request Custom List
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cisco Technology Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Cisco Technology Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Router className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-lg">Routing & Switching</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Enterprise routers, switches, and network infrastructure equipment</p>
                  <div className="space-y-2">
                    {["Cisco ASR Series", "Cisco Catalyst Switches", "Cisco Nexus Series", "Cisco ISR Series"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-lg">Security Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Comprehensive cybersecurity and network protection solutions</p>
                  <div className="space-y-2">
                    {["Cisco Firepower", "Cisco ASA", "Cisco Umbrella", "Cisco Duo Security"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-lg">Collaboration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Unified communications and collaboration platforms</p>
                  <div className="space-y-2">
                    {["Cisco Webex", "Cisco TelePresence", "Cisco Unified Communications", "Cisco Contact Center"].map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Industry Breakdown */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Industry Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {industryBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.industry}</span>
                            <span className="text-sm text-gray-600">{item.companies}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Company Size Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {companySize.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.size}</span>
                            <span className="text-sm text-gray-600">{item.companies}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* All Cisco Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Complete Cisco Technology Coverage</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ciscoTechnologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-white mb-6">Access Cisco Customer Database</h2>
              <p className="text-xl text-blue-100 mb-8">
                Connect with 238,800+ companies and 1.1M+ verified contacts using Cisco networking solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Sample Data
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Request Custom List
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}