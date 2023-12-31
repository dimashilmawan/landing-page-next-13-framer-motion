import Container from "@/components/Container";
import TextBox from "@/components/TextBox";
import illustrationEditorDesk from "@/images/illustration-editor-desktop.png";
import illustrationEditorMobile from "@/images/illustration-editor-mobile.png";
import Image from "next/image";

const Editor = () => {
  return (
    <div className="" id="illustration-desk">
      <Container className="h-full pb-60 pt-32 xl:pb-56 xl:pt-28 lg:pb-44 lg:pt-20 md:py-28  md:pb-40 sm:pb-60 xs:py-20 xs:pb-40">
        <h2 className="text-center font-overpass text-4xl font-semibold text-[#1f3f5b] lg:text-3xl xs:text-2xl">
          Design for the future
        </h2>
        <div className="mt-20 flex gap-8 xl:mt-14 md:flex-col xs:mt-8 ">
          <div className="flex-1 md:order-2 sm:text-center">
            <TextBox direction="left">Introducing an extensible editor</TextBox>
            <TextBox direction="left" delay className="mt-16 lg:mt-8">
              Robust content management
            </TextBox>
          </div>
          <div className="relative z-50 flex flex-1 items-center justify-center md:order-1">
            {/* <Image
              alt="illustration editor desktop"
              src={illustrationEditorDesk}
              placeholder="blur"
              className="h-auto w-[300px] translate-x-20 scale-[2.5] object-cover xl:translate-x-24 xl:scale-[2.3] lg:translate-x-28 lg:scale-[2] md:hidden"
            />
            <Image
              alt="illustration editor mobile"
              src={illustrationEditorMobile}
              placeholder="blur"
              className="hidden h-auto w-full md:block"
            /> */}
            <Image
              alt="illustration editor desktop"
              src={illustrationEditorDesk}
              className="h-auto w-full translate-x-20 scale-125  xl:translate-x-24  lg:translate-x-28 md:hidden"
            />
            <Image
              alt="illustration editor mobile"
              src={illustrationEditorMobile}
              className="hidden h-auto w-full md:block"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Editor;
