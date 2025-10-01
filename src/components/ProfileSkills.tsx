"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ProfileSkillsProps {
  strengths: any[];
}

export default function ProfileSkills({ strengths }: ProfileSkillsProps) {
  if (!strengths || strengths.length === 0) {
    return <p className="text-muted-foreground">No skills listed.</p>;
  }

  return (
    <Card className="glass shadow-md border border-border">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {strengths.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
            >
              {skill.name} {skill.proficiency ? `(${skill.proficiency})` : ""}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
