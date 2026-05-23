import { FaArrowRight } from "react-icons/fa";

const Demo = () => {
  return (
    <div className="bg-slate-50 py-24 text-center mt-16 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* MAIN HEADINGS */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-slate-800 leading-tight">
          Let’s build something
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-green-500 mt-2 mb-10">
          remarkable together.
        </h2>

        {/* CTA BUTTON */}
        <a
          href="#"
          className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 shadow-lg shadow-green-500/20"
        >
          <span>Get a Demo</span>
          <FaArrowRight
            className="transform group-hover:translate-x-1 transition-transform duration-200 text-sm"
            size={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Demo;
