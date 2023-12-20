import React from "react";
import { Button } from "@/components/elements";
import LocationSVG from "@/public/SVG/icon/location.svg";
import StyleHomeSVG from "@/public/SVG/icon/home.svg";
import CoinSVG from "@/public/SVG/icon/dollarcircle.svg";
import SearchSVG from "@/public/SVG/icon/search.svg";

const SearchBox = () => {
  return (
    <div className="bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] top-[-50px] h-[86px] w-2/3 rounded-md absolute">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <LocationSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">
              Location
            </span>
          </div>

          <p className="text-xl font-medium">Semarang, Indonesia</p>
        </div>

        <div className="border border-[#EBECF5]" />

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <StyleHomeSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">Style</span>
          </div>

          <p className="text-xl font-medium">Scandinavian</p>
        </div>

        <div className="border border-[#EBECF5]" />

        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <CoinSVG />
            <span className="text-[14px] text-[#9496A5] font-thin">
              Range Price
            </span>
          </div>

          <p className="text-xl font-medium">$50.000 - $60.000</p>
        </div>

        <Button variant="default" className="w-[120px]">
          <div className="flex flex-row items-center justify-center gap-2">
            <SearchSVG />
            <p className="font-thin text-sm">Search</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
