import { Calendar, MapPin, Building } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "WSO2",
      location: "Bauddhaloka Mawatha, Colombo",
      period: "2022 - Present",
      description:
        "Lead development of enterprise web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      tech: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "99x",
      location: "Walukarama Rd, Colomb",
      period: "2020 - 2022",
      description:
        "Developed MVP and scaled platform from 0 to 50K users. Built responsive web applications and modern API endpoints using Next.js API routes.",
      achievements: [
        "Built entire frontend from scratch using React",
        "Designed and implemented user authentication system",
        "Integrated payment processing with Stripe API",
      ],
      tech: ["React", "Next.js", "Fastify", "MongoDB", "Stripe", "Vercel"],
    },
    {
      title: "Frontend Developer",
      company: "Freelancer",
      location: "Remote",
      period: "2019 - Present",
      description:
        "Created responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
      achievements: [
        "Delivered 200+ client projects on time and budget",
        "Improved website performance scores by average 35%",
        "Established component library for team efficiency",
      ],
      tech: ["Vue.js", "Sass", "WordPress", "Ghost", "jQuery", "Figma"],
    },
  ]

  const education = [
    {
      degree: "BSc (Hons) in Information Technology Specialising in Software Engineering",
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      location: "Malabe, Sri Lanka",
      period: "2019 - 2023",
      description: "Graduated from SLIIT with focus on Software Engineering and Web Development.",
    },
    {
      degree: "BTEC HND in Computing (Software Engineering)",
      school: "Esoft Metro Campus",
      location: "Colombo, Sri Lanka",
      period: "2018 - 2019",
      description: "Completed a Pearson BTEC Higher National Diploma (HND) in Software Engineering with focus on programming, database systems, and web development",
    }
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Scrum Master Certified",
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[#8B949E] text-lg">My professional journey and continuous learning path</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 text-[#58A6FF]">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-[#30363D]" />
                  )}

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#58A6FF] rounded-full flex items-center justify-center">
                        <Building size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="glass-effect rounded-lg p-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-[#F0F6FC]">{exp.title}</h4>
                          <p className="text-[#58A6FF] font-medium">{exp.company}</p>
                        </div>
                        <div className="text-sm text-[#8B949E] mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-[#8B949E] mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-[#F0F6FC] mb-2">Key Achievements:</h5>
                        <ul className="text-sm text-[#8B949E] space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#3FB950] mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-[#21262D] text-[#58A6FF] text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[#58A6FF]">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-[#F0F6FC] mb-2">{edu.degree}</h4>
                  <p className="text-[#58A6FF] font-medium mb-2">{edu.school}</p>
                  <div className="text-sm text-[#8B949E] mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-[#8B949E] text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#58A6FF]">Certifications</h3>
              <div className="glass-effect rounded-lg p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3FB950] rounded-full" />
                      <span className="text-[#F0F6FC] text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
