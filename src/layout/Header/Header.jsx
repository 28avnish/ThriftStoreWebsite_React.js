import React from "react";
import Marquee from "../../components/Header/Marquee";
import MiddleHeader from "../../components/Header/MiddleHeader";
import MegaDropdownHeader from "../../components/Header/MegaDropdownHeader";

const Header = () => {
  return (
    <div>
      <Marquee />
      <MiddleHeader />
      <MegaDropdownHeader />
    </div>
  );
};

export default Header;
