import React from "react";
import Image from "next/image";
import HeaderImageDesktop from "@public/svg/bg-header-desktop.svg";
import HeaderImageMobile from "@public/svg/bg-header-desktop.svg";

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
        className="w-[100%] hidden mobile:block"
      />
    </div>
  );
};

export default Header;
