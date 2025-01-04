export default function Loading() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Skeleton */}
          <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-gray-200 animate-pulse" />

          {/* Product Info Skeleton */}
          <div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-full mb-8 animate-pulse" />

            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
            </div>

            <div className="mb-8">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 rounded w-full animate-pulse"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Gallery Skeleton */}
        <div className="mt-16">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-4/3 rounded-lg overflow-hidden bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
