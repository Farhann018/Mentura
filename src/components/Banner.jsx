import React from "react"

export default function Banner({ className }) {
    return(
        <section>
            <div className={"p" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[35rem] object-fill" src="/images/Banner.png" alt="Banner" />
            </div>
        </section>
    )
}
