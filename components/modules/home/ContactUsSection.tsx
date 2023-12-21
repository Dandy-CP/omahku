import React from "react";
import { Container, Button } from "@/components/elements";

const ContactUsSection = () => {
  return (
    <Container className="my-20 p-14 bg-contactus-pattern bg-cover">
      <h1 className="text-4xl font-bold text-center">
        Don’t Need to Wait <br />
        Start Invest Your Future From Now.
      </h1>

      <p className="text-sm text-gray text-center mt-12">
        Contact us to schedule a consultation and learn how we can help you
        achieve your real estate <br /> investment goals.
      </p>

      <div className="flex flex-row items-center justify-center gap-5 mt-10">
        <Button variant="default" className="w-[223px]">
          Schedule Consultation
        </Button>
        <Button variant="white" className="w-[133px] text-primary">
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default ContactUsSection;
