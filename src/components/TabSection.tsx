import React from "react";

interface ITabSection {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: { name: string }[];
}

const TabSection = ({ activeTab, setActiveTab, tabs }: ITabSection) => {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-[92%]">
        <div className="scrollbar flex gap-5 overflow-x-auto md:gap-10">
          {tabs.map((elem) => (
            <div
              className={`flex-none cursor-pointer py-4 ${
                activeTab === elem.name ? "border-b-2 border-[#6837EF]" : ""
              }`}
              onClick={() => setActiveTab(elem.name)}
            >
              <p
                className={
                  activeTab === elem.name ? "text-primary" : "text-secondary"
                }
              >
                {elem.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
