import React from "react";
import { data } from "../data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";

import { BarChart, DashboardCard } from "../components";

export function Dashboard() {
  const [open, setOpen] = useState(false);

  const [scanData, setScanData] = useState({
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Production in kgs",
        data: data.map((item) => item.amount),
        backgroundColor: ["green"],
      },
    ],
  });

  const navigate = useNavigate();

  useEffect(() => {
    feather.replace();
  });

  return (
    <div className=" flex-1  ">
      <div className=" bg-gray-100 pb-4">
        <div
          className={` ${
            open ? " hidden sm:flex " : "flex mx-5"
          } flex flex-row flex-wrap justify-around items-center`}
        >
          <DashboardCard percentage={7} amount={7} text="Assets" />
          <DashboardCard percentage={7} amount={7} text="Expenses" />
          <DashboardCard percentage={7} amount={7} text="Production" />
          <DashboardCard percentage={7} amount={7} text="Consumption" />
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
              {/* <BarChart data={scanData} /> */}
            </div>
          </div>
        </div>

		<TableComponent name={"Produce"} columns={["name","quantity" , "description" , "farm"]}/>
      </div>
    </div>
  );
}
