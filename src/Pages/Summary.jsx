import { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


export default function Summary() {
    return (
        <section>
            <Header className=""/>
            <div class="h-screen w-full bg-gradient-to-b from-[#71BED0] to-[#FDE7EA] ...">
                <div className="max-w-[100rem] mx-auto py-20">
                   <div className="flex justify-between">
                        <div className="flex flex-col box w-[30rem] p-8 space-y-5">
                            <div className="flex justify-between">
                                <div className="font-medium text-lg">
                                Overview
                                </div>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="5" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="15" cy="10" r="2"/></g></svg>
                                </div>
                            </div>
                            <div className="w-full bg-[#D2E1F9] p-3 rounded-2xl ">
                                <div className="flex justify-between">
                                    <div className="flex items-center text-center space-x-2 font-medium">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
                                        </div>
                                        <div>
                                            Issue of self Esteem
                                        </div>
                                    </div>
                                    <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                                            1500
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#C3C3C3] p-3 rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex items-center text-center space-x-2 font-medium">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
                                        </div>
                                        <div>
                                            Anxiety Problems
                                        </div>
                                    </div>
                                    <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                                            1500
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#F7F9D2] p-3 rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex items-center text-center space-x-2 font-medium">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
                                        </div>
                                        <div>
                                            Depressive Problems
                                        </div>
                                    </div>
                                    <div className="py-1 px-5 text-base text-center bg-gray-500 rounded-2xl">
                                            1500
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        
                        
                    </div> 
                   
                </div>

            </div>
            <div className="bg-[#F8E5E9]">
                <Footer className=""/>
            </div>
        </section>
    )
}