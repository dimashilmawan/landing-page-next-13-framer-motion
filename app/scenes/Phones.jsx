import Container from "@/components/Container";
import PhonesDesc from "@/components/phones/PhonesDesc";
import Image from "next/image";
import illustrationPhones from "@/images/illustration-phones.png";
import bgPatternCircles from "@/images/bg-pattern-circles.png";

const Phones = () => {
  return (
    <div className="relative  rounded-bl-[96px] rounded-tr-[96px] bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] py-28 xl:py-20 lg:py-16">
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-bl-[96px] rounded-tr-[96px] ">
        <Image
          alt="bg pattern circles"
          src={bgPatternCircles}
          className="absolute -bottom-[50%] -left-[10%] xl:-left-[20%] xl:scale-100 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-40 sm:scale-150 xs:-translate-y-56"
        />
      </div>
      <Container className="sm:text-center">
        <div className="flex lg:gap-8 md:gap-16 sm:flex-col xs:gap-4">
          <div className="relative z-50 flex flex-1 items-center justify-center">
            <Image
              alt="illustration phones"
              src={illustrationPhones}
              quality={90}
              className="h-auto w-[150px] translate-y-5  scale-[3.5]  xl:scale-[3] lg:translate-y-4 lg:scale-[2.5] sm:w-[93px] sm:-translate-y-20 sm:scale-[4] xs:scale-[3.1]"
            />
            {/* <Image
              alt="illustration phones"
              src={illustrationPhones}
              width={500}
              height={500}
              quality={100}
              className="absolute h-auto translate-y-5 object-cover  lg:translate-y-4 lg:scale-50 sm:w-[93px] sm:-translate-y-20"
            /> */}
          </div>
          <PhonesDesc />
        </div>
      </Container>
    </div>
  );
};
export default Phones;
