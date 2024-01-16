import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { dutchDesignWeekData } from "../constants/projects";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Weyweyweb = () => {
  return (
    <div className="container mx-auto p-4 bg-black-100 text-white-100 pt-32">
      <motion.div className="text-center" variants={textVariant()}>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-secondary">
          {dutchDesignWeekData.title}
        </h1>
      </motion.div>

      <motion.div variants={fadeIn()}>
        {dutchDesignWeekData.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              {section.title}
            </h2>
            <p>{section.description}</p>
            {section.image && (
              <div className="w-full my-4" options={{ max: 25, scale: 1.05 }}>
                <img
                  src={section.image}
                  alt={`Image for ${section.title}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
            {section.video && (
              <div className="flex justify-center my-4">
                <video width="320" height="240" controls className="shadow-md">
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </motion.div>
      {/* Document Link */}
      <div className="text-center mt-10">
        <a
          href={dutchDesignWeekData.fullDocumentLink}
          target="_blank"
          className="text-secondary underline text-lg"
        >
          View Full Dutch Design Week Document
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Weyweyweb, "Weyweyweb");
