import React from "react";
import DepressionImg from "./DepressionImg";
import StressImg from "./StressImg";
import AnxietyImg from "./AnxietyImg";
import SelfEstImg from "./SelfEstImg";

export default function Element({ className }){
    return(
        <section>
            <div className="flex justify-center space-x-16">
                <div className="p-4 w-[14rem] h-[18rem] bg-white rounded-3xl text-center">
                    <div className="w-full h-[12rem] bg-[#B6ACEE] rounded-2xl">
                        <DepressionImg className=""/>
                    </div>
                    <div className=" mt-4 text-base">
                        Depression
                    </div>
                </div>
                <div className="p-4 w-[14rem] h-[18rem] bg-white rounded-3xl text-center">
                    <div className="w-full h-[12rem] bg-[#F47793] rounded-2xl">
                        <StressImg className=""/>
                    </div>
                    <div className=" mt-4 text-base">
                        Stress
                    </div>
                </div>
                <div className="p-4 w-[14rem] h-[18rem] bg-white rounded-3xl text-center">
                    <div className="w-full h-[12rem] bg-[#FDB33F] rounded-2xl">
                        <AnxietyImg className=""/>
                    </div>
                    <div className=" mt-4 text-base">
                        Anxiety
                    </div>
                </div>
                <div className="p-4 w-[14rem] h-[18rem] bg-white rounded-3xl text-center">
                    <div className="w-full h-[12rem] bg-[#A7CFD8] rounded-2xl">
                        <SelfEstImg className=""/>
                    </div>
                    <div className=" mt-4 text-base">
                        Self Esteem
                    </div>
                </div>
            </div>
        </section>
    )
}