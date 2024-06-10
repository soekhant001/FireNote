import React from "react";

const LoadingEffect = () => {
  return (
    <section>
      <div className="bg-stone-300 px-6 py-4 rounded-md mb-4 flex gap-3 items-center text-xl animate-pulse">
        <div className="rounded-full bg-slate-200 h-5 w-10"></div>
        <div className="h-3 bg-slate-200 rounded w-60"></div>
      </div>
      <div className="bg-slate-400 px-6 py-4 rounded-md mb-4 flex gap-3 items-center text-xl animate-pulse">
        <div className="rounded-full bg-slate-200 h-5 w-10"></div>
        <div className="h-3 bg-slate-200 rounded w-60"></div>
      </div>
      <div className="bg-slate-400 px-6 py-4 rounded-md mb-4 flex gap-3 items-center text-xl animate-pulse">
        <div className="rounded-full bg-slate-200 h-5 w-10"></div>
        <div className="h-3 bg-slate-200 rounded w-60"></div>
      </div>
      <div className="bg-slate-400 px-6 py-4 rounded-md mb-4 flex gap-3 items-center text-xl animate-pulse">
        <div className="rounded-full bg-slate-200 h-5 w-10"></div>
        <div className="h-3 bg-slate-200 rounded w-60"></div>
      </div>
    
    </section>
  );
};

export default LoadingEffect;
