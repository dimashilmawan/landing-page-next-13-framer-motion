"use client";
import Container from "@/components/Container";
import PhonesDesc from "@/components/phones/PhonesDesc";
import Image from "next/image";
import illustrationPhones from "../../public/images/illustration-phones.svg";
import bgPatternCircles from "../../public/images/bg-pattern-circles.svg";
import { motion } from "framer-motion";

const Phones = () => {
  return (
    <div className="relative rounded-bl-[96px] rounded-tr-[96px] bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] py-28 xl:py-20 lg:py-16">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-bl-[96px] rounded-tr-[96px] ">
        <Image
          alt="bg pattern circles"
          src={bgPatternCircles}
          className="absolute -bottom-[20%] -left-[10%] scale-110 xl:-left-[20%] xl:scale-100 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-40 sm:scale-150 xs:-translate-y-56"
        />
      </div>
      <Container className="relative sm:text-center">
        <div className="flex lg:gap-8 md:gap-16 sm:flex-col xs:gap-4">
          <motion.div
            initial={{ x: -200, scale: 0.3, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            className="flex flex-1 items-center justify-center "
          >
            <Image
              alt="illustration phones"
              src={illustrationPhones}
              className="h-auto w-[150px] translate-y-5  scale-[3.5]  xl:scale-[3] lg:translate-y-4 lg:scale-[2.5] sm:w-[93px] sm:-translate-y-20 sm:scale-[4] xs:scale-[3.1]"
            />
          </motion.div>
          <PhonesDesc />
        </div>
      </Container>
    </div>
  );
};
export default Phones;
