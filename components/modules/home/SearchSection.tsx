import React from "react";
import Image from "next/image";
import { Container } from "@/components/elements";
import SearchBox from "./partials/SearchBox";
import SearchImage from "@/public/PNG/searchImage.png";
import SearchImageMobile from "@/public/PNG/searchImageMobile.png";

const SearchSection = () => {
  return (
    <Container className="mt-40 phone:mx-0 phone:mt-0">
      <div className="flex justify-center relative phone:block">
        <SearchBox />

        <div className="phone:hidden">
          <Image src={SearchImage} alt="" height={432} priority />
        </div>

        <div className="phone:block tablet:hidden laptop:hidden desktop:hidden large:hidden">
          <Image src={SearchImageMobile} alt="" priority />
        </div>
      </div>
    </Container>
  );
};

export default SearchSection;
