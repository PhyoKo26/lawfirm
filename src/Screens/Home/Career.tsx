import React from "react";

const MyCareer: React.FC = () => {
  return (
    <section className="career--section py-16 bg-gray-50" id="CareerSection">
      <div className="container mx-auto px-6">
        {/* Academic Journey Section */}
        <div className="portfolio--container text-center mb-12">
          <p className="section--title text-xl font-semibold mb-2">
            My Career
          </p>
          <h2 className="skills--section--heading text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Academic Journey
          </h2>
        </div>

        {/* Academic Career Items */}
        <div className="career--container space-y-8">
          {/* 2017 */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                2017 📜
              </p>
            </div>
            <div className="lg:w-3/4">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Certificate in Youth Leadership & Development
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Taxila Institute
              </p>
            </div>
          </div>

          {/* 2020 */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-1/4">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                2020 🎓
              </p>
            </div>
            <div className="lg:w-3/4">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                B.C.Sc (Bachelor of Computer Science)
              </p>
              <p className="career--section-description text-lg text-gray-600">
                University of Computer Studies, Yangon (UCSY)
              </p>
            </div>
          </div>
        </div>

        {/* Professional Milestones Section */}
        <div className="portfolio--container text-center mt-16 mb-12">
          <h2 className="skills--section--heading text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Professional Milestones
          </h2>
        </div>

        {/* Professional Career Items */}
        <div className="career--container space-y-8">
          {/* NEXUS Internship */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-2/6">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                May 2019 – July 2019 📑
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Internship at NEXUS Myanmar System Resources Co., Ltd
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Training and preparing for ERP SAP Business One modules. Gained
                hands-on experience in business solutions and system integration.
              </p>
            </div>
          </div>

          {/* CGM Golden Land */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-2/6">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                August 2019 – September 2023 👨‍💻
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Sub-Leader Developer at CGM Golden Land, Yangon
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Collaborating with teams to build and maintain frontend, backend
                & mobile applications. Leading the development of key features
                while ensuring code quality and best practices.
              </p>
            </div>
          </div>

          {/* uab Fintech */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-2/6">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                October 2022 – September 2023 📱
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Outsource Mobile Developer at uab Fintech
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Developing and maintaining mobile applications using React Native
                and TypeScript. Contributing to the enhancement of the user
                experience and ensuring high-performance app delivery.
              </p>
            </div>
          </div>

          {/* MoMyanmar (MoMoney) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-2/6">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                September 2023 – Present 👨‍💻
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Mobile Team Lead (React Native) at MoMyanmar (MoMoney) / Shwe Bank
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Leading a team of React Native developers, ensuring the delivery
                of scalable and efficient mobile applications. Providing guidance
                and mentorship to junior developers.
              </p>
            </div>
          </div>

          {/* Bagan Innovation Technology (BIT) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="lg:w-2/6">
              <p className="career--section-year text-xl text-gray-700 font-bold">
                June 2024 – Present 📱
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="career--section-description text-lg text-gray-600 font-semibold">
                Outsource Mobile Developer at Bagan Innovation Technology (BIT)
              </p>
              <p className="career--section-description text-lg text-gray-600">
                Contributing to the development and enhancement of mobile
                applications using React Native. Collaborating with teams to build
                scalable, high-performance solutions while integrating modern
                technologies for seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCareer;