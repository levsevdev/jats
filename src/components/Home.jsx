import Schedule from "./Schedule";
import ServicesList from "./ServicesList";
import Hero from "./Hero";
import CtoA from "./CtoA";
import Slideshow from "./Slideshow";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesList />
      <div className="flex flex-col md:flex-row">
        <CtoA />
        <Schedule />
      </div>
        <Slideshow />
    </>
  );
}
