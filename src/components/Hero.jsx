const Hero = () => {
  return (
    <div className="border-neutral-800 pb-4 py-32 bg-slate-50">
      <div className="flex flex-wrap px-6 lg:px-24 max-w-7xl mx-auto items-center">
        {/* LEFT*/}
        <div className="w-full lg:w-2/4">
          <div className="font-semibold">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-wide mt-6 text-slate-800 leading-tight">
              Lessons and insights
            </h1>
            <div className="text-4xl lg:text-6xl font-bold text-green-500 mt-2">
              from digital growth
            </div>
            <div className="mt-8 text-lg text-neutral-500 font-normal leading-relaxed max-w-md">
              Where to expand your community and elevate your brand: complete
              web engineering or strategic social platforms?
            </div>
            <button className="bg-green-500 hover:bg-green-600 font-medium py-3 px-6 rounded-md mt-8 text-white transition-colors shadow-lg shadow-green-500/20">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/4 lg:p-8 mt-12 lg:mt-0">
          <div className="flex justify-center">
            <img
              className="w-full max-w-md h-auto object-contain"
              src="/assets/photo1.png"
              alt="Vertex Agency Analytics Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
