import React from "react";

const TechnicalSkills = () => {
  return (
    <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          TECHNICAL SKILLS
        </h2>
        <section className="mb-2 break-inside-avoid">
          <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Languages:</strong> HTML5, CSS, JavaScript, Python, Java
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Cloud & DevOps:</strong> AWS, Terraform, GitLab CI/CD,
              GitHub Actions, Docker, Splunk, DataDog, Dynatrace
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Frameworks:</strong> ReactJS, NodeJS, TailwindCSS,
              GraphQL, Jest
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Databases:</strong> PostgreSQL, MySQL, DynamoDB
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Testing:</strong> Jest, Unit Testing, Test-Driven
              Development (TDD), Code Reviews
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Version Control:</strong> Git, GitHub, GitLab
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              <strong>Other:</strong> RESTful APIs, Agile(Scrum/Kanban), JSON,
              OOP, CI/CD, Communication, Debugging
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default TechnicalSkills;
