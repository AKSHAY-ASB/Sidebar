import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import {
  ArrowBack,
  Dashboard,
  KeyboardArrowDown,
  AutoGraph,
  Logout,
  Face,
} from "@mui/icons-material";

function App() {
  const [open, setOpen] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AutoGraph /> },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Smile", icon: <Face /> },
        { title: "menu 2", icon: <AutoGraph /> },
      ],
    },
    { title: "Analytics", icon: <AutoGraph /> },
    {
      title: "Projects 2",
      submenu: true,
      submenuItems: [
        { title: "Smile 1", icon: <Face /> },
        { title: "menu 2", icon: <AutoGraph /> },
      ],
    },
    { title: "Setting", icon: <AutoGraph /> },
    { title: "Logout", icon: <Logout />, spacing: true },
  ];

  const handleSubMenuToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8  ${
            open ? "w-72" : "w-20"
          } duration-300  relative`}
        >
          <ArrowBack
            className={`bg-white text-dark-purple text-3xl absolute -right-3
        border rounded-full border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
            onClick={() => setOpen(!open)}
          />

          <div className="inline-flex items-center">
            <Dashboard
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500
            ${open && "rotate-[360deg]"}`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>

          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-gray-300 text-sm flex items-center
              gap-x-4 cursor-pointer p-2
               hover:bg-light-white rounded-md mt-2 ${
                 menu.spacing ? "my-9" : "mt-2"
               }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <Dashboard />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  } duration-200`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <KeyboardArrowDown
                    className={`${openSubmenuIndex === index && "rotate-180"}`}
                    onClick={() => handleSubMenuToggle(index)}
                  />
                )}
              </li>

              {menu.submenu && openSubmenuIndex === index && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md mt-2 ${
                        !open && "hidden"
                      }`}
                    >
                      <span className="text-2xl block float-left">
                        {submenuItem.icon}
                      </span>
                      <span>{submenuItem.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="app bg-slate-200 dark:bg-slate-900 h-screen w-full p-6 transition-colors duration-500 ease-in-out">
          <div className="flex flex-col items-center h-full justify-between">
            <div className="p-7">
              <h1 className="text-2xl font-semibold">Home Page</h1>
            </div>
            <div className="self-end">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
