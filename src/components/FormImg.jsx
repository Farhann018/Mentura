import React from "react"

export default function FormImg({ className }) {
    return(
        <section>
            <div className={"p" + (className !== undefined ? " " + className : "")}>
                <img className="h-auto w-[30rem] object-fill rounded-xl" src="/images/Form.png" alt="Form" />
            </div>
        </section>
    )
}
