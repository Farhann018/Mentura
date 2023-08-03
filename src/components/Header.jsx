import React from "react";
import LogoH from "./LogoH";


export default function Header({ className }) {
    return (
        <section>
            <div className={" bg-primary w-full p-4" + (className !== undefined ? " " + className : "")}>
                <div className="mx-24">
                    <div className="flex justify-between">
                        <div className="flex items-center text-center">
                            <LogoH className=""/>
                            <span className="text-lg font-bold mt-3">
                                Mentaura
                            </span>
                        </div>
                        <div className="flex space-x-10 text-base items-center text-center mt-3">
                            <div className="flex transition ease-in-out text-gray-600 font-medium delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-gray-800 ">
                                Screening Test
                            </div>
                            <div className="flex transition ease-in-out text-gray-600  font-medium delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-gray-800">
                                Home
                            </div>
                            <div className="flex transition ease-in-out text-gray-600 font-medium delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-gray-800">
                                About us
                            </div>
                        </div>
                        <div className="flex transition ease-in-out delay-150 text-gray-600 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer text-base font-medium items-center text-center hover:text-gray-800 mt-3">
                            Sign Up
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
