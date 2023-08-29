import Container from "@/components/Container";
import Image from "next/image";
import logo from "@/images/logo.png";

const Footer = () => {
  return (
    <div className="rounded-tr-[96px] bg-[#25252d]">
      <Container className="py-20 font-ubuntu text-lg text-white xl:py-16 xl:text-base lg:py-14 md:py-10 md:text-sm sm:py-20 sm:text-center ">
        <div className="flex gap-12 sm:flex-col">
          <div className="flex flex-1 justify-center ">
            <div>
              <Image
                alt="logo"
                src={logo}
                // className="h-auto w-[100px] lg:w-20"
                className="h-auto w-[100px] object-cover"
              />
            </div>
          </div>
          <FooterGroup>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </FooterGroup>
          <FooterGroup>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </FooterGroup>
          <FooterGroup>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </FooterGroup>
        </div>
      </Container>
    </div>
  );
};
export default Footer;

const FooterGroup = ({ children }) => {
  return (
    <div className="flex flex-1 justify-center ">
      <div className="space-y-7 xl:space-y-6 md:space-y-4">
        <h3 className="font-semibold">Product</h3>
        <ul className="space-y-2 text-[#c8c8cb] lg:space-y-1">{children}</ul>
      </div>
    </div>
  );
};
