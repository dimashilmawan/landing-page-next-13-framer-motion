import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import ButtonLink from "./ButtonLink";
import logo from "@/images/logo.svg";
import MobileNav from "./MobileNav";

const navLinkText = ["Product", "Company", "Connect"];

const Navbar = () => {
  return (
    <div className="flex items-center font-ubuntu font-medium text-white/75 lg:justify-between">
      <Link href="/">
        <Image alt="Blogr Logo" src={logo} />
      </Link>
      <MobileNav />
      <div className="flex flex-1 lg:hidden">
        <nav className="ml-12 flex-1">
          <ul className="flex gap-8">
            {navLinkText.map((text) => (
              <NavLink key={text}>{text}</NavLink>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/login" className="group relative hover:text-white">
            <span>Login</span>
          </Link>
          <ButtonLink href={"/signup"}>Sign up</ButtonLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
