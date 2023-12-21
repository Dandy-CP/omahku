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
    <Card className="bg-white pb-1 p-0 w-[354px] rounded-md laptop:w-[280px] tablet:w-[257px] phone:w-[257px]">
      <div className="relative">
        <Badge
          label="Modern"
          variant="white"
          className="w-[122px] absolute right-3 top-3 text-primary text-sm font-light phone:w-[77px] phone:h-[34px] phone:text-xs"
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
          <span className="text-[14px] text-[#9496A5] font-thin tablet:text-xs phone:text-[9px]">
            Tembalang, Semarang
          </span>
        </div>

        <h1 className="text-3xl font-bold mt-3 tablet:text-2xl phone:text-2xl">
          $60.000
        </h1>

        <div className="flex flex-row flex-wrap gap-3 mt-4 tablet:flex-wrap phone:flex-wrap">
          <div className="flex flex-row items-center gap-2">
            <WideSVG />
            <p className="text-sm font-light laptop:text-xs tablet:text-[10px] phone:text-[10px]">
              6x6m
            </p>
          </div>

          <div className="border border-[#EBECF5]" />

          <div className="flex flex-row items-center gap-2">
            <BedSVG />
            <p className="text-sm font-light laptop:text-xs tablet:text-[10px] phone:text-[10px]">
              2 Bedroom
            </p>
          </div>

          <div className="border border-[#EBECF5]" />

          <div className="flex flex-row items-center gap-2">
            <BathSVG />
            <p className="text-sm font-light laptop:text-xs tablet:text-[10px] phone:text-[10px]">
              2 Bathroom
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardProduct;
