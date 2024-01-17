import React from "react";
import { SectionWrapper } from "../hoc";
import { weyweywebData } from "../constants/projects";
import CodePenEmbed from "../sections/CodePenEmbed";

const Weyweyweb = () => {
  const headerImageUrl = "/public/projects/malaga/malaga.jpeg";

  return (
    <div className="pt-32 text-white min-h-screen">
      <div className="container mx-auto p-4 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          <div className="md:w-2/3 flex-grow">
            {/* Use the map function to render data from weyweywebData */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {weyweywebData.overview.title}
            </h1>

            <p className="text-md md:text-lg">{weyweywebData.overview.event}</p>
            <p className="text-md md:text-lg">{weyweywebData.overview.date}</p>
            <p className="text-md md:text-lg">
              {weyweywebData.overview.location}
            </p>
            <p className="text-md md:text-lg">
              {weyweywebData.overview.authority}
            </p>
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
          <h2 className="text-2xl font-semibold mb-3 text-secondary">Topics</h2>
          <p className="text-md md:text-lg">{weyweywebData.overview.topics}</p>
        </div>

        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            First Day
          </h2>
          <p className="text-md md:text-lg">
            {weyweywebData.firstDay.schedule}
          </p>
          <p className="text-md md:text-lg">
            {weyweywebData.firstDay.notableTopics}
          </p>
          <p className="text-md md:text-lg">
            {weyweywebData.firstDay.oklchInsights}
          </p>
          <p className="text-md md:text-lg">
            {weyweywebData.firstDay.chatGPTInsights}
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            Second Day
          </h2>
          <p className="text-md md:text-lg">
            {weyweywebData.secondDay.attendedTalks}
          </p>
          <p className="text-md md:text-lg">
            {weyweywebData.secondDay.notableTopics}
          </p>
          <p className="text-md md:text-lg">
            {weyweywebData.secondDay.insights}
          </p>
        </div>

        {/* The HTML semantics workshop Section */}
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-secondary">
            The HTML semantics workshop
          </h2>
          <p className="text-md md:text-lg">
            {weyweywebData.secondDay.workshopInsights}
          </p>
        </div>

        {/* Exercises Section */}
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Exercises</h2>
          {weyweywebData.htmlCodeExercises.map((exercise, index) => (
            <div key={exercise.exerciseNumber} className="mb-6">
              <p className="mb-2">{exercise.exerciseDescription}</p>
              <CodePenEmbed code={exercise.code} />{" "}
            </div>
          ))}
        </div>
      </div>

      {/* Document Link */}
      <div className="text-center mt-8">
        <a
          href={weyweywebData.fullDocumentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition duration-300"
        >
          View Full Dutch Design Week Document
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Weyweyweb, "weyweyweb");
