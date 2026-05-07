import LandingLayout from "./_layout";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Programs from "./components/programs";
import Membership from "./components/membership";
import Trainers from "./components/trainers";
import Contact from "./components/contact";
import Technology from "./components/tech";

export default function LandingPage() {
  return (
    <LandingLayout>
      <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Programs />
        <Membership />
        <Trainers />
        <Contact />

        <footer className="py-5 text-center border-top border-secondary text-white-50">
          <div className="container">
            <p className="fw-bold text-white">TITANFORGE FITNESS © 2026</p>
            <small>UNLEASH THE BEAST IN YOU</small>
          </div>
        </footer>
      </div>
    </LandingLayout>
  );
}
