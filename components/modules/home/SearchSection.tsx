import React from "react";
import Image from "next/image";
import { Container } from "@/components/elements";
import SearchImage from "@/public/PNG/searchImage.png";
import SearchBox from "./partials/SearchBox";

const SearchSection = () => {
  return (
    <Container className="mt-40">
      <div className="flex justify-center relative">
        <SearchBox />
        <Image src={SearchImage} alt="" height={432} priority />
      </div>
    </Container>
  );
};

export default SearchSection;
