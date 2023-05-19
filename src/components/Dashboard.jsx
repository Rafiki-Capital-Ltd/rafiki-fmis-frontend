import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { data } from "../data";
import "../index.css";
import BarChart from "./BarChart.jsx";
import { useState, useEffect } from "react";
// import { UserAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(false);
//   const { user, logout } = UserAuth();

  const [scanData, setScanData] = useState({
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Number of Scans",
        data: data.map((item) => item.amount),
        backgroundColor: ["green"],
      },
    ],
  });
  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
    //   await logout();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <div className=" flex-1  ">
        <div className="flex items-center justify-end relative  px-5 py-3">
          <div
            className={` ${
              open ? "hidden md:flex justify-end" : "flex justify-end "
            }`}
          ></div>
          <div
            className={` ${
              open ? " hidden sm:inline" : " inline "
            } text-md  text-gray-400 font-[13px] px-2 `}
          >
            {" "}
            test@test.com
          </div>
        </div>

        <div className=" bg-gray-100 pb-4">
          <div
            className={` ${
              open ? " hidden sm:flex " : "flex mx-5"
            } flex flex-row flex-wrap justify-around items-center`}
          >
            <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
              <div className="row-span-1">
                {" "}
                <div className="flex justify-end p-2 text-green-500 text-sm ">
                  <i data-feather="chevron-up" className="text-xs "></i>
                  <p className=""> + 2 % </p>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                {" "}
                <div className="flex flex-col justify-start p-2 ">
                  {" "}
                  <span className="text-3xl mb-1">7 </span>{" "}
                  <span className="text-md text-gray-400"> visits today</span>{" "}
                </div>
              </div>
            </div>
            <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
              <div className="row-span-1">
                {" "}
                <div className="flex justify-end p-2 text-green-500 text-sm ">
                  <i
                    data-feather="chevron-up"
                    className="text-xs font-extrabold"
                  ></i>
                  + 2%
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                {" "}
                <div className="flex flex-col justify-start p-2 ">
                  {" "}
                  <span className="text-3xl mb-1">575 </span>{" "}
                  <span className="text-md text-gray-400">
                    {" "}
                    visits this week
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
              <div className="row-span-1">
                {" "}
                <div className="flex justify-end py-2 px-4 text-red-500 ">
                  <i data-feather="chevron-down" className="text-sm"></i>
                  <span className="text-md"> 8% </span>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                {" "}
                <div className="flex flex-col justify-start p-2 ">
                  {" "}
                  <span className="text-3xl mb-1">1 </span>{" "}
                  <span className="text-md text-gray-400">
                    {" "}
                    visits this week
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
              <div className="row-span-1">
                {" "}
                <div className="flex justify-end p-2 text-green-500 text-sm ">
                  {/* <i data-feather="chevron-up" className="text-xs"></i> */}+
                  2 this week
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                {" "}
                <div className="flex flex-col justify-start p-2 ">
                  {" "}
                  <span className="text-3xl mb-1"> 205 </span>{" "}
                  <span className="text-md text-gray-400">
                    {" "}
                    Items registered
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${
              open
                ? "hidden sm:flex sm:flex-wrap sm:justify-around"
                : " flex flex-wrap justify-around "
            } `}
          >
            <div className={`${open ? "" : "mx-10"} grid grid-cols-5 flex-1 `}>
              <div className="col-span-5 md:col-span-3 xs:h-32  bg-white shadow-md p-2 rounded-md">
                <BarChart data={scanData} />
              </div>
              <div className="col-span-5  md:col-span-2 xs:h-32 ml-3 bg-white shadow-md p-2 rounded-md">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
