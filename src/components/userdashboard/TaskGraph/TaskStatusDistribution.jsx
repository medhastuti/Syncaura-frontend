
import { TrendingUp } from "lucide-react";
import StatusBar from "./StatusBar";
import StatusLegend from "./StatusLegend";

export default function TaskStatusDistribution({task, showTotal=true, percentage=false}) {
  const total = percentage? null: task.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className={`w-full relative  space-y-4 ${showTotal? "py-4 pb-2 xsm:pb-8": "pt-4 pb-5 xsm:pb-15"} `}>
      <div className="flex items-start justify-between px-0 xl:px-5 ">
        <h1 className="text-xl xsm:text-2xl text-[#6E7184] font-bold">
          Task Status Distribution
        </h1>
        <div className="xsm:flex hidden flex-col items-start justify-center gap-3 ">
         {showTotal && <p className=" text-xs xsm:text-sm font-bold text-[#000000]">{total} Active Tasks</p>}
          <StatusLegend data={task} />
        </div>
      </div>

      <div className={`xsm:absolute w-full ${showTotal? "-bottom-5": "-bottom-4"} px-2 xsm:px-5 xl:px-10`}>
        <StatusBar data={task} total={total} />
        {!showTotal &&(<div className="flex items-center justify-between w-full mt-2 ">
          <h1 className=" text-xs sm:text-base text-[#4B6280] font-normal" >Velocity compared to last week</h1>
          <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-xl bg-[#F0FDF4] ">
            <TrendingUp className="size-4 text-[#00A449] " />
            <p className="text-[#00A449] text-xs font-semibold" >+12%</p>
          </div>
        </div>)}
        <div className="flex xsm:hidden flex-col items-start justify-center gap-3 mt-3 ">
          {showTotal && <p className=" text-xs xsm:text-sm font-bold text-[#000000]">{total} Active Tasks</p>}
          <StatusLegend data={task} />
        </div>
      </div>
    </div>
  );
}
