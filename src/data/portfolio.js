import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code2, Database, Server, Globe, Wrench, Brain,
  Trophy, Target, Award, GraduationCap, BookOpen, Calendar,
  BadgeCheck, Cpu, Layers, MonitorSmartphone, Stethoscope, Leaf, Building2, HeartPulse
} from 'lucide-react';

export const personalInfo = {
  name: 'Aditya Avinash Wakalkar',
  firstName: 'Aditya',
  roles: ['Full Stack Developer', 'AI Enthusiast', 'Software Engineer'],
  description: 'Building intelligent web applications powered by AI, modern technologies and scalable backend systems.',
  summary: 'Full Stack Developer and AI enthusiast with hands-on experience in building scalable web applications using React.js, Node.js, and Supabase. Skilled in programming, problem-solving, and modern technologies. Passionate about solving real-world problems and eager to contribute to software and IT roles while continuously learning and growing.',
  email: 'wakalkaraditya@gmail.com',
  phone: '+91 7588662926',
  location: 'Pune, Maharashtra',
  resumeUrl: '/resume.pdf',
  degree: 'BE Electronics & Telecommunication Engineering',
  cgpa: '7.45',
  college: 'D.Y. Patil College of Engineering, Akurdi',
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Aditya13004', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/aditya-wakalkar', icon: 'linkedin' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/wakalkaraditya', icon: 'hackerrank' },
  { name: 'Email', url: 'mailto:wakalkaraditya@gmail.com', icon: 'mail' },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Major Projects', value: 4, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '' },
  { label: 'Achievements', value: 3, suffix: '' },
];

export const skillCategories = [
  {
    title: 'Languages',
    icon: 'Code2',
    color: '#2563EB',
    skills: ['Java', 'C++', 'Python'],
  },
  {
    title: 'Frontend',
    icon: 'MonitorSmartphone',
    color: '#06B6D4',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    color: '#8B5CF6',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: 'Database',
    color: '#22C55E',
    skills: ['MySQL', 'Supabase'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    color: '#F59E0B',
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman', 'Google Colab', 'Android Studio'],
  },
  {
    title: 'Concepts',
    icon: 'Brain',
    color: '#EC4899',
    skills: ['DSA', 'OOP', 'DBMS', 'SDLC', 'AI/ML Fundamentals'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'AI Medical E-Commerce Platform',
    subtitle: 'Full-Stack Medical E-Commerce',
    description: 'A full-stack medical e-commerce platform with 20+ frontend components, AI-powered chatbot, OCR prescription analysis, and drug interaction alerts.',
    image: '/projects/medical.png',
    features: ['AI Chatbot', 'OCR', 'Medicine Recommendation', 'Supabase Auth', 'Real-time Search', 'Drug Interaction Alerts'],
    tech: ['React', 'Node.js', 'Supabase', 'Groq API', 'Tesseract'],
    liveUrl: 'https://aditya-medical-website.vercel.app/',
    githubUrl: 'https://github.com/Aditya13004/Aditya-Medical-Website',
    date: 'Aug 2025',
    color: '#2563EB',
    icon: 'Stethoscope',
  },
  {
    id: 2,
    title: 'KrishiSetu AI',
    subtitle: 'AgriTech Platform',
    description: 'AI-powered full-stack platform for crop price prediction, weather analysis, real-time marketplace with authentication and chat system.',
    image: '/projects/krishisetu.png',
    features: ['Crop Price Prediction', 'Weather Analysis', 'Marketplace', 'Gemini AI', 'Authentication', 'Chat System'],
    tech: ['Next.js', 'Supabase', 'Gemini AI'],
    liveUrl: 'https://krishi-setu-ai.vercel.app/',
    githubUrl: 'https://github.com/Aditya13004/krishi-setu-ai',
    date: 'Feb 2026',
    color: '#22C55E',
    icon: 'Leaf',
  },
  {
    id: 3,
    title: 'Onboard AI',
    subtitle: 'Agentic Banking System',
    description: 'AI-powered banking system with automated KYC verification, risk scoring, secure admin dashboard and role-based access control.',
    image: '/projects/onboard.png',
    features: ['AI KYC', 'Risk Scoring', 'Admin Dashboard', 'Role Based Access'],
    tech: ['React', 'Supabase'],
    liveUrl: 'https://ai-banking-main4.vercel.app/',
    githubUrl: 'https://github.com/Aditya13004/ai_banking_main',
    date: 'Mar 2026',
    color: '#8B5CF6',
    icon: 'Building2',
  },
  {
    id: 4,
    title: 'AI-Powered Health Monitoring System',
    subtitle: 'IoT + AI Health Platform',
    description: 'Real-time full-stack health platform monitoring patient vitals from IoT hardware (ESP32), with AI-powered health assistant and medical report summarization.',
    image: '/projects/health.png',
    features: ['ESP32 IoT', 'Temperature & SpO2', 'Dashboard', 'OCR', 'AI Assistant', 'Nearby Hospitals', 'Appointments', 'Multi-language'],
    tech: ['React', 'Express', 'Supabase', 'Groq API'],
    liveUrl: 'https://ai-powered-health-monitoring-system-iota.vercel.app/',
    githubUrl: 'https://github.com/Aditya13004/AI-Powered-Health-Monitoring-System',
    date: 'Jan — Jun 2026',
    color: '#06B6D4',
    icon: 'HeartPulse',
  },
];

export const achievements = [
  {
    id: 1,
    emoji: '🏆',
    title: 'Gold Badge in Java',
    subtitle: 'HackerRank',
    description: '288+ points in Java on HackerRank',
    color: '#F59E0B',
  },
  {
    id: 2,
    emoji: '🥈',
    title: 'Finalist',
    subtitle: 'GHR 2.0 Hackathon',
    description: 'Reached finals in GHR 2.0 Hackathon',
    color: '#8B5CF6',
  },
  {
    id: 3,
    emoji: '🎯',
    title: 'Qualified JEE Advanced 2022',
    subtitle: 'National Level Exam',
    description: 'Qualified for JEE Advanced 2022',
    color: '#2563EB',
  },
];

export const education = [
  {
    id: 1,
    degree: 'B.E. Electronics & Telecommunication Engineering',
    institution: 'D.Y Patil College of Engineering, Pune, Maharashtra',
    year: '2022 — 2026',
    score: 'CGPA: 7.45/10',
    icon: 'GraduationCap',
  },
  {
    id: 2,
    degree: 'XII — Higher Secondary',
    institution: 'Vivekanand Pratishthan Jr. College, Jalgaon, Maharashtra',
    year: '2022',
    score: 'Percentage: 74.67%',
    icon: 'BookOpen',
  },
  {
    id: 3,
    degree: 'X — Secondary School',
    institution: "St. Joseph's Convent Sr. Sec. School, Jalgaon, Maharashtra",
    year: '2020',
    score: 'Percentage: 78.40%',
    icon: 'BookOpen',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Java 17 Masterclass',
    provider: 'Udemy',
    date: 'July 2024',
    url: 'https://www.udemy.com/certificate/UC-561469ad-d834-43c8-9615-3b75c78f0e25/',
    color: '#F59E0B',
  },
  {
    id: 2,
    title: 'Full Stack Development',
    provider: 'Simplilearn',
    date: 'Oct 2025',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTA4MDU0MV85NDQ3NTg4MTc1OTMyOTE3NjUyOC5wbmciLCJ1c2VybmFtZSI6IkFkaXR5YSBXYWthbGthciJ9',
    color: '#2563EB',
  },
  {
    id: 3,
    title: 'YUVA AI For All',
    provider: 'IndiaAI',
    date: 'May 2026',
    url: 'https://drive.google.com/file/d/1_HAH-lZiplrgJRWrYrNT_dxiGoRd5A5k/view',
    color: '#22C55E',
  },
];

export const githubUsername = 'Aditya13004';
