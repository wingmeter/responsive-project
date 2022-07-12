import React from "react";
import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminNavbar/Sidebar/AdminSidebar";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AdminSidebar isOpen={isOpen} mobileToggle={mobileToggle} />
      <AdminNavbar mobileToggle={mobileToggle} />
    </>
  );
};

export default AdminHeader;
