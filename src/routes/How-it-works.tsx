import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/swiper-bundle.css";


export function HowItWorks() {
  return (
    <main className="flex flex-col items-center min-h-screen justify- w- min-w-screen">
      <section className="flex flex-col items-center justify-center w-full  h-[600px] how-it-works-image bg-[#eed6ff09]">
        <style>
          {`
                  .how-it-works-image {
                     width: 100%;
                     height: 600px;
                     background-image: url('/images/pricing.png');
                     background-size: cover;
                     background-position: center;
                     background-repeat: no-repeat;
                  }
               `}
        </style>
        <div className="how-it-works-image h-[90%] w-[90%]">
          <img
            className="object-contain w-full h-full"
            src="/images/works-sect.png"
            alt=""
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-full gap-0 pt-20">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5">
          <p className="text-center text-white text-md">
            Manage all your social media accounts in one place and save time.
          </p>
          <div className="flex gap-4">
            <Button className="!px-5 !py-6 !rounded-full !text-md">
              Start your free trial
            </Button>
            <Button className="!px-5 !py-6 !rounded-full !text-md">
              Request a demo
            </Button>
          </div>

          <p className="text-sm text-center text-gray-500">
            No Credit Card Required
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="flex flex-col items-center justify-center w-[90%] h-full my-20">
        <h2 className="pb-10 text-4xl font-bold text-center text-white">
          WHAT WE DO
        </h2>
        <div className="flex flex-row items-stretch justify-center w-full h-full gap-5">
          <div className="flex flex-col items-center justify-center w-3/4 h-auto gap-5">
            <div className="flex flex-row items-center justify-center w-full h-full gap-5">
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-10 box-border rounded-lg gap-3">
                <img className="w-10 h-10" src="/images/ac.png" alt="" />
                <h2 className="text-xl text-white text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-gray-200">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-10 box-border rounded-lg gap-3">
                <img className="w-10 h-10" src="/images/ad.png" alt="" />
                <h2 className="text-xl text-white text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-gray-200">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-10 box-border rounded-lg gap-3">
                <img className="w-10 h-10" src="/images/ae.png" alt="" />
                <h2 className="text-xl text-white text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-gray-200">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full h-full gap-5 mt-2">
              <div className="flex flex-row items-start justify-start w-2/3 h-full bg-[#131313] p-10 box-border rounded-lg gap-3">
                <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                  <img className="w-10 h-10" src="/images/ad.png" alt="" />
                  <h2 className="text-xl text-white text-start">
                    Behavior-based Filtering
                  </h2>
                  <p className="text-gray-200">
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
              <div className="flex flex-col items-start justify-start w-1/3 h-full bg-[#131313] p-10 box-border rounded-lg gap-3">
                <img className="w-10 h-10" src="/images/ae.png" alt="" />
                <h2 className="text-xl text-white text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-gray-200">
                  We go beyond demographics — leads are categorized based on
                  activity, completeness, and conversion probability.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4 h-auto gap-5">
            <div className="flex flex-col items-start justify-start w-full h-full bg-[#131313] p-5 box-border rounded-lg gap-3">
              <div className="flex flex-col items-start justify-start w-full h-full gap-3">
                <img className="w-10 h-10" src="/images/ad.png" alt="" />
                <h2 className="text-xl text-white text-start">
                  Behavior-based Filtering
                </h2>
                <p className="text-gray-200">
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

      {/* How it works section */}
      <section className="flex flex-col items-center justify-center w-[90%] h-full my-20">
        <h2 className="pb-10 text-5xl font-bold text-center text-white">
          How it works
        </h2>
        <div className="flex flex-row items-start justify-start w-full h-full gap-20 pt-10">
          <div className="flex flex-col items-center justify-center w-[60%] full gap-10 h-full">
            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5 full">
                <h3 className="text-2xl text-gray-400">VALID LEADS</h3>
                <p className="text-4xl text-gray-200">
                  Upload or Sync Your <br /> Leads
                </p>
                <p className="text-gray-200">
                  Easly Bring in Data From Your CRM, Meta Ads Account, Or Upload
                  CSVs/PDFs....
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center w-full h-full gap-5">
                <h3 className="text-xl text-gray-400">VALID LEADS</h3>
                <p className="text-4xl text-gray-200 purple-text">
                  AI Validates, Scores <br /> & Segments
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-col items-start justify-start w-full h-full gap-2 border-2 border-[#73249aa6] rounded-3xl p-8">
              <p className="text-gray-200">
                Once your lead data is uploaded or synced, our intelligent AI
                engine gets to work behind the scenes — transforming messy lists
                into high-performing lead pipelines. Here's what happens under
                the hood (without giving away backend tech)
              </p>

              <h4 className="font-bold text-gray-200">Duplicate Detection:</h4>
              <p className="text-gray-200">
                The AI scans for and removes duplicate entries, even when names
                or fields are slightly misspelled or structured differently —
                saving you from chasing the same lead twice.
              </p>

              <h4 className="font-bold text-gray-200">
                Inconsistency Resolution:
              </h4>
              <p className="text-gray-200">
                It intelligently detects and corrects mismatched job titles,
                incomplete company info, or invalid email formats — ensuring
                your leads are clean and standardized.
              </p>

              <h4 className="font-bold text-gray-200">
                Behavioral & Contextual Analysis
              </h4>
              <p className="text-gray-200">
                Using patterns like job seniority, industry alignment, company
                size, and engagement signals, the AI understands the real
                potential behind each lead.
              </p>

              <h4 className="font-bold text-gray-200">
                Smart Categorization:
                <span className="text-gray-200">
                  <p className="text-gray-200">
                    Each lead is scored and placed into one of three intelligent
                    segments
                  </p>
                </span>
              </h4>
              <ul className="flex flex-col gap-2 pl-5 text-gray-200 list-disc">
                <li className="">
                  <h4 className="pr-3 font-bold text-gray-200">
                    Hot Leads:{" "}
                    <span className="font-light text-gray-200">
                      High intent, complete info, matched job roles — ready for
                      outreach.
                    </span>
                  </h4>
                </li>

                <li>
                  <h4 className="font-bold text-gray-200">
                    Warm Leads: {""}
                    <span className="font-light text-gray-200">
                      Moderate potential, some gaps — good candidates for
                      nurturing.
                    </span>
                  </h4>
                </li>

                <li>
                  <h4 className="font-bold text-gray-200">
                    Cold Leads:{" "}
                    <span className="font-light text-gray-200">
                      Incomplete, unqualified, or mismatched — flagged for
                      review or re-engagement.
                    </span>
                  </h4>
                </li>
              </ul>

              <h4 className="font-bold text-gray-200">
                Lead Quality Score 0–100
              </h4>
              <p className="text-gray-200">
                Each lead receives a real-time quality score based on accuracy,
                completeness, and strategic fit — helping your team prioritize
                like pros.
              </p>
            </div>

            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5 full">
                <h3 className="text-xl text-gray-400">VALID LEADS</h3>
                <p className="text-3xl text-gray-200">
                  Real-Time Integrations & <br /> Outreach
                </p>
                <p className="text-gray-200">
                  Connect with your CRM and ad tools in real time. We push
                  enriched,.....
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5 full">
                <h3 className="text-xl text-gray-400">VALID LEADS</h3>
                <p className="text-3xl text-gray-200">
                  Upload or Sync Your <br /> Leads
                </p>
                <p className="text-gray-200">
                  Easly Bring in Data From Your CRM, Meta Ads Account, Or Upload
                  CSVs/PDFs....
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5 full">
                <h3 className="text-xl text-gray-400">VALID LEADS</h3>
                <p className="text-3xl text-gray-200">
                  Track Performance with <br /> Smart Dashboard
                </p>
                <p className="text-gray-200">
                  Get a clear view of your top-performing leads, validation
                  history, and.......
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-row items-center justify-between w-full h-full gap-5">
              <div className="flex flex-col items-start justify-center h-full gap-5 full">
                <h3 className="text-xl text-gray-400">VALID LEADS</h3>
                <p className="text-3xl text-gray-200">
                  Sell to <br />
                  Marketplace
                </p>
                <p className="text-gray-200">
                  Got great data? Sell it. Our system lets you list verified
                  leads.......
                </p>
              </div>
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>

            <div className="flex flex-row items-center justify-start w-full h-full gap-5">
              <p className="text-sm text-gray-400">NEXT JOBS</p>{" "}
              <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-[40%] h-full gap-10">
            <img
              className="object-contain w-full h-full"
              src="/images/how-reviews.png"
              alt=""
            />

            <h2 className="text-6xl text-white">
              Understand <br /> More
            </h2>
            <p className="text-gray-200">
              Watch this{" "}
              <span className="text-gray-200">
                <a href="" className="text-purple-500">
                  video
                </a>
              </span>
              <br />
              or Schedule a meeting to understand more about our platform
            </p>

            <div className="flex flex-col items-start justify-center w-full h-full gap-5 bg-[#131313] p-5 py-10 box-border rounded-2xl">
              <p className="text-5xl text-gray-200 text-start">
                Let's Schedule <br /> a Meeting
              </p>
              <Button className="!px-8 !py-6 !rounded-md bg-gradient-to-r from-[#9403FD] to-[#0147FF] text-white font-semibold text-lg shadow-lg hover:bg-[#7B5AFF] transition-all !w-full">
                Schedule a meeting
              </Button>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-full gap-2">
              <h3 className="pb-2 text-4xl text-white">Learn More</h3>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Business Development</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Data Science</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Finance</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Human Resource</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Marketing</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Operations</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
              <div className="flex flex-row items-center justify-between w-full h-full gap-5">
                <p className="text-gray-200">Software</p>
                <MoveRight className="w-auto h-10 text-[#5CE4CF]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      //<Separator className="!w-[90%] my-0 !bg-[#8f9ad8]" />

      {/* Latest Blogs */}
      <section className="flex flex-col items-center justify-center w-[90%] h-full my-20">
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
                className="object-cover w-full rounded-md h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-gray-400">10-08-2024</span>{" "}
                  <span className="text-3xl bluish">
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
                className="object-cover w-full rounded-md h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-gray-400">10-08-2024</span>{" "}
                  <span className="text-3xl bluish">
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
                className="object-cover w-full rounded-md h-[250px]"
              />
              <div className="flex flex-col items-center justify-start w-full h-full p-4">
                <p className="text-gray-200">
                  <span className="text-gray-400">10-08-2024</span>{" "}
                  <span className="text-3xl bluish">
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
