import React from "react";
import Img2 from "./Img2";

export default function BodyMain({ className }) {
  return (
    <section>
      <div className="flex justify-between  mt-28">
        <div>
          <Img2 className="" />
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex w-[32rem] text-4xl font-base items-center leading-relaxed text-gray-900">
            Empower Your Mind, Embrace Your Worth, Rising Above Depression,
            Stress, Low Self-Esteem, and Anxiety.
          </div>
          <div className="flex space-x-4">
            <div>
              <button className="bg-[#FFA654] hover:bg-[#B1A79D] hover:text-black text-lg text-white font-bold py-1 px-8 rounded-lg transition-all ease-in-out delay-150 tracking-wider">
                Get started
              </button>
            </div>
            <div className="flex text-center items-center text-lg font-medium tracking-wider">
              Explore More
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
