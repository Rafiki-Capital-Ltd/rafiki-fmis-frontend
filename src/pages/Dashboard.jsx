import React from "react";
import { data } from "../data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";


import { BarChart, DashboardCard , PieChart } from "../components";

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const [number , setNumber ] = useState(null);

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
	setNumber(1)
  });

  return (
    <div className=" flex-1  ">
      <div className=" bg-gray-100 pb-4">
        <div className="text-lg text-gray-600 font-light px-10 pt-4 pb-1 ">
          {" "}
          Good Morning Farmer
        </div>
        <div
          className={` ${
            open ? " hidden sm:flex " : "flex mx-5 gap-x-2"
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
          {" "}
          <div className={`${open ? "" : "mx-5"} grid grid-cols-5 flex-1 `}>
            <div className="col-span-5 md:col-span-3 xs:h-32 ">
              <div className="text-lg text-gray-600 font-light py-3">
                {" "}
                Chart showing production per month
              </div>
              <div className="bg-white shadow-md rounded-md p-5 h-9/10">
                <BarChart data={scanData} />
              </div>
            </div>
            <div className="col-span-5  md:col-span-2 xs:h-32 ml-3 ">
              <div className="text-lg text-gray-600 font-light py-3">
                {" "}
                Chart showing production per crop
              </div>
              <div className="bg-white shadow-md rounded-md p-5 ">
                <PieChart />
              </div>
            </div>
          </div>
        </div>

        <TableComponent
          name={"Produce"}
          columns={["name", "quantity", "description", "farm"]}
        />
      </div>
    </div>
  );
}
