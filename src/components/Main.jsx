import { Amenidades } from "./Amenidades";
import { HomeBanner } from "./HomeBanner";
import { HomeParallax } from "./HomeParallax";
import { ReformaBanner } from "./ReformaBanner";
import { Ubicacion } from "./Ubicacion";
export const Main = () => {
  return (
    <main className="hidden lock:block">
      <HomeBanner />
      <HomeParallax />
      <ReformaBanner />
      <Amenidades />
      <Ubicacion />
    </main>
  );
};
