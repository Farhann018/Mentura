import React from "react";

export default function LogoF({ className }) {
    return(
        <section>
            <div className={"" + (className !== undefined ? " " + className : "")}>
            
                <img className="h-auto w-[3rem] object-cover" src="/images/logo.png" alt="logo" />
            </div>
        </section>
    )
}
