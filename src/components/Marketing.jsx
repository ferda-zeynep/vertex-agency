import photo5 from "../../public/assets/photo5.png";
import photo6 from "../../public/assets/photo6.png";
import photo7 from "../../public/assets/photo7.png";
import { MarketingCardComponent } from "./MarketingCard";

const Marketing = () => {
  const cardData = [
    {
      imgSrc: photo5,
      description:
        "Creating streamlined safeguarding processes with cutting-edge UI design.",
    },
    {
      imgSrc: photo6,
      description:
        "How to boost digital community engagement by 150% in three months.",
    },
    {
      imgSrc: photo7,
      description:
        "The modern framework guide: Why design velocity dictates market retention.",
    },
  ];

  return (
    <div className="relative mt-24 py-16 bg-white border-b border-slate-100 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TEXT CONTENT HEADER */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-800 tracking-wide my-6 leading-tight">
            Caring is the new marketing
          </h3>
          <p className="mt-4 text-base lg:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            The Vertex Agency blog is the best place to read about the latest
            digital product insights, engineering trends, and user experience
            paradigms. See how modern brands are scaling their digital
            transformation effortlessly.
          </p>
        </div>

        {/* RESPONSIVE CARD CONTAINER */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <MarketingCardComponent
              key={index}
              imgSrc={card.imgSrc}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
