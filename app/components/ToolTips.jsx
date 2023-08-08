import Link from "next/link";

const tooltipsText = ["Contact", "NewsLetter", "LinkedIn"];

const ToolTips = () => {
  return (
    <div className="absolute left-1/2 top-14 hidden w-36 -translate-x-1/2  rounded-md bg-white/95 font-normal text-gray-600/90 backdrop-blur-sm group-hover:block">
      <ul className="flex flex-col gap-[2px] py-4 text-center ">
        {tooltipsText.map((text) => (
          <li key={text} className="hover:text-gray-900 ">
            <Link href={`/${text.toLowerCase()}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToolTips;
