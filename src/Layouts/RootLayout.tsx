import {
  BellRing,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Command,
  Gift,
  Mail,
  Moon,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  Analytics,
  Calender,
  ComingSoon,
  DashboardHome,
  Error404,
  FullLogo,
  History,
  Integrations,
  Logout,
  MyWallet,
  Notification,
  Setting,
  Statistics,
  Support,
  Transition,
  User,
} from "../Icons";
import ProfileImage from "../assets/profileImage.png";

export default function RootLayout() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const [showSubMenu, setShowSubMenu] = useState<number | null>(null);

  const sideBar = [
    {
      title: "Menu",
      menus: [
        {
          label: "Dashboard",
          icon: DashboardHome,
          subMenu: [
            {
              label: "Dashboard default",
              url: "#",
            },
            {
              label: "Dashboard two",
              url: "#",
            },

            {
              label: "statistics",
              url: "#",
            },

            {
              label: "Analytics",
              url: "#",
            },
          ],
        },
        {
          label: "transitions",
          icon: Transition,
          url: "#",
        },
        {
          label: "statistics",
          icon: Statistics,
          url: "#",
        },
        {
          label: "analytics",
          icon: Analytics,
          url: "#",
        },
        {
          label: "my wallet",
          icon: MyWallet,
          url: "#",
        },
        {
          label: "inbox",
          icon: Notification,
          url: "#",
        },

        ,
        {
          label: "intigration",
          icon: Integrations,
          url: "#",
        },
        ,
        {
          label: "user",
          icon: User,
          url: "#",
        },
        ,
        {
          label: "calender",
          icon: Calender,
          url: "#",
        },
        ,
        {
          label: "history",
          icon: History,
          url: "#",
        },
      ],
    },
    {
      title: "Help",
      menus: [
        {
          label: "support",
          icon: Support,
          url: "#",
        },
        ,
        {
          label: "setting",
          icon: Setting,
          url: "#",
        },
      ],
    },
    {
      title: "Others",
      menus: [
        {
          label: "signin",
          icon: User,
          url: "#",
        },
        ,
        {
          label: "signup",
          icon: User,
          url: "#",
        },
        ,
        {
          label: "coming soon",
          icon: ComingSoon,
          url: "#",
        },
        ,
        {
          label: "404",
          icon: Error404,
          url: "#",
        },
        ,
        {
          label: "logout",
          icon: Logout,
          url: "#",
        },
      ],
    },
  ];

  return (
    <div className="relative ">
      {/*  top  bar */}
      <div className="flex items-center w-full overflow-x-hidden lg:h-27 bg-white fixed z-80">
        {/* logo */}
        <div className=" hidden  pl-12.5 shrink-0 w-77 lg:flex justify-between items-center h-full ">
          <FullLogo />

          <div
            onClick={() => setShowSideBar((prev) => !prev)}
            className=" bg-primary w-3 h-10 rounded-l-lg grid place-items-center cursor-pointer"
          >
            <ChevronLeft stroke="white" size={16} />
          </div>
        </div>

        {/* navbar */}

        <div className="w-full h-full flex justify-between items-center lg:gap-5 px-4 md:px-10 2xl:px-19">
          {/* dashboard name */}
          <div className="hidden lg:block">
            <h3 className="text-[28px] font-bold">Dashbaord</h3>
            <p className="text-dark2 font-sm">Let’s check your update today</p>
          </div>

          {/* search bar */}
          <div className="hidden lg:block w-100 h-14 relative">
            <input
              type="text"
              placeholder="Search.."
              className="w-full h-full focus:outline focus:outline-primary  bg-dark4 pl-11.5 px-4 rounded-sm"
            />

            <Search
              className="absolute top-4.5 left-4"
              size={20}
              stroke="#1a202c"
            />

            <div className="absolute top-4.5 right-4 flex items-center text-[#1a202c] gap-1">
              <Command size={20} stroke="#1a202c" className="" /> K
            </div>
          </div>

          {/* icons */}
          <div className="flex items-center gap-8 2xl:gap-12">
            <div className="hidden 2xl:flex gap-5 items-center">
              {/* dark mode */}
              <div className="w-13 h-13 rounded-xl border border-primary grid place-items-center cursor-pointer ">
                <Moon />
              </div>

              {/* notification */}
              <div className="relative w-13 h-13 rounded-xl border border-primary grid place-items-center cursor-pointer ">
                <BellRing />

                <div className="w-4 h-4 border-3 border-white bg-dark3 rounded-full absolute -right-1 -top-1"></div>
              </div>

              {/* message */}
              <div className="relative w-13 h-13 rounded-xl border border-primary grid place-items-center cursor-pointer ">
                <Mail />

                <div className="w-4 h-4 border-3 border-white bg-red-400 rounded-full absolute -right-1 -top-1"></div>
              </div>

              {/* gift */}
              <div className="relative w-13 h-13 rounded-xl border border-primary grid place-items-center cursor-pointer ">
                <Gift />
                <div className="w-4 h-4 border-3 border-white bg-dark3 rounded-full absolute -right-1 -top-1"></div>
              </div>
            </div>

            {/* separator */}
            <div className="hidden lg:block w-[.4px] h-12 bg-dark3"></div>

            {/* profile */}

            <div className="hidden lg:flex items-center gap-3 cursor-pointer ">
              <div className="w-12.5 h-12.5 shrink-0 ">
                <img
                  src={ProfileImage}
                  alt="image"
                  className="w-full h-full border border-dark3 rounded-lg"
                />
              </div>

              <div className="">
                <p className="font-bold flex gap-3">
                  John Doe
                  <span>
                    <ChevronDown />
                  </span>
                </p>

                <p className="text-sm text-dark2 mt-1">Super Admin</p>
              </div>
            </div>
          </div>
          {/* mobile device */}
          <div className="flex lg:hidden justify-between py-4 pr-4 bg-white items-center w-full left-0 top-0 right-0 fixed">
            <div
              onClick={() => setShowSideBar((prev) => !prev)}
              className="fixed left-0 bg-dark3 w-4 h-10 rounded-r-lg grid place-items-center cursor-pointer"
            >
              <ChevronRight stroke="#718096" size={16} />
            </div>
            <div className="ml-8">
              <FullLogo />
            </div>

            <div className="w-12.5 h-12.5 shrink-0 ">
              <img
                src={ProfileImage}
                alt="image"
                className="w-full h-full border border-dark3 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full relative  ">
        {/* left side bar */}
        <div
          className={`noScrollBar   shrink-0 w-77 h-full overflow-y-auto  bg-white border-t border-dark3/30 fixed  lg:top-27 z-80 lg:z-30 transition-all duration-700 ease-in-out   ${
            showSideBar
              ? "translate-x-0 lg:-translate-x-100 "
              : "-translate-x-100  lg:translate-x-0"
          } `}
        >
          {/* logo  small device */}
          <div className="lg:hidden sticky top-0 left-0 z-90  bg-white w-full pl-12.5  flex items-center py-7 border-b border-gray-100">
            <FullLogo />

            <div
              onClick={() => setShowSideBar((prev) => !prev)}
              className="absolute right-0 bg-primary w-4 h-10 rounded-l-lg grid place-items-center cursor-pointer"
            >
              <ChevronLeft stroke="white" size={16} />
            </div>
          </div>

          <ul className="w-full px-12.5 space-y-7 mb-40  absolute top-28 lg:static">
            {sideBar.map((sidebarTitle, index) => (
              <li key={index}>
                <span className="border-b border-dark3 pb-1 w-full block mt-5 text-dark2 text-sm font-medium capitalize">
                  {sidebarTitle?.title}
                </span>

                <ul className="flex flex-col gap-3 mt-3">
                  {sidebarTitle.menus.map((menu, ind) => (
                    <li key={ind} className="group">
                      <span
                        onClick={() =>
                          setShowSubMenu((prev) => (prev === ind ? null : ind))
                        }
                        className={`flex items-center justify-between ${
                          showSubMenu === ind && "text-primary"
                        }  cursor-pointer`}
                      >
                        <span className="capitalize flex items-center gap-3 py-1 text-lg font-medium cursor-pointer group-hover:text-primary">
                          <menu.icon className="" fill="red" />
                          {menu?.label}
                        </span>

                        {/* sub menus */}
                        {menu?.subMenu && (
                          <span>
                            <ChevronRight
                              size={20}
                              className="group-hover:text-primary transition-all duration-200 ease-in-out"
                            />
                          </span>
                        )}
                      </span>

                      {menu?.subMenu && showSubMenu === ind && (
                        <div className="flex flex-col border-l border-primary gap-2 my-5 ml-2.5 pl-5">
                          {menu?.subMenu.map((sub, i) => (
                            <span key={i}>
                              <Link
                                to={sub?.url}
                                className="capitalize text-base text-dark2 font-medium inline hover:text-black trasition duration-200 ease-in-out"
                              >
                                {sub?.label}
                              </Link>
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* main content */}
        <div
          className={`flex-1 w-full absolute top-27 transition-all duration-500 ease-in-out  ${
            showSideBar
              ? "left-77 max-w-[calc(100% - 308px)] lg:left-0 lg:w-full "
              : "left-0 w-full lg:left-77 lg:max-w-[calc(100% - 308px)] "
          }  right-0 h-100 `}
        >
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}
