import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, Target, Briefcase, Crown, Filter, Search, Stethoscope, Code, Scale } from "lucide-react";
import { useState } from "react";

export default function RoleConnect() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const professionalCategories = [
    {
      title: "C-Level Executives",
      description: "Connect with top-level decision makers across all industries",
      icon: Crown,
      count: "2.8M+",
      color: "bg-purple-500",
      roles: [
        {title: "CEO Email List", count: "355,250+", description: "Chief Executive Officers"},
        {title: "CFO Email List", count: "226,200+", description: "Chief Financial Officers"},
        {title: "CTO Email List", count: "287,100+", description: "Chief Technology Officers"},
        {title: "CMO Email List", count: "194,300+", description: "Chief Marketing Officers"},
        {title: "COO Email List", count: "178,450+", description: "Chief Operating Officers"},
        {title: "CISO Email List", count: "142,780+", description: "Chief Information Security Officers"},
        {title: "CRO Email List", count: "156,890+", description: "Chief Revenue Officers"},
        {title: "CPO Email List", count: "134,560+", description: "Chief Product Officers"},
        {title: "CHRO Email List", count: "167,320+", description: "Chief Human Resources Officers"},
        {title: "CDO Email List", count: "123,450+", description: "Chief Data Officers"},
        {title: "CBO Email List", count: "98,560+", description: "Chief Business Officers"},
        {title: "CBDO Email List", count: "87,340+", description: "Chief Business Development Officers"},
        {title: "CTIO Email List", count: "76,230+", description: "Chief Technology & Innovation Officers"},
        {title: "CPTO Email List", count: "89,670+", description: "Chief Product & Technology Officers"},
        {title: "CGRO Email List", count: "67,890+", description: "Chief Growth Officers"},
        {title: "CCO Email List", count: "145,670+", description: "Chief Customer Officers"},
        {title: "CLO Email List", count: "78,450+", description: "Chief Legal Officers"},
        {title: "CSO Email List", count: "134,780+", description: "Chief Strategy Officers"},
        {title: "CAO Email List", count: "89,560+", description: "Chief Administrative Officers"},
        {title: "CECO Email List", count: "56,780+", description: "Chief Ethics & Compliance Officers"},
        {title: "CRMO Email List", count: "67,890+", description: "Chief Risk Management Officers"},
        {title: "CPCO Email List", count: "78,450+", description: "Chief Privacy & Compliance Officers"},
        {title: "CTSO Email List", count: "89,670+", description: "Chief Technology Strategy Officers"},
        {title: "CMSO Email List", count: "56,780+", description: "Chief Marketing Strategy Officers"},
        {title: "CFSO Email List", count: "67,890+", description: "Chief Financial Strategy Officers"},
        {title: "CANO Email List", count: "45,670+", description: "Chief Analytics Officers"},
        {title: "CIDO Email List", count: "78,450+", description: "Chief Information & Data Officers"},
        {title: "CIRO Email List", count: "89,560+", description: "Chief Innovation & Research Officers"},
        {title: "CTCO Email List", count: "67,780+", description: "Chief Technology & Communications Officers"},
        {title: "CDMO Email List", count: "56,890+", description: "Chief Digital Marketing Officers"},
        {title: "CEMO Email List", count: "78,340+", description: "Chief Experience Management Officers"},
        {title: "CQO Email List", count: "89,450+", description: "Chief Quality Officers"},
        {title: "CPMO Email List", count: "67,560+", description: "Chief Performance Management Officers"},
        {title: "CRSO Email List", count: "78,670+", description: "Chief Revenue Strategy Officers"},
        {title: "CTMO Email List", count: "89,780+", description: "Chief Transformation Management Officers"},
        {title: "COPO Email List", count: "56,450+", description: "Chief Operations Performance Officers"},
        {title: "CGCO Email List", count: "67,340+", description: "Chief Governance & Compliance Officers"},
        {title: "CSCO Email List", count: "78,890+", description: "Chief Supply Chain Officers"},
        {title: "CLCO Email List", count: "89,560+", description: "Chief Learning & Culture Officers"},
        {title: "CECO Email List", count: "67,780+", description: "Chief Employee Experience Officers"},
        {title: "CBRO Email List", count: "78,450+", description: "Chief Brand & Reputation Officers"},
        {title: "CICO Email List", count: "89,670+", description: "Chief Internal Communications Officers"},
        {title: "CDCO Email List", count: "56,890+", description: "Chief Digital Commerce Officers"},
        {title: "CPTO Email List", count: "67,340+", description: "Chief Platform Technology Officers"},
        {title: "CABO Email List", count: "78,560+", description: "Chief Automation & Business Officers"},
        {title: "CAIO Email List", count: "89,780+", description: "Chief Artificial Intelligence Officers"},
        {title: "CMLO Email List", count: "67,450+", description: "Chief Machine Learning Officers"},
        {title: "CBCO Email List", count: "78,670+", description: "Chief Blockchain Officers"},
        {title: "CXCO Email List", count: "89,340+", description: "Chief Experience & Customer Officers"},
        {title: "CVCO Email List", count: "56,780+", description: "Chief Venture Capital Officers"}
      ]
    },
    {
      title: "Senior Management",
      description: "Target vice presidents and senior leadership roles", 
      icon: Briefcase,
      count: "4.2M+",
      color: "bg-blue-500",
      roles: [
        {title: "VP Sales Email List", count: "198,450+", description: "Vice Presidents of Sales"},
        {title: "VP Marketing Email List", count: "176,230+", description: "Vice Presidents of Marketing"},
        {title: "VP Engineering Email List", count: "189,670+", description: "Vice Presidents of Engineering"},
        {title: "VP Operations Email List", count: "203,890+", description: "Vice Presidents of Operations"},
        {title: "VP Finance Email List", count: "167,450+", description: "Vice Presidents of Finance"},
        {title: "VP HR Email List", count: "134,780+", description: "Vice Presidents of Human Resources"},
        {title: "VP Product Email List", count: "145,890+", description: "Vice Presidents of Product"},
        {title: "VP Business Development", count: "178,320+", description: "Vice Presidents of Business Development"},
        {title: "VP Customer Success", count: "156,780+", description: "Vice Presidents of Customer Success"},
        {title: "VP Technology Email List", count: "189,450+", description: "Vice Presidents of Technology"},
        {title: "VP Strategy Email List", count: "123,670+", description: "Vice Presidents of Strategy"},
        {title: "VP R&D Email List", count: "145,890+", description: "Vice Presidents of Research & Development"},
        {title: "VP Digital Email List", count: "167,340+", description: "Vice Presidents of Digital"},
        {title: "VP Innovation Email List", count: "134,560+", description: "Vice Presidents of Innovation"},
        {title: "VP Analytics Email List", count: "156,780+", description: "Vice Presidents of Analytics"},
        {title: "VP Security Email List", count: "178,450+", description: "Vice Presidents of Security"},
        {title: "VP Quality Email List", count: "123,670+", description: "Vice Presidents of Quality"},
        {title: "VP Compliance Email List", count: "145,340+", description: "Vice Presidents of Compliance"},
        {title: "VP Risk Email List", count: "167,890+", description: "Vice Presidents of Risk"},
        {title: "VP Legal Email List", count: "134,560+", description: "Vice Presidents of Legal"},
        {title: "VP Communications Email List", count: "156,780+", description: "Vice Presidents of Communications"},
        {title: "VP Brand Email List", count: "123,450+", description: "Vice Presidents of Brand"},
        {title: "VP Customer Experience Email List", count: "178,670+", description: "Vice Presidents of Customer Experience"},
        {title: "VP Data Email List", count: "145,890+", description: "Vice Presidents of Data"},
        {title: "VP Information Email List", count: "167,340+", description: "Vice Presidents of Information"},
        {title: "VP Planning Email List", count: "134,780+", description: "Vice Presidents of Planning"},
        {title: "VP Performance Email List", count: "156,560+", description: "Vice Presidents of Performance"},
        {title: "VP Transformation Email List", count: "123,670+", description: "Vice Presidents of Transformation"},
        {title: "VP Supply Chain Email List", count: "178,450+", description: "Vice Presidents of Supply Chain"},
        {title: "VP Procurement Email List", count: "145,780+", description: "Vice Presidents of Procurement"},
        {title: "VP Manufacturing Email List", count: "167,890+", description: "Vice Presidents of Manufacturing"},
        {title: "VP Logistics Email List", count: "134,560+", description: "Vice Presidents of Logistics"},
        {title: "VP Distribution Email List", count: "156,340+", description: "Vice Presidents of Distribution"},
        {title: "VP Sales Operations Email List", count: "123,780+", description: "Vice Presidents of Sales Operations"},
        {title: "VP Marketing Operations Email List", count: "178,450+", description: "Vice Presidents of Marketing Operations"},
        {title: "VP Revenue Operations Email List", count: "145,670+", description: "Vice Presidents of Revenue Operations"},
        {title: "VP Business Operations Email List", count: "167,890+", description: "Vice Presidents of Business Operations"},
        {title: "VP Corporate Development Email List", count: "134,560+", description: "Vice Presidents of Corporate Development"},
        {title: "VP Strategic Partnerships Email List", count: "156,780+", description: "Vice Presidents of Strategic Partnerships"},
        {title: "VP Channel Partnerships Email List", count: "123,450+", description: "Vice Presidents of Channel Partnerships"},
        {title: "VP Global Sales Email List", count: "178,670+", description: "Vice Presidents of Global Sales"},
        {title: "VP International Email List", count: "145,890+", description: "Vice Presidents of International"},
        {title: "VP Regional Sales Email List", count: "167,340+", description: "Vice Presidents of Regional Sales"},
        {title: "VP Enterprise Sales Email List", count: "134,780+", description: "Vice Presidents of Enterprise Sales"},
        {title: "VP Commercial Sales Email List", count: "156,560+", description: "Vice Presidents of Commercial Sales"},
        {title: "VP Inside Sales Email List", count: "123,670+", description: "Vice Presidents of Inside Sales"},
        {title: "VP Field Sales Email List", count: "178,450+", description: "Vice Presidents of Field Sales"},
        {title: "VP Channel Sales Email List", count: "145,780+", description: "Vice Presidents of Channel Sales"},
        {title: "VP Partner Sales Email List", count: "167,890+", description: "Vice Presidents of Partner Sales"},
        {title: "VP Direct Sales Email List", count: "134,560+", description: "Vice Presidents of Direct Sales"},
        {title: "VP Digital Marketing Email List", count: "156,340+", description: "Vice Presidents of Digital Marketing"},
        {title: "VP Content Marketing Email List", count: "123,780+", description: "Vice Presidents of Content Marketing"},
        {title: "VP Growth Marketing Email List", count: "178,450+", description: "Vice Presidents of Growth Marketing"},
        {title: "VP Product Marketing Email List", count: "145,670+", description: "Vice Presidents of Product Marketing"},
        {title: "VP Brand Marketing Email List", count: "167,890+", description: "Vice Presidents of Brand Marketing"},
        {title: "VP Field Marketing Email List", count: "134,560+", description: "Vice Presidents of Field Marketing"},
        {title: "VP Demand Generation Email List", count: "156,780+", description: "Vice Presidents of Demand Generation"},
        {title: "VP Marketing Communications Email List", count: "123,450+", description: "Vice Presidents of Marketing Communications"},
        {title: "VP Public Relations Email List", count: "178,670+", description: "Vice Presidents of Public Relations"},
        {title: "VP Corporate Communications Email List", count: "145,890+", description: "Vice Presidents of Corporate Communications"},
        {title: "VP Internal Communications Email List", count: "167,340+", description: "Vice Presidents of Internal Communications"},
        {title: "VP Employee Communications Email List", count: "134,780+", description: "Vice Presidents of Employee Communications"},
        {title: "VP Software Engineering Email List", count: "189,560+", description: "Vice Presidents of Software Engineering"},
        {title: "VP Platform Engineering Email List", count: "167,340+", description: "Vice Presidents of Platform Engineering"},
        {title: "VP Infrastructure Email List", count: "145,780+", description: "Vice Presidents of Infrastructure"},
        {title: "VP Cloud Engineering Email List", count: "178,450+", description: "Vice Presidents of Cloud Engineering"},
        {title: "VP DevOps Email List", count: "134,670+", description: "Vice Presidents of DevOps"},
        {title: "VP Site Reliability Email List", count: "156,890+", description: "Vice Presidents of Site Reliability"},
        {title: "VP Information Security Email List", count: "189,340+", description: "Vice Presidents of Information Security"},
        {title: "VP Cybersecurity Email List", count: "167,560+", description: "Vice Presidents of Cybersecurity"},
        {title: "VP Data Security Email List", count: "145,780+", description: "Vice Presidents of Data Security"},
        {title: "VP Network Security Email List", count: "123,450+", description: "Vice Presidents of Network Security"},
        {title: "VP Application Security Email List", count: "178,670+", description: "Vice Presidents of Application Security"}
      ]
    },
    {
      title: "Director Level",
      description: "Reach directors and department heads",
      icon: Users,
      count: "6.8M+", 
      color: "bg-green-500",
      roles: [
        {title: "IT Director Email List", count: "298,450+", description: "Information Technology Directors"},
        {title: "Finance Director Email List", count: "276,890+", description: "Finance Directors"},
        {title: "Operations Director Email List", count: "324,670+", description: "Operations Directors"},
        {title: "Marketing Director Email List", count: "234,780+", description: "Marketing Directors"},
        {title: "Sales Director Email List", count: "267,890+", description: "Sales Directors"},
        {title: "HR Director Email List", count: "198,560+", description: "Human Resources Directors"},
        {title: "Product Director Email List", count: "178,340+", description: "Product Directors"},
        {title: "Engineering Director Email List", count: "189,670+", description: "Engineering Directors"},
        {title: "Quality Director Email List", count: "156,780+", description: "Quality Directors"},
        {title: "Security Director Email List", count: "167,890+", description: "Security Directors"},
        {title: "Strategy Director Email List", count: "145,670+", description: "Strategy Directors"},
        {title: "Business Development Director Email List", count: "189,450+", description: "Business Development Directors"},
        {title: "Customer Success Director Email List", count: "167,340+", description: "Customer Success Directors"},
        {title: "Digital Director Email List", count: "178,560+", description: "Digital Directors"},
        {title: "Innovation Director Email List", count: "156,780+", description: "Innovation Directors"},
        {title: "Analytics Director Email List", count: "189,670+", description: "Analytics Directors"},
        {title: "Data Director Email List", count: "167,450+", description: "Data Directors"},
        {title: "Research Director Email List", count: "145,890+", description: "Research Directors"},
        {title: "Development Director Email List", count: "178,340+", description: "Development Directors"},
        {title: "Technology Director Email List", count: "189,560+", description: "Technology Directors"},
        {title: "Communications Director Email List", count: "167,780+", description: "Communications Directors"},
        {title: "Brand Director Email List", count: "145,670+", description: "Brand Directors"},
        {title: "Creative Director Email List", count: "178,450+", description: "Creative Directors"},
        {title: "Design Director Email List", count: "156,890+", description: "Design Directors"},
        {title: "UX Director Email List", count: "134,560+", description: "User Experience Directors"},
        {title: "UI Director Email List", count: "123,450+", description: "User Interface Directors"},
        {title: "Content Director Email List", count: "167,340+", description: "Content Directors"},
        {title: "Social Media Director Email List", count: "145,780+", description: "Social Media Directors"},
        {title: "Digital Marketing Director Email List", count: "189,670+", description: "Digital Marketing Directors"},
        {title: "Performance Marketing Director Email List", count: "167,450+", description: "Performance Marketing Directors"},
        {title: "Growth Director Email List", count: "178,890+", description: "Growth Directors"},
        {title: "Revenue Director Email List", count: "156,340+", description: "Revenue Directors"},
        {title: "Partnerships Director Email List", count: "134,780+", description: "Partnerships Directors"},
        {title: "Channel Director Email List", count: "189,560+", description: "Channel Directors"},
        {title: "Alliances Director Email List", count: "167,670+", description: "Alliances Directors"},
        {title: "Program Director Email List", count: "145,890+", description: "Program Directors"},
        {title: "Project Director Email List", count: "178,450+", description: "Project Directors"},
        {title: "Portfolio Director Email List", count: "156,780+", description: "Portfolio Directors"},
        {title: "Training Director Email List", count: "134,560+", description: "Training Directors"},
        {title: "Learning Director Email List", count: "123,340+", description: "Learning Directors"},
        {title: "Talent Director Email List", count: "167,890+", description: "Talent Directors"},
        {title: "Recruiting Director Email List", count: "145,670+", description: "Recruiting Directors"},
        {title: "People Director Email List", count: "189,450+", description: "People Directors"},
        {title: "Culture Director Email List", count: "167,340+", description: "Culture Directors"},
        {title: "Diversity Director Email List", count: "178,560+", description: "Diversity Directors"},
        {title: "Inclusion Director Email List", count: "156,780+", description: "Inclusion Directors"},
        {title: "Compliance Director Email List", count: "189,670+", description: "Compliance Directors"},
        {title: "Risk Director Email List", count: "167,450+", description: "Risk Directors"},
        {title: "Audit Director Email List", count: "145,890+", description: "Audit Directors"},
        {title: "Legal Director Email List", count: "178,340+", description: "Legal Directors"},
        {title: "Privacy Director Email List", count: "156,560+", description: "Privacy Directors"},
        {title: "Regulatory Director Email List", count: "134,780+", description: "Regulatory Directors"},
        {title: "Ethics Director Email List", count: "123,450+", description: "Ethics Directors"},
        {title: "Governance Director Email List", count: "167,670+", description: "Governance Directors"},
        {title: "Supply Chain Director Email List", count: "189,890+", description: "Supply Chain Directors"},
        {title: "Procurement Director Email List", count: "167,340+", description: "Procurement Directors"},
        {title: "Logistics Director Email List", count: "178,560+", description: "Logistics Directors"},
        {title: "Distribution Director Email List", count: "156,780+", description: "Distribution Directors"},
        {title: "Manufacturing Director Email List", count: "189,450+", description: "Manufacturing Directors"},
        {title: "Production Director Email List", count: "167,670+", description: "Production Directors"},
        {title: "Plant Director Email List", count: "145,890+", description: "Plant Directors"},
        {title: "Facility Director Email List", count: "178,340+", description: "Facility Directors"},
        {title: "Maintenance Director Email List", count: "156,560+", description: "Maintenance Directors"},
        {title: "Environmental Director Email List", count: "134,780+", description: "Environmental Directors"},
        {title: "Sustainability Director Email List", count: "189,670+", description: "Sustainability Directors"},
        {title: "ESG Director Email List", count: "167,450+", description: "ESG Directors"},
        {title: "Customer Experience Director Email List", count: "178,890+", description: "Customer Experience Directors"},
        {title: "Customer Service Director Email List", count: "156,340+", description: "Customer Service Directors"},
        {title: "Support Director Email List", count: "145,780+", description: "Support Directors"},
        {title: "Technical Support Director Email List", count: "189,560+", description: "Technical Support Directors"},
        {title: "Customer Operations Director Email List", count: "167,670+", description: "Customer Operations Directors"},
        {title: "Sales Operations Director Email List", count: "178,450+", description: "Sales Operations Directors"},
        {title: "Revenue Operations Director Email List", count: "156,780+", description: "Revenue Operations Directors"},
        {title: "Business Operations Director Email List", count: "134,560+", description: "Business Operations Directors"},
        {title: "Corporate Development Director Email List", count: "189,340+", description: "Corporate Development Directors"},
        {title: "Strategic Planning Director Email List", count: "167,890+", description: "Strategic Planning Directors"},
        {title: "Market Research Director Email List", count: "145,670+", description: "Market Research Directors"},
        {title: "Business Intelligence Director Email List", count: "178,560+", description: "Business Intelligence Directors"},
        {title: "Insights Director Email List", count: "156,780+", description: "Insights Directors"}
      ]
    },
    {
      title: "Healthcare Professionals",
      description: "Medical and healthcare professionals",
      icon: Stethoscope,
      count: "3.2M+",
      color: "bg-red-500",
      roles: [
        {title: "Doctors Email List", count: "745,230+", description: "Licensed Physicians"},
        {title: "Nurses Email List", count: "892,450+", description: "Registered Nurses"},
        {title: "Dentists Email List", count: "178,920+", description: "Licensed Dentists"},
        {title: "Pharmacists Email List", count: "263,180+", description: "Licensed Pharmacists"},
        {title: "Veterinarians Email List", count: "98,670+", description: "Licensed Veterinarians"},
        {title: "Surgeons Email List", count: "156,780+", description: "Surgical Specialists"},
        {title: "Radiologists Email List", count: "89,450+", description: "Radiology Specialists"},
        {title: "Cardiologists Email List", count: "67,890+", description: "Cardiology Specialists"},
        {title: "Pediatricians Email List", count: "98,340+", description: "Pediatric Specialists"},
        {title: "Dermatologists Email List", count: "56,780+", description: "Dermatology Specialists"},
        {title: "Neurologists Email List", count: "78,450+", description: "Neurology Specialists"},
        {title: "Oncologists Email List", count: "89,670+", description: "Oncology Specialists"},
        {title: "Psychiatrists Email List", count: "134,560+", description: "Psychiatry Specialists"},
        {title: "Psychologists Email List", count: "198,340+", description: "Licensed Psychologists"},
        {title: "Therapists Email List", count: "267,890+", description: "Licensed Therapists"},
        {title: "Physical Therapists Email List", count: "189,450+", description: "Physical Therapy Specialists"},
        {title: "Occupational Therapists Email List", count: "167,340+", description: "Occupational Therapy Specialists"},
        {title: "Speech Therapists Email List", count: "123,780+", description: "Speech Therapy Specialists"},
        {title: "Respiratory Therapists Email List", count: "89,560+", description: "Respiratory Therapy Specialists"},
        {title: "Anesthesiologists Email List", count: "78,450+", description: "Anesthesiology Specialists"},
        {title: "Pathologists Email List", count: "67,890+", description: "Pathology Specialists"},
        {title: "Emergency Medicine Doctors Email List", count: "156,780+", description: "Emergency Medicine Specialists"},
        {title: "Family Medicine Doctors Email List", count: "298,450+", description: "Family Medicine Specialists"},
        {title: "Internal Medicine Doctors Email List", count: "234,670+", description: "Internal Medicine Specialists"},
        {title: "Orthopedic Surgeons Email List", count: "134,560+", description: "Orthopedic Surgery Specialists"},
        {title: "Plastic Surgeons Email List", count: "89,340+", description: "Plastic Surgery Specialists"},
        {title: "Ophthalmologists Email List", count: "78,670+", description: "Ophthalmology Specialists"},
        {title: "Optometrists Email List", count: "123,450+", description: "Optometry Specialists"},
        {title: "Audiologists Email List", count: "67,890+", description: "Audiology Specialists"},
        {title: "Podiatrists Email List", count: "89,560+", description: "Podiatry Specialists"},
        {title: "Chiropractors Email List", count: "167,340+", description: "Chiropractic Specialists"},
        {title: "Physician Assistants Email List", count: "234,780+", description: "Certified Physician Assistants"},
        {title: "Nurse Practitioners Email List", count: "298,450+", description: "Certified Nurse Practitioners"},
        {title: "Medical Assistants Email List", count: "456,780+", description: "Certified Medical Assistants"},
        {title: "Dental Hygienists Email List", count: "189,670+", description: "Licensed Dental Hygienists"},
        {title: "Dental Assistants Email List", count: "234,560+", description: "Certified Dental Assistants"},
        {title: "Medical Technologists Email List", count: "167,890+", description: "Medical Technology Specialists"},
        {title: "Lab Technicians Email List", count: "234,670+", description: "Laboratory Technicians"},
        {title: "Radiology Technicians Email List", count: "189,450+", description: "Radiology Technicians"},
        {title: "MRI Technicians Email List", count: "123,780+", description: "MRI Technology Specialists"},
        {title: "CT Technicians Email List", count: "98,560+", description: "CT Scan Technicians"},
        {title: "Ultrasound Technicians Email List", count: "167,340+", description: "Ultrasound Technicians"},
        {title: "EKG Technicians Email List", count: "134,670+", description: "EKG Technicians"},
        {title: "Pharmacy Technicians Email List", count: "298,450+", description: "Certified Pharmacy Technicians"},
        {title: "Surgical Technicians Email List", count: "189,670+", description: "Surgical Technicians"},
        {title: "Operating Room Technicians Email List", count: "156,890+", description: "OR Technicians"},
        {title: "Anesthesia Technicians Email List", count: "98,340+", description: "Anesthesia Technicians"},
        {title: "Emergency Medical Technicians Email List", count: "234,560+", description: "EMT Professionals"},
        {title: "Paramedics Email List", count: "167,780+", description: "Licensed Paramedics"},
        {title: "Hospital Administrators Email List", count: "145,670+", description: "Hospital Administration"},
        {title: "Medical Directors Email List", count: "123,450+", description: "Medical Directors"},
        {title: "Nursing Directors Email List", count: "189,340+", description: "Nursing Directors"},
        {title: "Clinical Directors Email List", count: "167,890+", description: "Clinical Directors"},
        {title: "Health Information Managers Email List", count: "134,560+", description: "Health Information Management"},
        {title: "Medical Coders Email List", count: "234,780+", description: "Medical Coding Specialists"},
        {title: "Medical Billers Email List", count: "298,450+", description: "Medical Billing Specialists"},
        {title: "Health Insurance Specialists Email List", count: "189,670+", description: "Health Insurance Professionals"},
        {title: "Medical Social Workers Email List", count: "167,340+", description: "Medical Social Workers"},
        {title: "Case Managers Email List", count: "234,560+", description: "Healthcare Case Managers"},
        {title: "Quality Assurance Managers Email List", count: "145,780+", description: "Healthcare Quality Managers"},
        {title: "Infection Control Specialists Email List", count: "89,450+", description: "Infection Control Professionals"},
        {title: "Patient Safety Officers Email List", count: "67,890+", description: "Patient Safety Specialists"},
        {title: "Clinical Research Coordinators Email List", count: "134,670+", description: "Clinical Research Professionals"},
        {title: "Biomedical Engineers Email List", count: "98,560+", description: "Biomedical Engineering Specialists"},
        {title: "Medical Equipment Technicians Email List", count: "167,340+", description: "Medical Equipment Specialists"},
        {title: "Biostatisticians Email List", count: "78,450+", description: "Biostatistics Specialists"},
        {title: "Epidemiologists Email List", count: "89,670+", description: "Epidemiology Specialists"},
        {title: "Public Health Officials Email List", count: "156,780+", description: "Public Health Professionals"},
        {title: "Health Educators Email List", count: "134,560+", description: "Health Education Specialists"},
        {title: "Nutritionists Email List", count: "189,450+", description: "Licensed Nutritionists"},
        {title: "Dietitians Email List", count: "167,890+", description: "Registered Dietitians"},
        {title: "Medical Writers Email List", count: "98,340+", description: "Medical Writing Specialists"},
        {title: "Healthcare Consultants Email List", count: "145,670+", description: "Healthcare Consulting Professionals"}
      ]
    },
    {
      title: "Professional Services",
      description: "Legal, financial, and professional service providers",
      icon: Scale,
      count: "2.9M+",
      color: "bg-amber-500",
      roles: [
        {title: "Lawyers Email List", count: "350,240+", description: "Licensed Attorneys"},
        {title: "Accountants Email List", count: "298,560+", description: "Certified Public Accountants"},
        {title: "Real Estate Agents Email List", count: "353,780+", description: "Licensed Real Estate Professionals"},
        {title: "Teachers Email List", count: "425,690+", description: "Educational Professionals"},
        {title: "Consultants Email List", count: "234,670+", description: "Business Consultants"},
        {title: "Financial Advisors Email List", count: "189,450+", description: "Financial Planning Professionals"},
        {title: "Insurance Agents Email List", count: "267,890+", description: "Insurance Professionals"},
        {title: "Brokers Email List", count: "178,340+", description: "Licensed Brokers"},
        {title: "Auditors Email List", count: "134,560+", description: "Financial Auditors"},
        {title: "Tax Professionals Email List", count: "167,230+", description: "Tax Preparation Professionals"},
        {title: "Corporate Lawyers Email List", count: "198,450+", description: "Corporate Law Specialists"},
        {title: "Criminal Defense Lawyers Email List", count: "156,780+", description: "Criminal Defense Attorneys"},
        {title: "Personal Injury Lawyers Email List", count: "234,670+", description: "Personal Injury Attorneys"},
        {title: "Family Lawyers Email List", count: "189,340+", description: "Family Law Specialists"},
        {title: "Immigration Lawyers Email List", count: "123,560+", description: "Immigration Law Specialists"},
        {title: "Employment Lawyers Email List", count: "167,890+", description: "Employment Law Specialists"},
        {title: "Real Estate Lawyers Email List", count: "145,670+", description: "Real Estate Law Specialists"},
        {title: "Intellectual Property Lawyers Email List", count: "89,450+", description: "IP Law Specialists"},
        {title: "Patent Attorneys Email List", count: "67,890+", description: "Patent Law Specialists"},
        {title: "Trademark Attorneys Email List", count: "78,340+", description: "Trademark Law Specialists"},
        {title: "Bankruptcy Lawyers Email List", count: "123,670+", description: "Bankruptcy Law Specialists"},
        {title: "Estate Planning Lawyers Email List", count: "189,450+", description: "Estate Planning Attorneys"},
        {title: "Tax Lawyers Email List", count: "134,780+", description: "Tax Law Specialists"},
        {title: "Environmental Lawyers Email List", count: "98,560+", description: "Environmental Law Specialists"},
        {title: "Healthcare Lawyers Email List", count: "156,340+", description: "Healthcare Law Specialists"},
        {title: "Securities Lawyers Email List", count: "178,670+", description: "Securities Law Specialists"},
        {title: "Mergers & Acquisitions Lawyers Email List", count: "145,890+", description: "M&A Law Specialists"},
        {title: "Litigation Lawyers Email List", count: "267,450+", description: "Litigation Specialists"},
        {title: "Contract Lawyers Email List", count: "234,780+", description: "Contract Law Specialists"},
        {title: "Compliance Lawyers Email List", count: "189,670+", description: "Compliance Law Specialists"},
        {title: "Paralegals Email List", count: "298,450+", description: "Certified Paralegals"},
        {title: "Legal Assistants Email List", count: "234,560+", description: "Legal Assistant Professionals"},
        {title: "Court Reporters Email List", count: "89,340+", description: "Court Reporting Professionals"},
        {title: "Process Servers Email List", count: "67,780+", description: "Process Service Professionals"},
        {title: "Private Investigators Email List", count: "123,450+", description: "Licensed Private Investigators"},
        {title: "Forensic Accountants Email List", count: "78,670+", description: "Forensic Accounting Specialists"},
        {title: "Financial Planners Email List", count: "189,450+", description: "Certified Financial Planners"},
        {title: "Investment Advisors Email List", count: "234,670+", description: "Investment Advisory Professionals"},
        {title: "Wealth Managers Email List", count: "167,890+", description: "Wealth Management Professionals"},
        {title: "Portfolio Managers Email List", count: "145,340+", description: "Portfolio Management Specialists"},
        {title: "Risk Managers Email List", count: "123,780+", description: "Risk Management Professionals"},
        {title: "Compliance Officers Email List", count: "189,560+", description: "Compliance Professionals"},
        {title: "Internal Auditors Email List", count: "167,340+", description: "Internal Audit Professionals"},
        {title: "External Auditors Email List", count: "145,670+", description: "External Audit Professionals"},
        {title: "Tax Preparers Email List", count: "298,450+", description: "Tax Preparation Specialists"},
        {title: "Enrolled Agents Email List", count: "89,670+", description: "IRS Enrolled Agents"},
        {title: "Bookkeepers Email List", count: "234,780+", description: "Professional Bookkeepers"},
        {title: "Controllers Email List", count: "189,340+", description: "Financial Controllers"},
        {title: "Treasurers Email List", count: "123,560+", description: "Corporate Treasurers"},
        {title: "Budget Analysts Email List", count: "167,890+", description: "Budget Analysis Professionals"},
        {title: "Financial Analysts Email List", count: "234,670+", description: "Financial Analysis Specialists"},
        {title: "Credit Analysts Email List", count: "145,340+", description: "Credit Analysis Professionals"},
        {title: "Loan Officers Email List", count: "189,780+", description: "Loan Origination Professionals"},
        {title: "Mortgage Brokers Email List", count: "167,450+", description: "Mortgage Brokerage Professionals"},
        {title: "Insurance Brokers Email List", count: "234,560+", description: "Insurance Brokerage Professionals"},
        {title: "Claims Adjusters Email List", count: "189,670+", description: "Insurance Claims Professionals"},
        {title: "Actuaries Email List", count: "78,450+", description: "Actuarial Professionals"},
        {title: "Underwriters Email List", count: "145,890+", description: "Insurance Underwriting Professionals"},
        {title: "Real Estate Brokers Email List", count: "189,340+", description: "Licensed Real Estate Brokers"},
        {title: "Real Estate Appraisers Email List", count: "123,670+", description: "Certified Real Estate Appraisers"},
        {title: "Property Managers Email List", count: "234,780+", description: "Property Management Professionals"},
        {title: "Facility Managers Email List", count: "167,450+", description: "Facility Management Professionals"},
        {title: "Asset Managers Email List", count: "145,670+", description: "Asset Management Professionals"},
        {title: "Investment Bankers Email List", count: "89,450+", description: "Investment Banking Professionals"},
        {title: "Commercial Bankers Email List", count: "189,780+", description: "Commercial Banking Professionals"},
        {title: "Retail Bankers Email List", count: "234,560+", description: "Retail Banking Professionals"},
        {title: "Credit Union Officers Email List", count: "123,340+", description: "Credit Union Professionals"},
        {title: "Mortgage Lenders Email List", count: "167,890+", description: "Mortgage Lending Professionals"},
        {title: "Private Equity Professionals Email List", count: "67,890+", description: "Private Equity Specialists"},
        {title: "Venture Capital Professionals Email List", count: "45,670+", description: "Venture Capital Specialists"},
        {title: "Hedge Fund Managers Email List", count: "34,560+", description: "Hedge Fund Professionals"},
        {title: "Mutual Fund Managers Email List", count: "56,780+", description: "Mutual Fund Professionals"},
        {title: "Stock Brokers Email List", count: "123,450+", description: "Stock Brokerage Professionals"},
        {title: "Financial Consultants Email List", count: "189,670+", description: "Financial Consulting Professionals"},
        {title: "Management Consultants Email List", count: "234,560+", description: "Management Consulting Professionals"},
        {title: "Strategy Consultants Email List", count: "145,890+", description: "Strategy Consulting Professionals"},
        {title: "IT Consultants Email List", count: "298,450+", description: "IT Consulting Professionals"},
        {title: "HR Consultants Email List", count: "189,340+", description: "HR Consulting Professionals"},
        {title: "Marketing Consultants Email List", count: "234,670+", description: "Marketing Consulting Professionals"},
        {title: "Business Coaches Email List", count: "167,780+", description: "Business Coaching Professionals"},
        {title: "Executive Coaches Email List", count: "123,450+", description: "Executive Coaching Professionals"},
        {title: "Life Coaches Email List", count: "234,560+", description: "Life Coaching Professionals"}
      ]
    },
    {
      title: "Technical Professionals",
      description: "Engineers, developers, and technical specialists",
      icon: Code,
      count: "5.4M+",
      color: "bg-indigo-500",
      roles: [
        {title: "Software Engineers Email List", count: "516,780+", description: "Software Development Professionals"},
        {title: "Engineers Email List", count: "678,450+", description: "Professional Engineers"},
        {title: "Architects Email List", count: "118,390+", description: "Licensed Architects"},
        {title: "Civil Engineers Email List", count: "158,340+", description: "Civil Engineering Professionals"},
        {title: "Electrical Engineers Email List", count: "142,560+", description: "Electrical Engineering Professionals"},
        {title: "Mechanical Engineers Email List", count: "189,670+", description: "Mechanical Engineering Professionals"},
        {title: "IT Professionals Email List", count: "892,450+", description: "Information Technology Professionals"},
        {title: "Network Engineers Email List", count: "167,890+", description: "Network Engineering Professionals"},
        {title: "Database Administrators", count: "134,560+", description: "Database Management Professionals"},
        {title: "DevOps Engineers Email List", count: "189,450+", description: "DevOps Professionals"},
        {title: "Cloud Engineers Email List", count: "234,670+", description: "Cloud Engineering Professionals"},
        {title: "Security Engineers Email List", count: "198,340+", description: "Security Engineering Professionals"},
        {title: "Data Engineers Email List", count: "267,890+", description: "Data Engineering Professionals"},
        {title: "Machine Learning Engineers Email List", count: "156,780+", description: "ML Engineering Professionals"},
        {title: "AI Engineers Email List", count: "123,450+", description: "Artificial Intelligence Engineers"},
        {title: "Data Scientists Email List", count: "189,670+", description: "Data Science Professionals"},
        {title: "Full Stack Developers Email List", count: "298,450+", description: "Full Stack Development Professionals"},
        {title: "Frontend Developers Email List", count: "234,780+", description: "Frontend Development Professionals"},
        {title: "Backend Developers Email List", count: "267,890+", description: "Backend Development Professionals"},
        {title: "Mobile Developers Email List", count: "189,340+", description: "Mobile Development Professionals"},
        {title: "iOS Developers Email List", count: "145,670+", description: "iOS Development Specialists"},
        {title: "Android Developers Email List", count: "167,890+", description: "Android Development Specialists"},
        {title: "React Developers Email List", count: "198,450+", description: "React Development Specialists"},
        {title: "Angular Developers Email List", count: "156,780+", description: "Angular Development Specialists"},
        {title: "Vue Developers Email List", count: "123,340+", description: "Vue.js Development Specialists"},
        {title: "Node.js Developers Email List", count: "189,670+", description: "Node.js Development Specialists"},
        {title: "Python Developers Email List", count: "234,560+", description: "Python Development Specialists"},
        {title: "Java Developers Email List", count: "298,450+", description: "Java Development Specialists"},
        {title: "C++ Developers Email List", count: "167,890+", description: "C++ Development Specialists"},
        {title: "C# Developers Email List", count: "189,340+", description: "C# Development Specialists"},
        {title: "PHP Developers Email List", count: "234,670+", description: "PHP Development Specialists"},
        {title: "Ruby Developers Email List", count: "123,450+", description: "Ruby Development Specialists"},
        {title: "Go Developers Email List", count: "89,560+", description: "Go Development Specialists"},
        {title: "Rust Developers Email List", count: "67,890+", description: "Rust Development Specialists"},
        {title: "Scala Developers Email List", count: "78,340+", description: "Scala Development Specialists"},
        {title: "Kotlin Developers Email List", count: "98,670+", description: "Kotlin Development Specialists"},
        {title: "Swift Developers Email List", count: "134,560+", description: "Swift Development Specialists"},
        {title: "JavaScript Developers Email List", count: "345,780+", description: "JavaScript Development Specialists"},
        {title: "TypeScript Developers Email List", count: "198,450+", description: "TypeScript Development Specialists"},
        {title: "HTML/CSS Developers Email List", count: "267,890+", description: "HTML/CSS Development Specialists"},
        {title: "UI/UX Designers Email List", count: "189,670+", description: "UI/UX Design Professionals"},
        {title: "Graphic Designers Email List", count: "234,560+", description: "Graphic Design Professionals"},
        {title: "Web Designers Email List", count: "198,340+", description: "Web Design Professionals"},
        {title: "Product Designers Email List", count: "156,780+", description: "Product Design Professionals"},
        {title: "UX Researchers Email List", count: "123,450+", description: "UX Research Professionals"},
        {title: "Systems Engineers Email List", count: "189,670+", description: "Systems Engineering Professionals"},
        {title: "Systems Administrators Email List", count: "234,780+", description: "Systems Administration Professionals"},
        {title: "Network Administrators Email List", count: "198,450+", description: "Network Administration Professionals"},
        {title: "IT Support Specialists Email List", count: "298,560+", description: "IT Support Professionals"},
        {title: "Help Desk Technicians Email List", count: "234,670+", description: "Help Desk Support Professionals"},
        {title: "Technical Support Engineers Email List", count: "189,340+", description: "Technical Support Professionals"},
        {title: "Site Reliability Engineers Email List", count: "156,780+", description: "SRE Professionals"},
        {title: "Platform Engineers Email List", count: "123,450+", description: "Platform Engineering Professionals"},
        {title: "Infrastructure Engineers Email List", count: "189,670+", description: "Infrastructure Engineering Professionals"},
        {title: "DevSecOps Engineers Email List", count: "98,560+", description: "DevSecOps Professionals"},
        {title: "Cybersecurity Analysts Email List", count: "198,450+", description: "Cybersecurity Professionals"},
        {title: "Information Security Analysts Email List", count: "234,670+", description: "Information Security Professionals"},
        {title: "Security Architects Email List", count: "123,340+", description: "Security Architecture Professionals"},
        {title: "Penetration Testers Email List", count: "89,450+", description: "Penetration Testing Professionals"},
        {title: "Ethical Hackers Email List", count: "67,890+", description: "Ethical Hacking Professionals"},
        {title: "Cloud Security Engineers Email List", count: "134,560+", description: "Cloud Security Professionals"},
        {title: "Network Security Engineers Email List", count: "156,780+", description: "Network Security Professionals"},
        {title: "Application Security Engineers Email List", count: "123,450+", description: "Application Security Professionals"},
        {title: "Cloud Architects Email List", count: "167,890+", description: "Cloud Architecture Professionals"},
        {title: "Solutions Architects Email List", count: "189,670+", description: "Solutions Architecture Professionals"},
        {title: "Enterprise Architects Email List", count: "123,340+", description: "Enterprise Architecture Professionals"},
        {title: "Technical Architects Email List", count: "145,780+", description: "Technical Architecture Professionals"},
        {title: "Software Architects Email List", count: "167,450+", description: "Software Architecture Professionals"},
        {title: "Data Architects Email List", count: "134,670+", description: "Data Architecture Professionals"},
        {title: "Database Architects Email List", count: "98,560+", description: "Database Architecture Professionals"},
        {title: "Business Analysts Email List", count: "234,780+", description: "Business Analysis Professionals"},
        {title: "Systems Analysts Email List", count: "189,450+", description: "Systems Analysis Professionals"},
        {title: "Data Analysts Email List", count: "267,890+", description: "Data Analysis Professionals"},
        {title: "Business Intelligence Analysts Email List", count: "198,340+", description: "BI Professionals"},
        {title: "Quality Assurance Engineers Email List", count: "189,670+", description: "QA Engineering Professionals"},
        {title: "Test Engineers Email List", count: "156,780+", description: "Test Engineering Professionals"},
        {title: "Automation Engineers Email List", count: "134,560+", description: "Automation Engineering Professionals"},
        {title: "Performance Engineers Email List", count: "98,450+", description: "Performance Engineering Professionals"},
        {title: "Release Engineers Email List", count: "123,340+", description: "Release Engineering Professionals"},
        {title: "Build Engineers Email List", count: "89,670+", description: "Build Engineering Professionals"},
        {title: "Technical Writers Email List", count: "145,890+", description: "Technical Writing Professionals"},
        {title: "Technical Documentation Specialists Email List", count: "123,450+", description: "Technical Documentation Professionals"},
        {title: "API Developers Email List", count: "167,890+", description: "API Development Professionals"},
        {title: "Integration Engineers Email List", count: "134,560+", description: "Integration Engineering Professionals"},
        {title: "Microservices Engineers Email List", count: "98,670+", description: "Microservices Engineering Professionals"},
        {title: "Blockchain Developers Email List", count: "67,890+", description: "Blockchain Development Professionals"},
        {title: "Cryptocurrency Developers Email List", count: "45,670+", description: "Cryptocurrency Development Professionals"},
        {title: "Game Developers Email List", count: "123,450+", description: "Game Development Professionals"},
        {title: "AR/VR Developers Email List", count: "78,560+", description: "AR/VR Development Professionals"},
        {title: "IoT Engineers Email List", count: "98,340+", description: "IoT Engineering Professionals"},
        {title: "Embedded Systems Engineers Email List", count: "134,670+", description: "Embedded Systems Professionals"},
        {title: "Firmware Engineers Email List", count: "89,450+", description: "Firmware Engineering Professionals"},
        {title: "Hardware Engineers Email List", count: "167,890+", description: "Hardware Engineering Professionals"},
        {title: "FPGA Engineers Email List", count: "56,780+", description: "FPGA Engineering Professionals"},
        {title: "ASIC Engineers Email List", count: "43,560+", description: "ASIC Engineering Professionals"},
        {title: "RF Engineers Email List", count: "78,450+", description: "RF Engineering Professionals"},
        {title: "Signal Processing Engineers Email List", count: "67,890+", description: "Signal Processing Professionals"},
        {title: "Computer Vision Engineers Email List", count: "89,560+", description: "Computer Vision Professionals"},
        {title: "NLP Engineers Email List", count: "78,340+", description: "Natural Language Processing Professionals"},
        {title: "Robotics Engineers Email List", count: "98,670+", description: "Robotics Engineering Professionals"},
        {title: "Automation Engineers Email List", count: "134,560+", description: "Industrial Automation Professionals"},
        {title: "Control Systems Engineers Email List", count: "89,450+", description: "Control Systems Professionals"},
        {title: "Process Engineers Email List", count: "167,890+", description: "Process Engineering Professionals"},
        {title: "Manufacturing Engineers Email List", count: "234,670+", description: "Manufacturing Engineering Professionals"},
        {title: "Industrial Engineers Email List", count: "189,450+", description: "Industrial Engineering Professionals"},
        {title: "Chemical Engineers Email List", count: "123,780+", description: "Chemical Engineering Professionals"},
        {title: "Biomedical Engineers Email List", count: "98,560+", description: "Biomedical Engineering Professionals"},
        {title: "Environmental Engineers Email List", count: "134,670+", description: "Environmental Engineering Professionals"},
        {title: "Aerospace Engineers Email List", count: "89,340+", description: "Aerospace Engineering Professionals"},
        {title: "Automotive Engineers Email List", count: "156,780+", description: "Automotive Engineering Professionals"},
        {title: "Marine Engineers Email List", count: "67,890+", description: "Marine Engineering Professionals"},
        {title: "Petroleum Engineers Email List", count: "78,450+", description: "Petroleum Engineering Professionals"},
        {title: "Mining Engineers Email List", count: "56,670+", description: "Mining Engineering Professionals"},
        {title: "Geological Engineers Email List", count: "67,340+", description: "Geological Engineering Professionals"},
        {title: "Structural Engineers Email List", count: "123,450+", description: "Structural Engineering Professionals"},
        {title: "Transportation Engineers Email List", count: "89,670+", description: "Transportation Engineering Professionals"},
        {title: "Water Resources Engineers Email List", count: "78,560+", description: "Water Resources Engineering Professionals"},
        {title: "Construction Engineers Email List", count: "189,340+", description: "Construction Engineering Professionals"},
        {title: "Project Engineers Email List", count: "234,780+", description: "Project Engineering Professionals"},
        {title: "Design Engineers Email List", count: "198,450+", description: "Design Engineering Professionals"},
        {title: "Research Engineers Email List", count: "156,670+", description: "Research Engineering Professionals"},
        {title: "Development Engineers Email List", count: "189,780+", description: "Development Engineering Professionals"},
        {title: "Field Engineers Email List", count: "167,890+", description: "Field Engineering Professionals"},
        {title: "Sales Engineers Email List", count: "134,560+", description: "Sales Engineering Professionals"},
        {title: "Applications Engineers Email List", count: "123,450+", description: "Applications Engineering Professionals"},
        {title: "Support Engineers Email List", count: "189,670+", description: "Support Engineering Professionals"},
        {title: "Consulting Engineers Email List", count: "145,890+", description: "Consulting Engineering Professionals"}
      ]
    }
  ];

  const targetingFeatures = [
    "Job Title Precision Targeting",
    "Seniority Level Filtering", 
    "Department-Based Segmentation",
    "Company Size Targeting",
    "Industry Cross-Referencing",
    "Decision-Making Authority Identification",
    "Budget Responsibility Mapping",
    "Technology Stack Alignment",
    "Reporting Structure Analysis",
    "Career Level Progression Tracking"
  ];

  const selectedCategoryData = professionalCategories.find(cat => cat.title === selectedCategory);
  const selectedRoleData = selectedCategoryData?.roles.find(role => role.title === selectedRole);

  return (
    <>
      <Helmet>
        <title>Role Connect - 500+ Job Titles & Role-Based Targeting | ELP Data</title>
        <meta name="description" content="Connect with decision makers through precision role-based targeting. Access 50M+ professional contacts across 500+ job titles, organized by seniority levels and decision-making authority." />
        <meta name="keywords" content="role-based targeting, job title targeting, executive targeting, decision maker lists, professional contacts, B2B targeting" />
        <link rel="canonical" href="https://www.elpdata.com/role-connect" />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Role Connect Platform
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Precision Role-Based
              <span className="text-blue-600 dark:text-blue-400"> Targeting</span>
              <span className="text-sm text-gray-500 block mt-2">(500+ Job Titles Available)</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with the right decision makers through advanced role-based targeting. Access 50M+ verified professional contacts across 500+ job titles, organized by seniority levels and decision-making authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Role Targeting
              </Button>
              <Button variant="outline" size="lg">
                View Sample Data
              </Button>
            </div>
          </div>

          {/* Interactive Role Selector */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Explore Professional Categories
            </h2>
            
            <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 shadow-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Category Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Filter className="inline h-4 w-4 mr-2" />
                    Select Professional Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder="Choose a professional category..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800">
                      {professionalCategories.map((category, index) => (
                        <SelectItem key={index} value={category.title}>
                          <div className="flex items-center gap-2">
                            <category.icon className="h-4 w-4" />
                            {category.title} ({category.count})
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Role Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Search className="inline h-4 w-4 mr-2" />
                    Select Specific Job Title
                  </label>
                  <Select 
                    value={selectedRole} 
                    onValueChange={setSelectedRole}
                    disabled={!selectedCategory}
                  >
                    <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder={selectedCategory ? "Choose a job title..." : "Select category first"} />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 max-h-80">
                      {selectedCategoryData?.roles.map((role, index) => (
                        <SelectItem key={index} value={role.title}>
                          <div className="flex items-center justify-between w-full">
                            <span>{role.title}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">{role.count}</Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Selected Role Details */}
              {selectedRoleData && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedRoleData.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedRoleData.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedRoleData.count}</div>
                      <div className="text-sm text-gray-500">Available Contacts</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Get Contact List
                    </Button>
                    <Button variant="outline">
                      View Sample Data
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional Contacts</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Job Title Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Updates</div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Categories Overview with Dropdown Interface */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Professional Categories Overview
            </h2>
            
            {/* Enhanced Dropdown Interface */}
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-2xl p-8 shadow-2xl mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {professionalCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                          <Badge variant="secondary" className="mt-1">{category.count} contacts</Badge>
                        </div>
                      </div>
                      
                      {/* Dropdown with All Titles */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Select from {category.roles.length}+ Available Titles:
                        </label>
                        <Select onValueChange={(value) => {
                          setSelectedCategory(category.title);
                          setSelectedRole(value);
                        }}>
                          <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
                            <SelectValue placeholder={`Browse all ${category.title.toLowerCase()}...`} />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-gray-800 max-h-96">
                            <ScrollArea className="h-96">
                              <div className="p-2">
                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 px-2">
                                  {category.roles.length} Professional Titles Available
                                </div>
                                {category.roles.map((role, roleIndex) => (
                                  <SelectItem key={roleIndex} value={role.title} className="cursor-pointer">
                                    <div className="flex items-center justify-between w-full min-w-0">
                                      <div className="flex-1 min-w-0 mr-2">
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                          {role.title}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                          {role.description}
                                        </div>
                                      </div>
                                      <Badge variant="outline" className="text-xs shrink-0 bg-blue-50 dark:bg-blue-900">
                                        {role.count}
                                      </Badge>
                                    </div>
                                  </SelectItem>
                                ))}
                              </div>
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Quick Preview of Top Titles */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Top Specialties Preview:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {category.roles.slice(0, 8).map((role, roleIndex) => (
                            <Badge 
                              key={roleIndex} 
                              variant="secondary" 
                              className="text-xs cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
                              onClick={() => {
                                setSelectedCategory(category.title);
                                setSelectedRole(role.title);
                              }}
                            >
                              {role.title.replace(' Email List', '')}
                            </Badge>
                          ))}
                          <Badge variant="outline" className="text-xs">
                            +{category.roles.length - 8} more available
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Traditional Card View for Reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedCategory(category.title)}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <Badge variant="secondary">{category.count} contacts</Badge>
                        </div>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-64 w-full border rounded-md bg-gray-50 dark:bg-gray-800 p-3">
                        <div className="space-y-2">
                          {category.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="flex justify-between items-center text-sm py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                 onClick={(e) => {
                                   e.stopPropagation();
                                   setSelectedCategory(category.title);
                                   setSelectedRole(role.title);
                                 }}>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{role.title}</span>
                              <Badge variant="outline" className="text-xs bg-white dark:bg-gray-800">{role.count}</Badge>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Targeting Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Advanced Targeting Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetingFeatures.map((feature, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Connect with Decision Makers?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start targeting the right professionals with Role Connect's precision targeting capabilities. Get instant access to verified contacts organized by role and authority level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}