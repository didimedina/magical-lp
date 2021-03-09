import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Wednesday from './components/Wednesday';
import Sunday from './components/Sunday';
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';

gsap.registerPlugin(ScrollTrigger)

const LadningPage = () => {
    
    React.useLayoutEffect(() => {  

        // let masterLT = gsap.timeline()

        gsap.timeline({
        scrollTrigger: {
            trigger: ".HERO-SECTION",
            scrub: 1,
            start: "top top",
            end: "+=400% bottom",
            pin: true,
            // markers: true,
            id: "hero-pin"
        }})
        .to(".HERO-COPY-CONTAINER", {scale: 0.4, duration: 1, opacity: 0}) // hide heading
        .to(".SCROLL-MORE-CONTAINER", {y: "+=100%", opacity: 0, duration: 1}, "<") // hide scroll more icon
        .to(".CAL-CONTAINER", {y: "-=60%", duration: 3}, "<")
        .from(".DAY-EVENTS-CONTAINER", {y: "+=30vh", opacity: 0, duration: 3}, "<")
        .to(".POINTER", {y: "+=40vh", duration: 2}, "+=0")
        .to(".CAL-CONTAINER", {scale: 2, duration: 2}, "<")
        .from(".POINTER", {opacity: 0, duration: 1.5}, "-=1.5")
        .fromTo(".GAP-CONTAINER", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.5")
        .to(".EVENT-CONTAINER", {backgroundColor: "#F3F4F6", duration: 0.5}, "<") // fade events to grey
        .to(".EVENT-TITLE", {color: "#1F2937", opacity: 0.3, duration: 0.5}, "<") // fade event titles to lower opacity so emojis don't remain bright
        .to([".POINTER", ".GAP-FILL"], {y: "+=2vh", duration: 5}, "+=0")
        .set(".GAP-STEPS-CONTAINER", {visibility: "visible"}, "<")
        .fromTo(".GAP-STEP-1", {y: 50, opacity: 0, scale: 0.8}, {y: 0, opacity: 1, scale: 1, duration: 1}, "<") // show first message
        .to(".GAP-STEP-1", {y: -25, opacity: 0, scale: 0.4, duration: 0.5}, ">+=1")  // hide first then hide
        .fromTo(".GAP-STEP-2", {y: 50, opacity: 0, scale: 0.8}, {y: 0, opacity: 1, scale: 1, duration: 1}, "<") //show second message
        .to({}, {duration: 2}, ">")

        gsap.timeline({ 
        scrollTrigger: {
            trigger: ".COMP-SECTION",
            scrub: 1,
            start: "top +=120%",
            end: "+=50%",
            // markers: true,
            id: "hero-to-comp-pin",
        }})
        .to(".GAP-STEP-2", {transformOrigin: "bottom", scale: 30, duration: 1}, ">") // hold second message then zoom
        .to(".GAP-STEP-2", {y: "120px", duration: 0.5}, "<")
        .to([".GAP-STEP-TITLE-2", ".GAP-STEP-SUB-TITLE-2"], {opacity: 0, duration: 0.25}, "<")

        gsap.timeline({ 
        scrollTrigger: {
            trigger: ".COMP-SECTION",
            scrub: 1,
            start: "top top",
            end: "+=200%",
            pin: true,
            // markers: true,
            id: "comp-pin",
        }})
        .set([".CAL-BROKEN-HEADING-2", ".COMP-LOGOS-CONTAINER"], {visibility: "hidden"})
        .from(".CAL-BROKEN-HEADING-1", {y: "+=20vh", duration: 1})
        .to(".CAL-BROKEN-HEADING-1", {y: "-=50px", scale: 0.8, duration: 0.5, opacity: 0})
        .set([".CAL-BROKEN-HEADING-2", ".COMP-LOGOS-CONTAINER"], {visibility: "visible"}, "<")
        .from([".CAL-BROKEN-HEADING-2", ".COMP-LOGOS-CONTAINER"], {scale: 0.8, y: "+=20vh", opacity: 0, duration: 1}, "<")
        .to({}, {duration: 1})

        // todo make the bg of the cal turn black with the bg of the next section to make it lfeel more fluid and not have a white gap


    });

  return (
    <div>
        <div className="HERO-SECTION relative overflow-hidden flex flex-col items-center bg-white w-full h-100vh">
            
            <div className="HERO-COPY-CONTAINER flex flex-col justify-center self-center max-w-2xl h-6/10 z-10 mx-16">
                <div className="HERO-LOGO mx-auto h-8 w-8 mb-10 bg-logo bg-cover bg-no-repeat"></div>
                <div className="HERO-HEADING text-6xl leading-tight text-center">It’s time to talk about your calendar...</div>
            </div> 
            
            <div className="CAL-CONTAINER absolute top-6/10 grid lg:grid-cols-7 sm:grid-cols-5 grid-cols-3 grid-rows-cal gap-line bg-gray-200 z-20 w-10/12 max-w-7xl border-offset ring-1 ring-gray-200 h-120vh">
                <div className="CAL-DAY-HEADING hidden lg:block bg-white text-2xl text-gray-300 py-4 pl-3">Sun</div>
                <div className="CAL-DAY-HEADING hidden sm:block bg-white text-2xl text-gray-300 py-4 pl-3">Mon</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Tues</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Wed</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Thur</div>
                <div className="CAL-DAY-HEADING hidden sm:block bg-white text-2xl text-gray-300 py-4 pl-3">Fri</div>
                <div className="CAL-DAY-HEADING hidden lg:block bg-white text-2xl text-gray-300 py-4 pl-3">Sat</div>
                
                <div className="CAL-DAY-BG-CONTAINER hidden bg-white lg:flex flex-col justify-center">
                    <Sunday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER hidden bg-white sm:flex flex-col justify-center">
                    <Monday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center">
                    <Tuesday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center">
                    <Wednesday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center">
                    <Monday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER hidden bg-white sm:flex flex-col justify-center">
                    <Tuesday />
                </div>
                <div className="CAL-DAY-BG-CONTAINER hidden bg-white lg:flex flex-col justify-center">
                    <Sunday />
                </div>
                


            </div>
            
            
            <div className="SCROLL-MORE-CONTAINER z-30 absolute bottom-0 bg-gradient-to-t from-white to-transparent w-full h-4/10 flex flex-col items-center justify-end">
                <div className="SCROLL-MOUSE-WRAPPER w-6 h-8 mb-10 rounded-full border-2 border-gray-300">
                    <div className="SCROLL-MOUSE-DOT h-1 w-1 bg-gray-300 mx-auto mt-2 rounded-full"></div>
                </div>
            </div>

            <div className="GAP-STEPS-CONTAINER absolute grid grid-col-1 grid-row-1 justify-center items-center invisible h-auto z-40 w-full bottom-0">
                
                <div className="GAP-STEP-1 relative z-10 col-start-1 -col-end-1 row-start-1 -row-end-1 h-20 my-16 w-auto px-10 flex flex-col justify-center items-center justify-items-stretch bg-black shadow-2xl rounded-md">
                    <div className="GAP-STEP-TITLE text-2xl text-white">Downtime?!</div>
                    <div className="GAP-STEP-SUB-TITLE text-lg text-gray-500">1-1:15pm</div>
                </div>
                
                <div className="GAP-STEP-2 relative z-20 col-start-1 -col-end-1 row-start-1 -row-end-1 h-20 my-16 w-auto px-10 flex flex-col justify-center items-center justify-items-stretch bg-black shadow-2xl rounded-md">
                    <div className="GAP-STEP-TITLE-2 text-2xl text-white">Bathroom break?!</div>
                    <div className="GAP-STEP-SUB-TITLE-2 text-lg text-gray-500">1:25-1:30pm</div>
                </div>

            </div>

        </div>
        <div className="COMP-SECTION h-100vh flex flex-col items-center w-full bg-black">
            <div className="COMP-CONTAINER max-w-7xl w-10/12 h-full flex flex-col justify-center items-center">
                <div className="COMP-HEADING-WRAPPER relative w-full h-36 flex justify-center items-center">
                    <div className="CAL-BROKEN-HEADING-1 absolute top-0 text-8xl text-center text-white">Calendar is broken.</div>
                    <div className="CAL-BROKEN-HEADING-2 absolute top-0 text-6xl text-center text-white">...many have tried to fix it.</div>
                </div>
                <div className="COMP-LOGOS-CONTAINER w-full grid grid-cols-3 grid-rows-2 gap-12">
                    <div className="LOGO-WRAPPER bg-calendly-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                    <div className="LOGO-WRAPPER bg-fellow-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                    <div className="LOGO-WRAPPER bg-clockwise-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                    <div className="LOGO-WRAPPER bg-doodle-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                    <div className="LOGO-WRAPPER bg-rescuetime-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                    <div className="LOGO-WRAPPER bg-woven-logo bg-contain bg-no-repeat h-24 bg-center"></div>
                </div>
            </div>
        </div>
        <div className="PROD-SECTION flex flex-col items-center w-full bg-gray-100">
            <div className="PROD-HEADING-CONTAINER mt-36 w-10/12 max-w-3xl">
                <div className="PROD-HEADING text-6xl text-center text-black">Magical is here to fix it.</div>
                <div className="PROD-SUB-HEADING text-3xl mt-6 text-center text-black">A new calendar, reimagined from the ground up, to help busy people take back control of their time.</div>
            </div>
            <div className="PROD-IMG max-w-7xl w-full h-60vh mx-auto bg-bottom bg-contain bg-no-repeat bg-product-img-lg"></div>
        </div>
        <div className="FOOTER-SECTION relative flex flex-col justify-center items-center h-80vh w-full bg-white">
            <div className="SUBSCRIBE-CONTAINER w-auto flex flex-col items-center -mt-20">
                <div className="SUBSCRIBE-HEADING text-10xl text-gray-100 -mb-16">Coming Soon.</div>
                <div className="SUBSCRIBE-SUB-HEADING text-6xl mb-10 text-black">Sign up for early access.</div>
                <div className="SUBSCRIBE-INPUT-CONTAINER grid grid-cols-4 rounded-md max-w-xl mx-10 w-full p-4 border border-gray-200 focus-within:ring-black focus-within:shadow-md focus-within:border-transparent focus-within:ring-2">
                    <input className="SUBSCRIBE-INPUT placeholder-gray-200 pl-2 col-span-3 focus:outline-none text-3xl" placeholder="hey@email.com"/>
                    <button className="SUBMIT-BUTTON col-span-1 bg-black text-white text-xl py-3 rounded-md focus:outline-none">Submit</button>
                </div>
            </div>
            <div className="FOOTER-LINKS-CONTAINER absolute bottom-0 flex flex-col items-center w-full mb-10 mx-10">
                <div className="LINKS-CONTAINER flex">
                    <div className="LINK text-center text-gray-600 border-b-2 border-gray-100 mx-4 pb-0.5">Blog</div>
                    <div className="LINK text-center text-gray-600 border-b-2 border-gray-100 mx-4 pb-0.5">Privacy Policy</div>
                    <div className="LINK text-center text-gray-600 border-b-2 border-gray-100 mx-4 pb-0.5">Media Kit</div>
                    <div className="LINK text-center text-gray-600 border-b-2 border-gray-100 mx-4 pb-0.5">Careers</div>
                </div>
                <div className="SOCIAL-LINKS-CONTAINER flex mt-6">
                    <div className="SOCIAL-LINK bg-linkedin h-6 w-6 mx-4  opacity-10 hover:opacity-30"></div>
                    <div className="SOCIAL-LINK bg-twitter h-6 w-6 mx-4  opacity-10 hover:opacity-30"></div>
                    <div className="SOCIAL-LINK bg-facebook h-6 w-6 mx-4  opacity-10 hover:opacity-30"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LadningPage;