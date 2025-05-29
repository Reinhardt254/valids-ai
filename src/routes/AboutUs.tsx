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
    return <span>Early bird pricing has ended!</span>;
  } else {
    return (
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <div className="flex flex-col items-center">
          <div className="font-bold text-white text-8xl">{days}</div>
          <div className="text-sm text-gray-400">Days</div>
        </div>
        <div className="text-4xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-white text-8xl">{hours}</div>
          <div className="text-sm text-gray-400">Hours</div>
        </div>
        <div className="text-4xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-white text-8xl">{minutes}</div>
          <div className="text-sm text-gray-400">Minutes</div>
        </div>
        <div className="text-4xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-white text-8xl">{seconds}</div>
          <div className="text-sm text-gray-400">Seconds</div>
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
    <main className="min-h-screen bg-[#07051A] text-white flex flex-col min-w-screen w-full justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pt-12 pb-8 about-hero h-[700px]">
        <style>
          {`
            .about-hero {
              background-image: url('/images/pricing.png');
              background-size: cover;
              background-position: center;

              /* Group 27183 */

            }
          `}
        </style>
        <div className="text-center w-[90%] h-[90%]  rounded-2xl flex flex-col items-start justify-center about-hero-sect bg-blur-[0px] bg-[#3b21466e] px-20">
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
          <p className="pb-2 text-lg font-bold text-white">validleads.ai</p>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl text-start">
            Smarter B2B Lead <br /> Generation, <br /> Powered by AI
          </h1>
          <p className="mb-6 text-lg text-gray-300 text-start">
            AI that delivers: analyze your data, surface the best leads, and
            automate your outreach. <br />
            ValidLeads is the future of sales prospecting.
          </p>
          <Button className="!px-8 !py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
            See Enterprise Demo{" "}
            <span className="ml-2">
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </Button>
        </div>
        {/* <div className="w-full max-w-3xl mt-8 overflow-hidden shadow-xl rounded-2xl">
          <img
            src="https://validleads.nyc3.digitaloceanspaces.com/images/image-1744528205183-685905958-african-business-male-people-shaking-hands.jpg"
            alt="Business handshake"
            className="object-cover w-full h-64"
          />
        </div> */}
      </section>

      {/* Technology Backbone */}
      <section className="flex flex-col items-center w-full px-4 py-10">
        <h2 className="mb-6 text-4xl font-bold">Our Technology Backbone</h2>
        <div className="flex items-center justify-center w-full">
          <Swiper
            slidesPerView={5}
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
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 5,
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
                <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
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
      <section className="flex flex-row items-stretch justify-center w-[90%] h-auto gap-10 mt-20">
        <div className="cards w-[50%] flex flex-col gap-4 bg-[#3b21466e] p-5 py-8 border-t-2 border-r-1 border-l-1 border-b-0 border-gray-200 rounded-2xl justify-between">
          <div className="flex flex-col gap-4 row">
            <h2 className="text-3xl font-bold text-white">Speakers</h2>
            <div className="flex flex-row gap-4 row">
              <Button className="!p-0 transition-all !bg-white icon !rounded-full !h-12 !w-12">
                <ArrowUpRightIcon className="w-4 h-4 text-[#0147FF]" />
              </Button>
              <div className="text-xl text-white content">
                <p>
                  Hear from global AI leaders, researchers, and entrepreneurs
                  who are defining the future of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-around gap-4">
            <div className="flex flex-row gap-4 stacked">
              <img
                src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-20 h-20 -ml-0 rounded-full cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/close-up-studio-shot-beautiful-young-mixed-race-woman-model-with-curly-dark-hair_273609-13870.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-20 h-20 rounded-full -ml-14 cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera_1098-20801.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-20 h-20 rounded-full -ml-14 cover"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-lovely-young-african-american-woman-with-curly-afro-haircut-smiling-with-happy-pleasant-expression-enjoying-winter-holidays-wearing-sweater-blue-wall_1258-35442.jpg?uid=R146131911&ga=GA1.1.987641957.1730710896&semt=ais_hybrid&w=740"
                className="w-20 h-20 rounded-full -ml-14 cover"
                alt=""
              />
            </div>
            <Button className="!px-8 !py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
              And more
              <ArrowUpRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="cards w-[50%] flex flex-col gap-4">
          <div className="row bg-[#3b21466e] p-5 py-8 border-t-2 border-r-1 border-l-1 border-b-0 border-gray-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-white">Technologies</h2>
            <p className="text-lg text-white">
              Our AI evaluates each lead using a dynamic model trained on
              behavioral signals, role alignment, and engagement patterns. It
              automatically scores and categorizes them into actionable segments
              — Hot, Warm, or Cold — so your team knows exactly who to pursue,
              when, and why.
            </p>
          </div>
          <div className="px-5 py-10 bg-white rounded-2xl row">
            <h2 className="text-3xl font-bold text-black">Securities</h2>
            <p className="text-lg text-black">
              End-to-end encrypted, GDPR-compliant, globally trusted.
            </p>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="w-[90%] full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0 my-20">
        <div className="box-border flex flex-row items-start justify-center w-full h-full gap-10 py-10 max-sm:flex-col">
          <div className="w-full h-full max-sm:w-full">
            <h2 className="mb-8 text-4xl font-semibold text-white max-sm:text-center max-sm:text-3xl max-sm:w-full">
              AGENDA
            </h2>
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 py-5 transition-colors border-0 rounded-lg cursor-pointer hover:bg-gray-800 bg-[#31313171]"
                  onClick={() => toggleFAQ(0)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      Eliminate Bad Data From the Start
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 0 ? (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowUpRightIcon className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowDownRightIcon className="w-4 h-4" />
                        </div>
                      )}
                    </span>
                  </div>
                  {openFAQ === 0 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Make Lead Scoring Smarter, Not Harder
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 1 ? (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowUpRightIcon className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowDownRightIcon className="w-4 h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 1 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Connect to What You Already Use
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 2 ? (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowUpRightIcon className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowDownRightIcon className="w-4 h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 2 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Automate the Grind, Focus on the Close
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowUpRightIcon className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowDownRightIcon className="w-4 h-4" />
                        </div>
                      )}
                    </span>
                  </div>
                  {openFAQ === 3 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Keep Your Data Secure, Always
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 5 ? (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowUpRightIcon className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowDownRightIcon className="w-4 h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 4 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Empower Any Business, Any Size
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      <span className="text-white transition-transform duration-300 transform">
                        {openFAQ === 5 ? (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowUpRightIcon className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                            <ArrowDownRightIcon className="w-4 h-4" />
                          </div>
                        )}
                      </span>
                    </span>
                  </div>
                  {openFAQ === 5 && (
                    <p className="mt-2 text-gray-300">
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
                    <h3 className="text-xl font-medium text-white">
                      Personalize Your Pipeline Across Teams
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowUpRightIcon className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 border-white rounded-full border-1">
                          <ArrowDownRightIcon className="w-4 h-4" />
                        </div>
                      )}
                    </span>
                  </div>
                  {openFAQ === 6 && (
                    <p className="mt-2 text-gray-300">
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
      <section className="w-[90%] full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0 my-0">
        <div className="flex flex-row items-center justify-center w-full h-full pb-20">
          <div className="w-[50%]">
            <h2 className="text-6xl font-bold text-white">
              KEYNOTE <br /> SPEAKERS
            </h2>
          </div>
          <div className="w-[50%] flex items-center justify-end">
            <p className="block text-lg text-white">
              See what the industry leaders say <br /> about valid leads
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-cols-4 gap-4">
          {/*Carter Speakers */}
          <div className="w-auto h-[380px] bg-white rounded-[30px] p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-2xl font-bold text-black">
              Dr. Emily Carter
            </h3>
            <p className="w-[90%] text-lg text-black">
              Chief Ai Scientist, OpenAI
            </p>
          </div>
          <div className="w-auto h-[380px] bg-transparentoverflow-hidden">
            <img
              src="/images/dr1.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>

          {/* Elon Park */}
          <div className="w-auto h-[380px] bg-white rounded-[30px] p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-2xl font-bold text-black">Elon Park</h3>
            <p className="w-[90%] text-lg text-black">CTO, DeepMind</p>
          </div>
          <div className="w-auto h-[380px] bg-transparentoverflow-hidden">
            <img
              src="/images/dr2.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>

          {/* Laura Kim */}
          <div className="w-auto h-[380px] bg-transparentoverflow-hidden">
            <img
              src="/images/dr3.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>
          <div className="w-auto h-[380px] bg-white rounded-[30px] p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-2xl font-bold text-black">Laura Kim</h3>
            <p className="w-[90%] text-lg text-black">
              AI Policy Advisor, EU Commission
            </p>
          </div>
          {/* Alan Foster */}
          <div className="w-auto h-[380px] bg-transparentoverflow-hidden">
            <img
              src="/images/dr4.png"
              className="object-cover object-top w-full h-full rounded-[30px] filter grayscale"
              alt=""
            />
          </div>
          <div className="w-auto h-[380px] bg-white rounded-[30px] p-8 box-border flex flex-col items-start justify-between">
            <h3 className="w-2/3 text-2xl font-bold text-black">
              DR, Alan Foster
            </h3>
            <p className="w-[90%] text-lg text-black">Stanford AI Lab</p>
          </div>
        </div>

        <div className="flex items-center justify-start w-full mt-10">
          <Button className="!px-8 !py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
            And More{" "}
            <span className="ml-2">
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </section>

      <section className="w-[90%] full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0 my-20">
        <div className="flex flex-row items-center justify-center w-full h-full pb-20">
          <div className="w-[50%]">
            <h2 className="text-6xl font-bold text-white">WHY US?</h2>
          </div>
          <div className="w-[50%] flex items-center justify-end">
            <p className="block text-lg text-white">
              The foundation that drives our <br /> technology, our mission, and
              your <br /> results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col w-full h-[250px] bg-[#31313171] px-10 pt-5  rounded-2xl justify-between">
            <div className="flex flex-row h-full">
              <div className="flex flex-col justify-between w-1/2 h-full">
                <h3 className="text-white">Transparency</h3>
                <img
                  src="/images/01.png"
                  className="w-[80%] h-1/2 contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="text-white">
                  We don't operate in a black box. With ValidLeads.ai, every
                  part of your lead pipeline is trackable — from the moment data
                  enters the system to how it's filtered, validated, enriched,
                  and scored.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-[250px] bg-[#31313171] px-10 pt-5  rounded-2xl justify-between">
            <div className="flex flex-row h-full">
              <div className="flex flex-col justify-between w-1/2 h-full">
                <h3 className="text-white">Automation</h3>
                <img
                  src="/images/02.png  "
                  className="w-[80%] h-1/2 contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="text-white">
                  Manual processes waste time, money, and focus. That's why
                  ValidLeads.ai automates everything from lead cleaning and
                  deduplication to smart scoring and follow-up sequencing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-[250px] bg-[#31313171] px-10 pt-5  rounded-2xl justify-between">
            <div className="flex flex-row h-full">
              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="text-white">
                  ValidLeads.ai is built on end-to-end encryption, enforced with
                  Cloudflare AI firewalls, hosted securely via DigitalOcean, and
                  designed to be fully GDPR and CCPA compliant.
                </p>
              </div>
              <div className="flex flex-col items-end justify-between w-1/2 h-full">
                <h3 className="text-white">Security</h3>
                <img
                  src="/images/03.png"
                  className="w-[80%] h-1/2 contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-[250px] bg-[#31313171] px-10 pt-5  rounded-2xl justify-between">
            <div className="flex flex-row h-full">
              <div className="flex flex-col items-center justify-center w-1/2">
                <p className="text-white">
                  We help you eliminate clutter, focus on intent-rich contacts,
                  and prioritize those with the highest probability of closing.
                </p>
              </div>
              <div className="flex flex-col items-end justify-between w-1/2 h-full">
                <h3 className="text-white">Result</h3>
                <img
                  src="/images/04.png"
                  className="w-[80%] h-1/2 contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0 my-20">
        <div className="flex flex-row items-center justify-center w-full h-full pb-20">
          <div className="w-[50%]">
            <h2 className="text-6xl font-bold text-white">What Our Users Say</h2>
          </div>
          <div className="w-[50%] flex items-center justify-end">
            <div className="relative w-[150px] z-1000">
            <div className="left-0 swiper-button-prev23 swiper-button-prev z-100"></div>
            <div className=" swiper-button-next23 swiper-button-next z-100 !hover:bg-white"></div>
            </div>
          </div>
        </div>  

        <Swiper
          loop={true}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next23',
            prevEl: '.swiper-button-prev23',
          }}
          modules={[Navigation]}
          spaceBetween={10}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content bg-[#31313171] h-[350px] w-[350px] rounded-3xl">
              <div className="flex flex-col items-start justify-center w-full h-full gap-2 p-5">
                <p className="text-3xl text-white">GAME CHANGING INSIGHTS</p>
                <p className="text-white">"This is a game changer for our business. We've been able to generate more leads and close more deals than ever before."</p>
                <div className="flex flex-row items-center gap-2 pt-5">
                  <img className="object-cover w-10 h-10 rounded-full" src="http://localhost:5173/images/dr3.png" alt="" />
                  <div className="flex flex-col items-start justify-start gap-1"> 
                    <p className="text-sm text-white">John Doe</p>
                    <p className="text-sm text-white">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-[90%] full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0 my-0">
        <div className="flex flex-row items-center justify-center w-full h-full pb-20">
          <div className="w-[50%]">
            <h2 className="text-6xl font-bold text-white">
              REGISTER <br /> NOW
            </h2>
          </div>
          <div className="w-[50%] flex items-center justify-end">
            <p className="block text-lg text-white">
              Secure your spot at Valid Leads <br /> and join the future of Ai{" "}
              <br /> Innovation
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-full">
          <div className="w-full h-[500px] rounded-[30px] p-8 box-border flex flex-col items-end justify-center bg-[#31313171]">
            <div className="flex flex-row items-end justify-center w-full h-auto gap-20">
              <div className="w-1/2 pr-10">
                <p className="pb-10 text-xl text-white">
                  Early Bird Pricing Ends In:
                </p>
                <Countdown date={endDate} renderer={renderer} />
              </div>

              <Button className="!px-8 !py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
                Register Now
                <span className="ml-2">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- ABOUT CTA */}
      <section
        className="box-border flex flex-col items-center justify-center h-full gap-10 py-10 max-sm:pt-8 w-[90%]"
      >
        <div className="flex flex-row items-start justify-start w-full h-full gap-10 max-sm:flex-col">
          <div className="w-[50%] h-full flex flex-col items-start justify-start gap-5 max-sm:w-full">
            <h2 className="text-5xl font-semibold text-white max-sm:text-center max-sm:text-2xl max-sm:w-full">
              We're Here To <br /> Connect And <br /> Assist You
            </h2>
            <p className="text-lg text-white">
            Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
            </p>
            <div className="grid items-start justify-start w-full h-full grid-cols-2 gap-5 pt-10">
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <p className="text-white">+123 456 7890</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-2xl font-bold text-white">Event Location</h2>
                <p className="text-white">123 Main St, Anytown, USA</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-2xl font-bold text-white">Email</h2>
                <p className="text-white">validleads@gmail.com</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                <h2 className="text-2xl font-bold text-white">Follow Us</h2>
                <div className="flex flex-row items-center justify-start w-full h-full gap-2">
                  <img src="/images/dribbble.png" alt="facebook" />
                  <img src="/images/twitter.png" alt="twitter" />
                  <img src="/images/instagram.png" alt="instagram" />
                  <img src="/images/behance.png" alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-[50%] h-auto flex flex-col items-start justify-start gap-5 max-sm:w-full`}
          >
            <div className="flex flex-col items-start justify-start w-full h-full gap-5 bg-[#fff] rounded-md px-16 py-10 max-sm:px-4 max-sm:py-4">
              <h2 className="text-2xl font-bold text-black">GET IN TOUCH</h2>
              <p className="text-black">
                We're here to help you. If you have any questions, please don't
                hesitate to contact us.
              </p>
              <form
                className="flex flex-col items-start justify-start w-full h-full gap-5"
                //onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-row items-start justify-start w-full h-full gap-5">
                  <div className="w-full">
                    <input
                      id="name"
                      className="w-full h-full p-2 text-black border-b-1 rounded-0 border-b-black"
                      type="text"
                      placeholder="Name"
                      // {...register("name", { required: "Name is required" })}
                    />
                    {/* {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )} */}
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
                    {/* {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )} */}
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
                  {/* {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )} */}
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
                  {/* {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )} */}
                </div>
                <Button className="!px-8 !py-6 !rounded-full bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*    ---------------------- MAP */}
      <section className="w-[90%] h-full flex flex-col items-center justify-center my-20">
        <img className="object-contain w-full h-full" src="/images/map.png" alt="" />
      </section>
    </main>
  );
}
