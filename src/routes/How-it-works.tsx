import { Button } from "@/components/ui/button";
import { MoveRight, ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { stepsData } from "@/lib/stepsData";

import "swiper/swiper-bundle.css";
import { useState } from "react";


export function HowItWorks() {
  const [openStep, setOpenStep] = useState<number | null>(1); // Start with step 2 open (AI Validates)
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const toggleStep = (stepId: number) => {
    setOpenStep(openStep === stepId ? null : stepId);
    setActiveStep(stepId === activeStep ? null : stepId);
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full h-[400px] md:h-[500px] lg:h-[600px] max-h-[600px] how-it-works-image bg-[#eed6ff09] overflow-hidden">
        <style>
          {`
                  .how-it-works-image {
                     width: 100%;
                   
                     background-image: url('/images/pricing.png');
                     background-size: cover;
                     background-position: center;
                     background-repeat: no-repeat;
                  }
               `}
        </style>
        <div className="h-[90%] w-[90%] flex items-center justify-center">
          <img
            className="object-contain w-full h-full"
            src="/images/works-sect.png"
            alt=""
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-0 px-4 pt-10 md:pt-20">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5">
          <p className="max-w-2xl text-sm text-center text-white md:text-xl">
            Manage all your social media accounts in one place and save time.
          </p>
          <div className="flex flex-col items-center justify-center w-full max-w-md gap-4 sm:flex-row">
            <Button className="!px-4 sm:!px-5 !py-4 sm:!py-6 !rounded-full !text-sm sm:!text-md w-full sm:w-auto">
              Start your free trial
            </Button>
            <Button className="!px-4 sm:!px-5 !py-4 sm:!py-6 !rounded-full !text-sm sm:!text-md w-full sm:w-auto">
              Request a demo
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 sm:text-sm">
            No Credit Card Required
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="flex flex-col items-center justify-center w-[95%] md:w-[90%] h-full my-10 md:my-20 px-4">
        <h2 className="pb-6 text-2xl font-bold text-center text-white md:pb-10 md:text-3xl lg:text-4xl">
          WHAT WE DO
        </h2>
        <div className="flex flex-col items-stretch justify-center w-full h-full gap-5 lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full h-auto gap-5 lg:w-3/4">
            {/* Top row - stacks on mobile */}
            <div className="flex flex-col items-center justify-center w-full h-full gap-5 md:flex-row">
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-6 md:p-10 box-border rounded-lg gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  src="/images/ac.png"
                  alt=""
                />
                <h2 className="text-lg text-white md:text-xl text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-sm text-gray-200 md:text-base">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-6 md:p-10 box-border rounded-lg gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  src="/images/ad.png"
                  alt=""
                />
                <h2 className="text-lg text-white md:text-xl text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-sm text-gray-200 md:text-base">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-6 md:p-10 box-border rounded-lg gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  src="/images/ae.png"
                  alt=""
                />
                <h2 className="text-lg text-white md:text-xl text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-sm text-gray-200 md:text-base">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
            </div>

            {/* Bottom row - stacks on mobile */}
            <div className="flex flex-col items-center justify-center w-full h-full gap-5 mt-2 md:flex-row">
              <div className="flex flex-col md:flex-row items-start justify-start w-full md:w-2/3 h-full bg-[#131313] p-6 md:p-10 box-border rounded-lg gap-3">
                <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                  <img
                    className="w-8 h-8 md:w-10 md:h-10"
                    src="/images/ad.png"
                    alt=""
                  />
                  <h2 className="text-lg text-white md:text-xl text-start">
                    Behavior-based Filtering
                  </h2>
                  <p className="text-sm text-gray-200 md:text-base">
                    We go beyond demographics — leads are categorized based on
                    activity, completeness, and conversion probability.
                  </p>
                </div>

                <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                  <img
                    src="/images/www.png"
                    className="object-contain w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full md:w-1/3 h-full bg-[#131313] p-6 md:p-10 box-border rounded-lg gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  src="/images/ae.png"
                  alt=""
                />
                <h2 className="text-lg text-white md:text-xl text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-sm text-gray-200 md:text-base">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - moves to bottom on mobile */}
          <div className="flex flex-col items-center justify-center w-full h-auto gap-5 lg:w-1/4">
            <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-4 md:p-5 box-border rounded-lg gap-3">
              <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  src="/images/ad.png"
                  alt=""
                />
                <h2 className="text-lg text-white md:text-xl text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-sm text-gray-200 md:text-base">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                <img
                  src="/images/wedo.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section - NEW TOGGLE VERSION */}
      <section className="flex flex-col items-center justify-center w-[95%] md:w-[90%] h-full my-10 md:my-20 px-4">
        <h2 className="pb-6 text-3xl font-bold text-center text-white md:pb-10 md:text-4xl lg:text-5xl">
          How it works
        </h2>
        <div className="flex flex-col items-start justify-start w-full h-full gap-10 pt-6 xl:flex-row xl:gap-20 md:pt-10">
          {/* Left column - process steps with toggle functionality */}
          <div className="flex flex-col items-center justify-center w-full xl:w-[60%] gap-6 md:gap-10 h-full">
            {stepsData.map((step) => (
              <div key={step.id} className="w-full">
                {/* Step Header */}
                <div
                  className="flex flex-col items-start justify-between w-full h-full gap-3 cursor-pointer sm:flex-row sm:items-center sm:gap-5 group"
                  onClick={() => {
                    toggleStep(step.id);
                  }}
                >
                  <div className="flex flex-col items-start justify-center w-full h-full gap-3 md:gap-5">
                    <h3
                      className={`text-lg text-gray-400 md:text-xl transition-colors group-hover:text-[#5CE4CF] ${
                        step.id == activeStep ? "!text-[#5CE4CF]" : ""
                      }`}
                    >
                      {step.category}
                    </h3>
                    <p
                      className={`text-2xl md:text-3xl lg:text-4xl transition-colors group-hover:text-purple-600  ${
                        step.id == activeStep ? "!text-purple-600" : ""
                      }  text-white `}
                    >
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-200 transition-colors md:text-base group-hover:text-gray-100">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0 transition-transform group-hover:translate-x-1" />
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      {openStep === step.id ? (
                        <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                          <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                          <ArrowDownRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      )}
                    </span>
                  </div>
                </div>

                {/* Detailed Explanation - Expandable */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openStep === step.id
                      ? "max-h-[2000px] opacity-100 mt-6"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="flex flex-col items-start justify-start w-full h-full gap-2 border-2 border-[#73249aa6] rounded-3xl p-4 md:p-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                    <p className="text-sm text-gray-200 md:text-base">
                      {step.detailedExplanation.intro}
                    </p>

                    {step.detailedExplanation.sections.map(
                      (section, sectionIndex) => (
                        <div key={sectionIndex} className="w-full">
                          <h4 className="mt-2 text-sm font-bold text-gray-200 md:text-base">
                            {section.title}
                          </h4>
                          <p className="text-sm text-gray-200 md:text-base">
                            {section.content}
                          </p>

                          {section.subSections && (
                            <ul className="flex flex-col gap-2 pl-5 mt-2 text-gray-200 list-disc">
                              {section.subSections.map(
                                (subSection, subIndex) => (
                                  <li key={subIndex}>
                                    <h4 className="pr-3 text-sm font-bold text-gray-200 md:text-base">
                                      {subSection.title}{" "}
                                      <span className="font-light text-gray-200">
                                        {subSection.content}
                                      </span>
                                    </h4>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Next Jobs */}
            <div className="flex flex-row items-center justify-start w-full h-full gap-3 mt-6 md:gap-5">
              <p className="text-xs text-gray-400 md:text-sm">NEXT JOBS</p>
              <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF]" />
            </div>
          </div>

          {/* Right column - sidebar content */}
          <div className="flex flex-col items-start justify-start w-full xl:w-[40%] h-full gap-6 md:gap-10">
            <img
              className="object-contain w-full h-auto"
              src="/images/how-reviews.png"
              alt=""
            />

            <h2 className="text-4xl text-white md:text-5xl lg:text-6xl">
              Understand <br /> More
            </h2>
            <p className="text-sm text-gray-200 md:text-base">
              Watch this{" "}
              <span className="text-gray-200">
                <a href="" className="text-purple-500">
                  video
                </a>
              </span>
              <br />
              or Schedule a meeting to understand more about our platform
            </p>

            <div className="flex flex-col items-start justify-center w-full h-full gap-5 bg-[#131313] p-4 md:p-5 py-6 md:py-10 box-border rounded-2xl">
              <p className="text-3xl text-gray-200 md:text-4xl lg:text-5xl text-start">
                Let's Schedule <br /> a Meeting
              </p>
              <Button className="!px-6 md:!px-8 !py-4 md:!py-6 !rounded-md bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-base md:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all !w-full">
                Schedule a meeting
              </Button>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-full gap-2">
              <h3 className="pb-2 text-2xl text-white md:text-3xl lg:text-4xl">
                Learn More
              </h3>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">
                  Business Development
                </p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">
                  Data Science
                </p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">Finance</p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">
                  Human Resource
                </p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">Marketing</p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">Operations</p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-sm text-gray-200 md:text-base">Software</p>
                <MoveRight className="w-6 h-6 md:w-auto md:h-10 text-[#5CE4CF] flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="flex flex-col items-center justify-center w-[95%] md:w-[90%] h-full my-10 md:my-20 px-4">
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full gap-5 p-0 w-full bg-[#31313171] rounded-3xl">
              <img
                src="https://img.freepik.com/free-photo/high-angle-employees-working-together_23-2150152254.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                alt=""
                className="object-cover w-full rounded-md h-[200px] md:h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-sm text-gray-400">10-08-2024</span>{" "}
                  <span className="text-xl md:text-2xl lg:text-3xl bluish">
                    Why You Should Use AI to Validate Your Leads
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full gap-5 p-0 w-full bg-[#31313171] rounded-3xl">
              <img
                src="https://img.freepik.com/premium-photo/business-digital-marketing-data-network-attract-leads-customers-concept-human-people-icons-attracted-by-magnet-hand-grey-background-business-team-building-recruitment-hiring-concept_36367-10671.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                alt=""
                className="object-cover w-full rounded-md h-[200px] md:h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-sm text-gray-400">10-08-2024</span>{" "}
                  <span className="text-xl md:text-2xl lg:text-3xl bluish">
                    Why You Should Use AI to Validate Your Leads
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full gap-5 p-0 w-full bg-[#31313171] rounded-3xl">
              <img
                src="https://img.freepik.com/free-photo/finger-pressing-red-icon_1232-178.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                alt=""
                className="object-cover w-full rounded-md h-[200px] md:h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-sm text-gray-400">10-08-2024</span>{" "}
                  <span className="text-xl md:text-2xl lg:text-3xl bluish">
                    Why You Should Use AI to Validate Your Leads
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
