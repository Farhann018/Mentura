import React from "react";

export default function Tri2({ className }){
    return(
        <section>
             <div className={"flex " + (className !== undefined ? " " + className : "")}>
                <img className="h-[4rem] w-auto" src="/images/tri2.png" alt="Banner" />
            </div>
        </section>
    )
}