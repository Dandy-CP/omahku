import { Button, Container } from "@/components/elements";
import React from "react";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[52px] font-bold mb-7 mt-10 phone:text-3xl phone:w-[320px]">
          One-Stop Destination for All <br className="phone:hidden" /> Real
          Estate Needs
        </h1>

        <p className="font-normal text-center text-xl text-[#6E6F7C] mb-10 tablet:text-lg phone:text-sm phone:w-[320px]">
          We have a wide range of properties available to suit any budget or
          lifestyle. <br /> Our agents will work with you to find the perfect
          home that meets all your needs and <br /> exceeds your expectations.
        </p>

        <div className="flex gap-5 phone:flex-col">
          <Button
            variant="default"
            className="w-[223px] h-[54px] phone:w-[320px]"
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            className="w-[223px] h-[54px] text-primary phone:w-[320px]"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
