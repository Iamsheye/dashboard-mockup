import React from "react";
import ICONS from "../svg";

interface IHeader {
  setMenu: (menu: boolean) => void;
}

const Header = ({ setMenu }: IHeader) => {
  return (
    <header className="border-b">
      <div className="mx-auto w-[92%]">
        <div className="flex items-center justify-between py-3">
          <div className="md:hidden" onClick={() => setMenu(true)}>
            <div className="mb-1 h-[8px] w-[8px] rounded-lg bg-[#6837EF]"></div>
            <div className="mb-1 h-[8px] w-[8px] rounded-lg bg-[#6837EF]"></div>
            <div className="h-[8px] w-[8px] rounded-lg bg-[#6837EF]"></div>
          </div>
          <div>
            <form autoComplete="off">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask us any question"
                  className="w-36 rounded-lg bg-[#fafafc] py-3 pl-4 pr-11 font-medium placeholder:text-[#a3a3c2] placeholder:opacity-0 focus-visible:outline-[#6837ef] md:w-auto md:placeholder:opacity-100"
                />
                <img
                  src={ICONS.SEARCH_ICON}
                  alt=""
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                />
              </div>
            </form>
          </div>
          <div className="flex gap-3 rounded-lg border border-[#ecebf5] px-3 py-2 md:gap-6 md:py-3">
            <div className="flex items-center gap-1 border-r pr-3 md:pr-6">
              <img src={ICONS.NOTIF_ICON} alt="" />
              <div className="h-4 w-4 rounded-[4px] bg-[#f25a68] text-center text-xs text-white">
                3
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border border-[#6837EF]"></div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21105 10.7318 7.78895 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719Z"
                  fill="#696D8C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
