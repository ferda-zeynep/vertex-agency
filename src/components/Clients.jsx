const Clients = () => {
  return (
    <div className="border-b border-slate-100 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TEXT CONTENT */}
        <h2 className="mt-16 text-center text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight">
          Our Clients
        </h2>
        <p className="mt-3 text-base lg:text-lg text-center text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Trusted by fast-growing startups and industry leaders worldwide.
        </p>

        {/* RESPONSIVE LOGO GRID */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:justify-between opacity-70">
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo1.svg"
            alt="Client Logo 1"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo2.svg"
            alt="Client Logo 2"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo3.svg"
            alt="Client Logo 3"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo4.svg"
            alt="Client Logo 4"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo5.svg"
            alt="Client Logo 5"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo6.svg"
            alt="Client Logo 6"
          />
          <img
            className="h-8 w-auto object-contain"
            src="/assets/Logo7.svg"
            alt="Client Logo 7"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
