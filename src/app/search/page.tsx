import { Metadata } from "next";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Results from "./Results";
import Seo from "@/components/Seo";

export const metadata: Metadata = {
  title: "Search Profiles | Torre Profiles",
  description: "Search people and professionals using Torre API profiles.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params?.q ?? "";

  return (
    <main className="flex flex-col gap-6 container mx-auto p-6">
      <Seo
        title="Search Profiles"
        description="Find professionals by name or profession on Torre."
      />
      <SearchBar defaultQuery={query} />
      <Suspense
        key={query}
        fallback={
          <div className="flex items-center justify-center py-10">
            <LoadingSpinner className="h-8 w-8 text-primary" />
            <span className="ml-3 text-muted-foreground">
              Fetching results...
            </span>
          </div>
        }
      >
        <Results query={query} />
      </Suspense>
    </main>
  );
}
