import React from "react";

export default function Deisgn({ className }){
    return(
        <section>
             <div className={"flex mt-[9rem]" + (className !== undefined ? " " + className : "")}>
                <img className="h-[9rem] w-fit" src="/images/design.png" alt="Banner" />
            </div>
        </section>
    )
}