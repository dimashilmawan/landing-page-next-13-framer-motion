"use client";
import { motion } from "framer-motion";
const TextBox = ({ children, className, direction }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        x: direction === "left" ? "-50%" : "50%",
      }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      className={` ${className}`}
    >
      <h3 className="text-3xl font-semibold text-[#1f3f5b] xl:text-2xl lg:text-xl xs:text-lg">
        {children}
      </h3>
      <p className="mt-6 text-[rgba(31,63,91,0.75)] lg:mt-3 lg:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        necessitatibus tempora perspiciatis velit tenetur quidem non in vel,
        optio cum sint quae quibusdam voluptatum laborum fugit, ut placeat
        voluptatem magni! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Expedita, nisi. Lorem ipsum dolor sit amet.
      </p>
    </motion.div>
  );
};
export default TextBox;
