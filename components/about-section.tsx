import { Code, Coffee, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, efficient solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[#8B949E] text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with 5+ years of experience building modern web applications and solving
            complex technical challenges using React, Next.js, and Node.js.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#58A6FF]">My Story as a Software Developer</h3>
              <div className="space-y-4 text-[#8B949E]">
                <p>
                  Hi, I'm <strong>Nadika Prabhath</strong> (also known as Nadika Gamage), a professional Full Stack
                  Developer based in Matara, Sri Lanka. I started my journey in software development during college,
                  where I discovered my passion for creating digital solutions that make a real impact. What began as
                  curiosity about how websites work evolved into a career dedicated to building exceptional user
                  experiences.
                </p>
                <p>
                  I specialize in full-stack web development with expertise in <strong>React</strong>,{" "}
                  <strong>Next.js</strong>, <strong>Vue</strong>, <strong>Nuxt.js</strong>, and <strong>Node.js</strong> with modern frameworks like Fastify and Hono.
                  As a software engineer, I love the entire development process - from architecting scalable systems to
                  crafting pixel-perfect user interfaces using modern JavaScript and TypeScript.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source projects, writing technical articles,
                  or exploring the latest developments in web technologies. I believe in continuous learning and sharing
                  knowledge with the developer community. My goal is to create innovative web applications that solve
                  real-world problems.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 hover:border-[#58A6FF] transition-colors">
                <div className="text-[#58A6FF] mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-[#8B949E] text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
