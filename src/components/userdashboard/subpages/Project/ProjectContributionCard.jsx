import { motion } from "framer-motion";

const contributions = [
  { title: "Mobile App Launch", value: 75 },
  { title: "Enterprise CRM Integration", value: 40 },
  { title: "Internal HR Portal Update", value: 90 },
  { title: "Marketing Website Localization", value: 15 },
];

export default function ProjectContributionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full  bg-white rounded-xl shadow-[0_0_10px_0_#54545440] p-4 sm:p-6 "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold text-[#000000]">
          My Individual Contribution
        </h2>
        <button className="text-sm text-[#0079EC] font-semibold hover:underline">
          View Detailed Log
        </button>
      </div>

      <div className="flex flex-col gap-6 px-2 md:px-10 xl:px-20">
        {contributions.map((item, index) => (
          <ProgressItem
            key={index}
            title={item.title}
            value={item.value}
            delay={index * 0.15}
          />
        ))}
      </div>
    </motion.div>
  );
}


const ProgressItem = ({ title, value, delay }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm sm:text-base">
        <span className="text-[#8F919F] font-medium">{title}</span>
        <span className="text-blue-600 font-semibold">{value}%</span>
      </div>

      <div className="w-full h-3 bg-[#E7EBEE] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 0.8,
            delay,
            ease: "easeInOut",
          }}
          className="h-full bg-[#137FEC] rounded-full"
        />
      </div>
    </div>
  );
};
