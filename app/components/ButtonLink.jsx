import Link from "next/link";

const ButtonLink = ({ children, href, outlined = false, className }) => {
  return (
    <Link
      href={href}
      className={`inline-block w-40 rounded-full py-3 text-center font-ubuntu font-bold transition-all xl:w-36 sm:w-40 sm:py-3 xs:text-sm ${
        outlined
          ? "bg-transparent text-white outline outline-1 outline-offset-[-1px] outline-white"
          : "bg-white text-[#ff525d] hover:bg-[rgba(255,114,126,0.9)] hover:text-white"
      } ${className}`}
    >
      {children}
    </Link>
  );
};
export default ButtonLink;

export const ButtonLinkMobile = ({ children, href, className, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-block w-40 rounded-full bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] py-3 text-center text-xl font-bold text-white transition-all sm:text-lg xs:text-base ${className}`}
    >
      {children}
    </Link>
  );
};
