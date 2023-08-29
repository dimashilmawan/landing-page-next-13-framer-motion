import Container from "@/components/Container";
import IntroContent from "@/components/intro/IntroContent";
import Image from "next/image";

import bgPatternIntroDesk from "@/images/bg-pattern-intro-desktop.png";
import bgPatternIntroMobile from "@/images/bg-pattern-intro-mobile.png";

const Intro = () => {
  return (
    <div className="relative h-[90vh]  rounded-bl-[96px] bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] lg:h-[75vh] sm:bg-gradient-to-b ">
      <div className=" absolute inset-0 flex items-center justify-center overflow-hidden rounded-bl-[96px]">
        <Image
          alt="background pattern intro desk"
          src={bgPatternIntroDesk}
          className=" h-auto w-full -translate-y-16 translate-x-[28rem] scale-[1.75] object-cover xl:translate-x-[24rem] lg:-translate-y-8 lg:translate-x-[16rem]  md:translate-x-[12rem] sm:hidden "
        />
        <Image
          alt="background pattern intro mobile"
          src={bgPatternIntroMobile}
          className="hidden h-auto w-full translate-x-1/3 translate-y-24 scale-[3.25] object-cover sm:block"
        />
      </div>
      <Container className="relative z-50 flex h-full flex-col pt-20">
        <IntroContent />
      </Container>
    </div>
  );
};
export default Intro;
