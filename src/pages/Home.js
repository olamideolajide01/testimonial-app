import React from "react";
import HeroPage from "../components/HeroPage";
import FooterPage from "../components/FooterPage";
import TestimonialHero from "../components/TestimonialHero";
import Customer from "../components/Customer";
import Vendors from "../components/Vendors";

export default function Home() {
  return (
    <div>
      <main className="mb-32">
        <HeroPage />
        <Customer className=" container py-5 my-6" />
        <TestimonialHero />
        <Vendors className=" container" />
      </main>
      <FooterPage />
    </div>
  );
}
