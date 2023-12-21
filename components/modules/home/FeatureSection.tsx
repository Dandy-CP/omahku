import React from "react";
import { Container, Badge, Card } from "@/components/elements";
import HomeRentSVG from "@/public/SVG/icon/homeRent.svg";
import TrendSVG from "@/public/SVG/icon/trend.svg";
import BubbleChatSVG from "@/public/SVG/icon/bubleChat.svg";

const FeatureSection = () => {
  const valueFeature = [
    {
      label: "House Sold Out",
      total: "6300",
    },
    {
      label: "Apartment Rented",
      total: "1500",
    },
    {
      label: "Happy Customer",
      total: "7800",
    },
  ];

  const benefitFeature = [
    {
      icon: HomeRentSVG,
      label: "Personalized Service",
      desc: "We are committed to helping you find the right property that meets all your needs and exceeds your expectations.",
    },
    {
      icon: TrendSVG,
      label: "Local Market Expertise",
      desc: "We can provide valuable insights and guidance to help you make informed decisions when buying or selling a property.",
    },
    {
      icon: BubbleChatSVG,
      label: "Support and Guidance",
      desc: "We provide comprehensive support and guidance throughout the entire real estate process, from the initial consultation to the successful closing of your transaction.",
    },
  ];

  return (
    <Container className="my-28">
      <div className="flex justify-between">
        <div>
          <Badge
            label="Why Choose Omahku"
            variant="default"
            className="text-primary font-medium text-sm"
          />

          <h1 className="text-4xl font-bold mt-10">
            We are Committed to Providing <br /> Exceptional Service and Support
            <br /> to All Our Clients.
          </h1>

          <div className="flex flex-row gap-10 mt-16">
            {valueFeature.map((value) => (
              <div key={value.label}>
                <span className="text-3xl font-bold">
                  {value.total}
                  <span className="text-primary">+</span>
                </span>
                <p className="text-gray text-base font-medium mt-3">
                  {value.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {benefitFeature.map((value) => (
            <Card key={value.label} className="mb-3 bg-blueSlate w-[601px] p-5">
              <div className="flex flex-row justify-between gap-3">
                <div>
                  <value.icon />
                </div>

                <div>
                  <p className="text-base font-semibold">{value.label}</p>
                  <p className="text-sm font-medium text-gray">{value.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeatureSection;
