"use client";
import Image from "next/image";
import iconHamburger from "@/images/icon-hamburger.svg";
import iconClose from "@/images/icon-close.svg";
import iconArrowDark from "@/images/icon-arrow-dark.svg";
import { useState } from "react";
import { ButtonLinkMobile } from "@/components/ButtonLink";
import Link from "next/link";
import { ContainerModal } from "./Container";
import { AnimatePresence, motion } from "framer-motion";

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
            <Backdrop onCloseModal={closeModalHandler} />
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
      className="fixed left-0 top-0 z-[150] h-full w-full bg-[rgba(255,61,84,0.75)] backdrop-blur-sm "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.2 }}
    >
      &nbsp;
    </motion.div>
  );
};

const labels = ["product", "company", "connect"];

const Modal = ({ onCloseModal, onToggleDropdown, dropdown }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200]"
      initial={{ opacity: 0, y: -350 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -350 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <ContainerModal className="fixed left-0 right-0 top-1/2 block -translate-y-1/2 rounded-2xl bg-white/95  pb-12 pt-8 text-xl text-[rgba(31,63,91,0.8)] shadow-xl sm:text-lg xs:pb-8 xs:pt-4 xs:text-base">
        <button
          transition={{ delay: 0.15 }}
          className="absolute right-2 top-2 mx-auto flex h-10 w-10 items-center justify-center rounded-full sm:-bottom-20 sm:h-12 sm:w-12"
          onClick={() => {
            onCloseModal();
            onToggleDropdown();
          }}
        >
          <Image
            alt="icon close"
            src={iconClose}
            className="h-auto w-[24px] sm:w-[20px]"
          />
        </button>
        <Labels dropdown={dropdown} onToggleDropdown={onToggleDropdown} />
        <div className="flex flex-col items-center justify-center gap-4 pt-8">
          <Link onClick={onCloseModal} href="/login">
            Login
          </Link>
          <ButtonLinkMobile onClick={onCloseModal} href="/signup">
            Sign up
          </ButtonLinkMobile>
        </div>
      </ContainerModal>
    </motion.div>
  );
};

const Labels = ({ dropdown, onToggleDropdown }) => {
  return (
    <ul className="border-b-2 border-[rgba(31,63,91,0.3)] pb-4">
      {labels.map((label) => (
        <li key={label}>
          <div className="py-4">
            <button
              className="flex w-full items-center justify-center gap-2 text-center"
              onClick={() => onToggleDropdown(label)}
            >
              <span
                className={`${
                  dropdown === label ? "text-[#1f3f5b] " : ""
                } capitalize transition-all`}
              >
                {label}
              </span>
              <Image
                alt="icon arrow"
                src={iconArrowDark}
                className={`${
                  dropdown === label ? "rotate-180 " : ""
                } transition-all`}
              />
            </button>
          </div>
          {dropdown === label && (
            <ul className="space-y-3 rounded-md bg-gray-300/75 p-6 text-center text-[#1f3f5b]">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
