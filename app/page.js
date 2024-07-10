import GetInTouch from "./_components/GetInTouch";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Techno from "./_components/Techno";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Techno/>
      <Projects/>
      <GetInTouch/>
    </div>
  );
}
