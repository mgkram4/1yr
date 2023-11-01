"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroll2 = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-pink-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center"></div>
    </div>
  );
};

export default Scroll2;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/image22.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/image21.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/image20.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/image13.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/image8.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/image9.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/image10.jpg",
    title: "Title 7",
    id: 7,
  },
];
