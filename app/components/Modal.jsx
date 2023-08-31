"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLinkMobile } from "@/components/ButtonLink";
import Image from "next/image";
import iconClose from "../../public/images/icon-close.svg";
import iconArrow from "../../public/images/icon-arrow-dark.svg";

const Modal = ({ onCloseModal, onToggleDropdown, dropdown }) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center">
      {/* <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        style={{
          borderRadius: 24,
        }}
        className={`pointer-events-auto relative mx-auto block w-[48rem] max-w-3xl bg-white/95 px-16 pb-12 pt-8 text-xl text-[rgba(31,63,91,0.8)] lg:w-[calc(100%_-_8rem)] md:w-[calc(100%_-_6rem)] md:px-12 sm:w-[calc(100%_-_4rem)] sm:px-8 sm:text-lg xs:w-[calc(100%_-_2rem)] xs:px-4 xs:pb-8 xs:pt-4 xs:text-base`}
      > */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          borderRadius: 24,
        }}
        className={`pointer-events-auto relative mx-auto w-[90vw] max-w-3xl bg-white/95 px-16 pb-12 pt-8 text-xl text-[rgba(31,63,91,0.8)] md:px-12  sm:px-8 sm:text-lg xs:px-4 xs:pb-8 xs:pt-4 xs:text-base`}
      >
        <button
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
      </motion.div>
    </div>
  );
};
export default Modal;

const labels = ["product", "company", "connect"];

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
                } capitalize `}
              >
                {label}
              </span>
              <Image
                alt="icon arrow"
                src={iconArrow}
                className={`-mb-1 h-auto w-[12px]  ${
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
