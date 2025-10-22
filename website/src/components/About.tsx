export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
        <h2 className="text-3xl font-bold mb-10">about me</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[#D1DEDE]">
          <div className="md:col-span-4 space-y-6">
            <p className="text-lg">
              I'm currently pursuing a Bachelor's degree in <strong>Computer Science</strong> at the{" "}
              <a
                href="https://www.gatech.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-[#EAD2AC] hover:underline"
              >
                Georgia Institute of Technology
              </a>
              . I have a strong interest in <strong>software development</strong>, with experience building interactive and user-centered applications.
            </p>
            <p className="text-lg">
              Working closely with designers, researchers, product managers, and engineers has shown me the immense value of collaboration in 
              bringing great concepts to life, which is why I'm always looking for opportunities to team up with others on new meaningful projects. 
              I thrive in environments that encourage learning, creativity, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
