import React from "react";
import Image from "next/image";
import { Card, Badge } from "@/components/elements";
import DummyPNG from "@/public/dummy.png";
import LocationSVG from "@/public/SVG/icon/location.svg";
import WideSVG from "@/public/SVG/icon/wide.svg";
import BedSVG from "@/public/SVG/icon/bed.svg";
import BathSVG from "@/public/SVG/icon/bath.svg";

const CardProduct = () => {
  return (
    <Card className="bg-white pb-1 p-0 w-[354px]">
      <div className="relative">
        <Badge
          label="Modern"
          variant="white"
          className="w-[122px] absolute right-3 top-3 text-primary text-sm font-light"
        />
        <Image
          src={DummyPNG}
          alt=""
          height={236}
          className="rounded-t-md rounded-tr-md"
        />
      </div>

      <div className="m-5">
        <div className="flex items-center gap-2">
          <LocationSVG />
          <span className="text-[14px] text-[#9496A5] font-thin">
            Tembalang, Semarang
          </span>
        </div>

        <h1 className="text-3xl mt-3">$60.000</h1>

        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row items-center gap-2">
            <WideSVG />
            <p className="text-sm font-light">6x6m</p>
          </div>

          <div className="border border-[#EBECF5]" />

          <div className="flex flex-row items-center gap-2">
            <BedSVG />
            <p className="text-sm font-light">2 Bedroom</p>
          </div>

          <div className="border border-[#EBECF5]" />

          <div className="flex flex-row items-center gap-2">
            <BathSVG />
            <p className="text-sm font-light">2 Bathroom</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardProduct;
