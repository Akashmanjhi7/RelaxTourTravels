'use client';

const TripCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item.title)}
      className="group relative h-96 overflow-hidden rounded-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-500 shadow-xl"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 z-10" />

      <div 
        className="absolute inset-0 bg-linear-to-t from-yellow-600/60 via-yellow-500/20 to-transparent z-10
                   transform translate-y-full transition-transform duration-700 ease-in-out
                   group-hover:translate-y-0 pointer-events-none"
      />

      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        {/* Title with Underline Effect */}
        <h4 className="relative inline-block text-2xl font-serif text-white mb-2 drop-shadow-md
                       after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:w-0 after:h-[2px] after:bg-yellow-500 
                       after:transition-all after:duration-500 group-hover:after:w-full">
          {item.title}
        </h4>

        <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 drop-shadow-sm">
          {item.desc}
        </p>

        {/* Get Enquiry with Animated Underline */}
        <span className="relative text-yellow-400 text-xs font-bold uppercase tracking-widest pb-1
                         before:content-[''] before:absolute before:bottom-0 before:left-1/2 
                         before:w-0 before:h-[1px] before:bg-yellow-500 before:transition-all 
                         before:duration-300 before:-translate-x-1/2 group-hover:before:w-full group-hover:text-yellow-300">
          Get Enquiry
        </span>
      </div>
    </div>
  );
};

export default TripCard;