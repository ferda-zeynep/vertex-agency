const Pixelgrades = () => {
  return (
    <div className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* LEFT COLUMN: ILLUSTRATION */}
          <div className="w-full lg:w-1/2 p-4 flex justify-center">
            <img
              className="w-full max-w-md h-auto object-contain"
              src="/assets/photo2.png"
              alt="Vertex Agency Engineering Insights"
            />
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-slate-800 leading-tight">
                The unseen side of building tech ecosystems
              </h2>

              <p className="mt-6 text-base lg:text-lg text-neutral-500 leading-relaxed font-normal max-w-xl">
                For over three years, we have meticulously refined our software
                development lifecycle and cloud operations. At Vertex Agency, we
                don't just write code; we architect highly scalable web
                solutions that empower brands to manage millions of concurrent
                user operations without a single millisecond of degradation.
              </p>

              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-lg shadow-green-500/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pixelgrades;
