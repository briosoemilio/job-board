import Container from "@/components/Container/Container";
import ErrorIcon from "@/components/ErrorIcon/ErrorIcon";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <div className="text-heading">
        <p className="text-header font-merriweather">Oops page is not found</p>
        <ErrorIcon />
        <div className="desktop:ml-10 mobile:mt-10">
          <p>
            The address you entered does not exist. Check the address again.
          </p>
          <p>
            Back to{" "}
            <Link
              href={"/"}
              className="underline font-bold hover:cursor-pointer"
            >
              Home
            </Link>{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
