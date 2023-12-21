import React from "react";
import { Container, Badge } from "@/components/elements";
import CardTestimonial from "./partials/CardTestimonial";

const TestimonialSection = () => {
  return (
    <Container className="my-20">
      <div className="flex flex-row justify-between items-end">
        <div>
          <Badge
            label="Testimonials"
            variant="default"
            className="w-[131px] text-primary"
          />

          <h1 className="text-4xl font-semibold mt-10">
            What Our Beloved Customers <br /> Say About Omahku
          </h1>
        </div>

        <div>
          <p className="text-gray text-base">
            Whether you&apos;re buying, selling, or investing in real estate, we
            have the expertise, <br /> resources, and dedication to help you
            achieve your goals. Contact us today to learn <br /> more about how
            we can help you with your real estate needs.
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
