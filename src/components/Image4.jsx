import React from "react";

export default function Image4({ className }){
    return(
        <section>
             <div className={"" + (className !== undefined ? " " + className : "")}>
                <img className="h-[20rem] w-[56rem]" src="/images/image 4.png" alt="Banner" />
            </div>
        </section>
    )
}