import React from "react";
import { Button, Container } from "@/components/elements";
import CardProduct from "./partials/CardProduct";

const FeaturedHouseSection = () => {
  return (
    <Container className="my-20 p-10 bg-lightGray rounded-lg">
      <h1 className="text-center text-4xl font-bold">
        Featured House You Would Like
      </h1>

      <p className="text-center text-sm text-gray font-light mt-4">
        Our agency has access to a wide range of property listings, including
        off-market properties and exclusive listings <br /> that may not be
        available to the general public.
      </p>

      <div className="mt-14 flex flex-row justify-evenly">
        {Array(3)
          .fill(3)
          .map((_, index) => (
            <CardProduct key={index} />
          ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="outline" className="w-[160px] h-[54px] text-primary">
          See More
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedHouseSection;
