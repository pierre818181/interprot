import React, { useEffect } from "react";
import Navbar from "./Navbar";

const EmbeddedTweet = ({ url }: { url: string }) => {
  return (
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        <a href={url} />
      </p>
    </blockquote>
  );
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl mt-12 text-left">About InterProt</h1>
        <p className="mt-6 text-left">
          We're working on writing up some more technical details. Stay tuned! Meanwhile, if you're
          interested in learning more about the background, methods, and our visualizer features,
          check out these tweets:
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EmbeddedTweet url="https://twitter.com/liambai21/status/1852765669080879108" />
          <EmbeddedTweet url="https://twitter.com/liambai21/status/1857066057774567706" />
          <EmbeddedTweet url="https://twitter.com/liambai21/status/1854739750692802566" />
        </div>

        <h1 className="text-4xl mt-10 text-left">Learning from the Community</h1>
        <p className="mt-6 text-left">
          Since we shared InterProt on Twitter, it has been motivating and inspiring to see the
          community effort on interpreting SAE features. If you find a cool feature, please reach
          out!
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EmbeddedTweet url="https://twitter.com/ddelalamo/status/1854785030523924882" />
          <EmbeddedTweet url="https://twitter.com/dargason/status/1853220879569682506" />
          <EmbeddedTweet url="https://twitter.com/atsocf/status/1857773624893047141?s=46" />
          <EmbeddedTweet url="https://twitter.com/m1nj12/status/1855022505700081671" />
          <EmbeddedTweet url="https://twitter.com/james_krieger/status/1855282447128117403" />
          <EmbeddedTweet url="https://twitter.com/ddelalamo/status/1854925583169286497" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
