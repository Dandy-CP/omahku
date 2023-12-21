import React from "react";
import Link from "next/link";
import { Container, Button } from "../elements";
import LogoOmahku from "@/public/SVG/logo-omahku.svg";
import LogoOmahkuMobile from "@/public/SVG/logo-mobile.svg";

const Header = () => {
  const menu = [
    {
      label: "Buy House",
      link: "#",
    },
    {
      label: "Rent Apartment",
      link: "#",
    },
    {
      label: "Sell Properties",
      link: "#",
    },
    {
      label: "News & Article",
      link: "#",
    },
    {
      label: "About Us",
      link: "#",
    },
  ];

  return (
    <div className="bg-white sticky top-0 z-50">
      <Container className="phone:mx-3">
        <div className="py-7 flex flex-row items-center justify-between">
          <div className="tablet:hidden phone:hidden">
            <LogoOmahku />
          </div>

          <div className="tablet:block phone:block laptop:hidden desktop:hidden large:hidden">
            <LogoOmahkuMobile />
          </div>

          <div className="space-y-1.5 tablet:block phone:block laptop:hidden desktop:hidden large:hidden">
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
            <span className="block h-0.5 w-8 bg-black"></span>
          </div>

          <div className="flex flex-row gap-10 laptop:gap-5 tablet:hidden phone:hidden">
            {menu.map((value) => (
              <Link
                key={value.label}
                href={value.link}
                className="text-sm font-medium"
              >
                {value.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-row gap-5 laptop:gap-1 tablet:hidden phone:hidden">
            <Button variant="plain" className="w-[100px] h-[48px]">
              Log In
            </Button>

            <Button variant="default" className="w-[100px] h-[48px]">
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
