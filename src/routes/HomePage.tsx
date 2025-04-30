import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { XIcon } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/swiper-bundle.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function HomePage() {
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

  const { ref: statGraphRef, inView: statGraphInView } = useInView({
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
  const [hasAnimatedStatGraph, setHasAnimatedStatGraph] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);

  if (textInView && !hasAnimatedText) {
    setHasAnimatedText(true);
  }

  if (cardInView && !hasAnimated) {
    setHasAnimated(true);
  }

  if (statGraphInView && !hasAnimatedStatGraph) {
    setHasAnimatedStatGraph(true);
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

  const [popup, setPopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwJS3-4e8b3ISeWGJGjHg81FMONnpWri_zYmWIDdmd2wixsLCKGu8RBG93qqJqiLy1E/exec";
  // const clientId = "AKfycbzQQyiJPWi29JbLpYKr16zGdrHtydXKx0e-2OXxuZXjuNgwKPIkl_ZWOWviOKAzWRyw"

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log(data);
    // Prepare form data for Google Apps Script
    const formData = new URLSearchParams();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("phone", data.phone);

    // Submit the form to Google Apps Script Web App
    try {
      fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      toast.success("successfully sent");
    } catch (error) {
      toast.error("an error occured");
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center h-auto max-sm:overflow-x-hidden max-sm:px-4 w-[95%] max-w-[1400px] overflow-x-visible z-0 box-border max-sm:w-full">
      <Toaster />

      {/*   ---------------------- Hero Section ---------------------- */}
      <section className="relative flex flex-col items-center w-full h-auto overflow-visible mt-28 max-sm:mt-10">
        <div className="absolute top-[-7rem] left-0 z-10 flex items-center justify-center w-full h-[calc(100%+10rem)]  hero-video">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            className="relative object-cover w-full h-full"
          ></video>
        </div>
        <div
          ref={textRef}
          className={`relative z-20 flex flex-col box-border items-center justify-center px-4 py-5 sm:p-6 sm:pb-20 h-full w-11/12 max-w-[1000px] max-sm:w-[100%] ${
            hasAnimatedText ? "animate-text" : ""
          }`}
        >
          <h3 className="text-5xl font-light leading-normal text-center text-white capitalize max-sm:text-3xl">
            The End of Fake Leads Starts Here
          </h3>
          <div className="w-full max-w-3xl mt-2 text-xl font-light text-center text-white uppercase max-sm:text-sm">
            <p>From clicks to clients — without the guesswork.</p>
          </div>

          <div className="swiper-button-prev max-sm:hidden heronav"></div>
          <div className="swiper-button-next max-sm:hidden heronav"></div>

          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 py-8 box-border">
                <p className="w-1/2 text-lg font-light text-center text-white capitalize max-sm:w-[90%]">
                  AI that scores, verifies, and prioritizes leads—automatically,
                  detect duplicates, match roles, and predict engagement. No
                  more guesswork
                </p>

                <div className="box-border flex gap-4 mt-6 max-sm:flex-col">
                  <button className="px-6 py-3 text-white hero-btn">
                    <div onClick={handlePopup}>Join the waitlist</div>
                  </button>
                  <button className="px-6 py-3 text-white bg-transparent border border-white hero-btn-2 btn-transparent-2">
                    <div onClick={handlePopup}>Get Early Access</div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 py-8">
                <p className="w-1/2 text-lg font-light text-center text-white capitalize max-sm:w-[90%]">
                  AI that scores, verifies, and prioritizes leads—automatically,
                  detect duplicates, match roles, and predict engagement. No
                  more guesswork
                </p>

                <div className="flex gap-4 mt-6 max-sm:flex-col">
                  <button className="px-6 py-3 text-white hero-btn">
                    <div onClick={handlePopup}>Join the waitlist</div>
                  </button>
                  <button className="px-6 py-3 text-white bg-transparent border border-white hero-btn-2 btn-transparent-2">
                    <div onClick={handlePopup}>Get Early Access</div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*   ---------------------- Stats Section ---------------------- */}
      <section className="relative z-30 w-full h-auto mx-0 mb-32 bg-transparent shadow-lg max-sm:mb-0">
        <img
          src="/images/stats.png"
          alt="Background"
          ref={statGraphRef}
          className={`relative w-full max-sm:w-[100vw] h-auto px-0 z-index-0 ${
            hasAnimatedStatGraph ? "up-slid" : ""
          }`}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7  z-10 py-10  absolute top-[50%] left-0 px-0 w-full justify-items-center box-border h-auto max-sm:relative max-sm:top-0 max-sm:left-0 max-sm:py-0 max-sm:px-0">
          <div
            ref={cardRef}
            className={`flex flex-col w-full h-full gap-4 px-10 py-10 rounded-lg bg-blur  transition-all duration-700 ${
              hasAnimated ? "animate-card" : " "
            }`}
          >
            <img
              className="w-15 h-15"
              src="/images/Icon.png"
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
              src="/images/Icon (1).png"
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
              src="/images/Icon (2).png"
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
              src="/images/Icon (3).png"
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
      <section className="relative w-full h-auto mx-0 mt-10 overflow-x-visible bg-transparent shadow-lg mb-26 max-sm:px-4 max-sm:py-4 max-sm:mb-0">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 mb-10">
          <h3 className="text-5xl font-light text-white max-sm:text-3xl">
            Real Problems. Real Solutions. Powered by AI
          </h3>
          <p className="text-xl text-white max-sm:text-sm">
            Discover how ValidLeads.ai eliminates the biggest lead generation
            headaches — automatically.
          </p>
        </div>

        <div className="box-border relative w-full h-full max-sm:px-4 max-sm:py-4 max-sm:mb-5">
          <div className="absolute left-0 z-10 transform -translate-y-1/2 bot-swiper-button-prev swiper-button-prev top-1/2"></div>

          <div
            className="absolute top-0 left-0 z-0 flex flex-row items-center justify-center w-screen h-full"
            style={{
              width: "100vw",
              left: "50%",
              right: "50%",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "absolute",
            }}
          >
            <img
              src="/images/Ellipse 63.png"
              alt="ai-leads"
              className="object-fill w-1/2 h-full"
            />
            <img
              src="/images/Ellipse 64.png"
              alt="ai-leads"
              className="object-fill w-1/2 h-full"
            />
          </div>

          <Swiper
            slidesPerView={1}
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
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[90%] h-full box-border flex items-stretch real-swiper mx-auto max-sm:w-full max-sm:h-auto"
          >
            <SwiperSlide className="relative z-10 flex items-center justify-center w-full h-full my-5 overflow-visible translate-x-0 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border flex flex-row items-center justify-center w-[95%] h-full gap-5 z-20 relative overflow-visible max-sm:w-full max-sm:flex-col">
                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bot Clicks & <br /> Fake <br /> Engagement.
                  </h3>
                  <p className="text-white w-[70%]">
                    Your ads get clicks, but not from real buyers — wasting ad
                    spend.
                  </p>

                  <img
                    src="/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-100 max-sm:hidden"
                  />
                </div>

                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green z-5 relative">
                  <h3 className="text-2xl font-bold text-white">
                    AI Filters <br /> Real Leads <br /> Only
                  </h3>
                  <p className="text-white w-[70%]">
                    Our AI flags suspicious patterns and filters out non-human
                    traffic.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative z-50 flex items-center justify-center w-full h-full my-5 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border relative flex justify-center w-[95%] h-full gap-5 flex-row items-center z-60 max-sm:w-full max-sm:flex-col">
                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Bad or <br /> Incomplete <br /> Leads
                  </h3>
                  <p className="text-white w-[70%]">
                    Leads with missing emails, fake job titles, or invalid phone
                    numbers.
                  </p>
                  <img
                    src="/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-10 max-sm:hidden"
                  />
                </div>

                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green relative z-5 max-sm:w-full">
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
              <div className="box-border flex flex-row items-center justify-center w-[95%] h-full gap-5 z-20 relative overflow-visible max-sm:w-full max-sm:flex-col">
                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    Hours Wasted <br /> on Manual <br /> Lead Scrubbing
                  </h3>
                  <p className="text-white w-[70%]">
                    Manually checking LinkedIn, email tools, spreadsheets—slow
                    and error-prone.
                  </p>

                  <img
                    src="/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-100 max-sm:hidden"
                  />
                </div>

                <div className="h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green z-5 relative">
                  <h3 className="text-2xl font-bold text-white">
                    Instant AI <br /> Scoring & <br /> Cleanup
                  </h3>
                  <p className="text-white w-[70%]">
                    Your data is cleaned, scored, and segmented (Hot, Warm,
                    Cold) in minutes.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative z-50 flex items-center justify-center w-full h-full my-5 left-1 right-1 swiper-slide real-swiper-wrapper">
              <div className="box-border relative flex justify-center w-[95%] h-full gap-5 flex-row items-center z-60 max-sm:w-full max-sm:flex-col">
                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card relative z-20">
                  <h3 className="text-2xl font-bold text-white">
                    You Don’t Know <br /> Which Leads Are <br /> Worth It
                  </h3>
                  <p className="text-white w-[70%]">
                    Spending time on cold prospects with no intent or relevance.
                  </p>
                  <img
                    src="/images/yellow-light.png"
                    alt="bot"
                    className="absolute -right-12 object-contain w-auto top-1/2 translate-y-[-50%] h-32 z-10 max-sm:hidden"
                  />
                </div>

                <div className=" h-full bg-[#030303] px-6 py-10 flex flex-col gap-4 w-[98%] box-border real-card-green relative z-5 max-sm:w-full">
                  <h3 className="text-2xl font-bold text-white">
                    Intent-Based <br /> Lead <br /> Prioritization
                  </h3>
                  <p className="text-white w-[70%]">
                    Our AI ranks leads based on behavior, completeness & buying
                    signals.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="absolute right-0 z-10 transform -translate-y-1/2 bot-swiper-button-next swiper-button-next top-1/2"></div>
        </div>
      </section>

      {/*   ---------------------- Manual Lead Gen vs. ValidLeads.ai Section ---------------------- */}
      <section className="relative w-full h-auto mx-0 mt-0 mb-32 bg-transparent shadow-lg max-sm:px-4 max-sm:py-4 max-sm:mb-0">
        <div
          ref={comparissHeaderRef}
          className={`flex flex-col items-center justify-center w-full h-full gap-4 mb-10 max-sm:mb-0 ${
            hasAnimatedcomparissHeader ? "up-slide" : ""
          }`}
        >
          <h3 className="text-5xl font-bold text-white max-sm:text-3xl">
            Manual Lead Gen vs. ValidLeads.ai
          </h3>
          <p className="text-2xl text-white max-sm:text-md">
            The Game-Changer You've Been Waiting For
          </p>
        </div>

        <div
          ref={comparissHeaderRef}
          className={`flex flex-row items-center justify-center w-full h-full gap-0 mb-0 max-sm:flex-col max-sm:gap-5 ${
            hasAnimatedcomparissHeader ? "up-slide" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-0 mb-0 bg-white mt-7 rounded-l-2xl max-sm:rounded-md">
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

            <div className="flex flex-col items-center justify-center w-full h-full gap-0 mb-0 bg-white rounded-r-2xl max-sm:rounded-md">
              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 bg-[#D9D9D9] py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 bg-[#D9D9D9] py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/images/close.png"
                  alt="x icon"
                />
              </div>

              <div className="flex flex-row items-center justify-center w-full h-full gap-2 py-2">
                <img
                  className="object-contain w-6 h-6"
                  src="/images/close.png"
                  alt="x icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- Power Features Built for Serious B2B Growth Section ---------------------- */}
      <section className="w-full h-auto mt-10">
        <div className="box-border flex flex-col items-start justify-center w-full h-full gap-5 mb-0 max-sm:px-4">
          <h2
            ref={powerTextRef}
            className={`w-1/2 max-sm:w-full text-5xl font-bold text-white ${
              hasAnimatedPowerHeader ? "power-header" : ""
            }`}
          >
            Power Features Built for Serious B2B Growth
          </h2>

          <div className="flex flex-row items-center justify-center w-full h-auto gap-16 p-0 mb-0 max-sm:flex-col">
            <div className="flex flex-col w-[40%] gap-4 max-sm:w-full relative  ">
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
                  className="object-contain w-full h-full transition-all duration-300 hover:scale-110"
                  src="/images/power.png"
                  alt="icon"
                />
              </div>
            </div>

            <div className="grid h-full items-center justify-center w-[60%] grid-cols-3 gap-4 max-sm:w-full max-sm:grid-cols-1 relative ">
              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-1`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Real-Time <br /> Lead <br /> Filtering
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>

                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup1">
                  <p className="box-border h-auto p-5 text-white">
                    Instantly sort through millions of leads with precision.
                    Filter by industry, role, location, company size, and more —
                    all live, all in real-time. Visual Suggestion: Animated
                    funnel graphic or icon showing filters applied dynamically
                    on a dataset.
                  </p>
                </div>
              </div>

              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-2`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  AI Lead <br /> Scoring (Hot / <br /> Warm / Cold)
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>

                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup2">
                  <p className="box-border p-5 text-white">
                    Let AI do the thinking — every lead is automatically scored
                    based on behavior, relevance, and potential. Focus on the
                    ones that matter. Visual Suggestion: A horizontal traffic
                    light or thermometer-style bar showing lead heat tiers (🔥
                    Hot, 🌤 Warm, ❄️ Cold).
                  </p>
                </div>
              </div>

              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-3`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Multi- <br /> Channel <br /> Validation
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>

                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup3">
                  <p className="box-border p-5 text-white">
                    Emails. Phones. LinkedIn. Company credentials. Every
                    touchpoint is verified for accuracy so you don’t waste a
                    second on fake leads. Visual Suggestion: A shield/checkmark
                    icon with overlays of small logos: email, phone, LinkedIn,
                    and building (company).
                  </p>
                </div>
              </div>

              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-4`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  CRM & Ad <br /> Platform <br /> Integrations
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>
                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup4">
                  <p className="box-border p-5 text-white">
                    Seamlessly sync data with tools you already use — HubSpot,
                    Salesforce, Zoho, Google Ads, and more. No copy-paste
                    needed. Visual Suggestion: Small CRM and ad platform logos
                    flowing into a dashboard with sync arrows.
                  </p>
                </div>
              </div>

              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-5`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Lead <br /> Warmups & <br /> Follow-ups
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>
                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup5">
                  <p className="box-border p-5 text-white">
                    Get auto-generated engagement strategies to revive cold
                    leads and nurture warm ones — crafted by AI based on user
                    behavior. Visual Suggestion: Envelope with a rocket
                    launching or chat bubble with sparkles to show automated
                    follow-up.
                  </p>
                </div>
              </div>

              <div
                ref={powerTextRef}
                className={`p-5 flex flex-col shadow-[#646cff] transition-all duration-300 hover:shadow-xl hover:scale-90 gap-4 rounded-md bg-[#131313] cursor-pointer power-6`}
              >
                <h2 className="w-full text-lg font-bold text-white text-semibold">
                  Verified <br /> Lead <br /> Marketplace
                </h2>
                <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                  <img src="/images/power-arrow.png" alt="icon" />
                </div>

                <div className="absolute bottom-[110%] right-0  h-full bg-[#131313] max-w-[90vw] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-[#646cff] shadow-sm power-popup6">
                  <p className="box-border p-5 text-white">
                    Sell or buy clean, verified leads in a legit, secure
                    marketplace. Transparency, quality, and revenue — all in one
                    place. Visual Suggestion: Marketplace storefront with a
                    verified badge and dollar sign, or a glowing lead card being
                    exchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end w-full h-full gap-4 max-sm:w-full">
            <div className="flex flex-col items-end justify-center w-[60%] h-full gap-4 max-sm:w-full">
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
      <section className="w-full h-full max-sm:px-0">
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
          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32 mt-10 max-sm:py-4">
            <div className="flex flex-col items-center justify-center w-full h-[350px] max-sm:h-[380px] gap-4">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg max-sm:w-[90%] max-sm:p-4 max-sm:h-[350px]">
                <h2 className="text-4xl font-semibold text-white max-sm:text-2xl">
                  Upload or Sync Your <br /> Leads
                </h2>
                <p className="text-lg text-white uppercase max-sm:text-sm">
                  Bring your own data — upload CSVs, PDFs, or sync directly from
                  your CRM or Google Ads account. Visual Suggestion: Animated
                  icon of a folder or cloud with arrows pointing into a digital
                  dashboard. (Use a glowing upload icon for effect)
                </p>

                <img
                  src="/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26 max-sm:w-16 max-sm:h-16 max-sm:bottom-[-20px] max-sm:left-[-20px]"
                />
                <img
                  src="/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px] max-sm:w-16 max-sm:h-16 max-sm:top-[-20px] max-sm:right-[-20px]"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32 mt-10 max-sm:py-4">
            <div className="flex flex-col items-center justify-center w-full h-[350px] gap-4 max-sm:h-[380px]">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg max-sm:w-[90%] max-sm:p-4">
                <h2 className="text-4xl font-semibold text-white max-sm:text-2xl">
                  AI Validates, Scores & <br /> Filters
                </h2>
                <p className="text-lg text-white uppercase max-sm:text-sm">
                  Our smart engine gets to work: verifying emails, phone
                  numbers, LinkedIn profiles, and scoring every lead from Hot to
                  Cold. Duplicates? Gone. Visual Suggestion: Illustration of an
                  AI chip analyzing floating lead cards, changing colors
                  (red/orange/green) to show scoring, and a filter/funnel icon.
                </p>

                <img
                  src="/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26 max-sm:w-16 max-sm:h-16 max-sm:bottom-[-20px] max-sm:left-[-20px]"
                />
                <img
                  src="/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px] max-sm:w-16 max-sm:h-16 max-sm:top-[-20px] max-sm:right-[-20px]"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-32 mt-10 max-sm:py-4">
            <div className="flex flex-col items-center justify-center w-full h-[350px] gap-4 max-sm:h-[380px]">
              <div className="relative flex flex-col items-start justify-start w-1/2 h-full gap-4 p-10 border-2 border-white rounded-lg max-sm:w-[90%] max-sm:p-4">
                <h2 className="text-4xl font-semibold text-white max-sm:text-2xl">
                  Sync to CRM & Trigger Auto <br /> Outreach
                </h2>
                <p className="text-lg text-white uppercase max-sm:text-sm">
                  Send qualified leads straight to your CRM with a single click.
                  Trigger follow-ups and re-engagements without lifting a
                  finger. Visual Suggestion: CRM logos with arrows going into an
                  outreach panel (email/chat/smart bot) — maybe a mini robot
                  sending a message.
                </p>

                <img
                  src="/images/step1.png"
                  alt="icon"
                  className="absolute bottom-[-50px] left-[-50px]  w-26 h-26 max-sm:w-16 max-sm:h-16 max-sm:bottom-[-20px] max-sm:left-[-20px]"
                />
                <img
                  src="/images/upload.png"
                  alt="icon"
                  className="absolute top-[-50px] w-32 h-32 right-[-50px] max-sm:w-16 max-sm:h-16 max-sm:top-[-20px] max-sm:right-[-20px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/*   ---------------------- Powered by Section ---------------------- */}
      <section className="w-full h-full max-sm:px-4 max-sm:py-4">
        <div className="flex flex-col items-center justify-center w-full h-full gap-0">
          <h2 className="text-2xl font-semibold text-white">POWERED BY</h2>
          <Swiper
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            freeMode={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, FreeMode]}
            className="w-full h-auto"
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
            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/zoho.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/hubspot.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/apollo.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/neverbounce.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/zoho.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/hubspot.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/apollo.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col items-center justify-center w-[100%] h-full gap-4 py-0">
              <div className="flex flex-col items-center justify-center w-full h-[200px] max-sm:h-[150px] gap-2">
                <img
                  className="object-contain w-auto h-full"
                  src="/images/neverbounce.png"
                  alt="icon"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*---------------------- Security You Can Count On Section ---------------------- */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 py-10 max-sm:px-4 max-sm:py-4">
        <div
          ref={securityRef}
          className="flex flex-row w-full gap-10 h-[400px] max-sm:h-auto max-sm:flex-col-reverse"
        >
          <div
            ref={securityRef}
            className={`flex flex-col items-center justify-center h-full gap-0 w-[40%] max-sm:w-full ${
              hasAnimatedsecurity ? "left-slide" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-0">
              <img
                src="/images/shield.png"
                alt="icon"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div
            ref={securityRef}
            className={`flex flex-col items-center justify-center h-full gap-0 w-[60%] max-sm:w-full ${
              hasAnimatedsecurity ? "right-slide" : ""
            }`}
          >
            <div className="flex flex-col items-start justify-center w-full h-full gap-5">
              <h2 className="text-5xl font-semibold text-white max-sm:text-3xl text-start">
                Security You Can Count On
              </h2>
              <h3 className="text-lg font-semibold text-white line-height-10 max-sm:text-sm">
                <span className="text-2xl font-bold max-sm:text-lg">
                  End-to-End Encryption:
                </span>{" "}
                All your lead data is protected during transfer and storage.
              </h3>
              <h3 className="text-lg font-semibold text-white line-height-10 max-sm:text-sm">
                <span className="text-2xl font-bold max-sm:text-lg">
                  GDPR & CCPA Compliant:
                </span>{" "}
                You're always in control — full transparency, no surprises.
              </h3>
              <h3 className="text-lg font-semibold text-white line-height-10 max-sm:text-sm">
                <span className="text-2xl font-bold max-sm:text-lg">
                  Firewall & CDN via Cloudflare:
                </span>{" "}
                Fast, secure, and always protected from threats.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*   ---------------------- AI That Understands Leads Like Humans Do — Only Faster Section ---------------------- */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-20 py-0 max-sm:px-4 max-sm:py-4">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 py-10">
          <div className="flex flex-row items-center justify-center w-full h-full gap-10 py-10 pb-5 max-sm:flex-col max-sm:gap-5">
            <h2 className="text-4xl max-sm:text-2xl font-semibold text-white sm:w-[40%] w-[100%]">
              AI That Understands Leads Like Humans Do — Only Faster
            </h2>
            <p className="text-lg text-white sm:w-[60%] w-[100%]">
              Our GPT-4-powered AI module performs intelligent lead analysis —
              matching roles, detecting duplicates, evaluating relevance, and
              generating re-engagement strategies with surgical precision.
            </p>
          </div>
          <div className="relative flex flex-row items-center justify-center w-full h-full gap-10 max-sm:flex-col">
            <div className="w-[40%] max-sm:w-[100%]">
              <img
                src="/images/ai.png"
                alt="icon"
                className="object-contain h-[400px] w-full transition-all duration-300 max-sm:h-[auto] max-sm:w-[100%] hover:scale-105"
              />
            </div>

            <div className="w-[60%] h-full relative max-sm:w-full max-sm:h-auto flex justify-center items-center sm:pl-8 box-border">
              <div className="ai-swiper-button-prev swiper-button-prev"></div>
              <div className="ai-swiper-button-next swiper-button-next"></div>

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
                className="left-0 w-full h-full "
              >
                <SwiperSlide className="left-0 w-full h-full ">
                  <div className="relative flex flex-col items-center justify-center w-full gap-10">
                    <div className="flex flex-row items-center justify-center w-full h-full gap-10 ">
                      <p className="text-lg text-white">
                        Adaptive prompt engineering for different industries
                        <span className="text-2xl font-bold">
                          AI categorization: Hot, Warm, Cold
                        </span>
                        Predictive insights based on user behavior
                      </p>

                      <div className="flex flex-row items-center justify-center w-full h-full gap-10"></div>
                    </div>

                    <div className="flex flex-row items-center justify-center w-full h-full gap-10 max-sm:flex-col">
                      <div className="w-[40%] max-sm:w-full">
                        <div className="p-5 flex flex-col gap-4 rounded-md bg-[#131313]">
                          <h2 className="w-full text-lg font-bold text-white text-semibold">
                            Threat <br /> Detection <br /> Accuracy
                          </h2>
                          <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                            <img
                              src="/images/power-arrow.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[60%] flex flex-col items-start justify-start gap-4 max-sm:w-full">
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

                    <div className="flex flex-row items-center justify-center w-full h-full gap-10 max-sm:flex-col">
                      <div className="w-[40%] max-sm:w-full">
                        <div className="p-5 flex flex-col gap-4 rounded-md bg-[#131313]">
                          <h2 className="w-full text-lg font-bold text-white text-semibold">
                            Threat <br /> Detection <br /> Accuracy
                          </h2>
                          <div className="flex flex-row items-center justify-end w-full h-full gap-4 mb-0">
                            <img
                              src="/images/power-arrow.png"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[60%] flex flex-col items-start justify-start gap-4 max-sm:w-full">
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
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 py-10 pb-10 mb-20 max-sm:px-4 max-sm:py-4 max-sm:pb-0 max-sm:mb-0">
        <div className="flex flex-row items-center justify-center w-full h-full gap-10 max-sm:flex-col">
          <div
            ref={redifiningRef}
            className={`w-[50%] h-full flex flex-col items-start justify-start gap-10 max-sm:gap-4 max-sm:w-full ${
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
                <button
                  onClick={() => setVideoPopup(true)}
                  className="text-white hero-btn max-sm:text-xsm"
                >
                  Learn More
                </button>
                <button
                  onClick={() => setVideoPopup(true)}
                  className="flex flex-row items-center justify-center gap-2 text-white possibilities-vid-btn"
                >
                  <img src="/images/play-icon.png" alt="icon" />
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
            } max-sm:w-full`}
          >
            <img
              className="object-contain w-full h-full transition-all duration-300 hover:scale-105"
              src="/images/stats-section.png "
              alt="icon"
            />
          </div>
        </div>
      </section>

      {/*   ---------------------- Frequently Asked Questions Section ---------------------- */}
      <section className="w-full h-full pb-10 faq max-sm:px-0 max-sm:py-4 max-sm:pb-0">
        <div className="flex flex-row items-start justify-center w-full h-full gap-10 py-10 max-sm:flex-col">
          <div className="w-[50%] h-full max-sm:w-full">
            <h2 className="mb-8 text-4xl font-semibold text-white max-sm:text-center max-sm:text-3xl max-sm:w-full">
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
                      How does ValidLeads.ai ensure the leads are accurate and
                      verified?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 0 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 0 && (
                    <p className="mt-2 text-gray-300">
                      ValidLeads.ai uses AI-powered analysis combined with
                      trusted third-party verification tools like NeverBounce,
                      Twilio, Apollo.io, and LinkedIn parsing. Each lead is
                      validated across email, phone, company details, and social
                      profiles to ensure you get only real, actionable prospects
                      — no bots, no dead ends.
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
                      Can I automatically sync the verified leads to my CRM or
                      ad account?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 1 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 1 && (
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
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(2)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      What happens if a lead is incomplete or has missing
                      information?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 2 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 2 && (
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
                  className="flex flex-col items-start justify-start w-full gap-4 p-4 transition-colors border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleFAQ(3)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-medium text-white">
                      How secure is my data when using ValidLeads.ai?
                    </h3>
                    <span className="text-white transition-transform duration-300 transform">
                      {openFAQ === 3 ? "−" : "+"}
                    </span>
                  </div>
                  {openFAQ === 3 && (
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
          <div className="w-[50%] h-auto flex flex-col items-center justify-start gap-5 max-sm:w-full">
            <p className="w-[80%] mb-4 text-md text-gray-300">
              Find answers to the most common inquiries about our AI solutions
              and services. Explore how Validleads can transform your business
              and ensure data security
            </p>
            <img
              src="/images/faq.png"
              alt="FAQ illustration"
              className="object-contain w-full h-[400px] max-sm:h-[300px]"
            />
          </div>
        </div>
      </section>

      {/*   ---------------------- Transforming Vision into Reality Section ---------------------- */}
      <section
        ref={possibilitiesRef}
        className={`flex flex-col items-center justify-center w-full h-full gap-10 py-10 max-sm:pt-8 ${
          hasTransFormed ? "up-slide" : ""
        }`}
      >
        <div className="flex flex-row items-start justify-start w-full h-full gap-10 max-sm:flex-col">
          <div className="w-[50%] h-full flex flex-col items-start justify-start gap-5 max-sm:w-full">
            <h2 className="text-4xl font-semibold text-white max-sm:text-center max-sm:text-2xl max-sm:w-full">
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
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">AI-Powered Process</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Intelligent Virtual </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Custom Machine </p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Data-Driven Predictive</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Advanced Natural</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Smart Internet</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Cutting-Edge Vision</p>
                </div>
                <div className="flex flex-row items-center justify-start w-full h-full gap-4">
                  <img
                    className="w-5 h-5"
                    src="/images/check.png"
                    alt="icon"
                  />
                  <p className="text-white">Efficient Robotic</p>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={possibilitiesRef}
            className={`w-[50%] h-auto flex flex-col items-start justify-start gap-5 max-sm:w-full ${
              hasTransFormed ? "left-slide" : ""
            }`}
          >
            <div className="flex flex-col items-start justify-start w-full h-full gap-5 bg-[#131313] rounded-md px-16 py-10 max-sm:px-4 max-sm:py-4">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>

              <form
                className="flex flex-col items-start justify-start w-full h-full gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
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
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
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
                    {...register("phone", { required: "Phone is required" })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="block mb-1 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full h-[100px] p-2 text-white border-2 border-white rounded-md"
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  className="text-white hero-btn"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {videoPopup && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen bg-[#00000071] bg-opacity-50 z-10000">
          <div className="w-[50%] h-[80%] relative p-10 bg-white box-border rounded-md max-sm:w-[90%] max-sm:h-[auto] max-sm:px-1 max-sm:py-16">
            <div className="absolute right-3 top-3">
              <XIcon
                className="w-10 h-10 p-1 text-red-600 cursor-pointer"
                onClick={() => setVideoPopup(false)}
              />
            </div>
            <video
              className="w-full h-full"
              src="https://validleads.ai/wp-content/uploads/2025/03/IMG_9806.mp4"
              controls
            />
          </div>
        </div>
      )}

      {popup && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 z-1000"
          onClick={handlePopup}
        >
          <Toaster />
          <div
            className="flex flex-col items-start justify-start w-[500px] h-[500px] gap-5 bg-[#131313] rounded-md px-16 py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="w-full mb-2 text-3xl font-bold text-center text-white">
              JOIN THE WAITLIST
            </h2>

            <form
              className="flex flex-col items-start justify-start w-full h-full gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-row items-start justify-start w-full h-auto gap-5">
                <div className="w-full">
                  <label htmlFor="name" className="block mb-1 text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
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
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto">
                <label htmlFor="phone" className="block mb-1 text-white">
                  Phone
                </label>
                <input
                  id="phone"
                  className="w-full h-full p-2 text-white border-2 border-white rounded-md"
                  type="text"
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto">
                <label htmlFor="message" className="block mb-1 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-[100px] p-2 text-white border-2 border-white rounded-md"
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                className="text-white hero-btn"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
