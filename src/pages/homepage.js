import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import HeroSection from "../components/herosection";

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
        {/* <section>
          <About />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Works />
        </section>
        <section>
          <Contact />
        </section> */}
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default HomePage;
