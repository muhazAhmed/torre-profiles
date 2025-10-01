import SearchResultsSkeleton from "@/components/SearchResultsSkeleton";

export default function Loading() {
  return (
    <main className="flex flex-col gap-6 container mx-auto p-6">
      <SearchResultsSkeleton />
    </main>
  );
}
