import { Button } from "@/components/ui/button";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Countdown, { CountdownRenderProps } from "react-countdown";

import "swiper/swiper-bundle.css";
import { useState } from "react";

// Custom renderer for countdown
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return (
      <span className="text-sm md:text-base">
        Early bird pricing has ended!
      </span>
    );
  } else {
    return (
      <div className="flex flex-row items-center justify-center w-full gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white md:text-6xl lg:text-8xl">
            {days}
          </div>
          <div className="text-xs text-gray-400 md:text-sm">Days</div>
        </div>
        <div className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white md:text-6xl lg:text-8xl">
            {hours}
          </div>
          <div className="text-xs text-gray-400 md:text-sm">Hours</div>
        </div>
        <div className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white md:text-6xl lg:text-8xl">
            {minutes}
          </div>
          <div className="text-xs text-gray-400 md:text-sm">Minutes</div>
        </div>
        <div className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          :
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white md:text-6xl lg:text-8xl">
            {seconds}
          </div>
          <div className="text-xs text-gray-400 md:text-sm">Seconds</div>
        </div>
      </div>
    );
  }
};

export function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(index === openFAQ ? 0 : index);
  };

  // Set the end date for early bird pricing (7 days from now)
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  return (
    <main className="min-h-screen bg-[#07051A] text-white flex flex-col w-full justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pt-8 md:pt-12 pb-6 md:pb-8 about-hero h-[700px] md:h-[600px] lg:h-[700px]">
        <style>
          {`
            .about-hero {
              background-image: url('/images/pricing.png');
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
        <div className="text-center w-[95%] md:w-[90%] h-[90%] rounded-2xl flex flex-col items-start justify-center about-hero-sect bg-blur-[0px] bg-[#3b21466e] px-4 md:px-10 lg:px-20">
          <style>
            {`
            .about-hero-sect   {
              background-image: url('/images/about.png');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
          `}
          </style>
          <p className="pb-2 text-sm font-bold text-white md:text-lg">
            validleads.ai
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-start">
            Smarter B2B Lead <br /> Generation, <br /> Powered by AI
          </h1>
          <p className="mb-6 text-sm text-gray-300 md:text-base lg:text-lg text-start">
            AI that delivers: analyze your data, surface the best leads, and
            automate your outreach. <br className="hidden md:block" />
            ValidLeads is the future of sales prospecting.
          </p>
          <Button className="!px-6 md:!px-8 !py-4 md:!py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-base md:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
            See Enterprise Demo{" "}
            <span className="ml-2">
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </section>

      {/* Technology Backbone */}
      <section className="flex flex-col items-center w-full px-4 py-6 md:py-10">
        <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
          Our Technology Backbone
        </h2>
        <div className="flex items-center justify-center w-full">
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            freeMode={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            navigation={false}
            modules={[Autoplay, FreeMode]}
            className="flex w-auto h-auto"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
                speed: 1500,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
                speed: 1000,
              },
            }}
          >
            {[
              "/images/zoho.png",
              "/images/hubspot.png",
              "/images/apollo.png",
              "/images/neverbounce.png",
              "/images/zoho.png",
              "/images/hubspot.png",
              "/images/apollo.png",
              "/images/neverbounce.png",
            ].map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center w-auto h-auto gap-4 py-0"
              >
                <div className="flex flex-col items-center justify-center w-full h-[120px] md:h-[150px] lg:h-[200px] gap-2">
                  <img
                    className="object-contain w-auto h-full contain"
                    src={image}
                    alt="Technology partner"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Speakers and Technologies */}
      <section className="flex flex-col lg:flex-row items-stretch justify-center w-[95%] md:w-[90%] h-auto gap-6 md:gap-10 mt-0 md:mt-20">
        <div className="cards w-full lg:w-[50%] flex flex-col gap-4 bg-[#3b21466e] p-4 md:p-5 py-6 md:py-8 border-t-2 border-r-1 border-l-1 border-b-0 border-gray-200 rounded-2xl justify-between">
          <div className="flex flex-col gap-4 row">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Speakers
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row row">
              <Button className="!p-0 transition-all !bg-white icon !rounded-full !h-10 !w-10 md:!h-12 md:!w-12 flex-shrink-0">
                <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4 text-[#0147FF]" />
              </Button>
              <div className="text-base text-white md:text-xl content">
                <p>
                  Hear from global AI leaders, researchers, and entrepreneurs
                  who are defining the future of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-row gap-2 md:gap-4 stacked">
              <img
                src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-12 h-12 -ml-0 rounded-full md:w-16 lg:w-20 md:h-16 lg:h-20 cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/close-up-studio-shot-beautiful-young-mixed-race-woman-model-with-curly-dark-hair_273609-13870.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-12 h-12 -ml-8 rounded-full md:w-16 lg:w-20 md:h-16 lg:h-20 md:-ml-10 lg:-ml-14 cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera_1098-20801.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-12 h-12 -ml-8 rounded-full md:w-16 lg:w-20 md:h-16 lg:h-20 md:-ml-10 lg:-ml-14 cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall_1258-35442.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-12 h-12 -ml-8 rounded-full md:w-16 lg:w-20 md:h-16 lg:h-20 md:-ml-10 lg:-ml-14 cover"
                alt=""
              />
            </div>
            <Button className="!px-4 md:!px-6 lg:!px-8 !py-3 md:!py-4 lg:!py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
              And more
              <ArrowUpRightIcon className="w-3 h-3 ml-1 md:w-4 md:h-4 md:ml-2" />
            </Button>
          </div>
        </div>
        <div className="cards w-full lg:w-[50%] flex flex-col gap-4">
          <div className="row bg-[#3b21466e] p-4 md:p-5 py-6 md:py-8 border-t-2 border-r-1 border-l-1 border-b-0 border-gray-200 rounded-2xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Technologies
            </h2>
            <p className="text-base text-white md:text-lg">
              Our AI evaluates each lead using a dynamic model trained on
              behavioral signals, role alignment, and engagement patterns. It
              automatically scores and categorizes them into actionable segments
              — Hot, Warm, or Cold — so your team knows exactly who to pursue,
              when, and why.
            </p>
          </div>
          <div className="px-4 py-6 bg-white md:px-5 md:py-10 rounded-2xl row">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              Securities
            </h2>
            <p className="text-base text-black md:text-lg">
              End-to-end encrypted, GDPR-compliant, globally trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="w-[95%] md:w-[90%] full pb-6 md:pb-10 faq px-4 md:px-0 py-4 md:py-0 my-10 md:my-20">
        <div className="box-border flex flex-col items-start justify-center w-full h-full gap-6 py-6 md:gap-10 md:py-10">
          <div className="w-full h-full">
            <h2 className="w-full mb-6 text-2xl font-semibold text-center text-white md:mb-8 md:text-3xl lg:text-4xl md:text-left">
              AGENDA
            </h2>
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 py-5 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(0)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Eliminate Bad Data From the Start
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      {openFAQ === 0 ? (
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
                  {openFAQ === 0 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Our AI-powered platform uses advanced data validation
                      techniques to ensure every lead is accurate and verified.
                      We combine cutting-edge technology with stringent
                      verification processes to deliver only the highest quality
                      leads.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(1)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Make Lead Scoring Smarter, Not Harder
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 1 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowDownRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 1 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Our AI evaluates each lead using a dynamic model trained
                      on behavioral signals, role alignment, and engagement
                      patterns. It automatically scores and categorizes them
                      into actionable segments — Hot, Warm, or Cold — so your
                      team knows exactly who to pursue, when, and why.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(2)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Connect to What You Already Use
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 2 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowDownRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 2 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Our platform integrates seamlessly with CRMs like HubSpot,
                      Salesforce, and Zoho, and imports data from ad accounts or
                      uploaded files. No complex setup. Just plug in, and go.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors cursor-pointer border-0 rounded-lg hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(3)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Automate the Grind, Focus on the Close
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? (
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
                  {openFAQ === 3 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Our AI-powered platform uses advanced data validation
                      techniques to ensure every lead is accurate and verified.
                      We combine cutting-edge technology with stringent
                      verification processes to deliver only the highest quality
                      leads.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(4)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Keep Your Data Secure, Always
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 5 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowDownRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 4 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Absolutely! ValidLeads.ai offers seamless integrations
                      with CRMs like HubSpot, Salesforce, and Zoho. You can
                      choose to auto-sync verified leads in real-time or
                      manually export them in formats like CSV for flexible use.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(5)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Empower Any Business, Any Size
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 5 ? (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-6 h-6 border-white rounded-full md:w-8 md:h-8 border-1">
                            <ArrowDownRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 5 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      If a lead is missing critical fields (like email, phone,
                      or company), our AI flags it immediately. You'll be
                      notified via the dashboard, and the system will suggest
                      enrichment options or automated re-engagement strategies
                      to fill the gaps — keeping your database clean and
                      powerful.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors cursor-pointer border-0 rounded-lg hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(6)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="pr-4 text-lg font-medium text-white md:text-xl">
                      Personalize Your Pipeline Across Teams
                    </h3>
                    <span className="flex-shrink-0 text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? (
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
                  {openFAQ === 6 && (
                    <p className="mt-2 text-sm text-gray-300 md:text-base">
                      Your data security is our top priority. We use
                      industry-leading end-to-end encryption, are GDPR and CCPA
                      compliant, and deploy AI firewalls via Cloudflare to
                      prevent unauthorized access. You maintain full ownership
                      and control over your data at all times.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="w-[95%] md:w-[90%] full pb-6 md:pb-10 faq px-4 md:px-0 py-4 md:py-0 my-0">
        <div className="flex flex-col items-center justify-center w-full h-full pb-10 md:flex-row md:pb-20">
          <div className="w-full md:w-[50%] mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl md:text-left">
              KEYNOTE <br /> SPEAKERS
            </h2>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-end">
            <p className="block text-base text-center text-white md:text-lg md:text-right">
              See what the industry leaders say <br /> about valid leads
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/*Carter Speakers */}
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-white rounded-[30px] p-6 md:p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-xl font-bold text-black md:text-2xl">
              Dr. Emily Carter
            </h3>
            <p className="w-[90%] text-base md:text-lg text-black">
              Chief Ai Scientist, OpenAI
            </p>
          </div>
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-transparent overflow-hidden">
            <img
              src="/images/dr1.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>

          {/* Elon Park */}
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-white rounded-[30px] p-6 md:p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-xl font-bold text-black md:text-2xl">
              Elon Park
            </h3>
            <p className="w-[90%] text-base md:text-lg text-black">
              CTO, DeepMind
            </p>
          </div>
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-transparent overflow-hidden">
            <img
              src="/images/dr2.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>

          {/* Laura Kim */}
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-transparent overflow-hidden">
            <img
              src="/images/dr3.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-white rounded-[30px] p-6 md:p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-xl font-bold text-black md:text-2xl">
              Laura Kim
            </h3>
            <p className="w-[90%] text-base md:text-lg text-black">
              AI Policy Advisor, EU Commission
            </p>
          </div>
          {/* Alan Foster */}
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-transparent overflow-hidden">
            <img
              src="/images/dr4.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>
          <div className="w-auto h-[300px] md:h-[400px] lg:h-[380px] bg-white rounded-[30px] p-6 md:p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-xl font-bold text-black md:text-2xl">
              DR, Alan Foster
            </h3>
            <p className="w-[90%] text-base md:text-lg text-black">
              Stanford AI Lab
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 md:justify-start md:mt-10">
          <Button className="!px-6 md:!px-8 !py-4 md:!py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-base md:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
            And More{" "}
            <span className="ml-2">
              <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
            </span>
          </Button>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-[95%] md:w-[90%] full pb-6 md:pb-10 faq px-4 md:px-0 py-4 md:py-0 my-10 md:my-20">
        <div className="flex flex-col items-center justify-center w-full h-full pb-10 md:flex-row md:pb-20">
          <div className="w-full md:w-[50%] mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl md:text-left">
              WHY US?
            </h2>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-end">
            <p className="block text-base text-center text-white md:text-lg md:text-right">
              The foundation that drives our <br /> technology, our mission, and
              your <br /> results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col w-full h-auto min-h-[200px] md:h-[250px] bg-[#31313171] px-4 md:px-10 pt-4 md:pt-5 pb-4 md:pb-0 rounded-2xl justify-between">
            <div className="flex flex-col h-full md:flex-row">
              <div className="flex flex-col justify-between w-full h-full mb-4 md:w-1/2 md:mb-0">
                <h3 className="mb-2 text-lg text-white md:text-xl md:mb-0">
                  Transparency
                </h3>
                <img
                  src="/images/01.png"
                  className="w-[60%] md:w-[80%] h-auto md:h-1/2 object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full md:items-center md:w-1/2">
                <p className="text-sm text-white md:text-base">
                  We don't operate in a black box. With ValidLeads.ai, every
                  part of your lead pipeline is trackable — from the moment data
                  enters the system to how it's filtered, validated, enriched,
                  and scored.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-auto min-h-[200px] md:h-[250px] bg-[#31313171] px-4 md:px-10 pt-4 md:pt-5 pb-4 md:pb-0 rounded-2xl justify-between">
            <div className="flex flex-col h-full md:flex-row">
              <div className="flex flex-col justify-between w-full h-full mb-4 md:w-1/2 md:mb-0">
                <h3 className="mb-2 text-lg text-white md:text-xl md:mb-0">
                  Automation
                </h3>
                <img
                  src="/images/02.png"
                  className="w-[60%] md:w-[80%] h-auto md:h-1/2 object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full md:items-center md:w-1/2">
                <p className="text-sm text-white md:text-base">
                  Manual processes waste time, money, and focus. That's why
                  ValidLeads.ai automates everything from lead cleaning and
                  deduplication to smart scoring and follow-up sequencing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-auto min-h-[200px] md:h-[250px] bg-[#31313171] px-4 md:px-10 pt-4 md:pt-5 pb-4 md:pb-0 rounded-2xl justify-between">
            <div className="flex flex-col h-full md:flex-row">
              <div className="flex flex-col items-start justify-center w-full mb-4 md:items-center md:w-1/2 md:mb-0">
                <p className="text-sm text-white md:text-base">
                  ValidLeads.ai is built on end-to-end encryption, enforced with
                  Cloudflare AI firewalls, hosted securely via DigitalOcean, and
                  designed to be fully GDPR and CCPA compliant.
                </p>
              </div>
              <div className="flex flex-col items-start justify-between w-full h-full md:items-end md:w-1/2">
                <h3 className="mb-2 text-lg text-white md:text-xl md:mb-0">
                  Security
                </h3>
                <img
                  src="/images/03.png"
                  className="w-[60%] md:w-[80%] h-auto md:h-1/2 object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-auto min-h-[200px] md:h-[250px] bg-[#31313171] px-4 md:px-10 pt-4 md:pt-5 pb-4 md:pb-0 rounded-2xl justify-between">
            <div className="flex flex-col h-full md:flex-row">
              <div className="flex flex-col items-start justify-center w-full mb-4 md:items-center md:w-1/2 md:mb-0">
                <p className="text-sm text-white md:text-base">
                  We help you eliminate clutter, focus on intent-rich contacts,
                  and prioritize those with the highest probability of closing.
                </p>
              </div>
              <div className="flex flex-col items-start justify-between w-full h-full md:items-end md:w-1/2">
                <h3 className="mb-2 text-lg text-white md:text-xl md:mb-0">
                  Result
                </h3>
                <img
                  src="/images/04.png"
                  className="w-[60%] md:w-[80%] h-auto md:h-1/2 object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Users Say */}
      <section className="w-[95%] md:w-[90%] md:max-w-[1200px] full pb-6 md:pb-10 faq px-4 md:px-0 py-4 md:py-0 my-10 md:my-20">
        <div className="flex flex-col items-center justify-center w-full h-full pb-10 md:flex-row md:pb-20">
          <div className="w-full md:w-[50%] mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl md:text-left">
              What Our Users <br /> Say
            </h2>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-end">
            <div className="relative w-[120px] md:w-[150px] z-1000">
              <div className="left-0 swiper-button-prev23 swiper-button-prev z-100"></div>
              <div className=" swiper-button-next23 swiper-button-next z-100 !hover:bg-white !hover:text-black hover:scale-110 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        <style>
          {`
            .testimonial-swiper .swiper-slide {
              transition: all 0.3s ease;
            }
            .card-active {
              background: linear-gradient(135deg, #9403FD 0%, #0147FF 100%) !important;
              box-shadow: 0 10px 30px rgba(148, 3, 253, 0.3) !important;
            }
            .card-next {
              background: #ffffff !important;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1) !important;
            }
            .card-prev {
              background: #1A1A1A !important;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) !important;
            }
            .card-active .card-text {
              color: white !important;
            }
            .card-next .card-text {
              color: black !important;
            }
            .card-prev .card-text {
              color: white !important;
            }
            /* Hide default swiper navigation buttons */
            .testimonial-swiper .swiper-button-next,
            .testimonial-swiper .swiper-button-prev {
              display: none;
            }
          `}
        </style>

        <Swiper
          loop={true}
          slidesPerView={3}
          centeredSlides={true}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next23",
            prevEl: ".swiper-button-prev23",
          }}
          modules={[Navigation]}
          spaceBetween={20}
          className="testimonial-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => {
            // Update card colors based on position
            const slides = swiper.slides;
            slides.forEach((slide) => {
              const card = slide.querySelector(".swiper-slide-content");

              // Remove all card classes
              card?.classList.remove("card-active", "card-next", "card-prev");

              if (slide.classList.contains("swiper-slide-active")) {
                card?.classList.add("card-active");
              } else if (slide.classList.contains("swiper-slide-next")) {
                card?.classList.add("card-next");
              } else if (slide.classList.contains("swiper-slide-prev")) {
                card?.classList.add("card-prev");
              }
            });
          }}
          onSwiper={(swiper) => {
            // Initial setup
            setTimeout(() => {
              const slides = swiper.slides;
              slides.forEach((slide) => {
                const card = slide.querySelector(".swiper-slide-content");

                if (slide.classList.contains("swiper-slide-active")) {
                  card?.classList.add("card-active");
                } else if (slide.classList.contains("swiper-slide-next")) {
                  card?.classList.add("card-next");
                } else if (slide.classList.contains("swiper-slide-prev")) {
                  card?.classList.add("card-prev");
                }
              });
            }, 100);
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  WHAT GREAT LEADS ARE
                </p>
                <p className="text-sm md:text-base card-text">
                  "This is a game changer for our business. We've been able to
                  generate more leads and close more deals than ever before."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="https://img.freepik.com/free-photo/woman-posing-with-bathrobe-spa_23-2148206146.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      Sarah Johnson
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      CEO, TechFlow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  WHAT AN AMAZING <br /> EXPERIENCE
                </p>
                <p className="text-sm md:text-base card-text">
                  "ValidLeads transformed our entire sales process. The
                  AI-powered lead scoring is incredibly accurate."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="http://localhost:5173/images/dr3.png"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      Mike Chen
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      CTO, InnovateLab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  MY BUSINESS HAS <br /> GROWN 300%
                </p>
                <p className="text-sm md:text-base card-text">
                  "The lead quality improvement was immediate. We're closing
                  deals faster than ever."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="https://img.freepik.com/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      Emily Rodriguez
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      Founder, GrowthLab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  I'M IN LOVE WITH <br /> VALID LEADS
                </p>
                <p className="text-sm md:text-base card-text">
                  "The automation features saved us countless hours. Now we
                  focus on closing, not sorting."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="https://img.freepik.com/free-photo/wind-shakes-groom-s-hair-standing-beach-with-waves-splashing-him_8353-7084.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      David Thompson
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      VP Sales, ScaleUp Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  REALLY LOVED IT
                </p>
                <p className="text-sm md:text-base card-text">
                  "Data security and transparency were my main concerns.
                  ValidLeads exceeded expectations on both."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="https://img.freepik.com/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      Alex Kumar
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      Director, StartupHub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[300px] md:h-[400px] w-full rounded-3xl transition-all duration-300">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-4 md:p-5">
                <p className="text-xl font-bold md:text-2xl lg:text-3xl card-text">
                  GAME CHANGING INSIGHTS
                </p>
                <p className="text-sm md:text-base card-text">
                  "The real-time analytics dashboard gives us insights we never
                  had before. Absolutely revolutionary."
                </p>
                <div className="flex flex-row items-center gap-2 pt-3 md:pt-5">
                  <img
                    className="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                    src="https://img.freepik.com/premium-photo/close-up-portrait-businessman_33839-1186.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_items_boosted&w=740"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-semibold md:text-sm card-text">
                      Robert Martinez
                    </p>
                    <p className="text-xs md:text-sm card-text opacity-80">
                      CMO, Digital Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-[95%] md:w-[90%] full pb-6 md:pb-10 faq px-4 md:px-0 py-4 md:py-0 my-10 md:my-20">
        <div className="flex flex-col items-center justify-center w-full h-full pb-10 md:flex-row md:pb-20">
          <div className="w-full md:w-[50%] mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl md:text-left">
              REGISTER <br /> NOW
            </h2>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:justify-end">
            <p className="block text-base text-center text-white md:text-lg md:text-right">
              Secure your spot at Valid Leads <br /> and join the future of Ai{" "}
              <br /> Innovation
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-full">
          <div className="w-full h-[400px] md:h-[500px] rounded-[30px] p-4 md:p-8 box-border flex flex-col items-end justify-center bg-[#31313171]">
            <div className="flex flex-col items-center justify-center w-full h-auto gap-6 md:flex-row md:items-end md:gap-20">
              <div className="w-full pr-0 md:w-1/2 md:pr-10">
                <p className="pb-6 text-lg text-center text-white md:pb-10 md:text-xl md:text-left">
                  Early Bird Pricing Ends In:
                </p>
                <Countdown date={endDate} renderer={renderer} />
              </div>

              <Button className="!px-6 md:!px-8 !py-4 md:!py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-base md:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all w-full md:w-auto">
                Register Now
                <span className="ml-2">
                  <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- ABOUT CTA */}
      <section className="box-border flex flex-col items-center justify-center h-full gap-6 md:gap-10 py-6 md:py-10 px-4 w-[95%] md:w-[90%]">
        <div className="flex flex-col items-start justify-start w-full h-full gap-6 lg:flex-row md:gap-10">
          <div className="w-full lg:w-[50%] h-full flex flex-col items-start justify-start gap-5">
            <h2 className="w-full text-3xl font-semibold text-center text-white md:text-4xl lg:text-5xl lg:text-left">
              We're Here To <br /> Connect And <br /> Assist You
            </h2>
            <p className="text-base text-center text-white md:text-lg lg:text-left">
              Have questions about the summit? Need help with registration or
              travel? Our team is ready to assist you.
            </p>
            <div className="grid items-start justify-start w-full h-full grid-cols-1 gap-5 pt-6 md:grid-cols-2 md:pt-10">
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  Contact Us
                </h2>
                <p className="text-sm text-white md:text-base">+123 456 7890</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  Event Location
                </h2>
                <p className="text-sm text-white md:text-base">
                  123 Main St, Anytown, USA
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  Email
                </h2>
                <p className="text-sm text-white md:text-base">
                  validleads@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  Follow Us
                </h2>
                <div className="flex flex-row items-center justify-start w-full h-full gap-2">
                  <img
                    src="/images/dribbble.png"
                    alt="facebook"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <img
                    src="/images/twitter.png"
                    alt="twitter"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <img
                    src="/images/instagram.png"
                    alt="instagram"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <img
                    src="/images/behance.png"
                    alt="linkedin"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-auto flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start w-full h-full gap-5 bg-[#fff] rounded-md px-4 md:px-8 lg:px-16 py-6 md:py-10">
              <h2 className="text-xl font-bold text-black md:text-2xl">
                GET IN TOUCH
              </h2>
              <p className="text-sm text-black md:text-base">
                We're here to help you. If you have any questions, please don't
                hesitate to contact us.
              </p>
              <form
                className="flex flex-col items-start justify-start w-full h-full gap-5"
                //onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col items-start justify-start w-full h-full gap-5 md:flex-row">
                  <div className="w-full">
                    <input
                      id="name"
                      className="w-full h-full p-2 text-black border-b-1 rounded-0 border-b-black"
                      type="text"
                      placeholder="Name"
                      // {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      id="email"
                      className="w-full h-full p-2 text-black border-b-1 rounded-0 border-b-black"
                      type="email"
                      placeholder="Email"
                      // {...register("email", {
                      //   required: "Email is required",
                      //   pattern: {
                      //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      //     message: "Invalid email address",
                      //   },
                      // })}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <input
                    id="phone"
                    className="w-full h-full p-2 text-black border-b-1 rounded-0 border-b-black"
                    type="text"
                    placeholder="Phone"
                    // {...register("phone", { required: "Phone is required" })}
                  />
                </div>
                <div className="w-full">
                  <textarea
                    id="message"
                    className="w-full p-2 text-black border-b-1 rounded-0 border-b-black"
                    placeholder="Message"
                    // {...register("message", {
                    //   required: "Message is required",
                    // })}
                  />
                </div>
                <Button className="!px-6 md:!px-8 !py-4 md:!py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-base md:text-lg shadow-lg hover:bg-[#7B5AFF] transition-all w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*    ---------------------- MAP */}
      <section className="w-[95%] md:w-[90%] h-full flex flex-col items-center justify-center my-10 md:my-20 px-4">
        <img
          className="object-contain w-full h-full"
          src="/images/map.png"
          alt=""
        />
      </section>
    </main>
  );
}
