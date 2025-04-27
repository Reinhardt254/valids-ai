import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";


import { useState } from "react";

import 'swiper/swiper-bundle.css';

export function HomePage() {
  const isAuthenticated = false; // Replace with your authentication logic

  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(index === openFAQ ? 0 : index);
  };

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0.6, // how much should be visible before triggering
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const { ref: powerTextRef, inView: powerTextInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const { ref: comparissHeaderRef, inView: comparissHeaderInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const { ref: securityRef, inView: securityInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const { ref: redifiningRef, inView: redifiningInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const { ref: possibilitiesRef, inView: possibilitiesInView } = useInView({
    triggerOnce: true, // animate ONLY the first time it comes into view
    threshold: 0, // trigger immediately when any part becomes visible
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasAnimatedText, setHasAnimatedText] = useState(false);
  const [hasAniamtedPowerText, setHasAniamtedPowerText] = useState(false);
  const [hasAnimatedPowerHeader, setHasAnimatedPowerHeader] = useState(false);
  const [hasAnimatedcomparissHeader, setHasAnimatedcomparissHeader] =
    useState(false);
  const [hasAnimatedsecurity, setHasAnimatedsecurity] = useState(false);
  const [hasAnimatedredifining, setHasAnimatedredifining] = useState(false);
  const [hasTransFormed, setHasTransFormed] = useState(false);

  if (textInView && !hasAnimatedText) {
    setHasAnimatedText(true);
  }

  if (cardInView && !hasAnimated) {
    setHasAnimated(true);
  }

  if (powerTextInView && !hasAniamtedPowerText) {
    setHasAniamtedPowerText(true);
  }

  if (powerTextInView && !hasAnimatedPowerHeader) {
    setHasAnimatedPowerHeader(true);
  }

  if (comparissHeaderInView && !hasAnimatedcomparissHeader) {
    setHasAnimatedcomparissHeader(true);
  }

  if (securityInView && !hasAnimatedsecurity) {
    setHasAnimatedsecurity(true);
  }

  if (redifiningInView && !hasAnimatedredifining) {
    setHasAnimatedredifining(true);
  }

  if (possibilitiesInView && !hasTransFormed) {
    setHasTransFormed(true);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-auto bg-transparent ">
      {/*   ---------------------- Hero Section ---------------------- */}
      <section className="relative flex flex-col items-center w-full h-auto overflow-visible mt-28">
        <div className="absolute top-[-7rem] left-0 z-10 flex items-center justify-center w-full h-[calc(100%+10rem)]  hero-video">
          <video
            src="/public/videos/hero.mp4"
            autoPlay
            muted
            loop
            className="relative object-cover w-full h-full"
          ></video>
        </div>
        <div
          ref={textRef}
          className={`relative z-20 flex flex-col items-center justify-center px-4 py-5 sm:p-6 sm:pb-20 h-full w-11/12 max-w-[1000px] ${
            hasAnimatedText ? "animate-text" : ""
          }`}
        >
          <h3 className="text-5xl font-light leading-normal text-center text-white capitalize">
            The End of Fake Leads Starts Here
          </h3>
          <div className="w-full max-w-3xl mt-2 text-xl font-light text-center text-white uppercase ">
            <p>From clicks to clients — without the guesswork.</p>
          </div>

          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 py-8">
                <p className="w-1/2 text-lg font-light text-center text-white capitalize">
                  AI that scores, verifies, and prioritizes leads—automatically,
                  detect duplicates, match roles, and predict engagement. No
                  more guesswork
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="px-6 py-3 text-white hero-btn">
                    {isAuthenticated ? (
                      <Link to={`/dashboard/`}>Go to Dashboard</Link>
                    ) : (
                      <Link to="/login">Join the waitlist</Link>
                    )}
                  </button>
                  <button className="px-6 py-3 text-white bg-transparent border border-white hero-btn-2 btn-transparent-2">
                    {isAuthenticated ? (
                      <Link to={`/dashboard/`}>Go to Dashboard</Link>
                    ) : (
                      <Link to="/login">Get Early Access</Link>
                    )}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 py-8">
                <p className="w-1/2 text-lg font-light text-center text-white capitalize">
                  AI that scores, verifies, and prioritizes leads—automatically,
                  detect duplicates, match roles, and predict engagement. No
                  more guesswork
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="px-6 py-3 text-white hero-btn">
                    {isAuthenticated ? (
                      <Link to={`/dashboard/`}>Go to Dashboard</Link>
                    ) : (
                      <Link to="/login">Join the waitlist</Link>
                    )}
                  </button>
                  <button className="px-6 py-3 text-white bg-transparent border border-white hero-btn-2 btn-transparent-2">
                    {isAuthenticated ? (
                      <Link to={`/dashboard/`}>Go to Dashboard</Link>
                    ) : (
                      <Link to="/login">Get Early Access</Link>
                    )}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*   ---------------------- Stats Section ---------------------- */}
      <section className="relative z-30 w-full h-auto mx-0 bg-transparent shadow-lg mb-38">
        <img
          src="/public/images/stats.png"
          alt="Background"
          className="relative w-full h-auto px-0 z-index-0"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7  z-10 py-10  absolute top-[50%] left-0 px-0">
          <div
            data-aos="fade-in"
            ref={cardRef}
            className={`flex flex-col w-full h-full gap-4 px-10 py-10 rounded-lg bg-blur  transition-all duration-700 ${
              hasAnimated ? "animate-card" : " "
            }`}
          >
            <img
              className="w-15 h-15"
              src="/public/images/icon.png"
              alt="Lead Intelligence"
            />
            <h3 className="text-xl font-bold text-white">Lead Intelligence</h3>
            <p className="text-white h-1/2">
              Our AI instantly analyzes and categorizes uploaded leads based on
              their potential and relevance.
            </p>
            <Link to="/login" className="text-white rounded-md">
              Learn More
            </Link>
          </div>

          <div
            data-aos="fade-in"
            ref={cardRef}
            className={`flex flex-col w-full h-full gap-4 px-10 py-10 rounded-lg bg-blur  transition-all duration-700 ${
              hasAnimated ? "animate-card" : " "
            }`}
          >
            <img
              className="w-15 h-15"
              src="/public/images/icon (1).png"
              alt="Focus on what converts"
            />
            <h3 className="text-xl font-bold text-white">Smart Targeting</h3>
            <p className="text-white h-1/2">
              Select leads by industry, role, location, or intent with pinpoint
              accuracy for better conversions.
            </p>
            <Link to="/login" className="text-white rounded-md">
              Learn More
            </Link>
          </div>

          <div
            data-aos="fade-in"
            ref={cardRef}
            className={`flex flex-col w-full h-full gap-4 px-10 py-10 rounded-lg bg-blur  transition-all duration-700 ${
              hasAnimated ? "animate-card" : " "
            }`}
          >
            <img
              className="w-15 h-15"
              src="/public/images/icon (2).png"
              alt="Focus on what converts"
            />
            <h3 className="text-xl font-bold text-white">
              Focus on what converts
            </h3>
            <p className="text-white h-1/2">
              Leads are automatically scored and ranked as Hot, Warm, or Cold to
              help you prioritize follow-ups.
            </p>
            <Link to="/login" className="text-white rounded-md">
              Learn More
            </Link>
          </div>

          <div
            data-aos="fade-in"
            ref={cardRef}
            className={`flex flex-col w-full h-full gap-4 px-10 py-10 rounded-lg bg-blur  transition-all duration-700 ${
              hasAnimated ? "animate-card" : " "
            }`}
          >
            <img
              className="w-15 h-15"
              src="/public/images/icon (3).png"
              alt="Instant Verification"
            />
            <h3 className="text-xl font-bold text-white">
              Instant Verification
            </h3>
            <p className="text-white h-1/2">
              Every email, phone number, and profile is validated for accuracy
              and deliverability.
            </p>
            <Link to="/login" className="text-white rounded-md">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/*   ---------------------- AI Leads Section ---------------------- */}
      <section className="relative w-full h-auto mx-0 mt-20 mb-32 bg-transparent shadow-lg">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 mb-10">
          <h3 className="text-5xl font-light text-white">
            Real Problems. Real Solutions. Powered by AI
          </h3>
          <p className="text-xl text-white">
            Discover how ValidLeads.ai eliminates the biggest lead generation
            headaches — automatically.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 z-10 transform -translate-y-1/2 bot-swiper-button-prev swiper-button-prev top-1/2"></div>
          <div
            className="absolute top-0 left-0 flex flex-row items-center justify-center w-screen h-full"
            style={{ maxWidth: "100vw", margin: "0 calc(-50vw + 50%)" }}
          >
            <img
              src="/public/images/Ellipse 63.png"
              alt="ai-leads"
              className="object-fill w-1/2 h-full"
            />
            <img
              src="/public/images/Ellipse 64.png"
              alt="ai-leads"
              className="object-fill w-1/2 h-full"
            />
          </div>
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={20}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".bot-swiper-button-prev",
              nextEl: ".bot-swiper-button-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[90%] h-full box-border flex items-stretch real-swiper mx-auto"
          >
            <SwiperSlide className="relative z-10 flex items-center justify-center w-full h-full my-5 overflow-visible translate-x-0 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border flex flex-row items-center justify-center w-[95%] h-full gap-5 z-20 relative overflow-visible">
                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bot Clicks & <br /> Fake <br /> Engagement.
                  </h3>
                  <p className="text-white w-[70%]">
                    Your ads get clicks, but not from real buyers — wasting ad
                    spend.
                  </p>

                  <img
                    src="/public/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-100"
                  />
                </div>

                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green z-5 relative">
                  <h3 className="text-2xl font-bold text-white">
                    Validleads AI <br /> Filters Real <br /> Leads Only
                  </h3>
                  <p className="text-white w-[70%]">
                    Our AI flags suspicious patterns and filters out non-human
                    traffic.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative z-50 flex items-center justify-center w-full h-full my-5 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border relative flex justify-center w-[95%] h-full gap-5 flex-row items-center z-60">
                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bad or <br /> Incomplete <br /> Leads
                  </h3>
                  <p className="text-white w-[70%]">
                    Leads with missing emails, fake job titles, or invalid phone
                    numbers.
                  </p>
                  <img
                    src="/public/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-10"
                  />
                </div>

                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green relative z-5">
                  <h3 className="text-2xl font-bold text-white">
                    Enriched & <br /> Verified <br /> Data
                  </h3>
                  <p className="text-white w-[70%]">
                    ValidLeads.ai auto-verifies and enriches every field for
                    you.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative z-10 flex items-center justify-center w-full h-full my-5 overflow-visible translate-x-0 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border flex flex-row items-center justify-center w-[95%] h-full gap-5 z-20 relative overflow-visible">
                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bot Clicks & <br /> Fake <br /> Engagement.
                  </h3>
                  <p className="text-white w-[70%]">
                    Your ads get clicks, but not from real buyers — wasting ad
                    spend.
                  </p>

                  <img
                    src="/public/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-100"
                  />
                </div>

                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green z-5 relative">
                  <h3 className="text-2xl font-bold text-white">
                    Validleads AI <br /> Filters Real <br /> Leads Only
                  </h3>
                  <p className="text-white w-[70%]">
                    Our AI flags suspicious patterns and filters out non-human
                    traffic.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative z-50 flex items-center justify-center w-full h-full my-5 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border relative flex justify-center w-[95%] h-full gap-5 flex-row items-center z-60">
                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bad or <br /> Incomplete <br /> Leads
                  </h3>
                  <p className="text-white w-[70%]">
                    Leads with missing emails, fake job titles, or invalid phone
                    numbers.
                  </p>
                  <img
                    src="/public/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-10"
                  />
                </div>

                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green relative z-5">
                  <h3 className="text-2xl font-bold text-white">
                    Enriched & <br /> Verified <br /> Data
                  </h3>
                  <p className="text-white w-[70%]">
                    ValidLeads.ai auto-verifies and enriches every field for
                    you.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="absolute right-0 z-10 transform -translate-y-1/2 bot-swiper-button-next swiper-button-next top-1/2"></div>
        </div>
      </section>

      {/*   ---------------------- Manual Lead Gen vs. ValidLeads.ai Section ---------------------- */}
      <section className="relative w-full h-auto mx-0 mt-0 mb-32 bg-transparent shadow-lg">
        <div
          ref={comparissHeaderRef}
          className={`flex flex-col items-center justify-center w-full h-full gap-4 mb-10 ${
            hasAnimatedcomparissHeader ? "left-slide" : ""
          }`}
        >
          <h3 className="text-5xl font-bold text-white">
            Manual Lead Gen vs. ValidLeads.ai
          </h3>
          <p className="text-2xl text-white">
            The Game-Changer You've Been Waiting For
          </p>
        </div>

        <div
          ref={comparissHeaderRef}
          className={`flex flex-row items-center justify-center w-full h-full gap-0 mb-0 ${
            hasAnimatedcomparissHeader ? "right-slide" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-0 mb-0 bg-white mt-7 rounded-l-2xl">
            {/* <h3 className="pt-0 pb-2 text-2xl font-bold text-trans ">
              Metrics
            </h3> */}
            <p className="w-full px-4 py-2 pl-20 text-start text-md">Time</p>
            <p className="bg-[#D9D9D9] text-start px-4 pl-20 py-2 w-full text-md">
              Accuracy
            </p>
            <p className="w-full px-4 py-2 pl-20 text-start text-md">
              Cost Efficiency
            </p>
            <p className="bg-[#D9D9D9] text-start px-4 pl-20 py-2 w-full text-md">
              Visibility
            </p>
            <p className="w-full px-4 py-2 pl-20 text-start text-md">Updates</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full gap-0 mb-0 bg-[#38953B] rounded-lg py-5 pb-8">
            <h3 className="pt-0 pb-2 text-2xl font-bold text-white">
              ValidLeads.ai
            </h3>
            <p className="text-white bg-[#19396a52] w-full text-center px-4 py-2 text-md">
              Few seconds with full automation
            </p>
            <p className="py-2 text-white text-md">
              Verified via APIs & AI analysis
            </p>
            <p className="text-white bg-[#19396a52] w-full text-center px-4 py-2 text-md">
              ROI-focused: Only actionable leads
            </p>
            <p className="py-2 text-white text-md">
              Dashboard scoring + re-engagement alerts
            </p>
            <p className="text-white bg-[#19396a52] w-full text-center px-4 py-2 text-md mb-0">
              Dynamic, always improving via AI
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full pb-3">
            <h3 className="pt-0 pb-2 text-2xl font-bold text-white">
              Manual Lead Gen
            </h3>

            <div className="flex flex-col items-center justify-center w-full h-full gap-0 mb-0 bg-white rounded-r-2xl">
              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/public/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 bg-[#D9D9D9] py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/public/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/public/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 bg-[#D9D9D9] py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/public/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/public/images/close.png"
                  alt="x icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- Power Features Built for Serious B2B Growth Section ---------------------- */}
      <section>
        <div className="flex flex-col items-start justify-center w-full h-full gap-5 mb-10">
          <h2
            ref={powerTextRef}
            className={`w-1/2 text-5xl font-bold text-white ${
              hasAnimatedPowerHeader ? "power-header" : ""
            }`}
          >
            Power Features Built for Serious B2B Growth
          </h2>
          <div className="flex flex-row items-center justify-center w-full h-full gap-16 mb-10">
            <div className="flex flex-col w-[40%] gap-4">
              <p
                ref={powerTextRef}
                className={`text-white ${
                  hasAnimatedPowerHeader ? "power-header" : ""
                }`}
              >
                Unlock the full potential of your lead generation with smart,
                scalable, AI-driven tools.
              </p>
              <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-10">
                <img
                  className="object-contain w-full h-full"
                  src="/public/images/power.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="grid items-center justify-center w-[60%] grid-cols-3 gap-4">
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Real-Time <br /> Lead <br /> Filtering
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  AI Lead <br /> Scoring (Hot / <br /> Warm / Cold)
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Multi- <br /> Channel <br /> Validation
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  CRM & Ad <br /> Platform <br /> Integrations
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Lead <br /> Warmups & <br /> Follow-ups
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col gap-4 rounded-md bg-[#131313] ${
                  hasAniamtedPowerText ? "animate-card" : ""
                }`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Verified <br /> Lead <br /> Marketplace
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/public/images/power-arrow.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end w-full h-full gap-4">
            <div className="flex flex-col items-end justify-center w-[60%] h-full gap-4">
              <h2 className="text-4xl font-semibold text-right text-white">
                From Raw Data to <br /> Revenue - In 3 easy Steps
              </h2>
              <p className="text-right text-white">
                Our AI agents take your messy, unverified leads and turn them
                into clean, scored, and sales-ready opportunities —
                automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- Lead Generation Process Section ---------------------- */}
      <section className="w-full h-full">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32">
            <div className="flex flex-col items-center justify-center w-full h-[350px] gap-4">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg">
                <h2 className="text-4xl font-semibold text-white">
                  Upload or Sync Your <br /> Leads
                </h2>
                <p className="text-2xl text-white uppercase">
                  Bring your own data — upload CSVs, PDFs, or sync directly from
                  your CRM or Google Ads account.
                </p>

                <img
                  src="/public/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26"
                />
                <img
                  src="/public/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px]"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32">
            <div className="flex flex-col items-center justify-center w-full h-[350px] gap-4">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg">
                <h2 className="text-4xl font-semibold text-white">
                  Upload or Sync Your <br /> Leads
                </h2>
                <p className="text-2xl text-white uppercase">
                  Bring your own data — upload CSVs, PDFs, or sync directly from
                  your CRM or Google Ads account.
                </p>

                <img
                  src="/public/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26"
                />
                <img
                  src="/public/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px]"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32">
            <div className="flex flex-col items-center justify-center w-full h-[350px] gap-4">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg">
                <h2 className="text-4xl font-semibold text-white">
                  Upload or Sync Your <br /> Leads
                </h2>
                <p className="text-2xl text-white uppercase">
                  Bring your own data — upload CSVs, PDFs, or sync directly from
                  your CRM or Google Ads account.
                </p>

                <img
                  src="/public/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26"
                />
                <img
                  src="/public/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/*   ---------------------- Powered by Section ---------------------- */}
      <section className="w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full gap-0">
          <h2 className="text-2xl font-semibold text-white">POWERED BY</h2>
          <Swiper
            slidesPerView={5}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-auto"
          >
            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/zoho.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/hubspot.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/apollo.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/neverbounce.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/zoho.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/hubspot.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/apollo.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
                <img
                  className="object-contain w-auto h-full"
                  src="/public/images/neverbounce.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*---------------------- Security You Can Count On Section ---------------------- */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 py-10">
        <h2 className="text-4xl font-semibold text-white">
          Security You Can Count On
        </h2>
        <div
          ref={securityRef}
          className="flex flex-row w-full gap-10 h-[400px]"
        >
          <div
            ref={securityRef}
            className={`flex flex-col items-center justify-center h-full gap-0 w-[40%] ${
              hasAnimatedsecurity ? "left-slide" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-0">
              <img
                src="/public/images/shield.png"
                alt="icon"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div
            ref={securityRef}
            className={`flex flex-col items-center justify-center h-full gap-0 w-[60%] ${
              hasAnimatedsecurity ? "right-slide" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-5">
              <h3 className="text-lg font-semibold text-white line-height-10">
                <span className="text-2xl font-bold">
                  End-to-End Encryption:
                </span>{" "}
                All your lead data is protected during transfer and storage.
              </h3>
              <h3 className="text-lg font-semibold text-white line-height-10">
                <span className="text-2xl font-bold">
                  GDPR & CCPA Compliant:
                </span>{" "}
                You're always in control — full transparency, no surprises.
              </h3>
              <h3 className="text-lg font-semibold text-white line-height-10">
                <span className="text-2xl font-bold">
                  Firewall & CDN via Cloudflare:
                </span>{" "}
                Fast, secure, and always protected from threats.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- AI That Understands Leads Like Humans Do — Only Faster Section ---------------------- */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-20 py-10">
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 py-10">
          <div className="flex flex-row items-center justify-center w-full h-full gap-10 py-10">
            <h2 className="text-4xl font-semibold text-white">
              AI That Understands Leads Like Humans Do — Only Faster
            </h2>
            <p className="text-lg text-white">
              Our GPT-4-powered AI module performs intelligent lead analysis —
              matching roles, detecting duplicates, evaluating relevance, and
              generating re-engagement strategies with surgical precision.
            </p>
          </div>
          <div className="flex flex-row w-full h-full gap-10">
            <div className="w-[40%]">
              <img
                src="/public/images/ai.png"
                alt="icon"
                className="object-contain w-full h-full"
              />
            </div>

            <div className="w-[60%] h-full relative">
              <div className="absolute left-0 ai-swiper-button-prev swiper-button-prev"></div>
              <div className="absolute right-0 ai-swiper-button-next swiper-button-next"></div>

              <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".ai-swiper-button-next",
                  prevEl: ".ai-swiper-button-prev",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full"
              >
                <SwiperSlide className="w-full h-full">
                  <div className="relative flex flex-col items-center justify-center w-full gap-10">
                    <div className="flex flex-row items-center justify-center w-full h-full gap-10">
                      <p className="text-lg text-white">
                        Adaptive prompt engineering for different industries
                        <span className="text-2xl font-bold">
                          AI categorization: Hot, Warm, Cold
                        </span>
                        Predictive insights based on user behavior
                      </p>

                      <div className="flex flex-row items-center justify-center w-full h-full gap-10"></div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-full h-full gap-10">
                      <div className="w-[40%]">
                        <div className="p-5 flex flex-col gap-4 rounded-md bg-[#131313]">
                          <h2 className="w-full text-lg font-bold text-white text-semibold">
                            Threat <br /> Detection <br /> Accuracy
                          </h2>
                          <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                            <img
                              src="/public/images/power-arrow.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[60%] flex flex-col items-start justify-start gap-4">
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">01 </span>{" "}
                          <span>
                            Link directly your Salesforce, HubSpot and Zoho CRMs
                            without any hassle
                          </span>
                        </p>
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">02 </span>{" "}
                          <span>
                            Direct CSV, Excel format download also available.
                          </span>{" "}
                        </p>
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">03 </span>{" "}
                          <span>
                            Our platform syncs directly with your CRM, enriches
                            with the best APIs in the business, and ensures
                            global compliance. Whether you're in India or North
                            America — we've got your back.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full h-full">
                  <div className="relative flex flex-col items-center justify-center w-full gap-10">
                    <div className="flex flex-row items-center justify-center w-full h-full gap-10">
                      <p className="text-lg text-white">
                        Adaptive prompt engineering for different industries
                        <span className="text-2xl font-bold">
                          AI categorization: Hot, Warm, Cold
                        </span>
                        Predictive insights based on user behavior
                      </p>

                      <div className="flex flex-row items-center justify-center w-full h-full gap-10"></div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-full h-full gap-10">
                      <div className="w-[40%]">
                        <div className="p-5 flex flex-col gap-4 rounded-md bg-[#131313]">
                          <h2 className="w-full text-lg font-bold text-white text-semibold">
                            Threat <br /> Detection <br /> Accuracy
                          </h2>
                          <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                            <img
                              src="/public/images/power-arrow.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[60%] flex flex-col items-start justify-start gap-4">
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">01 </span>{" "}
                          <span>
                            Link directly your Salesforce, HubSpot and Zoho CRMs
                            without any hassle
                          </span>
                        </p>
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">02 </span>{" "}
                          <span>
                            Direct CSV, Excel format download also available.
                          </span>{" "}
                        </p>
                        <p className="flex flex-row items-start justify-start gap-4 text-white text-md">
                          <span className="font-bold">03 </span>{" "}
                          <span>
                            Our platform syncs directly with your CRM, enriches
                            with the best APIs in the business, and ensures
                            global compliance. Whether you're in India or North
                            America — we've got your back.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- Redefining Possibilities Through AI Section ---------------------- */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 py-10 pb-20 mb-20 possibilities-section">
        <div className="flex flex-row items-center justify-center w-full h-full gap-10">
          <div
            ref={redifiningRef}
            className={`w-[50%] h-full flex flex-col items-start justify-start gap-10 ${
              hasAnimatedredifining ? "right-slide" : ""
            }`}
          >
            <h2 className="mb-0 text-4xl font-semibold text-white">
              Redefining Possibilities <br />
              Through AI
            </h2>

            <div className="flex flex-col items-start justify-start gap-4">
              <p className="text-white">
                Unlock a new era of innovation with Valid Leads, where
                artificial intelligence transforms limitations into
                opportunities. Redefine what's possible through.
              </p>
              <div className="flex flex-row items-center justify-center gap-4 pt-4">
                <button className="text-white hero-btn">Learn More</button>
                <button className="flex flex-row items-center justify-center gap-2 text-white possibilities-vid-btn">
                  <img src="/public/images/play-icon.png" alt="icon" />
                  Watch a Video
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-2xl font-bold text-white">85%</p>
                  <h4 className="text-white">Satisfaction Ratio</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-2xl font-bold text-white">70%</p>
                  <h4 className="text-white">Cost Savings</h4>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-4">
                <button className="possibilities-btn">Smarter</button>
                <button className="possibilities-btn">Vision</button>
                <button className="possibilities-btn">Business</button>
              </div>
            </div>
          </div>
          <div
            ref={redifiningRef}
            className={`w-[50%] h-full ${
              hasAnimatedredifining ? "up-slide" : ""
            }`}
          >
            <img
              className="object-contain w-full h-full"
              src="/public/images/stats-section.png"
              alt="icon"
            />
          </div>
        </div>
      </section>

      {/*   ---------------------- Frequently Asked Questions Section ---------------------- */}
      <section className="w-full h-full pb-26 faq">
        <div className="flex flex-row items-start justify-center w-full h-full gap-10 py-10">
          <div className="w-[50%] h-full">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(0)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      What industries can benefit?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 0 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 0 && (
                    <p className="mt-2 text-gray-300">
                      Validleads is designed to work with any industry that
                      deals with lead generation and management. Whether you're
                      in the tech, finance, healthcare, or any other sector, our
                      platform can help you streamline your lead generation
                      process and improve your customer acquisition efforts.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(1)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      How can AI solutions benefit my business?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 1 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 1 && (
                    <p className="mt-2 text-gray-300">
                      AI solutions can enhance your business by automating
                      repetitive tasks, improving decision-making with data
                      insights, personalizing customer experiences, and
                      increasing operational efficiency.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(2)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      How secure is AI for managing data?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 2 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 2 && (
                    <p className="mt-2 text-gray-300">
                      Our AI systems implement state-of-the-art security
                      measures including end-to-end encryption, regular security
                      audits, and compliance with industry standards like GDPR
                      and CCPA to ensure your data remains protected at all
                      times.
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <div
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(3)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      Can AI solutions be customized?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 3 && (
                    <p className="mt-2 text-gray-300">
                      Yes, our AI solutions are highly customizable to meet your
                      specific business needs. We can tailor the algorithms,
                      workflows, and integration points to align perfectly with
                      your existing systems and business processes.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-auto flex flex-col items-center justify-start gap-5">
            <p className="w-[80%] mb-4 text-md text-gray-300">
              Find answers to the most common inquiries about our AI solutions
              and services. Explore how Validleads can transform your business
              and ensure data security
            </p>
            <img
              src="/public/images/faq.png"
              alt="FAQ illustration"
              className="object-contain w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/*   ---------------------- Transforming Vision into Reality Section ---------------------- */}
      <section
        ref={possibilitiesRef}
        className={`flex flex-col items-center justify-center w-full h-full gap-10 py-10 ${
          hasTransFormed ? "up-slide" : ""
        }`}
      >
        <div className="flex flex-row items-start justify-start w-full h-full gap-10">
          <div className="w-[50%] h-full flex flex-col items-start justify-start gap-5">
            <h2 className="text-4xl font-semibold text-white">
              Transforming Vision <br /> into Reality
            </h2>
            <p className="text-lg text-white">
              we turn bold ideas into groundbreaking solutions. Harnessing the
              power of AI, we transform visionary concepts into tangible
              realities, empowering businesse.
            </p>
            <div className="flex flex-col items-start justify-start w-full h-full gap-5">
              <div className="grid grid-cols-2 gap-5 ">
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">AI-Powered Process</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Intelligent Virtual </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Custom Machine </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Data-Driven Predictive</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Advanced Natural</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Smart Internet</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Cutting-Edge Vision</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/public/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Efficient Robotic</p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={possibilitiesRef}
            className={`w-[50%] h-auto flex flex-col items-start justify-start gap-5 ${
              hasTransFormed ? "left-slide" : ""
            }`}
          >
            <div className="flex flex-col items-start justify-start w-full h-full gap-5 bg-[#131313] rounded-md px-16 py-10">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>

              <form className="flex flex-col items-start justify-start w-full h-full gap-5">
                <div className="flex flex-row items-start justify-start w-full h-full gap-5">
                  <div className="w-full">
                    <label htmlFor="name" className="block mb-1 text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block mb-1 text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className="block mb-1 text-white">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="block mb-1 text-white">
                    Message
                  </label>
                  <input
                    id="message"
                    className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button className="text-white hero-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
