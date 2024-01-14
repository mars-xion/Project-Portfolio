import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { divisions } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const DivisionsCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] ww-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            /* opetions for the tilt cards*/ max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 
           px-12 min-h-[20px] flex justify-evenly 
           items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px] font-bold
          text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ProjectOverview = () => {
  return (
    <>
      <motion className="div" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Divisions</h2>
      </motion>

      <div className="mt-20 flex flex-wrap gap-10">
        {divisions.map((division, index) => (
          <DivisionsCard key={division.title} index={index} {...division} />
        ))}
      </div>
    </>
  );
};

// component, "id name"
export default SectionWrapper(ProjectOverview, "project");
