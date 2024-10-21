import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import HeroSection from "../components/herosection";
import Body from "../components/Body";
import FeaturedProducts from "../components/featuredProducts";

function HomePage() {
  return (
    <div className="bg-white dark:bg-custom-black">
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header>
        <nav className="mb-24">
          <Navbar />
        </nav>
      </header>
      <main>
        <section>
          <HeroSection />
        </section>
        <section className="mt-24">
          <Body />
        </section>
        <section className="mt-24">
          <FeaturedProducts />
        </section>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default HomePage;
