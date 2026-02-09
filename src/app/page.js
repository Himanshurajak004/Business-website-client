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
import WhyUsSection from "@/components/WhyUsSection";
import TrustedBrands from "@/components/TrustedBrands";
import ValuesSection from "@/components/ValuesSection";
import OwnBrands from "@/components/OwnBrands";


export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Service />
      <NumbersGoVroom />
      <FullCirclePerformance />
       <Process /> 
      <Quote2 />

        <SuccessStories />
        <WhyUsSection />
       <CreativeTeam /> 
       
       <Quote />  
      <Testimonials />
      <CaseStudies />
      <OwnBrands />
      <ValuesSection />
     
      
      <CTA />
      <Footer />
      
      
    </>
  );
}
