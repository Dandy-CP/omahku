import React from "react";
import { Container, Badge } from "@/components/elements";
import CardTestimonial from "./partials/CardTestimonial";

const TestimonialSection = () => {
  return (
    <Container className="my-20 phone:mx-3">
      <div className="flex flex-row justify-between items-end tablet:flex-col phone:flex-col phone:items-center">
        <div className="tablet:flex tablet:flex-col tablet:items-center phone:flex phone:flex-col phone:items-center">
          <Badge
            label="Testimonials"
            variant="default"
            className="w-[131px] text-primary"
          />

          <h1 className="text-4xl font-semibold mt-10 tablet:text-center phone:text-center phone:text-2xl phone:w-[320px]">
            What Our Beloved Customers
            <br className="tablet:hidden phone:hidden" /> Say About Omahku
          </h1>
        </div>

        <div>
          <p className="text-gray text-base tablet:text-center tablet:mt-5 phone:w-[320px] phone:text-center phone:text-sm phone:mt-5">
            Whether you&apos;re buying, selling, or investing in real estate, we
            have the expertise, <br className="tablet:hidden phone:hidden" />
            resources, and <br className="tablet:hidden phone:hidden" /> more
            about how we can help you with your real estate needs.
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-row gap-5 overflow-x-auto">
        {Array(5)
          .fill(5)
          .map((_, index) => (
            <CardTestimonial key={index} />
          ))}
      </div>
    </Container>
  );
};

export default TestimonialSection;
