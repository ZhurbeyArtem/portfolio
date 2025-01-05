import AboutMe from "@/components/aboutMe/AboutMe";
import Header from "@/components/header/Header";
import Skills from "@/components/skills/Skills";


export default function Home() {
  return (
    <div className="font-mainFont mx-4 2xl:mx-[112px]">
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}
