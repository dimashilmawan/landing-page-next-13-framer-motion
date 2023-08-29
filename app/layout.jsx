import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, Overpass, Ubuntu } from "next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${overpass.variable} ${ubuntu.variable} ${overpass.className}`}
      >
        <>
          <Container className="absolute left-0 top-10 z-[100] ">
            <Navbar />
          </Container>
          {children}
        </>
      </body>
    </html>
  );
}
