import Image from "next/image";
import Scroll from "./components/Scroll";
import Scroll2 from "./components/Scroll2";
import Scroll3 from "./components/Scroll3";
import Scroll4 from "./components/Scroll4";

export default function Home() {
  return (
    <div>
      <Scroll />
      <Scroll3 />
      <Scroll2 />
      <div className="flex items-center bg-pink-600 h-60 text-white justify-center text-3xl">
        I LOVE YOU SO MUCH!!!!!{" "}
      </div>
    </div>
  );
}
