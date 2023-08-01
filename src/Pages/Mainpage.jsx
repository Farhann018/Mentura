import Header from "../components/Header";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import NextPrev from "../components/NextPrev";


export default function UserDash() {
    return (
        <section className="bg-black">
            <Header className=""/>
            <div className="h-screen w-full bg-gradient-to-b from-[#71BED0] to-[#FDE7EA] ...">
                <div className="flex flex-col justify-center h-[50rem] items-center w-full ">
                    <Bar className=""/>
                    <div className="form w-1/2 h-auto p-8">
                        <div className="flex justify-start text-center mb-5">
                            <div className="font-medium text-3xl">
                                How do you like to spend your free time? 
                            </div>
                        </div>
                        <div className=" ">
                            <div className="flex justify-between items-center my-32">
                                    <div className="flex p-5 bg-neutral-200 shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-neutral-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                        <div>
                                        With Family
                                        </div>
                                    </div>
                                    <div className="flex p-5 bg-neutral-200 shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-neutral-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                        <div>
                                        Playing Games
                                        </div>
                                    </div>
                                    <div className="flex p-5 bg-neutral-200 shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-neutral-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer">
                                        <div>
                                        Reading books
                                        </div>
                                    </div>
                                    <div className="flex p-5 bg-neutral-200 shadow-xl rounded-xl font-base text-xl text-center items-center space-x-5 hover:bg-neutral-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer ">
                                        <div>
                                        Hanging out with friends
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <NextPrev className=""/>
                       
                    
                    </div>
                </div>
            </div>
            <div className="bg-[#F8E5E9]">
                <Footer className=""/>
            </div>

        </section>
    );
}
