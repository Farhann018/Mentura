import React from "react"

export default function Img3({ className }) {
    return(
        <section>
            <div className={"p" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[35rem] object-fill" src="/images/Img3.png" alt="Img3" />
            </div>
        </section>
    )
}
