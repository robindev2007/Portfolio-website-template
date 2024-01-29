import AboutMe from "@/Components/Page/AboutMe/AboutMe";
import Featured from "@/Components/Page/Featured/Featured";
import HeroSecton from "@/Components/Page/HeroSecton";

export default async function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSecton />
      <AboutMe />
      <Featured />
    </div>
  );
}
