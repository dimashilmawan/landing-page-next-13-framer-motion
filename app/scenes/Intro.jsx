import Image from "next/image";
import bgPatternIntroDesk from "@/images/bg-pattern-intro-desktop.svg";
import bgPatternIntroMobile from "@/images/bg-pattern-intro-mobile.svg";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

const Intro = () => {
  return (
    <div className="relative h-[90vh] rounded-bl-[96px] bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] lg:h-[75vh] sm:bg-gradient-to-b ">
      <div className=" absolute left-0 top-0 h-full w-full overflow-hidden rounded-bl-[96px]">
        <Image
          alt="background pattern intro desk"
          fill
          src={bgPatternIntroDesk}
          className="-translate-y-[40px] translate-x-[384px] scale-[2.2] object-cover sm:hidden"
          priority
        />
        <Image
          alt="background pattern intro mobile"
          fill
          src={bgPatternIntroMobile}
          className="hidden translate-x-[124px] translate-y-[124px] scale-[2.2] object-cover sm:block"
        />
      </div>
      <Container className="relative z-50 flex h-full flex-col pt-10">
        <Navbar />
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center text-7xl font-semibold text-white xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl">
            A modern publishing platform
          </h1>
          <p className="mt-5 text-center text-2xl text-white/75 xl:text-xl lg:text-lg sm:mt-4 xs:text-base">
            Grow your audience and build your online brand
          </p>
          <div className="mt-8 flex items-center gap-4 sm:mt-10 xs:flex-col">
            <ButtonLink href={"/signup"}>Start for Free</ButtonLink>
            <ButtonLink outlined href={"#illustration-desk"}>
              Learn More
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Intro;
