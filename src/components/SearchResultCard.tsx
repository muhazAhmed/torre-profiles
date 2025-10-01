"use client";

import { TorreSearchResult } from "@/types/torre";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { CheckCheck } from "lucide-react";

interface Props {
  profile: TorreSearchResult;
}

const MotionCard = motion(Card);

export default function SearchResultCard({ profile }: Props) {
  const profileId = profile.username || profile.publicId;

  return (
    <Link href={profileId ? `/profile/${profileId}` : "#"}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <MotionCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-full flex flex-col items-center text-center cursor-pointer shadow-xl rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all hover:border-primary"
        >
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-sm">
              <Image
                src={profile.imageUrl || "/placeholder.png"}
                alt={profile.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{profile.name}</h3>
              {profile.verified && (
                <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-primary/70  flex gap-2">
                  <CheckCheck size={15} /> Verified
                </span>
              )}
            </div>

            {profile.professionalHeadline && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {profile.professionalHeadline}
              </p>
            )}

            {profile.username && (
              <p className="text-xs text-muted-foreground">
                @{profile.username}
              </p>
            )}
          </CardContent>
        </MotionCard>
      </motion.div>
    </Link>
  );
}
