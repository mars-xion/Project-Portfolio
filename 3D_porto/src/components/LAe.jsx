import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import { LAData } from "../constants";
import { SectionWrapper } from "../hoc";
import React, { useState } from "react";

  
const LAe = () => {
    const data = LAData.jobs ;
    // Set initial selected tab
    const [selectedTab, setSelectedTab] = useState(data[0].expData.position); 

    
    const handleTabChange = (value) => {
      setSelectedTab(value);
    };

    return (
      <Tabs value={selectedTab} onChange={handleTabChange} 
      orientation="vertical" className="max-w-6xl">
        <TabsHeader className="w-44 p-4">
          {data.map(({ expData }) => (
             <Tab
             key={expData.position}
             value={expData.position}
             style={{
                color: selectedTab === expData.position ? "#4B527E" : "white",
                borderRight:
                 selectedTab === expData.position
                  ? "4px solid #4B527E"
                  : "2px solid transparent",
                backgroundColor:
                  selectedTab === expData.position
                    ? "rgba(128, 0, 128, 0.1)" // Background color with low opacity for the selected tab
                    : "transparent",
                paddingRight: "8px",
                paddingLeft: "12px", // Adjust padding between text and border
                marginBottom: "15px", // Adjust vertical spacing between tabs
                fontSize: selectedTab === expData.position ? "20px" : "18px",
                cursor: "pointer", // Show pointer cursor on hover
                paddingTop: "8px", // Add padding within the background box
                paddingBottom: "8px", // Add padding within the background box
             }}
             onClick={() => handleTabChange(expData.position)}
           >
              {expData.company}
            </Tab>
          ))}
          <span className={`border-r-2 border-purple-500 h-auto absolute top-4 bottom-8 right-4 m-auto`} />
          </TabsHeader>
        <div  className="p-4">
        <TabsBody>
          {data.map(({ expData }) => (
            <TabPanel key={expData.position} value={expData.position} className="py-0">
              <h3 className="">{expData.position}</h3>
              <br />
              <p>{expData.details}</p>
            </TabPanel>
          ))}
        </TabsBody>
        </div>
      </Tabs>
    );
  }

export default SectionWrapper(LAe, "");