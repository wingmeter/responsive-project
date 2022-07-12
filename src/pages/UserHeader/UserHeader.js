import React from "react";
import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminNavbar/Sidebar/AdminSidebar";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <AdminSidebar isOpen={isOpen} toggle={toggle} />
      <AdminNavbar toggle={toggle} />
    </div>
  );
};

export default AdminHeader;
