import WeatherApp from "./WeatherModal";

const Projects = () => {
  return (
    <section className="pb-2 pb-4 mt-4 first:mt-0">
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          PROJECTS
        </h2>
        <section className="mb-2 break-inside-avoid">
          <header>
            <h3 className="font-semibold text-gray-800 text-md leading-snugish">
              Live Resume
            </h3>
            <p className="text-sm leading-normal text-gray-500">
              <a
                className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                href="https://www.y-jacobmlo.com"
              >
                LIVE
              </a>{" "}
              |{" "}
              <a
                className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                href="https://github.com/JCMlo02/Resume-Project-2024"
              >
                Github Code
              </a>
            </p>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                Live Resume is a full-stack application that showcases my resume
                in a web format.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                The stack used includes React, Tailwind CSS, JavaScript, GitHub
                for version control, Terraform for infrastructure automation,
                GitHub Actions for CI/CD, and AWS services such as S3,
                CloudFront, and Route 53 for hosting and deployment.
              </li>
            </ul>
          </header>
        </section>
        <section className="mb-2 break-inside-avoid">
          <header>
            <h3 className="font-semibold text-gray-800 text-md leading-snugish">
              Weather API
            </h3>
            <section className="text-sm leading-normal text-gray-500">
              <WeatherApp />
              <a
                className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                href="https://github.com/JCMlo02/weather-api"
              >
                Github Code
              </a>
            </section>
            <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                Weather API is a REST API that retrieves the weather forecast
                for a given location.
              </li>
              <li>
                <span className="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                The stack I utilized comprises Node.js and TypeScript for
                development, GitHub for version control, Terraform to automate
                infrastructure provisioning, and GitHub Actions for seamless
                CI/CD workflows. Additionally, I leveraged AWS services,
                including Lambda for serverless computing, API Gateway for API
                management, S3 for storage, IAM for access control, and ECR for
                container image hosting.
              </li>
            </ul>
          </header>
        </section>
      </section>
    </section>
  );
};

export default Projects;
