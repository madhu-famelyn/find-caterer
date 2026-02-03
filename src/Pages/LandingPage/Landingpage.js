import Hero from "./HeroSection/Hero";
import CategorySelectors from "./Selectors/Selector";
import FeaturedCaterers from "./FindCaterer/FeaturedCaterers";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <>
        <Hero/>
        <CategorySelectors/>
        <FeaturedCaterers/>
        <Footer/>
    </>

  );
}

export default LandingPage;
