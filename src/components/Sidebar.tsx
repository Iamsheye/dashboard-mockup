import React from "react";
import { Link, useLocation } from "react-router-dom";
import ICONS from "../svg";

interface SidebarProps {
  menu: boolean;
}

const Sidebar = ({ menu }: SidebarProps) => {
  const { pathname } = useLocation();

  const MENU = [
    { text: "Admin", path: "/#", icon: ICONS.ADMIN_SVG },
    { text: "Knowledge Base", path: "#", icon: ICONS.CHECK_SVG },
    { text: "Train SAM", path: "#", icon: ICONS.CHECK_SVG },
    { text: "Agent Inbox", path: "#", icon: ICONS.AGENT_SVG },
    { text: "Help Center", path: "#", icon: ICONS.HELP_SVG },
    {
      text: "Analytics",
      path: "/",
      icon: ICONS.ANALYTICS_SVG,
      items: [
        { text: "Teams", path: "/" },
        { text: "Knowledge Base", path: "/hh" },
        { text: "Training SAM", path: "/hh" },
        { text: "Help Center", path: "/hh" },
      ],
    },
  ];

  return (
    <section
      className="sidebar box-content max-w-[262px] border-r p-5"
      style={{ transform: menu ? "translateX(0)" : "" }}
    >
      <div className="mb-7 flex rounded-lg border border-[#ecebf5] p-3">
        <div className="h-[37px] w-[45px] bg-transparent"></div>
        <div>
          <p className="font-semibold text-primary">Metacare</p>
          <p className="text-[0.85rem] text-secondary">adeyinka@metacare.app</p>
        </div>
      </div>
      <div>
        {MENU.map((item) => (
          <>
            <Link to={item.path}>
              <div className="my-2 mr-4 flex py-2">
                <img src={item.icon} alt="" className="mr-4" />
                <p
                  className={
                    pathname === item.path
                      ? "font-semibold text-[#6837EF]"
                      : "text-secondary"
                  }
                >
                  {item.text}
                </p>
                <img
                  src={ICONS.CHEVRON_RIGHT}
                  alt=""
                  className={
                    pathname === item.path ? "ml-auto rotate-90" : "ml-auto"
                  }
                />
              </div>
            </Link>
            {item.items && (
              <div className="ml-8">
                {item.items.map((elem) => (
                  <p
                    className={
                      pathname === elem.path
                        ? "mb-2 text-primary"
                        : "mb-2 text-secondary"
                    }
                  >
                    {elem.text}
                  </p>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
