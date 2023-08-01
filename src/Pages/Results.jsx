import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Result() {
    return (
        <section>
            <Header className=""/>
            <div className="h-screen w-full bg-gradient-to-b from-[#71BED0] to-[#FDE7EA] ...">
                <div className="max-w-[100rem] mx-auto py-20">
                    <div className="flex justify-between w-full">
                        <div className="w-[23rem] h-auto box p-8 rounded-xl ">
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-600">
                                        No Issue
                                    </div>
                                    <div>
                                        20%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23rem] h-auto box p-8 rounded-xl ">
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-600">
                                        Little Bit
                                    </div>
                                    <div>
                                        40%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23rem] h-auto box p-8 rounded-xl ">
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-600">
                                        Medium
                                    </div>
                                    <div>
                                        50%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[23rem] h-auto box p-8 rounded-xl ">
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-600">
                                        Severe
                                    </div>
                                    <div>
                                        20%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start w-full mt-14 space-x-12">
                        <div className="box w-[74rem] h-auto p-8">
                                knsf
                        </div>
                        <div className="box h-auto w-[20rem] p-8 whitespace-pre-line overflow-y-auto text-start">
                            <span className="font-bold">
                                Childhood Experiences: 
                            </span>
                            Adverse childhood experiences, such as abuse, neglect, or loss of a loved one, can have lasting effects on mental health in later life.   
                            <span className="font-bold">
                                Social Support:
                            </span>
                                 The presence of a strong support system, including friends, family, and community, can positively impact mental health and provide resilience during challenging times.
                            <span className="font-bold">
                            Stress: 
                            </span>
                            Chronic stress can lead to mental health issues, as it affects the brain's chemistry and can trigger like anxiety and depression.
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