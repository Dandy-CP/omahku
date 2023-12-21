import React from "react";
import Image from "next/image";
import { Container } from "@/components/elements";
import OlaPNG from "@/public/PNG/ola.png";
import MicrosoftPNG from "@/public/PNG/microsoft.png";
import WalmartPNG from "@/public/PNG/walmart.png";
import AmazonPNG from "@/public/PNG/amazon.png";
import FedexPNG from "@/public/PNG/fedex.png";
import AirBnbPNG from "@/public/PNG/airbnb.png";

const TrustCompaniesSection = () => {
  const company = [
    {
      label: "Ola",
      image: OlaPNG,
    },
    {
      label: "Microsoft",
      image: MicrosoftPNG,
    },
    {
      label: "Walmart",
      image: WalmartPNG,
    },
    {
      label: "Amazon",
      image: AmazonPNG,
    },
    {
      label: "Fedex",
      image: FedexPNG,
    },
    {
      label: "AirBNB",
      image: AirBnbPNG,
    },
  ];

  return (
    <Container className="my-20 flex flex-col items-center phone:mx-3">
      <p className="text-gray font-medium mb-10 phone:text-center">
        Trusted by{" "}
        <br className="phone:block tablet:hidden laptop:hidden desktop:hidden large:hidden" />
        Multinational Companies
      </p>

      <div className="flex flex-row items-center gap-10 tablet:flex-wrap tablet:justify-center phone:flex-wrap phone:justify-center">
        {company.map((value) => (
          <Image
            key={value.label}
            src={value.image}
            alt={value.label}
            className="h-[36px] w-1/2 object-cover laptop:h-[25px] tablet:h-1/6 tablet:w-1/6 phone:h-1/6 phone:w-1/6"
          />
        ))}
      </div>
    </Container>
  );
};

export default TrustCompaniesSection;
