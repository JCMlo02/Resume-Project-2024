import React from "react";

const PreSummary = () => {
  return (
    <section class="pb-2 pb-4 mt-0 first:mt-0">
      <section class="break-inside-avoid">
        <section class="mb-2 break-inside-avoid">
          <p class="mt-2 leading-normal text-gray-700 text-md">
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
    <section class="pb-2 pb-4 mt-0 border-gray-300 first:mt-0">
      <section class="flex-col">
        <section class="pb-2 mt-4 mb-0 first:mt-0">
          <section class="break-inside-avoid">
            <section class="pb-4 mb-2 break-inside-avoid">
              <ul class="pr-7 list-inside">
                <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                  <a href="https://github.com/JCMlo02" class="group">
                    <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                      Github:
                    </span>
                    JCMlo02
                    <span class="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"></span>
                  </a>
                </li>
                <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                  <a href="https://linkedin.com/in/ymlo" class="group">
                    <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                      Linkedin:
                    </span>
                    https://linkedin.com/in/ymlo
                    <span class="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:"></span>
                  </a>
                </li>
                <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                  <a href="mailto:jacobmlo2002@gmail.com">
                    <span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                      Email:
                    </span>
                    Jacobmlo2002@gmail.com
                    <span class="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black"></span>
                  </a>
                </li>
                <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                  <a href="tel:+17048408197">
                    <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                      Phone:
                    </span>
                    +1(704)840-8197
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
