import React from "react"

export default function Img2({ className }) {
    return(
        <section>
            <div className={"p" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[32rem] object-fill" src="/images/Img2.png" alt="Img2" />
            </div>
        </section>
    )
}
