import React from "react";
import data from "../../data/index.json";

interface PortfolioItem {
  src?: string;
  title: string;
  description: string;
  link?: string;
  url?: string;
  link1?: string;
  url1?: string;
}

const MyPortfolio: React.FC = () => {
  return (
    <section className="portfolio--section py-16 bg-gray-50" id="MyPortfolio">
      <div className="container mx-auto px-6">
        {/* Portfolio Header */}
        <div className="portfolio--container-box text-center mb-12">
          <div className="portfolio--container">
            <p className="sub--title text-xl font-semibold mb-2">
              Recent Projects
            </p>
            <h2 className="section--heading text-4xl lg:text-5xl font-bold text-gray-900">
              My Portfolio
            </h2>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio--section--container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.portfolio?.map((item: PortfolioItem, index: number) => (
            <div
              key={index}
              className="portfolio--section--card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Portfolio Image */}
              {item.src && (
                <div className="portfolio--section--img mb-4">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Portfolio Content */}
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-md text-gray-600 mb-4">{item.description}</p>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {item.link && (
                    <a
                      href={item.url}
                      className="text-sm text-customPurple hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="currentColor"
                      >
                        <path
                          d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                          stroke="currentColor"
                          strokeWidth="2.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {item.link1 && (
                    <a
                      href={item.url1}
                      className="text-sm text-customPurple hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link1}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="currentColor"
                      >
                        <path
                          d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                          stroke="currentColor"
                          strokeWidth="2.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;