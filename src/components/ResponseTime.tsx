import React from "react";

interface IResponseTime {
  title: string;
  text: string;
  addClass?: string;
}

const ResponseTime = ({ title, text, addClass }: IResponseTime) => {
  return (
    <div
      className={`${addClass} flex-1 rounded-[10px] border border-[#ecebf5] bg-[#fafafa] py-6 px-5`}
    >
      <p className="mb-3 text-sm text-secondary">{title}</p>
      <p className="text-xl font-semibold text-primary">{text}</p>
    </div>
  );
};

export default ResponseTime;
