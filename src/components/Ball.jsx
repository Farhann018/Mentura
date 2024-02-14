import React from "react";

export default function Ball({ className }){
    return(
        <section>
             <div className={"flex justify-center" + (className !== undefined ? " " + className : "")}>
                <img className="h-[13em] w-auto" src="/images/ball.png" alt="Banner" />
            </div>
        </section>
    )
}