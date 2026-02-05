"use client";

export const MakeWarmer = () => {
  return (
    <div className="flex items-center gap-2 font-mono">
      <button className="w-[20px] h-[15px] p-1 border border-white flex items-center justify-center">
        <span className="inline-block w-full h-full bg-white" />
      </button>
      <span className="uppercase tracking-wider">Make Warmer</span>
    </div>
  );
};
