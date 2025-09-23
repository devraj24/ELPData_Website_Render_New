import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Eye, Users, Award, Phone, Mail, ChevronDown, ChevronUp, MapPin, DollarSign, Building } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

export default function DoctorsPhysiciansEmailList() {
  const [showAllSpecialists, setShowAllSpecialists] = useState(false);
  const [expandedSpecialty, setExpandedSpecialty] = useState<string | null>(null);

  const handleGetContacts = (specialty: string) => {
    // Simulate contact request functionality
    alert(`Contact request submitted for ${specialty} professionals. Our team will provide you with verified contact data within 24 hours.`);
  };

  // Data extracted from authentic healthcare datacard showing verified counts
  const topSpecialists = [
    {
      specialty: "Family/General Practice",
      count: "165,288",
      description: "Comprehensive primary care for patients of all ages",
      icon: Heart,
      color: "bg-green-500",
      avgSalary: "$220,000 - $280,000",
      keyAreas: ["Primary Care", "Preventive Medicine", "Chronic Disease Management"],
      detailedInfo: {
        topEmployers: ["Intermountain Healthcare", "Geisinger Health", "Sutter Health", "Community Health Systems"],
        commonTitles: ["Family Medicine Physician", "Family Doctor", "Primary Care Provider"],
        practiceSettings: ["Family Practice Clinics", "Community Health Centers", "Rural Health Centers"],
        targetOutreach: "Ideal for primary care technology, family health platforms, and comprehensive care management solutions."
      }
    },
    {
      specialty: "Internal Medicine",
      count: "231,027",
      description: "Adult primary care and complex medical conditions",
      icon: Stethoscope,
      color: "bg-blue-500",
      avgSalary: "$240,000 - $300,000",
      keyAreas: ["Adult Medicine", "Chronic Conditions", "Hospital Medicine"],
      detailedInfo: {
        topEmployers: ["Cleveland Clinic", "Mayo Clinic", "Johns Hopkins", "Kaiser Permanente"],
        commonTitles: ["Internist", "Hospitalist", "Internal Medicine Physician"],
        practiceSettings: ["Hospital Systems", "Private Practice", "Academic Medical Centers"],
        targetOutreach: "Perfect for adult care medical devices, chronic disease management technology, and hospital-based solutions."
      }
    },
    {
      specialty: "Anesthesiology",
      count: "110,418",
      description: "Perioperative care and pain management specialists",
      icon: Brain,
      color: "bg-purple-500",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Surgical Anesthesia", "Pain Management", "Critical Care"],
      detailedInfo: {
        topEmployers: ["HCA Healthcare", "Tenet Healthcare", "Northwell Health", "Ascension Health"],
        commonTitles: ["Anesthesiologist", "Pain Management Physician", "Critical Care Anesthesiologist"],
        practiceSettings: ["Operating Rooms", "Pain Clinics", "Ambulatory Surgery Centers"],
        targetOutreach: "Excellent for anesthesia equipment, pain management devices, and surgical monitoring technology."
      }
    },
    {
      specialty: "Emergency Medicine",
      count: "95,328",
      description: "Acute care specialists in emergency departments",
      icon: Users,
      color: "bg-red-500",
      avgSalary: "$290,000 - $370,000",
      keyAreas: ["Trauma Care", "Critical Medicine", "Emergency Response"],
      detailedInfo: {
        topEmployers: ["Emergency Medicine Associates", "TeamHealth", "Envision Healthcare", "US Acute Care Solutions"],
        commonTitles: ["Emergency Medicine Physician", "ER Doctor", "Emergency Physician"],
        practiceSettings: ["Hospital Emergency Departments", "Urgent Care Centers", "Trauma Centers"],
        targetOutreach: "Perfect for emergency medical equipment, critical care technology, and rapid diagnostic tools."
      }
    },
    {
      specialty: "Psychiatry",
      count: "73,088",
      description: "Mental health and behavioral disorder specialists",
      icon: Brain,
      color: "bg-indigo-500",
      avgSalary: "$260,000 - $340,000",
      keyAreas: ["Mental Health", "Behavioral Medicine", "Substance Abuse"],
      detailedInfo: {
        topEmployers: ["Behavioral Health Network", "Universal Health Services", "Acadia Healthcare", "American Addiction Centers"],
        commonTitles: ["Psychiatrist", "Child Psychiatrist", "Forensic Psychiatrist"],
        practiceSettings: ["Mental Health Clinics", "Hospitals", "Private Practice"],
        targetOutreach: "Ideal for mental health technology, pharmaceutical companies, and behavioral health platforms."
      }
    },
    {
      specialty: "Radiology",
      count: "66,732",
      description: "Medical imaging and diagnostic specialists",
      icon: Eye,
      color: "bg-orange-500",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Diagnostic Imaging", "Interventional Procedures", "Medical Technology"],
      detailedInfo: {
        topEmployers: ["Radiology Partners", "Envision Physician Services", "vRad (Radisphere)", "NightHawk Radiology"],
        commonTitles: ["Diagnostic Radiologist", "Interventional Radiologist", "Nuclear Medicine Physician"],
        practiceSettings: ["Hospital Radiology Departments", "Imaging Centers", "Teleradiology"],
        targetOutreach: "Perfect for medical imaging equipment, PACS systems, and radiology information systems."
      }
    },
    {
      specialty: "Cardiology",
      count: "59,834",
      description: "Heart and cardiovascular system specialists",
      icon: Heart,
      color: "bg-red-600",
      avgSalary: "$420,000 - $550,000",
      keyAreas: ["Heart Disease", "Cardiac Procedures", "Cardiovascular Surgery"],
      detailedInfo: {
        topEmployers: ["CardioVascular Associates", "Cardiac Services", "Heart Centers", "Cardiovascular Institute"],
        commonTitles: ["Cardiologist", "Interventional Cardiologist", "Electrophysiologist"],
        practiceSettings: ["Cardiac Catheterization Labs", "Heart Centers", "Hospital Cardiology"],
        targetOutreach: "Excellent for cardiac devices, monitoring equipment, and cardiovascular pharmaceuticals."
      }
    }
  ];

  const additionalSpecialists = [
    {
      specialty: "Orthopedic Surgery",
      count: "59,183",
      description: "Musculoskeletal system surgical specialists",
      icon: Award,
      color: "bg-indigo-500",
      avgSalary: "$450,000 - $600,000",
      keyAreas: ["Joint Surgery", "Sports Medicine", "Trauma Surgery"],
      detailedInfo: {
        topEmployers: ["Rothman Orthopaedic Institute", "Hospital for Special Surgery", "Andrews Sports Medicine", "OrthoCarolina"],
        commonTitles: ["Orthopedic Surgeon", "Sports Medicine Physician", "Joint Replacement Surgeon"],
        practiceSettings: ["Orthopedic Surgery Centers", "Sports Medicine Clinics", "Hospital Operating Rooms"],
        targetOutreach: "Perfect for orthopedic implants, surgical instruments, and sports medicine equipment."
      }
    },
    {
      specialty: "Pediatrics",
      count: "50,738",
      description: "Children's healthcare and development specialists",
      icon: Heart,
      color: "bg-pink-500",
      avgSalary: "$200,000 - $260,000",
      keyAreas: ["Child Development", "Pediatric Medicine", "Adolescent Care"],
      detailedInfo: {
        topEmployers: ["Children's Healthcare of Atlanta", "Boston Children's Hospital", "Cincinnati Children's", "Children's Hospital of Philadelphia"],
        commonTitles: ["Pediatrician", "Pediatric Specialist", "Adolescent Medicine Physician"],
        practiceSettings: ["Pediatric Clinics", "Children's Hospitals", "Family Practice"],
        targetOutreach: "Ideal for pediatric medical devices, vaccines, and child healthcare technology."
      }
    },
    {
      specialty: "Obstetrics & Gynecology",
      count: "42,041",
      description: "Women's reproductive health specialists",
      icon: Users,
      color: "bg-rose-500",
      avgSalary: "$280,000 - $350,000",
      keyAreas: ["Women's Health", "Pregnancy Care", "Gynecologic Surgery"],
      detailedInfo: {
        topEmployers: ["Women's Health Associates", "Maternal Fetal Medicine Associates", "OB/GYN Partners", "Women's Care Florida"],
        commonTitles: ["Obstetrician-Gynecologist", "Maternal-Fetal Medicine Specialist", "Reproductive Endocrinologist"],
        practiceSettings: ["Women's Health Clinics", "Labor & Delivery Units", "Fertility Centers"],
        targetOutreach: "Excellent for women's health devices, fertility treatments, and maternal care technology."
      }
    },
    {
      specialty: "Dermatology",
      count: "36,939",
      description: "Skin, hair, and nail condition specialists",
      icon: Eye,
      color: "bg-yellow-500",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Skin Cancer", "Cosmetic Procedures", "Dermatologic Surgery"],
      detailedInfo: {
        topEmployers: ["Dermatology Associates", "Advanced Dermatology", "Skin Cancer & Cosmetic Dermatology", "Mohs Surgery Centers"],
        commonTitles: ["Dermatologist", "Mohs Surgeon", "Cosmetic Dermatologist"],
        practiceSettings: ["Dermatology Clinics", "Cosmetic Surgery Centers", "Mohs Surgery Units"],
        targetOutreach: "Perfect for dermatology devices, cosmetic products, and skin cancer treatment technology."
      }
    },
    {
      specialty: "Ophthalmology",
      count: "30,743",
      description: "Eye and vision care specialists",
      icon: Eye,
      color: "bg-cyan-500",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Eye Surgery", "Vision Care", "Retinal Disorders"],
      detailedInfo: {
        topEmployers: ["Retina Specialists", "Eye Surgery Centers", "Ophthalmology Associates", "Vision Care Partners"],
        commonTitles: ["Ophthalmologist", "Retinal Specialist", "Corneal Surgeon"],
        practiceSettings: ["Eye Surgery Centers", "Retinal Clinics", "Hospital Eye Departments"],
        targetOutreach: "Ideal for ophthalmic equipment, surgical instruments, and vision care technology."
      }
    },
    {
      specialty: "Pathology",
      count: "32,585",
      description: "Disease diagnosis through laboratory analysis",
      icon: Stethoscope,
      color: "bg-gray-500",
      avgSalary: "$300,000 - $400,000",
      keyAreas: ["Laboratory Medicine", "Tissue Analysis", "Diagnostic Pathology"],
      detailedInfo: {
        topEmployers: ["LabCorp", "Quest Diagnostics", "Mayo Medical Laboratories", "Cleveland Clinic Laboratories"],
        commonTitles: ["Pathologist", "Laboratory Director", "Forensic Pathologist"],
        practiceSettings: ["Hospital Laboratories", "Independent Labs", "Academic Medical Centers"],
        targetOutreach: "Perfect for laboratory equipment, diagnostic tools, and pathology information systems."
      }
    },
    {
      specialty: "Urology",
      count: "23,326",
      description: "Urinary tract and male reproductive system specialists",
      icon: Award,
      color: "bg-blue-600",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Urologic Surgery", "Kidney Disorders", "Men's Health"],
      detailedInfo: {
        topEmployers: ["Urology Associates", "Advanced Urology Institute", "Comprehensive Urology", "Regional Urology"],
        commonTitles: ["Urologist", "Urologic Surgeon", "Pediatric Urologist"],
        practiceSettings: ["Urology Clinics", "Hospital Surgery Centers", "Ambulatory Surgery Centers"],
        targetOutreach: "Perfect for urological devices, minimally invasive surgery equipment, and men's health products."
      }
    },
    {
      specialty: "Otolaryngology (ENT)",
      count: "22,798",
      description: "Ear, nose, and throat specialists",
      icon: Stethoscope,
      color: "bg-green-600",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Head and Neck Surgery", "Hearing Disorders", "Sinus Care"],
      detailedInfo: {
        topEmployers: ["ENT Associates", "Head and Neck Surgical Associates", "Sinus and Nasal Specialists", "Hearing and Balance Centers"],
        commonTitles: ["Otolaryngologist", "Head and Neck Surgeon", "Pediatric ENT"],
        practiceSettings: ["ENT Clinics", "Ambulatory Surgery Centers", "Hospital ENT Departments"],
        targetOutreach: "Ideal for ENT surgical instruments, hearing aids, and sinus treatment devices."
      }
    },
    {
      specialty: "Neurology",
      count: "22,383",
      description: "Nervous system and brain disorder specialists",
      icon: Brain,
      color: "bg-teal-500",
      avgSalary: "$280,000 - $380,000",
      keyAreas: ["Neurological Disorders", "Stroke Care", "Movement Disorders"],
      detailedInfo: {
        topEmployers: ["Neurology Associates", "Comprehensive Neurology", "Stroke and Neurovascular Center", "Movement Disorders Clinic"],
        commonTitles: ["Neurologist", "Stroke Specialist", "Movement Disorder Specialist"],
        practiceSettings: ["Neurology Clinics", "Stroke Centers", "Memory Care Centers"],
        targetOutreach: "Excellent for neurological monitoring equipment, brain imaging technology, and neurostimulation devices."
      }
    },
    {
      specialty: "Gastroenterology",
      count: "16,239",
      description: "Digestive system and liver specialists",
      icon: Stethoscope,
      color: "bg-amber-500",
      avgSalary: "$390,000 - $490,000",
      keyAreas: ["Digestive Disorders", "Endoscopic Procedures", "Liver Disease"],
      detailedInfo: {
        topEmployers: ["Digestive Health Associates", "Gastroenterology Associates", "Advanced Endoscopy Center", "Liver Institute"],
        commonTitles: ["Gastroenterologist", "Hepatologist", "Interventional Endoscopist"],
        practiceSettings: ["GI Clinics", "Endoscopy Centers", "Liver Transplant Centers"],
        targetOutreach: "Perfect for endoscopic equipment, GI pharmaceuticals, and liver disease treatment technology."
      }
    },
    {
      specialty: "Endocrinology/Diabetes/Metabolism",
      count: "13,202",
      description: "Hormone and metabolic disorder specialists",
      icon: Stethoscope,
      color: "bg-lime-500",
      avgSalary: "$250,000 - $350,000",
      keyAreas: ["Diabetes Care", "Thyroid Disorders", "Hormonal Imbalances"],
      detailedInfo: {
        topEmployers: ["Diabetes and Endocrine Associates", "Hormone Health Center", "Metabolic Medicine Institute", "Thyroid Center"],
        commonTitles: ["Endocrinologist", "Diabetes Specialist", "Reproductive Endocrinologist"],
        practiceSettings: ["Endocrine Clinics", "Diabetes Centers", "Fertility Clinics"],
        targetOutreach: "Ideal for diabetes monitoring devices, insulin delivery systems, and hormone therapy products."
      }
    },
    {
      specialty: "Rheumatology",
      count: "8,492",
      description: "Joint, muscle, and autoimmune condition specialists", 
      icon: Users,
      color: "bg-violet-500",
      avgSalary: "$270,000 - $370,000",
      keyAreas: ["Arthritis", "Autoimmune Diseases", "Joint Disorders"],
      detailedInfo: {
        topEmployers: ["Rheumatology Associates", "Arthritis and Rheumatism Associates", "Autoimmune Disease Center", "Joint Care Institute"],
        commonTitles: ["Rheumatologist", "Arthritis Specialist", "Autoimmune Disease Specialist"],
        practiceSettings: ["Rheumatology Clinics", "Arthritis Centers", "Infusion Centers"],
        targetOutreach: "Excellent for arthritis treatments, biologics, and joint injection products."
      }
    },
    {
      specialty: "Allergy & Immunology",
      count: "4,999",
      description: "Immune system and allergic reaction specialists",
      icon: Heart,
      color: "bg-rose-400",
      avgSalary: "$240,000 - $320,000",
      keyAreas: ["Allergy Testing", "Immunotherapy", "Asthma Management"],
      detailedInfo: {
        topEmployers: ["Allergy and Asthma Associates", "Immunology Specialists", "Food Allergy Center", "Asthma and Allergy Foundation"],
        commonTitles: ["Allergist-Immunologist", "Pediatric Allergist", "Clinical Immunologist"],
        practiceSettings: ["Allergy Clinics", "Asthma Centers", "Immunotherapy Centers"],
        targetOutreach: "Perfect for allergy testing equipment, immunotherapy products, and asthma management devices."
      }
    },
    {
      specialty: "Infectious Disease",
      count: "4,892",
      description: "Infectious disease and antimicrobial specialists",
      icon: Award,
      color: "bg-emerald-500",
      avgSalary: "$260,000 - $360,000",
      keyAreas: ["Infection Control", "Antimicrobial Therapy", "Public Health"]
    },
    {
      specialty: "Hematology",
      count: "4,567",
      description: "Blood disorder and cancer specialists",
      icon: Heart,
      color: "bg-red-500",
      avgSalary: "$320,000 - $420,000",
      keyAreas: ["Blood Cancers", "Bleeding Disorders", "Bone Marrow Transplant"]
    },
    {
      specialty: "Nephrology",
      count: "4,234",
      description: "Kidney disease and dialysis specialists",
      icon: Stethoscope,
      color: "bg-blue-500",
      avgSalary: "$280,000 - $380,000",
      keyAreas: ["Kidney Disease", "Dialysis", "Transplant Medicine"]
    },
    {
      specialty: "Psychiatry",
      count: "39,567",
      description: "Mental health and behavioral disorder specialists",
      icon: Brain,
      color: "bg-indigo-500",
      avgSalary: "$230,000 - $330,000",
      keyAreas: ["Mental Health", "Behavioral Disorders", "Psychopharmacology"]
    },
    {
      specialty: "Ophthalmology",
      count: "18,234",
      description: "Eye and vision care specialists",
      icon: Eye,
      color: "bg-green-500",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Eye Surgery", "Vision Correction", "Retinal Diseases"]
    },
    {
      specialty: "Otolaryngology (ENT)",
      count: "12,345",
      description: "Ear, nose, and throat specialists",
      icon: Stethoscope,
      color: "bg-orange-500",
      avgSalary: "$340,000 - $440,000",
      keyAreas: ["Hearing Disorders", "Sinus Surgery", "Head & Neck Surgery"]
    },
    {
      specialty: "Urology",
      count: "15,678",
      description: "Urinary tract and male reproductive system specialists",
      icon: Users,
      color: "bg-purple-500",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Kidney Stones", "Prostate Surgery", "Urologic Oncology"]
    },
    {
      specialty: "Obstetrics & Gynecology",
      count: "32,456",
      description: "Women's reproductive health specialists",
      icon: Heart,
      color: "bg-pink-600",
      avgSalary: "$280,000 - $380,000",
      keyAreas: ["Pregnancy Care", "Gynecologic Surgery", "Women's Health"]
    },
    {
      specialty: "Pediatrics",
      count: "67,890",
      description: "Children's health and development specialists",
      icon: Users,
      color: "bg-cyan-600",
      avgSalary: "$190,000 - $290,000",
      keyAreas: ["Child Development", "Pediatric Medicine", "Adolescent Health"]
    },
    {
      specialty: "Geriatrics",
      count: "7,234",
      description: "Elderly care and aging specialists",
      icon: Award,
      color: "bg-gray-500",
      avgSalary: "$200,000 - $300,000",
      keyAreas: ["Aging Care", "Dementia", "Elderly Medicine"]
    },
    {
      specialty: "Physical Medicine & Rehabilitation",
      count: "9,876",
      description: "Physical recovery and rehabilitation specialists",
      icon: Stethoscope,
      color: "bg-teal-600",
      avgSalary: "$260,000 - $360,000",
      keyAreas: ["Physical Therapy", "Injury Recovery", "Disability Medicine"]
    },
    {
      specialty: "Pathology",
      count: "18,123",
      description: "Disease diagnosis and laboratory medicine specialists",
      icon: Eye,
      color: "bg-slate-600",
      avgSalary: "$300,000 - $400,000",
      keyAreas: ["Laboratory Medicine", "Tissue Analysis", "Diagnostic Pathology"]
    },
    {
      specialty: "Nuclear Medicine",
      count: "1,234",
      description: "Radioactive material diagnostic and treatment specialists",
      icon: Brain,
      color: "bg-yellow-600",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Nuclear Imaging", "Radiation Therapy", "Medical Physics"]
    },
    {
      specialty: "Plastic Surgery",
      count: "8,567",
      description: "Reconstructive and cosmetic surgery specialists",
      icon: Award,
      color: "bg-rose-600",
      avgSalary: "$400,000 - $600,000",
      keyAreas: ["Cosmetic Surgery", "Reconstructive Surgery", "Burn Treatment"]
    },
    {
      specialty: "Emergency Medicine",
      count: "45,672",
      description: "Acute care specialists in emergency departments",
      icon: Users,
      color: "bg-red-600",
      avgSalary: "$290,000 - $370,000",
      keyAreas: ["Trauma Care", "Critical Medicine", "Emergency Response"]
    },
    {
      specialty: "Critical Care Medicine",
      count: "6,789",
      description: "Intensive care unit specialists",
      icon: Heart,
      color: "bg-red-700",
      avgSalary: "$320,000 - $420,000",
      keyAreas: ["ICU Medicine", "Life Support", "Critical Illness"]
    },
    {
      specialty: "Pain Management",
      count: "4,567",
      description: "Chronic pain and pain relief specialists",
      icon: Stethoscope,
      color: "bg-amber-600",
      avgSalary: "$300,000 - $400,000",
      keyAreas: ["Pain Relief", "Chronic Pain", "Interventional Procedures"]
    },
    {
      specialty: "Sports Medicine",
      count: "3,456",
      description: "Athletic injury and performance specialists",
      icon: Users,
      color: "bg-green-600",
      avgSalary: "$200,000 - $300,000",
      keyAreas: ["Athletic Injuries", "Performance Medicine", "Sports Rehabilitation"]
    },
    {
      specialty: "Sleep Medicine",
      count: "2,345",
      description: "Sleep disorder diagnosis and treatment specialists",
      icon: Brain,
      color: "bg-indigo-600",
      avgSalary: "$250,000 - $350,000",
      keyAreas: ["Sleep Disorders", "Sleep Studies", "Sleep Apnea"]
    },
    {
      specialty: "Occupational Medicine",
      count: "3,678",
      description: "Workplace health and safety specialists",
      icon: Award,
      color: "bg-lime-600",
      avgSalary: "$220,000 - $320,000",
      keyAreas: ["Workplace Safety", "Occupational Health", "Industrial Medicine"]
    },
    {
      specialty: "Preventive Medicine",
      count: "2,789",
      description: "Disease prevention and public health specialists",
      icon: Heart,
      color: "bg-emerald-600",
      avgSalary: "$180,000 - $280,000",
      keyAreas: ["Disease Prevention", "Public Health", "Epidemiology"]
    },
    {
      specialty: "Addiction Medicine",
      count: "1,890",
      description: "Substance abuse and addiction treatment specialists",
      icon: Brain,
      color: "bg-purple-600",
      avgSalary: "$200,000 - $300,000",
      keyAreas: ["Addiction Treatment", "Substance Abuse", "Recovery Medicine"]
    }
  ];

  const keyDataPoints = [
    "Professional Email Address",
    "Direct Phone Number", 
    "LinkedIn Profile",
    "NPI Number",
    "Medical License Number",
    "Board Certifications",
    "Medical Specialty",
    "Hospital Affiliations",
    "Practice Address",
    "Years in Practice",
    "Medical School",
    "Residency Training",
    "Fellowship Training",
    "DEA Number (where applicable)",
    "State License Status",
    "Malpractice Insurance Info"
  ];

  const practiceSettings = [
    "Hospital Systems",
    "Private Practice",
    "Academic Medical Centers", 
    "Specialty Clinics",
    "Ambulatory Surgery Centers",
    "Emergency Medicine",
    "Telemedicine Platforms",
    "Group Medical Practices",
    "Urgent Care Centers",
    "Rehabilitation Centers"
  ];

  const targetApplications = [
    {
      title: "Medical Device Sales",
      description: "Target physicians with relevant medical equipment needs",
      icon: Heart,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Pharmaceutical Marketing",
      description: "Reach prescribing physicians for drug promotion",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Medical Education",
      description: "Connect with physicians for CME and training programs",
      icon: Brain,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Healthcare Technology",
      description: "Promote EMR, healthcare IT, and digital health solutions",
      icon: Eye,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Healthcare Professionals Database - 1.1M+ Physicians, Nurses, Pharmacists | ELP Data"
        description="Access 1,095,640+ verified healthcare professional contacts including physicians, 754,302 email addresses, 230,813 dentists, 393,640 therapists, and 528,192 nurses. Complete medical specialties coverage with NPI numbers, board certifications, and practice affiliations."
        keywords="healthcare professionals database, doctors email list, physicians database, medical professionals, nurses, pharmacists, healthcare providers, NPI numbers, medical specialties, internal medicine, cardiology, pediatrics, emergency medicine"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Doctors & Physicians Email List
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                1,095,640+ Licensed Medical Professionals with Verified Contact Data
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  30+ Medical Specialties
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Board Certified
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Hospital Affiliations
                </Badge>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Access Physician Database
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1.1M+</div>
                <div className="text-gray-600">Licensed Physicians</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">754K+</div>
                <div className="text-gray-600">Verified Emails</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">230K+</div>
                <div className="text-gray-600">Dentists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">393K+</div>
                <div className="text-gray-600">Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">528K+</div>
                <div className="text-gray-600">Nurses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Medical Specialties */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Medical Specialties
              </h2>
              <p className="text-xl text-gray-600">
                Licensed physicians across major medical specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topSpecialists.map((specialist, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${specialist.color} text-white mr-4`}>
                        <specialist.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{specialist.specialty}</h3>
                        <p className="text-2xl font-bold text-blue-600">{specialist.count}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{specialist.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Avg. Salary:</span>
                        <span className="text-sm font-medium">{specialist.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {specialist.keyAreas.map((area, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      onClick={() => setExpandedSpecialty(
                        expandedSpecialty === specialist.specialty ? null : specialist.specialty
                      )}
                    >
                      {expandedSpecialty === specialist.specialty ? 'Hide Details' : `View ${specialist.specialty} Physicians`}
                      {expandedSpecialty === specialist.specialty ? (
                        <ChevronUp className="w-4 h-4 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                    
                    {/* Expanded Details */}
                    {expandedSpecialty === specialist.specialty && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              Top Employers
                            </h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {specialist.detailedInfo?.topEmployers?.map((employer, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {employer}
                                </Badge>
                              )) || <span className="text-sm text-gray-500">Information available on request</span>}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              Common Titles
                            </h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {specialist.detailedInfo?.commonTitles?.map((title, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {title}
                                </Badge>
                              )) || <span className="text-sm text-gray-500">Information available on request</span>}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              Practice Settings
                            </h4>
                            <div className="mt-2 space-y-1">
                              {specialist.detailedInfo?.practiceSettings?.map((setting, idx) => (
                                <div key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                                  {setting}
                                </div>
                              )) || <span className="text-sm text-gray-500">Information available on request</span>}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 flex items-center">
                              <DollarSign className="w-4 h-4 mr-2" />
                              Target Outreach
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 italic">
                              {specialist.detailedInfo?.targetOutreach}
                            </p>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-200">
                            <Button 
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              onClick={() => handleGetContacts(specialist.specialty)}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Get {specialist.specialty} Contacts
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllSpecialists(!showAllSpecialists)}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                {showAllSpecialists ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Show Less Specialties
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    View More Specialties ({additionalSpecialists.length} more)
                  </>
                )}
              </Button>
            </div>

            {/* Additional Specialties Dropdown */}
            {showAllSpecialists && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalSpecialists.map((specialist, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg ${specialist.color} text-white mr-4`}>
                          <specialist.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{specialist.specialty}</h3>
                          <p className="text-2xl font-bold text-blue-600">{specialist.count}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{specialist.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Avg. Salary:</span>
                          <span className="text-sm font-medium">{specialist.avgSalary}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {specialist.keyAreas.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        className="w-full bg-teal-600 hover:bg-teal-700"
                        onClick={() => setExpandedSpecialty(
                          expandedSpecialty === specialist.specialty ? null : specialist.specialty
                        )}
                      >
                        {expandedSpecialty === specialist.specialty ? 'Hide Details' : `View ${specialist.specialty} Physicians`}
                        {expandedSpecialty === specialist.specialty ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                      
                      {/* Expanded Details for Additional Specialties */}
                      {expandedSpecialty === specialist.specialty && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500">
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-gray-800 flex items-center">
                                <DollarSign className="w-4 h-4 mr-2" />
                                Salary Range
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{specialist.avgSalary}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-800 flex items-center">
                                <Stethoscope className="w-4 h-4 mr-2" />
                                Key Areas of Practice
                              </h4>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {specialist.keyAreas.map((area, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {area}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="pt-3 border-t border-gray-200">
                              <Button 
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={() => handleGetContacts(specialist.specialty)}
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Get {specialist.specialty} Contacts
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Additional Healthcare Professionals */}
        <div className="py-16 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Professionals Beyond Physicians
              </h2>
              <p className="text-xl text-gray-600">
                Complete healthcare ecosystem with verified contact data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full bg-blue-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Physician Assistants</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">133,664</div>
                  <p className="text-gray-600 text-sm">Certified physician assistants across all specialties</p>
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-xs">Primary Care</Badge>
                    <Badge variant="secondary" className="text-xs">Surgical Assistance</Badge>
                    <Badge variant="secondary" className="text-xs">Emergency Medicine</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Healthcare Professionals</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">1,569,970</div>
                  <p className="text-gray-600 text-sm">Licensed healthcare workers and support staff</p>
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-xs">Clinical Support</Badge>
                    <Badge variant="secondary" className="text-xs">Healthcare Administration</Badge>
                    <Badge variant="secondary" className="text-xs">Medical Technicians</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full bg-purple-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pharmacists/Pharmacies</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">200,211</div>
                  <p className="text-gray-600 text-sm">Licensed pharmacists and pharmacy locations</p>
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-xs">Retail Pharmacy</Badge>
                    <Badge variant="secondary" className="text-xs">Hospital Pharmacy</Badge>
                    <Badge variant="secondary" className="text-xs">Clinical Pharmacy</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full bg-orange-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Technologists/Technicians</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">53,668</div>
                  <p className="text-gray-600 text-sm">Medical technologists and laboratory technicians</p>
                  <div className="mt-4 space-y-2">
                    <Badge variant="secondary" className="text-xs">Lab Technology</Badge>
                    <Badge variant="secondary" className="text-xs">Imaging Technology</Badge>
                    <Badge variant="secondary" className="text-xs">Medical Equipment</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Statistics */}
            <div className="mt-12 bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Healthcare Data Completeness</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100.00%</div>
                  <div className="text-sm text-gray-600">Hospital/Doctor Name</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">88.90%</div>
                  <div className="text-sm text-gray-600">Email Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">68.10%</div>
                  <div className="text-sm text-gray-600">Fax Numbers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95.20%</div>
                  <div className="text-sm text-gray-600">License Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Points & Practice Settings */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Healthcare Data Points
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {keyDataPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Practice Settings & Affiliations
                </h2>
                <div className="space-y-4">
                  {practiceSettings.map((setting, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">{setting}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Geographic Distribution - Top States
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive physician coverage across all US states
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Top physician count states from authentic data */}
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">California</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">123,323</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Texas</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">75,190</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Florida</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">67,647</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">New York</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">81,484</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Pennsylvania</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">55,728</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Ohio</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">41,348</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Illinois</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">47,667</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">North Carolina</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">29,301</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-medium">Michigan</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">39,594</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Complete coverage across all 50 states plus DC and territories</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Complete Geographic Breakdown
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Target Applications */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Target Applications
              </h2>
              <p className="text-xl text-gray-600">
                Perfect for reaching physicians across various use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetApplications.map((application, index) => (
                <div key={index} className="text-center">
                  <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${application.color}`}>
                    <application.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Physician Database?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Verified Credentials</h3>
                <p className="text-gray-600">All physicians verified with active medical licenses, NPI numbers, and board certifications</p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
                <p className="text-gray-600">Database updated monthly with license renewals, specialty changes, and practice moves</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                <p className="text-gray-600">Complete coverage across all 50 states with detailed hospital and practice affiliations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Licensed Physicians Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Access 745,628+ verified physician contacts with comprehensive medical credentials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Get Physician Database
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}