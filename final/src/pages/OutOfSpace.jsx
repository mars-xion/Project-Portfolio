import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { kelt9bData } from "../constants/projects";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const OutOfSpace = () => {
  return (
    <div className="container mx-auto p-4 bg-black-100 text-white-100">
      <motion.div className="text-center" variants={textVariant()}>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white-100">
          Exploring KELT 9B
        </h1>
      </motion.div>

      <motion.div variants={fadeIn()}>
        <p className="mb-4">{kelt9bData.overview}</p>
        <p className="mb-4">{kelt9bData.kelt9bInfo}</p>
        <p className="mb-4">{kelt9bData.aliensInfo}</p>
        <p className="mb-4">{kelt9bData.firstMission}</p>

        <div className="bg-black-200 p-4 rounded-md shadow-card">
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            Health and Recreation Department
          </h2>
          <p className="mb-3">{kelt9bData.healthAndRecreation.goal}</p>
          <p>{kelt9bData.healthAndRecreation.approach}</p>
        </div>

        <p className="mt-6 mb-4">{kelt9bData.finalDay}</p>
        <p className="mb-6">{kelt9bData.reflection}</p>
      </motion.div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {kelt9bData.images.map((image, index) => (
          <Tilt className="w-full" options={{ max: 25, scale: 1.05 }}>
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </Tilt>
        ))}
      </div>

      {/* Videos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-10">
        <video width="320" height="240" controls className="shadow-md">
          <source src={kelt9bData.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          width="320"
          height="240"
          controls
          autoPlay
          muted
          className="shadow-md"
        >
          <source src={kelt9bData.additionalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Document Links */}
      <div className="text-center mt-10">
        <a
          href={kelt9bData.fullDocumentLink}
          target="_blank"
          className="text-secondary underline text-lg"
          // onClick={window.open(kelt9bData.fullDocumentLink)}
        >
          View Full Document
        </a>
        <a
          href={kelt9bData.storyDocument}
          target="_blank"
          className="text-secondary underline text-lg block mt-2"
          autoplay
        >
          Read the Story Document
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(OutOfSpace, "outOfSpace");
