import React from "react";
import Image from "next/image";
import HeaderImageDesktop from "@public/images/bg-header-desktop.svg";
import HeaderImageMobile from "@public/images/bg-header-desktop.svg";

const Header = () => {
  return (
    <div className="bg-primary">
      <Image
        src={HeaderImageDesktop}
        alt="header-image-desktop"
        className="w-[100%] hidden desktop:block"
      />
      <Image
        src={HeaderImageMobile}
        alt="header-image-mobile"
        className="w-[100%] hidden mobile:block tablet:block"
      />
    </div>
  );
};

export default Header;
