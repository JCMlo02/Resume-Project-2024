import React from "react";

const SkillTag = ({ children }) => (
  <span
    className="px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-gray-100 text-gray-700 
                   rounded-lg text-sm font-medium group-hover:text-blue-600 group-hover:border-blue-200 
                   group-hover:bg-blue-50/50 transition-all duration-300 hover:scale-105"
  >
    {children}
  </span>
);

const SkillSection = ({ title, skills }) => (
  <div
    className="group p-5 backdrop-blur-sm bg-white/80 rounded-xl shadow-sm hover:shadow-md 
                  transition-all duration-300 border border-gray-100/50"
  >
    <h3
      className="text-lg font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 
                   bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400"
    >
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillTag key={index}>{skill}</SkillTag>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  const skillSections = {
    Languages: ["HTML5", "CSS", "JavaScript", "Python", "Java"],
    "Cloud & DevOps": [
      "AWS",
      "Terraform",
      "GitLab CI/CD",
      "GitHub Actions",
      "Docker",
      "Splunk",
      "DataDog",
    ],
    Frameworks: ["ReactJS", "NodeJS", "TailwindCSS", "GraphQL", "Jest"],
    Databases: ["PostgreSQL", "MySQL", "DynamoDB"],
    "Testing & Version Control": [
      "Jest",
      "Unit Testing",
      "TDD",
      "Git",
      "GitHub",
      "GitLab",
    ],
    Other: ["RESTful APIs", "Agile", "OOP", "CI/CD"],
  };

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(skillSections).map(([title, skills]) => (
          <SkillSection key={title} title={title} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
