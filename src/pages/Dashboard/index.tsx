import { Link } from "react-router-dom";

import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo2.png";

import hiking from "assets/images/hiking.jpg";
import trekking from "assets/images/trekking.jpg";
import cycling from "assets/images/cycling.jpg";

import team1 from "assets/images/team1.jpeg";
import team2 from "assets/images/team2.jpeg";
import team3 from "assets/images/team3.jpeg";

import insta1 from "assets/images/instagram/insta1.jpeg";
import insta2 from "assets/images/instagram/insta2.jpeg";
import insta3 from "assets/images/instagram/insta3.jpeg";
import insta4 from "assets/images/instagram/insta4.jpeg";

export default function Dashboard() {
  return (
    <>
      {/* Top section */}
      <section className="u-image u-section-1">
        <div className="flex flex-col gap-10 items-center min-h-[850px] py-20 px-5 sm:px-20">
          <img src={logo1} alt="" className="w-36" />
          <div className="text-center text-white w-full md:w-2/3">
            <span className="text-5xl md:text-7xl">
              Welcome to Men of the Mountain Club!
            </span>
            <h5 className="md:text-2xl italic mt-5">
              Overseas Expeditions, J&amp;K Mountain Challenges Private Guiding
              Instruction
            </h5>
          </div>
        </div>
      </section>

      {/* About Us and MTM Leaders */}
      <section className="u-image u-section-2 flex flex-col items-center">
        <div className="container text-center min-h-[1381px] px-5">
          <span className="text-3xl md:text-5xl">About Us</span>
          <div className="flex flex-col gap-10 text-justify md:flex-row mt-5">
            <div>
              <p>
                Embrace the Outdoors with{" "}
                <span style={{ fontWeight: 700 }}>Men of the Mountain</span>
                . Our passion is to ignite the spirit of adventure within every
                individual, offering meticulously crafted experiences in
                trekking, hiking, cycling, and camping.
                <br />
                <br />
                Rooted in a commitment to sustainability and responsible
                tourism, we invite you to explore the world's most breathtaking
                landscapes while leaving only footprints behind. Our expert
                guides ensure safe and unforgettable journeys, whether you're a
                seasoned explorer or a first-time adventurer.
                <br />
              </p>
            </div>
            <div>
              <p className="mb-5">
                With a focus on camaraderie, discovery, and respect for nature,
                we strive to inspire a deep appreciation for the wilderness and
                foster unforgettable memories that last a lifetime. Join us as
                we embark on a journey of exploration, connection, and
                discovery.
                <br />
                <br />
                Your next great adventure awaits with{" "}
                <span style={{ fontWeight: 700 }}>Men of the Mountain.</span>
              </p>
              <Link
                to="/about"
                className="bg-primary px-5 py-2 rounded text-white"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="min-h-[587px] mb-[140px] py-20">
            <div className="text-white py-10">
              <div className="w-100 bg-gray-600 bg-transparent rounded-xl pb-5">
                <div className="bg-gray-600 opacity-75 rounded-xl py-7 px-5 md:px-20 flex flex-col items-center">
                  <img src={logo2} alt="" className="w-36 my-10" />
                  <span className="text-white text-3xl md:text-5xl">
                    MTM leaders
                  </span>
                  <p className="text-white my-10">
                    From time to time MTM uses a number of carefully and
                    personally selected associate Mountain Leaders (MLs),
                    Mountaineering Instructors (MIA/MICs) and Mountain Guides
                    (UIAGM) to deliver expeditions, instruction and guiding.All
                    of these people are chosen on their individual merits based
                    on the mix of their technical skills, qualifications and
                    excellent interpersonal skills. These guides are both
                    friends as well as colleagues and understand the Mountain
                    Expeditions ethos and deliver to the highest standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports, Articles and Blogs */}
      <section className="u-image u-section-3 flex flex-col items-center min-h-[900px]">
        <div className="container md:px-5">
          <div className="flex flex-col gap-5 md:flex-row mt-[-97px]">
            <div className="text-white">
              <img className="w-full u-image h-[352px]" src={hiking} />
              <div className="mt-10 mx-5 md:mx-0">
                <span className="text-xl">Hiking</span>
                <p className="mb-5">
                  My full write up from 2017, Cold remote &amp; desolate. If at
                  first you don’t succeed…’ Extract from my 2016 attempt: It was
                  04:00am and I needed to stop. I was hurting so much.
                </p>
                <Link
                  to="/hiking"
                  className="bg-primary px-5 py-2 rounded text-white"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="text-white md:mt-[97px]">
              <img className="w-full u-image h-[352px]" src={cycling} />
              <div className="mt-10 mx-5 md:mx-0">
                <span className="text-xl">Cycling</span>
                <p className="mb-5">
                  My full write up from 2017, Cold remote &amp; desolate. If at
                  first you don’t succeed…’ Extract from my 2016 attempt: It was
                  04:00am and I needed to stop. I was hurting so much.
                </p>
                <Link
                  to="/cycling"
                  className="bg-primary px-5 py-2 rounded text-white"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="text-white">
              <img className="w-full u-image h-[352px]" src={trekking} />
              <div className="mt-10 mx-5 md:mx-0">
                <span className="text-xl">Trekking</span>
                <p className="mb-5">
                  My full write up from 2017, Cold remote &amp; desolate. If at
                  first you don’t succeed…’ Extract from my 2016 attempt: It was
                  04:00am and I needed to stop. I was hurting so much.
                </p>
                <Link
                  to="/trekking"
                  className="bg-primary px-5 py-2 rounded text-white"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="u-image u-section-4 flex flex-col items-center mt-10 md:mt-[-100px]">
        <div className=" container md:px-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div>
              <div className="">
                <img className="u-image h-[440px]" src={team1} />
              </div>
            </div>
            <div>
              <div className="">
                <img className="u-image h-[440px]" src={team2} />
              </div>
            </div>
            <div>
              <div className="">
                <img className="u-image h-[440px]" src={team3} />
              </div>
            </div>
            <div>
              <div className="">
                <img className="u-image h-[440px]" src={team2} />
              </div>
            </div>
          </div>
          <div className="text-white my-10">
            <div className="w-100 bg-gray-600 bg-transparent rounded-xl px-5 md:px-0 pb-5">
              <div className="bg-gray-600 opacity-75 rounded-xl py-7 px-5 text-center">
                <span className="text-3xl md:text-5xl">Our Experts</span>
                <p className="mt-5">
                  On every expedition, the number of participants is kept to a
                  level to enable the highest quality to be maintained. We do
                  not want to be that company where you become a number or even
                  a blur after the expedition has finished, so we have a strict
                  cut off point to ensure that our groups never become too big.
                  <br />
                  <br />
                  We strongly believe that by doing this our Mountain
                  Expeditions Leaders are able to provide a more personalized
                  service and we find that group dynamics work much better than
                  when traveling in high numbers. Therefore, your success rate
                  and enjoyment increases immeasurably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section>
        <div className="w-full flex flex-col md:flex-row">
          <div>
            <img className="h-80" src={insta1} />
          </div>
          <div>
            <img className="h-80" src={insta2} />
          </div>
          <div>
            <img className="h-80" src={insta3} />
          </div>
          <div>
            <img className="h-80" src={insta4} />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      {/* <section className="u-image u-section-6">
        <div className="u-sheet u-sheet-1">
          <div className="u-align-center u-container-style u-group u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-text-1">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="u-border-6 u-border-white u-line u-line-vertical u-line-1"></div>
          <div className="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-2">
                    <p className="u-text u-text-body-alt-color u-text-2">
                      <span style={{ fontWeight: 700 }}>
                        {" "}
                        Men of the Mountain
                      </span>
                      &nbsp;employs a small number of highly experienced Leaders
                      to lead our trips. Carefully chosen for their experience,
                      qualifications, personality and their ability to
                      apply&nbsp;themselves to challenging situations.
                    </p>
                    <h3 className="u-text u-text-body-alt-color u-text-3">
                      Mobile: +11 (0) 5684 147 157
                      <br />
                      Office: +55 (0) 117 240 2300
                      <br />
                      Email: info@mountain-expeditions.com
                    </h3>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs">
                    <div className="u-form u-form-1">
                      <form
                        action="https://forms.nicepagesrv.com/v2/form/process"
                        className="u-block-7e79-15 u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                      >
                        <div className="u-form-group u-form-name">
                          <label
                            htmlFor="name-9c4d"
                            className="u-form-control-hidden u-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your Name"
                            id="name-9c4d"
                            name="name"
                            className="u-border-white u-input u-input-rectangle u-text-white"
                            required
                          />
                        </div>
                        <div className="u-form-email u-form-group">
                          <label
                            htmlFor="email-9c4d"
                            className="u-form-control-hidden u-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter a valid email address"
                            id="email-9c4d"
                            name="email"
                            className="u-border-white u-input u-input-rectangle u-text-white"
                            required
                          />
                        </div>
                        <div className="u-form-group u-form-message">
                          <label
                            htmlFor="message-9c4d"
                            className="u-form-control-hidden u-label"
                          >
                            Message
                          </label>
                          <textarea
                            placeholder="Enter your message"
                            rows={4}
                            cols={50}
                            id="message-9c4d"
                            name="message"
                            className="u-border-white u-input u-input-rectangle u-text-white"
                            required
                          ></textarea>
                        </div>
                        <div className="u-form-group u-form-submit">
                          <a
                            href="#"
                            className="u-btn u-btn-submit u-button-style u-palette-4-dark-2 u-btn-1"
                          >
                            Send
                          </a>
                          <input
                            type="submit"
                            value="submit"
                            className="u-form-control-hidden u-text-white"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          {" "}
                          Thank you! Your message has been sent.{" "}
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          {" "}
                          Unable to send your message. Please fix errors then
                          try again.{" "}
                        </div>
                        <input
                          type="hidden"
                          name="formServices"
                          value="40ccc514-a810-48b4-3cfd-01c0406121cd"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="w-100 bg-gray-900 py-5">
        <div className="text-center">
          <p className="text-white">Men Of The Mountain</p>
        </div>
      </footer>
    </>
  );
}
