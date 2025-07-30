interface SkillCategoryProps {
  title: string
  skills: string[]
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="glass-effect rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-[#58A6FF]">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#21262D] rounded-lg p-3 text-center hover:bg-[#30363D] transition-colors">
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
