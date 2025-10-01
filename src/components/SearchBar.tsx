"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "motion/react";

interface SearchBarProps {
  defaultQuery?: string;
}

const suggestions = ["torrenegra", "Muhaz", "Diana", "Recruiter"];

export default function SearchBar({ defaultQuery = "" }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  const handleSearch = (value?: string) => {
    const q = value ?? query;
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex gap-2 items-center bg-card/60 backdrop-blur-md border border-border rounded-xl p-3 shadow-lg"
      >
        <Input
          placeholder="Search professionals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="default"
            onClick={() => handleSearch()}
            className="px-5 py-2 text-base font-medium shadow-md"
          >
            <Search size={18} />
            Search
          </Button>
        </motion.div>
      </motion.div>

      <div className="flex flex-wrap gap-2 justify-center items-center">
        <span className="text-muted-foreground text-sm">suggestions:</span>
        {suggestions.map((s) => (
          <motion.span
            key={s}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSearch(s)}
            className="cursor-pointer text-sm px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
