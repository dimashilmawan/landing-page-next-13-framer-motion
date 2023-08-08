import Image from "next/image";
import iconArrow from "@/images/icon-arrow-light.svg";

import ToolTips from "./ToolTips";

const NavLink = ({ children, tooltips }) => {
  return (
    <li className="group relative flex items-center gap-2 py-4 transition-all hover:text-white">
      <span className="relative">
        {children}
        <span className="absolute bottom-1 left-0 h-[2px] w-full bg-white opacity-0 transition-all duration-200 group-hover:-bottom-[2px] group-hover:opacity-100">
          &nbsp;
        </span>
      </span>
      <Image
        alt=""
        src={iconArrow}
        className="-mb-[2px] h-auto w-[10px] opacity-75 transition-all duration-200 group-hover:rotate-180 group-hover:opacity-100"
      />
      <ToolTips tooltips={tooltips} />
    </li>
  );
};
export default NavLink;
