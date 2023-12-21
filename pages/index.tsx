import React from "react";
import {
  HeroSection,
  SearchSection,
  TrustCompaniesSection,
  FeatureSection,
  FeaturedHouseSection,
  TestimonialSection,
  ContactUsSection,
} from "@/components/modules/home";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <SearchSection />
      <TrustCompaniesSection />
      <FeatureSection />
      <FeaturedHouseSection />
      <TestimonialSection />
      <ContactUsSection />
    </React.Fragment>
  );
}
