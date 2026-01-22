import { Check, CircleAlert, CircleDot, ClipboardListIcon, EllipsisIcon, TrendingDown, TrendingUp, TriangleAlert } from 'lucide-react'
import TopCard from '../TopCard'
import { MdFolderShared } from "react-icons/md";
import { TiClipboard } from "react-icons/ti";

import ProjectContributionCard from './Project/ProjectContributionCard'
import OverallContextChart from './Project/OverallContextChart'
import ActiveEngagementTable from './Project/ActiveEngagementTable'

const Projects = () => {
   const cardData=[
    {
      title: "Total Projects",
      count: 18,
      iconData: <MdFolderShared className='size-8 text-[#99A7BB] ' />,
      data: <div className="bg-[#ECFDF5] py-0.5 px-3 rounded-xl">
            <p className="text-[#00B777] text-[10px] font-bold">
              {" "}
              +2 from last month
            </p>
          </div>
    },
    {
      title: "Active",
      count: 4,
      iconData: <TiClipboard className='size-8 text-[#0078F5] ' />,
      data: <div className="bg-blue-50 py-0.5 px-3 rounded-xl">
            <p className="text-[#006FEB] text-[10px] font-bold  flex gap-2 items-center justify-center">
              {" "}
              <CircleDot className='size-5 text-white fill-[#006FEB]' /> Steady pace
            </p>
          </div>
    },
    {
      title: "Completed",
      count: 12,
      iconData: <div className="flex items-center justify-center p-2 rounded-full bg-[#1BC963] ">
        <Check className='size-5 text-white dark:text-gray-900' /> </div>,
      data: <div className="bg-[#ECFDF5] py-0.5 px-3 rounded-xl">
            <p className="text-[#00B777] text-[10px] font-bold  flex gap-2 items-center justify-center">
              {" "}
              <TrendingUp className='size-5 text-[#00B777]' /> +5% efficiency
            </p>
          </div>
    },
    {
      title: "Overdue",
      count: 2,
      iconData:
        <TriangleAlert className='size-10 text-white dark:text-gray-900 fill-[#EF4444]' />,
        data: <div className="bg-red-100 py-0.5 px-3 rounded-xl">
            <p className="text-red-600 text-[10px] font-bold  flex gap-2 items-center justify-center">
              {" "}
              <TrendingDown className='size-5 text-red-600' /> Requires attention
            </p>
          </div>
    
    }
  ]
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full ">
        {cardData.map((item) => (
          <div key={item.title} className="w-full flex justify-center">
            <TopCard
              title={item.title}
              count={item.count}
              IconData={item.iconData}
              data={item.data}
            />
          </div>
        ))}
      </div>
      <ProjectContributionCard/>
       <div className="flex flex-col items-center justify-start w-full gap-y-7 shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10  ">
        <OverallContextChart/>
       </div>
       <div className="flex flex-col items-center justify-start w-full gap-y-7 shadow-[0_0_10px_0_#54545440] py-4 px-4 sm:px-6 md:px-8 pb-6 sm:pb-10  ">
        <ActiveEngagementTable/>
       </div>
      

    </div>
  )
}

export default Projects