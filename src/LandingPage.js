import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const LadningPage = () => {
    
    React.useLayoutEffect(() => {  

        gsap.timeline({
        scrollTrigger: {
            trigger: ".HERO-SECTION",
            scrub: true,
            start: "top top",
            end: "+=200%",
            pin: true,
            markers: true,
            id: "hero-pin"
        }})
        .to(".HERO-COPY-CONTAINER", {scale: 0.4, duration: 1, opacity: 0})
        .to(".SCROLL-MORE-CONTAINER", {y: "+=100%", opacity: 0, duration: 0.5}, "<")
        .to(".CAL-CONTAINER", {y: "-=60%", duration: 2}, "<")
        .to(".CAL-CONTAINER", {scale: 2, duration: 2}, "+=0")
        .to({}, {duration: 1})
    

    });

  return (
    <div>
        <div className="HERO-SECTION relative overflow-hidden flex flex-col items-center bg-white w-full h-100vh">
            
            <div className="HERO-COPY-CONTAINER flex flex-col justify-center self-center max-w-2xl h-6/10 z-10 mx-16">
                <div className="HERO-LOGO mx-auto h-8 w-8 mb-6 bg-logo bg-cover bg-no-repeat"></div>
                <div className="HERO-HEADING text-6xl leading-tight text-center">It’s time to talk about your calendar...</div>
            </div>
            
            <div className="CAL-CONTAINER absolute top-6/10 grid grid-cols-7 grid-rows-cal gap-line bg-gray-200 z-20 w-10/12 max-w-5xl border-offset ring-1 ring-gray-200 h-120vh">
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Sun</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Mon</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Tues</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Wed</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Thur</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Fri</div>
                <div className="CAL-DAY-HEADING bg-white text-2xl text-gray-300 py-4 pl-3">Sat</div>
                <div className="CAL-DAY-EVENTS-CONTAINER flex flex-col justify-end bg-white">
                    <div className="CAL-DAY-EVENTS-WRAPPER h-100vh mb-20 mx-1 bg-gray-400"></div>
                </div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>
                <div className="CAL-DAY-EVENTS-CONTAINER bg-white"></div>


            </div>
            
            
            <div className="SCROLL-MORE-CONTAINER z-30 absolute bottom-0 bg-gradient-to-t from-white to-transparent w-full h-4/10 flex flex-col items-center justify-end">
                <div className="SCROLL-MOUSE-WRAPPER bg-gray-500 w-10 h-10 mb-10"></div>
            </div>
        </div>
        <div className="COMP-SECTION h-100vh w-full bg-gray-400">Comps Section</div>

    </div>
  );
}

export default LadningPage;