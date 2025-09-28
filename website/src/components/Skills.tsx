type Skill = {
  name: string
  logo?: string
}

export default function Skills() {
  const languageSkills: Skill[] = [
    { name: "Java", logo: "/java.svg" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
    { name: "Golang", logo: "https://cdn.simpleicons.org/go" },
    { name: "Swift", logo: "https://cdn.simpleicons.org/swift" },
    { name: "C", logo: "https://cdn.simpleicons.org/c" },
    { name: "SQL", logo: "https://cdn.simpleicons.org/mysql" },
    { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
    { name: "CSS", logo: "https://cdn.simpleicons.org/css" },
  ];
  
  const frameworkSkills: Skill[] = [
    { name: "React", logo: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express" },
    { name: "Flask", logo: "https://cdn.simpleicons.org/flask" },
    { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot" },
  ];
  
  const toolSkills: Skill[] = [
    { name: "Git", logo: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
    { name: "JUnit", logo: "https://cdn.simpleicons.org/junit5" },
    { name: "Maven", logo: "https://cdn.simpleicons.org/apachemaven" },
  ];

  const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
    <div className="w-full md:w-1/3 px-4">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center p-2 rounded-md border border-border transition duration-300 hover:border-black"
          >
            {skill.logo && (
              <div className="mr-2 flex-shrink-0">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="object-contain w-6 h-6 transition duration-300 group-hover:invert"
                />
              </div>
            )}
            <span className="text-sm font-medium transition-colors duration-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-10">skills / technologies</h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <SkillCategory title="Frameworks" skills={frameworkSkills} />

          <div className="hidden md:flex mx-2 w-px bg-border" />

          <SkillCategory title="Languages" skills={languageSkills} />

          <div className="hidden md:flex mx-2 w-px bg-border" />

          <SkillCategory title="Developer Tools" skills={toolSkills} />
        </div>
      </div>
    </section>
  )
}

