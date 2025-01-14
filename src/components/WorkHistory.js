import React from "react";

const WorkHistory = () => {
  return (
    <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          WORK HISTORY
        </h2>
        <section className="mb-2 break-inside-avoid">
          <header>
            <h3 className="font-semibold text-gray-800 text-md leading-snugish">
              Software Engineer
            </h3>
            <p className="text-sm leading-normal text-gray-500">
              Ally Financial
            </p>
            <p className="text-sm leading-normal text-gray-500">
              Feb 2023 &ndash; Dec 2024
            </p>
          </header>
          <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Built and maintained a TypeScript-based GraphQL middleware
              service, integrating PostgreSQL, DynamoDB, internal microservices,
              and external REST APIs, improving data accessibility by 15%.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Utilized AWS services and Terraform to implement a serverless
              architecture and automate deployments, achieving a 10% reduction
              in infrastructure costs and a 25% decrease in deployment time.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Improved CI/CD pipelines with GitLab, boosting pipeline stability
              by 5% and cutting build times by 10%.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Wrote and maintained unit tests using Jest with over 90% coverage,
              ensuring high-quality code.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Collaborated in Agile teams using Jira and Confluence to deliver
              projects efficiently and continuously improve workflows.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Developed & maintained a middleware service to streamline the
              Genesys team’s interaction with Genesys APIs, abstracting complex
              API workflows and enabling seamless campaign setup and management.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Managed large-scale file processing using File System (FS) modules
              and read streams, efficiently handling .txt file uploads,
              converting data into .csv format, and storing in AWS S3 for
              integration with Genesys.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Automated contact list ingestion and campaign initiation using AWS
              Lambda, reducing manual processes and improving operational
              efficiency for outbound campaigns.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Collaborated with the Genesys team to optimize campaign execution
              while maintaining compliance with contact center regulations and
              best practices.
            </li>
            <li>
              <span className="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Ensured data integrity and smooth integration by coordinating
              across cross-functional teams and leveraging the Genesys API for
              campaign management.
            </li>
          </ul>
        </section>
        <section className="mb-2 break-inside-avoid">
          <header>
            <h3 className="font-semibold text-gray-800 text-md leading-snugish">
              Coding Apprentice
            </h3>
            <p className="text-sm text-gray-500 leading-snugish">
              Road to Hire
            </p>
            <p className="text-sm text-gray-500 leading-snugish">
              Aug 2022 &ndash; Feb 2023
            </p>
          </header>
          <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
            <li>
              <span className="text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Completed a 6 month intensive program focusing on software
              engineering fundamentals.
            </li>
            <li>
              <span className="text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Successfully developed 3 full-stack applications using HTML/CSS,
              TypeScript, MySQL, and React, demonstrating proficiency in
              front-end and backend technologies.
            </li>
            <li>
              <span className="text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Collaborated effectively in 2 team projects, simulating real-world
              tech environments and applying Agile methodologies for efficient
              project delivery.
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default WorkHistory;
