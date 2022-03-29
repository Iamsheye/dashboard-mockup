import { useState } from "react";
import ICONS from "../svg";
import TabSection from "./TabSection";
import ChartSection from "./ChartSection";

const AnalyticsBody = () => {
  const [activeTab, setActiveTab] = useState("Efficiency");

  const TABS = [
    { name: "Efficiency" },
    { name: "Volume" },
    { name: "Customer Satisfaction" },
    { name: "Backlog" },
  ];

  return (
    <>
      <TabSection
        tabs={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="mx-auto my-9 w-[92%]">
        {activeTab === "Efficiency" && (
          <div>
            <div className="mb-8 justify-between md:flex">
              <p className="mb-2 text-2xl font-semibold text-primary md:mb-0">
                Efficiency Analytics
              </p>
              <div className="grid grid-cols-6 items-center gap-3 md:flex">
                <div className="col-span-full md:mr-8">
                  <form>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-lg border border-[#e1e1eb] p-3 pl-12 font-medium placeholder:text-[#a3a3c2] focus-visible:outline-[#6837ef] md:w-auto"
                      />
                      <img
                        src={ICONS.SEARCH_ICON}
                        alt=""
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-span-4 md:border-r md:border-[#e1e1eb] md:pr-4">
                  <div className="flex justify-between gap-4 rounded-lg border border-[#e1e1eb] px-4 py-3">
                    <p className="text-primary">Filter Options</p>
                    <img
                      src={ICONS.CHEVRON_DARK}
                      alt=""
                      className="rotate-90"
                    />
                  </div>
                </div>
                <div className="col-span-2 md:pl-4">
                  <button className="w-full rounded-lg bg-[#25bb87] py-3 px-7 font-medium text-white md:w-auto">
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <ChartSection
                title="Average response Time"
                title2="Average Response Time"
                color="#F05D23"
                bg="bg-[#F05D23]"
              />
              <ChartSection
                title="Replies per resolution"
                title2="Average Replies"
                color="#3E68FF"
                bg="bg-[#3E68FF]"
              />
              <ChartSection
                title="Average resolution time"
                title2="Average Resolution Rate"
                color="#FB6491"
                bg="bg-[#FB6491]"
              />
              <ChartSection
                title="First contact resolution rate"
                title2="Average Contact Rate"
                color="#07C9E2"
                bg="bg-[#07C9E2]"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AnalyticsBody;
