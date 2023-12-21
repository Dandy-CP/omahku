import React from "react";
import {
  Button,
  Container,
  ErrorView,
  EmptyView,
  Skeleton,
} from "@/components/elements";
import CardProduct from "./partials/CardProduct";
import { GetListHouse } from "@/service/API/House/house.query";

const FeaturedHouseSection = () => {
  const {
    data: houseList,
    isError,
    error,
    isFetching,
    refetch,
  } = GetListHouse();

  return (
    <Container className="my-20 p-10 bg-lightGray rounded-lg phone:p-3 phone:py-20 phone:mx-0">
      <h1 className="text-center text-4xl font-bold phone:text-2xl">
        Featured House You Would Like
      </h1>

      <p className="text-center text-sm text-gray font-light mt-4 phone:text-sm">
        Our agency has access to a wide range of property listings, including
        off-market properties and exclusive listings <br /> that may not be
        available to the general public.
      </p>

      {isError && <ErrorView error={error} refetch={refetch} />}

      {!isFetching && houseList && houseList?.length === 0 && <EmptyView />}

      <div className="mt-14 flex justify-center tablet:overflow-x-auto tablet:justify-between tablet:gap-5 phone:overflow-x-auto phone:justify-between">
        <div className="flex gap-10 phone:gap-5">
          {houseList &&
            houseList?.map((value, index) => (
              <CardProduct key={index} house={value} />
            ))}

          {isFetching && (
            <React.Fragment>
              {Array(3)
                .fill(3)
                .map((_, index) => (
                  <Skeleton key={index} className="w-[354px]" />
                ))}
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          variant="outline"
          className="w-[160px] h-[54px] text-primary phone:w-full"
        >
          See More
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedHouseSection;
