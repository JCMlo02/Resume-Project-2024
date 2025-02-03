import React from "react";

const WorkItem = ({ role, company, period, achievements }) => (
  <div className="group p-6 backdrop-blur-sm bg-white/80 rounded-xl shadow-sm hover:shadow-md 
                  transition-all duration-300 border border-gray-100/50 mb-4 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 
                       bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400 
                       transition-all duration-300">
          {role}
        </h3>
        <p className="text-gray-600 font-medium mt-1">{company}</p>
      </div>
      <span className="text-sm text-gray-500 mt-1 sm:mt-0">{period}</span>
    </div>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start group/item">
          <span className="mr-2 text-blue-500 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
            ›
          </span>
          <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300 text-sm leading-relaxed">
            {achievement}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const WorkHistory = () => {
  const workHistoryData = [
    {
      role: "Software Engineer",
      company: "Ally Financial",
      period: "Feb 2023 – Dec 2024",
      achievements: [
        "Developed and maintained a TypeScript-based GraphQL service,  integrating PostgreSQL, DynamoDB, internal microservices, and external REST APIs, improving data accessibility by 15% for enterprise-level financial systems.",
        "Designed and implemented a serverless architecture using AWS services, reducing infrastructure costs by 10% and deployment time by 25% for a high-traffic financial application.",
        "Enhanced GitLab CI/CD pipelines, improving pipeline stability by 5% and reducing build times by 10%.",
        "Wrote and maintained unit tests using Jest with over 90% coverage, ensuring high-quality code for mission-critical systems.",
        "Streamlined Genesys API workflows,  enabling automated contact list ingestion and campaign initiation using AWS Lambda and JavaScript, improving operational efficiency for enterprise-scale customer engagement systems.",
        "Collaborated with cross-functional teams to implement RESTful APIs, improving system integration and data exchange capabilities.",
        "Participated in Agile ceremonies, contributing to sprint planning, daily stand-ups, and retrospectives, fostering a collaborative and efficient development environment.",
        "Contributed to the migration of legacy systems to modern cloud-based solutions, enhancing system performance and scalability.",
      ]
    },
    {
      role: "Coding Apprentice",
      company: "Road to Hire",
      period: "Aug 2022 – Feb 2023",
      achievements: [
        "Completed a 6 month intensive program focusing on software engineering fundamentals.",
        "Successfully developed 3 full-stack applications using HTML/CSS, TypeScript, MySQL, and React, demonstrating proficiency in front-end and backend technologies.",
        "Collaborated effectively in 2 team projects, simulating real-world tech environments and applying Agile methodologies for efficient project delivery.",
        "Gained hands-on experience with Git for version control, ensuring code integrity and facilitating collaborative development.",
        "Engaged in continuous learning and skill development, staying updated with industry trends and best practices in software development.",
        "Demonstrated strong problem-solving skills and adaptability in a fast-paced learning environment."
      ]
    }
  ];

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Work Experience
      </h2>
      {workHistoryData.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </section>
  );
};

export default WorkHistory;
