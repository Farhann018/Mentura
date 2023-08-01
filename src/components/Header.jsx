import React from "react";
import LogoH from "./LogoH";


export default function Header({ className }) {
    return (
        <section>
            <div className={" bg-[#71bed0] w-full p-4" + (className !== undefined ? " " + className : "")}>
                <div className="mx-10">
                    <div className="flex justify-between">
                        <div className="flex items-center text-center">
                            <LogoH className=""/>
                            <span className="text-lg font-medium">
                                Mentaura
                            </span>
                        </div>
                        <div className="flex space-x-10 text-lg font-medium items-center text-center">
                            <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                Home
                            </div>
                            <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                Screening Test
                            </div>
                            <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                About us
                            </div>
                        </div>
                        <div className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer text-lg font-medium items-center text-center">
                            Community
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
