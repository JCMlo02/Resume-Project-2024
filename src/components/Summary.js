import React from "react";

const PreSummary = () => {
  return (
    <section className="pb-2 pb-4 mt-0 first:mt-0">
      <section className="break-inside-avoid">
        <section className="mb-2 break-inside-avoid">
          <p className="mt-2 leading-normal text-gray-700 text-md">
            As a junior-level software engineer, I combine creativity,
            curiosity, and a strong eagerness to learn with a diverse skill set.
            Passionate about innovation and problem-solving, I am excited to
            take on new challenges and contribute effectively to dynamic teams
            within the tech industry.
          </p>
        </section>
      </section>
    </section>
  );
};

const Contacts = () => {
  return (
    <section className="pb-2 pb-4 mt-0 border-gray-300 first:mt-0">
      <section className="flex-col">
        <section className="pb-2 mt-4 mb-0 first:mt-0">
          <section className="break-inside-avoid">
            <section className="pb-4 mb-2 break-inside-avoid">
              <ul className="list-inside">
                <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md flex items-center">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish w-24">
                    Github:
                  </span>
                  <a
                    href="https://github.com/JCMlo02"
                    className="group text-gray-500 transition duration-100 ease-in hover:text-gray-700"
                  >
                    www.github.com/JCMlo02
                  </a>
                </li>
                <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md flex items-center">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish w-24">
                    Linkedin:
                  </span>
                  <a
                    href="https://linkedin.com/in/ymlo"
                    className="group text-gray-500 transition duration-100 ease-in hover:text-gray-700"
                  >
                    www.linkedin.com/in/ymlo
                  </a>
                </li>
                <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md flex items-center">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish w-24">
                    Email:
                  </span>
                  <a
                    href="mailto:jacobmlo2002@gmail.com"
                    className="group text-gray-500 transition duration-100 ease-in hover:text-gray-700"
                  >
                    jacobmlo2002@gmail.com
                  </a>
                </li>
                <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md flex items-center">
                  <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish w-24">
                    Phone:
                  </span>
                  <a
                    href="tel:+17048408197"
                    className="group text-gray-500 transition duration-100 ease-in hover:text-gray-700"
                  >
                    +1(704) 840-8197
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-4 border-gray-300">
      {/* Header - SUMMARY */}
      <h2 className="col-span-1 md:col-span-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal text-center">
        SUMMARY
      </h2>

      {/* Left Column - Summary */}
      <section className="summary">
        <PreSummary />
      </section>

      {/* Right Column - Contacts */}
      <section className="contacts">
        <Contacts />
      </section>
    </section>
  );
};
export default Summary;
