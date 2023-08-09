import Image from "next/image";
import Link from "next/link";
import Container, { ContainerModal } from "./Container";
import Logo from "./Logo";
import illustrationPhones from "@/images/illustration-phones-cropped.svg";
import illustrationLaptopMobile from "@/images/illustration-laptop-mobile.svg";
import Navbar from "./Navbar";

const AuthModal = ({ login }) => {
  return (
    <div
      className={`flex h-screen w-full flex-col bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] pt-12 sm:bg-gradient-to-b `}
    >
      <Container>
        {/* <Logo /> */}
        <Navbar />
      </Container>
      <div className="flex h-full items-center justify-center">
        <ContainerModal className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#ff525d]">
          <div className="flex gap-16 py-16 sm:py-12 xs:py-8">
            <div
              className={`flex flex-1 items-center justify-center md:hidden ${
                !login ? "order-3" : " "
              }`}
            >
              <Image
                alt="illustration laptop"
                src={login ? illustrationLaptopMobile : illustrationPhones}
              />
            </div>
            <div className={`order-2 flex flex-1 items-center justify-normal`}>
              <div className="w-full ">
                <h1 className="text-center text-3xl font-semibold text-[rgba(31,63,91,0.95)]">
                  {login ? "Welcome!" : "Create account"}
                </h1>
                <form className="mt-8 font-ubuntu xs:mt-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-medium text-[rgba(31,63,91,0.9)]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="youremail@example.com"
                      className="border-b-2 pb-[2px] text-[rgba(31,63,91,0.85)] outline-none focus:border-[#ff525d]"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-1">
                    <label
                      htmlFor="password"
                      className="font-medium text-[rgba(31,63,91,0.9)] "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="********"
                      className="border-b-2 pb-[2px] text-[rgba(31,63,91,0.85)] outline-none focus:border-[#ff525d]"
                    />
                  </div>
                  <div className="mt-6">
                    <button className="block w-full rounded-xl bg-gradient-to-r from-[#ff8f70] to-[#ff7a85] py-2 font-medium text-white outline-none ring-[#ff525d] ring-offset-2 focus:ring-2">
                      {login ? "Login" : "Sign up"}
                    </button>
                  </div>
                  <div className="mt-3 flex justify-center gap-1 text-sm text-[rgba(31,63,91,0.75)]">
                    <p>
                      {login
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    </p>
                    <Link
                      href={`/${login ? "signup" : "login"}`}
                      className="font-medium text-[#ff525d] outline-none ring-[#ff525d] ring-offset-2 focus:ring-2"
                    >
                      {login ? "Sign up" : "Login"}!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ContainerModal>
      </div>
    </div>
  );
};
export default AuthModal;
