import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollecton from "../components/LatestCollecton";
import NewsletterBox from "../components/NewsletterBox";
import OurRules from "../components/OurRules";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecton />
      <BestSeller />
      <OurRules />
      <NewsletterBox />
    </div>
  );
};

export default Home;
