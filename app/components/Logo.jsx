import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";

const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-block outline-none ring-[#ff525d] ring-offset-2 focus:ring-2"
    >
      <Image
        alt="Blogr Logo"
        src={logo}
        className="h-auto w-[100px] object-cover"
      />
    </Link>
  );
};
export default Logo;
