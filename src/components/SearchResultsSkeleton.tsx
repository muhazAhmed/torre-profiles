import { Card, CardContent } from "@/components/ui/card";

export default function SearchResultsSkeleton() {
  return (
    <div className="grid gap-4">
      {[...Array(5)].map((_, i) => (
        <Card key={i} className="animate-pulse glass">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full bg-muted" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 w-1/3 bg-muted rounded" />
              <div className="h-3 w-1/2 bg-muted rounded" />
              <div className="h-3 w-1/4 bg-muted rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
