const System = () => {
  return (
    <div className="relative mt-24 py-16 bg-white border-b border-slate-100 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-800 tracking-wide my-6 leading-tight max-w-4xl mx-auto">
            Manage your entire community in a single system
          </h2>
          <p className="mt-4 text-base lg:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Who is Vertex Agency solutions engineered for?
          </p>
        </div>

        {/* SERVICES / SYSTEM CARD GRID */}
        <div className="w-full pt-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* CARD 1: ENTERPRISE ORGANISATIONS */}
            <div className="w-full bg-white shadow-xl hover:shadow-2xl flex flex-col p-6 my-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100/50">
              <img
                className="w-16 mx-auto mt-[-4rem] bg-green-500 p-3 rounded-xl shadow-md shadow-green-500/20"
                src="/assets/Icon1.png"
                alt="Enterprise solutions icon"
              />
              <h3 className="text-xl font-bold text-slate-800 text-center py-6">
                Enterprise Platforms
              </h3>
              <div className="text-center font-normal">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Our customized cloud workflows provide full end-to-end
                  automation of data streaming, user access control, and
                  internal team operations.
                </p>
              </div>
            </div>

            {/* CARD 2: DIGITAL ASSOCIATIONS */}
            <div className="w-full bg-white shadow-xl hover:shadow-2xl flex flex-col p-6 my-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100/50">
              <img
                className="w-16 mx-auto mt-[-4rem] bg-green-500 p-3 rounded-xl shadow-md shadow-green-500/20"
                src="/assets/Icon2.png"
                alt="Associations solutions icon"
              />
              <h3 className="text-xl font-bold text-slate-800 text-center py-6">
                Global Associations
              </h3>
              <div className="text-center font-normal">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Engineered to unify distributed international networks,
                  ensuring robust performance monitoring and seamless
                  multi-tenant architecture.
                </p>
              </div>
            </div>

            {/* CARD 3: CLUBS & GROUPS */}
            <div className="w-full bg-white shadow-xl hover:shadow-2xl flex flex-col p-6 my-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100/50">
              <img
                className="w-16 mx-auto mt-[-4rem] bg-green-500 p-3 rounded-xl shadow-md shadow-green-500/20"
                src="/assets/Icon3.png"
                alt="Clubs and groups icon"
              />
              <h3 className="text-xl font-bold text-slate-800 text-center py-6">
                Syndicates & Clubs
              </h3>
              <div className="text-center font-normal">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Tailored UI systems crafted for high-tier dynamic communities,
                  featuring real-time event synchronization and native payment
                  processing layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
