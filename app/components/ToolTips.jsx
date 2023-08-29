import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tooltipsTextObj = {
  product: ["overview", "pricing", "marketing", "features", "integrations"],
  company: ["about", "team", "blog", "carrers"],
  connect: ["contact", "newsLetter", "linkedIn"],
};

const ToolTips = ({ label, isTooltipsActive }) => {
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {isTooltipsActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ left: "50%", top: 60, translateX: "-50%" }}
          className=" absolute w-36 rounded-md bg-white font-normal text-gray-700/90 shadow-2xl"
        >
          <ul className="flex flex-col gap-[2px] p-4 text-center ">
            {tooltipsTextObj[label.toLowerCase()].map((text) => (
              <li
                key={text}
                className="rounded-[3px] py-1 capitalize transition-all duration-75 hover:bg-[#ff727e] hover:text-white"
              >
                <Link href="/">{text}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ToolTips;
