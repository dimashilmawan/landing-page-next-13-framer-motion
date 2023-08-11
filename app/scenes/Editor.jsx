"use client";
import Container from "@/components/Container";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Editor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <div ref={ref} className="overflow-hidden" id="illustration-desk">
      <Container className="h-full pb-60 pt-32 xl:pb-56 xl:pt-28 lg:pb-44 lg:pt-20 md:py-28  md:pb-40 sm:pb-60 xs:py-20 xs:pb-40">
        <h2 className="text-center text-[2.75rem] font-semibold text-[#1f3f5b] lg:text-3xl xs:text-2xl">
          Design for the future
        </h2>
        <div className="mt-20 flex xl:mt-14 xl:gap-10 lg:gap-16 md:flex-col sm:gap-20 xs:mt-8 xs:gap-16">
          <div className="flex-1  md:order-2 sm:text-center">
            <h3 className="text-3xl font-semibold text-[#1f3f5b] xl:text-2xl lg:text-xl xs:text-lg">
              Introducing an extensible editor
            </h3>
            <p className="mt-6 text-[rgba(31,63,91,0.75)] lg:mt-3 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, necessitatibus tempora perspiciatis velit tenetur
              quidem non in vel, optio cum sint quae quibusdam voluptatum
              laborum fugit, ut placeat voluptatem magni! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Expedita, nisi. Lorem ipsum
              dolor sit amet.
            </p>
            <h3 className="mt-16 text-3xl font-semibold text-[#1f3f5b] xl:text-2xl lg:mt-8 lg:text-xl xs:text-lg ">
              Robust content management
            </h3>
            <p className="mt-6 text-[rgba(31,63,91,0.75)] lg:mt-3 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, necessitatibus tempora perspiciatis velit tenetur
              quidem non in vel, optio cum sint quae quibusdam voluptatum
              laborum fugit, ut placeat voluptatem magni! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Expedita, nisi. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center  md:order-1">
            <motion.img
              animate={{ opacity: isInView ? 1 : 1, x: isInView ? 125 : 700 }}
              transition={{ delay: 0.3 }}
              style={{ scale: 2.25 }}
              alt="illustration editor desktop"
              src="/images/illustration-editor-desktop.svg"
              className="h-auto w-[300px] object-cover md:hidden"
            />
            <motion.img
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 300 }}
              transition={{ delay: 0 }}
              alt="illustration editor mobile"
              src="/images/illustration-editor-mobile.svg"
              className="hidden h-auto w-full md:block"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Editor;
