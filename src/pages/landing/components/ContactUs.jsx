import React from "react";
import "../../../App.css";
import SectionHeading from "../../../components/SectionHeading";

const ContactUs = () => {
  return (
    <section className="pt-28">
      <div className="px-7">
        <div className="flex">
          {/* SIDE WITH BACKGROUND IMAGE  */}

          <div className="w-2/5">
            <div className="contact-bg"></div>
          </div>

          {/* FORM'S SIDE */}
          <div className="w-3/5 bg-white">
            <div className="px-12 pt-24 pb-10 contactform-bg">
              <div className="mb-12">
                <SectionHeading heading={"Contact Us"} />
                <h2 className="text-[55px]">
                  Have any questions?
                  <br /> Get In Touch
                </h2>
              </div>

              <form action="">
                <div className="flex flex-col">
                  {/* NAME AND PHONE NUMBER */}
                  <div className="flex gap-5 ">
                    <div>
                      <input
                        type="text"
                        className="mb-5 text-[15px] h-[60px] px-5 py-2 rounded-xl w-[320px] bg-transparent placeholder-[#212529]/70  border border-[#404A3D33]"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mb-5 text-[15px] h-[60px] px-5 py-2 rounded-xl w-[320px] bg-transparent placeholder-[#212529]/70  border border-[#404A3D33]"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  {/* EMAIL AND SUBJECT */}
                  <div className="flex gap-5">
                    <div>
                      <input
                        type="text"
                        className="mb-5 text-[15px] h-[60px] px-5 py-2 rounded-xl w-[320px] bg-transparent placeholder-[#212529]/70  border border-[#404A3D33]"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mb-5 text-[15px] h-[60px] px-5 py-2 rounded-xl w-[320px] bg-transparent placeholder-[#212529]/70  border"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  {/* TEXT AREA */}
                  <div>
                    <textarea
                      name=""
                      id=""
                      placeholder="Message"
                      className="w-full bg-transparent placeholder-[#212529]/70 border border-[#404A3D33] h-32 pt-5 mb-5 text-[15px] pl-5 font-normal rounded-xl "
                    ></textarea>
                  </div>

                  <div></div>

                  <div></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
