import { Metadata } from "next";
import Hero from "@/components/Hero";
import Client from "@/components/Client";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Click Up",

  // other metadata
  description: "Click Up"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Client />
      <Services />
      <ChooseUs />
      <Testimonial />
     
    </main>
  );
}
