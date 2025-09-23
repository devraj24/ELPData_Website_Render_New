import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, TrendingUp, Users, Target } from "lucide-react";

export default function FitnessIndustryEmailList() {
  const professionalTitles = [
    {
      title: "Fitness Center Manager",
      description: "Professionals managing gym operations and member services",
      count: "18,420"
    },
    {
      title: "Personal Trainer",
      description: "Certified fitness professionals providing individual training",
      count: "47,280"
    },
    {
      title: "Athletic Director",
      description: "Directors overseeing athletic programs and fitness initiatives",
      count: "12,650"
    },
    {
      title: "Health Club Owner",
      description: "Business owners operating fitness and wellness facilities",
      count: "9,840"
    },
    {
      title: "Fitness Instructor",
      description: "Professionals leading group fitness classes and programs",
      count: "35,670"
    },
    {
      title: "Sports Medicine Director",
      description: "Medical professionals specializing in athletic performance",
      count: "8,920"
    },
    {
      title: "Wellness Coordinator",
      description: "Professionals managing corporate and community wellness programs",
      count: "14,780"
    },
    {
      title: "Nutritionist",
      description: "Health professionals specializing in fitness nutrition",
      count: "21,340"
    },
    {
      title: "Yoga Studio Owner",
      description: "Business owners operating yoga and mindfulness studios",
      count: "11,530"
    },
    {
      title: "Fitness Equipment Sales Manager",
      description: "Professionals selling fitness equipment and technology",
      count: "7,690"
    },
    {
      title: "Recreation Director",
      description: "Directors managing recreational fitness programs",
      count: "13,420"
    },
    {
      title: "Physical Therapist",
      description: "Healthcare professionals specializing in movement and rehabilitation",
      count: "28,560"
    }
  ];

  const industryStats = [
    { label: "Total Contacts", value: "287K+", icon: Users },
    { label: "Job Functions", value: "45+", icon: Target },
    { label: "Industries Covered", value: "12+", icon: TrendingUp },
    { label: "Data Accuracy", value: "94.7%", icon: Dumbbell }
  ];

  return (
    <>
      <SEOHead 
        title="Fitness Industry Email List - Health & Wellness Professional Contacts | ELP Data"
        description="Connect with fitness professionals, gym managers, personal trainers, and wellness coordinators. Access verified contacts across fitness centers, health clubs, and wellness facilities."
        keywords="fitness industry email list, gym manager contacts, personal trainer database, wellness professional emails"
      />
      <Header />
      
      <main className="bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Dumbbell className="w-4 h-4" />
              Fitness & Wellness Industry
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fitness Industry Email List
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with fitness professionals, gym managers, personal trainers, and wellness coordinators 
              across health clubs, fitness centers, and wellness facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Get Contact List
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View Sample Data
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industryStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Titles */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Fitness & Wellness Professional Contacts
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {professionalTitles.map((title, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=fitness&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Connect with Fitness Professionals?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access verified contacts of fitness managers, trainers, and wellness coordinators 
              to grow your business in the health and fitness industry.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Get Complete Database
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}