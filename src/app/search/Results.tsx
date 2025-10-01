import { TorreSearchResult } from "@/types/torre";
import SearchResultCard from "@/components/SearchResultCard";

async function getProfiles(query?: string): Promise<TorreSearchResult[]> {
  if (!query) return [];

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/torre/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function Results({ query }: { query: string }) {
  const profiles = await getProfiles(query);
  const rawProfiles = profiles[0] as any;
  if (!rawProfiles || !profiles || profiles.length === 0) {
    return <p className="text-muted-foreground">No results found.</p>;
  }
  let parsedProfiles: TorreSearchResult[] = [];
  if (typeof rawProfiles === "string") {
    parsedProfiles = rawProfiles
      .split("\n") // split by newline
      .filter(Boolean) // remove empty strings
      .map((text) => JSON.parse(text)); // turn into objects
  } else {
    parsedProfiles = [rawProfiles];
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {parsedProfiles.map((profile: any, index: number) => (
        <SearchResultCard key={profile.ardaId || index} profile={profile} />
      ))}
    </section>
  );
}
