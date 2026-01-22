const Deadlines = ({
  bgColor = "bg-[#FEF2F2]",
  borderColor = "border-[#FCC0C4]",
  titleColor = "text-[#B60000]",
  descColor = "text-[#E76060]",
  title = "API Auth Bug",
  status = "HIGH",
  due = "Due Today, 5:00 PM",
  statusColor = "bg-[#EF4444]",
}) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        w-full
        page-2xl:max-w-[400px]
        sm:max-w-[230px] lg:max-w-[300px]
        ${bgColor}
        ${borderColor}
        flex-col
        border
        pt-4
        pb-6
        sm:pb-8
        px-4
        sm:px-5
        xl:px-8
        rounded-lg
      `}
    >
      <div className="flex items-center justify-between w-full gap-2">
        <h1
          className={`${titleColor} text-base sm:text-lg xl:text-xl font-semibold`}
        >
          {title}
        </h1>

        <div
          className={`flex items-center justify-center ${statusColor} rounded-xl py-1 px-2`}
        >
          <p className="uppercase text-white text-[10px] sm:text-xs font-semibold">
            {status}
          </p>
        </div>
      </div>

      <p
        className={`${descColor} text-xs sm:text-sm font-medium w-full mt-1`}
      >
        {due}
      </p>
    </div>
  );
};

export default Deadlines