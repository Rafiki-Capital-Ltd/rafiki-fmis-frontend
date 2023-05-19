import React from 'react';
import {
	Routes,
	Route,
	Link,
	useLocation,
	Outlet,
	NavLink,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../pages/Navbar';

export function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const Menus = [
    { title: "Dashboard", src: "file-text" },
    { title: "Assets ", src: "layers", gap: true },
    { title: "Animals", src: "list" },
    { title: "Crops", src: "folder" },
    { title: "Production", src: "file", gap: true },
    { title: "Consumption", src: "file" },
    { title: "Sales", src: "file" },
    { title: "FarmList", src: "file" },
  ];
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      {" "}
      <div className="flex max-w-screen ">
        <aside
          className={` ${
            open ? " w-3/4 sm:w-72" : "w-20 "
          } bg-green-500 h-screen p-5   pt-8 sticky top-0 duration-300`}
        >
          <span
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && "rotate-180"}`}
          >
            <i data-feather="chevron-left"> </i>
          </span>

          <div className="flex gap-x-4 items-center justify-center"></div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <NavLink
                to={
                  Menu.title === "Dashboard"
                    ? "/dashboard"
                    : `/dashboard/${Menu.title.toLowerCase()}`
                }
              >
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname ===
                      "/dashboard/" + Menu.title.toLocaleLowerCase() &&
                    "bg-light-white"
                  } `}
                >
                  <i data-feather={Menu.src}></i>

                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>{" "}
              </NavLink>
            ))}
          </ul>
        </aside>
        <div className="flex flex-col  w-full">
          <div className="w-[100%]">
            <Navbar />
          </div>
          <main className="flex max-w-full h-full bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Sidebar;