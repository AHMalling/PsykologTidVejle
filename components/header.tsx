"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const links = [
  {
    name: "Velkommen",
    hash: "/",
  },
  {
    name: "Om os",
    hash: "/om-os",
  },
  {
    name: "Vi tilbyder",
    hash: "/vi-tilbyder",
  },
  {
    name: "Genkender du?",
    hash: "/genkender-du",
  },
  {
    name: "Priser",
    hash: "/priser",
  },
  {
    name: "Praktisk",
    hash: "/praktisk",
  },
  {
    name: "Kontakt",
    hash: "/kontakt",
  },
] as const;

export default function Header() {
  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 20) {
        setColor(true);
        console.log("setcoler er skiftet til true");
      } else {
        setColor(false);
        console.log("setcoler er skiftet til false");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      className="relative z-50 w-screen 
     font-mono font-medium text-white "
    >
      <nav
        className={
          color
            ? "fixed flex  w-screen bg-black py-2 sm:h-12 sm:bg-black/90  sm:py-6 "
            : "fixed flex  w-screen bg-black py-2 sm:h-12 sm:bg-inherit sm:py-6 sm:hover:bg-black/90"
        }
      >
        <ul className=" items flex w-screen flex-wrap items-center justify-center font-medium">
          {links.map((link) => (
            <motion.li
              className="flex cursor-pointer items-center justify-center rounded-full border px-2 transition-all  hover:text-orange-400 sm:h-3/4 sm:border-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
