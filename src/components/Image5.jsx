import React from "react";

export default function Image5({ className }){
    return(
        <section>
             <div className={"" + (className !== undefined ? " " + className : "")}>
                <img className="h-[20rem] w-auto" src="/images/image 5.png" alt="Banner" />
            </div>
        </section>
    )
}