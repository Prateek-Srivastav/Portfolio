import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Prateek, nice to meet you. Please take a look around.</p>
          </div>
          <div className="">
            <p>
              Dedicated and efficient full stack developer (MERN) with 1+ years
              of experience in application layers, presentation layers, and
              databases. Certified in both F/E and B/E technologies. Have
              experience in AWS elastic beanstalk and route53. Seeking to
              further improve React and MongoDB skills as a full stack
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
