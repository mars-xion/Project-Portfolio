import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import {
  portfolioData,
  subQ1,
  subQ2,
  subQ3,
  conclusion,
} from "../constants/portfolio";

const Portfolio = () => {
  const [selectedSection, setSelectedSection] = useState(
    "Main Research Question"
  );
  const sectionRefs = useRef({});

  // Combine all sections into a single array
  const allSections = [
    ...portfolioData.sections,
    ...subQ1.section,
    ...subQ2.section,
    ...subQ3.section,
    ...conclusion.section,
  ];

  useEffect(() => {
    const selectedRef = sectionRefs.current[selectedSection];
    if (selectedRef) {
      selectedRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);

  const handleSectionClick = (sectionTitle) => {
    setSelectedSection(sectionTitle);
  };

  // Function to render contents for each section
  const renderSectionContents = (contents) => {
    return contents.map((content, contentIndex) => (
      <div
        className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8"
        key={contentIndex}
      >
        <h4 className="font-semibold">{content.subtitle}</h4>
        <p className="mb-2">{content.description}</p>
        {/* Render Why and How */}
        {content.why && (
          <div>
            <h5 className="font-semibold pt-4 pb-2 text-lg text-secondary">
              Why?
            </h5>
            <p>{content.why}</p>
          </div>
        )}
        {content.how && (
          <div>
            <h5 className="font-semibold pt-4 pb-2 text-lg text-secondary">
              How?
            </h5>
            <p>{content.how}</p>
          </div>
        )}
        {/* Render Results */}
        {content.results && (
          <div>
            <h5 className="font-semibold pt-4 pb-2 text-lg text-secondary">
              Results
            </h5>
            {content.results.map((result, resultIndex) => (
              <div key={resultIndex} className="py-4 px-2">
                {result.trend && (
                  <h5 className="font-semibold text-base">{result.trend}</h5>
                )}
                {result.images &&
                  result.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="">
                      <img
                        src={image.content} // Use the actual path to your images here
                        alt={image.description}
                        className="max-w-full rounded-lg mb-4 mt-2"
                      />
                      <p className="text-sm">{image.description}</p>
                    </div>
                  ))}
                {result.description && (
                  <p className="text-base">{result.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Render Conclusion */}
        {content.conclusion && (
          <div>
            <h5 className="font-semibold pt-4 pb-2 text-lg text-secondary">
              Conclusion
            </h5>
            <p>{content.conclusion}</p>
          </div>
        )}
        {/* Render Links */}
        {content.links &&
          content.links.map((link, linkIndex) => (
            <div className="pt-4">
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg"
              >
                {link.text}
              </a>
            </div>
          ))}
      </div>
    ));
  };

  return (
    <div className="flex">
      {/* Fixed navigation bar on the left */}
      <div className="fixed left-20 p-4 h-screen bg-transparent">
        <nav>
          <ul className="list-none pl-0 pt-40">
            {allSections.map((section) => (
              <li className="mb-4" key={section.title}>
                <button
                  className={`text-blue-600 hover:underline hover:bg-transparent text-lg ${
                    selectedSection === section.title ? "font-semibold" : ""
                  }`}
                  onClick={() => handleSectionClick(section.title)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content area with section details */}
      <div className="pt-32">
        {/* Render Main Research Question */}
        {portfolioData.sections.map((section, index) => (
          <div
            key={section.title}
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Main Research Question
            </h3>
            {renderSectionContents(section.contents)}
          </div>
        ))}

        {/* Render Sub Questions One */}
        {subQ1.section.map((section, index) => (
          <div
            key={section.title}
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Sub Questions One</h3>
            {renderSectionContents(section.contents)}
          </div>
        ))}

        {/* Render Sub Questions Two */}
        {subQ2.section.map((section, index) => (
          <div
            key={section.title}
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Sub Questions Two</h3>
            {renderSectionContents(section.contents)}
          </div>
        ))}

        {/* Render Sub Questions Three */}
        {subQ3.section.map((section, index) => (
          <div
            key={section.title}
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Sub Questions Three</h3>
            {renderSectionContents(section.contents)}
          </div>
        ))}

        {/* Render Conclusion */}
        {conclusion.section.map((section, index) => (
          <div
            key={section.title}
            ref={(ref) => (sectionRefs.current[section.title] = ref)}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
            {renderSectionContents(section.contents)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
