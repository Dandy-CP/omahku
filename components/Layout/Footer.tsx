import React from "react";
import Link from "next/link";
import LogoOmahkuWhiteSVG from "@/public/SVG/logo-omahku-white.svg";
import FacebookSVG from "@/public/SVG/icon/facebook.svg";
import InstagramSVG from "@/public/SVG/icon/instagram.svg";
import YouTubeSVG from "@/public/SVG/icon/youtube.svg";

const Footer = () => {
  const ourService = [
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
      label: "Property Invesment",
      link: "#",
    },
  ];

  const aboutUs = [
    {
      label: "Our Profile",
      link: "#",
    },
    {
      label: "Terms and Condition",
      link: "#",
    },
    {
      label: "Privacy Policy",
      link: "#",
    },
  ];

  const more = [
    {
      label: "News",
      link: "#",
    },
    {
      label: "Article",
      link: "#",
    },
    {
      label: "Testimonials",
      link: "#",
    },
  ];

  const followUs = [
    {
      icon: FacebookSVG,
      link: "#",
    },
    {
      icon: InstagramSVG,
      link: "#",
    },
    {
      icon: YouTubeSVG,
      link: "#",
    },
  ];

  return (
    <div className="bg-dark h-96 px-20 py-20 tablet:h-auto phone:h-auto phone:px-10">
      <div className="flex flex-row justify-between tablet:flex-col phone:flex-col">
        <div className="flex flex-col gap-5">
          <LogoOmahkuWhiteSVG />
          <p className="text-[#A0A2B6]">
            Jalan Nirwanasari Raya No. 18 A, Jatimulyo, <br /> Kota Semarang,
            Jawa Tengah, Indonesia
          </p>
          <p className="text-white">omahku@creative.com</p>
        </div>

        <div className="tablet:mt-5 phone:mt-5">
          <p className="text-[#A0A2B6] mb-5">Our Service</p>

          <div className="flex flex-col gap-3">
            {ourService.map((value) => (
              <Link key={value.label} href={value.link} className="text-white">
                {value.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="tablet:mt-5 phone:mt-5">
          <p className="text-[#A0A2B6] mb-5">About Us</p>

          <div className="flex flex-col gap-3">
            {aboutUs.map((value) => (
              <Link key={value.label} href={value.link} className="text-white">
                {value.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="tablet:mt-5 phone:mt-5">
          <p className="text-[#A0A2B6] mb-5">More</p>

          <div className="flex flex-col gap-3">
            {more.map((value) => (
              <Link key={value.label} href={value.link} className="text-white">
                {value.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="tablet:mt-5 phone:mt-5">
          <p className="text-white mb-5">Follow Us</p>

          <div className="flex flex-row items-center gap-3">
            {followUs.map((value, index) => (
              <span key={index}>{<value.icon />}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
