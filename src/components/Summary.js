import React from "react";

const PreSummary = () => {
  return (
    <section className="pb-2 pb-4 mt-0 first:mt-0">
      <section className="break-inside-avoid">
        <section className="mb-2 break-inside-avoid">
          <p className="mt-2 leading-normal text-gray-700 text-md">
            As a junior-level software engineer, I combine creativity,
            curiosity, and a strong eagerness to learn with a diverse skill set.
            Passionate about innovation and problem-solving, <br></br>I am
            excited to take on new challenges and contribute effectively to
            dynamic teams within the tech industry.
          </p>
        </section>
      </section>
    </section>
  );
};

const Summary = () => {
  return (
    <section className="border-b-4 border-gray-300">
      {/* Header - SUMMARY */}
      <h2 className="text-xl font-bold tracking-widest text-gray-700 print:font-normal text-center">
        SUMMARY
      </h2>
      <PreSummary />
    </section>
  );
};
export default Summary;
