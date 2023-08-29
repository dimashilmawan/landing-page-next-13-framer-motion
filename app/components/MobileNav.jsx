"use client";
import Image from "next/image";
import iconHamburger from "@/images/icon-hamburger.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeModalHandler = () => setIsOpen(false);

  const toggleDropdownHandler = (label) => {
    setDropdown((prevState) => (prevState === label ? false : label));
  };

  return (
    <>
      <div className="hidden flex-1 justify-end lg:flex [@media(any-hover:none)]:flex">
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(true)}
            >
              <Image
                alt="icon hamburger "
                src={iconHamburger}
                className="h-auto w-[32px]"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* <Backdrop onCloseModal={closeModalHandler} /> */}
            <Modal
              onCloseModal={closeModalHandler}
              onToggleDropdown={toggleDropdownHandler}
              dropdown={dropdown}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default MobileNav;

const Backdrop = () => {
  return (
    <motion.div
      className="fixed left-0 top-0 z-[150] h-full w-full bg-[rgba(255,61,84,0.8)] backdrop-blur-sm "
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ delay: 0.2, duration: 0.2 }}
    >
      &nbsp;
    </motion.div>
  );
};
