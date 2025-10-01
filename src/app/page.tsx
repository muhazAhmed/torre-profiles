"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 glass p-10 rounded-2xl shadow-xl"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl font-extrabold text-foreground tracking-tight drop-shadow-[0_0_12px_rgba(0,255,128,0.4)]"
        >
          Torre Profiles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-muted-foreground max-w-md text-lg"
        >
          Explore and discover professionals around the world powered by Torre
          APIs.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/search">
            <Button size="lg" className="px-8 py-6 text-lg shadow-lg">
              Start Searching
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
