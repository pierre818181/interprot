import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useIsMobile } from "../hooks/use-mobile";
import { DEFAULT_SAE_MODEL } from "@/config";
import { SAE_CONFIGS } from "@/SAEConfigs";

const LandingPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main
        className={`flex-grow flex flex-col items-center ${
          isMobile ? "text-left mt-16" : "text-center justify-center px-4"
        }`}
      >
        <h1 className="text-3xl font-semibold mb-4">
          Interpreting Proteins through Language Models
        </h1>
        <p className="text-base sm:text-xl mb-8 max-w-2xl mt-4 sm:mt-0">
          InterProt is an open-source project applying mechanistic interpretability to protein
          language models. The goal is to better understand these models and steer them to design
          new proteins.
        </p>
        <p className="text-base sm:text-xl mb-8 max-w-2xl order-3 sm:order-none">
          The project was started by{" "}
          <a href="https://etowahadams.com" className="underline">
            Etowah
          </a>{" "}
          and{" "}
          <a href="https://liambai.com" className="underline">
            Liam
          </a>
          . They trained some Sparse Autoencoders on ESM2 and built an interactive visualizer. More
          soon!
        </p>
        <Link
          to={`/sae-viz/${DEFAULT_SAE_MODEL}/${SAE_CONFIGS[DEFAULT_SAE_MODEL].defaultDim}`}
          className="bg-black text-white px-6 py-3 rounded-full text-lg inline-block order-2 sm:order-none mb-8 w-full sm:w-auto text-center"
        >
          SAE Visualizer
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
