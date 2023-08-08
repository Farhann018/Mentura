import React from "react";

export default function StressImg({ className }){
    return(
        <section>
             <div className={"flex justify-center" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[12rem] object-fill" src="/images/Stress.png" alt="Banner" />
            </div>
        </section>
    )
}