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
    <Container className="my-20 flex flex-col items-center">
      <p className="text-gray font-medium mb-10">
        Trusted by Multinational Companies
      </p>

      <div className="flex flex-row items-center gap-10">
        {company.map((value) => (
          <Image
            key={value.label}
            src={value.image}
            alt={value.label}
            height={36}
          />
        ))}
      </div>
    </Container>
  );
};

export default TrustCompaniesSection;
