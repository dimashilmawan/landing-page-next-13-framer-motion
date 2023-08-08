import Container from "@/components/Container";
import Image from "next/image";
import illustrationLaptopDesk from "@/images/illustration-laptop-desktop.svg";
import illustrationLaptopMobile from "@/images/illustration-laptop-mobile.svg";

const Laptop = () => {
  return (
    <div>
      <Container className="py-64 xl:py-52 lg:py-44 md:py-36 sm:py-28 sm:text-center xs:py-20">
        <div className="flex gap-12 lg:gap-8 sm:flex-col sm:gap-16 xs:gap-12">
          <div className="flex flex-1 items-center justify-center">
            <Image
              alt="illustration laptop desktop"
              src={illustrationLaptopDesk}
              className="h-auto w-[300px] -translate-x-20 scale-[3] xl:-translate-x-28 xl:scale-[2.8] lg:-translate-x-36 lg:scale-[2.5] sm:hidden"
            />
            <Image
              alt="illustration laptop desktop"
              src={illustrationLaptopMobile}
              className="hidden h-auto w-full sm:block "
              priority
            />
          </div>
          <div className="flex-1 ">
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
            <h3 className="mt-16 text-3xl font-semibold text-[#1f3f5b] xl:text-2xl lg:text-xl md:mt-10 xs:text-lg">
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
        </div>
      </Container>
    </div>
  );
};
export default Laptop;
