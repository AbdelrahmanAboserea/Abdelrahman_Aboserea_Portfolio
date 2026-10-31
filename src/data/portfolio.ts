import hanger from "@/assets/proj-hanger.jpg";
import levels from "@/assets/proj-levels.jpg";
import files from "@/assets/proj-files.jpg";
import villa from "@/assets/proj-villa.jpg";

// Edit this file to update site content. Leave URLs empty ("") to hide links.
export const profile = {
  name: "Abdelrahman Aboserea",
  initials: "AA",
  title: "Mechanical Engineer | BIM Software Developer",
  location: "Al Qalyubiyah, Egypt",
  email: "abdoaboserea@gmail.com",
  linkedin: "", // TODO: add LinkedIn URL
  github: "", // TODO: add GitHub URL
  cv: "", // TODO: add CV file URL
  photo: "", // TODO: add profile photo URL
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string[];
  tech: string[];
  status?: string;
  image: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "AA Hanger Generator",
    category: "Revit API | MEP Automation",
    description: [
      "A Revit add-in designed to automate the placement of hangers and supports for ducts, pipes, and cable trays.",
      "The tool allows users to configure hanger spacing and edge distances, select hanger types, and generate supports based on selected MEP elements.",
    ],
    tech: ["C#", ".NET", "Revit API", "WPF", "MVVM"],
    status: "Development / Portfolio Project",
    image: hanger,
  },
  {
    id: "02",
    title: "Revit Backup Cleaner",
    category: "Revit API | Productivity Tool",
    description: [
      "A C# utility designed to manage Revit backup files and help users clean unnecessary backup files, reduce storage usage, and organize project directories.",
    ],
    tech: ["C#", ".NET", "File System Operations"],
    image: files,
  },
  {
    id: "03",
    title: "Levels Creator",
    category: "Revit API | BIM Automation",
    description: [
      "A Revit add-in that automates the creation of multiple building levels based on user-defined parameters.",
      "It simplifies repetitive level creation and helps maintain consistent naming and elevation settings.",
    ],
    tech: ["C#", "Revit API", "Revit API UI"],
    image: levels,
  },
  {
    id: "04",
    title: "Columns Report",
    category: "Revit API | BIM Data Extraction",
    description: [
      "A Revit add-in that extracts column information from a Revit model and generates a structured report for engineering documentation.",
    ],
    tech: ["C#", "Revit API", "WPF", "Excel Integration"],
    image: levels,
  },
  {
    id: "05",
    title: "Slope Analysis",
    category: "Revit API | BIM Engineering",
    description: [
      "An engineering tool designed to analyze slope information within Revit models and assist engineers in reviewing model geometry and element data.",
    ],
    tech: ["C#", "Revit API"],
    image: hanger,
  },
  {
    id: "06",
    title: "Villa MEP Systems",
    category: "MEP Design | BIM Modeling",
    description: [
      "A mechanical engineering project involving HVAC, Plumbing, and Fire Fighting system design and modeling.",
      "The project demonstrates practical application of MEP engineering knowledge using Autodesk Revit and AutoCAD.",
    ],
    tech: ["Revit MEP", "AutoCAD", "HVAC", "Plumbing", "Fire Fighting"],
    image: villa,
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming & Software Development", items: ["C#", "Object-Oriented Programming", "LINQ", ".NET", "XML", "JSON", "WPF", "MVVM"] },
  { group: "BIM & AEC Development", items: ["Autodesk Revit API", "Revit MEP", "BIM Automation", "Revit Add-in Development", "MEP Modeling"] },
  { group: "Engineering Software", items: ["Autodesk Revit", "AutoCAD", "HAP"] },
  { group: "Mechanical Engineering", items: ["HVAC Systems", "Plumbing Systems", "Fire Fighting Systems", "MEP Design Fundamentals"] },
  { group: "Developer Tools", items: ["Visual Studio", "Git", "GitHub"] },
];

export type TimelineItem = { kind: "work" | "edu"; role: string; org: string; period: string; points: string[] };

export const timeline: TimelineItem[] = [
  { kind: "edu", role: "Bachelor of Mechanical Engineering", org: "Helwan University – Faculty of Engineering, El-Mataria", period: "Sep 2021 – Jul 2026", points: ["Grade: Excellent – 85.93%"] },
  { kind: "work", role: "Mechanical Design Engineer – Internship", org: "ECB – Engineering Consulting Bureau", period: "Jul 2025 – Aug 2025", points: ["Supported HVAC, Plumbing, and Fire Fighting system design using AutoCAD and Revit.", "Assisted with load calculations, layout preparation, and engineering drawing development."] },
  { kind: "work", role: "Mechanical Engineer – Internship", org: "KAITECH", period: "Aug 2024 – Oct 2024", points: ["Participated in BIM, GIS, and Smart City projects.", "Explored the integration of Building Information Modeling with Geographic Information Systems and digital twin concepts.", "Completed five digital engineering projects and developed presentations covering BIM, GIS, AI, and Smart Cities."] },
  { kind: "work", role: "Mechanical Engineer – Internship", org: "DRIC Developed Refrigeration and Air Conditioning Industry", period: "Jul 2024", points: ["Completed practical training focused on refrigeration and air conditioning systems, quality control, safety procedures, and central air conditioning equipment."] },
  { kind: "work", role: "MEP Engineer – Internship", org: "TEBA United Group", period: "Aug 2023 – Sep 2023", points: ["Gained practical exposure to MEP systems, HVAC installation, site activities, quality control, and safety procedures."] },
  { kind: "work", role: "Mechanical Engineer – Internship", org: "Orascom Construction", period: "Jul 2023 – Aug 2023", points: ["Participated in practical construction engineering training covering site operations, project management, and quality assurance."] },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
