export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-28 px-6 md:px-16 overflow-hidden">
      {/* SKELETON HERO SECTION */}
      <div className="w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-12 mb-20 animate-pulse">
        <div className="flex-1 space-y-6 w-full">
          {/* Title Lines */}
          <div className="space-y-4">
            <div className="h-14 sm:h-20 w-3/4 bg-gray-200 rounded-2xl"></div>
            <div className="h-14 sm:h-20 w-1/2 bg-[#ff2d2d]/20 rounded-2xl"></div>
          </div>
          {/* Subtitle */}
          <div className="space-y-3 pt-4">
            <div className="h-5 w-5/6 bg-gray-200 rounded-lg"></div>
            <div className="h-5 w-2/3 bg-gray-200 rounded-lg"></div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <div className="h-14 w-40 bg-black/10 rounded-full border border-black/5"></div>
            <div className="h-14 w-48 bg-black/10 rounded-full border border-black/5"></div>
          </div>
        </div>
        {/* Hero Image / Video Box */}
        <div className="flex-1 w-full">
          <div className="aspect-video lg:aspect-[4/3] w-full bg-gradient-to-br from-gray-200 to-gray-100 rounded-[2rem] border border-black/5"></div>
        </div>
      </div>

      {/* SKELETON GRID SECTION (Matches features / use cases cards) */}
      <div className="w-full max-w-[90rem] mx-auto pb-20 animate-pulse">
        <div className="mb-10 space-y-4">
          <div className="h-10 w-1/3 sm:w-1/4 bg-gray-200 rounded-xl"></div>
          <div className="h-4 w-1/4 sm:w-1/6 bg-gray-200 rounded-lg"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col rounded-2xl border border-white/10 bg-black/90 p-6 min-h-[280px] shadow-lg">
              {/* Icon Box */}
              <div className="mb-6 h-12 w-12 rounded-xl bg-gray-700/50"></div>
              {/* Title */}
              <div className="h-8 w-2/3 bg-gray-700/50 rounded-lg mb-5"></div>
              {/* Description */}
              <div className="space-y-3 mt-2">
                <div className="h-4 w-full bg-gray-700/50 rounded"></div>
                <div className="h-4 w-full bg-gray-700/50 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-700/50 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
