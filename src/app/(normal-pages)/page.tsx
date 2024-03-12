import Cta from "../components/home/Cta";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ResearchTools from "../components/home/ResearchTools";
import SearchCta from "../components/home/SearchCta";
import ValueProposition from "../components/home/ValueProposition";

export default function Home() {
   return (
      <>
         <Hero />
         <SearchCta />
         <br />
         <br />
         <ValueProposition />
         <br />
         <br />
         <Features />
         <br />
         <br />
         <ResearchTools />
         {/* <br />
         <br />
         <Cta /> */}
      </>
   );
}
