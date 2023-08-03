import React from "react";
import Banner from "./Banner";

export default function BodyMain({ className }) {
    return (
        <section>
            <div className="flex justify-between  pt-20">
                <div className="flex flex-col space-y-3 mt-16">
                    <div className="text-5xl font-semibold text-gray-800 tracking-wider">
                        Mental health,
                    </div>
                    <div className="text-5xl font-semibold text-gray-800 tracking-wider">
                        redefining for
                    </div>
                    <div className="flex text-5xl space-x-4 font-semibold text-gray-800 tracking-wider">
                        <div>students</div>
                        <div className="flex items-center text-center">
                            <svg className="text-[#917AEB]" xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 256 256"><path fill="currentColor" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" /></svg>
                        </div>
                    </div>
                    <div className="text-gray-500 text-base w-[25rem]">
                        Empower your journey with Mentaura,the genius app that unlocks your full potential. Crush stress,unleash brillance, and soar to new heights
                    </div>
                    <div className="flex justify-start space-x-6">
                        <div>
                            <button className="bg-[#FFA654] hover:bg-[#B1A79D] hover:text-black text-xl text-white font-bold py-1 px-8 rounded-lg transition-all ease-in-out delay-150 tracking-wider">
                                Start
                            </button>
                        </div>
                        <div className="flex text-center items-center text-lg font-bold tracking-wider">
                            Discover
                        </div>
                    </div>

                </div>
                <div>
                    <Banner className="" />

                </div>
            </div>
        </section>
    )
}