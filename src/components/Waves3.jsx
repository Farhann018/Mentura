import React from "react";

export default function Waves3({ className }){
    return(
        <section>
             <div className={"flex bg-[#E5E5E5] " + (className !== undefined ? " " + className : "")}>
                <img className="h-[8rem] md:h-[25rem] w-auto" src="/images/waves3.png" alt="Banner" />
            </div>
        </section>
    )
}