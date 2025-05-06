import React from "react";
import data from "../../data/index.json";

interface Skill {
  src: string;
  title: string;
  description: string;
}

const MySkills: React.FC = () => {
  return (
    <section className="skills--section py-16 bg-gray-50" id="mySkills">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="section--title text-xl font-semibold mb-2">
            My Skills
          </p>
          <h2 className="skills--section--heading text-4xl lg:text-5xl font-bold text-gray-900">
            My Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills--section--container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.skills?.map((item: Skill, index: number) => (
            <div
              key={index}
              className="skills--section--card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Skill Image */}
              <div className="skills--section--img flex justify-center mb-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Skill Content */}
              <div className="skills--section--card--content text-center">
                <h3 className="skills--section--title text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="skills--section--description text-lg text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;