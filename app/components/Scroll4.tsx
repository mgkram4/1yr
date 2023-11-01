"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroll4 = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center"></div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Add a spring effect to make the motion more dynamic
  const springConfig = { damping: 10, stiffness: 80 };

  // Apply different transformations for x, y, and rotation
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "0%", "20%"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "0%", "10%"]);
  const rotation = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-pink-300">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            x,
            y,
            rotate: rotation,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
  scrollYProgress,
}: {
  card: CardType;
  scrollYProgress: any;
}) => {
  const hoverScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <motion.div
        style={{
          x: hoverScale,
          y: hoverScale,
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="absolute inset-0 z-0"
      ></motion.div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg"
        >
          {card.title}
        </motion.p>
      </div>
    </div>
  );
};

export default Scroll4;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/image12.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/image19.jpg",
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
    url: "/image16.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/image14.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/image12.jpg",
    title: "Title 7",
    id: 7,
  },
];
