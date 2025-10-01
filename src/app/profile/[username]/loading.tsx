export default function Loading() {
  return (
    <main className="container mx-auto p-6 flex flex-col gap-6">
      <div className="glass shadow-lg border border-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 animate-pulse">
        <div className="w-28 h-28 rounded-full bg-muted" />
        <div className="flex flex-col gap-3 flex-1">
          <div className="h-6 w-40 bg-muted rounded" />
          <div className="h-4 w-60 bg-muted rounded" />
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="flex gap-2 mt-2">
            <div className="h-4 w-16 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
          </div>
        </div>
      </div>

      <div className="glass shadow-md border border-border rounded-xl p-6 animate-pulse">
        <div className="h-5 w-32 bg-muted rounded mb-4" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-6 w-20 bg-muted rounded-full" />
          ))}
        </div>
      </div>
    </main>
  );
}
