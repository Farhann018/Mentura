import React from "react";

export default function Waves({ className }){
    return(
        <section>
             {/* <div className={"flex justify-center" + (className !== undefined ? " " + className : "")}>
                <img className="h-[30rem] w-full object-cover" src="/images/waves.png" alt="Banner" />
            </div> */}
            <div className={"flex justify-center bg-primary " + (className !== undefined ? className : "") + " h-[55rem] bg-cover bg-no-repeat bg-center"} style={{ backgroundImage: "url('/images/waves.png')" }}>
            </div>

        </section>
    )
}