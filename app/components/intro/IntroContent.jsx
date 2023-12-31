"use client";

import ButtonLink from "../ButtonLink";
import { motion } from "framer-motion";

const IntroContent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ButtonLink href={"/signup"}>Start for Free</ButtonLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ButtonLink outlined href={"#illustration-desk"}>
            Learn More
          </ButtonLink>
        </motion.div>
      </div>
    </div>
  );
};
export default IntroContent;
