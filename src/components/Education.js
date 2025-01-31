import React from "react";

const EducationCard = ({ title, institution, period }) => (
  <div className="group p-5 backdrop-blur-sm bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
      {title}
    </h3>
    <div className="mt-2 space-y-1">
      <p className="text-gray-600 font-medium">{institution}</p>
      <p className="text-sm text-gray-500">{period}</p>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Certificate in Software Engineering",
      institution: "Road to Hire",
      period: "Aug 2022 – Feb 2023"
    },
    {
      title: "GED",
      institution: "Rowan-Cabarrus Community College",
      period: "Mar 2022 – Mar 2022"
    }
  ];

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="grid gap-4">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
