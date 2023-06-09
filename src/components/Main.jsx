import { BottomBar } from "./BottomBar";
import { HomeBanner } from "./HomeBanner";
import { HomeParallax } from "./HomeParallax";
import { ReformaBanner } from "./ReformaBanner";
export const Main = () => {
  return (
    <main>
        <HomeBanner/>
        <HomeParallax/>
        <ReformaBanner/>
        <BottomBar/>
    </main>
  );
};
