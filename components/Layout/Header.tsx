import React, { useState } from "react";
import Link from "next/link";
import { Container, Button, HamburgerButton } from "../elements";
import LogoOmahku from "@/public/SVG/logo-omahku.svg";
import LogoOmahkuMobile from "@/public/SVG/logo-mobile.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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

          <HamburgerButton isShow={showMenu} setShow={setShowMenu} />

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

      {showMenu && (
        <div className="bg-white h-screen">
          <div className="flex flex-col gap-10 p-7">
            {menu.map((value) => (
              <Link
                key={value.label}
                href={value.link}
                className="text-xl font-semibold"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {value.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
