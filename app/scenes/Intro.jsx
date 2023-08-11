"use client";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Intro = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const yDesk = useTransform(scrollYProgress, [0, 0.8], [0, 300]);
  const yMobile = useTransform(scrollYProgress, [0, 0.8], [100, 400]);

  return (
    <div
      ref={ref}
      className="relative h-[90vh]  rounded-bl-[96px] bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] lg:h-[75vh] sm:bg-gradient-to-b "
    >
      <motion.div className=" absolute inset-0 flex items-center justify-center overflow-hidden rounded-bl-[96px]">
        <motion.img
          style={{ opacity, y: yDesk, scale: 1.5, x: "15%" }}
          alt="background pattern intro desk"
          src="/images/bg-pattern-intro-desktop.svg"
          className="h-auto w-full object-cover sm:hidden"
        />
        <motion.img
          style={{ opacity, y: yMobile, scale: 3.3, x: "30%" }}
          alt="background pattern intro mobile"
          src="/images/bg-pattern-intro-mobile.svg"
          className="hidden h-auto w-full  object-cover sm:block"
        />
      </motion.div>
      <Container className="relative z-50 flex h-full flex-col pt-10">
        <Navbar />
        <div className="flex h-full flex-col items-center justify-center">
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-center text-7xl font-semibold text-white xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl">
              A modern publishing platform
            </h1>
            <p className="mt-5 text-center text-2xl text-white/75 xl:text-xl lg:text-lg sm:mt-4 xs:text-base">
              Grow your audience and build your online brand
            </p>
          </motion.div>
          <div className="mt-8 flex items-center gap-4 sm:mt-10 xs:flex-col">
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ButtonLink href={"/signup"}>Start for Free</ButtonLink>
            </motion.div>
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ButtonLink outlined href={"#illustration-desk"}>
                Learn More
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Intro;
