import React from "react";
import Image from "next/image";
import { Card } from "@/components/elements";
import DummyAvatar from "@/public/PNG/dummyAvatar.png";

const CardTestimonial = () => {
  return (
    <Card className="w-[544px] p-10 rounded-lg bg-lightGray phone:w-[320px] phone:p-5">
      <p className="text-xl w-[448px] phone:w-[290px]">
        &quot;Buying my first home was a dream come true. It was a great feeling
        to finally have a place that was truly my own, and I could make it into
        the perfect living space for me and my family.&quot;
      </p>

      <div className="flex flex-row items-center gap-3 mt-10">
        <Image src={DummyAvatar} alt="" height={48} />

        <div>
          <p className="text-sm text-gray">Fujiwara Sugiono</p>
          <p className="text-sm">Buyer House at Ungaran</p>
        </div>
      </div>
    </Card>
  );
};

export default CardTestimonial;
