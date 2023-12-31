import React from "react";
import { Button, Card } from "@/components/elements";
import LocationSVG from "@/public/SVG/icon/location.svg";
import StyleHomeSVG from "@/public/SVG/icon/home.svg";
import CoinSVG from "@/public/SVG/icon/dollarcircle.svg";
import SearchSVG from "@/public/SVG/icon/search.svg";

const SearchBox = () => {
  return (
    <Card
      withShadow
      className="bg-white p-5 top-[-50px] w-2/3 rounded-md absolute laptop:w-4/5 tablet:w-full phone:hidden"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <LocationSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">
              Location
            </span>
          </div>

          <p className="text-xl font-medium tablet:text-base">
            Semarang, Indonesia
          </p>
        </div>

        <div className="border border-[#EBECF5]" />

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <StyleHomeSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">Style</span>
          </div>

          <p className="text-xl font-medium tablet:text-base">Scandinavian</p>
        </div>

        <div className="border border-[#EBECF5]" />

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <CoinSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">
              Range Price
            </span>
          </div>

          <p className="text-xl font-medium tablet:text-base">
            $50.000 - $60.000
          </p>
        </div>

        <Button variant="default" className="w-[120px]">
          <div className="flex flex-row items-center justify-center gap-2">
            <SearchSVG />
            <p className="font-thin text-sm">Search</p>
          </div>
        </Button>
      </div>
    </Card>
  );
};

export default SearchBox;
