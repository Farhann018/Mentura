import React from "react";

export default function DepressionImg({ className }){
    return(
        <section>
             <div className={"flex justify-center" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[12rem] object-fill" src="/images/Depression.png" alt="Banner" />
            </div>
        </section>
    )
}