import Works from "@/components/sections/Works";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

const Page = () => {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      
      <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Works />
            <Skills />
            <Contact />
          </main>
        </div>
      </PageTransition>
    </>
  );
};

export default Page;