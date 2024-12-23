import React from "react";

const Education = () => {
  return (
    <section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      <section class="break-inside-avoid">
        <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal text-center">
          EDUCATION
        </h2>
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
          <header>
            <h3 class="font-semibold text-gray-800 text-md leading-snugish">
              GED
            </h3>
            <p class="text-sm leading-normal text-gray-500">
              Rowan-Cabarrus Community College
            </p>
            <p class="text-sm leading-normal text-gray-500">
              Mar 2022 &ndash; Mar 2022
            </p>
          </header>
        </section>
        <section class="mb-2 break-inside-avoid">
          <header>
            <h3 class="font-semibold text-gray-800 text-md leading-snugish">
              Certificate in Software Engineering
            </h3>
            <p class="text-sm text-gray-500 leading-snugish">Road to Hire</p>
            <p class="text-sm text-gray-500 leading-snugish">
              Aug 2022 &ndash; Feb 2023
            </p>
          </header>
        </section>
      </section>
    </section>
  );
};

export default Education;
