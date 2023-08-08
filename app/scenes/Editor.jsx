import Container from "@/components/Container";
import illustrationEditorDesk from "@/images/illustration-editor-desktop.svg";
import illustrationEditorMobile from "@/images/illustration-editor-mobile-cropped.svg";
import Image from "next/image";

const Editor = () => {
  return (
    <div className="overflow-hidden" id="illustration-desk">
      <Container className="h-full pb-60 pt-32 lg:pb-52 lg:pt-28 md:py-28 md:pb-40  sm:pb-60 xs:py-20 xs:pb-40">
        <h2 className="text-center text-[2.75rem] font-semibold text-[#1f3f5b] lg:text-3xl xs:text-2xl">
          Design for the future
        </h2>
        <div className="mt-20 flex xl:mt-14 lg:gap-8 sm:flex-col sm:gap-20 xs:mt-8 xs:gap-16">
          <div className="flex-1 sm:order-2 sm:text-center">
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
          <div className="flex flex-1 items-center justify-center sm:order-1 ">
            <Image
              alt="illustration editor desktop"
              src={illustrationEditorDesk}
              className="h-auto w-[300px] -translate-y-4 translate-x-48 scale-[3] object-cover xl:-translate-y-0 xl:scale-[2.75] lg:scale-[2.5] sm:hidden"
            />
            <Image
              alt="illustration editor mobile"
              src={illustrationEditorMobile}
              className="hidden h-auto w-full sm:block"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Editor;
