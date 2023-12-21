import React from "react";
import Container from "./Container";

const EmptyView = () => {
  return (
    <Container className="bg-gray rounded-md flex flex-col items-center gap-5 p-10 my-7 phone:p-5">
      <p className="text-2xl font-bold phone:text-sm phone:text-center">
        There&apos;s no list right now
      </p>
    </Container>
  );
};

export default EmptyView;
