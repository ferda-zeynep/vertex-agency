import { FaArrowRight } from "react-icons/fa";

const Tim = () => {
  return (
    <div className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* LEFT COLUMN: CUSTOMER / BRAND IMAGE */}
          <div className="w-full lg:w-1/2 p-4 flex justify-center">
            <img
              className="w-full max-w-md h-auto object-contain rounded-2xl shadow-md"
              src="/assets/photo4.png"
              alt="Vertex Agency Client Success Story"
            />
          </div>

          {/* RIGHT COLUMN: TESTIMONIAL CONTENT */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8">
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl">
                "Working with Vertex Agency completely transformed our digital
                ecosystem. Their dedication to engineering velocity and fluid UI
                components allowed us to automate our global membership
                operations flawlessly. We reduced our operational latency by 40%
                within the very first month of deployment."
              </p>

              {/* CLIENT CREDENTIALS */}
              <h4 className="mt-6 text-lg font-bold text-green-600 tracking-tight">
                Tim Smith
              </h4>
              <p className="text-sm text-neutral-400 font-medium mt-1">
                British Dragon Boat Racing Association
              </p>

              {/* RESPONSIVE BRAND INTEGRATION LAYER */}
              <div className="mt-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200/60">
                {/* SMALL CLIENT LOGOS GRID */}
                <div className="flex flex-wrap items-center justify-center gap-4 opacity-50">
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo1.svg"
                    alt="Partner 1"
                  />
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo2.svg"
                    alt="Partner 2"
                  />
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo3.svg"
                    alt="Partner 3"
                  />
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo4.svg"
                    alt="Partner 4"
                  />
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo5.svg"
                    alt="Partner 5"
                  />
                  <img
                    className="h-6 w-auto object-contain"
                    src="/assets/Logo6.svg"
                    alt="Partner 6"
                  />
                </div>

                {/* INTERACTIVE LINK */}
                <a
                  href="#"
                  className="group flex items-center gap-2 text-green-600 font-bold text-sm whitespace-nowrap hover:text-green-700 transition-colors cursor-pointer"
                >
                  <span>Meet all customers</span>
                  <FaArrowRight
                    className="transform group-hover:translate-x-1 transition-transform duration-200 text-xs"
                    size={14}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tim;
