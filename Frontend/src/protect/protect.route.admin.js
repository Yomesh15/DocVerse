import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectRoute = ({ children }) => {
  const navigate = useNavigate();

  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!adminToken) {
      navigate("/admin/login");
    }
  }, [adminToken, navigate]);

  return adminToken ? children : null;
};


export default AdminProtectRoute;