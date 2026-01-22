import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Download, Dot } from "lucide-react";

const PAGE_SIZE = 4;

const projectsData = [
  {
    id: 1,
    name: "Mobile Banking App",
    role: "UI Lead",
    tasks: "5/8",
    progress: 75,
    sprint: "Q3 Sprint 4",
    status: "On Track",
  },
  {
    id: 2,
    name: "CMR Integration",
    role: "Dev",
    tasks: "2/12",
    progress: 40,
    sprint: "Q3 Sprint 3",
    status: "Delayed",
  },
  {
    id: 3,
    name: "Global Site Localization",
    role: "Reviewer",
    tasks: "1/15",
    progress: 15,
    sprint: "Q4 Planning",
    status: "At Risk",
  },
  {
    id: 4,
    name: "HR Security Audit",
    role: "Consultant",
    tasks: "18/20",
    progress: 90,
    sprint: "Q3 Sprint 4",
    status: "Complete",
  },
  {
    id: 5,
    name: "Marketing Dashboard",
    role: "UI Lead",
    tasks: "6/10",
    progress: 60,
    sprint: "Q4 Sprint 1",
    status: "On Track",
  },
  {
    id: 6,
    name: "Payment Gateway",
    role: "Dev",
    tasks: "3/14",
    progress: 25,
    sprint: "Q4 Sprint 2",
    status: "At Risk",
  },
];

const statusStyles = {
  "On Track": "bg-green-100 text-green-700",
  Delayed: "bg-yellow-100 text-yellow-700",
  "At Risk": "bg-red-100 text-red-700",
  Complete: "bg-emerald-100 text-emerald-700",
};

export default function ActiveEngagementTable() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const filteredData = useMemo(() => {
    if (filter === "All") return projectsData;
    return projectsData.filter((p) => p.status === filter);
  }, [filter]);

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);

  const paginatedData = filteredData.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleExport = () => {
    const csv = filteredData
      .map((p) =>
        [p.name, p.role, p.tasks, p.progress, p.sprint, p.status].join(",")
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "projects.csv";
    a.click();
  };

  return (
    <div className="w-full ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-b">
          <h2 className="text-2xl font-bold text-black">Active Engagement Table</h2>
          <div className="flex items-center gap-2 relative">
            {/* Filter Dropdown */}
            <button
              onClick={() => setShowFilter((v) => !v)}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#F0F2F4] border-gray-400 border rounded-lg text-[#000000] text-sm"
            >
              <Filter size={14} /> Filter
            </button>

            {showFilter && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-10 z-10 bg-white border rounded-lg shadow w-40"
              >
                {["All", "On Track", "Delayed", "At Risk", "Complete"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setFilter(item);
                        setPage(1);
                        setShowFilter(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm  hover:bg-gray-100 ${
                        filter === item ? "font-semibold text-black" : "text-gray-500"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </motion.div>
            )}

            {/* Export */}
            <button
              onClick={handleExport}
              className="flex items-center bg-[#F0F2F4] border-gray-400 text-[#000000] gap-1 px-3 py-1.5 border rounded-lg text-sm"
            >
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-[#F3F8FD]  border-t border-b border-[#B8D1F4] text-[#697D92] uppercase">
              <tr  >
                <th className="px-4 py-3 text-left">Project Name</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">My Tasks</th>
                <th className="px-4 py-3 text-left">My Progress</th>
                <th className="px-4 py-3 text-left">Sprint</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {paginatedData.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b-[1.5px] last:border-none border-[#B8D1F4]"
                  >
                    <td className="px-4 py-3 font-semibold text-sm text-[#616161] ">{item.name}</td>
                    <td className="px-4 py-3 flex items-center justify-start">
                        <div className={`flex items-center justify-center px-4 rounded-lg py-0.5 ${i%3==0? "bg-[#DBEAFE] text-[#0033D5]": i%2==0? "bg-[#F3F4F6] text-[#000000]": i%1==0? "bg-[#F3E8FF] text-[#7C0CCD]": "bg-[#DBEAFE] text-[#0033D5]"} font-semibold`}>
                            <p>{item.role}</p>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-[#616161] font-medium text-xs">{item.tasks}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                        <span>{item.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#3D5D78] text-[13px]">{item.sprint}</td>
                    <td className="px-4 py-3 flex items-center justify-start">
                      <span
                        className={`px-3 py-0.5 rounded-full flex items-center justify-center gap-1 text-xs font-semibold ${
                          statusStyles[item.status]
                        }`}
                      >
                        <Dot className="size-5" /> {item.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-2 border-t text-sm bg-[#F3F8FD]">
          <span className="text-[#000000] font-semibold">
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filteredData.length)} of {filteredData.length} projects
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className={`px-3 py-1.5 border rounded-lg disabled:opacity-50 ${page===0? "text-[#A5B1BD]":"text-[#000000]"}`}
            >
              Previous
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className={`px-3 py-1.5 border rounded-lg disabled:opacity-50 ${page!== totalPages-1? "text-[#A5B1BD]":"text-[#000000]"}`}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
