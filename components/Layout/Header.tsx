import React from "react";
import Link from "next/link";
import { Container, Button } from "../elements";
import LogoOmahku from "@/public/SVG/logo-omahku.svg";

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
    <Container className="bg-white sticky top-0 z-50">
      <div className="py-7 flex flex-row items-center justify-between">
        <LogoOmahku />

        <div className="flex flex-row gap-10">
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

        <div className="flex flex-row gap-5">
          <Button variant="plain" className="w-[100px] h-[48px]">
            Log In
          </Button>

          <Button variant="default" className="w-[100px] h-[48px]">
            Sign Up
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
