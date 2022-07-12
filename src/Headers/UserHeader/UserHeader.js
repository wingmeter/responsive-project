import React from "react";
import { useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserSidebar from "../../components/UserNavbar/Sidebar/UserSidebar";

const UserHeader = () => {
  const [register, setRegister] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <UserSidebar
        isOpen={isOpen}
        mobileToggle={mobileToggle}
        register={register}
      />
      <UserNavbar mobileToggle={mobileToggle} register={register} />
    </>
  );
};

export default UserHeader;
