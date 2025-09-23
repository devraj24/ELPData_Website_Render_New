import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Apple, School, University, Phone, Mail, Award, Target, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function TeachersEmailList() {
  const teacherCategories = [
    {
      title: "Elementary School Teachers",
      count: "387,642",
      description: "K-5 educators across public and private schools",
      avgSalary: "$45,000 - $75,000",
      icon: Apple,
      color: "bg-green-500",
      grades: "Kindergarten - 5th Grade"
    },
    {
      title: "Middle School Teachers", 
      count: "245,789",
      description: "6th-8th grade subject specialists and educators",
      avgSalary: "$48,000 - $78,000",
      icon: BookOpen,
      color: "bg-blue-500",
      grades: "6th - 8th Grade"
    },
    {
      title: "High School Teachers",
      count: "567,234",
      description: "9th-12th grade educators and department heads",
      avgSalary: "$52,000 - $85,000",
      icon: GraduationCap,
      color: "bg-purple-500",
      grades: "9th - 12th Grade"
    },
    {
      title: "University Professors",
      count: "234,567",
      description: "College and university faculty members",
      avgSalary: "$65,000 - $150,000",
      icon: University,
      color: "bg-indigo-500",
      grades: "Undergraduate/Graduate"
    },
    {
      title: "Special Education Teachers",
      count: "156,789",
      description: "Specialized educators for students with disabilities",
      avgSalary: "$50,000 - $80,000",
      icon: Users,
      color: "bg-teal-500",
      grades: "All Grade Levels"
    },
    {
      title: "School Administrators",
      count: "89,456",
      description: "Principals, assistant principals, and superintendents",
      avgSalary: "$75,000 - $130,000",
      icon: School,
      color: "bg-orange-500",
      grades: "Administrative Leadership"
    }
  ];

  const subjectAreas = [
    "Mathematics Education",
    "Science Education (Biology, Chemistry, Physics)",
    "English Language Arts",
    "Social Studies & History", 
    "Physical Education & Health",
    "Arts Education (Music, Visual Arts)",
    "World Languages",
    "Career & Technical Education",
    "Special Education Services",
    "STEM Education Programs"
  ];

  const educatorDataPoints = [
    "Professional Email Address",
    "Direct Phone Number",
    "LinkedIn Profile", 
    "Teaching License/Certification",
    "Educational Background",
    "Years of Teaching Experience",
    "Subject Areas/Grade Levels",
    "School District/Institution",
    "Professional Development History",
    "Curriculum Specializations",
    "Technology Integration Skills",
    "Student Achievement Records"
  ];

  return (
    <>
      <SEOHead 
        title="Teachers Email List - 1,681,477+ Certified Educators | ELP Data"
        description="Access 1,681,477+ verified teacher contacts including K-12 educators, university professors, administrators, and special education specialists with certification data."
        keywords="teachers email list, educator database, school teachers, professors, education professionals, certified teachers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Teachers Email List
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                1,681,477+ Certified Educators & Education Professionals
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  K-12 Teachers
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <University className="w-5 h-5 mr-2" />
                  University Professors
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <School className="w-5 h-5 mr-2" />
                  Administrators
                </Badge>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Access Educator Database
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1.68M+</div>
                <div className="text-gray-600">Certified Educators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.2%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">130K+</div>
                <div className="text-gray-600">Schools Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Subject Areas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Categories */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Professional Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive database across all education levels and specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teacherCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${category.color} text-white mr-4`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{category.title}</h3>
                        <p className="text-2xl font-bold text-green-600">{category.count}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Grade Level:</span>
                        <span className="text-sm font-medium">{category.grades}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Avg. Salary:</span>
                        <span className="text-sm font-medium">{category.avgSalary}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Subject Areas & Data Points */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Subject Areas & Specializations
                </h2>
                <div className="space-y-4">
                  {subjectAreas.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Educator Data Points
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {educatorDataPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Market Insights */}
        <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Market Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certified Professionals</h3>
                <p className="text-gray-600">All educators verified with current teaching licenses and certifications</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Targeted Outreach</h3>
                <p className="text-gray-600">Segment by grade level, subject area, and teaching experience</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nationwide Coverage</h3>
                <p className="text-gray-600">Public, private, charter, and higher education institutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfect for Education-Focused Marketing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-lg mb-2">EdTech Companies</h3>
                <p className="text-gray-600">Reach educators for educational technology solutions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-lg mb-2">Publishers</h3>
                <p className="text-gray-600">Connect with teachers for curriculum materials</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-lg mb-2">Professional Development</h3>
                <p className="text-gray-600">Market training programs and workshops</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="font-semibold text-lg mb-2">Suppliers</h3>
                <p className="text-gray-600">Reach educators for classroom supplies</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Education Professionals
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Access 1,681,477+ verified teachers and education professionals with comprehensive contact data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Get Educator Database
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}