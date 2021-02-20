import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {

  React.useLayoutEffect(() => {  

    let calTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".SECTION-1",
        scrub: true,
        start: "bottom bottom",
        end: "+=100%",
        pin: true,
        markers: true,
        id: "cal-pin"
      }});
  

    gsap.to(".HERO-HEADING", {y: "100vh", scale: 1.2, opacity: 0, 
      scrollTrigger: {
                trigger: ".SECTION-1",
                scrub: true,
                start: "top top",
                end: "50% 400",
                markers: true,
                id: "heroTL", 
                toggleActions: "restart complete reverse none",
            }})

    let pinCalAnim = gsap.from(".CALENDAR", {x: -100, 
      scrollTrigger:{
        trigger: ".SECTION-1",
        scrub: true,
        start: "bottom bottom",
        end: "+=200",
        pin: true,
        markers: true,
        id: "cal-zoom"
      }, duration: 1})

    let zoomCalAnim = gsap.to(".CALENDAR", {scale: 1.3, 
      scrollTrigger:{
        trigger: ".SECTION-1",
        scrub: true,
        start: "bottom bottom",
        end: "+=200",
        pin: true,
        markers: true,
        id: "cal-zoom"
      }})

      calTL.add(pinCalAnim, zoomCalAnim);



    });

  return (
    <div>
      <div className="SECTION-1 relative w-100vw h-200vh bg-gray-200 flex flex-col items-center">
        <div className="HERO-HEADING bg-red-200 text-6xl">Heading</div>
        <div className="CALENDAR bg-gray-300 absolute bottom-0 w-full h-80vh justify-self-end text-6xl">Calendar</div>
      </div>
      <div className="SECTION-2 w-100vw h-100vh bg-gray-500 flex justify-center items-center">
        <div className="HEADING text-6xl">Section 2</div>
      </div>
      <div className="SECTION-3 w-100vw h-100vh bg-gray-200 flex justify-center items-center">
        <div className="HEADING text-6xl">Section 3</div>
      </div>
    </div>

  );
}

export default App;
