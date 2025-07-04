import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";

import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLinSection from "../components/core/HomePage/TimeLinSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center gap-1
            text-white justify-between "
      >
        <Link to={"/signup"}>
          <div
            className="group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]
            transition-all duration-200 hover:scale-95 w-full hover:drop-shadow-none "
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblue-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          <p>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className=" mx-3 my-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200 ">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} />
          </video>
        </div>

        {/* code section 1 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding Potential "} />
                With Our Online Courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a\nhref="/three">Three</a>\n</nav>\n</body>`}
            codecolor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* code section 2 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold lg:w-[50%] " >
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n }\nexport default Home;`}
            codecolor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

            <ExploreMore/>
        
      </div>

      {/* section 2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 mx-auto">
            <div className="lg:h-[150px]"></div>

            <div className="flex flex-row gap-7 text-white">
              {/* button 1 */}

              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              {/* button 2 */}

              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex flex-row items-center gap-3">
                  Learn More
                </div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8">
          
          {/* <div className="flex flex-row gap-5 mb-10 mt-[95px] justify-between"> */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            
            <div className="text-4xl font-semibold lg:w-[45%]">
              Get the skills you need for a
              <HighlightText text={"job that is in demand."} />
            </div>

            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              
              <div className="text-[17px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          
          </div>

           <TimeLinSection/>
         
           <LearningLanguageSection/>
        
        </div>

      </div>

      {/* section 3 */}

          <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
              <InstructorSection/>

              <h2 className="text-center text-4xl font-semibold mt-10">Reviews from other learners</h2>
          
          {/* review slider here */}
          <ReviewSlider />

          
          </div>


      {/* footer */}
          <Footer/>
            

    </div>
  );
};

export default Home;
