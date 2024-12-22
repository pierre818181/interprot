import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DEFAULT_SAE_MODEL } from "@/config";
import { SAE_CONFIGS } from "@/SAEConfigs";
import HomeNavigator from "./HomeNavigator";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center">
      <HomeNavigator />
      {isMobile ? (
        <div className="relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu />
          </button>
          {isMobileMenuOpen && (
            <nav className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-9 right-6 text-gray-600 hover:text-gray-900"
              >
                <X />
              </button>
              <Link
                to={`/sae-viz/${DEFAULT_SAE_MODEL}/${SAE_CONFIGS[DEFAULT_SAE_MODEL].defaultDim}`}
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visualizer
              </Link>
              <Link
                to="https://github.com/etowahadams/plm-interpretability/tree/main"
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <Link
                to="https://huggingface.co/liambai/InterProt-ESM2-SAEs"
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Models
              </Link>
              <Link
                to="/about"
                className="text-2xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="mailto:liambai2000@gmail.com"
                className="text-2xl text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      ) : (
        <nav className="space-x-4 flex">
          <Link to="/sae-viz" className="text-gray-600 hover:text-gray-900">
            Visualizer
          </Link>
          <Link
            to="https://github.com/etowahadams/plm-interpretability/tree/main"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </Link>
          <Link
            to="https://huggingface.co/liambai/InterProt-ESM2-SAEs"
            className="text-gray-600 hover:text-gray-900"
          >
            Models
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <a href="mailto:liambai2000@gmail.com" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
