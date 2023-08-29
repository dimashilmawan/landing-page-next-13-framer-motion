import Intro from "@/scenes/Intro";
import Editor from "./scenes/Editor";
import Phones from "./scenes/Phones";
import Laptop from "./scenes/Laptop";
import Footer from "./scenes/Footer";
import imageDesk from "@/images/illustration-editor-desktop.png";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Intro />
      <Editor />
      <Phones />
      <Laptop />
      <Footer />
    </>
  );
};
export default Page;
