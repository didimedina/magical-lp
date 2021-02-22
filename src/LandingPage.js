import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const LadningPage = () => {
    
    React.useLayoutEffect(() => {  

        gsap.timeline({
        scrollTrigger: {
            trigger: ".HERO-SECTION",
            scrub: 1,
            start: "top top",
            end: "+=400% bottom",
            pin: true,
            markers: true,
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
        .to(".GAP-STEP-2", {transformOrigin: "bottom", scale: 30, duration: 1}, ">") // hold second message then zoom
        .to(".GAP-STEP-2", {y: "120px", duration: 0.5}, "<")
        .to([".GAP-STEP-TITLE-2", ".GAP-STEP-SUB-TITLE-2"], {opacity: 0, duration: 0.25}, "<")
        // .to({}, {duration: 1}) // pause at the end


        gsap.timeline({
        scrollTrigger: {
            trigger: ".COMP-SECTION",
            scrub: 1,
            start: "top top",
            end: "+=200%",
            pin: true,
            markers: true,
            id: "comp-pin"
        }})

    });

  return (
    <div>
        <div className="HERO-SECTION relative overflow-hidden flex flex-col items-center bg-white w-full h-100vh">
            
            <div className="HERO-COPY-CONTAINER flex flex-col justify-center self-center max-w-2xl h-6/10 z-10 mx-16">
                <div className="HERO-LOGO mx-auto h-8 w-8 mb-10 bg-logo bg-cover bg-no-repeat"></div>
                <div className="HERO-HEADING text-6xl leading-tight text-center">It’s time to talk about your calendar...</div>
            </div>
            
            <div className="CAL-CONTAINER absolute top-6/10 grid grid-cols-7 grid-rows-cal gap-line bg-gray-200 z-20 w-10/12 max-w-7xl border-offset ring-1 ring-gray-200 h-120vh">
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Sun</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Mon</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Tues</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Wed</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Thur</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Fri</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Sat</div>
                <div className="CAL-DAY-BG-CONTAINER flex flex-col justify-center bg-white"></div>
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center"></div>
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center"></div>
                
                <div className="CAL-DAY-BG-CONTAINER bg-white flex flex-col justify-center">
                    <div className="DAY-EVENTS-CONTAINER relative h-80vh mx-1">
                        <div className="POINTER absolute z-20 top-0 h-0.5 w-11/10 -ml-1/20 bg-gray-800"></div>
                        
                        <div className="EVENT-CONTAINER bg-transparent h-15min"></div>
                        
                        <div className="EVENT-CONTAINER bg-cal-blue my-1 h-30min">
                            <div className="EVENT-TITLE">💭 Stand Up</div>
                        </div>
                        
                        <div className="EVENT-CONTAINER bg-cal-green h-3/10">
                            <div className="EVENT-TITLE">👨🏻‍💻  Prep for Board Meeting</div>
                        </div>
                        
                        <div className="EVENT-CONTAINER bg-cal-blue  h-1hour">
                            <div className="EVENT-TITLE">👨🏼‍🎨 Design Review with Eng</div>
                        </div>

                        <div className="GAP-CONTAINER relative z-10 overflow-hidden bg-gray-200 h-15min">
                            <div className="GAP-FILL w-full h-full bg-cal-red"></div>
                        </div>

                        <div className="EVENT-CONTAINER bg-cal-red truncate h-1hour">
                            <div className="EVENT-TITLE">📥 Inbox Zero</div>
                        </div>
                    
                        <div className="EVENT-CONTAINER bg-cal-blue truncate h-30min">
                            <div className="EVENT-TITLE">John + Mary: OKRs Sync</div>
                        </div>
                    
                        <div className="EVENT-CONTAINER bg-cal-blue truncate h-30min">
                            <div className="EVENT-TITLE">John + Tommy: Monthly</div>
                        </div>
                        
                        <div className="EVENT-CONTAINER bg-cal-yellow truncate h-30min">
                            <div className="EVENT-TITLE">Pick up kids from school</div>
                        </div>
 
                        <div className="EVENT-CONTAINER bg-cal-green h-1hour">
                            <div className="EVENT-TITLE">Deep Work Buffer</div>
                        </div>  
                         
                        <div className="EVENT-CONTAINER bg-cal-red truncate h-30min">
                            <div className="EVENT-TITLE">Wrap Up Day</div>
                        </div>                                            
                    
                    </div>
                </div>
                
                <div className="CAL-DAY-BG-CONTAINER bg-white"></div>
                <div className="CAL-DAY-BG-CONTAINER bg-white"></div>
                <div className="CAL-DAY-BG-CONTAINER bg-white"></div>


            </div>
            
            
            <div className="SCROLL-MORE-CONTAINER z-30 absolute bottom-0 bg-gradient-to-t from-white to-transparent w-full h-4/10 flex flex-col items-center justify-end">
                <div className="SCROLL-MOUSE-WRAPPER w-6 h-8 mb-10 rounded-full border-2 border-gray-300">
                    <div className="SCROLL-MOUSE-DOT h-1 w-1 bg-gray-300 mx-auto mt-2 rounded-full"></div>
                </div>
            </div>

            <div className="GAP-STEPS-CONTAINER absolute grid grid-col-1 grid-row-1 justify-center items-center invisible h-auto z-40 w-full bottom-0">
                
                <div className="GAP-STEP-1 relative z-10 col-start-1 -col-end-1 row-start-1 -row-end-1 h-20 my-16 w-auto px-10 flex flex-col justify-center items-center justify-items-stretch bg-gray-900 shadow-2xl rounded-md">
                    <div className="GAP-STEP-TITLE text-2xl text-white">Downtime?!</div>
                    <div className="GAP-STEP-SUB-TITLE text-lg text-gray-500">1-1:15pm</div>
                </div>
                
                <div className="GAP-STEP-2 relative z-20 col-start-1 -col-end-1 row-start-1 -row-end-1 h-20 my-16 w-auto px-10 flex flex-col justify-center items-center justify-items-stretch bg-gray-900 shadow-2xl rounded-md">
                    <div className="GAP-STEP-TITLE-2 text-2xl text-white">Bathroom break?!</div>
                    <div className="GAP-STEP-SUB-TITLE-2 text-lg text-gray-500">1:25-1:30pm</div>
                </div>

            </div>

        </div>
        <div className="COMP-SECTION h-100vh flex flex-col items-center w-full bg-gray-900">
            <div className="COMP-CONTAINER max-w-7xl w-10/12 h-full flex flex-col justify-center items-center">
                <div className="COMP-HEADING-WRAPPER relative w-full h-36 flex justify-center items-center">
                    <div className="CAL-BROKEN-HEADING absolute top-0 text-8xl text-white">Calendar is broken.</div>
                    <div className="CAL-BROKEN-HEADING absolute top-0 text-8xl text-white">...many have tried to fix it.</div>
                </div>
                <div className="COMP-LOGOS-CONTAINER w-full grid grid-cols-3 grid-rows-3 gap-8">
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                    <div className="LOGO-WRAPPER border-2 rounded-lg border-gray-700 h-32"></div>
                </div>
            </div>
        </div>
        <div className="FOOTER-SECTION h-100vh w-full bg-gray-200">Footer Section</div>

    </div>
  );
}

export default LadningPage;