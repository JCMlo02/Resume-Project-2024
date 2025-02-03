import React from "react";

const Summary = () => {
  return (
    <section className="py-6 first:pt-0">
      <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-6 shadow-lg border border-gray-100/50">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Summary
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg tracking-wide font-light">
          <span className="block mt-2">
            Software Engineer with expertise in designing and implementing
            scalable, serverless architectures using AWS, TypeScript, and
            Terraform. Proven experience in integrating complex systems,
            optimizing CI/CD pipelines, and delivering high-impact solutions for
            enterprise-level applications. Passionate about leveraging cloud
            technologies to solve large-scale challenges and improve operational
            efficiency.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Summary;
