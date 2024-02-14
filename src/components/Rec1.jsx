import React from "react";

export default function Rec1({ className }){
    return(
        <section>
             <div className={"flex " + (className !== undefined ? " " + className : "")}>
                <img className="h-[3rem] w-auto" src="/images/rec.png" alt="Banner" />
            </div>
        </section>
    )
}