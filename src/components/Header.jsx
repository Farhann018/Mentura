import React from "react";
import { Link } from "react-router-dom";
import LogoH from "./LogoH";


export default function Header({ className = undefined }) {
    return (
        <section className="absolute top-0 w-full left-0">
            <div className={" bg-primary w-full p-4" + (className !== undefined ? " " + className : "")}>
                <div className="mx-24">
                    <div className="flex justify-between items-center">
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
                            <Link to="/start" className="h-fit bg-[#FFA654] hover:bg-[#B1A79D] hover:text-black text-xl text-white font-bold py-1 px-8 rounded-lg transition-colors tracking-wider">
                                Get Started
                            </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
