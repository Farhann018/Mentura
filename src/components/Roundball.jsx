import React from "react";

export default function Roundball({ className }){
    return(
        <section>
             <div className={"flex justify-center" + (className !== undefined ? " " + className : "")}>
                <img className="h-[30rem] w-auto" src="/images/round.png" alt="Banner" />
            </div>
        </section>
    )
}