import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import githubIcon from "../assets/github.svg"

type ProjectType = {
  id: number,
  title: string,
  description: string,
  techStack: string[],
  image: string,
  github?: string,
  link?: string, 
  videoSrc?: string
}


const projects = [
  {
    id: 1,
    title: "TravelATL",
    description:
      "A React web application that recommends tourists attractions and restaurants in Atlanta, GA based on parameters like rating & price.",
    techStack: ["React", "JavaScript", "CSS"],
    image: "/travel.png",
    link: "https://deborahola.github.io/travel-app/",
    github: "https://github.com/deborahola/travel-app",
  },
  {
    id: 2,
    title: "Brewery Dashboard",
    description:
      "A web app that lets users view, search, filter, and analyze brewery information with rich, interactive visualizations.",
    techStack: ["React", "JavaScript", "CSS", "Open Brewery DB"],
    image: "/brewery.png",
    link: "https://deborahola.github.io/web102_project5/",
    github: "https://github.com/deborahola/web102_project5",
  },
  {
    id: 3,
    title: "Rhythm Report",
    description:
      "A year-round music insights app inspired by Spotify Wrapped that allows users to analyze their listening habits and music tastes.",
    techStack: ["Java", "Firebase (NoSQL)", "Spotify API", "TensorFlow Lite", "Android Studio"],
    image: "/rhythm.png",
    github: "https://github.com/deborahola/RhythmReport",
  },
  {
    id: 4,
    title: "News Corner",
    description:
      "A full-stack application that provides easy access to the latest news across many different categories.",
    techStack: ["Python", "Flask", "HTML", "CSS", "Bootstrap"],
    image: "/newscorner.png",
    link: "http://debbieola.pythonanywhere.com/",
    github: "https://github.com/deborahola/News-Corner",
  },
  {
    id: 5,
    title: "College Scheduler",
    description:
      "A mobile app that helps college students stay organized by allowing them to manage their classes, assignments, exams, and more.",
    techStack: ["Java", "SQLite", "XML", "Android Studio"],
    image: "/collegescheduler.png",
    link: "https://appetize.io/app/xmf56i7myll72arbu2d6fqrw7y?device=pixel7&osVersion=13.0",
    github: "https://github.com/deborahola/College-Scheduler-App",
  },
  {
    id: 6,
    title: "Collect the Coin",
    description:
      "An original game made for the GameBoy Advance.",
    techStack: ["C", "GBA"],
    image: "/coin.png",
    link: "https://deborahola.github.io/collect-the-coin/",
    github: "https://github.com/deborahola/collect-the-coin",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-24 container mx-auto px-4 md:px-6 max-w-[1000px] py-6">
      <h2 className="text-3xl font-bold mb-8">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: {project: ProjectType}) {
  return (
    <Card className="overflow-hidden h-[400px] group relative">
      <div className="absolute inset-0 w-full h-full z-5">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300"></div>
      </div>

      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/link.svg" alt="Link" className="invert w-5 h-5 text-[#D1DEDE]" />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={githubIcon} alt="GitHub" className="invert w-5 h-5" />
          </a>
        )}
      </div>

      <CardContent className="relative z-5 flex flex-col justify-end h-full p-6 text-[#D1DEDE]">
        <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
        <p className="text-sm mb-4 text-center">{project.description}</p>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-white/30 hover:bg-white/40 text-[#D1DEDE]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

