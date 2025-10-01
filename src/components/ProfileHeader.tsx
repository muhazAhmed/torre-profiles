"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface ProfileHeaderProps {
  profile: any;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <Card className="glass shadow-xl border border-border">
      <Button
        className="absolute top-0 left-0"
        variant="outline"
        onClick={() => history.back()}
      >
        <ChevronLeft /> Back
      </Button>
      <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
        <Image
          src={profile.picture || "/placeholder.png"}
          alt={profile.name}
          width={120}
          height={120}
          className="rounded-full object-cover border border-border"
        />
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">
            {profile.professionalHeadline}
          </p>
          <p className="text-sm text-muted-foreground">
            {profile.location?.name || "Location not available"}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {profile.links?.map((link: any) => (
              <a
                key={link.id}
                href={
                  link.address.startsWith("http")
                    ? link.address
                    : `https://${link.address}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
