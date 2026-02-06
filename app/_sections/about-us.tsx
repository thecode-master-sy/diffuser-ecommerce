import { ArrowRightUp } from "@/components/arrow-right-up";

export default function AboutSection() {
  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[center_bottom] -z-1"
      >
        <source src="/about-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative space-y-20">
        <div className="space-y-2">
          <h1 className="text-h1 uppercase text-white relative font-helvetica-neue -tracking-[0.05em] leading-[1.05]">
            For the love <br /> of Warmth
          </h1>

          <p className="text-white text-body">
            We seek to ground the modern home in sensory comfort.
            <br /> We design for the moments when the day slows down <br />
            and the soul seeks to settle. Welcome to a warmer way of living
          </p>
        </div>

        <button className="w-full justify-between flex bg-white cursor-pointer py-4 px-8 items-center uppercase text-caps">
          <span>see more about our brand</span>
          <ArrowRightUp />
        </button>
      </div>
    </div>
  );
}
