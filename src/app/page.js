import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CaseStudies from "../components/CaseStudies";
import CreativeTeam from "../components/CreativeTeam";
import Process from "../components/Process";
import Quote from "../components/Quote";
import Quote2 from "../components/Quote2";
import SuccessStories from "@/components/SuccessStories";
import FullCirclePerformance from "@/components/FullCirclePerformance";
import NumbersGoVroom from "@/components/NumbersGoVroom";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <NumbersGoVroom />
      <FullCirclePerformance />
      <Quote2 />
        <SuccessStories />
       <CreativeTeam /> 
       <Process />  
       <Quote />  
      <Testimonials />
      <CaseStudies />

      <CTA />
      <Footer />
      
      
    </>
  );
}
