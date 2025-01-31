import React from 'react';
import WeatherApp from "./WeatherModal";

const ProjectCard = ({ title, links, description }) => (
  <section className="mb-8 group">
    <div className="p-6 backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100/50">
      <header>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            {links}
          </div>
        </div>
        <div className="space-y-3">
          {description.map((item, index) => (
            <div key={index} className="flex items-start group/item">
              <span className="mr-2 text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                ›
              </span>
              <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300 text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </header>
    </div>
  </section>
);

const ProjectLink = ({ href, text }) => (
  <a
    className="px-4 py-1.5 text-sm bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full 
               hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-sm hover:shadow
               flex items-center gap-1"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text === "LIVE" ? "🔗 " : "💻 "}{text}
  </a>
);

const Projects = () => {
  return (
    <section className="pb-2 pb-4 mt-4 first:mt-0">
      <section className="break-inside-avoid">
        <h2 className="mb-6 text-2xl font-black tracking-widest text-gray-800 print:font-normal text-center hover:text-blue-600 transition-colors duration-300">
          PROJECTS
        </h2>
        
        <ProjectCard
          title="TikiTask"
          links={<>
            <ProjectLink href="https://dyjko1jo9aeh9.cloudfront.net" text="LIVE" />
            <ProjectLink href="https://github.com/JCMlo02/task-manager" text="GitHub" />
          </>}
          description={[
            "Modern task management application featuring a Kanban-style interface with drag-and-drop functionality, real-time collaboration, and comprehensive analytics.",
            "Built with React, featuring Framer Motion for animations, TailwindCSS for styling, and Chart.js for analytics visualization.",
            "Implements advanced features including task templates, role-based access control, team collaboration tools, and dark/light mode support.",
            "Backend powered by AWS Lambda (Python), API Gateway, DynamoDB, and Cognito for authentication, with ECR for container management.",
            "DevOps practices include Infrastructure as Code with Terraform and automated CI/CD pipelines using GitHub Actions."
          ]}
        />

        <ProjectCard
          title="Live Resume"
          links={<>
            <ProjectLink href="https://www.y-jacobmlo.com" text="LIVE" />
            <ProjectLink href="https://github.com/JCMlo02/Resume-Project-2024" text="GitHub" />
          </>}
          description={[
            "Developed an interactive web-based resume platform featuring responsive design, printer-friendly formatting, and dynamic content loading.",
            "Implemented modern web development practices using React components, custom hooks, and Tailwind CSS for a polished UI/UX experience.",
            "Established a robust CI/CD pipeline using GitHub Actions for automated testing, building, and deployment to AWS infrastructure provisioned with Terraform."
          ]}
        />

        <section className="mb-6 break-inside-avoid hover:bg-gray-50 rounded-xl p-6 transition-all duration-300 border border-gray-100">
          <header>
            <h3 className="font-semibold text-gray-800 text-lg leading-snugish mb-3">
              Weather API
            </h3>
            <div className="mb-4 flex gap-3">
              <ProjectLink href="https://github.com/JCMlo02/weather-api" text="GitHub" />
            </div>
            <WeatherApp />
            <div className="mt-4 space-y-2">
              {[
                "Engineered a serverless weather forecasting API with TypeScript and Node.js, AWS Lambda, API Gateway featuring location-based queries, cached responses, and comprehensive error handling.",
                "Automated infrastructure deployment using Terraform and GitHub Actions."
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <span className="p-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    &rarr;
                  </span>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </header>
        </section>
      </section>
    </section>
  );
};

export default Projects;
