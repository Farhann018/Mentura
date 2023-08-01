import React from "react";

export default function Body({ className }) {
    return (
        <section>
            <div className={" bg-white dark:bg-[#222A36] w-full p-8" + (className !== undefined ? " " + className : "")}>
                
            </div>
        </section>
    )
}
