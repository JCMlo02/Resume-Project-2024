const Projects = () => {
  return (
    <section class="pb-2 pb-4 mt-4 first:mt-0">
      <section class="break-inside-avoid">
        <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          PROJECTS
        </h2>
        <section class="mb-2 break-inside-avoid">
          <header>
            <h3 class="font-semibold text-gray-800 text-md leading-snugish">
              Live Resume
            </h3>
            <p class="text-sm leading-normal text-gray-500">
              <a
                class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                href="https://www.y-jacobmlo.com"
              >
                Live
              </a>{" "}
              |{" "}
              <a
                class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
                href="https://github.com/JCMlo02/Resume-Project-2024"
              >
                Code
              </a>
            </p>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
              <li>
                <span class="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                Live Resume is a full-stack application that showcases my resume
                in a web format.
              </li>
              <li>
                <span class="text-gray-500 transform -translate-y-px select-none">
                  &rarr;{" "}
                </span>
                The stack I used includes React, Tailwind CSS, JavaScript,
                GitHub for version control, Terraform for infrastructure automation, GitHub Actions for CI/CD, and AWS services such as S3,
                CloudFront, and Route 53 for hosting and deployment.
              </li>
            </ul>
          </header>
        </section>
      </section>
    </section>
  );
};

export default Projects;
