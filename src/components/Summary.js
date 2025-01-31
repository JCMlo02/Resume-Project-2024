import React from "react";

const Summary = () => {
  return (
    <section className="py-6 first:pt-0">
      <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 shadow-lg border border-gray-100/50">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Summary
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg tracking-wide font-light">
          As a junior-level software engineer, I combine creativity,
          curiosity, and a strong eagerness to learn with a diverse skill set.
          <span className="block mt-2">
            Passionate about innovation and problem-solving, I am
            excited to take on new challenges and contribute effectively to
            dynamic teams within the tech industry.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Summary;
