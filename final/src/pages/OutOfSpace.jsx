import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { kelt9bData } from "../constants/projects";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const OutOfSpace = () => {
  const headerImageUrl = "/public/projects/outofspace/image-spaceship.jpeg";

  return (
    <div className="pt-32 text-white min-h-screen">
      <div className="container mx-auto p-4 pt-16">
        <motion.div variants={fadeIn()}>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <div className="md:w-2/3 flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {kelt9bData.title}
              </h1>
              <p className="text-md md:text-lg">{kelt9bData.theme}</p>
              <p className="text-md md:text-lg">{kelt9bData.date}</p>
              <p className="text-md md:text-lg">{kelt9bData.location}</p>
              <p className="text-md md:text-lg">{kelt9bData.university}</p>
            </div>
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={headerImageUrl}
                alt="Event"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Sections */}
          <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              Overview
            </h2>
            <p className="text-md md:text-lg">{kelt9bData.overview}</p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              The Planet and Its Inhabitants
            </h2>
            <p className="text-md md:text-lg">{kelt9bData.kelt9bInfo}</p>
            <p className="text-md md:text-lg">{kelt9bData.aliensInfo}</p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              First Mission
            </h2>
            <p className="text-md md:text-lg">{kelt9bData.firstMission}</p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              Health and Recreation Department
            </h2>
            <p className="mb-3">{kelt9bData.healthAndRecreation.goal}</p>
            <p>{kelt9bData.healthAndRecreation.approach}</p>
          </div>

          <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-secondary">
              Final Day
            </h2>
            <p className="mt-6 mb-4">{kelt9bData.finalDay}</p>
            <p className="mb-6">{kelt9bData.reflection}</p>
          </div>
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
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            Videos and Documents
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
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
      </div>
    </div>
  );
};

export default SectionWrapper(OutOfSpace, "outOfSpace");
