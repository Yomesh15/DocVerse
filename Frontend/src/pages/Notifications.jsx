import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");


      const res = await axios.get(
        "https://docverse-2.onrender.com/api/notification" || "http://localhost:2006/api/notification",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(res);


      setNotifications(res.data.notifications || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-900 pt-4 pb-26 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl pt-50 font-bold text-white">
              Notifications
            </h1>
            <p className="mt-3 text-gray-400">
              Stay updated with your appointments and healthcare activities.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : notifications.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-white">
                No Notifications
              </h3>
              <p className="text-gray-400 mt-2">
                You're all caught up!
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {notifications.map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-800 border  border-gray-700 rounded-2xl p-5 md:p-6 hover:border-cyan-500 transition"
                >
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">

                    <div>
                      <h2 className="text-lg md:text-xl font-semibold text-white">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-gray-400">
                        {item.message}
                      </p>
                    </div>

                    <span className="text-sm text-cyan-400 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>
      {/* <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[-45px]"></div> */}

      <Footer />
    </>
  );
};

export default Notifications;