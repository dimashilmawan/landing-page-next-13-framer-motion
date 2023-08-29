"use client";
import Container from "@/components/Container";
import TextBox from "@/components/TextBox";
import illustrationLaptopDesk from "../../public/images/illustration-laptop-desktop.svg";
import illustrationLaptopMobile from "../../public/images/illustration-laptop-mobile.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Laptop = () => {
  return (
    <div>
      <Container className="py-64 xl:py-52 lg:py-44 md:py-36 sm:py-28 sm:text-center xs:py-20">
        <div className="flex gap-12 lg:gap-8 sm:flex-col sm:gap-16 xs:gap-12">
          <div className="flex flex-1 items-center justify-center ">
            {/* <Image
              alt="illustration laptop desktop"
              src={illustrationLaptopDesk}
              className="h-auto w-[300px] -translate-x-24 scale-[2.75] xl:-translate-x-28 xl:scale-[2.8] lg:-translate-x-36 lg:scale-[2.5] sm:hidden"
            />
            <Image
              alt="illustration laptop desktop"
              src={illustrationLaptopMobile}
              className="hidden h-auto w-full sm:block "
            /> */}
          </div>
          <div className="flex-1 overflow-hidden">
            <TextBox>Free, open, simple</TextBox>
            <TextBox className="mt-16 md:mt-10">Powerful tooling</TextBox>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Laptop;
