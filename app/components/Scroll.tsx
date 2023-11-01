"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroll = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-pink-200">
      <section ref={targetRef} className="relative h-[300vh] bg-pink-200">
        <div className="font-serif first-letter:flex text-center items-center justify-center p-4 text-2xl text-pink-500">
          Dear Isabella, There is nothing in the world that brings me more joy
          or happiness than the time I spend with you. I want to express my
          heartfelt gratitude for sharing your life with me; it&apos;s a
          privilege I will forever cherish. Our journey together has been filled
          with growth, and I have fallen deeply in love with you. Let&apos;s
          raise a toast to our love, and as you scroll through our memories, see
          just how far we&apos;ve come. I love you more than words can express,
          and I can&apos;t wait to celebrate together. Yours, Mark
        </div>
      </section>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2">
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
    <div className="text-white">
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
    </div>
  );
};

export default Scroll;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/image1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/image2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/image3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/image4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/image5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/image6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/image7.jpg",
    title: "Title 7",
    id: 7,
  },
];
