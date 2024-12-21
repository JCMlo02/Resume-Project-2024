import React from "react";

const WorkHistory = () => {
  return (
    <section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      <section class="break-inside-avoid">
        <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          WORK HISTORY
        </h2>
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
          <header>
            <h3 class="font-semibold text-gray-800 text-md leading-snugish">
              Software Engineer
            </h3>
            <p class="text-sm leading-normal text-gray-500">Ally Financial</p>
            <p class="text-sm leading-normal text-gray-500">
              Feb 2023 &ndash; Dec 2024
            </p>
          </header>
          <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Developed and maintained a Typescript based GraphQL middleware
              service using GraphQL Yoga and GraphQL Mesh, allowing multiple
              clients to query necessary data through a single endpoint to
              improve data accessibility and performance by 15%.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Developed clean, readable, and maintainable GraphQL API code using
              TypeScript, ensuring that all functions, variables, and types were
              clearly named and intuitively structured for easy understanding.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Extended the GraphQL schema by integrating new data sources,
              including PostgreSQL, AWS DynamoDB, internal micro service's and
              external REST APIs, streamlining data access for client
              applications.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Leveraged AWS Lambda to support a serverless architecture,
              reducing infrastructure costs by 10% and enhancing service
              availability.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Implemented Terraform for infrastructure automation, ensuring
              consistent deployments across environments and reducing deployment
              time by 25%.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Monitored integration pipelines using GitLab CI/CD, resulting in a
              5% increase in pipeline stability and a 10% reduction in build
              times.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Collaborated with cross-functional teams to understand integration
              requirements and ensure smooth data flow through the GraphQL API.
            </li>
            <li>
              <span class="p-2 text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Write and maintain unit tests using Jest to ensure code quality
              with over 90% coverage.
            </li>
          </ul>
        </section>
        <section class="mb-2 break-inside-avoid">
          <header>
            <h3 class="font-semibold text-gray-800 text-md leading-snugish">
              Coding Apprentice
            </h3>
            <p class="text-sm text-gray-500 leading-snugish">Road to Hire</p>
            <p class="text-sm text-gray-500 leading-snugish">
              Aug 2022 &ndash; Feb 2023
            </p>
          </header>
          <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
            <li>
              <span class="text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Completed a 6 month intensive program focusing on software
              engineering fundamentals.
            </li>
            <li>
              <span class="text-gray-500 transform -translate-y-px select-none">
                &rarr;{" "}
              </span>
              Successfully developed 3 full-stack applications using HTML/CSS,
              TypeScript, MySQL, and React, demonstrating proficiency in
              front-end and backend technologies.
            </li>
            <li>
              <span class="text-gray-500 transform -translate-y-px select-none">
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
