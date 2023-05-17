import React from "react";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const Menus = [
    { title: "Dashboard", src: "file-text" },
    { title: "Items", src: "mail", gap: true },
    { title: "Groups ", src: "layers" },
    { title: "Orders ", src: "list" },
    { title: "Asset Manager", src: "folder", gap: true },
    { title: "Content Editor ", src: "file" },
  ];
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      {" "}
      <div className="flex w-full ">
        <aside
          className={` ${
            open ? " w-3/4 sm:w-72" : "w-20 "
          } bg-green-500 h-screen p-5  pt-8 sticky top-0 duration-300`}
        >
          <span
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && "rotate-180"}`}
          >
            <i data-feather="chevron-left"> </i>
          </span>

          <div className="flex gap-x-4 items-center justify-center">

          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link
                to={
                  Menu.title === "Dashboard"
                    ? "/dashboard"
                    : `/dashboard/${Menu.title.toLowerCase()}`
                }
              >
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
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
              </Link>
            ))}
          </ul>
        </aside>

        <Outlet />
      </div>
    </>
  );
}

export default Sidebar;
