const Member = () => {
  return (
    <div className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-slate-800 leading-tight">
            Helping global brands{" "}
            <span className="text-green-500 block lg:inline">
              reinvent themselves
            </span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-neutral-500 font-normal leading-relaxed">
            We reached this milestones through continuous hard work, strategic
            innovation, and pure dedication.
          </p>
        </div>

        {/* RIGHT COLUMN: STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* STAT 1: MEMBERS */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100/50">
            <img
              className="h-12 w-12 object-contain"
              src="/assets/Icon4.svg"
              alt="Members count icon"
            />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                2,245,341
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Members
              </span>
            </div>
          </div>

          {/* STAT 2: CLUBS */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100/50">
            <img
              className="h-12 w-12 object-contain"
              src="/assets/Icon5.svg"
              alt="Clubs count icon"
            />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                46,328
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Clubs
              </span>
            </div>
          </div>

          {/* STAT 3: EVENT BOOKINGS */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100/50">
            <img
              className="h-12 w-12 object-contain"
              src="/assets/Icon6.svg"
              alt="Event bookings icon"
            />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                828,867
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Event Bookings
              </span>
            </div>
          </div>

          {/* STAT 4: PAYMENTS */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100/50">
            <img
              className="h-12 w-12 object-contain"
              src="/assets/Icon7.svg"
              alt="Payments tracking icon"
            />
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
                1,926,436
              </span>
              <span className="text-sm text-neutral-500 font-medium">
                Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
