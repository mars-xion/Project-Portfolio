import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dutchDesignWeekData } from "../constants/projects";
import SectionWrapper from "../hoc/SectionWrapper";

const DutchDesignWeek = () => {
  const { title, eventDetails, sections, videoLinks } = dutchDesignWeekData;
  const headerImageUrl = "/public/projects/ddw/123123.jpeg";

  const videoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="pt-32 text-white min-h-screen">
      <div className="container mx-auto p-4 pt-16">
        {/* Event Header with Image */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          <div className="md:w-2/3 flex-grow">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-md md:text-lg">{eventDetails.theme}</p>
            <p className="text-md md:text-lg">{eventDetails.date}</p>
            <p className="text-md md:text-lg">{eventDetails.location}</p>
            <p className="text-md md:text-lg">{eventDetails.university}</p>
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
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {section.title}
            </h2>
            <p className="text-sm md:text-base mb-4">{section.description}</p>
            {/* Check for specific section titles */}
            {section.title === "Day 1" && (
              <>
                {/* Place your images for Day 1 here */}
                <img
                  src="image-for-day-1.jpg"
                  alt="Image for Day 1"
                  className="inline-block w-1/4 h-auto rounded-lg shadow-md mr-4 mb-4"
                />
              </>
            )}
            {section.title === "Day 2" && (
              <>
                {/* Place your images for Day 2 here */}
                <img
                  src="image-for-day-2.jpg"
                  alt="Image for Day 2"
                  className="inline-block w-1/4 h-auto rounded-lg shadow-md mr-4 mb-4"
                />
              </>
            )}
            {/* Video */}
            {section.video && (
              <video controls className="w-full rounded-lg shadow-md">
                <source src={section.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}

        {/* Document Link */}
        <div className="text-center mt-8">
          <a
            href={dutchDesignWeekData.fullDocumentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
          >
            View Full Dutch Design Week Document
          </a>
        </div>

        {/* Video Slideshow */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Other videos</h2>
          <div className="slider-container">
            <Slider {...videoSliderSettings}>
              {videoLinks.map((videoLink, index) => (
                <div key={index}>
                  <video
                    controls
                    key={index}
                    className="w-full rounded-lg shadow-md h-[48rem]"
                  >
                    <source src={videoLink} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(DutchDesignWeek, "");
