"use client";
import Container from "@/components/Container";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Phones = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75, once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative rounded-bl-[96px] rounded-tr-[96px] bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] py-28 xl:py-20 lg:py-16"
    >
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-bl-[96px] rounded-tr-[96px] ">
        <motion.img
          style={{ opacity }}
          alt="bg pattern circles"
          src="/images/bg-pattern-circles.svg"
          className="absolute -bottom-[20%] -left-[10%] scale-110 xl:-left-[20%] xl:scale-100 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-40 sm:scale-150 xs:-translate-y-56"
        />
      </div>
      <Container className="relative sm:text-center">
        <div className="flex lg:gap-8 md:gap-16 sm:flex-col xs:gap-4">
          <motion.div
            animate={{ x: isInView ? 0 : -300, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-1 items-center justify-center "
          >
            <img
              alt="illustration phones"
              src="/images/illustration-phones.svg"
              className="h-auto w-[150px] translate-y-5  scale-[3.5]  xl:scale-[3] lg:translate-y-4 lg:scale-[2.5] sm:w-[93px] sm:-translate-y-20 sm:scale-[4] xs:scale-[3.1]"
            />
          </motion.div>
          <motion.div
            // animate={{ x: isInView ? 0 : 300, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <h3 className="text-4xl font-semibold text-white xl:text-3xl lg:text-2xl sm:text-xl">
              State of the Art Infrastructure
            </h3>
            <p className="mt-6 text-white/70 lg:mt-4 lg:text-sm sm:mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
              suscipit obcaecati illo cum saepe optio porro commodi quae
              eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste voluptates error itaque ducimus labore voluptate!
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
export default Phones;
