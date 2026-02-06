"use client";

import Image from "next/image";

export default function DiscoverDiffusers() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <h1 className="uppercase text-h2 -tracking-[0.03em]">
        Discover Diffsuers
      </h1>
      <div className="mt-10 space-y-7">
        <div className="flex uppercase text-caps flex-wrap">
          <span className="tab active">Aroma diffusers</span>
          <span className="tab">Essiential oils</span>
          <span className="tab">Flame Diffusers</span>
          <span className="tab">Reed diffusers</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="card px-4 pt-4 pb-6 bg-card space-y-7 w-full min-w-[300px]">
            <div className="card-top flex justify-between">
              <span className="text-foreground/50 uppercase text-caps">
                best sellers
              </span>

              <span className="text-h3">$145</span>
            </div>

            <div className="card-body">
              <div className="flex justify-center">
                <Image
                  src="/images/reed-diffuser.png"
                  className="w-[100px] aspect-1/1.5"
                  alt="Reed Diffuser"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="card-footer space-y-4">
              <div className="text-center">
                <h3 className="text-h3 uppercase">Reed Diffuser</h3>
                <span className="font-light">Air scented diffuser</span>
              </div>

              <button className="mx-auto text-caps btn btn-primary uppercase bg-white px-8 py-2 cursor-pointer  rounded-full flex justify-center items-center">
                Quick add
              </button>
            </div>
          </div>
          <div className="card px-4 pt-4 pb-6 bg-card space-y-7 w-full  min-w-[300px]">
            <div className="card-top flex justify-between">
              <span className="text-foreground/50 uppercase text-caps">
                best sellers
              </span>

              <span className="text-h3">$85</span>
            </div>

            <div className="card-body">
              <div className="flex justify-center">
                <Image
                  src="/images/white-diffuser.png"
                  className="w-[85px] aspect-1/1.5"
                  alt="Reed Diffuser"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="card-footer space-y-4">
              <div className="text-center">
                <h3 className="text-h3 uppercase">Reed Diffuser</h3>
                <span className="font-light">Air scented diffuser</span>
              </div>

              <button className="mx-auto text-caps btn btn-primary uppercase bg-white px-8 py-2 cursor-pointer  rounded-full flex justify-center items-center">
                Quick add
              </button>
            </div>
          </div>
          <div className="card px-4 pt-4 pb-6 bg-card space-y-7 w-full min-w-[300px]">
            <div className="card-top flex justify-between">
              <span className="text-foreground/50 uppercase text-caps">
                best sellers
              </span>

              <span className="text-h3">$100</span>
            </div>

            <div className="card-body">
              <div className="flex justify-center">
                <Image
                  src="/images/woody-diffuser.png"
                  alt="Reed Diffuser"
                  className="w-[100px] aspect-[1/1.5]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="card-footer space-y-4">
              <div className="text-center">
                <h3 className="text-h3 uppercase">Reed Diffuser</h3>
                <span className="font-light">Air scented diffuser</span>
              </div>

              <button className="mx-auto btn btn-primary text-caps uppercase bg-white px-8 py-2 cursor-pointer  rounded-full flex justify-center items-center">
                Quick add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
