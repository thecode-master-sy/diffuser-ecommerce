"use-client";
import { BagIcon } from "@/components/bag-icon";
import { MakeWarmer } from "@/components/make-warmer";
import { SearchIcon } from "@/components/search-icon";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen z-1 text-white grid grid-rows-[auto_1fr]">
      <nav className="uppercase border-b border-white/10 flex justify-between items-center px-4 py-2 relative z-1">
        <div className="flex items-center gap-7">
          <h2 className="font-helvetica-neue uppercase relative font-medium text-xl">
            Diffuser
          </h2>
        </div>
        <ul className="hidden md:flex navigation-links text-caps">
          <Link href="/shop">
            <li>shop</li>
          </Link>
          <Link href="/collections">
            <li>discover collections</li>
          </Link>
          <Link href="/guides">
            <li>guides</li>
          </Link>
          <Link href="/contact">
            <li>scents</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>

          <Link href="/contact">
            <li>contact</li>
          </Link>
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <SearchIcon />
            <BagIcon />
          </div>

          <button className="bg-white/10 py-1 px-2 cursor-pointer text-caps uppercase">
            login
          </button>
        </div>
      </nav>

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full  bg-foreground/20"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-[center_bottom] -z-1"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your content goes here */}
      <div className="relative z-1 grid items-end px-4 pb-4 w-full">
        <div>
          <div>
            <h1 className="hidden md:block text-white font-helvetica-neue  uppercase text-h1 -tracking-[0.05em] leading-[1.05]">
              Discover Our <br />
              New Collections
            </h1>
            <h1 className="md:hidden text-white font-helvetica-neue  uppercase text-h1 -tracking-[0.05em] leading-[1.05]">
              Discover Our Collections
            </h1>
          </div>

          <div className="mt-20 md:flex justify-between w-full">
            <div className="flex gap-4">
              <div className="featured-product active">
                <Image
                  src="/images/reed-diffuser.png"
                  alt="Reed Diffuser"
                  width={200}
                  height={200}
                />
              </div>
              <div className="featured-product">
                <Image
                  src="/images/white-diffuser.png"
                  alt="white Diffuser"
                  width={200}
                  height={200}
                />
              </div>
              <div className="featured-product">
                <Image
                  src="/images/woody-diffuser.png"
                  alt="woody Diffuser"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <button className="bg-card text-foreground w-full md:w-auto min-w-[300px] px-4 py-4 gap-2 cursor-pointer">
              <div className="relative">
                <div className="text-left">
                  <h3 className="text-foreground text-left text-h3 uppercase">
                    The white reed
                  </h3>
                  <p className="font-light">Air scented Reed Collections</p>
                </div>

                <div className="absolute right-0 top-0">
                  <BagIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
