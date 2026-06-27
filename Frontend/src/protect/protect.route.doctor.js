import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoctorProtectRoute = ({ children }) => {
  const navigate = useNavigate();

  const doctorToken = localStorage.getItem("doctorToken");

  useEffect(() => {
    if (!doctorToken) {
      navigate("/doctor/login");
    }
  }, [doctorToken, navigate]);

  return doctorToken ? children : null;
};

export default DoctorProtectRoute;