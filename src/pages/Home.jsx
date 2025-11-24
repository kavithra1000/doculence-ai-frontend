import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useExtractStore from "../stores/useExtractStore";
import HeroSection from "../components/Home/HeroSection";
import ExtractorForm from "../components/Home/ExtractorForm";
import MainSection from "../components/Home/MainSection";
import FeatureSection from "../components/Home/FeatureSection";
import HowItWorksSection from "../components/Home/HowItWorksSection";
import TestimonialSection from "../components/Home/TestimonialSection .JSX";
import Navbar from "../components/Navbar";
import Prices from "../components/Home/Prices";
import Auth from "../components/Home/Auth";

const Home = () => {
  const { summary, content, error } = useExtractStore();
  const [selectedText, setSelectedText] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("content"); // default tab
  const [authUI, setAuthUI] = useState(false); 

  console.log("auth ui", authUI)

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="">
      <Navbar authUI={authUI} setAuthUI={setAuthUI}/>
      <div className="min-h-screen pt-20 sm:pt-10 px-4 xl:px-2 md:px-12 max-w-7xl mx-auto pb-10">
        <HeroSection authUI={authUI} setAuthUI={setAuthUI} />
        <ExtractorForm setActiveTab={setActiveTab}/>

        <MainSection
          summary={summary}
          content={content}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
          message={message}
          setMessage={setMessage}
        />
        <HowItWorksSection />


        <FeatureSection />
        <Prices />
        
        <TestimonialSection />
        <Auth authUI={authUI} setAuthUI={setAuthUI}/>

      </div>
    </div>
  );
};

export default Home;
