import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Experience = {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  majorDesc: string
  minorDescs: string[]
  skills: string[]
  link?: string
  logo?: string
}


const experiencesData: Experience[] = [
  {
    id: "exp1",
    title: "AI/ML Research Assistant",
    company: "Georgia Tech School of Building Construction",
    location: "Atlanta, GA",
    startDate: "Aug 2025",
    endDate: "Present",
    majorDesc: "AutoRobotics in Construction Lab - AI and VR for personalized learning in sustainable construction education",
    minorDescs: [
      "Supporting the development of a virtual reality learning environment by contributing to early design, implementation, and literature review to guide integration of AI and machine learning models.",
    ],
    skills: ["C#", "Unity", "Python", "MATLAB", "Machine Learning (ML)", "Artifical Intelligence (AI)", "Virtual Reality (VR)", "Research"],
    link: "https://vip.gatech.edu/teams/entry/1332/",
    logo: "/autorob-lab-img.png",
  },
  {
    id: "exp2",
    title: "Software Engineer Intern",
    company: "Eyefinity",
    location: "Rancho Cordova, CA (Remote)",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    majorDesc: "Reference Data Team",
    minorDescs: [
      "Developed reusable frontend components to support an integrated practice management and electronic health records (EHR) platform.", 
      "Wrote automated tests to improve code reliability and maintain application stability.", 
      "Integrated frontend features with backend APIs and dynamic UI logic to enhance the clinician experience.",
      "Contributed to modernization efforts by migrating legacy application code to a more maintainable framework."
    ],
    skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "jQuery", "Knockout.js", "C#", ".NET", "Bootstrap", "Material", "REST APIs"],
    link: "https://www.eyefinity.com",
    logo: "/vsp-logo.png", // eyefinity-logo-old.png
  },
  {
    id: "exp3",
    title: "Helen Fellow + HCI Researcher",
    company: "National Center for Women & Information Technology",
    location: "Atlanta, GA",
    startDate: "May 2025",
    endDate: "Present",
    majorDesc: "Research @ Ubiquitous Computing Health and Wellness Lab",
    minorDescs: [
      "Designing and evaluating mobile health systems to foster patient engagement, facilitate continuity of care, and mediate communication between patients and healthcare providers.",
      "Mentoring high school students by guiding them through coding activities, research exposure, and building confidence in pursuing computing careers.",
    ],
    skills: ["React Native", "Figma", "Mobile App Development", "UX Design", "Human-Computer Interaction (HCI)", "Research", "Python"],
    link: "https://sites.google.com/view/riarriaga/lab?authuser=0",
    logo: "/ncwit-logo-2.png",
  },
  {
    id: "exp4",
    title: "Software Engineer Intern",
    company: "Georgia Tech Research Institute",
    location: "Atlanta, GA",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    majorDesc: "Secure Software Systems Division",
    minorDescs: [
      "Developed and maintained a secure information-sharing application for a government sponsor, contributing to both backend and frontend improvements.",
      "Assisted with testing, debugging, and deployment to ensure system reliability.",
    ],
    skills: ["Java", "OracleSQL", "Angular", "TypeScript", "HTML", "CSS", "Spring", "Microservices", "RESTful APIs", "Jenkins", "CI/CD"],
    link: "https://www.gtri.gatech.edu/focus-areas/secure-software-systems",
    logo: "/gtri-logo.jpeg",
  },
  {
    id: "exp5",
    title: "Software Development Fellow",
    company: "FinTech Focus",
    location: "Remote",
    startDate: "Jul 2022",
    endDate: "Aug 2022",
    majorDesc: "Bank of America Cohort",
    minorDescs: [
      "FinTech Focus is an immersive program sponsored and hosted by a consortium of top-tier financial institutions (Bank of America, Goldman Sachs, JPMorgan Chase, Morgan Stanley, and Wells Fargo) to gain a foundational understanding of the FinTech sector and computer science.",
      "Built full-stack web applications using the Flask web framework, PostgreSQL, Python, HTML, and CSS.",
      "Developed and iterated upon prototypes and Minimum Viable Products (MVPs), which culminated in presentations of a final web application.",
    ],
    skills: ["Python", "Flask", "PostgreSQL", "HTML", "CSS"],
    logo: "/ftflogo.png",
  },
]


export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<string>(experiencesData[0].id)

  const currentExperience = experiencesData.find((exp) => exp.id === selectedExperience) || experiencesData[0]

  return (
    <motion.div
      id="experience"
      className="scroll-mt-12 container max-w-[1000px] mx-auto py-12 px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          {experiencesData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedExperience(experience.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-colors border",
                  selectedExperience === experience.id ? "bg-primary/10 border-primary" : "hover:bg-gray-600",
                )}
              >
                <div className="flex items-start gap-3">
                  {experience.logo && (
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-6 w-6 mt-1 rounded-sm object-contain flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="font-medium">{experience.title}</h3>
                    <p className="text-sm font-bold text-[#D1DEDE]">{experience.company}</p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-white bg-transparent shadow-none border-none h-[580px] overflow-y-auto">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{currentExperience.title}</CardTitle>
                      <CardDescription className="font-bold mt-1 text-[#D1DEDE]">
                        {currentExperience.company} • {currentExperience.location}
                      </CardDescription>
                    </div>
                    {currentExperience.link && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={currentExperience.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {currentExperience.startDate} - {currentExperience.endDate}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4 text-sm">
                      <p className="font-medium text-base">{currentExperience.majorDesc}</p>
                      <ul className="space-y-2">
                        {currentExperience.minorDescs.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 opacity-80">
                            <span className="text-[#EAD2AC] mt-[2px]">★</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentExperience.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
