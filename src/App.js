import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

function App() {

    gsap.fromTo(".HEADING", {y: -100, scale: 1.2, opacity: 0}, {y: 0, scale: 1, opacity: 1, duration: 1.5}) 

  return (
  
    <div className="w-100vw h-100vh flex justify-center items-center">
      <div className="HEADING text-6xl">Tailwind and GSAP</div>
    </div>

  );
}

export default App;
