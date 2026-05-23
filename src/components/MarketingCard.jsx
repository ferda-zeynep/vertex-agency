import { FaArrowRight } from "react-icons/fa";

export const MarketingCardComponent = ({ imgSrc, description }) => {
  return (
    <div className="relative group mb-16 flex flex-col items-center">
      {/* CARD IMAGE */}
      <img
        className="h-64 w-full max-w-sm rounded-lg object-cover shadow-md"
        src={imgSrc}
        alt="Blog post thumbnail"
      />

      {/* FLOATING TEXT CONTENT CARD */}
      <div className="bg-slate-50 w-[85%] max-w-[280px] absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center p-5 rounded-xl shadow-lg border border-slate-100/50 transition-all duration-300 group-hover:-translate-y-1">
        <p className="text-sm font-medium text-slate-700 leading-snug h-12 overflow-hidden">
          {description}
        </p>

        {/* INTERACTIVE READ MORE LINK */}
        <div className="mt-4 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm cursor-pointer">
          <span>Read More</span>
          <FaArrowRight
            className="transform group-hover:translate-x-1 transition-transform duration-200 text-xs"
            size={14}
          />
        </div>
      </div>
    </div>
  );
};
