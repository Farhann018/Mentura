import React from "react"

export default function LogoH({ className }) {
    return(
        <section>
            <div className={"p" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[4rem] object-cover" src="/images/logo.png" alt="logo" />
            </div>
        </section>
    )
}
