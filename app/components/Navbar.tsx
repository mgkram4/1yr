import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-pink-300 flex flex-col md:flex-row items-center justify-between p-4">
      <div className="font-cursive text-lg md:text-3xl text-white text-center md:text-left">
        HAPPY ONE YEAR ANNIVERSARY
        <span className="text-pink-500"> 💕MY LOVE💞</span>
      </div>

      <div className="flex-none mt-4 md:mt-0">
        <Image width={200} height={150} src="/Dino.png" alt="Dino" />
      </div>
    </div>
  );
}
