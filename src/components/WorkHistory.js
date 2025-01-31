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
        "Built and maintained a TypeScript-based GraphQL middleware service, integrating PostgreSQL, DynamoDB, internal microservices, and external REST APIs, improving data accessibility by 15%.",
        "Utilized AWS services and Terraform to implement a serverless architecture and automate deployments, achieving a 10% reduction in infrastructure costs and a 25% decrease in deployment time.",
        "Improved CI/CD pipelines with GitLab, boosting pipeline stability by 5% and cutting build times by 10%.",
        "Wrote and maintained unit tests using Jest with over 90% coverage, ensuring high-quality code.",
        "Collaborated in Agile teams using Jira and Confluence to deliver projects efficiently and continuously improve workflows.",
        "Developed & maintained a middleware service to streamline the Genesys team’s interaction with Genesys APIs, abstracting complex API workflows and enabling seamless campaign setup and management.",
        "Managed large-scale file processing using File System (FS) modules and read streams, efficiently handling .txt file uploads, converting data into .csv format, and storing in AWS S3 for integration with Genesys.",
        "Automated contact list ingestion and campaign initiation using AWS Lambda, reducing manual processes and improving operational efficiency for outbound campaigns.",
        "Collaborated with the Genesys team to optimize campaign execution while maintaining compliance with contact center regulations and best practices.",
        "Ensured data integrity and smooth integration by coordinating across cross-functional teams and leveraging the Genesys API for campaign management."
      ]
    },
    {
      role: "Coding Apprentice",
      company: "Road to Hire",
      period: "Aug 2022 – Feb 2023",
      achievements: [
        "Completed a 6 month intensive program focusing on software engineering fundamentals.",
        "Successfully developed 3 full-stack applications using HTML/CSS, TypeScript, MySQL, and React, demonstrating proficiency in front-end and backend technologies.",
        "Collaborated effectively in 2 team projects, simulating real-world tech environments and applying Agile methodologies for efficient project delivery."
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
