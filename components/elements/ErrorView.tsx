import React from "react";
import Button from "./Button";
import Container from "./Container";
import { ApiError } from "@/types/client.type";
import { IResponseApiHouse } from "@/types/house.type";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";

interface IProps {
  error: ApiError | null;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IResponseApiHouse[], ApiError>>;
}

const ErrorView = ({ error, refetch }: IProps) => {
  return (
    <Container className="bg-gray rounded-md flex flex-col items-center gap-5 p-10 my-7 phone:p-5">
      <p className="text-2xl font-bold phone:text-sm phone:text-center">
        Oops Something Wrong, Please Try Again
      </p>
      <p className="text-lg font-medium phone:text-xs">{error?.message}</p>

      <Button
        variant="default"
        onClick={() => {
          refetch();
        }}
        className="w-[50%] phone:w-full"
      >
        Refetch
      </Button>
    </Container>
  );
};

export default ErrorView;
